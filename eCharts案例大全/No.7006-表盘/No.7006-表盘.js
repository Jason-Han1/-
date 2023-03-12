option = {
            title: [
                {
                    text: 'Amazfit 4.0.0增量覆盖率',
                    left: '20%', //标题位置
                    bottom: '29%',
                    textStyle: {
                        color: "#050505",
                        fontSize: 18
                    },
                    subtext: '注：基于线上版本，进行增量计算的结果'
                }, {
                    text: 'Amazfit 4.0.0增量覆盖率',
                    left: '65%', //标题位置
                    bottom: '29%',
                    textStyle: {
                        color: "#050505",
                        fontSize: 18
                    },
                    subtext: '注：本次全量计算的结果'
                }],
            tooltip: {
                formatter: '{a} <br/>{b} : {c}%'
            },
            toolbox: {
                feature: {
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [
                {
                    name: '覆盖率',
                    type: 'gauge',
                    radius: '50%',
                    center: ['30%', '50%'],    // 默认全局居中
                    pointer: {
                        width: 7
                    },
                    splitLine: {
                        show: true,
                        length: 30,
                        lineStyle: {
                            color: '#5A5A5A',
                            width: 3
                        }
                    },
                    axisTick: {
                        length: 20,
                        lineStyle: {
                            color: '#5A5A5A',
                            width: 1
                        }
                    },
                    axisLabel: {
                        fontSize: 18,
                        formatter: function (value) {
                            return value + '%';
                        }
                    },
                    axisLine: {
                        lineStyle: { // 属性lineStyle控制线条样式
                            color: [ //表盘颜色
                                [0.3, "#999999"],//0-30%处的颜色
                                [0.6, "#E54648"],//30%-60%处的颜色
                                [0.8, "#FFBF28"],//60%-80%处的颜色
                                [0.9, "#8ACF57"],//80%-90%处的颜色
                                [1, "#00B050"]//90%-100%处的颜色
                            ],
                            width: 20//表盘宽度
                        }
                    },
                    title: {
                        show: false
                    },
                    detail: {
                        formatter: "{score|{value}}",
                        offsetCenter: [0, "62%"],
                        height: 30,
                        rich: {
                            score: {
                                fontSize: 45
                            }
                        }
                    },
                    data: [{ value: 90, name: 'Amazfit 4.0.0增量覆盖率' }]
                }
                ,
                {
                    name: '覆盖率',
                    type: 'gauge',
                    radius: '50%',
                    center: ['75%', '50%'],    // 默认全局居中
                    pointer: {
                        width: 7
                    },
                    splitLine: {
                        show: true,
                        length: 30,
                        lineStyle: {
                            color: '#5A5A5A',
                            width: 3
                        }
                    },
                    axisTick: {
                        length: 20,
                        lineStyle: {
                            color: '#5A5A5A',
                            width: 1
                        }
                    },
                    axisLabel: {
                        fontSize: 18,
                        formatter: function (value) {
                            return value + '%';
                        }
                    },
                    axisLine: {
                        lineStyle: { // 属性lineStyle控制线条样式
                            color: [ //表盘颜色
                                [0.3, "#999999"],//0-30%处的颜色
                                [0.6, "#E54648"],//30%-60%处的颜色
                                [0.8, "#FFBF28"],//60%-80%处的颜色
                                [0.9, "#8ACF57"],//80%-90%处的颜色
                                [1, "#00B050"]//90%-100%处的颜色
                            ],
                            width: 20//表盘宽度
                        }
                    },
                    detail: {
                        formatter: "{score|{value}}",
                        offsetCenter: [0, "62%"],
                        height: 30,
                        rich: {
                            score: {
                                fontSize: 45
                            }
                        }
                    },
                    title: {
                        show: false
                        // offsetCenter: [0, '85%'],       // x, y，单位px
                        // textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        //     fontWeight: 'bold',
                        //     fontSize:20
                        // }
                    },
                    data: [{ value: 50, name: 'Amazfit 4.0.0全量覆盖率' }]
                }
            ]
        }