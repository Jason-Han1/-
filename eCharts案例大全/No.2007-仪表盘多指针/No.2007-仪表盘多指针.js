var normal=100,all=100;
option = {
    backgroundColor: '#0d1e1a',
    series: [{
            name: "刻度",
            type: "gauge",
            center: ["50%", "70%"],
            radius: '110%',
            min: 0, //最小刻度
            max: 100, //最大刻度
            splitNumber: 10, //刻度数量
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    color: [
                        [1, "rgba(0,0,0,0)"]
                    ],
                },
            }, //仪表盘轴线
            axisLabel: {
                show: true,
                color: "#4b695e",
                fontSize: 15,
                distance: -50,
                formatter: function(v) {
                    return v;
                },
            }, //刻度标签。
            axisTick: {
                show: true,
                splitNumber: 5,
                lineStyle: {
                    color: "#263b35",
                    width: 1,
                    // length:10
                },
                length: -20,
            }, //刻度样式
            splitLine: {
                show: true,
                length: -20,
                lineStyle: {
                    color: "#4aca96",
                    width: 2
                },
            }, //分隔线样式
        },
        {
            type: "gauge",
            radius: '100%',
            center: ["50%", "70%"],
            splitNumber: 0, //刻度数量
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 50,
                    color: [
                        [
                            1, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0, [{
                                        offset: 0,
                                        color: '#fcfe92',
                                    },
                                    {
                                        offset: 1,
                                        color: '#4ccb96',
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
                length: "80%",
                width: "2%",
            },
            title: {
                show: true,
                offsetCenter: [0, "60%"], // x, y，单位px
                textStyle: {
                    fontWeight: "bold",
                    color: "#0ab7ff",
                    fontSize: 30,
                },
            },
            //仪表盘详情，用于显示数据。
            detail: {
                show: true,
                offsetCenter: [0, "-40%"],
                color: "#ffffff",
                textStyle: {
                    fontSize: 60,
                    color: "#4aca96"
                },
            },
            data: [{
                value: 30,
            }, {
                value: 40,
            },{
                value: 50,
            },],
        }
    ],
};