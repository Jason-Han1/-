var xData = ['湖南','安徽','河南','山西','广东','山东','北京','天津','吉林','内蒙古']
var echartData = ['8.2','8.2','3.9','7.8','8.4','10','7.6','10.2','7','10.4','6.8','10.1']
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
        "top": 110,
        "bottom": 95,
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
            },
            formatter: function(date) {
                return date + 'w'
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
            "name": "人口分析",
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