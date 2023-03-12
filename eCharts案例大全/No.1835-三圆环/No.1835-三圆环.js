option = {
    title: [
        {
            text: '治安处理事件',
            left: '20%',
            top: '70%',
            textAlign: 'center',
            textStyle: {
                fontWeight: 'normal',
                color: 'rgba(105, 120, 136, 1)',
                fontSize: 14,
            },
        },
        {
            text: '治安处理事件',
            left: '50%',
            top: '70%',
            textAlign: 'center',
            textStyle: {
                fontWeight: 'normal',
                color: 'rgba(105, 120, 136, 1)',
                fontSize: 14,
            },
        },
        {
            text: '治安处理事件',
            left: '80%',
            top: '70%',
            textAlign: 'center',
            textStyle: {
                fontWeight: 'normal',
                color: 'rgba(105, 120, 136, 1)',
                fontSize: 14,
            },
        },
        {
            text: '345次',
            left: '20%',
            top: '50%',
            textAlign: 'center',
            textStyle: {
                fontWeight: 'normal',
                color: 'rgba(51, 147, 236, 1)',
                fontSize: 14,
            },
        },
        {
            text: '345次',
            left: '50%',
            top: '50%',
            textAlign: 'center',
            textStyle: {
                fontWeight: 'normal',
                color: 'rgba(220, 161, 82, 1)',
                fontSize: 14,
            },
        },
        {
            text: '345次',
            left: '80%',
            top: '50%',
            textAlign: 'center',
            textStyle: {
                fontWeight: 'normal',
                color: 'rgba(81, 193, 156, 1)',
                fontSize: 14,
            },
        },
    ],
    backgroundColor: '#011128',
    color: ['#eb644b', '#313443', '#fff'],
    toolbox: {
        show: false,
        feature: {
            mark: {
                show: true,
            },
            dataView: {
                show: true,
                readOnly: false,
            },
            restore: {
                show: true,
            },
            saveAsImage: {
                show: true,
            },
        },
    },
    series: [
        // 图1
        {
            name: 'Line 1',
            type: 'pie',
            clockWise: false,
            radius: ['30%', '28%'],
            center: ['20%', '50%'],
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                    shadowBlur: 40,
                    shadowColor: 'rgba(51, 147, 236, 1)',
                },
            },
            hoverAnimation: false,
            data: [
                {
                    value: 75,
                    name: '01',
                    itemStyle: {
                        normal: {
                            color: 'rgba(51, 147, 236, 1)', //已完成的圆环的颜色
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false,
                            },
                        },
                        emphasis: {
                            color: 'rgba(51, 147, 236, 1)', //已完成的圆环的颜色
                        },
                    },
                },
                {
                    value: 25,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: 'rgba(51, 147, 236, 0.27)', //未完成的圆环的颜色
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false,
                            },
                        },
                        emphasis: {
                            color: 'rgba(51, 147, 236, 0.27)', //未完成的圆环的颜色
                        },
                    },
                },
            ],
        },
        {
            name: 'Line 2',
            type: 'pie',
            animation: false,
            clockWise: false,
            radius: ['35%', '34%'],
            center: ['20%', '50%'],
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                    shadowBlur: 40,
                    shadowColor: 'rgba(51, 147, 236, 1)',
                },
            },
            hoverAnimation: false,
            tooltip: {
                show: false,
            },
            data: [
                {
                    value: 100,
                    name: '02',
                    itemStyle: {
                        normal: {
                            color: 'rgba(51, 147, 236, 1)', //已完成的圆环的颜色
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false,
                            },
                        },
                        emphasis: {
                            color: 'rgba(51, 147, 236, 1)', //已经完成的圆环的颜色
                        },
                    },
                },
                {
                    value: 0,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: 'rgba(51, 147, 236, 1)', //未完成的圆环的颜色
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false,
                            },
                        },
                        emphasis: {
                            color: 'rgba(51, 147, 236, 1)', //未完成的圆环的颜色
                        },
                    },
                },
            ],
        },

        // 图2
        {
            name: 'Line 1',
            type: 'pie',
            clockWise: false,
            radius: ['50%', '48%'],
            center: ['50%', '50%'],
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                    shadowBlur: 40,
                    shadowColor: 'rgba(220, 161, 82, 1)',
                },
            },
            hoverAnimation: false,
            data: [
                {
                    value: 75,
                    name: '01',
                    itemStyle: {
                        normal: {
                            color: 'rgba(220, 161, 82, 1)', //已完成的圆环的颜色
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false,
                            },
                        },
                        emphasis: {
                            color: 'rgba(220, 161, 82, 1)', //已完成的圆环的颜色
                        },
                    },
                },
                {
                    value: 25,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: 'rgba(220, 161, 82, 0.27)', //未完成的圆环的颜色
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false,
                            },
                        },
                        emphasis: {
                            color: 'rgba(220, 161, 82, 0.27)', //未完成的圆环的颜色
                        },
                    },
                },
            ],
        },
        {
            name: 'Line 2',
            type: 'pie',
            animation: false,
            clockWise: false,
            radius: ['55%', '54%'],
            center: ['50%', '50%'],
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                    shadowBlur: 40,
                    shadowColor: 'rgba(220, 161, 82, 1)',
                },
            },
            hoverAnimation: false,
            tooltip: {
                show: false,
            },
            data: [
                {
                    value: 100,
                    name: '02',
                    itemStyle: {
                        normal: {
                            color: 'rgba(220, 161, 82, 1)', //未完成的圆环的颜色
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false,
                            },
                        },
                        emphasis: {
                            color: 'rgba(220, 161, 82, 1)', //未完成的圆环的颜色
                        },
                    },
                },
                {
                    value: 0,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: 'rgba(220, 161, 82, 1)', //未完成的圆环的颜色
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false,
                            },
                        },
                        emphasis: {
                            color: 'rgba(220, 161, 82, 1)', //未完成的圆环的颜色
                        },
                    },
                },
            ],
        },

        // 图3
        {
            name: 'Line 1',
            type: 'pie',
            clockWise: false,
            radius: ['50%', '48%'],
            center: ['80%', '50%'],
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                    shadowBlur: 40,
                    shadowColor: 'rgba(81, 193, 156, 1)',
                },
            },
            hoverAnimation: false,
            data: [
                {
                    value: 500,
                    name: '01',
                    itemStyle: {
                        normal: {
                            color: 'rgba(81, 193, 156, 1)', //已完成的圆环的颜色
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false,
                            },
                        },
                        emphasis: {
                            color: 'rgba(81, 193, 156, 1)', //已完成的圆环的颜色
                        },
                    },
                },
                {
                    value: 500,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: 'rgba(81, 193, 156, 0.27)', //未完成的圆环的颜色
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false,
                            },
                        },
                        emphasis: {
                            color: 'rgba(81, 193, 156, 0.27)', //未完成的圆环的颜色
                        },
                    },
                },
            ],
        },
        {
            name: 'Line 2',
            type: 'pie',
            animation: false,
            clockWise: false,
            radius: ['55%', '54%'],
            center: ['80%', '50%'],
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                    shadowBlur: 40,
                    shadowColor: 'rgba(81, 193, 156, 1)',
                },
            },
            hoverAnimation: false,
            tooltip: {
                show: false,
            },
            data: [
                {
                    value: 100,
                    name: '02',
                    itemStyle: {
                        normal: {
                            color: 'rgba(81, 193, 156, 1)', //未完成的圆环的颜色
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false,
                            },
                        },
                        emphasis: {
                            color: 'rgba(81, 193, 156, 1)', //未完成的圆环的颜色
                        },
                    },
                },
                {
                    value: 0,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: 'rgba(81, 193, 156, 1)', //未完成的圆环的颜色
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false,
                            },
                        },
                        emphasis: {
                            color: 'rgba(81, 193, 156, 1)', //未完成的圆环的颜色
                        },
                    },
                },
            ],
        },
    ],
};
