var uploadedDataURL = "/asset/get/s/data-1502779360900-HkKJuGe_W.json";

function area(name, color) {
    var a = {
        name: name,
        selected: true,
        itemStyle: {
            emphasis: {
                areaColor: color,
                borderColor: '#0038c6',
                borderWidth: 1
            }
        }
    };
    return a;
}
var geodata = [{
    name: '千坎菁',
    value: [110.24, 21.25]
}, {
    name: '董农村',
    value: [110.99, 21.68]
}, {
    name: '杜寨',
    value: [111.90, 21.95]
}, {
    name: '后坝',
    value: [112.70, 22.31]
}, {
    name: '武扒菁',
    value: [112.98, 23.01]
}, {
    name: '下坝',
    value: [113.43, 23.26]
}, {
    name: '普渡桥',
    value: [113.85, 23.01]
}];
var geodata1 = [{
    name: '水电站',
    value: [114.07, 22.62]
}];

$.get(uploadedDataURL, function(gdJson) {
    echarts.registerMap('广东', gdJson);

    option = {
        backgroundColor: '#021330',
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
            }
        },
        series: [{
                name: '湛江到深圳',
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
                name: '湛江到深圳',
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
                        [113.43, 23.26],
                        [113.85, 23.01],
                    ]
                }, {
                    coords: [ //佛山-广州
                        [112.98, 23.01],
                        [113.43, 23.26],
                    ]
                }, {
                    coords: [ //江门-佛山
                        [112.70, 22.31],
                        [112.98, 23.01],
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
            }
        ]
    };

    myChart.setOption(option);
});