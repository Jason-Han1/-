function randomData() {
    now = new Date(+now + oneDay);
    value = value + Math.random() * 21 - 10;
    return {
        date: [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
        series: Math.round(value)

    }
}

var data = {
    series: [],
    date: []
};
var now = +new Date(1997, 9, 3);
var oneDay = 24 * 3600 * 1000;
var value = Math.random() * 1000;
for (var i = 0; i < 1000; i++) {
    var randomDatas = randomData()
    data.series.push(randomDatas.series);
    data.date.push(randomDatas.date);
}

option = {
    title: {
        text: '动态数据 + 时间坐标轴'
    },
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            params = params[0];
            var date = new Date(params.name);
            console.log(params)
            return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value;
        },
        axisPointer: {
            animation: false
        }
    },
    xAxis: [{
        type: 'value',
        show: false
    }, {
        type: 'value',
        scale: true,
        boundaryGap: [0, '100%'],
        splitLine: {
            show: false
        },
        axisTick: {
            inside: true,
        },
        axisLabel: {
            rotate: 90,
            inside: true,
            formatter: '{value}\n'
        },
        
    }],
    yAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        data: data.date,
        inverse: true,
        axisLabel: {
            rotate: -90,
            align:'center'
        },
        axisTick:{
            alignWithLabel:true
        }
    },
    series: [{
        name: '模拟数据',
        type: 'line',
        xAxisIndex: 1,
        showSymbol: false,
        hoverAnimation: false,
        data: data.series
    }]
};

setInterval(function() {

    for (var i = 0; i < 5; i++) {
        data.series.shift();
        data.date.shift();
        var random = randomData()
        data.series.push(random.series);
        data.date.push(random.date);
    }

    myChart.setOption({
        series: [{
            data: data.series
        }],
        xAxis: {
            data: data.date
        }
    });
}, 1000);