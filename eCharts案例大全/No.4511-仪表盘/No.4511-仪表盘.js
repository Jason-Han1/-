var value = 60;
var colorSet = {
    color: '#0063E7'
};

option = {
    title: {
        show: true,
        text: '仪表盘'
    },
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },
    series: [{
            name: "最外部进度条",
            type: "gauge",
            radius: '65%',
            startAngle: 202.5,
            endAngle: -22.5,
            min: 0,
            max: 100,
            splitNumber: 10,
            axisLine: {
                lineStyle: {
                    color: [
                        [value / 100, new echarts.graphic.LinearGradient(
                            0, 1, 0, 0, [{
                                    offset: 0,
                                    color: '#fe827b',
                                },
                                {
                                    offset: 1,
                                    color: '#ffc272',
                                }
                            ]
                        )],
                        [
                            1, '#ddd'
                        ]
                    ],
                    width: 3

                },
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,

            },
            splitLine: {
                show: false,
            },
            itemStyle: {
                show: false,
            },
            detail: {
                show: false
            },
            title: { //标题
                show: false,
            },
            data: [{
                name: "title",
                value: value,
            }],
            pointer: {
                show: false,
            },
            animationDuration: 4000,
        },
        {
            name: '排名',
            type: 'gauge',
            radius: '60%',
            startAngle: -22.5,
            endAngle: 202.5,
            clockwise: false,
            min: 0,
            max: 100,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 20,
                    color: [
                        [
                            1, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0, [{
                                    offset: 0,
                                    color: '#fe827b',
                                }, {
                                    offset: 1,
                                    color: '#ffc272',
                                }]
                            )
                        ],
                    ]
                }
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                distance: -60,
                color: '#000',
                formatter: function(v) {
                    // switch (v + '') {
                    //     case '100':
                    //         return '高';
                    //     case '50':
                    //         return '中';
                    //     case '0':
                    //         return '低';
                    // }
                }
            },
            title: { //标题
                show: true,
                offsetCenter: [0, 75], // x, y，单位px
                textStyle: {
                    color: "#999",
                    fontSize: 14, //表盘上的标题文字大小
                    fontWeight: 400,
                    fontFamily: 'PingFangSC'
                }
            },
            detail: {
                show: true,
                offsetCenter: [0, 0],
                textStyle: {
                    fontSize: 40,
                },
                formatter: function(value) {
                    return value + '\n先锋指数'
                }
            },
            pointer: {
                show: false
            },
            data: [{
                name: '评估时间：2020.12.23',
                value: value
            }]
        },
        {
            type: 'gauge',
            radius: '54%',
            min: 0,
            max: 100,
            startAngle: -22.5,
            endAngle: 202.5,
            clockwise: false,
            splitNumber: 5,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    color: [
                        [1, 'rgba(0,0,0,0)']
                    ]
                }
            }, //仪表盘轴线
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#fff',
                    width: 1
                },
                length: -8
            }, //刻度样式
            splitLine: {
                show: true,
                length: -20,
                lineStyle: {
                    color: '#fff'
                }
            }, //分隔线样式
            axisLabel: {
                //show:false,
                distance: 30,
                textStyle: {
                    color: '#000',
                    fontSize: '14'
                },
                formatter: '{value}'
            },
            pointer: {
                show: false
            },
            detail: {
                show: false
            }
        },
    ]
};