var uploadedDataURL = "/asset/get/s/data-1502779360900-HkKJuGe_W.json";

function area(name, color) {
    var a = {
        name: name,
        selected: true,
        itemStyle: {
            emphasis: {
                areaColor: color,
                borderColor: '#f47920',
                borderWidth: 1
            }
        }
    };
    return a;
}
var geodata = [{
    name: '广州市',
    value: [113.36, 23.13]
}, {
    name: '广州南沙',
    value: [113.53, 22.79]
},{
    name: '佛山市',
    value: [112.98, 23.01]
}, {
    name: '东莞市',
    value: [113.85, 23.01]
}, {
    name: '肇庆市',
    value: [112.66, 23.21]
},
 {
    name: '云浮市',
    value: [112.00, 22.86]
},
{
    name: '中山市',
    value: [113.38, 22.52]
}, {
    name: '江门市',
    value: [112.70, 22.31]
}, {
    name: '阳江市',
    value: [111.90, 21.95]
}, {
    name: '茂名市',
    value: [110.99, 21.68]
}, {
    name: '湛江市',
    value: [110.24, 21.25]
}, ];
var geodata1 = [{
    name: '深圳市',
    value: [114.07, 22.62]
}];

$.get(uploadedDataURL, function(gdJson) {
    echarts.registerMap('广东', gdJson);

    option = {
        backgroundColor: '#4f5555',
        title: {
            text: '深湛高铁线路',
            subtext: '路线数据来源百科',
            sublink: 'https://baike.baidu.com/item/%E6%B7%B1%E8%8C%82%E9%93%81%E8%B7%AF/14764609?fromtitle=%E6%B7%B1%E8%8C%82%E9%AB%98%E9%80%9F%E9%93%81%E8%B7%AF&fromid=2671159',
            textStyle: {
                color: '#7bbfea'
            }
        },
        geo: {
            map: '广东',
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true,
            zlevel: 1,
            itemStyle: {
                normal: {
                    areaColor: '#031525',
                    borderColor: '#3B5077'
                },
                emphasis: {
                    areaColor: '#031525'
                }
            },
            regions: [area('深圳市', '#694d9f'),
                area('东莞市', '#45224a'),
                area('佛山市', '#45224a'),
                area('肇庆市', '#45224a'),
                area('云浮市', '#45224a'),
                area('广州市', '#45224a'),
                area('中山市', '#45224a'),
                area('江门市', '#45224a'),
                area('阳江市', '#45224a'),
                area('茂名市', '#45224a'),
                area('湛江市', '#45224a'),
            ]
        },
        legend: {
            x: '50%',
            top: '90%',
            textStyle: {
                color: '#ffffff'
            },
            selected: {
                '中转站': false,
            },
            data: ['深圳到湛江向', '湛江到深圳向']
        },
        series: [{
                name: '深圳到湛江向',
                type: 'lines',
                coordinateSystem: 'geo',
                //polyline:true,
                symbol: ['none', 'triangle'],
                zlevel: 2,
                effect: {
                    show: true,
                    symbol: 'roundRect',
                    period: 2,
                    delay: 100,
                    trailLength: 0.6,
                    symbolSize: 6,
                },
                lineStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#ed1941'
                            }, {
                                offset: 1,
                                color: '#ffce7b'
                            }],
                            globalCoord: false
                        },
                        width: 1,
                        opacity: 0.8,
                        //type: 'dotted',
                        curveness: 0.2,
                    }
                },
                data: [{
                    coords: [ //sz-东莞
                        [114.07, 22.62],
                        [113.85, 23.01],
                    ]
                }, {
                    coords: [ //dg-广州
                        [113.85, 23.01],
                        [113.36, 23.13],
                    ]
                }, 
                {
                    coords: [ //dg-广州南沙
                        [113.85, 23.01],
                        [113.53, 22.79],
                    ]
                }, {
                    coords: [ //gz-中山
                        [113.53, 22.79],
                        [113.38, 22.52],
                    ]
                },{
                    coords: [ //广州-佛山
                        [113.36, 23.13],
                        [112.98, 23.01],
                    ]
                },  
                {
                    coords: [ //gz南沙-佛山
                        [113.53, 22.79],
                        [112.98, 23.01],
                    ]
                },{
                    coords: [ //佛山-肇庆
                        [112.98, 23.01],
                        [112.66, 23.21],
                    ]
                }, 
                {
                    coords: [ //肇庆-云浮
                        [112.66, 23.21],
                        [112.00, 22.86],
                    ]
                }, 
                {
                    coords: [ //fs-江门
                        [112.98, 23.01],
                        [112.70, 22.31],
                    ]
                }, {
                    coords: [ //zs-江门
                        [113.38, 22.52],
                        [112.70, 22.31],
                    ]
                }, {
                    coords: [ //jm-阳江
                        [112.70, 22.31],
                        [111.90, 21.95],
                    ]
                }, {
                    coords: [ //yj-茂名
                        [111.90, 21.95],
                        [110.99, 21.68],
                    ]
                }, {
                    coords: [ //mm-湛江
                        [110.99, 21.68],
                        [110.24, 21.25],
                    ]
                }]
            }, {
                name: '深圳到湛江向',
                type: 'lines',
                coordinateSystem: 'geo',
                //polyline:true,
                symbol: ['none', 'triangle'],
                zlevel: 2,
                effect: {
                    show: true,
                    symbol: 'roundRect',
                    period: 1.5,
                    delay: 100,
                    trailLength: 0.6,
                    symbolSize: 6,
                },
                lineStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#ed1941'
                            }, {
                                offset: 1,
                                color: '#ffce7b'
                            }],
                            globalCoord: false
                        },
                        width: 1,
                        opacity: 0.8,
                        //type: 'dotted',
                        curveness: 0.2,
                    }
                },
                data: [{
                    coords: [ //jm-阳江
                        [112.70, 22.31],
                        [111.90, 21.95],
                    ]
                }, {
                    coords: [ //yj-茂名
                        [111.90, 21.95],
                        [110.99, 21.68],
                    ]
                }, {
                    coords: [ //mm-湛江
                        [110.99, 21.68],
                        [110.24, 21.25],
                    ]
                }]
            }, {
                name: '湛江到深圳向',
                type: 'lines',
                coordinateSystem: 'geo',
                //polyline:true,
                symbol: ['none', 'triangle'],
                zlevel: 2,
                effect: {
                    show: true,
                    symbol: 'roundRect',
                    period: 1.5,
                    delay: 100,
                    trailLength: 0.6,
                    symbolSize: 6,
                },
                lineStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#ed1941'
                            }, {
                                offset: 1,
                                color: '#cbb0e3'
                            }],
                            globalCoord: false
                        },
                        width: 1,
                        opacity: 0.8,
                        //type: 'dotted',
                        curveness: 0.2,
                    }
                },
                data: [{
                    coords: [ //阳江-江门
                        [111.90, 21.95],
                        [112.70, 22.31],
                    ]
                }, {
                    coords: [ //茂名-阳江
                        [110.99, 21.68],
                        [111.90, 21.95],
                    ]
                }, {
                    coords: [ //湛江-茂名
                        [110.24, 21.25],
                        [110.99, 21.68],
                    ]
                }]
            }, {
                name: '湛江到深圳向',
                type: 'lines',
                coordinateSystem: 'geo',
                //polyline:true,
                symbol: ['none', 'triangle'],
                zlevel: 2,
                effect: {
                    show: true,
                    symbol: 'roundRect',
                    period: 2,
                    delay: 100,
                    trailLength: 0.6,
                    symbolSize: 6,
                },
                lineStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#ed1941'
                            }, {
                                offset: 1,
                                color: '#cbb0e3'
                            }],
                            globalCoord: false
                        },
                        width: 1,
                        opacity: 0.8,
                        //type: 'dotted',
                        curveness: 0.2,
                    }
                },
                data: [{
                    coords: [ //东莞-深圳
                        [113.85, 23.01],
                        [114.07, 22.62],
                    ]
                }, {
                    coords: [ //广州-东莞
                        [113.36, 23.13],
                        [113.85, 23.01],
                    ]
                }, 
                 {
                    coords: [ //广州南沙-东莞
                        [113.53, 22.79],
                        [113.85, 23.01],
                    ]
                }, 
                {
                    coords: [ //中山-广州南沙
                        [113.38, 22.52],
                        [113.53, 22.79],
                    ]
                },{
                    coords: [ //佛山-广州
                        [112.98, 23.01],
                        [113.36, 23.13],
                    ]
                },  
                {
                    coords: [ //佛山-广州南沙
                        [112.98, 23.01],
                        [113.53, 22.79],
                    ]
                },{
                    coords: [ //肇庆-佛山
                        [112.66, 23.21],
                        [112.98, 23.01],
                    ]
                }, 
                {
                    coords: [ //云浮-肇庆
                        [112.00, 22.86],
                        [112.66, 23.21],
                    ]
                },
                {
                    coords: [ //江门-佛山
                        [112.70, 22.31],
                        [112.98, 23.01],
                    ]
                }, {
                    coords: [ //江门-中山
                        [112.70, 22.31],
                        [113.38, 22.52],
                    ]
                }, {
                    coords: [ //阳江-江门
                        [111.90, 21.95],
                        [112.70, 22.31],
                    ]
                }, {
                    coords: [ //茂名-阳江
                        [110.99, 21.68],
                        [111.90, 21.95],
                    ]
                }, {
                    coords: [ //湛江-茂名
                        [110.24, 21.25],
                        [110.99, 21.68],
                    ]
                }]
            }, {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                showEffectOn: 'render',
                zlevel: 3,
                symbol: 'circle',
                symbolSize: 5,
                rippleEffect: {
                    brushType: 'stroke',
                    period: 5,
                    scale: 7
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        offset: [1, 6],
                        show: true,
                        textStyle: {
                            color: "yellow"
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        show: true,
                        color: 'yellow'
                    }
                },
                data: geodata
            }, {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                showEffectOn: 'render',
                zlevel: 3,
                symbol: 'circle',
                symbolSize: 7,
                rippleEffect: {
                    brushType: 'stroke',
                    period: 2,
                    scale: 10
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        //offset: [1, -3],
                        show: true,
                        textStyle: {
                            color: "yellow"
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        show: true,
                        color: 'yellow'
                    }
                },
                data: geodata1
            },

            {
                name: '中转站',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbol: 'pin',
                symbolSize: 20,
                symbolOffset: [0, -10],
                //symbolRotate:30,
                label: {
                    normal: {
                        show: true,
                        //rotate: 30,
                        position: 'top',
                        //distance: 3,
                        backgroundColor: 'rgb(224,255,255)',
                        borderColor: '#aaa',
                        fontWeight: 100,
                        borderWidth: 1,
                        borderRadius: 4,
                        formatter: [
                            '{a|中转}'
                        ].join('\n'),
                        rich: {
                            a: {
                                align: 'center',
                                color: '#00E5EE',
                                fontSize: 10,
                                textShadowBlur: 1,
                                //textShadowColor: '#7A67EE',
                                textBorderColor: '#E8E8E8',
                                textBorderWidth: 1
                            },
                        }
                    },
                    emphasis: {
                        show: true,
                        //rotate: 30,
                        backgroundColor: 'rgb(224,255,255)',
                        borderColor: '#aaa',
                        fontWeight: 200,
                        borderWidth: 1,
                        borderRadius: 4,
                        formatter: [
                            '{a|中转站}'
                        ].join('\n'),
                        rich: {
                            a: {
                                align: 'center',
                                color: '#00CED1',
                                fontSize: 20,
                                textShadowBlur: 1,
                                //textShadowColor: '#7A67EE',
                                textBorderColor: '#E8E8E8',
                                textBorderWidth: 1
                            }
                        }

                    }
                },
                zlevel: 5,
                itemStyle: {
                    normal: {
                        //color: '#f58f98',
                        color: '#EE00EE',
                        borderWidth: 1,
                        borderColor: '#EE00EE'
                    }
                },
                data: [{
                    name: '江门市',
                    value: [112.70, 22.31]
                }]


            }
        ]
    };

    myChart.setOption(option);
});