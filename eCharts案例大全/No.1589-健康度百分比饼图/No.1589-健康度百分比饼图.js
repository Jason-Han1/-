let value = 60.33;
option = {
    // backgroundColor:"#061740",
    title: {
        text: `历史请求满意度`,
        x: 'center',
        y: '20',
        textStyle: {
            color: '#333', //'#fff',
            fontSize: 20,
        },
    },
    series: [
        {
            type: 'pie',
            radius: ['58%', '45%'],
            silent: true,
            clockwise: true,
            startAngle: 90,
            z: 0,
            zlevel: 0,

            data: [
                {
                    value: value,
                    name: '占比',
                    itemStyle: {
                        normal: {
                            color: '#ACD735',
                        },
                    },
                    label: {
                        normal: {
                            position: 'center',
                            formatter: `${value}%`,
                            textStyle: {
                                fontWeight: '700',
                                color: '#333', //'#fff',
                                fontSize: 40,
                            },
                        },
                    },
                },
                {
                    value: 100 - value,
                    name: '',
                    label: {
                        normal: {
                            show: false,
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: '#173164',
                        },
                    },
                },
            ],
        },

        {
            name: '',
            type: 'gauge',
            radius: '58%',
            center: ['50%', '50%'],
            startAngle: 0,
            endAngle: 359.9,
            splitNumber: 40,
            hoverAnimation: true,
            axisTick: {
                show: false,
            },
            splitLine: {
                length: 60,
                lineStyle: {
                    width: 5,
                    color: '#fff', //"#061740"
                },
            },
            axisLabel: {
                show: false,
            },
            pointer: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    opacity: 0,
                },
            },
            detail: {
                show: false,
            },
            data: [
                {
                    value: 0,
                    name: '',
                },
            ],
        },
    ],
};
