option = {
    xAxis:{
        interval: 10,
        min: 30,
        axisLabel: {
            formatter: function (v) {
                if (v > 30 && v % 20 === 0) {
                    return v;
                } 
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: ['transparent', '#aaa']
            }
        }
    },
    yAxis: {
        data: ['a'],
        axisTick: {
            show: false
        }
    },
    series: [{
        type: 'bar',
        data: [80],
        stack: 'x',
        barWidth: 30
    }, {
        type: 'bar',
        data: [80],
        stack: 'x'
    }, {
        type: 'bar',
        data: [100],
        stack: 'x'
    }]
}