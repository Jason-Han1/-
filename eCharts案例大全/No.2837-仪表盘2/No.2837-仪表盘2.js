const payload = { id: 'right-top' };

var dataArr = 80.47;
var colorSet = {
    color: '#0063E7',
};
option = {
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%',
    },
    grid: {
        top: 0,
    },
    series: [
        {
            name: '最外部进度条',
            type: 'gauge',
            radius: '80%',
            center: ['50%', '45%'],
            splitNumber: 10,
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                lineStyle: {
                    color: [
                        [
                            dataArr / 100,
                            new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                                {
                                    offset: 0,
                                    color: 'rgba(145,207,255,0)',
                                },
                                {
                                    offset: 0.5,
                                    color: 'rgba(145,207,255,0.2)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(145,207,255,1)',
                                },
                            ]),
                        ],
                        [1, 'rgba(28,128,245,.0)'],
                    ],
                    width: 3,
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
                show: false,
            },
            title: {
                //标题
                show: false,
            },
            data: [
                {
                    name: 'title',
                    value: dataArr,
                },
            ],
            pointer: {
                show: false,
            },
            animationDuration: 4000,
        },
        {
            name: '内部阴影',
            type: 'gauge',
            radius: '70%',
            center: ['50%', '45%'],
            z: 4,
            splitNumber: 10,
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                lineStyle: {
                    color: [
                        [
                            dataArr / 100,
                            new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                                {
                                    offset: 0,
                                    color: 'rgba(145,207,255,0)',
                                },
                                {
                                    offset: 0.5,
                                    color: 'rgba(145,207,255,0.1)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(145,207,255,0.3)',
                                },
                            ]),
                        ],
                        [1, 'rgba(28,128,245,.0)'],
                    ],
                    width: 300,
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
                formatter(value) {
                    if (value !== 0) {
                        return '{number|' + value + '}{percent|%}\n{text|全市营商环境指数}';
                    }
                    return 0;
                },
                offsetCenter: [0, -20],
                textStyle: {
                    padding: [0, 0, 0, 0],
                    fontSize: 18,
                    color: '#EDFFFD',
                },
                rich: {
                    number: {
                        color: '#E8F2FB',
                        fontSize: 24,
                        verticalAlign: 'bottom',
                    },
                    percent: {
                        color: '#E8F2FB',
                        fontSize: 14,
                        verticalAlign: 'bottom',
                    },
                    text: {
                        color: '#85B2E9',
                        fontSize: 14,
                        lineHeight: 20,
                        verticalAlign: 'bottom',
                    },
                },
            },
            title: {
                //标题
                show: false,
            },
            data: [
                {
                    name: 'title',
                    value: dataArr,
                },
            ],
            pointer: {
                show: false,
            },
        },
        {
            name: '内部圈',
            type: 'gauge',
            z: 2,
            min: 0,
            max: 100,
            splitNumber: 10,
            startAngle: 180,
            endAngle: 0,
            radius: '70%',
            center: ['50%', '45%'],
            axisLine: {
                lineStyle: {
                    color: [[1, colorSet.color]],
                    width: 3,
                    shadowColor: 'rgba(145,207,255,.5)',
                    shadowBlur: 6,
                    shadowOffsetX: 0,
                },
            },
            tooltip: {
                show: false,
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
                show: false,
            },
            title: {
                //标题
                show: false,
            },
            data: [
                {
                    name: 'title',
                    value: dataArr,
                },
            ],
            pointer: {
                show: false,
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
            center: ['50%', '45%'],
            min: 0, //最小刻度
            max: 100, //最大刻度
            splitNumber: 10, //刻度数量
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                show: false,
                lineStyle: {
                    width: 5,
                    color: [[1, '#1087e2']],
                },
            }, //仪表盘轴线
            axisLabel: {
                show: true,
                color: 'rgba(172,207,255,.5)',
                distance: 2,
                fontSize: 12,
            }, //刻度标签。
            axisTick: {
                show: true,
                splitNumber: 7,
                lineStyle: {
                    color: '#1C3164', //用颜色渐变函数不起作用
                    width: 1,
                },
                length: 4,
            }, //刻度样式
            splitLine: {
                show: true,
                length: 8,
                lineStyle: {
                    color: '#1C3164', //用颜色渐变函数不起作用
                },
            }, //分隔线样式
            detail: {
                show: false,
            },
            pointer: {
                show: false,
            },
        },
    ],
};
