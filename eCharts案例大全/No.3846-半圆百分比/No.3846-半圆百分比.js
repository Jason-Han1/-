    var placeHolderStyle = {
        normal: {
            label: {
                show: false,
            },
            labelLine: {
                show: false,
            },
            color: "rgba(0,0,0,0)",
            borderWidth: 0,
        },
        emphasis: {
            color: "rgba(0,0,0,0)",
            borderWidth: 0,
        },
    };



    option = {
        backgroundColor: "#050A39",
        // title: [{
        //     text: "完成率",
        //     x: "50%",
        //     y: "65%",
        //     textAlign: "center",
        //     textStyle: {
        //         fontWeight: "normal",
        //         fontSize: "14",
        //         color: "#c9c9c9",
        //         // textAlign: "center",
        //     },
        // } ],

        //第一个图表
        series: [{
                type: "pie",
                hoverAnimation: false, //鼠标经过的特效
                radius: ["32%", "50%"],
                center: ["50%", "54%"],
                startAngle: 180,
                labelLine: {
                    normal: {
                        show: false,
                    },
                },
                label: {
                    normal: {
                        position: "center",
                    },
                },
                data: [{
                        value: 100,
                        itemStyle: {
                            normal: {
                                color: "#161E5A",
                            },
                        },
                    },
                    {
                        value: 100,
                        itemStyle: placeHolderStyle,
                    },
                ],
            },
            //上层环形配置
            {
                type: "pie",
                hoverAnimation: false, //鼠标经过的特效
                radius: ["32%", "50%"],
                center: ["50%", "54%"],
                startAngle: 180,
                labelLine: {
                    normal: {
                        show: false,
                    },
                },
                label: {
                    normal: {
                        position: "center",
                    },
                },
                data: [{
                        value: 10,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: "#08F2AA",
                                    },
                                    {
                                        offset: 1,
                                        color: "#57E07A",
                                    },
                                ]),
                            },
                        },
                        label: {
                            normal: {
                                formatter: "{c}%",
                                // position: "center",
                                show: true,
                                textStyle: {
                                    fontSize: "24",
                                    fontWeight: "bold",
                                    color: "#50CB98",
                                },
                            },
                        },
                    },
                    {
                        value: 100,
                        itemStyle: placeHolderStyle,
                    },
                ],
            },
        ],
    };