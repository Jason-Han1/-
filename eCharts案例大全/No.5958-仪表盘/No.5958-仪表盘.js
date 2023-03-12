var highlight = '#03b7c9';

var demoData = [
    // { name: '警情总量', value: 60, unit: '.00', pos: ['16.6%', '25%'], range: [0, 80] },
    {
        name: 'a',
        value: 160,
    },
];

option = {
    backgroundColor: '#222939',

    series: (function() {
        var result = [];

        demoData.forEach(function(item) {
            result.push(
                // 外围刻度
                {
                    type: 'gauge',
                    radius: '63.33%', // 1行3个
                    splitNumber: 8,
                    min: 400,
                    max: 0,
                    // startAngle: 225,
                    // endAngle: -45,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: [
                                [1, highlight]
                            ],
                            width: 80,
                        }
                    },
                    axisLabel: {
                        distance: 6,
                        textStyle: {
                            color: '#fff',
                            fontSize: '30',
                        },
                        padding: -58
                    },
                    pointer: {
                        show: 0
                    },
                    detail: {
                        show: 0
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        length: 80, //刻度节点线长度
                        lineStyle: {
                            width: 5,
                            color: 'rgba(14,15,20, 0.8)'
                        }, //刻度节点线
                        // data:[400,350,300,250,200,150,100,50,0]
                    },
                },

                // 内侧指针、数值显示
                {
                    name: item.name,
                    type: 'gauge',
                    z: 20,
                    radius: '46.80%',
                    startAngle: 63,
                    endAngle: -45,
                    min: 0,
                    max: 80,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 26,
                            color: [
                                [
                                    item.value / 80, new echarts.graphic.LinearGradient(
                                        0, 1, 1, 0, [{
                                                offset: 0,
                                                color: 'rgba(255,255,255,0)',
                                            },
                                            {
                                                offset: 1,
                                                color: '#ff9f13 ',
                                            }
                                        ]
                                    )
                                ],
                                [
                                    1, 'rgba(255,255,255,0)'
                                ]
                            ]
                        }
                    },
                    axisTick: {
                        show: 0,
                    },
                    splitLine: {
                        show: 0,
                    },
                    axisLabel: {
                        show: 0
                    },
                    pointer: {
                        show: false,
                        // length: '105%'
                    },
                    detail: {
                        show: true,
                        offsetCenter: [0, '3%'],
                        textStyle: {
                            fontSize: 60,
                            color: '#fff'
                        },
                        formatter: [
                            '{value}' + (item.unit || '') + '{company|' + '}',
                        ].join('\n'),
                        rich: {
                            name: {
                                fontSize: 35,
                                lineHeight: 30,
                                color: '#ffc300',
                                "fontWeight": 'bold',
                            },
                            company: {
                                fontSize: 35,
                                color: '#fff'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: highlight,
                        }
                    },
                    data: [{
                        value: item.value
                    }]
                }, {
                    name: '外层盘',
                    type: 'gauge',
                    z: 6,
                    radius: '66.33%', // 1行3个
                    startAngle: 225,
                    endAngle: -45,
                    // center: ["50%", "55%"], //整体的位置设置
                    axisLine: {
                        lineStyle: { // 属性lineStyle控制线条样式//控制外圈位置
                            color: [
                                [1, '#33ffff'],
                                // [1, 'rgba(255, 255, 255, 0.2)']
                            ],
                            width: 8,
                            opacity: 0.9, //控制外圈位置，颜色，宽度，透明度
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    pointer: {
                        show: false
                    },
                    data: [{
                        show: false,
                        value: '10'
                    }],
                    detail: {
                        show: 0
                    }
                }, {
                    name: '内层圈',
                    type: 'gauge',
                    z: 6,
                    radius: '46.73%', // 
                    startAngle: 225,
                    endAngle: -45,
                    // center: ["50%", "55%"], //整体的位置设置
                    axisLine: {
                        lineStyle: { // 属性lineStyle控制线条样式//控制外圈位置
                            color: [
                                [1, '#33ffff'],
                                // [1, 'rgba(255, 255, 255, 0.2)']
                            ],
                            width: 8,
                            opacity: 0.9, //控制外圈位置，颜色，宽度，透明度
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    pointer: {
                        show: false
                    },
                    data: [{
                        show: false,
                        value: '10'
                    }],
                    detail: {
                        show: 0
                    }
                }
            );
        });

        return result;
    })()
};