var targetValue = 200;
var realValue = 88;
var data = {
    title: '仪表盘',
    // value: (100 * realValue / targetValue).toFixed(2),
    value: 40,
    color: {
        pieMini: '#ffca1c', //小圆形颜色
        pieMiniMini: '#fff', //小小圆形颜色
        piePlus: '#5DD1FA', //大圆形颜色
        value: '#687284', //底部数值颜色
    },
}

var option = {
    title: [{
            text: '三相不同期',
            top: '58%',
            left: '22.5%',
            textStyle: {
                color: '#fff',
                fontSize: 18,
                align: 'center'
            }
        },
        {
            text: '谢波总含量',
            left: 'center',
            top: '58%',
            textStyle: {
                color: '#fff',
                fontSize: 18,
                align: 'center'
            }
        },
        {
            text: '电压合格率',
            top: '58%',
            left: '66.5%',
            textStyle: {
                color: '#fff',
                fontSize: 18,
                align: 'center'
            }
        },
    ],
    backgroundColor: "#062a44",
    series: [{
            name: '刻度1',
            type: 'gauge',
            radius: '30%',
            min: 0, //最小刻度
            max: 100, //最大刻度
            splitNumber: 10, //刻度数量
            startAngle: 215,
            endAngle: -35,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    color: [
                        [
                            1,
                            new echarts.graphic.LinearGradient(
                                0, 0, 1, 0, [{
                                        offset: 0,
                                        color: '#173A66'
                                    },
                                    {
                                        offset: 1,
                                        color: '#36bdfd'
                                    }
                                ])
                        ]
                    ]
                }
            },
            //仪表盘轴线
            axisLabel: {
                show: false,
            },
            //刻度标签。
            axisTick: {
                show: false
            },
            //刻度样式
            splitLine: {
                show: false
            },
            //分隔线样式
            detail: {
                show: false
            },
            pointer: {
                show: false
            }
        },
        {
            name: "仪表盘1",
            type: "gauge",
            radius: '29%',
            splitNumber: 10,
            startAngle: 215,
            endAngle: -35,
            axisLine: {
                lineStyle: {
                    color: [
                        [
                            data.value / 100,
                            new echarts.graphic.LinearGradient(
                                0, 0, 1, 0, [{
                                        offset: 0,
                                        color: '#173A66'
                                    },
                                    {
                                        offset: 1,
                                        color: '#36bdfd'
                                    }
                                ])
                        ]
                    ],
                    width: 8
                }
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
                formatter: function(value) {
                    if (value !== 0) {
                        var num = Math.round(value);
                        return parseInt(num).toFixed(0) + "%";
                    } else {
                        return 0;
                    }
                },
                textStyle: {
                    padding: [0, 0, 80, 0],
                    fontSize: 28,
                    fontWeight: '700',
                    color: '#36bdfd'
                }
            },
            data: [{
                value: data.value,
            }],
            pointer: {
                show: false
            },
        },

        {
            name: '刻度2',
            type: 'gauge',
            radius: '20%',
            center: ['28%', '52%'],
            min: 0, //最小刻度
            max: 100, //最大刻度
            splitNumber: 10, //刻度数量
            startAngle: 215,
            endAngle: -35,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    color: [
                        [
                            1,
                            new echarts.graphic.LinearGradient(
                                0, 0, 1, 0, [{
                                        offset: 0,
                                        color: '#173A66'
                                    },
                                    {
                                        offset: 1,
                                        color: '#36bdfd'
                                    }
                                ])
                        ]
                    ]
                }
            },
            //仪表盘轴线
            axisLabel: {
                show: false,
            },
            //刻度标签。
            axisTick: {
                show: false
            },
            //刻度样式
            splitLine: {
                show: false
            },
            //分隔线样式
            detail: {
                show: false
            },
            pointer: {
                show: false
            }
        },
        {
            name: "仪表盘2",
            type: "gauge",
            radius: '19%',
            center: ['28%', '52%'],
            splitNumber: 10,
            startAngle: 215,
            endAngle: -35,
            axisLine: {
                lineStyle: {
                    color: [
                        [
                            data.value / 100,
                            new echarts.graphic.LinearGradient(
                                0, 0, 1, 0, [{
                                        offset: 0,
                                        color: '#173A66'
                                    },
                                    {
                                        offset: 1,
                                        color: '#36bdfd'
                                    }
                                ])
                        ]
                    ],
                    width: 8
                }
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
                formatter: function(value) {
                    if (value !== 0) {
                        var num = Math.round(value);
                        return parseInt(num).toFixed(0) + "%";
                    } else {
                        return 0;
                    }
                },
                textStyle: {
                    padding: [0, 0, 80, 0],
                    fontSize: 28,
                    fontWeight: '700',
                    color: '#36bdfd'
                }
            },
            data: [{
                value: data.value,
            }],
            pointer: {
                show: false
            },
        },
        
        {
            name: '刻度3',
            type: 'gauge',
            radius: '20%',
            center: ['72%', '52%'],
            min: 0, //最小刻度
            max: 100, //最大刻度
            splitNumber: 10, //刻度数量
            startAngle: 215,
            endAngle: -35,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    color: [
                        [
                            1,
                            new echarts.graphic.LinearGradient(
                                0, 0, 1, 0, [{
                                        offset: 0,
                                        color: '#173A66'
                                    },
                                    {
                                        offset: 1,
                                        color: '#36bdfd'
                                    }
                                ])
                        ]
                    ]
                }
            },
            //仪表盘轴线
            axisLabel: {
                show: false,
            },
            //刻度标签。
            axisTick: {
                show: false
            },
            //刻度样式
            splitLine: {
                show: false
            },
            //分隔线样式
            detail: {
                show: false
            },
            pointer: {
                show: false
            }
        },
        {
            name: "仪表盘3",
            type: "gauge",
            radius: '19%',
            center: ['72%', '52%'],
            splitNumber: 10,
            startAngle: 215,
            endAngle: -35,
            axisLine: {
                lineStyle: {
                    color: [
                        [
                            data.value / 100,
                            new echarts.graphic.LinearGradient(
                                0, 0, 1, 0, [{
                                        offset: 0,
                                        color: '#173A66'
                                    },
                                    {
                                        offset: 1,
                                        color: '#36bdfd'
                                    }
                                ])
                        ]
                    ],
                    width: 8
                }
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
                formatter: function(value) {
                    if (value !== 0) {
                        var num = Math.round(value);
                        return parseInt(num).toFixed(0) + "%";
                    } else {
                        return 0;
                    }
                },
                textStyle: {
                    padding: [0, 0, 80, 0],
                    fontSize: 28,
                    fontWeight: '700',
                    color: '#36bdfd'
                }
            },
            data: [{
                value: data.value,
            }],
            pointer: {
                show: false
            },
        },
    ]
};

