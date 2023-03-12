
var data = [
    ['2019-10-10', 100],
    ['2019-10-11', 200],
    ['2019-10-12', 300],
    ['2019-10-13', 500],
    ['2019-10-14', 600],
    ['2019-10-15', 400],
    ['2019-10-16', 350],
    ['2019-10-17', 100]
];

option = {
    xAxis: {
        type: 'category',
        boundaryGap: false
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
    },
    visualMap: {
        type: 'piecewise',
        dimension: 0,
        seriesIndex: 0,
        pieces: [{
            gt: 2,
            lt: 5,
            color: 'rgba(0, 180, 0, 0.5)'
        }]
    },
    series: [
        {
            type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            lineStyle: {
                color: 'green',
                width: 5
            },
            markLine: {
                data: [{
                    xAxis: 2
                }, {
                    xAxis: 5
                }]
            },
            areaStyle: {
                // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //     offset: 0,
                //     color: 'rgb(255, 158, 68)'
                // }, {
                //     offset: 1,
                //     color: 'rgb(255, 70, 131)'
                // }])
            },
            data: data
        }
    ]
};
