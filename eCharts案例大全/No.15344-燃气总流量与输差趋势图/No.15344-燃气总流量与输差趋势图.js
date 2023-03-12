app.title = '气泡图';

var data = [
    [
        [5, 77, 1, 'Australia', 1990],
        [5, 77.4, 1, 'Canada', 1990],
        [5,68, 1, 'China', 1990],
        [5, 74.7, 1, 'Cuba', 1990],
        [5, 75, 1, 'Finland', 1990],
        [5, 77.1, 1, 'France', 1990],
        [5, 75.4, 1, 'Germany', 1990],
        [5, 78.1, 1, 'Iceland', 1990],
        [5,57.7, 1, 'India', 1990],
        [5, 79.1, 1, 'Japan', 1990],
        [5,67.9, 1, 'North Korea', 1990],
        [5, 72, 1, 'South Korea', 1990],
        [5, 75.4, 1, 'New Zealand', 1990]
    ],
    [
        [0, 5, 300, '1', 2015],
        [1, 60890, 1600000000, '1', 2015],
        [2, 55980, 1190000000, '2', 2015],
        [3, 48090, 990000000, '3', 2015],
        [4, 38390, 630000000, '4', 2015],
        [5, 33389, 510000000, '5', 2015],
        [6, 33680, 520000000, '6', 2015],
        [7, 33910, 500000000, '7', 2015],
        [8, 40820, 680000000, '8', 2015],
        [9, 55390, 1300000000, '9', 2015],
        [10, 65890, 2300000000, '10', 2015],
        [11, 68750, 3280000000, '11', 2015],
        [12, 66850, 2500000000, '12月', 2015],
        [12, 100000, 300, '13', 2015]
    ]
];

option = {
    backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#EFEFEF'
    }, {
        offset: 1,
        color: '#EFEFEF'
    }]),
    title: {
        text: '总流量与输差趋势图'
    },
    legend: {
        right: 10,
        data: ['1990', '2015']
    },
    xAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    yAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        scale: true
    },
    series: [{
        name: '',
        data: data[0],
        type: 'scatter',
        symbolSize: function(data) {
            return Math.sqrt(data[2]) / 5e2;
        },
        label: {
            emphasis: {
                show: true,
                formatter: function(param) {
                    return param.data[3];
                },
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(251, 118, 123)'
                }, {
                    offset: 1,
                    color: 'rgb(204, 46, 72)'
                }])
            }
        }
    }, {
        name: '输差',
        data: data[1],
        type: 'scatter',
        symbolSize: function(data) {
            return Math.sqrt(data[2]) / 5e2;
        },
        label: {
            emphasis: {
                show: true,
                formatter: function(param) {
                    return param.data[3];
                },
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(129, 227, 238)'
                }, {
                    offset: 1,
                    color: 'rgb(25, 183, 207)'
                }])
            }
        }
    }]
};