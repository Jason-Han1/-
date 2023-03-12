let value = 62;
option = {
    title: {
        text: '',
        subtext: `${value}%`,
        textStyle: {
            color: '#fff',
            fontSize: 16
        },
        subtextStyle: {
            color: '#fff',
            fontSize: 24
        },
        left: 'center',
        top: 'middle'
    },
    tooltip: {
        show: false
    },
    series: [
        {
            name: '内圈',
            type: 'pie',
            hoverAnimation: false,
            tooltip: {},
            radius: [0, '60%'],
            label: {
                normal: {
                    show: false,
                    position: 'center',
                    color: '#fff',
                    formatter: function(params) {
                        return params.value;
                    }
                }
            },
            data: [{
                value: 0,
                itemStyle: {
                    color: '#FFAB1D'
                },
            }]
        },
        {
            name: '底部',
            type: 'pie',
            radius: ['70%', '80%'],
            startAngle: 225,
            hoverAnimation: false,
            silent: true,
            label: {
                normal: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 75,
                name: '',
                itemStyle: {
                    color: '#FFAB1D'
                },
            }, {
                value: 25,
                name: '',
                itemStyle: {
                    color: 'transparent'
                },
            }]
        },
        {
            name: '数据',
            type: 'pie',
            radius: ['72%', '78%'],
            startAngle: 317,
            hoverAnimation: false,
            clockwise: false,
            silent: true,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            data: [{
                "value": (100 - value) * 266 / 360,
                "name": '',
                itemStyle: {
                    color: '#E1E8EE'
                }
            }, {
                "value": 100 - (100 - value) * 266 / 360,
                "name": '',
                itemStyle: {
                    color: 'transparent'
                }
            }]
        },
        {
            name: '外圈',
            type: 'pie',
            startAngle: 225,
            radius: ['89%', '90%'],
            hoverAnimation: false,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            data: [{
                    value: 75,
                    itemStyle: {
                        color: '#FFAB1D'
                    },
                }, {
                    value: 25,
                    itemStyle: {
                    color: 'transparent'
                }
                },

            ]
        }
    ]
};