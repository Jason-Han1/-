var xData = ["工单", "影响客户"];
var yData1 = [100, 60];
var yData2 = [80, 40];
var path = 'path://M214,1079l8-6h16l8,6-8,6H222Z';
option = {
    backgroundColor: 'BLACK',
    title: {
        text: '本年预安排停电',
        top: 5,
        left: '20%',
        textStyle: {
            fontSize: 18,
            color: '#fff'
        }
    },
    legend: {
        data: ['总数', '未复电数']
    },
    "grid": {
        "top": "25%",
        "left": "-5%",
        "bottom": "10%",
        "right": "5%",
        "containLabel": true
    },
    animation: false,
    "xAxis": [{
        "type": "category",
        "data": xData,
        "axisTick": {
            show: false,
            "alignWithLabel": true
        },
        "nameTextStyle": {
            "color": "#fff"
        },
        "axisLine": {
            show: false,
            "lineStyle": {
                "color": "#82b0ec"
            }
        },
        "axisLabel": {
            "textStyle": {
                "color": "#fff"
            },
            margin: 20
        }
    }],
    "yAxis": [{
        show: false,
        "type": "value",
        "axisLabel": {
            "textStyle": {
                "color": "#fff"
            },
            "formatter": "{value}%"
        },
        "splitLine": {
            "lineStyle": {
                "color": "#0c2c5a"
            }
        },
        "axisLine": {
            "show": false
        }
    }],
    "series": [{
            type: 'pictorialBar',
            symbol: path,
            symbolSize: [30, 8],
            symbolOffset: [-20, -5],
            symbolPosition: 'end',
            z: 12,
            color: "#68B4FF",
            data: yData1
        },
        {
            type: 'pictorialBar',
            symbol: path,
            symbolSize: [30, 8],
            symbolOffset: [20, -5],
            symbolPosition: 'end',
            z: 12,
            color: "#FFCE69",
            data: yData2
        },
        {
            type: 'pictorialBar',
            symbol: path,
            symbolSize: [30, 8],
            symbolOffset: [-20, 5],
            z: 12,
            color: "#68B4FF",
            data: yData1
        },
        {
            name: '',
            type: 'pictorialBar',
            symbol: path,
            symbolSize: [30, 8],
            symbolOffset: [20, 5],
            color: "#FFCE69",
            z: 12,
            data: yData2
        },
        {
            type: 'bar',
            itemStyle: {
                normal: {
                    opacity: .7
                }
            },
            barWidth: "30",
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: "#3D83CD"
                },
                {
                    offset: 1,
                    color: "#0B3147"
                }
            ]),
            data: yData1
        },
        {
            type: 'bar',
            itemStyle: {
                normal: {
                    opacity: .7
                }
            },
            barWidth: "30",
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: "#CC9F49"
                },
                {
                    offset: 1,
                    color: "#0B3147"
                }
            ]),
            data: yData2
        }
    ]
}