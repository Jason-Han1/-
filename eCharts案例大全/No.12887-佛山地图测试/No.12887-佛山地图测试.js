
var data1 = [{
        name: '1',
        value: 90
    },
    {
        name: '2',
        value: 120
    },
    {
        name: '3',
        value: 12221
    },
    {
        name: '4',
        value: 12897
    },
    {
        name: '5',
        value: 14541
    },
    {
        name: '6',
        value: 1554
    },
    {
        name: '7',
        value: 1645
    },
    {
        name: '8',
        value: 184
    },
    {
        name: '9',
        value: 1885
    },
    {
        name: '10',
        value: 1945
    },
    {
        name: '11',
        value: 211
    }
];
var startPoint = {
    x: 104.114129,
    y: 37.550339
};
// 地图自定义样式
var bmap = {
    center: [startPoint.x, startPoint.y],
    zoom: 5,
    roam: true,
    mapStyle: {
        styleJson: [{
            "featureType": "water",
            "elementType": "all",
            "stylers": {
                "color": "#044161"
            }
        }, {
            "featureType": "land",
            "elementType": "all",
            "stylers": {
                "color": "#004981"
            }
        }, {
            "featureType": "boundary",
            "elementType": "geometry",
            "stylers": {
                "color": "#064f85"
            }
        }, {
            "featureType": "railway",
            "elementType": "all",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "highway",
            "elementType": "geometry",
            "stylers": {
                "color": "#004981"
            }
        }, {
            "featureType": "highway",
            "elementType": "geometry.fill",
            "stylers": {
                "color": "#005b96",
                "lightness": 1
            }
        }, {
            "featureType": "highway",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "arterial",
            "elementType": "geometry",
            "stylers": {
                "color": "#004981"
            }
        }, {
            "featureType": "arterial",
            "elementType": "geometry.fill",
            "stylers": {
                "color": "#00508b"
            }
        }, {
            "featureType": "poi",
            "elementType": "all",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "green",
            "elementType": "all",
            "stylers": {
                "color": "#056197",
                "visibility": "off"
            }
        }, {
            "featureType": "subway",
            "elementType": "all",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "manmade",
            "elementType": "all",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "local",
            "elementType": "all",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "arterial",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "boundary",
            "elementType": "geometry.fill",
            "stylers": {
                "color": "#029fd4"
            }
        }, {
            "featureType": "building",
            "elementType": "all",
            "stylers": {
                "color": "#1a5787"
            }
        }, {
            "featureType": "label",
            "elementType": "all",
            "stylers": {
                "visibility": "off"
            }
        }]
    }
};
var geoCoordMap = {
    '1': [113.12, 23.02],
    '2': [113.15, 23.03],
    '3': [116.4131750, 39.9110560],
    '4': [116.4528560, 39.8494900],
    '5': [116.4517070, 39.9422900],
    '6': [117.1904400, 23.1638470],
    '7': [116.1706900, 23.2048150],
    '8': [115.1073730, 23.2785600],
    '9': [114.2306380, 22.8491420],
    '10': [113.1133060, 23.0201890],
    '11': [800.1125170, 200.0199830],
};

function convertData(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
}
option = {
    bmap: bmap,
    geo: {
        map: 'bmap',
        itemStyle: {
            normal: {
                areaColor: '#103249',
                borderColor: '#02d3f9'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: [{
            name: '散点图测试',
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: convertData(data1),
            symbolSize: 6,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#d94e5d'
                }
            }
        }
    ]
};