var uploadedDataURL = "/asset/get/s/data-1505973353818-S1MdECgob.json";
$.get(uploadedDataURL, function(data) {
    data = JSON.parse(data);
    
    var hStep = 300 / (data.length - 1);
    var busLines = [].concat.apply([], data.map(function (busLine, idx) {
         /*var points = [];
        for (var i = 0; i < busLine.length; i ++) {
            var pt = busLine[i].split(',');
            points.push([pt[0], pt[1]]);
        }*/

        return {
            coords: busLine,
            lineStyle: {
                normal: {
                    color: echarts.color.modifyHSL('#5A94DF', Math.round(hStep * idx))
                }
            }
        };
    }));
    myChart.setOption(
    option = {
         title : {
        text: '余杭公交路网监控图',
        subtext: '',
        x:'center',
        textStyle:{
            color:'#fff'
        }
    },
        bmap: {
            center: [120.184158,30.28849],
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
                    'featureType': 'point',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                    
                }, {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": {
                              "color": "#93c47d",
                              "visibility": "off"
                    }
          }]
            },
        },
        series: [{
            type: 'lines',
            coordinateSystem: 'bmap',
            polyline: true,
            data: busLines,
            silent: true,
            lineStyle: {
                normal: {
                    opacity: 0.3,
                    width: 1
                }
            },
            progressiveThreshold: 500,
            progressive: 100
        }, {
            type: 'lines',
            coordinateSystem: 'bmap',
            polyline: true,
            data: busLines,
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
        },{
            name:'浙A95527',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: function(val) {
                return val[2] / 4;
            },
            showEffectOn: 'render',
            itemStyle: {
                normal: {
                    color: '#f4e925',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            data: [{
                name: '浙A95527-告警',
                value:[120.102281,30.281876,50]
            }]
        },{
            name:'浙AGH2352',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: function(val) {
                return val[2] / 4;
            },
            showEffectOn: 'render',
            itemStyle: {
                normal: {
                    color: '#ff2200',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            data: [{
                name: '浙AGH2352-故障',
                value:[120.155575,30.314324,70]
            }]
        }
        ]
    });
});