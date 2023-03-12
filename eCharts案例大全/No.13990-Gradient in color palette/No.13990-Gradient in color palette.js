option = {
    color: [
        {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: 'red' // 0% 处的颜色
            }, {
                offset: 1, color: 'blue' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
        },
        {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: 'yellow' // 0% 处的颜色
            }, {
                offset: 1, color: '#111' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
        }
    ],
    legend: {},
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed']
    },
    yAxis: {
    },
    series: [{
        type: 'line',
        name: 'seriesA',
        stack: 'all',
        data:[1, 10, 26, 10],
        areaStyle: {}
    }, {
        type: 'line',
        name: 'seriesB',
        stack: 'all',
        data:[16, 19, 76, 40],
        areaStyle: {}
    }]
};