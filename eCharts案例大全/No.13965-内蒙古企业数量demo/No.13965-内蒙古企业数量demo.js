var uploadedDataURL = "/asset/get/s/data-1520405936161-BkdhTW6uf.json";

function randomData() {
    return Math.round(Math.random() * 10000);
}
/*TODOTODOTODOTODOTODOTODOTODOTODOTODOTODOTODOTODOTODOTODOTODO*/

function showProvince() {
    var name = 'nmg';

    // myChart.showLoading();

    $.get(uploadedDataURL, function(geoJson) {

        // myChart.hideLoading();

        echarts.registerMap(name, geoJson);

        myChart.setOption(option = {

            title: {
                text: "内蒙古企业数量demo",
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: function(params) {
                    return params.name + '\n' + params.value;
                }
            },
            geo:{
                map:'bmap'
            },
            bmap: {
                center: [110.5, 45],
                zoom: 6,
                roam: false,
                boundingCoords:[[109,52],[113,36]],
                 /*mapStyle: {
              'styleJson': [
                {
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
            }*/
            },

            visualMap: {
                min: 0,
                max: 10,
                left: 'left',
                top: 'bottom',
                text: ['高', '低'], // 文本，默认为数值文本
                calculable: true,
                inRange: {
                    color: ['lightskyblue', 'yellow', 'orangered'],
                    symbolSize: [60, 200]
                },
            },

            series: [{
                type: 'map',
                mapType: name,
               // center:[111.62178,41],
                label: {
                    normal: {
                        show: true,
                        formatter: function(params) {
                            if (params.value) {
                                return params.name + '\n' + params.value;
                            }
                        }

                    },
                    emphasis: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                itemStyle: {

                    normal: {
                        borderColor: '#389BB7',
                        areaColor: '#fff',
                        shadowColor: 'rgba(128, 217, 248, 1)',
                        shadowOffsetX: -2,
                        shadowOffsetY: 2,
                        shadowBlur: 10
                    },
                    emphasis: {
                        areaColor: '#389BB7',
                        borderWidth: 0
                    }
                },
                animation: false,
               // coordinateSystem: 'bmap',
                data: [{
                    id: 150200,
                    name: '包头市',
                    value: 5.856
                }, {
                    name: '阿拉善盟',
                    value: 8
                }, {
                    name: '呼伦贝尔市',
                    value: 7
                }, {
                    name: '巴彦淖尔市',
                    value: 1
                }, {
                    name: '乌海市',
                    value: 3.878
                }, {
                    name: '鄂尔多斯市',
                    value: 3.996
                }, {
                    name: '呼和浩特市',
                    value: 4.211
                }, {
                    name: '乌兰察布市',
                    value: 4.831
                }, {
                    name: '锡林郭勒盟',
                    value: 9
                }, {
                    name: '赤峰市',
                    value: 6.028
                }, {
                    name: '通辽市',
                    value: 2
                }, {
                    name: '兴安盟',
                    value: 4.484
                }],
                boundingCoords:[[109,52],[113,36]]

            }],

        });
    });
}


showProvince();