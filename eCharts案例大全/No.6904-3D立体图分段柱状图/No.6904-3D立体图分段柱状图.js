option = {
    title: {
        text: '3D立体图分段柱状图',
        x: 'center'
    },
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'item',
    },
    xAxis: {
        data: ["入职", "离职", "培训"],
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#888'
            },
            margin: 20, //刻度标签与轴线之间的距离。
        },

    },
    yAxis: {
        splitLine: {
            show: true,
            lineStyle: {
                color: '#eee',
                type: 'solid'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#888'
            },
        }
    },
    series: [{ //三个最低下的圆片
            "name": "",
            "type": "pictorialBar",
            "symbolSize": [100, 30],
            "symbolOffset": [0, 18],
            "z": 12,
            "data": [{
                "name": "",
                "value": "100",
                "itemStyle": {
                    "normal": {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "rgba(89,211,255,1)"
                            },
                            {
                                offset: 1,
                                color: "rgba(23,237,194,1)"
                            }
                        ])
                    }
                }
            }]
        },
        //下半截柱状图
        {
            name: '2020',
            type: 'bar',
            barWidth: 100,
            barGap: '-100%',
            itemStyle: { //lenged文本
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "rgba(55,255,249,1)"
                    },
                    {
                        offset: 1,
                        color: "rgba(0,222,215,0.2)"
                    }
                ])
            },

            data: [{
                "name": "",
                "value": "320",
                "itemStyle": {
                    "normal": {
                        "color": {
                            "x": 0,
                            "y": 0,
                            "x2": 0,
                            "y2": 1,
                            "type": "linear",
                            "global": false,
                            "colorStops": [{ //第一节下面
                                "offset": 0,
                                "color": "rgba(0,255,245,0.5)"
                            }, {
                                "offset": 1,
                                "color": "#43bafe"
                            }]
                        }
                    }
                }
            }]
        },

        {
            "name": "", //头部
            "type": "pictorialBar",
            "symbolSize": [100, 45],
            "symbolOffset": [0, -20],
            "z": 12,
            "data": [{
                "name": "",
                "value": "320",
                "symbolPosition": "end",
                "itemStyle": {
                    "normal": {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                            [{
                                    offset: 0,
                                    color: "rgba(54,127,223,1)"
                                },
                                {
                                    offset: 1,
                                    color: "rgba(94,162,254,1)"
                                }
                            ],
                            false
                        ),
                    }
                }
            }]
        }

    ]
};