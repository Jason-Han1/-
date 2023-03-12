option = {
    // backgroundColor: "#fff",
    series: [{
            name: '刻度',
            type: 'gauge',
            radius: '60%',
            min: 0,
            max: 100,
            splitNumber: 5, //刻度数量
            startAngle: 220,
            endAngle: -40,
            axisLine: {
                show: false,
                lineStyle: {
                    width: 1,
                    color: [
                        [1, 'rgba(0,0,0,0)']
                    ]
                }
            }, //仪表盘轴线
            axisLabel: {
                show: true,
                color: '#3B53A2',
                distance: -30,
                fontSize: 11
            }, //刻度标签。
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#3B53A2',
                    width: 1
                },
                length: -2
            }, //刻度样式
            splitLine: {
                show: true,
                length: -4,
                lineStyle: {
                    color: '#3B53A2',
                    width: 1
                }
            }, //分隔线样式
            detail: {
                show: false
            },
            pointer: {
                show: false
            }
        },
        {


            type: 'gauge',
            radius: '55%',
            min: 0,
            max: 100,
            center: ['50%', '50%'],

            splitNumber: 0, //刻度数量
            startAngle: 220,
            endAngle: -40,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 13,
                    color: [
                        [
                            0.17, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0, [{
                                        offset: 0,
                                        color: '#5B53E6'
                                    },
                                    {
                                        offset: 1,
                                        color: '#0F74DA'
                                    }
                                ]
                            )
                        ],
                        [
                            1, '#DAE1F4'
                        ]
                    ]
                }
            },
            //分隔线样式。
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            pointer: {
                show: true,
                width: "8%",
                length: '20%',
            },
            itemStyle: {
                normal: {
                    color: '#0F74DA'
                }
            },

            //仪表盘详情，用于显示数据。
            detail: {
                show: false,
                offsetCenter: [0, 0],
                color: '#ddd',
                formatter: function(params) {
                    return params
                },
                textStyle: {
                    fontSize: 12
                }
            },
            data: [{
                // name: "当前用户总数",
                value: 17.73
            }]
        }
    ]
};