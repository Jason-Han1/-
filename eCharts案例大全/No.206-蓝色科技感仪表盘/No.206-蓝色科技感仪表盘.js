var dataArr = 4;
var colorSet = {
    color: '#0063E7'
};
option = {
    backgroundColor:'#021434',
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },
    series: [{
            name: "最外部进度条",
            type: "gauge",
            radius: '80%',
            splitNumber: 10,
            axisLine: {
                lineStyle: {
                    color: [
                        [dataArr / 10, new echarts.graphic.LinearGradient(
                            0, 1, 0, 0, [{
                                    offset: 0,
                                    color: 'rgba(145,207,255,0)',
                                }, {
                                    offset: 0.5,
                                    color: 'rgba(145,207,255,0.2)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(145,207,255,1)',
                                }
                            ]
                        )],
                        [
                            1, 'rgba(28,128,245,.0)'
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
                value: dataArr,
            }],
            pointer: {
                show: false,
            },
            animationDuration: 4000,
        }, {
            name: "内部阴影",
            type: "gauge",
            // center: ['20%', '50%'],
            radius: '70%',
            z: 4,
            splitNumber: 10,
            axisLine: {
                lineStyle: {
                    color: [
                        [dataArr / 10, new echarts.graphic.LinearGradient(
                            0, 1, 0, 0, [{
                                    offset: 0,
                                    color: 'rgba(145,207,255,0)',
                                }, {
                                    offset: 0.5,
                                    color: 'rgba(145,207,255,0.1)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(145,207,255,0.3)',
                                }
                            ]
                        )],
                        [
                            1, 'rgba(28,128,245,.0)'
                        ]
                    ],
                    width: 80,
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
                        return parseInt(value);
                    } else {
                        return 0;
                    }
                },
                offsetCenter: [0, 5],
                textStyle: {
                    padding: [0, 0, 0, 0],
                    fontSize: 18,
                    color: '#EDFFFD'
                }
            },
            title: { //标题
                show: false,
            },
            data: [{
                name: "title",
                value: dataArr,
            }],
            pointer: {
                show: false,
            },
        }, {
            name: '内部圈',
            type: 'gauge',
            z: 2,
            min: 0,
            max: 10,
            splitNumber: 10,
            radius: '70%',
            axisLine: {
                lineStyle: {
                    color: [
                        [1, colorSet.color]
                    ],
                    width: 3,
                    shadowColor: 'rgba(145,207,255,.5)',
                    shadowBlur: 6,
                    shadowOffsetX: 0,
                }
            },
            tooltip: {
                show: false
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
                value: dataArr,
            }],
            itemStyle: {
                normal: {
                    color: 'rgba(145,207,255,1)'
                }
            },
            pointer: {
                show: true,
                length: '80%',
                radius: '20%',
                width: 3, //指针粗细
            },
            animationDuration: 4000,
        },
        {
            name: '内部刻度',
            type: 'gauge',
            radius: '65%',
            min: 0, //最小刻度
            max: 10, //最大刻度
            splitNumber: 10, //刻度数量
            startAngle: 225,
            endAngle: -45,
            axisLine: {
                show: false,
                lineStyle: {
                    width: 5,
                    color: [
                        [1, '#1087e2']
                    ],
                }
            }, //仪表盘轴线
            axisLabel: {
                show: true,
                color: 'rgba(172,207,255,.5)',
                distance: 2,
                fontSize: 12,
                formatter: function(v) {
                    switch (v + '') {
                        case '0':
                            return '0';
                        case '1':
                            return '1';
                        case '2':
                            return '2';
                        case '3':
                            return '3';
                        case '4':
                            return '4';
                        case '5':
                            return '5';
                        case '6':
                            return '6';
                        case '7':
                            return '7';
                        case '8':
                            return '8';
                        case '9':
                            return '9';
                        case '10':
                            return '10';
                    }
                }
            }, //刻度标签。
            axisTick: {
                show: true,
                splitNumber: 7,
                lineStyle: {
                    color: "#1C3164", //用颜色渐变函数不起作用
                    width: 1,
                },
                length: 4
            }, //刻度样式
            splitLine: {
                show: true,
                length: 8,
                lineStyle: {
                    color: '#1C3164', //用颜色渐变函数不起作用
                }
            }, //分隔线样式
            detail: {
                show: false
            },
            pointer: {
                show: false
            }
        }, { //指针上的圆
            type: 'pie',
            tooltip: {
                show: false
            },
            hoverAnimation: false,
            legendHoverLink: false,
            radius: ['0%', '20%'],
            center: ['50%', '50%'],
            label: {
                normal: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 120,
                itemStyle: {
                    normal: {
                        color: "rgb(14,31,73)",
                    },
                }
            }]
        },
    ]
}