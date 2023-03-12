var data = {
    value: 76,
    name: '违章比',
};
option = {
    backgroundColor: '#0B2C6F',
    title: {
        text: '{a|96.34%}\n{b|乡村振新电\n力指数}',
        x: 'center',
        y: '42%',
        textStyle: {
            fontSize: 12,
            rich: {
                a: {
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: 15,
                    align: 'center'
                },
                b: {
                    color: 'rgba(133, 178, 233, 0.8)',
                    fontSize: 12,
                    height: 16,
                    align: 'center'
                }
            }
        }
    },
    legend: {
        icon: 'circle',
        bottom: '45%',
        itemWidth: 12,
        itemHeight: 6,
        textStyle: {
            color: '#2CD3FD',
            fontSize: 12
        },
        align: 'left'
    },
    series: [
        {
            type: 'pie',
            hoverAnimation: false,
            label: {
                show: false,
            },
            center: ['50%', '50%'],
            radius: ['0%', '40%'],
            startAngle: 180,
            data: [
                {
                    name: '',
                    value: 100,
                    itemStyle: {
                        color: 'rgba(226, 107, 67, 0.2)',
                    },
                },
                {
                    name: '',
                    value: 100,
                    itemStyle: {
                        color: 'transparent',
                    },
                },
            ],
        },
        {
            type: 'pie',
            hoverAnimation: false,
            label: {
                show: false,
            },
            center: ['50%', '50%'],
            radius: ['72%', '73%'],
            startAngle: 180,
            data: [
                {
                    name: '',
                    value: 100,
                    itemStyle: {
                        color: 'rgba(226, 107, 67, 0.2)',
                    },
                },
                {
                    name: '',
                    value: 100,
                    itemStyle: {
                        color: 'transparent',
                    },
                },
            ],
        },
        {
            type: 'pie',
            hoverAnimation: false,
            label: {
                show: false,
            },
            center: ['50%', '50%'],
            radius: ['50%', '70%'],
            startAngle: 180,
            data: [
                {
                    name: '',
                    value: 100,
                    itemStyle: {
                        color: 'rgba(226, 107, 67, 0.2)',
                    },
                },
                {
                    name: '',
                    value: 100,
                    itemStyle: {
                        color: 'transparent',
                    },
                },
            ],
        },
        {
            name: '',
            type: 'gauge',
            min: 0, //最小刻度
            max: 100, //最大刻度
            splitNumber: 20, //刻度数量
            center: ['50%', '50%'],
            radius: '50%',
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                show: false,
            }, //仪表盘轴线
            axisLabel: {
                show: false,
            }, //刻度标签。
            axisTick: {
                show: true,
                splitNumber: 7,
                lineStyle: {
                    color: 'rgba(235, 185, 33, 1)', //用颜色渐变函数不起作用
                    width: 1,
                },
                length: 0, //不显示的刻度长度
            }, //刻度样式
            splitLine: {
                show: true,
                length: 8, //显示的刻度长度
                lineStyle: {
                    color: 'rgba(235, 185, 33, 1)', //用颜色渐变函数不起作用
                },
            }, //分隔线样式
            detail: {
                show: false,
            },
            pointer: {
                show: false,
            },
        },
        {
            type: 'pie',
            label: {
                show: false,
            },
            center: ['50%', '50%'],
            radius: ['57%', '63%'],
            startAngle: 180,
            data: [
                {
                    name: '用量',
                    value: 25,
                    itemStyle: {
                        color: 'rgba(204, 159, 22, 1)',
                    },
                },
                {
                    name: '未用量', // 实际显示部分是总量-用量
                    value: 75,
                    itemStyle: {
                        color: 'rgba(181, 68, 32, 1)',
                    },
                },
                {
                    name: '',
                    value: 100,
                    itemStyle: {
                        color: 'transparent',
                    },
                },
            ],
        },
    ],
};
