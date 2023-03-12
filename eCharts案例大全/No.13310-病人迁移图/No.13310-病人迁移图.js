var uploadedDataURL = "/asset/get/s/data-1531447156625-SJ6uPKrXX.json";

var  geocc= "/asset/get/s/data-1519279347346-BkslpCjwf.json";

myChart.showLoading();
$.getJSON(geocc, function(geoJson) {
    echarts.registerMap('jiangxi', geoJson);
    myChart.hideLoading();
    

    $.getJSON(uploadedDataURL, function(geoinfo) {


        var geoCoordMap = {
            '马鞍山市健康大药房有限公司雨山店': [117.37, 31.786],
            '南山矿医院': [117.37, 31.386],
            '马鞍山诗城中医骨伤医院': [116.27, 31.786],
            '协和医院': [118.07, 32.486],
            '马鞍山市第四人民医院': [117.27, 33.086],
            '马鞍山市宝芝林大药房连锁有限公司大治村店': [116.67, 32.786],
            '马鞍山市金陵医院': [117.77, 33.486],
            '马鞍山微创医院': [116.67, 33.686],
            'Home': [116.27, 33.386]
        }
        console.log(geoinfo)

        var convertData = function(data) {
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
        };


        option = {
            baseOption: {
                timeline: {
                    axisType: 'category',
                    orient: 'vertical',
                    autoPlay: true,
                    inverse: true,
                    playInterval: 4000,
                    left: null,
                    right: 0,
                    top: 20,
                    bottom: 20,
                    width: 55,
                    height: null,
                    label: {
                        normal: {
                            textStyle: {
                                color: '#999'
                            }
                        },
                        emphasis: {
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    symbol: 'none',
                    lineStyle: {
                        color: '#555'
                    },
                    checkpointStyle: {
                        color: '#bbb',
                        borderColor: '#777',
                        borderWidth: 2
                    },
                    controlStyle: {
                        showNextBtn: false,
                        showPrevBtn: false,
                        normal: {
                            color: '#666',
                            borderColor: '#666'
                        },
                        emphasis: {
                            color: '#aaa',
                            borderColor: '#aaa'
                        }
                    },
                    data: []
                },
                backgroundColor: '#404a59',
                title: [{
                    text: geoinfo.date[0],
                    textAlign: 'center',
                    left: '50%',
                    top: '90%',
                    textStyle: {
                        fontSize: 50,
                        color: 'rgba(255, 255, 255, 0.7)'
                    }
                }, {
                    text: '病人迁移图例',
                    left: 'center',
                    top: 10,
                    textStyle: {
                        color: '#aaa',
                        fontWeight: 'normal',
                        fontSize: 20
                    }
                }],
                grid: {
                    top: 100,
                    containLabel: true,
                    left: 30,
                    right: '110'
                },
                geo: {
                    show: true,
                    map: 'jiangxi',
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false,
                        }
                    },
                    roam: true,
                    itemStyle: {
                        normal: {
                            areaColor: 'transparent',
                            borderColor: '#3fdaff',
                            borderWidth: 2,
                            shadowColor: 'rgba(63, 218, 255, 0.5)',
                            shadowBlur: 30
                        },
                        emphasis: {
                            areaColor: '#2B91B7',
                        }
                    }
                },
                visualMap: {
                    show: false,
                    min: 0,
                    max: 500,
                    left: 'left',
                    top: 'bottom',
                    text: ['高', '低'], // 文本，默认为数值文本
                    calculable: true,
                    seriesIndex: [1],
                    inRange: {
                        // color: ['#3B5077', '#031525'] // 蓝黑
                        // color: ['#ffc0cb', '#800080'] // 红紫
                        // color: ['#3C3B3F', '#605C3C'] // 黑绿
                        //color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
                        //color: ['#23074d', '#cc5333'] // 紫红
                        // color: ['#00467F', '#A5CC82'] // 蓝绿
                        // color: ['#1488CC', '#2B32B2'] // 浅蓝
                        // color: ['#00467F', '#A5CC82'] // 蓝绿
                        // color: ['#00467F', '#A5CC82'] // 蓝绿
                        // color: ['#00467F', '#A5CC82'] // 蓝绿
                        // color: ['#00467F', '#A5CC82'] // 蓝绿

                    }
                },
                series: [{
                        name: 'light',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: convertData(geoinfo.geodata[0]),
                        symbolSize: function(val) {
                            return val[2] ;
                        },
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: true
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#F4E925'
                            }
                        }
                    },
                    {
                        name: '线路',
                        type: 'lines',
                        coordinateSystem: 'geo',
                        zlevel: 2,
                        large: true,
                        effect: {
                            show: true,
                            constantSpeed: 100,
                            symbol: 'arrow', //ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
                            symbolSize: 10,
                            trailLength: 0.1,
                        },

                        lineStyle: {
                            normal: {
                                color: '#0fff17',
                                /*
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0, color: '#58B3CC'
                                    }, {
                                        offset: 1, color: '#F58158'
                                    }], false),*/
                                width: 2,
                                opacity: 1.0,
                                curveness: 0.15
                            }
                        },
                        data: geoinfo.moveline[0]
                    }
                ],
                animationDurationUpdate: 800,
                animationEasingUpdate: 'quinticInOut'
            },
            options: []
        };

        for (var n = 0; n < geoinfo.date.length; n++) {
            option.baseOption.timeline.data.push(geoinfo.date[n]);
            option.options.push({
                title: {
                    show: true,
                    'text': geoinfo.date[n] + '',
                    
                },
                series: [{
                        name: 'light',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: convertData(geoinfo.geodata[n]),
                        symbolSize: function(val) {
                            return val[2] ;
                        },
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: true
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#F4E925'
                            }
                        }
                    },
                    {
                        name: '线路',
                        type: 'lines',
                        coordinateSystem: 'geo',
                        zlevel: 2,
                        large: true,
                        effect: {
                            show: true,
                            constantSpeed: 100,
                            symbol: 'arrow', //ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
                            symbolSize: 10,
                            trailLength: 0.1,
                        },

                        lineStyle: {
                            normal: {
                                color: '#0fff17',
                                /*
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0, color: '#58B3CC'
                                    }, {
                                        offset: 1, color: '#F58158'
                                    }], false),*/
                                width: 2,
                                opacity: 1.0,
                                curveness: 0.15
                            }
                        },
                        data: geoinfo.moveline[n]
                    }
                ]
                
                
            });
        }
myChart.setOption(option);
    })


})