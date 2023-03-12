option = {
    grid: {
        top: 15,
        right: 15,
        bottom: 15,
        left: 15
    },
    series: [
        {
            type: "gauge",
            name: "外层辅助",
            radius: "100%",
            startAngle: "225",
            endAngle: "-45",
            detail: {
                show: false
            },
            // data: [{value: 1, name: 90}],
            title: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [1, "#00FFFF"]
                    ],
                    width: 21,
                    opacity: 1
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
            }
        },
        // 内侧指针、数值显示
        {
            type: "gauge",
            center: ["50%", "50%"],
            radius: "95%",
            startAngle: 225,
            endAngle: -45,
            min: 0,
            max: 100,
            splitNumber: 5,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 50,
                    color: [
                        [
                            1,
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                    offset: 0,
                                    color: "rgba(157,200,13, 1)"
                                },
                                {
                                    offset: 0.222,
                                    color: "rgba(157,200,13, 1)"
                                },
                                {
                                    offset: 0.555,
                                    color: "rgba(255,239,10, 1)"
                                },

                                {
                                    offset: 1,
                                    color: "rgba(253,63,5,1)"
                                }
                            ])
                        ]
                    ]
                }
            },
            axisTick: {
                show: true,
                splitNumber: 4,
                length: 40
            },
            splitLine: {
                show: 0
            },
            axisLabel: {
                show: 0
            },
            pointer: {
                show: true,
                length: "95%",
                width: 10
            },
            title: {
                show: false
            },
            detail: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: "#FFED8B"
                }
            },
            data: [{
                value: 90
            }]
        }
    ]
};