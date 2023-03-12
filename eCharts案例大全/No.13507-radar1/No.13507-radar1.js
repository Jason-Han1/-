var data = [{
    "name": ["大", "较大", "一般", "较小", "小"],
    "value": [0, 0, 0, 21.751703, 0]
}, {
    "sum": 21.751703
}]
var maxValue = data[1].sum;
var colorList = ['#ee2228', '#fb8b1d', '#297fff', '#00f8ff', '#5ec79c'];
var areaColor = colorList[data[0].value.indexOf(maxValue)];
option = {
    backgroundColor: '#333',
    radar: [{
        zlevel: 0,
        indicator: [{
                "color": "#fff",
                "max": maxValue
            },
            {
                "color": "#fff",
                "max": maxValue
            },
            {
                "color": "#fff",
                "max": maxValue
            },
            {
                "color": "#fff",
                "max": maxValue
            },
            {
                "color": "#fff",
                "max": maxValue
            }
        ],
        nameGap: 14,
        center: ['50%', '45%'], //位置
        radius: '63%', //半径
        startAngle: 90,
        splitNumber: 50,
        shape: 'circle',
        splitArea: {
            areaStyle: {
                color: ['rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', '#04a8d5', ]
            }
        },
        axisLine: {
            lineStyle: {
                color: '#0077c1',
                opacity: 0.3
            }
        },
        splitLine: {
            lineStyle: {
                type: 'solid',
                color: 'transparent',
                opacity: 0.3
            }
        }
    }, {
        zlevel: 5,
        indicator: [{
                "color": "#fff",
                "text": data[0].name[0],
                "max": maxValue
            },
            {
                "color": "#fff",
                "text": data[0].name[1],
                "max": maxValue
            },
            {
                "color": "#fff",
                "text": data[0].name[2],
                "max": maxValue
            },
            {
                "color": "#fff",
                "text": data[0].name[3],
                "max": maxValue
            },
            {
                "color": "#fff",
                "text": data[0].name[4],
                "max": maxValue
            }
        ],
        nameGap: 14,
        center: ['50%', '45%'], //位置
        radius: '62.5%', //半径
        startAngle: 90,
        splitNumber: 6,
        shape: 'circle',
        splitArea: {
            areaStyle: {
                color: 'transparent'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#0077c1',
                opacity: 0.3
            }
        },
        splitLine: {
            lineStyle: {
                type: 'solid',
                color: '#0077c1',
                opacity: 0.3
            }
        }
    }, {
        zlevel: 10,
        indicator: [{
                "color": "#fff",
                "text": '',
                "max": maxValue
            },
            {
                "color": "#fff",
                "text": '',
                "max": maxValue
            },
            {
                "color": "#fff",
                "text": '',
                "max": maxValue
            },
            {
                "color": "#fff",
                "text": '',
                "max": maxValue
            },
            {
                "color": "#fff",
                "text": '',
                "max": maxValue
            }
        ],
        nameGap: 8,
        center: ['50%', '45%'], //位置
        radius: '61.9%', //半径
        startAngle: 90,
        splitNumber: 6,
        shape: 'circle',
        splitArea: {
            areaStyle: {
                color: 'transparent'

            }
        },
        axisLine: {
            lineStyle: {
                color: '#0077c1',
                opacity: 0.3
            }
        },
        splitLine: {
            lineStyle: {
                type: 'solid',
                color: '#0077c1',
                opacity: 0
            }
        }
    }],
    series: [{
            radarIndex: 0,
            zlevel: 0,
            silent: true,
            type: 'radar'
        }, {
            radarIndex: 1,
            zlevel: 5,
            type: 'radar',
            silent: true,
            data: [{
                    value: [maxValue, '', '', '', ''],
                    symbol: 'circle',
                    symbolSize: 12,
                    lineStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: colorList[0]
                        }
                    }
                },
                {
                    value: ['', maxValue, '', '', ''],
                    symbol: 'circle',
                    symbolSize: 12,
                    lineStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: colorList[1]
                        }
                    }
                },
                {
                    value: ['', '', maxValue, '', ''],
                    symbol: 'circle',
                    symbolSize: 12,
                    lineStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: colorList[2]
                        }
                    }
                },
                {
                    value: ['', '', '', maxValue, ''],
                    symbol: 'circle',
                    symbolSize: 12,
                    lineStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: colorList[3]
                        }
                    }
                },
                {
                    value: ['', '', '', '', maxValue],
                    symbol: 'circle',
                    symbolSize: 12,
                    lineStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: colorList[4]
                        }
                    }
                }
            ]
        },
        {
            radarIndex: 2,
            zlevel: 10,
            silent: true,
            type: 'radar',
            symbolSize: 0,
            textStyle: {
                color: '#fff'
            },
            lineStyle: {
                normal: {
                    color: areaColor,
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: areaColor
                }
            },
            data: data
        }
    ]
};