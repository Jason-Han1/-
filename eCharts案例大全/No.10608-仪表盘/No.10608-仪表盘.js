var highlight = '#03b7c9';

var demoData = [
    { name: '警情总量', value: 60, unit: '.00', pos: ['16.6%', '25%'], range: [0, 80] },
    
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
                    radius: '63.33%',  // 1行3个
                    splitNumber: 8,
                    min: 0,
                    max: 80,
                    startAngle: 225,
                    endAngle: -45,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: [
                                [1, highlight]
                            ]
                        }
                    },
                    axisLabel: {
                        distance: 6,
                        textStyle: {
                            color: '#fff',
                            fontSize: '16'
                        }
                    },
                    pointer: {
                        show: 0
                    },
                    detail: {
                        show: 0
                    }
                },
                
                // 内侧指针、数值显示
                {
                    name: item.name,
                    type: 'gauge',

                    radius: '53.10%',
                    startAngle: 225,
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
                        show: true,
                        length: '105%'
                    },
                    detail: {
                        show: true,
                        offsetCenter: [0, '93%'],
                        textStyle: {
                            fontSize: 60,
                            color: '#04A4CE'
                        },
                        formatter: [
                            '{value}'+ (item.unit ||''),
                            '{name|' + item.name + '}'
                        ].join('\n'),
                        rich: {
                            name: {
                                fontSize:35,
                                lineHeight: 30,
                                color: '#ffc300',
                                "fontWeight": 'bold',
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
                }
            );
        });
        
        return result;
    })()
};
