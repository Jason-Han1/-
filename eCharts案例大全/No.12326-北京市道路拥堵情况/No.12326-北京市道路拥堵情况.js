var uploadedDataURL = "/asset/get/s/data-1547524357071-LUlGmtYaM.json";


$.get(uploadedDataURL, function (dataValue) {
                    var busLines=[];
                    var data=JSON.parse(dataValue)//字符串转json
                    for(var i=0;i<data.features.length;i++){
                        busLinedata=data.features[i];
                        var obj=new Object();
                         var prevPt;
                        var points = [];
                        var hStep = 300 / (data.features.length - 1);
                        var obj=new Object();
                        var startlatlng=[];
                        var endlatlng=[];
                        startlatlng.push(busLinedata.attributes.lon_o)//起始经度
                        startlatlng.push(busLinedata.attributes.lat_o)//起始纬度
                        endlatlng.push(busLinedata.attributes.lon_d)//结束经度
                        endlatlng.push(busLinedata.attributes.lat_d)//结束纬度
                        obj.coords=[startlatlng,endlatlng]
                        obj.value=busLinedata.attributes.user_cnt;
                        points.push(startlatlng);
                        points.push(endlatlng);
                        
                        obj.coords=points;
                        obj.value=busLinedata.attributes.user_cnt;
                        busLines.push(obj);
                    }
            
                    console.log(busLines);
    

                    myChart.setOption({
                        animation: false,
                        bmap: {
                            center: [116.26, 39.99],
                            zoom: 12,
                            roam: true,
                            mapStyle: {
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
                            }
                        },
                        visualMap: {
                            type: "piecewise",
                            left: 'left',
                            min: 500,
                            max: 20000,
                            splitNumber: 5,
                            textStyle:{
                                color:'#ffffff',
                                align:'center'
                            },
                            maxOpen: true,
                            color: ['red', 'yellow', 'green']
                        },
                        tooltip: {
                            formatter: function(params, ticket, callback) {
                                return "拥堵指数:" + params.value;
                            },
                            trigger: 'item'
                        },
                        series: [{
                            type: 'lines',
                            coordinateSystem: 'bmap',
                            polyline: true,
                            data: busLines,
                            silent: true,
                            lineStyle: {
                                normal: {
                                    opacity: 0.2,
                                    width: 1
                                }
                            },
                            progressiveThreshold: 500,
                            progressive: 200
                        }, {
                            type: 'lines',
                            coordinateSystem: 'bmap',
                            polyline: true,
                            data: busLines,
                            lineStyle: {
                                normal: {
                                    width: 0
                                }
                            },
                            effect: {
                                constantSpeed: 20,
                                show: true,
                                trailLength: 0.1,
                                symbolSize: 1.5
                            },
                            zlevel: 1
                        }]
                    });
                    myChart.hideLoading();
                });