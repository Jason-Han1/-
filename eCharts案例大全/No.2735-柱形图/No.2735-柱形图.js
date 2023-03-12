var category = [];
var dottedBase = +new Date();
var lineData = [];
var barData = [];

for (var i = 0; i < 20; i++) {
    var date = new Date(dottedBase += 3600 * 24 * 1000);
    category.push([
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate()
    ].join('-'));
    var b = Math.random() * 200;
    var d = Math.random() * 200;
    barData.push(b)
    lineData.push(d + b);
}


// option
option = {
    backgroundColor: '#0f375f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    xAxis: {
        data: category,
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        }
    },
    yAxis: {
        splitLine: {show: false},
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        }
    },
    series: [{
        name: 'bar',
        type: 'bar',
        barWidth: 20,
        itemStyle: {
            barBorderRadius: 4,
            color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                    {offset: 0, color: '#F759AA'},
                    {offset: 1, color: '#FFAEDB'}
                ]
            )
        },
        data: barData
    }]
};