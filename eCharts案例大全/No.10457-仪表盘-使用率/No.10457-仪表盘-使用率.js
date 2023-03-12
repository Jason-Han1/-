color_percent0 = '#0286ff';
color_percent100 = '#082241';
storagePercent = 0.2;

option = {
    backgroundColor: '#090d1a',
    legend: {
        show: false,
    },
    grid: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    title: {
        text: '存储',
        x: 'center',
        y: '30%',
        textStyle: {
            color: '#7a8c9f',
            fontSize: 30,
        },
    },
    tooltip: {
        show: false,
    },
    series: [{
            type: 'pie',
            radius: ['60%', '80%'],
            startAngle: 225,
            hoverAnimation: false,
            avoidLabelOverlap: false,
            legendHoverLink: false,
            labelLine: {
                normal: {
                    show: false,
                },
            },
            color: [{
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                            offset: 0,
                            color: color_percent0,
                        },
                        {
                            offset: 1,
                            color: color_percent100,
                        },
                    ],
                },
                'none',
            ],
            data: [{
                    value: 75,
                    name: '',
                },
                {
                    value: 25,
                    name: '',
                },
            ],
        },
        {
            name: '',
            type: 'pie',
            radius: ['55%', '56%'],
            startAngle: 225,
            hoverAnimation: false,
            legendHoverLink: false,
            color: [{
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                            offset: 0,
                            color: color_percent0,
                        },
                        {
                            offset: 1,
                            color: color_percent100,
                        },
                    ],
                },
                'none',
            ],
            labelLine: {
                normal: {
                    show: false,
                },
            },
            data: [{
                    value: 75,
                    name: '',
                },
                {
                    value: 25,
                    name: '',
                },
            ],
        },
        {
            name: '',
            type: 'pie',
            radius: ['60%', '80%'],
            startAngle: 315,
            hoverAnimation: false,
            legendHoverLink: false,
            labelLine: {
                normal: {
                    show: false,
                },
            },
            clockwise: false,
            z: 2,
            data: [{
                    name: '',
                    value: ((100 - storagePercent * 100) * 270) / 360,
                    label: {
                        formatter: '\n' + (storagePercent * 100).toFixed(0) + '%\n\n{a|使用率}',
                        position: 'center',
                        show: true,
                        color: '#fff',
                        fontSize: 70,
                        rich: {
                            a: {
                                color: '#7a8c9f',
                                fontSize: 30,
                            },
                        },
                    },
                    itemStyle: {
                        color: 'rgba(34, 34, 34, .9)',
                    },
                },
                {
                    value: 1,
                    name: '',
                    itemStyle: {
                        color: '#0282f8',
                        borderColor: '#0286ff',
                        borderWidth: 1,
                    },
                },
                {
                    name: '',
                    value: 100 - ((100 - storagePercent * 100) * 270) / 360,
                    itemStyle: {
                        color: 'transparent',
                    },
                },
            ],
        },
    ],
};