    myChart.setOption(option = {
        bmap: {
            center: [106.50369, 29.554002],
            zoom: 14,
            roam: true,
            mapStyle: {
                styleJson: [{
                    'featureType': 'water',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#d1d1d1'
                    }
                }, {
                    'featureType': 'land',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#f3f3f3'
                    }
                }, {
                    'featureType': 'railway',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'highway',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#fdfdfd'
                    }
                }, {
                    'featureType': 'highway',
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'arterial',
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#fefefe'
                    }
                }, {
                    'featureType': 'arterial',
                    'elementType': 'geometry.fill',
                    'stylers': {
                        'color': '#fefefe'
                    }
                }, {
                    'featureType': 'poi',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'green',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'subway',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'manmade',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#d1d1d1'
                    }
                }, {
                    'featureType': 'local',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#d1d1d1'
                    }
                }, {
                    'featureType': 'arterial',
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'boundary',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#fefefe'
                    }
                }, {
                    'featureType': 'building',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#d1d1d1'
                    }
                }, {
                    'featureType': 'label',
                    'elementType': 'labels.text.fill',
                    'stylers': {
                        'color': '#999999'
                    }
                }]
            }
        },
        series: [{
            type: 'lines',
            polyline: true,
            coordinateSystem: 'bmap',
                                        effect:{
                show:true,
                period:5,
                symbol:'rect',
                symbolSize:10,
                color:'#000',
                trailLength:0.8,
                loop:true,
            },
            data: [
                {coords:[
                    [106.50369, 29.554002],
                    [106.50369, 29.583002],
                    ],
                lineStyle: {
                    normal: {
                    color: 'red',
                    opacity: 0.6,
                    width: 1
                    }
                },
            },
                {coords:[
                    [106.52369, 29.574002],
                    [106.51369, 29.563002],
                    [106.51369, 29.583002],
                    ],
                lineStyle: {
                    normal: {
                    color: 'blue',
                    opacity: 0.6,
                    width: 1
                    }
                }
            }
        ],
        }, {
                tooltip : {
                    trigger: 'item'
                },
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            data: [
                {'name':'1','value':[106.52369, 29.574002,180]},
                {'name':'2','value':[106.51369, 29.583002,190]}
                ],
            symbolSize: function (val) {
                return val[2]/10;
            },
                        showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
                        label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: 'purple',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        }
        ]
    });