var normal = 100,
    all = 100;
var aValue = 3.55;
option = {
    backgroundColor: '#ffffff',
    title: {
        show: true,
        text: aValue + '%',
        x: '49%',
        y: '78%',
        z: 8,
        textAlign: 'center',
        textStyle: {
            color: '#000000',
            fontSize: 46,
        }
    },
    series: [{
            name: "刻度",
            type: "gauge",
            center: ["50%", "70%"],
            radius: '110%',
            min: -10, //最小刻度
            max: 10, //最大刻度
            splitNumber: 2, //刻度数量
            startAngle: 170,
            endAngle: 10,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 0,
                    color: [
                        [1, "rgba(0,0,0,0)"]
                    ],
                },
            }, //仪表盘轴线
            axisLabel: {
                show: true,
                color: "rgba(200, 200, 200, 1)",
                fontSize: 30,
                distance: 0,
                formatter: function(v) {
                    return v;
                },
            }, //刻度标签。
            axisTick: {
                show: true,
                splitNumber: 5,
                lineStyle: {
                    color: "rgba(239, 239, 241, 1)",
                    width: 0,
                    // length:10
                },
                length: -20,
            }, //刻度样式
            splitLine: {
                show: true,
                length: -20,
                lineStyle: {
                    color: "rgba(239, 239, 241, 1)",
                    width: 0
                },
            }, //分隔线样式
        },
        { //右表盘
            type: "gauge",
            radius: '100%',
            center: ["50%", "70%"],
            splitNumber: 0, //刻度数量
            startAngle: 90,
            endAngle: 10,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 320,
                    color: [
                        // [
                        //     1, new echarts.graphic.LinearGradient(
                        //         0, 0, 1, 0, [{
                        //                 offset: 0,
                        //                 color: '#ddd',
                        //             },
                        //             {
                        //                 offset: 1,
                        //                 color: '#ddd',
                        //             }
                        //         ]
                        //     )
                        // ],
                        // [30 / 100, "#ddd"],
                        [aValue * 10 / 100, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0, [{
                                    offset: 0,
                                    color: 'rgba(179, 59, 59, 1)',
                                },
                                {
                                    offset: 0.5,
                                    color: 'rgba(179, 59, 59, 0.8)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(179, 59, 59, 1)',
                                },
                            ]
                        )],
                        // [50 / 100, "#ddd"],
                        [1, "rgba(239, 239, 241, 1)"]
                    ],
                },
            },
            //分隔线样式。
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            pointer: {
                show: false,
                length: "80%",
                width: "2%",
            },
            title: {
                show: false,
                offsetCenter: [20, 20], // x, y，单位px
                textStyle: {
                    fontWeight: "bold",
                    color: "#0ab7ff",
                    fontSize: 30,
                },
            },
            // 仪表盘详情，用于显示数据。
            detail: {
                show: false,
                offsetCenter: [0, "-40%"],
                color: "#ffffff",
                textStyle: {
                    fontSize: 60,
                    color: "#000000"
                },
            },
            data: [{
                value: 30,
            }, ],
        },
        { //左表盘
            type: "gauge",
            radius: '100%',
            center: ["50%", "70%"],
            splitNumber: 0, //刻度数量
            startAngle: 170,
            endAngle: 90,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 320,
                    color: [
                        //   [
                        // 1, new echarts.graphic.LinearGradient(
                        //     0, 0, 1, 0, [{
                        //             offset: 0,
                        //             color: '#ddd',
                        //         },
                        //         {
                        //             offset: 1,
                        //             color: '#ddd',
                        //         }
                        //     ]
                        // )
                        //     ],
                        [aValue < 0 ? (10 + aValue) / 10 : 50, "rgba(239, 239, 241, 1)"],
                        // [0.7, "#ddd"],
                        // [50 / 100, "#ddd"],
                        [1, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0, [{
                                    offset: 0,
                                    color: 'rgba(70, 190, 128, 1)',
                                },
                                {
                                    offset: 0.6,
                                    color: 'rgba(70, 190, 128, 0.8)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(70, 190, 128, 1)',
                                }
                            ]
                        )]
                    ],
                },
            },
            //分隔线样式。
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            pointer: {
                show: false,
                length: "103%",
                width: "2%",
            },
            title: {
                show: false,
                offsetCenter: [0, "60%"], // x, y，单位px
                textStyle: {
                    fontWeight: "bold",
                    color: "#0ab7ff",
                    fontSize: 30,
                },
            },
            //仪表盘详情，用于显示数据。
            detail: {
                show: false,
                offsetCenter: [0, "20%"],
                color: "#ffffff",
                textStyle: {
                    fontSize: 60,
                    color: "#000000"
                },
            },
            data: [{
                value: 30,
            }, ],
        },
        { //指针
            type: "gauge",
            radius: '100%',
            center: ["50%", "70%"],
            splitNumber: 0, //刻度数量
            startAngle: 170,
            endAngle: 10,
            axisLine: {
                show: false,
                lineStyle: {
                    width: 0,
                    color: [
                        [
                            1, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0, [{
                                        offset: 0,
                                        color: '#000000',
                                    },
                                    {
                                        offset: 1,
                                        color: '#000000',
                                    }
                                ]
                            )
                        ],
                    ],
                },
            },
            //分隔线样式。
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            pointer: {
                show: true,
                length: "103%",
                width: "2%",
            },
            title: {
                show: false,
                offsetCenter: [0, "60%"], // x, y，单位px
                textStyle: {
                    fontWeight: "bold",
                    color: "#0ab7ff",
                    fontSize: 30,
                },
            },
            //仪表盘详情，用于显示数据。
            detail: {
                show: false,
                offsetCenter: [0, "20%"],
                color: "#ffffff",
                textStyle: {
                    fontSize: 60,
                    color: "#000000"
                },
            },
            data: [{
                value: (0.5 + aValue / 20) * 100,
            }, ],
        },

    ],
};