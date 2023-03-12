var uploadedDataURL = "/asset/get/s/data-1500091095891-ByeJQMPSZ.json";

$.get(uploadedDataURL, function(data) {
    data = JSON.parse(data);
    myChart.setOption(
        option = {
            bmap: {
                center: [125.35, 43.86],
                zoom: 12,
                roam: true,
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
                        'elementType': 'geometry.fill',
                        'stylers': {
                            'color': '#000000'
                        }
                    }, {
                        'featureType': 'railway',
                        'elementType': 'geometry.stroke',
                        'stylers': {
                            'color': '#08304b'
                        }
                    }, {
                        'featureType': 'subway',
                        'elementType': 'geometry',
                        'stylers': {
                            'lightness': -70
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
                        'featureType': 'manmade',
                        'elementType': 'all',
                        'stylers': {
                            'color': '#022338'
                        }
                    }, {
                        'featureType': 'label',
                        'elementType': 'all',
                        'stylers': {
                            'visibility': 'off'
                        }
                    }]
                },
            },
            series: [{
                type: 'lines',
                coordinateSystem: 'bmap',
                polyline: true,
                data: data,
                silent: true,
                lineStyle: {
                    normal: {
                        opacity: 0.2,
                        width: 1
                    }
                },
                progressiveThreshold: 500,
                progressive: 100
            }, {
                type: 'lines',
                coordinateSystem: 'bmap',
                polyline: true,
                data: data,
                lineStyle: {
                    normal: {
                        width: 0.02
                    }
                },
                effect: {
                    constantSpeed: 40,
                    show: true,
                    trailLength: 0.02,
                    symbolSize: 2
                },
                zlevel: 1
            }]
        });
});