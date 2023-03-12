option = {
    backgroundColor: 'RGB(8,20,67)',
    grid: {
        top: '16%',
        bottom: '54%',
        left: "50%",
        containLabel: false
    },
    series: [{
            name: '进度',
            type: 'pie',
            z: 2,
            hoverAnimation: false,
            radius: ['58%', '54%'],
            center: ["50%", "55%"],
            color: [{
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: 'rgba(234, 40, 125, 0.01)'
                }, {
                    offset: 1,
                    color: 'rgba(234, 40, 125, 1)'
                }],
                global: false
            }],
            label: {
                show: true,
                formatter: '{d}%',
                color:'rgb(234, 40, 125)',
                fontSize: 20
            },
            data: [{
                value: 48,
                name: '待审核'
            }, {
                value: 100 - 48,
                itemStyle: {
                    color: "rgba(0,0,0,0)",
                    borderWidth: 50
                },
                tooltip: {
                    show: false
                },
                label: {
                    show: false
                },
                hoverAnimation: false
            }]
        },
        {
            name: '背景线',
            type: 'pie',
            startAngle: 180,
            silent: true,
            z: 1,
            clockWise: true,
            hoverAnimation: false,
            radius: ['45%', '44%'],
            center: ["50%", "55%"],
            label: {
                show: false
            },
            itemStyle: {
                label: {
                    show: false,
                },
                labelLine: {
                    show: false
                },
                color: '#0b5263',
                borderWidth: 5,
            },
            data: [{
                value: 80,
                tooltip: {
                    show: false
                },
                hoverAnimation: false
            }, {
                value: 100 - 80,
                name: '',
                itemStyle: {
                    color: "rgba(0,0,0,0)",
                    borderWidth: 0
                },
                tooltip: {
                    show: false
                },
                label: {
                    show: false
                },
                hoverAnimation: false
            }]
        },
        {
            name: '进度',
            type: 'pie',
            clockWise: true,
            startAngle: 300,
            z: 2,
            hoverAnimation: false,
            radius: ['73%', '68%'],
            center: ["50%", "55%"],
            color: [{
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: 'rgba(62, 217, 255, 0.01)'
                }, {
                    offset: 1,
                    color: 'rgba(62, 217, 255, 1)'
                }],
                global: false
            }],
            label: {
                show: true,
                formatter: '{d}%',
                color: 'RGB(62, 217, 255)',
                fontSize: 20
            },
            data: [{
                value:52,
                name: '已审核'
            }, {
                value: 100 -52,
                name: '',
                itemStyle: {
                    color: "rgba(0,0,0,0)",
                    borderWidth: 0
                },
                tooltip: {
                    show: false
                },
                label: {
                    show: false
                },
                hoverAnimation: false
            }]
        },
        {
            name: '背景线',
            type: 'pie',
            silent: true,
            startAngle:0,
            z: 1,
            clockWise: true,
            hoverAnimation: false,
            radius: ['82%', '83%'],
            center: ["50%", "55%"],
            label: {
                show: false
            },
            itemStyle: {
                label: {
                    show: false,
                },
                labelLine: {
                    show: false
                },
                color: '#0b5263',
                borderWidth: 5,
            },
            data: [{
                value: 80,
                tooltip: {
                    show: false
                },
                hoverAnimation: false
            }, {
                value: 100 - 80,
                name: '',
                itemStyle: {
                    color: "rgba(0,0,0,0)",
                    borderWidth: 0
                },
                tooltip: {
                    show: false
                },
                label: {
                    show: false
                },
                hoverAnimation: false
            }]
        },
    ],
};