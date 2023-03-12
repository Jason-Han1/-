var demoData = {
    name: "城镇化率",
    value: 60
};
option = {
    backgroundColor: "#222939",

    series:
        // 外围刻度
        [{
                type: "gauge",
                radius: "90%", // 1行3个
                center: ["50%", "70%"],
                splitNumber: 4,
                min: 0,
                max: 100,
                startAngle: 180,
                endAngle: 0,
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 2,
                        shadowBlur: 0,
                        color: [
                            [
                                1,
                                new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                        offset: 0,
                                        color: "rgba(1,192,229,0)"
                                    },
                                    {
                                        offset: 0.4,
                                        color: "rgba(1,192,229,1)"
                                    },
                                    {
                                        offset: 0.6,
                                        color: "rgba(1,192,229,1)"
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(1,192,229,0)"
                                    }
                                ])
                            ]
                        ]
                    }
                },
                axisTick: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,0.3)",
                        width: 1
                    },
                    length: 19,
                    splitNumber: 10
                },
                splitLine: {
                    show: true,
                    length: -14,
                    lineStyle: {
                        color: "rgba(255,255,255,0.5)"
                    }
                },
                axisLabel: {
                    show: false
                },
                pointer: {
                    show: 0
                },
                detail: {
                    show: 0
                }
            },

            // 内侧指针、数值显示
            {
                name: demoData.name,
                type: "gauge",
                radius: "70%",
                center: ["50%", "70%"],
                startAngle: 180,
                endAngle: 0,
                min: 0,
                max: 100,
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 100,
                        color: [
                            [
                                1,
                                new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                        offset: 0,
                                        color: "rgba(1,192,229,0.2)"
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(204,62,22,0.2)"
                                    }
                                ])
                            ]
                        ]
                    }
                },
                axisTick: {
                    show: 0
                },
                splitLine: {
                    show: 0
                },
                axisLabel: {
                    show: 0
                },
                pointer: {
                    show: true,
                    length: "105%"
                },
                detail: {
                    show: false
                },
                itemStyle: {
                    normal: {
                        color: "#fff"
                    }
                },
                data: [{
                    value: demoData.value
                }],
                z: 9
            },
            {
                type: "gauge",
                radius: "45%",
                center: ["50%", "70%"],
                splitNumber: 4,
                min: 0,
                max: 100,
                startAngle: 180,
                endAngle: 0,
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 2,
                        shadowBlur: 0,
                        color: [
                            [
                                1,
                                new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                        offset: 0,
                                        color: "rgb(1,192,229)"
                                    },
                                    {
                                        offset: 1,
                                        color: "rgb(204,62,22)"
                                    }
                                ])
                            ]
                        ]
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                pointer: {
                    show: 0
                },
                detail: {
                    show: 0
                }
            },
            {
                type: "gauge",
                radius: "77%",
                center: ["50%", "70%"],
                splitNumber: 0, //刻度数量
                startAngle: 180,
                endAngle: 0,
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 20,
                        color: [
                            [
                                demoData.value / 100,
                                new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                        offset: 0,
                                        color: "#5c53de"
                                    },
                                    {
                                        offset: 1,
                                        color: "#18c8ff"
                                    }
                                ])
                            ],
                            [1, "transparent"]
                        ]
                    }
                },
                //分隔线样式。
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                pointer: {
                    show: false
                },
                title: {
                    show: false
                },
                //仪表盘详情，用于显示数据。
                detail: {
                    show: false
                },
                data: [{
                    value: demoData.value
                }]
            }
        ]
};