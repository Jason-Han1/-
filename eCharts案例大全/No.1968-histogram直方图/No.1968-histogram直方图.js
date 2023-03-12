// See https://github.com/ecomfe/echarts-stat
echarts.registerTransform(ecStat.transform.histogram);
// https://github.com/ecomfe/echarts-stat/blob/master/README.zh-CN.md#histogram
option = {
    dataset: [{
        source: [
            [8.3, 143],
            [8.6, 214],
            [8.8, 251],
            [10.5, 26],
            [10.7, 86],
            [10.8, 93],
            [11.0, 176],
            [11.0, 39],
            [11.1, 221],
            [11.2, 188],
            [11.3, 57],
            [11.4, 91],
            [11.4, 191],
            [11.7, 8],
            [12.0, 196],
            [12.9, 177],
            [12.9, 153],
            [13.3, 201],
            [13.7, 199],
            [13.8, 47],
            [14.0, 81],
            [14.2, 98],
            [14.5, 121],
            [16.0, 37],
            [16.3, 12],
            [17.3, 105],
            [17.5, 168],
            [17.9, 84],
            [18.0, 197],
            [18.0, 155],
            [20.6, 125]
        ]
    }, {
        transform: {
            type: 'ecStat:histogram'
        }
    } ],
    tooltip: {
    },
    grid: [{
        top: '20%',
        right: '20%',
        left:'20%'
    }],
    xAxis: [{
        scale: true,
    }],
    yAxis: {},
    series: [{
        name: 'histogram',
        type: 'bar',
        barWidth: '99.3%',
        label: {
            show: true,
            position: 'top'
        },
        encode: { x: 0, y: 1, itemName: 4 },
        datasetIndex: 1
    }]
};