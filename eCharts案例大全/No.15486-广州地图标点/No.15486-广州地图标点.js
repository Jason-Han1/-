var guanzhouURL = "/asset/get/s/data-1491362911797-SkuvE1zpe.json";


$.get(guanzhouURL, function(as) {
    echarts.registerMap('ch', as);

    var geoCoordMap = {
        '荔湾区': [113.243038, 23.124943],
        '天河区': [113.335367, 23.13559],
        '越秀区': [113.280714, 23.125624],
        '白云区': [113.262831, 23.162281],
        '黄埔区': [113.450761, 23.103239],
        '海珠区': [113.262008, 23.103131],
        '增城区': [113.829579, 23.290497],
        '从化区': [113.587386, 23.545283],
        '花都区': [113.211184, 23.39205],
        '番禺区': [113.364619, 22.938582],
        '南沙区': [113.53738, 22.794531]

    };
    var pointData = []
    var dt = [{
        name: '荔湾区',
        value: 0
    }, {
        name: '天河区',
        value: 120
    }, {
        name: '越秀区',
        value: 1200
    }, {
        name: '白云区',
        value: 2200
    }, {
        name: '黄埔区',
        value: 3200
    }, {
        name: '海珠区',
        value: 5000
    }, {
        name: '增城区',
        value: 4200
    }, {
        name: '从化区',
        value: 6100
    }, {
        name: '花都区',
        value: 7100
    }, {
        name: '番禺区',
        value: 8100
    }, {
        name: '南沙区',
        value: 9100
    }];
    var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
    var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value),
                    coord: [114.31, 30.52]
                });
            }
        }
        return res;
    };
    var color = ['#a6c84c'];
    var series = [];
    [
        ['广州', data]
    ].forEach(function(item, i) {
        series.push({
                name: '定位',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                itemStyle: {
                    normal: {
                        color: '#0ce928',
                        shadowBlur: 10,
                        shadowColor: '#0ce928',
                    }
                },
                zlevel: 1
            },

            {
                type: 'map',
                map: 'ch',
                zlevel: 0,
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: 'transparent',
                        color: '#555'
                    }
                },
                width: '30%',
                roam: true,
                selectedMode: 'single',
                data: dt,
                markPoint: {
                    symbol: 'pin',
                    symbolSize: 30,
                    label: {
                        normal: {
                            show: true,
                            formatter: function(d) {
                                return d.name
                            }
                        }
                    },
                    data: [
                        /*从化区*/
                         {
                            name: '24',
                            coord: [113.562891, 23.402281]
                        }, {
                            name: '25',
                            coord: [113.562891, 23.472281]
                        }, {
                            name: '42',
                            coord: [113.662891, 23.592281]
                        }, {
                            name: '43',
                            coord: [113.452891, 23.502281]
                        }, {
                            name: '44',
                            coord: [113.502891, 23.452281]
                        }, {
                            name: '45',
                            coord: [113.562891, 23.592281]
                        },
                        
                        /*花都区*/
                         {
                            name: '26',
                            coord: [113.352891, 23.472281]
                        }, {
                            name: '31',
                            coord: [113.202891, 23.402281]
                        },
                        {
                            name: '41',
                            coord: [113.102891, 23.402281]
                        }, {
                            name: '46',
                            coord: [113.202891, 23.452281]
                        },
                       /* 白云区*/
                        
                        {
                            name: '1',
                            coord: [113.263966, 23.162091]
                        },{
                            name: '3',
                            coord: [113.329866, 23.203551]
                        }, {
                            name: '4',
                            coord: [113.29011, 23.17073]
                        }, {
                            name: '8',
                            coord: [113.362891, 23.252281]
                        }, {
                            name: '9',
                            coord: [113.282891, 23.262281]
                        }, {
                            name: '32',
                            coord: [113.226459, 23.260305]
                        }, {
                            name: '33',
                            coord: [113.316499, 23.291095]
                        }, {
                            name: '34',
                            coord: [113.396499, 23.331095]
                        }, {
                            name: '35',
                            coord: [113.395079, 23.278764]
                        },
                       /* 黄埔区*/
                        {
                            name: '5',
                            coord: [113.562891, 23.182281]
                        }, {
                            name: '6',
                            coord: [113.462891, 23.232281]
                        }, {
                            name: '23',
                            coord: [113.562891, 23.282281]
                        }, {
                            name: '36',
                            coord: [113.432891, 23.202281]
                        }, {
                            name: '38',
                            coord: [113.462891, 23.092281]
                        }, {
                            name: '39',
                            coord: [113.482891, 23.122281]
                        },
                        /*增城区*/
                        {
                            name: '10',
                            coord: [113.802891, 23.282281]
                        }, {
                            name: '11',
                            coord: [113.792891, 23.182281]
                        }, {
                            name: '40',
                            coord: [113.582891, 23.122281]
                        },
                       /* 荔湾区*/
                        {
                            name: '13',
                            coord: [113.202891, 23.072281]
                        }, {
                            name: '14',
                            coord: [113.242891, 23.072281]
                        }, {
                            name: '15',
                            coord: [113.222891, 23.102281]
                        }, {
                            name: '20',
                            coord: [113.222891, 23.122281]
                        },
                        //越秀区
                         {
                            name: '16',
                            coord: [113.282891, 23.122281]
                        }, {
                            name: '17',
                            coord: [113.302891, 23.132281]
                        }, {
                            name: '18',
                            coord: [113.252891, 23.132281]
                        }, {
                            name: '19',
                            coord: [113.272891, 23.122281]
                        },
                        //天河区
                        {
                            name: '2',
                            coord: [113.365079, 23.138764]
                        },  {
                            name: '7',
                            coord: [113.362891, 23.192281]
                        }, {
                            name: '21',
                            coord: [113.352891, 23.122281]
                        },
                        //海珠区
                        {
                            name: '12',
                            coord: [113.282891, 23.082281]
                        },  {
                            name: '22',
                            coord: [113.302891, 23.062281]
                        }, 
                        //番禺区
                        {
                            name: '27',
                            coord: [113.332891, 23.002281]
                        }, {
                            name: '28',
                            coord: [113.382891, 22.952281]
                        },  {
                            name: '37',
                            coord: [113.492891, 23.002281]
                        }, {
                            name: '47',
                            coord: [113.402891, 22.982281]
                        }, {
                            name: '48',
                            coord: [113.442891, 23.052281]
                        },
                        
                        //南沙区
                        {
                            name: '29',
                            coord: [113.442891, 22.802281]
                        }, {
                            name: '30',
                            coord: [113.662891, 22.702281]
                        }, {
                            name: '49',
                            coord: [113.462891, 22.882281]
                        }, {
                            name: '50',
                            coord: [113.402891, 22.872281]
                        },
                    ]
                }
            }
            /*, {
                        name: '点',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        symbol: 'pin',
                        symbolSize: function(val) {
                            return val[2] / 1;
                        },
                        label: {
                            normal: {
                                show: true,
                                textStyle: {
                                    color: '#000',

                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#fff', //标志颜色
                                borderColor: "#fff",
                                borderWidth: 2,
                            },
                            emphasis: {
                                borderColor: '#fff',
                                borderWidth: 2
                            }
                        },
                        zlevel: 6,
                        data: convertData(item[1])
                    }*/
        );
    });

    option = {
        visualMap: { //视觉映射组件
            type: 'piecewise', //分段型。
            splitNumber: 6,
            inverse: true,
            show: false,
            pieces: [{
                min: 1,
                max: 1000,
                color: '#799a1f'
            }, {
                min: 1000,
                max: 2000,
                color: '#149c9c'
            }, {
                min: 2000,
                max: 3000,
                color: '#ff84ff'
            }, {
                min: 3000,
                max: 4000,
                color: '#997cbe'
            }, {
                min: 4000,
                max: 5000,
                color: '#9eb102'
            }, {
                min: 5000,
                max: 6000,
                color: '#b18302'
            }, {
                min: 6000,
                max: 7000,
                color: '#6eb5ed'
            }, {
                min: 7000,
                max: 8000,
                color: '#F9BD5E'
            }, {
                min: 8000,
                max: 9000,
                color: '#F5A115'
            }, {
                min: 9000,
                max: 10000,
                color: '#ED7756'
            }, {
                value: 0,
                label: '正在入库',
                color: '#0ce928'
            }],
            left: 'left',
            top: 'bottom',
            textStyle: {
                color: '#000'
            }
        },

        series: series
    };

    myChart.setOption(option);

});