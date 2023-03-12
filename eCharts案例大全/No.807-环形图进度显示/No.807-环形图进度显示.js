option = {
    backgroundColor: '#000',
    title: {
        text: '{a|' + 50 + '}\n{b|总数}',
        x: 'center',
        y: 'center',
        textStyle: {
            rich: {
                a: {
                    fontSize: 50,
                    color: '#fff',
                },
                b: {
                    fontSize: 32,
                    color: '#fff',
                },
            },
        },
    },
    series: [
        {
            type: 'pie',
            radius: ['58%', '85%'],
            silent: true,
            clockwise: false,
            z: 1,
            zlevel: 0,
            label: {
                show: false,
            },
            itemStyle: {
                color: '#5D5D5D',
            },
            data: [100],
        },
        {
            type: 'pie',
            radius: ['55%', '88%'],
            silent: true,
            clockwise: false,
            z: 1,
            zlevel: 0,
            label: {
                show: false,
            },
            data: [
                {
                    value: 75.6,
                    name: '',
                    itemStyle: {
                        normal: {
                            color: '#00E39A',
                        },
                    },
                },
                {
                    value: 100 - 75.6,
                    name: '',
                    itemStyle: {
                        normal: {
                            color: 'rgba(0,0,0,0)',
                        },
                    },
                },
            ],
        },

        {
            name: '内层细线',
            type: 'pie',
            clockwise: false,
            radius: ['96%', '97%'],
            hoverAnimation: false,
            color: '#5D5D5D',
            labelLine: {
                show: false,
            },
            data: [100],
        },
        {
            name: '内层饼图',
            type: 'pie',
            clockwise: false,
            radius: ['96%', '97%'],
            hoverAnimation: false,
            color: '#00E39A',
            labelLine: {
                show: false,
            },
            data: [
                {
                    value: 75.6,
                    name: '',
                    itemStyle: {
                        color: '#00E39A',
                    },
                },
                {
                    value: 100 - 75.6,
                    name: '',
                    itemStyle: {
                        color: '#5D5D5D',
                    },
                },
            ],
        },
        {
            name: '中间圆',
            type: 'pie',
            radius: [0, '50%'],
            animation: false,
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
                color: 'rgba(108, 255, 208, 0.2)',
            },
            label: {
                show: false,
            },
            data: [100],
        },
    ],
};
