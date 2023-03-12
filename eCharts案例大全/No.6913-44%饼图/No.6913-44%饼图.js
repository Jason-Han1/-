let dataval = {
    value: 50,
    name: "进度"
};
option = {
    title: {
        text: dataval.value + "%",
        x: "center",
        y: "center",
        textStyle: {
            fontWeight: "bold",
            fontSize: 56,
            color: "#fff"
        }
    },
    data: [{
        name: dataval.name
    }],
    series: [{
            type: "pie",
            radius: ["50%", "80%"],
            startAngle: 225,
            color: [{
                    type: "linear",
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                            offset: 0,
                            color: "rgba(255, 171, 29, 1)" // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: "rgba(255, 171, 29, 1)" // 100% 处的颜色
                        }
                    ]
                },
                "transparent"
            ],
            hoverAnimation: false,
            legendHoverLink: false,
            z: 10,
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                    value: (75 * dataval.value) / 100
                },
                {
                    value: 100 - (75 * dataval.value) / 100
                }
            ]
        },
        {
            // 背景圆环
            name: "",
            type: "pie",
            radius: ["50%", "80%"],
            silent: true,
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false
                }
            },
            z: 5,
            data: [{
                    value: 75,
                    itemStyle: {
                        color: "#1A3B4C",
                        borderColor: "rgba(255, 171, 29, 1)"
                    }
                },
                {
                    value: 25,
                    itemStyle: {
                        color: "transparent"
                    }
                }
            ]
        },
        {
            // 底部
            name: "",
            type: "pie",
            radius: ["50%", "80%"],
            // center: ['50%', '60%'] ,
            startAngle: 230,
            labelLine: {
                show: false
            },
            z: 15,
            silent: true,
            label: {
                show: true,
                rich: {
                    a: {
                        color: "#fff",
                        fontSize: 12,
                        padding: [0, -35, -65, 0]
                    },
                    b: {
                        color: "#fff",
                        fontSize: 12,
                        padding: [0, 0, -50, -45]
                    }
                },
                formatter: function(val) {
                    // 底部0和100
                    if (val.dataIndex === 0) {
                        return "{a|0}";
                    }
                    if (val.dataIndex === 2) {
                        return "{b|100}";
                    }
                }
            },
            data: [{
                    // 底部两条线
                    value: 1,
                    itemStyle: {
                        color: "rgba(255, 171, 29, 1)"
                    }
                },
                {
                    value: 800,
                    itemStyle: {
                        color: "transparent"
                    }
                },
                {
                    value: 1,
                    itemStyle: {
                        color: "rgba(255, 171, 29, 1)"
                    }
                },
                {
                    value: 230,
                    itemStyle: {
                        color: "transparent"
                    }
                }
            ]
        },
        {
            // 背景
            name: "",
            type: "pie",
            cursor: "default",
            radius: ["0", "90%"],
            // center: ['50%', '60%'] ,
            hoverAnimation: false,
            legendHoverLink: false,
            itemStyle: {
                color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                            offset: 0,
                            color: "rgba(255, 171, 29, .8)" // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: "rgba(255, 171, 29, 0)" // 100% 处的颜色
                        }
                    ]
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 1
            }]
        },
        {
            // 中间圈
            name: "",
            z: 5,
            type: "pie",
            cursor: "default",
            radius: ["40%", "40%"],
            // center: ['50%', '60%'] ,
            hoverAnimation: false,
            legendHoverLink: false,
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 1,
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        borderColor: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                    offset: 0,
                                    color: "rgba(255, 171, 29, .8)" // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: "rgba(255, 171, 29, 0)" // 100% 处的颜色
                                }
                            ]
                        }
                    }
                }
            }]
        }
    ]
};