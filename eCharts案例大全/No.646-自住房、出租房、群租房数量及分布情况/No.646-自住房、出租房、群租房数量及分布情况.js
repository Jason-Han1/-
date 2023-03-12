var xData = ['自住房','出租房','群租房']
var echartData = ['2867','1543','2165']
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
        minInterval: 1000,
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
            "name": "分布情况",
            "type": "bar",
            "barMaxWidth": 26,
            "barGap": "10%",
            itemStyle: {
                normal: {
                    color: (params) => {
    					let colors = [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(254, 174, 162, 1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(253, 114, 112, 1)',
                        },
                    ]),new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(123, 200, 255, 1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(53, 157, 245, 1)',
                        },
                    ]),new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(251, 169, 128, 1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(247, 203, 107, 1)',
                        },
                    ])]
    					return colors[params.dataIndex]
    				},
                    barBorderRadius: [30, 30, 0, 0] //圆角大小
                },
            },
            label: {
                normal: {
                    show: true,
                    position: "top",
                    formatter: function(data) {
                        return '{a'+data.dataIndex+'|' + data.data + '}';
                        
                    },
                    rich: {
                        a0: {
                            color: 'rgba(220, 85, 69, 1)',
                            fontSize: 16,
                            fontFamily: 'DIN',
                            fontWeight: 'bold'
                        },
                        a1: {
                            color: 'rgba(73, 112, 200, 1)',
                            fontSize: 16,
                            fontFamily: 'DIN',
                            fontWeight: 'bold'
                        },
                        a2: {
                            color: 'rgba(250, 157, 0, 1)',
                            fontSize: 16,
                            fontFamily: 'DIN',
                            fontWeight: 'bold'
                        }
                    }
                },
            },
            "data": echartData,
        }
    ]
}