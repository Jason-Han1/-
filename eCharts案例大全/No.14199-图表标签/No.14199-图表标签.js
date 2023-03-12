var data = [{
        value: 21947,
        name: '正常',
        itemStyle: {
            normal: {
                color: '#05CD8D',
            }
        }
    },
    {
        value: 1290,
        name: '异常',
        itemStyle: {
            normal: {
                color: '#FFCC33'
            }
        }
    },
    {
        value: 1310,
        name: '处罚',
        itemStyle: {
            normal: {
                color: '#FF9900'
            }
        }
    },
    {
        value: 1273,
        name: '违法',
        itemStyle: {
            normal: {
                color: 'red'
            }
        }
    },
];

var labeldata = [{
        value: '1.5',
        label: {
            normal: {
                show: true,
                color: 'blue',
                position: 'bottom',
                formatter: ['{c|{c}}{ab|万}', '',
                    '{a|异常名录}'
                ].join('\n'),
                rich: {
                    a: {
                        fontSize: 14,
                        color: '#c6cdd5'
                    },
                    c: {
                        fontSize: 29,
                        color: '#2A6AD3'
                    },
                    ab: {
                        fontSize: 14,
                        color: '#2A6AD3',
                        verticalAlign: 'bottom'
                    }
                }
            }
        }
    },
    {
        value: '0.1',
        label: {
            normal: {
                show: true,
                color: 'blue',
                position: 'bottom',
                formatter: ['{c|{c}}{ab|万}', '',
                    '{a|严重违法}'
                ].join('\n'),
                rich: {
                    a: {
                        fontSize: 14,
                        color: '#c6cdd5'
                    },
                    c: {
                        fontSize: 29,
                        color: '#2A6AD3'
                    },
                    ab: {
                        fontSize: 14,
                        color: '#2A6AD3',
                        verticalAlign: 'bottom'
                    }
                }
            }
        }
    }, {
        value: '0.9',
        label: {
            normal: {
                show: true,
                color: 'blue',
                position: 'bottom',
                formatter: ['{c|{c}}{ab|万}', '',
                    '{a|行政处罚}'
                ].join('\n'),
                rich: {
                    a: {
                        fontSize: 14,
                        color: '#c6cdd5'
                    },
                    c: {
                        fontSize: 29,
                        color: '#2A6AD3'
                    },
                    ab: {
                        fontSize: 14,
                        color: '#2A6AD3',
                        verticalAlign: 'bottom'
                    }
                }
            }
        }
    }
];

var centerdata=[{
                value: 25920,
                name: '85',
                label: {
                    normal: {
                        fontSize: 70,
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#05CD8D',

                    }
                }
            }];

var option = {
    xAxis: [{
        type: 'category',
        //b
        data: ['1', '2', '3'],
        min: 0,
        max: 2,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false,

        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        },
    }],
    yAxis: [{
        type: 'value',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        },
    }],
    series: [{
            type: 'bar',
            itemStyle: {
                normal: {
                    color: 'rgba(0, 0, 0, 0)'
                }
            },
            data:labeldata
        },
        {
            name: '信用预警',
            type: 'pie',
            selectedMode: 'center',
            //silent:true,
            selectedOffset: 0,
            hoverAnimation: true,
            radius: ['0%', '35%'],
            label: {
                normal: {
                    position: 'center',
                    formatter: '{b|{b}}{ak|%}',
                    rich: {
                        b: {
                            color: '#ffffff',
                            fontSize: 48
                        },
                        ak: {
                            color: '#ffffff',
                            fontSize: 22,
                            verticalAlign: 'bottom'
                        }
                    }
                }
            },
            data: centerdata
        },
        {
            name: '信用预警',
            type: 'pie',
            radius: ['40%', '55%'],
            startAngle: [-30.90],
            label: {
                normal: {
                    position: 'outside',
                    fontSize: 20,
                    color: '#000000',
                    lineHeight: 20,
                    formatter: '{b}\n\n',
                    borderWidth: 20,
                    borderRadius: 4,

                    padding: [0, -43],
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    length: 25,
                    length2: 45,
                    lineStyle: {
                        type: 'solid',
                        color: "#000000"
                    }

                }
            },
            data: data
        },
    ]
};
myChart.setOption(option);
myChart.on('click', function(pama) {
    if (pama.name === '正常') {
        myChart.setOption({
            series: [{
                name: '信用预警',
                data: [{
                    value: 25920,
                    name: '85',
                    itemStyle: {
                        normal: {
                            color: '#05CD8D',
                        }
                    }
                }]
            }]
        })
    } else if (pama.name === '异常') {
        myChart.setOption({
            series: [{
                name: '信用预警',
                data: [{
                    value: 25920,
                    name: '5.01',
                    itemStyle: {
                        normal: {
                            color: '#FFCC33'
                        }
                    }
                }]
            }]
        })
    } else if (pama.name === '处罚') {
        myChart.setOption({
            series: [{
                name: '信用预警',
                data: [{
                    value: 25920,
                    name: '5.07',
                    itemStyle: {
                        normal: {
                            color: '#FF9900'
                        }
                    }
                }]
            }]
        })
    } else if (pama.name === '违法') {
        myChart.setOption({
            series: [{
                name: '信用预警',
                data: [{
                    value: 25920,
                    name: '4.93',
                    itemStyle: {
                        normal: {
                            color: 'red'
                        }
                    }
                }]
            }]
        })
    }
});