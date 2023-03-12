option = {
    title: [
        {
            text: '排放量变化率',
            left: '50%',
            top: '59%',
            textAlign: 'center',
            textStyle: {
                fontWeight: 'normal',
                fontSize: '22',
                color: 'black',
                textAlign: 'center',
            },
        },
    ],
    series: [
        {
            type: 'pie',
            hoverAnimation: false, //鼠标经过的特效
            radius: ['25%', '33%'],
            center: ['50%', '50%'],
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false,
                },
            },
            label: {
                normal: {
                    position: 'center',
                    color: '#65e09d',
                },
            },
            data: [
                {
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: '#0f2d09',
                        },
                    },
                },
                {
                    value: 34,
                    itemStyle: {
                        color: 'rgba(0,0,0,0)',
                    },
                },
            ],
        },
        //上层环形配置
        {
            type: 'pie',
            hoverAnimation: false, //鼠标经过的特效
            radius: ['25%', '33%'],
            center: ['50%', '50%'],
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
                    value: 75,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                                {
                                    offset: 0,
                                    color: '#46946a',
                                },
                                {
                                    offset: 1,
                                    color: '#69e4a1',
                                },
                            ]),
                        },
                    },
                    label: {
                        formatter: '{c}%',
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '40',
                            fontWeight: 'normal',
                            color: '#65e09d',
                        },
                    },
                },
                {
                    value: 50,
                    itemStyle: {
                        color: 'rgba(0,0,0,0)',
                    },
                },
            ],
        },
    ],
};
