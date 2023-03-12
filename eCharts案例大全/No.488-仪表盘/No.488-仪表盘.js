/**
 *
 * 作者: GhostCat
 * 博客: https://gcat.cc
 * 描述: 仪表盘
 *
 */

option = {
    backgroundColor: '#07182e',
    grid: {
        right: '5%',
        left: '5%',
        top: '5%',
        bottom: '5%',
        borderWidth: 1,
    },
    xAxis: {
        show: false,
        type: 'category',
        data: ['Mon'],
    },
    yAxis: {
        show: false,
        type: 'value',
    },
    series: [
        {
            name: '压力',
            type: 'gauge',
            radius: '80%',
            min: 0,
            max: 100,
            splitNumber: 5,
            startAngle: 180,
            endAngle: 0,
            zlevel: 0,
            data: [
                {
                    value: 80,
                    name: '压力(Pa)',
                    itemStyle: {
                        color: '#fff',
                    },
                },
            ],
            legend: {
                padding: 0,
                margin: 0,
            },
            pointer: {
                show: true,
                length: '150%',
                radius: '50%',
                width: 10, //指针粗细
            },
            title: {
                // 仪表盘标题。
                show: false, // 是否显示标题,默认 true。
            },
            markLine: {
                precision: 2,
            },
            axisTick: {
                show: false,
                splitNumber: 5,
                lineStyle: {
                    width: 2,
                },
                length: -8,
            }, //刻度样式
            splitLine: {
                show: true,
                length: -20,
                lineStyle: {
                    color: '#233446', //用颜色渐变函数不起作用
                },
            }, //分隔线样式
            axisLabel: {
                show: true,
                distance: -20,
            },
            axisLine: {
                // 坐标轴线
                lineStyle: {
                    // 属性lineStyle控制线条样式
                    width: 20, // 仪表盘宽度
                    color: [
                        [0.2, '#2ca1ff'],
                        [0.8, '#0adbfa'],
                        [1, '#eaba5f'],
                    ],
                },
            },
        },
        {
            name: '小圆形',
            type: 'pie',
            hoverAnimation: false,
            legendHoverLink: false,
            zlevel: 0,
            radius: ['0%', '5%'],
            tooltip: {
                show: false,
            },
            z: 10,
            label: {
                normal: {
                    show: false,
                    position: 'center',
                },
                emphasis: {
                    show: false,
                },
            },
            labelLine: {
                normal: {
                    show: false,
                },
            },
            data: [
                {
                    value: 100,
                    name: '2',
                    itemStyle: {
                        normal: {
                            color: '#fff',
                        },
                    },
                },
            ],
        },
        {
            name: '小圆形',
            type: 'pie',
            hoverAnimation: false,
            legendHoverLink: false,
            radius: ['5%', '6%'],
            tooltip: {
                show: false,
            },
            z: 10,
            label: {
                normal: {
                    show: false,
                    position: 'center',
                },
                emphasis: {
                    show: false,
                },
            },
            labelLine: {
                normal: {
                    show: false,
                },
            },
            data: [
                {
                    value: 100,
                    name: '2',
                    itemStyle: {
                        normal: {
                            color: '#08BBED',
                        },
                    },
                },
            ],
        },
        {
            name: '小圆形',
            type: 'pie',
            hoverAnimation: false,
            legendHoverLink: false,
            tooltip: {
                show: false,
            },
            radius: ['6%', '8%'],
            z: 10,
            label: {
                normal: {
                    show: false,
                    position: 'center',
                },
                emphasis: {
                    show: false,
                },
            },
            labelLine: {
                normal: {
                    show: false,
                },
            },
            data: [
                {
                    value: 0,
                    name: '1',
                    itemStyle: {
                        normal: {
                            color: 'red',
                        },
                    },
                },
                {
                    value: 100,
                    name: '2',
                    itemStyle: {
                        normal: {
                            color: 'rgba(0,0,0,0)',
                            borderColor: 'red',
                        },
                    },
                },
            ],
        },
    ],
};
