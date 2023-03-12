option = {
    "visualMap": [{
        show: false,
        "seriesIndex": [0, 1, 2, 3, 4],
        "min": 40,
        "max": 60,
        "calculable": true,
        "color": ['#eaf117', '#43cc61']    }, {
        show: false,
        "seriesIndex": [5, 6, 7, 8],
        "min": 100,
        "max": 250,
        "calculable": true,

        "color": ['#ff0000', '#eaf117']
    }],
    grid: [
        { top: '0.0%', height: '7%' },
        { top: '11.11%', height: '7%' },
        { top: '22.22%', height: '7%' },
        { top: '33.33%', height: '7%' },
        { top: '44.44%', height: '7%' },
        { top: '55.55%', height: '7%' },
        { top: '66.66%', height: '7%' },
        { top: '77.77%', height: '7%' },
        { top: '88.88%', height: '7%' }
    ],
    tooltip: {
        show: true
    },
    xAxis: [
        { type: 'category', gridIndex: 0, data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
        { type: 'category', gridIndex: 1, data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
        { type: 'category', gridIndex: 2, data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
        { type: 'category', gridIndex: 3, data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
        { type: 'category', gridIndex: 4, data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
        { type: 'category', gridIndex: 5, data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
        { type: 'category', gridIndex: 6, data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
        { type: 'category', gridIndex: 7, data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
        { type: 'category', gridIndex: 8, data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] }
    ],
    yAxis: [{
            type: 'category',
            'gridIndex': 0,
            splitNumber: 1,
            name: 'B1',
            nameLocation: 'middle',
            nameGap: 20,
            nameRotate: 0,
            nameTextStyle: {
                fontWeight: 'bold'
            },
            axisLabel: {
                show: false
            },
            axisLine: {
            show: false
            }
        },
        {
            type: 'category',
            gridIndex: 1,
            splitNumber: 1,
            name: 'B2',
            nameLocation: 'middle',
            nameGap: 20,
            nameRotate: 0,
            nameTextStyle: {
                fontWeight: 'bold'
            },
            axisLabel: {
                show: false
            },
            axisLine: {
            show: false
            }
        },
        {
            type: 'category',
            gridIndex: 2,
            splitNumber: 1,
            name: 'S1',
            nameLocation: 'middle',
            nameGap: 20,
            nameRotate: 0,
            nameTextStyle: {
                fontWeight: 'bold'
            },
            axisLabel: {
                show: false
            },
            axisLine: {
            show: false
            }
        },
        {
            type: 'category',
            gridIndex: 3,
            splitNumber: 1,
            name: 'S2',
            nameLocation: 'middle',
            nameGap: 20,
            nameRotate: 0,
            nameTextStyle: {
                fontWeight: 'bold'
            },
            axisLabel: {
                show: false
            },
            axisLine: {
            show: false
            }
        },
        {
            type: 'category',
            gridIndex: 4,
            splitNumber: 1,
            name: 'S3',
            nameLocation: 'middle',
            nameGap: 20,
            nameRotate: 0,
            nameTextStyle: {
                fontWeight: 'bold'
            },
            axisLabel: {
                show: false
            },
            axisLine: {
            show: false
            }
        },
        {
            type: 'category',
            gridIndex: 5,
            splitNumber: 1,
            name: 'S4',
            nameLocation: 'middle',
            nameGap: 20,
            nameRotate: 0,
            nameTextStyle: {
                fontWeight: 'bold'
            },
            axisLabel: {
                show: false
            },
            axisLine: {
            show: false
            }
        },
        {
            type: 'category',
            gridIndex: 6,
            splitNumber: 1,
            name: 'S5',
            nameLocation: 'middle',
            nameGap: 20,
            nameRotate: 0,
            nameTextStyle: {
                fontWeight: 'bold'
            },
            axisLabel: {
                show: false
            },
            axisLine: {
            show: false
            }
        },
        {
            type: 'category',
            gridIndex: 7,
            splitNumber: 1,
            name: 'R1',
            nameLocation: 'middle',
            nameGap: 20,
            nameRotate: 0,
            nameTextStyle: {
                fontWeight: 'bold'
            },
            axisLabel: {
                show: false
            },
            axisLine: {
            show: false
            }
        },
        {
            type: 'category',
            gridIndex: 8,
            splitNumber: 1,
            name: 'R2',
            nameLocation: 'middle',
            nameGap: 20,
            nameRotate: 0,
            nameTextStyle: {
                fontWeight: 'bold'
            },
            axisLabel: {
                show: false
            },
            axisLine: {
            show: false
            }
        }
    ],
    series: [{
            "type": "heatmap",
            "label": {
                show: true,
                formatter: function (params) {
                    return parseInt(params.value[2])
                }
            },
            "'xAxisIndex'": '0',
            "'yAxisIndex'": '0',
            "data": [
                [0, 0, 46.74],
                [1, 0, 46.7],
                [2, 0, 43.87],
                [3, 0, 44.3],
                [4, 0, 43.21],
                [5, 0, 43.88],
                [6, 0, 43.96],
                [7, 0, 45.74],
                [8, 0, 46.23],
                [9, 0, 44.13],
                [10, 0, 50.91],
                [11, 0, 47.86]
            ]
        },
        {
            "type": "heatmap",
            "label": {
                show: true,
                formatter: function (params) {
                    return parseInt(params.value[2])
                }
            },
            "xAxisIndex": 1,
            "yAxisIndex": 1,
            "data": [
                [0, 0, 48.6],
                [1, 0, 55.55],
                [2, 0, 49.53],
                [3, 0, 49.28],
                [4, 0, 48.83],
                [5, 0, 47.41],
                [6, 0, 47.09],
                [7, 0, 50.92],
                [8, 0, 53.41],
                [9, 0, 51.44],
                [10, 0, 55.31],
                [11, 0, 50.64]
            ]
        },
        {
            "type": "heatmap",
            "label": {
                show: true,
                formatter: function (params) {
                    return parseInt(params.value[2])
                }
            },
            "xAxisIndex": 2,
            "yAxisIndex": 2,
            "data": [
                [0, 0, 48.25],
                [1, 0, 52.77],
                [2, 0, 46.55],
                [3, 0, 48.49],
                [4, 0, 47.01],
                [5, 0, 46.49],
                [6, 0, 44.4],
                [7, 0, 44.18],
                [8, 0, 43.03],
                [9, 0, 46.58],
                [10, 0, 47.8],
                [11, 0, 47.82]
            ]
        },
        {
            "type": "heatmap",
            "label": {
                show: true,
                formatter: function (params) {
                    return parseInt(params.value[2])
                }
            },
            "xAxisIndex": 3,
            "yAxisIndex": 3,
            "data": [
                [0, 0, 47.15],
                [1, 0, 50.01],
                [2, 0, 47.36],
                [3, 0, 48.41],
                [4, 0, 46.75],
                [5, 0, 46.42],
                [6, 0, 45.26],
                [7, 0, 47.35],
                [8, 0, 45.15],
                [9, 0, 47.01],
                [10, 0, 47.55],
                [11, 0, 47.67]
            ]
        },
        {
            "type": "heatmap",
            "label": {
                show: true,
                formatter: function (params) {
                    return parseInt(params.value[2])
                }
            },
            "xAxisIndex": 4,
            "yAxisIndex": 4,
            "data": [
                [0, 0, 46.62],
                [1, 0, 47.08],
                [2, 0, 47.17],
                [3, 0, 48.58],
                [4, 0, 45.88],
                [5, 0, 46.16],
                [6, 0, 45.86],
                [7, 0, 45.06],
                [8, 0, 45.43],
                [9, 0, 46.22],
                [10, 0, 47.36]
            ]
        },
        {
            "type": "heatmap",
            "label": {
                show: true,
                formatter: function (params) {
                    return parseInt(params.value[2])
                }
            },
            "xAxisIndex": 5,
            "yAxisIndex": 5,
            "data": [
                [0, 0, 110.47],
                [1, 0, 161.01],
                [2, 0, 176.19],
                [3, 0, 203.23],
                [4, 0, 179.88],
                [5, 0, 111.84],
                [6, 0, 163.36],
                [7, 0, 133.31],
                [8, 0, 123.11],
                [9, 0, 118.95],
                [10, 0, 139.07],
                [11, 0, 142.08]
            ]
        },
        {
            "type": "heatmap",
            "label": {
                show: true,
                formatter: function (params) {
                    return parseInt(params.value[2])
                }
            },
            "xAxisIndex": 6,
            "yAxisIndex": 6,
            "data": [
                [0, 0, 99.35],
                [1, 0, 121.59],
                [2, 0, 197.86],
                [3, 0, 211.89],
                [4, 0, 157.93],
                [5, 0, 111.41],
                [6, 0, 133.44],
                [7, 0, 126.59],
                [8, 0, 103.63],
                [9, 0, 109.81],
                [10, 0, 121.47],
                [11, 0, 139.28]
            ]
        },
        {
            "type": "heatmap",
            "label": {
                show: true,
                formatter: function (params) {
                    return parseInt(params.value[2])
                }
            },
            "xAxisIndex": 7,
            "yAxisIndex": 7,
            "data": [
                [0, 0, 150.25],
                [1, 0, 141.87],
                [2, 0, 173.56],
                [3, 0, 202.38],
                [4, 0, 180.12],
                [5, 0, 128.22],
                [6, 0, 120.98],
                [7, 0, 132.91],
                [8, 0, 132.88],
                [9, 0, 124.4],
                [10, 0, 145.99],
                [11, 0, 152.59]
            ]
        },
        {
            "type": "heatmap",
            "label": {
                show: true,
                formatter: function (params) {
                    return parseInt(params.value[2])
                }
            },
            "xAxisIndex": 8,
            "yAxisIndex": 8,
            "data": [
                [0, 0, 269.64],
                [1, 0, 201.51],
                [2, 0, 187.25],
                [3, 0, 136.03],
                [4, 0, 169.55],
                [5, 0, 154.47],
                [6, 0, 184.21],
                [7, 0, 195.74],
                [8, 0, 189.13],
                [9, 0, 193.96],
                [10, 0, 199.03],
                [11, 0, 170.76]
            ]
        }
    ]
};