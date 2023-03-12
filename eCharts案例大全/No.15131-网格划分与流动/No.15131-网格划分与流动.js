myChart.setOption({
    // 加载 bmap 组件
    bmap: {
        center: [118.413185, 31.349114], // 百度地图中心经纬度
        zoom: 11, // 百度地图缩放
        roam: true, // 是否开启拖拽缩放，可以只设置 'scale' 或者 'move'
        mapStyle: {
            'styleJson': [{
                'featureType': 'water',
                'elementType': 'all',
                'stylers': {
                    'color': '#031628'
                }
            }, {
                'featureType': 'land',
                'elementType': 'geometry',
                'stylers': {
                    'color': '#000102'
                }
            }, {
                'featureType': 'highway',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'geometry.fill',
                'stylers': {
                    'color': '#000000'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'geometry.stroke',
                'stylers': {
                    'color': '#0b3d51'
                }
            }, {
                'featureType': 'local',
                'elementType': 'geometry',
                'stylers': {
                    'color': '#000000'
                }
            }, {
                'featureType': 'railway',
                'elementType': 'all',
                'stylers': {
                    "visibility": "off"
                }
            }, {
                'featureType': 'subway',
                'elementType': 'all',
                'stylers': {
                    "visibility": "off"
                }
            }, {
                'featureType': 'building',
                'elementType': 'geometry.fill',
                'stylers': {
                    'color': '#000000'
                }
            }, {
                'featureType': 'all',
                'elementType': 'labels.text.fill',
                'stylers': {
                    'color': '#857f7f'
                }
            }, {
                'featureType': 'all',
                'elementType': 'labels.text.stroke',
                'stylers': {
                    'color': '#000000'
                }
            }, {
                'featureType': 'building',
                'elementType': 'geometry',
                'stylers': {
                    'color': '#022338'
                }
            }, {
                'featureType': 'green',
                'elementType': 'geometry',
                'stylers': {
                    'color': '#062032'
                }
            }, {
                'featureType': 'boundary',
                'elementType': 'all',
                'stylers': {
                    'color': '#465b6c'
                }
            }, {
                "featureType": "poi",
                "elementType": "all",
                "stylers": {
                    "visibility": "off"
                }
            }, {
                'featureType': 'manmade',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'label',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }]
        }
    },
    series: [{ //多边形
        type: 'custom',
        coordinateSystem: 'bmap',
        renderItem: function(params, api) {
            var polygons = [];
            ranges.forEach(function(rang) {
                var points = [];
                for (var i = 0; i < rang.range.length; i++) {
                    points.push(api.coord(rang.range[i].split(',')));
                }
                polygons.push({
                    type: 'polygon',
                    shape: {
                        points: points
                    },
                    style: api.style({
                        fill: 'rgba(0,0,0,0)',
                        stroke: '#6E6E6E'
                    })
                });
            });
            return {
                type: 'group',
                children: polygons
            };
        },
        itemStyle: {
            normal: {
                opacity: 1
            }
        },
        animation: false,
        silent: false,
        data: [0],
        zlevel: 0
    }, { //点
        name: '景区',
        type: 'effectScatter',
        coordinateSystem: 'bmap',
        zlevel: 2,
        symbolSize: 15,
        rippleEffect: {
            period: 4,
            scale: 4,
            brushType: 'stroke'
        },
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: '{b}',
                textStyle: {
                    fontSize: 14,
                    color: '#bdccf2'
                }
            }
        },
        itemStyle: {
            normal: {
                color: '#ffef00'
            }
        },
        data: [{
            'name': 'A',
            'value': [118.377173, 31.337123, 50]
        }, {
            'name': 'B',
            'value': [118.393252, 31.15576, 50]
        }, {
            'name': 'C',
            'value': [117.989662, 31.293115, 50]
        }]

    }, { //线
        type: 'lines',
        coordinateSystem: 'bmap',
        zlevel: 1,
        symbol: ['none', 'arrow'],
        symbolSize: 5,
        silent: true,
        animation: false,
        effect: {
            show: true,
            period: 6,
            trailLength: 0.7,
            color: '#fff',
            symbolSize: 5
        },
        lineStyle: {
            normal: {
                color: '#ffa526',
                width: 2,
                opacity: 0.8,
                curveness: 0.2
            }
        },
        data: [{
            "from": 'A',
            "to": 'B',
            "coords": [
                [118.377173, 31.337123],
                [118.393252, 31.15576]
            ]
        }, {
            "from": 'A',
            "to": 'C',
            "coords": [
                [118.377173, 31.337123],
                [117.989662, 31.293115]
            ]
        }]
    }]
});