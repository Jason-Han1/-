option = {
    backgroundColor: 'rgba(195, 210, 230, 1)',
    title: [
        {
            text: 'a',
            left: '20%',
            top: '60%',
            textAlign: 'center',
            textStyle: {
                fontWeight: 'normal',
                fontSize: '14',
                color: 'rgba(105, 120, 136, 1)',
                textAlign: 'center',
            },
        },
        {
            text: 'b',
            left: '40%',
            top: '60%',
            textAlign: 'center',
            textStyle: {
                color: 'rgba(105, 120, 136, 1)',
                fontWeight: 'normal',
                fontSize: '14',
                textAlign: 'center',
            },
        },
        {
            text: 'c',
            left: '60%',
            top: '60%',
            textAlign: 'center',
            textStyle: {
                color: 'rgba(105, 120, 136, 1)',
                fontWeight: 'normal',
                fontSize: '14',
                textAlign: 'center',
            },
        },
        {
            text: 'd',
            left: '80%',
            top: '60%',
            textAlign: 'center',
            textStyle: {
                color: 'rgba(105, 120, 136, 1)',
                fontWeight: 'normal',
                fontSize: '14',
                textAlign: 'center',
            },
        },
    ],

    series: [
        //第一个图表
        {
            type: 'pie',
            hoverAnimation: false, //鼠标经过的特效
            radius: ['50%', '25%'],
            center: ['20%', '50%'],
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false,
                },
            },
            label: {
                normal: {
                    position: 'center',
                },
            },
            data: [
                {
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: 'rgba(169, 166, 243, 0.3)',
                        },
                    },
                },
                {
                    value: 35,
                    itemStyle: {
                        normal: {
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false,
                            },
                            color: 'rgba(0,0,0,0)',
                            borderWidth: 0,
                        },
                        emphasis: {
                            color: 'rgba(0,0,0,0)',
                            borderWidth: 0,
                        },
                    },
                },
            ],
        },
        //上层环形配置
        {
            type: 'pie',
            hoverAnimation: false, //鼠标经过的特效
            radius: ['50%', '25%'],
            center: ['20%', '50%'],
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false,
                },
            },
            label: {
                normal: {
                    position: 'center',
                },
            },
            data: [
                {
                    value: 9,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                                {
                                    offset: 0,
                                    color: 'rgba(78, 72, 203, 1)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(78, 72, 203, 0.1)',
                                },
                            ]),
                        },
                    },
                    label: {
                        normal: {
                            formatter: '9',
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: '14',
                                fontWeight: 'normal',
                                color: 'rgba(78, 72, 203, 1)',
                            },
                        },
                    },
                },
                {
                    value: 35,
                    itemStyle: {
                        normal: {
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false,
                            },
                            color: 'rgba(0,0,0,0)',
                            borderWidth: 0,
                        },
                        emphasis: {
                            color: 'rgba(0,0,0,0)',
                            borderWidth: 0,
                        },
                    },
                },
            ],
        },
        // 内圈
        {
            type: 'pie',
            hoverAnimation: false,
            radius: ['24%', '22%'],
            center: ['20%', '50%'],
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false,
                },
            },
            label: {
                normal: {
                    position: 'center',
                },
            },
            data: [
                {
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                                {
                                    offset: 0,
                                    color: 'rgba(78, 72, 203, 1)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(78, 72, 203, 0.1)',
                                },
                            ]),
                        },
                    },
                },
                {
                    value: 35,
                    itemStyle: {
                        normal: {
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false,
                            },
                            color: 'rgba(0,0,0,0)',
                            borderWidth: 0,
                        },
                        emphasis: {
                            color: 'rgba(0,0,0,0)',
                            borderWidth: 0,
                        },
                    },
                },
            ],
        },

        //第二个图表
        {
            type: 'pie',
            hoverAnimation: false,
            radius: ['25%', '30%'],
            center: ['40%', '50%'],
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false,
                },
            },
            label: {
                normal: {
                    position: 'center',
                },
            },
            data: [
                {
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: 'rgba(92, 213, 238, 0.3)',
                        },
                    },
                },
                {
                    value: 35,
                    itemStyle: {
                        normal: {
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false,
                            },
                            color: 'rgba(0,0,0,0)',
                            borderWidth: 0,
                        },
                        emphasis: {
                            color: 'rgba(0,0,0,0)',
                            borderWidth: 0,
                        },
                    },
                },
            ],
        },
        //上层环形配置
        {
            type: 'pie',
            hoverAnimation: false,
            radius: ['25%', '30%'],
            center: ['40%', '50%'],
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false,
                },
            },
            label: {
                normal: {
                    position: 'center',
                },
            },
            data: [
                {
                    value: 10,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                                {
                                    offset: 0,
                                    color: 'rgba(17, 212, 185, 1)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(17, 212, 185, 0.1)',
                                },
                            ]),
                        },
                    },
                    label: {
                        normal: {
                            formatter: '10',
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: '14',
                                fontWeight: 'normal',
                                color: 'rgba(17, 123, 164, 1)',
                            },
                        },
                    },
                },
                {
                    value: 35,
                    itemStyle: {
                        normal: {
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false,
                            },
                            color: 'rgba(0,0,0,0)',
                            borderWidth: 0,
                        },
                        emphasis: {
                            color: 'rgba(0,0,0,0)',
                            borderWidth: 0,
                        },
                    },
                },
            ],
        },
        // 内圈
        {
            type: 'pie',
            hoverAnimation: false,
            radius: ['24%', '23%'],
            center: ['40%', '50%'],
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false,
                },
            },
            label: {
                normal: {
                    position: 'center',
                },
            },
            data: [
                {
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                                {
                                    offset: 0,
                                    color: 'rgba(17, 212, 185, 1)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(17, 212, 185, 0.1)',
                                },
                            ]),
                        },
                    },
                },
                {
                    value: 35,
                    itemStyle: {
                        normal: {
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false,
                            },
                            color: 'rgba(0,0,0,0)',
                            borderWidth: 0,
                        },
                        emphasis: {
                            color: 'rgba(0,0,0,0)',
                            borderWidth: 0,
                        },
                    },
                },
            ],
        },

        //第三个图表
        {
            type: 'pie',
            hoverAnimation: false,
            radius: ['25%', '30%'],
            center: ['60%', '50%'],
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false,
                },
            },
            label: {
                normal: {
                    position: 'center',
                },
            },
            data: [
                {
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: 'rgba(105, 176, 243, 0.3)',
                        },
                    },
                },
                {
                    value: 35,
                    itemStyle: {
                        normal: {
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false,
                            },
                            color: 'rgba(0,0,0,0)',
                            borderWidth: 0,
                        },
                        emphasis: {
                            color: 'rgba(0,0,0,0)',
                            borderWidth: 0,
                        },
                    },
                },
            ],
        },
        //上层环形配置
        {
            type: 'pie',
            hoverAnimation: false,
            radius: ['25%', '30%'],
            center: ['60%', '50%'],
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false,
                },
            },
            label: {
                normal: {
                    position: 'center',
                },
            },
            data: [
                {
                    value: 11,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                                {
                                    offset: 0,
                                    color: 'rgba(28, 133, 242, 1)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(28, 133, 242, 0.1)',
                                },
                            ]),
                        },
                    },
                    label: {
                        normal: {
                            formatter: '11',
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: '14',
                                fontWeight: 'normal',
                                color: 'rgba(0, 121, 255, 1)',
                            },
                        },
                    },
                },
                {
                    value: 35,
                    itemStyle: {
                        normal: {
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false,
                            },
                            color: 'rgba(0,0,0,0)',
                            borderWidth: 0,
                        },
                        emphasis: {
                            color: 'rgba(0,0,0,0)',
                            borderWidth: 0,
                        },
                    },
                },
            ],
        },
        // 内圈
        {
            type: 'pie',
            hoverAnimation: false,
            radius: ['24%', '23%'],
            center: ['60%', '50%'],
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false,
                },
            },
            label: {
                normal: {
                    position: 'center',
                },
            },
            data: [
                {
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                                {
                                    offset: 0,
                                    color: 'rgba(28, 133, 242, 1)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(28, 133, 242, 0.1)',
                                },
                            ]),
                        },
                    },
                },
                {
                    value: 35,
                    itemStyle: {
                        normal: {
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false,
                            },
                            color: 'rgba(0,0,0,0)',
                            borderWidth: 0,
                        },
                        emphasis: {
                            color: 'rgba(0,0,0,0)',
                            borderWidth: 0,
                        },
                    },
                },
            ],
        },

        // 第四个图表
        {
            type: 'pie',
            hoverAnimation: false,
            radius: ['25%', '30%'],
            center: ['80%', '50%'],
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false,
                },
            },
            label: {
                normal: {
                    position: 'center',
                },
            },
            data: [
                {
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: 'rgba(243, 170, 105, 0.3)',
                        },
                    },
                },
                {
                    value: 35,
                    itemStyle: {
                        normal: {
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false,
                            },
                            color: 'rgba(0,0,0,0)',
                            borderWidth: 0,
                        },
                        emphasis: {
                            color: 'rgba(0,0,0,0)',
                            borderWidth: 0,
                        },
                    },
                },
            ],
        },
        //上层环形配置
        {
            type: 'pie',
            hoverAnimation: false,
            radius: ['25%', '30%'],
            center: ['80%', '50%'],
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false,
                },
            },
            label: {
                normal: {
                    position: 'center',
                },
            },
            data: [
                {
                    value: 12,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                                {
                                    offset: 0,
                                    color: 'rgba(219, 153, 62, 1)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(219, 153, 62, 0.1)',
                                },
                            ]),
                        },
                    },
                    label: {
                        normal: {
                            formatter: '12',
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: '14',
                                fontWeight: 'normal',
                                color: 'rgba(219, 153, 62, 1)',
                            },
                        },
                    },
                },
                {
                    value: 35,
                    itemStyle: {
                        normal: {
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false,
                            },
                            color: 'rgba(0,0,0,0)',
                            borderWidth: 0,
                        },
                        emphasis: {
                            color: 'rgba(0,0,0,0)',
                            borderWidth: 0,
                        },
                    },
                },
            ],
        },
        // 内圈
        {
            type: 'pie',
            hoverAnimation: false,
            radius: ['24%', '23%'],
            center: ['80%', '50%'],
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false,
                },
            },
            label: {
                normal: {
                    position: 'center',
                },
            },
            data: [
                {
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                                {
                                    offset: 0,
                                    color: 'rgba(219, 153, 62, 1)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(219, 153, 62, 0.1)',
                                },
                            ]),
                        },
                    },
                },
                {
                    value: 35,
                    itemStyle: {
                        normal: {
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false,
                            },
                            color: 'rgba(0,0,0,0)',
                            borderWidth: 0,
                        },
                        emphasis: {
                            color: 'rgba(0,0,0,0)',
                            borderWidth: 0,
                        },
                    },
                },
            ],
        },
    ],
};
