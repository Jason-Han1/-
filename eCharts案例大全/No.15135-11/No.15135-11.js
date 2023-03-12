option = {
    xAxis: {
        splitLine: {show: false}
    },
    yAxis: {
        data: ['a', 'b', 'c', 'd'],
        axisTick: {show: false}
    },
    series: [{
        type: 'bar',
        itemStyle: {
            normal: {
                color: '#ddd'
            }
        },
        silent: true,
        barWidth: 40,
        barGap: '-100%', // Make series be overlap
        data: [30, 70, 80, 100]
    }, {
        type: 'bar',
        barWidth: 40,
        z: 10,
        data: [10, 30, 70, 80]
    }]
};
