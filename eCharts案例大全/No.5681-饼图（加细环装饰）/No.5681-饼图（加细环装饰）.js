var zcData = 132;
var ycData = 1;
option = {
    backgroundColor:"#080b30",
    title: {
        text: '{a|' + ycData + '}\n\n{c|异常}',
        left: "center",
        top: "42%",
        textStyle: {
            rich: {
                a: {
                    fontSize: 100,
                    color: '#29EEF3'
                },
                c: {
                    fontSize: 36,
                    color: '#ffffff'
                }
            }
        }
    },
    tooltip: {
        formatter: "{b}:{c}"
    },
    series: [{
            name: '异常',
            type: 'pie',
            z: 2,
            hoverAnimation: false,
            radius: ['60%', '50%'],
            center: ["50%", "55%"],
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
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
            data: [{
                value: ycData,
                name: '异常',
            }, {
                value: zcData,
                name: '正常',
                itemStyle: {
                    color: "rgba(0,0,0,0)"
                }
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
            name: '正常',
            type: 'pie',
            clockWise: true,
            startAngle: 300,
            z: 2,
            hoverAnimation: false,
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            radius: ['73%', '65%'],
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
            data: [{
                value: zcData,
                name: '正常',
            }, {
                value: ycData,
                name: '异常',
                itemStyle: {
                    color: "rgba(0,0,0,0)"
                }
            }]
        },
        {
            name: '背景线',
            type: 'pie',
            silent: true,
            startAngle: 0,
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