var uploadedDataURL = "/asset/get/s/data-1574313985698-3v_t1LK_.json";


$.get(uploadedDataURL, function(busLine){
    busLine = JSON.parse(busLine)
  option = {
    bmap: {
        center: [106.555197,29.611781],
        zoom: 12,
        roam: true,
        mapStyle: {
            'styleJson': [{
                    'featureType': 'water',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#031628'
                    }
                },
                {
                    'featureType': 'land',
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#000102'
                    }
                },
                {
                    'featureType': 'highway',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                },
                {
                    'featureType': 'arterial',
                    'elementType': 'geometry.fill',
                    'stylers': {
                        'color': '#000000'
                    }
                },
                {
                    'featureType': 'arterial',
                    'elementType': 'geometry.stroke',
                    'stylers': {
                        'color': '#0b3d51'
                    }
                },
                {
                    'featureType': 'local',
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#000000'
                    }
                },
                {
                    'featureType': 'railway',
                    'elementType': 'geometry.fill',
                    'stylers': {
                        'color': '#000000'
                    }
                },
                {
                    'featureType': 'railway',
                    'elementType': 'geometry.stroke',
                    'stylers': {
                        'color': '#08304b'
                    }
                },
                {
                    'featureType': 'subway',
                    'elementType': 'geometry',
                    'stylers': {
                        // 'color': '#000000',// 默认透明显示地铁线路
                        'lightness': -70
                    }
                },
                {
                    'featureType': 'building',
                    'elementType': 'geometry.fill',
                    'stylers': {
                        'color': '#000000'
                    }
                },
                {
                    'featureType': 'all',
                    'elementType': 'labels.text.fill',
                    'stylers': {
                        'color': '#857f7f'
                    }
                },
                {
                    'featureType': 'all',
                    'elementType': 'labels.text.stroke',
                    'stylers': {
                        'color': '#000000'
                    }
                },
                {
                    'featureType': 'building',
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#022338'
                    }
                },
                {
                    'featureType': 'green',
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#062032'
                    }
                },
                {
                    'featureType': 'boundary',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#465b6c'
                    }
                },
                {
                    'featureType': 'manmade',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#022338'
                    }
                },
                {
                    'featureType': 'label',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                }
            ]
        }
    },
    series: [{
        type: 'lines',
        coordinateSystem: 'bmap',
        polyline: true,
        data: busLine,
        silent: true,
        lineStyle: {
            normal: {
                opacity: 0.4,
                width: 2.5
            }
        },
        progressiveThreshold: 500,
        progressive: 200
    }, {
        type: 'lines',
        coordinateSystem: 'bmap',
        polyline: true,
        data: busLine,
        lineStyle: {
            normal: {
                width: 0
            }
        },
        effect: {
            constantSpeed: 50,
            show: true,
            trailLength: 0.6,
            symbolSize: 3
        },
        zlevel: 1
    }]
};  
myChart.setOption(option);
})
