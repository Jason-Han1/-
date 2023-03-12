option = {
    title: {
        text: '波士顿矩阵'
    },
    xAxis: {
        splitLine: {
            show: false
        },
        axisLabel: {
            formatter: function(value, index) {
                return value * 100 + '%';
            }
        }
    },
    yAxis: {
        axisLabel: {
            formatter: function(value, index) {
                return value * 100 + '%';
            }
        }
    },
    series: [{
        symbolSize: 10,
        data: [{
                value: [1, 1],
                symbol: 'none',
            },
            {
                value: [0, -1],
                symbol: 'none',
            },
            [0.35, 0.18],
            [0.55, 0.77],
            [0.88, 0.23],
            [0.23, -0.25],
            [0.65, -0.66]
        ],
        type: 'scatter',
        markArea: {
            itemStyle: {
                color: '#FFFAFA',
                opacity: '0.7'
            },
            emphasis: {
                itemStyle: {
                    color: '#FFFAFA',
                    opacity: '0.7'
                },
            },
            data: [
                [{
                    coord: [0.5, 0]
                }, {
                    coord: [1, 1]
                }],
                [{
                    coord: [0.5, 0]
                }, {
                    coord: [0, -1]
                }]
            ]
        },
        markLine: {
            symbol: 'none',
            data: [
                [{
                    value: 0.5,
                    coord: [0.5, -1]
                }, {
                    coord: [0.5, 1]
                }]
            ]
        }
    }]
};