var geoCoorddata = {
        '武汉': [114.30539299999998, 30.593099],
        '深圳': [114.05786499999999, 22.543096],
        '北京': [116.40739499999995, 39.904211],
        '阿克苏': [80.26338699999997, 41.167548]
    },
    option = {
        bmap: {
            center: [113.65, 34.76],
            zoom: 5,
            roam: true,
            mapStyle: {
                styleJson: [{
                    'featureType': 'land', //调整土地颜色
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#081734'
                    }
                }, {
                    'featureType': 'building', //调整建筑物颜色
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#04406F'
                    }
                }, {
                    'featureType': 'building', //调整建筑物标签是否可视
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'highway', //调整高速道路颜色
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#015B99'
                    }
                }, {
                    'featureType': 'highway', //调整高速名字是否可视
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'arterial', //调整一些干道颜色
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#003051'
                    }
                }, {
                    'featureType': 'arterial',
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'green',
                    'elementType': 'geometry',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'water',
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#044161'
                    }
                }, {
                    'featureType': 'subway', //调整地铁颜色
                    'elementType': 'geometry.stroke',
                    'stylers': {
                        'color': '#003051'
                    }
                }, {
                    'featureType': 'subway',
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'railway',
                    'elementType': 'geometry',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'railway',
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'all', //调整所有的标签的边缘颜色
                    'elementType': 'labels.text.stroke',
                    'stylers': {
                        'color': '#313131'
                    }
                }, {
                    'featureType': 'all', //调整所有标签的填充颜色
                    'elementType': 'labels.text.fill',
                    'stylers': {
                        'color': '#FFFFFF'
                    }
                }, {
                    'featureType': 'manmade',
                    'elementType': 'geometry',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'manmade',
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'local',
                    'elementType': 'geometry',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'local',
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'subway',
                    'elementType': 'geometry',
                    'stylers': {
                        'lightness': -65
                    }
                }, {
                    'featureType': 'railway',
                    'elementType': 'all',
                    'stylers': {
                        'lightness': -40
                    }
                }, {
                    'featureType': 'boundary',
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#8b8787',
                        'weight': '1',
                        'lightness': -29
                    }
                }]
            }
        },
        series: [{
            type: 'lines',
            mapType: 'china',
            coordinateSystem: 'bmap',
            zlevel: 1,
            data: [{
                name: '武汉',
                toname: '北京',
                coords: [geoCoorddata['武汉'], geoCoorddata['北京']]
            }, {
                name: '深圳',
                toname: '北京',
                coords: [geoCoorddata['深圳'], geoCoorddata['北京']]
            }, {
                name: '阿克苏',
                toname: '北京',
                coords: [geoCoorddata['阿克苏'], geoCoorddata['北京']]
            }],
            //线上面的动态特效
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 4
            },
            lineStyle: {
                normal: {
                    width: '',
                    color: '#a6c84c',
                    curveness: 0.2
                }
            }
        }, {
            type: 'effectScatter',
            mapType: 'china',
            coordinateSystem: 'bmap',
            zlevel: 3,
            data: [{
                name: '北京',
                value: geoCoorddata['北京'].concat(200)
            }, ],
            rippleEffect: {
                period: 10,
                scale: 5,
                brushType: 'fill'
            },
        }]
    };
myChart.setOption(option);