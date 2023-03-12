option = {
    backgroundColor: '#20263f',
    title: [
        {
            text: '实时温度',
            left: '20%',
            top: '40%',
            textAlign: 'center',
            textStyle: {
                fontWeight: 'normal',
                fontSize: '20',
                color: '#fff',
                textAlign: 'center',
            },
        },
        {
            text: '一氧化碳',
            left: '50%',
            top: '40%',
            textAlign: 'center',
            textStyle: {
                color: '#fff',
                fontWeight: 'normal',
                fontSize: '20',
                textAlign: 'center',
            },
        },
        {
            text: '二氧化碳',
            left: '80%',
            top: '40%',
            textAlign: 'center',
            textStyle: {
                color: '#fff',
                fontWeight: 'normal',
                fontSize: '20',
                textAlign: 'center',
            },
        },
        {
            text: '湿度',
            left: '20%',
            top: '80%',
            textAlign: 'center',
            textStyle: {
                fontWeight: 'normal',
                fontSize: '20',
                color: '#fff',
                textAlign: 'center',
            },
        },
        {
            text: '氧气',
            left: '50%',
            top: '80%',
            textAlign: 'center',
            textStyle: {
                color: '#fff',
                fontWeight: 'normal',
                fontSize: '20',
                textAlign: 'center',
            },
        },
        {
            text: '甲烷',
            left: '80%',
            top: '80%',
            textAlign: 'center',
            textStyle: {
                color: '#fff',
                fontWeight: 'normal',
                fontSize: '20',
                textAlign: 'center',
            },
        },
    ],

    //第一个图表
    series: [
        {
            type: 'pie',
            hoverAnimation: false, //鼠标经过的特效
            radius: ['25%', '30%'],
            center: ['20%', '30%'],
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
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: '#00cefc',
                                },
                                {
                                    offset: 1,
                                    color: '#367bec',
                                },
                            ]),
                        },
                    },
                    label: {
                        formatter: '{c}\n℃',
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'normal',
                            color: '#AAAFC8',
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

        {
            type: 'pie',
            hoverAnimation: false,
            radius: ['25%', '30%'],
            center: ['50%', '30%'],
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
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: '#9FE6B8',
                                },
                                {
                                    offset: 1,
                                    color: '#32C5E9',
                                },
                            ]),
                        },
                    },
                    label: {
                        formatter: '{c}\nPPM',
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'normal',
                            color: '#AAAFC8',
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

        {
            type: 'pie',
            hoverAnimation: false,
            radius: ['25%', '30%'],
            center: ['80%', '30%'],
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
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: '#FDFF5C',
                                },
                                {
                                    offset: 1,
                                    color: '#FFDB5C',
                                },
                            ]),
                        },
                    },
                    label: {
                        formatter: '{c}\nPPM',
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'normal',
                            color: '#AAAFC8',
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

        {
            type: 'pie',
            hoverAnimation: false, //鼠标经过的特效
            radius: ['25%', '30%'],
            center: ['20%', '70%'],
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
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: '#00cefc',
                                },
                                {
                                    offset: 1,
                                    color: '#367bec',
                                },
                            ]),
                        },
                    },
                    label: {
                        formatter: '{c}%\nRH',
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'normal',
                            color: '#AAAFC8',
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

        {
            type: 'pie',
            hoverAnimation: false,
            radius: ['25%', '30%'],
            center: ['50%', '70%'],
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
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: '#9FE6B8',
                                },
                                {
                                    offset: 1,
                                    color: '#32C5E9',
                                },
                            ]),
                        },
                    },
                    label: {
                        formatter: '{c}\n%',
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'normal',
                            color: '#AAAFC8',
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

        {
            type: 'pie',
            hoverAnimation: false,
            radius: ['25%', '30%'],
            center: ['80%', '70%'],
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
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: '#FDFF5C',
                                },
                                {
                                    offset: 1,
                                    color: '#FFDB5C',
                                },
                            ]),
                        },
                    },
                    label: {
                        formatter: '{c}\nLEL',
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'normal',
                            color: '#AAAFC8',
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
