var xData = ['枪支','警车','警摩','船只','电台','警务通','执法仪']
var echartData = [434,254,134,734,411,456,456]
option = {
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#fff"
            }

        },
    },
    "grid": {
        "borderWidth": 0,
        'top': '5%',
        'bottom': '5%',
        left: '5%',
        right: '5%',
        textStyle: {
            color: "#fff"
        }
    },
    "calculable": true,
    "xAxis": [{
        "type": "category",
        axisLine: {
            lineStyle: {
                color: 'rgba(193, 207, 220, 1)',
                width: 1
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: 'rgba(0, 0, 0, 0.72)',
                fontSize: 14
            },
        },
        "splitLine": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
        "data": xData,
    }],
    yAxis: [{
        type: 'value',
        minInterval: 200,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                color: 'rgba(0, 0, 0, 0.72)',
                fontSize: 15
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(193, 207, 220, 1)',
                // type: 'dashed'
            }
        },
    }],
    "series": [{
            "name": "装备情况",
            "type": "bar",
            "barMaxWidth": 26,
            "barGap": "10%",
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(123, 200, 255, 1)',
                        },
                        {
                            offset: 1,
                            color: '#359DF5',
                        },
                    ]),
                    "label": {
                        "show": false,
                    },
                    barBorderRadius: [30, 30, 0, 0] //圆角大小
                },
            },
            "data": echartData,
        }
    ]
}