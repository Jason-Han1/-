// 借鉴了别人的，然后改了一点点.....

let Gradient = [{
    offset: 0,
    color: '#e100ff'
}, {
    offset: 0.2,
    color: '#c700ff'
}, {
    offset: 0.4,
    color: '#a400ff'
}, {
    offset: 0.6,
    color: '#8b00ff'
}, {
    offset: 0.8,
    color: '#8500ff'
}, {
    offset: 1,
    color: '#7f00ff'
}]
let val = 130
option = {
    backgroundColor: 'rgba(6,34,99,0.1)',
    color: '#fff',
    tooltip: {
        show: false
    },
    grid: {
        left: '0%',
        right: '0%',
        bottom: '0%',
        top: '0%',
        containLabel: true,
        borderWidth: '0'
    },
    title: {
        text: "瞬时风向：" + val + '°',
        bottom: '0',
        left: 'center',
        textStyle: {
            fontSize: 12,
            color: '#fff'
        }
    },
    series: [{
            name: "最外部进度条",
            type: "gauge",
            radius: '90%',
            startAngle: '90',
            endAngle: '-269.999',
            splitNumber: 12,
            axisLine: {
                lineStyle: {
                    color: [
                        [val / 360, new echarts.graphic.LinearGradient(
                            0, 1, 0, 0, [{
                                    offset: 1,
                                    color: 'rgba(140,27,255,0)',
                                }, {
                                    offset: 0.5,
                                    color: 'rgba(140,27,255,0.2)',
                                },
                                {
                                    offset: 0,
                                    color: 'rgba(140,27,255,1)',
                                }
                            ]
                        )],
                        [
                            1, 'rgba(28,128,245,.0)'
                        ]
                    ],
                    width: 5

                },
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            itemStyle: {
                show: false,
            },
            detail: {
                show: false
            },
            title: {
                show: false,
            },
            data: [{
                value: val,
            }],
            pointer: {
                show: false,
            },
            animationDuration: 4000,
        },
        {
            name: '瞬时风向',
            type: 'gauge',
            radius: '80%',
            startAngle: "90",
            endAngle: "-269.9",
            splitNumber: 12,
            z: 8,
            min: 0,
            max: 360,
            axisLine: {
                lineStyle: {
                    color: [
                        [1, 'yellow']
                    ],
                    width: 0,
                },
            },
            pointer: {
                show: false,
            },
            axisTick: {
                splitNumber: 5,
                length: 5,
                lineStyle: {
                    color: '#9a58ff',
                    width: 1,
                }
            },
            axisLabel: {
                formatter: function(v) {
                    v = v.toFixed();
                    switch (v + '') {
                        case '0':
                            return '0';
                        case '90':
                            return '90';
                        case '180':
                            return '180';
                        case '270':
                            return '270';
                        case '360':
                            return '0';
                    }
                },
                textStyle: {
                    color: 'white',
                    fontSize: 10,
                }
            },
            splitLine: {
                show: true,
                length: 8,
                lineStyle: {
                    color: '#9a58ff',
                    width: 2,
                }
            },
            detail: {
                show: false,
                textStyle: {
                    fontSize: "14",
                    color: 'white'
                }
            },
            title: {
                show: false,
            },
            data: [{
                value: val
            }]
        },
        {
            name: "内部阴影",
            type: "gauge",
            radius: '70%',
            startAngle: "90",
            endAngle: "-269.9",
            z: 4,
            splitNumber: 10,
            axisLine: {
                lineStyle: {
                    color: [
                        [val / 360, new echarts.graphic.LinearGradient(
                            0, 1, 0, 0, Gradient
                        )],
                        [
                            1, 'rgba(28,128,245,.0)'
                        ]
                    ],
                    width: 40,
                    opacity: 0.6
                }
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,

            },
            splitLine: {
                show: false,
            },
            itemStyle: {
                show: false,
            },
            detail: {
                formatter: function(value) {
                    if (value !== 0) {
                        return value + '°';
                    } else {
                        return 0 + '°';
                    }
                },
                offsetCenter: [0, 5],
                textStyle: {
                    padding: [0, 0, 5, 0],
                    fontSize: 14,
                    color: 'white'
                }
            },
            title: {
                show: false,
            },
            pointer: {
                show: false,
            },
            data: [{
                name: "title",
                value: val,
            }],
        },
        {
            name: '内部圆',
            type: "gauge",
            radius: "84%",
            startAngle: "90",
            endAngle: "-269.9",
            min: 0,
            max: 360,
            splitNumber: 12,
            pointer: {
                show: true,
                width: 3,
                length: '80%',
            },
            detail: {
                show: false,
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: [
                        [1, "yellow"]
                    ],
                    width: 2,
                    opacity: 1,
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,

            },
            axisLabel: {
                show: false,
            },
            data: [{
                value: val,
            }],
        },
        {
            type: "gauge",
            radius: "82%",
            startAngle: "225",
            endAngle: "-134.99999",
            pointer: {
                show: true,
                color: 'red'
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'white',
                    width: 20,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    opacity: 1,
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
                length: 25,
                lineStyle: {
                    color: "white",
                    width: 10,
                    type: "solid",
                },
            },
            axisLabel: {
                show: false,
                formatter: function(v) {
                    return v.toFixed(0);
                },
            },
            animationDuration: 4000,
        },
        {

            type: "gauge",
            z: 2,
            radius: "80%",
            startAngle: "225",
            endAngle: "-134.99999",
            axisLine: {
                lineStyle: {
                    color: [
                        [1, "#9a58ff"]
                    ],
                    fontSize: 40,
                    width: 1,
                    opacity: 1,
                },
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false,
                formatter: function(v) {
                    return v.toFixed(0);
                },
            },
            pointer: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            detail: {
                show: false,
            },
        },
        {
            type: 'pie',
            tooltip: {
                show: false
            },
            hoverAnimation: false,
            legendHoverLink: false,
            radius: ['0%', '25.5%'],
            center: ['50%', '50%'],
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
                value: 120,
                itemStyle: {
                    normal: {
                        color: "#0053fb",
                    },
                }
            }]
        },
    ]
};