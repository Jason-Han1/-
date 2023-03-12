var uploadedDataURL = "/asset/get/s/data-1608531979850-9ESvvm9uS.json";

  $.get(uploadedDataURL, function (geoJson) {
        echarts.registerMap('shenzhen', geoJson);
        myChart.setOption(
            option = {
                title: [{
                    show: true,
                    text: '深圳市参与企业标准制修订的情况分析--各区企业数量分布',
                    textStyle: {
                        color: '#ccc',
                        fontSize: 25
                    },
                    x: 'center',
                    top: 40
                }],

                grid: {
                    right: 10,
                    top: 10,
                    bottom: 0,
                },
                tooltip: {
                    show: true,
                    formatter: function (params) {
                        return params.name + '：' + params.data['value'][2] + ''
                    },
                },
                dataRange: {
                    min: 0,
                    max: 10,
                    right: 40,
                    seriesIndex: 1,
                    type: 'piecewise',
                    bottom: 500,
                    textStyle: {
                        color: '#FFFF'
                    },
                    splitList: [{
                        gt: 10,
                        color: '#F5222D',
                        label: '大于10'
                    }, //大于5万人
                    {
                        gte: 6,
                        lte: 10,
                        color: '#FA541C ',
                        label: '6-10'
                    }, //3-5万人
                    {
                        gte: 3,
                        lte: 6,
                        color: '#FA8C16',
                        label: '3-6'
                    }, //1-3万人
                    {
                        lte: 3,
                        color: '#fbe1d6',
                        label: '小于3'
                    }
                    ]

                },
                geo: {
                    map: 'shenzhen',
                    zoom: 1.1,
                    roam: false,
                    itemStyle: {
                        normal: {
                            areaColor: '#4c60ff',
                            //shadowColor: '#182f68',
                            //shadowOffsetX: 0,
                            //shadowOffsetY: 25
                        },
                        emphasis: {
                            areaColor: '#4c60ff',
                            borderWidth: 0,
                            color: 'green',
                            label: {
                                show: false
                            }
                        }
                    }
                },

                series: [{
                    type: 'map',
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                color: '#fff',
                                fontSize: 16
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
                            borderColor: '#002097',
                            borderWidth: 1.5,
                            areaColor: '#4c60ff'
                        },
                        emphasis: {
                            areaColor: '#4c60ff',
                            borderWidth: 0,
                            color: 'green'
                        }
                    },
                    zoom: 1.1,
                    roam: false,
                    map: 'shenzhen',//使用

                    data: data,
                    nameMap: {
                        'nanshan': '南山区',
                        'yantian': '盐田区',
                        'baoan': '宝安区',
                        'futian': '福田区',
                        'luohu': '罗湖区',
                        'dapeng': '大鹏新区',
                        'pingshan': '坪山区',
                        'guangming': '光明区',
                        'longhua': '龙华区',
                        'longgang': '龙岗区'
                    },

                },
                {
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    showEffectOn: 'render',
                    rippleEffect: {
                        period: 15,
                        scale: 4,
                        brushType: 'fill'
                    },
                    hoverAnimation: true,
                    itemStyle: {
                        normal: {
                            color: '#ffff',
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    data: data
                }

                ]
            });

    })