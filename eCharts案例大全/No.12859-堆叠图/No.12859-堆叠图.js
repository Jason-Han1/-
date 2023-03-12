var data = [{
    name: '20~40岁',
    value: 40,
}, {
    name: '40~60岁',
    value: 30,
}, {
    name: '60岁以上',
    value: 20,
}, {
    name: '20岁以下',
    value: 10,
}]

var newSeries = [];
var color=['#ab7bff','#c09eff','#d7bfff','#d7bfff']
for (var i = 0; i < data.length; i++) {
    var arr = [];
    arr.push(data[i].value)

    newSeries.push({
        name: data[i].name,
        type: 'bar',
        stack: '总量',
        barWidth: 30,
        label: {
            normal: {
                show: true,
                color: '#fff',
                align: 'center',
                position: ['50%', '-110%'],
                formatter: function(params) {
                    var data = params.value
                    var name = params.name
                    return data + '\n' + data + '%' + '\n\n\n\n\n' + name
                }
            }
        },
        itemStyle: {
            color: color[i],
            barBorderRadius: 4,
            borderWidth: 1,
            borderColor: '#000'
        },
        data: [{
            name: data[i].name,
            value: data[i].value,
        }]
    })

}
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    tooltip: {
        show: false
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        show: false
    },
    yAxis: {
        type: 'category',
        data: ['周一'],
        show: false
    },

    series: newSeries
};