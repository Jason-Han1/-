option = {
    'tooltip': {
        'trigger': 'axis',
        'padding': 15,
        'textStyle': {
            'color': '#D1D3D8',
            'fontSize': 12
        },
        'axisPointer': {
            'type': 'shadow',
            'shadowStyle': {
                'color': 'rgba(0,0,0,0.08)'
            }
        },
        'backgroundColor': 'rgba(0,0,0,0.75)'
    },
    "calculable": true,
    "grid": {
        'top': 35,
        'left': 10,
        'height': 300,
        'width': '100%',
    },
    "xAxis": [{
        "type": "category",
        // "type": "value", // 用值类型，标线位置才能自由
        name: '分数段',
        "data": Array(8).fill(1), // 与 series data 数据 length 要一致
        "axisLabel": {
            "inside": false,
            "interval": 0,
            "lineHeight": 16,
            "textStyle": {
                'color': '#233143'
            }
        },
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#000"
            }
        },
        "axisTick": {
            "show": false
        }
    }, {
        type: 'category',
        data: Array(8),
        show: false
    }],
    "yAxis": [{
            "type": "value",
            scale: true,
            name: '得分率',
            nameLocation: 'start',
            nameTextStyle: {
                color: '#B5B5B5',
                'fontSize': 12,
                // align: 'left',
                padding: [0, 0, 0, 30],
                lineHeight: 0
            },
            "max": 100,
            min: 0,
            interval: 10,
            "axisLine": {
                "show": false,
            },
            "boundaryGap": false,
            "axisTick": {
                "show": false
            },
            "axisLabel": {
                "inside": true,
                "show": true,
                "interval": "auto",
                "formatter": "{value} %",
                verticalAlign: 'bottom',
                margin: 0,
                padding: [0, 0, 4, 0],
                'textStyle': {
                    'color': '#B5B5B5'
                }
            }
        },
        {
            type: 'value',
            scale: true,
            name: '难度',
            nameLocation: 'start',
            nameTextStyle: {
                color: '#999a9d',
                'fontSize': 12,
                align: 'right',
                lineHeight: 0,
                padding: [0, 12, 0, 0]
            },
            // nameGap: -245,
            max: 10,
            min: 0,
            interval: 1,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#444652'
                }
            },
            splitLine: {
                show: false
            },
            boundaryGap: false,
            axisTick: {
                show: false
            },
            axisLabel: {
                inside: true,
                show: true,
                interval: 'auto',
                formatter: '{value} 级',
                verticalAlign: 'bottom',
                // margin: 0,
                padding: [0, 2, 4, 0],
                textStyle: {
                    'color': '#B5B5B5'
                }
            }
        }
    ],
    'dataZoom': [{
            show: 11 > 10,
            'type': 'slider',
            'backgroundColor': '#efefef',
            'fillerColor': '#7d7d7d',
            'height': 8,
            'startValue': 0,
            'endValue': 5, // 修改为 5 重现错位
            'bottom': 0,
            xAxisIndex: [0, 1], // 必须设置
            // 'borderColor': '#282a30',
            'handleStyle': {
                'opacity': 0
            },
            'textStyle': {
                'fontSize': 1,
                'lineHeigth': 0,
                'height': 0,
                'width': 0
            }
        },
        {
            show: 11 > 10,
            'type': 'inside',
            'backgroundColor': '#efefef',
            'fillerColor': '#7d7d7d',
            'height': 8,
            'startValue': 0,
            'endValue': 10,
            'bottom': 0,
            // 'borderColor': '#282a30',
            'handleStyle': {
                'opacity': 0
            },
            'textStyle': {
                'fontSize': 1,
                'lineHeigth': 0,
                'height': 0,
                'width': 0
            }
        },
    ],
    "series": [{
            name: '得分率',
            type: 'line',
            data: [100, 30, 9, 7, 5, 2, 3, 2],
            xAxisIndex: 0,
            yAxisIndex: 0,
            color: '#909195',
            // areaStyle: {
            //   color: '#33353b',
            // },
            lineStyle: {
                width: 1,
                // opacity:0.5,
            }
        },
        {
            "name": "难度",
            "type": "bar",
            data: [1, 3, 9, 7, 5, 2, 3, 2],
            xAxisIndex: 1,
            yAxisIndex: 1,
            "barWidth": 40,
            // "barMaxWidth": 86,
            // "barMinWidth": 56,
            "itemStyle": {
                "normal": {
                    color: 'red'
                }
            }
        }
    ]
}