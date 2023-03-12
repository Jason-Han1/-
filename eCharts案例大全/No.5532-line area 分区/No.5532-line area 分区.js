option = {
    title: {
        text: 'Beijing AQI'
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        data: [1, 2, 3, 4, 5, 6, 7, 8]
    },
    yAxis: {
        splitLine: {
            show: false
        }
    },
    toolbox: {
        left: 'center',
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
        }
    },
    dataZoom: [{
        startValue: '2014-06-01'
    }, {
        type: 'inside'
    }],
    visualMap: {
        pieces: [{
            gt: 0,
            lte: 400,
            color: '#096'
        }, {
            gt: 400,
            color: 'red'
        }],
    },
    series: {
        name: 'Beijing AQI',
        type: 'line',
        smooth: true,
        data: [200, 420, 500, 300, 600, 400, 300, 500],
        areaStyle: {},
    }
}