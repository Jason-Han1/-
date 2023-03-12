
const pointerData = 30; // 仪表指针数据
option = {
        backgroundColor: "balck",
        title: {
            color: 'red',
            name: '重要事件整改率',
        },
        series: [
            {
                type: 'gauge',
                radius: 150,
                z: 1,
                center: ['50%', '55%'],
                startAngle: 180,
                endAngle: 0,
                min: 0,
                max: 100,
                splitNumber: 50,

                splitLine: {
                    show: true,
                    length: 15,
                    distance: -10,
                    lineStyle: {
                        color: 'black',
                        width: 5,
                    },
                },
                pointer: {
                    //仪表盘指针
                    show: false,
                },
                detail: {
                    //标题
                    show: true,
                    offsetCenter: [0, -40],
                    color: '#D6F1FF',
                    fontSize: 30,
                    formatter: function(value) {
                        return (
                            '{value|' +
                            value.toFixed(2) +
                            '%}\n\n{text|重要事件整改率}'
                        );
                    },
                    rich: {
                        value: {
                            color: '#ffffff',
                            fontSize: 18,
                            borderColor: '#3982f7', // 值域边框颜色
                            //边框颜色
                            borderWidth: 1,
                            shadowColor: '#2d71f6', //阴影颜色
                            shadowOffsetX: 1, //阴影水平方向上的偏移距离
                            shadowOffsetY: 1, //阴影垂直方向上的偏移距离
                            shadowBlur: 8,
                            borderRadius: 6,
                            padding: [8, 12, 8, 12],
                        },
                        text: {
                            fontSize: 18,
                            color: '#226FD0',
                        },
                    },
                },
                // 仪表盘的线，颜色值为一个数组
                axisLine: {
                    show: true,
                    // 两端是否设置为圆角；在5.0之后的版本有效
                    roundCap: false,
                    lineStyle: {
                        width: 10,
                        color: [
                            [
                                pointerData / 100,
                                {
                                    x: 0,
                                    y: 0,
                                    x1: 1,
                                    y1: 0,
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: '#0247C7',
                                        },
                                        {
                                            offset: 1,
                                            color: '#0247C7',
                                        },
                                    ],
                                },
                            ],
                            [1, 'rgba(2, 71, 199,0.15)'],
                        ],
                    },
                },
                // 仪表盘刻度标签
                axisLabel: {
                    show: false,
                },
                // 刻度
                axisTick: {
                    show: false,
                },

                data: [pointerData],
            },
            {
                type: 'gauge',
                radius: 120,
                center: ['50%', '55%'],
                splitNumber: 0, //刻度数量
                startAngle: 180,
                endAngle: 0,
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 5, // 内圈刻度
                        borderWidth: 1,
                        shadowColor: '#3982f7', //阴影颜色
                        shadowOffsetX: 0, //阴影水平方向上的偏移距离
                        shadowOffsetY: 0, //阴影垂直方向上的偏移距离
                        shadowBlur: 8,
                        borderRadius: 6,
                        // color: "#fa1900"
                        color: [
                            [
                                1,
                                new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                    {
                                        offset: 0,
                                        color: '#0E2562',
                                    },
                                    {
                                        offset: 0.5,
                                        color: '#0E2562',
                                    },
                                    {
                                        offset: 1,
                                        color: '#0E2562',
                                    },
                                ]),
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
                    show: false,
                    length: '80%',
                    width: '20%',
                },
                // title: {
                //     show: true,
                //     offsetCenter: ['0%', "-45%"], // x, y，单位px 瞬时流量
                //     textStyle: {
                //         color: "#ffffff",
                //         fontSize: 18,
                //         fontWeight: 400,
                //         opacity: 0.9,
                //     },
                // },
                //仪表盘详情，用于显示数据。
                detail: {
                    show: false,
                    offsetCenter: ['10%', '-30%'],
                    color: '#ffffff',
                    padding: [0, 10],
                    height: 20,
                    width: 50,
                    backgroundColor: 'red',
                    borderRadius: 2,
                    formatter: function(value) {
                        return '91.90%';
                    },
                    textStyle: {
                        fontSize: 12,
                    },
                },
                // data: [{
                //     name: "瞬时流量",value:'',
                // }],
            },
        ],
    };
