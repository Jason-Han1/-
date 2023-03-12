var uploadedDataURL = "/asset/get/s/data-1605510661041-oDutJVlSC.json";


var t = 1; //流入流出控制
var r = 1; //右侧流入流出文字控制


var geoCoordMap = {
    '济南市': [117.121225, 36.66466],
    '菏泽市': [115.480656, 35.23375],
    '德州市': [116.39, 37.45],
    '聊城市': [115.97, 36.45],
    '泰安市': [117.13, 36.18],
    '临沂市': [118.35, 35.05],
    '淄博市': [118.05, 36.78],
    '枣庄市': [117.57, 34.86],
    '滨州市': [118.03, 37.36],
    '潍坊市': [119.1, 36.62],
    '东营市': [118.49, 37.46],
    '青岛市': [120.3, 36.62],
    '烟台市': [120.9, 37.32],
    '威海市': [122.1, 37.2],
    '日照市': [119.1, 35.62],
    '济宁市': [116.7, 35.42],
};
var d1 = {
    '济南市': 4456.86,
    '菏泽市': 1227.09,
    '德州市': 1657.82,
    '聊城市': 1622.38,
    '泰安市': 2051.68,
    '临沂市': 2399.99,
    '淄博市': 2866.75,
    '枣庄市': 1362.04,
    '滨州市': 1551.52,
    '潍坊市': 3090.92,
    '东营市': 2359.94,
    '青岛市': 5666.19,
    '烟台市': 4358.46,
    '威海市': 1944.7,
    '日照市': 1025.08,
    '济宁市': 2542.81,
};

var d2 = {

    '济南市': 5018.17,
    '菏泽市': 1556.52,
    '德州市': 1950.71,
    '聊城市': 1919.42,
    '泰安市': 2304.31,
    '临沂市': 2770.45,
    '淄博市': 3280.23,
    '枣庄市': 1561.68,
    '滨州市': 1817.58,
    '潍坊市': 3541.84,
    '东营市': 2676.35,
    '青岛市': 6615.6,
    '烟台市': 4906.83,
    '威海市': 2110.95,
    '日照市': 1214.07,
    '济宁市': 2896.69,
};

var d3 = {

    '济南市': 5435.08,
    '菏泽市': 1787.36,
    '德州市': 2230.55,
    '聊城市': 2146.75,
    '泰安市': 2547.01,
    '临沂市': 3012.81,
    '淄博市': 3557.21,
    '枣庄市': 1702.92,
    '滨州市': 1987.73,
    '潍坊市': 4012.43,
    '东营市': 3000.66,
    '青岛市': 7302.11,
    '烟台市': 5281.38,
    '威海市': 2337.86,
    '日照市': 1352.57,
    '济宁市': 3189.37,
};
var d4 = {
    '济南市': 5883.67,
    '菏泽市': 2050.01,
    '德州市': 2460.59,
    '聊城市': 2365.87,
    '泰安市': 2790.7,
    '临沂市': 3336.81,
    '淄博市': 3801.24,
    '枣庄市': 1830.63,
    '滨州市': 2155.73,
    '潍坊市': 4420.7,
    '东营市': 3250.2,
    '青岛市': 8006.6,
    '烟台市': 5613.87,
    '威海市': 2549.69,
    '日照市': 1500.16,
    '济宁市': 3501.54,
};

var d5 = {

    '济南市': 6458.2,
    '菏泽市': 2222.19,
    '德州市': 2596.08,
    '聊城市': 2516.4,
    '泰安市': 3002.19,
    '临沂市': 3569.8,
    '淄博市': 4029.77,
    '枣庄市': 1980.13,
    '滨州市': 2276.71,
    '潍坊市': 4786.74,
    '东营市': 3430.49,
    '青岛市': 8692.10,
    '烟台市': 6002.08,
    '威海市': 2790.34,
    '日照市': 1611.84,
    '济宁市': 3800.06,
};

var d6 = {
    '济南市': 6766.06,
    '菏泽市': 2400.96,
    '德州市': 2570.94,
    '聊城市': 2663.62,
    '泰安市': 3158.39,
    '临沂市': 3763.17,
    '淄博市': 4130.24,
    '枣庄市': 2031,
    '滨州市': 2355.33,
    '潍坊市': 5170.53,
    '东营市': 3450.64,
    '青岛市': 9300.07,
    '烟台市': 6446.08,
    '威海市': 3001.57,
    '日照市': 1670.8,
    '济宁市': 4013.12,
};

var d7 = {
    '济南市': 7238.9,
    '菏泽市': 2560.2,
    '德州市': 2932.99,
    '聊城市': 2859.2,
    '泰安市': 3316.8,
    '临沂市': 4026.75,
    '淄博市': 4412.01,
    '枣庄市': 2142.63,
    '滨州市': 2470.1,
    '潍坊市': 5522.7,
    '东营市': 3479.6,
    '青岛市': 10011.29,
    '烟台市': 6925.7,
    '威海市': 3212.2,
    '日照市': 1802.5,
    '济宁市': 4301.8,
};

var d8 = {

    '济南市': 8097.98,
    '菏泽市': 2820.18,
    '德州市': 3140.18,
    '聊城市': 3064.06,
    '泰安市': 3585.28,
    '临沂市': 4345.39,
    '淄博市': 4781.32,
    '枣庄市': 2315.91,
    '滨州市': 2612.92,
    '潍坊市': 5858.63,
    '东营市': 3801.78,
    '青岛市': 11037.28,
    '烟台市': 7338.95,
    '威海市': 3480.1,
    '日照市': 2002.65,
    '济宁市': 4650.57,
};
var d9 = {

    '济南市': 8862.21,
    '菏泽市': 3078.78,
    '德州市': 3380.3,
    '聊城市': 3152.15,
    '泰安市': 3651.53,
    '临沂市': 4717.8,
    '淄博市': 5068.35,
    '枣庄市': 2402.38,
    '滨州市': 2640.52,
    '潍坊市': 6156.78,
    '东营市': 4152.47,
    '青岛市': 12001.52,
    '烟台市': 7832.58,
    '威海市': 3641.48,
    '日照市': 2202.17,
    '济宁市': 4930.58,
};
var d10 = {
    '济南市': 9443.37,
    '菏泽市': 3409.98,
    '德州市': 3022.27,
    '聊城市': 2259.82,
    '泰安市': 2663.59,
    '临沂市': 4600.25,
    '淄博市': 3642.42,
    '枣庄市': 1693.91,
    '滨州市': 2457.19,
    '潍坊市': 5688.5,
    '东营市': 2916.19,
    '青岛市': 11741.31,
    '烟台市': 7653.45,
    '威海市': 2963.73,
    '日照市': 1949.38,
    '济宁市': 4370.17,
};


var colors = ["#1DE9B6", "#EEDD78", "#FFFF00", "#FFDB5C", "#37A2DA", "#04B9FF"];
var colorIndex = 0;
$(function() {

    var year = ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"];
    var mapData = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
    ];

    /*柱子Y名称*/
    var categoryData = [];
    var barData = [];

    for (var key in geoCoordMap) {
        mapData[0].push({
            "year": '2010',
            "name": key,
            "value": d1[key] / 10,
            "value1": d1[key] / 19,
        });
        mapData[1].push({
            "year": '2011',
            "name": key,
            "value": d2[key] / 10,
            "value1": d2[key] / 10,
        });
        mapData[2].push({
            "year": '2012',
            "name": key,
            "value": d3[key] / 10,
            "value1": d3[key] / 10,
        });
        mapData[3].push({
            "year": '2013',
            "name": key,
            "value": d4[key] / 10,
            "value1": d4[key] / 10,
        });
        mapData[4].push({
            "year": '2014',
            "name": key,
            "value": d5[key] / 10,
            "value1": d5[key] / 10,
        });
        mapData[5].push({
            "year": '2015',
            "name": key,
            "value": d6[key] / 10,
            "value1": d6[key] / 10,
        });
        mapData[6].push({
            "year": '2016',
            "name": key,
            "value": d7[key] / 10,
            "value1": d7[key] / 10,
        });
        mapData[7].push({
            "year": '2017',
            "name": key,
            "value": d8[key] / 10,
            "value1": d8[key] / 10,
        });
        mapData[8].push({
            "year": '2018',
            "name": key,
            "value": d9[key] / 10,
            "value1": d9[key] / 10,
        });
        mapData[9].push({
            "year": '2019',
            "name": key,
            "value": d10[key] / 10,
            "value1": d10[key] / 10,
        });

    }

    for (var i = 0; i < mapData.length; i++) {
        mapData[i].sort(function sortNumber(a, b) {
            return a.value - b.value
        });
        barData.push([]);
        categoryData.push([]);
        for (var j = 0; j < mapData[i].length; j++) {
            barData[i].push(mapData[i][j].value1 * 10);
            categoryData[i].push(mapData[i][j].name);
        }
    }
    

    
    $.getJSON(uploadedDataURL, function(geoJson) {
      
  // echarts.registerMap(nameMap, gdMap);
     echarts.registerMap('shandong', geoJson);
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

        var convertToLineData = function(data, gps) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                var toCoord = geoCoordMap[dataItem.name];
                var fromCoord = gps; //郑州
                //  var toCoord = geoGps[Math.random()*3]; 
                if (fromCoord && toCoord) {
                    if (t == 1) {
                        res.push([{
                            coord: toCoord,
                        }, {
                            coord: fromCoord,
                            value: dataItem.value
                        }]);
                    } else {
                        res.push([{
                            coord: fromCoord,
                            value: dataItem.value
                        }, {
                            coord: toCoord,
                        }]);
                    }

                }
            }
            if (t == 0) {
                t = 1;
            } else {
                t = 0;
            }
            return res;
        };

        optionXyMap01 = {
            timeline: {
                data: year,
                axisType: 'category',
                autoPlay: true,
                playInterval: 1500,
                left: '10%',
                right: '10%',
                bottom: '3%',
                width: '80%',
                //  height: null,
                label: {
                    normal: {
                        textStyle: {
                            color: '#ddd'
                        }
                    },
                    emphasis: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                symbolSize: 10,
                lineStyle: {
                    color: '#FFFFFF'
                },
                checkpointStyle: {
                    borderColor: '#FFFFFF',
                    borderWidth: 2
                },
                controlStyle: {
                    showNextBtn: true,
                    showPrevBtn: true,
                    normal: {
                        color: '#666',
                        borderColor: '#666'
                    },
                    emphasis: {
                        color: '#FFFFFF',
                        borderColor: '#aaa'
                    }
                },

            },
            baseOption: {

                animation: true,
                animationDuration: 1000,
                animationEasing: 'cubicInOut',
                animationDurationUpdate: 1000,
                animationEasingUpdate: 'cubicInOut',
                grid: {
                    right: '2%',
                    top: '10%',
                    bottom: '10%',
                    width: '18%'
                },
                tooltip: {
                    trigger: 'axis', // hover触发器
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                        shadowStyle: {
                            color: 'rgba(150,150,150,0.1)' //hover颜色
                        }
                    }
                },
                visualMap: {
                    min: 0,
                    max: 12000,
                    left: 'left',
                    top: 'bottom',
                    text: ['高', '低'],
                    textStyle: {
                        color: 'white'
                    },
                    calculable: true,
                    colorLightness: [0.8, 100],
                    color: ['#c05050', '#e5cf0d', '#5ab1ef'],
                    dimension: 0,

                },
                geo: {
                    show: true,
                    map: 'shandong',
                    roam: true,
                    zoom: 1,
                   center: [119.83531246, 36.0267395887],
                     label: {
                       emphasis: {
                         show: true
                        }
                  },
                    itemStyle: {
                        normal: {
                            borderColor: 'rgba(147, 235, 248, 1)',
                            borderWidth: 1,
                            areaColor: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.5,
                                r: 0.8,
                                colorStops: [{
                                    offset: 0,
                                    color: 'rgba(3, 0, 38,9)' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: 'rgba(3, 0, 38,9)' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            shadowColor: 'rgba(128, 217, 248, 9)',
                            // shadowColor: 'rgba(255, 255, 255, 1)',
                            shadowOffsetX: -2,
                            shadowOffsetY: 2,
                            shadowBlur: 10
                        },
                        emphasis: {
                            areaColor: '#FCFFD9',
                            borderWidth: 0
                        }
                    }
                },
            },
            options: []

        };

        for (var n = 0; n < year.length; n++) {
            var statistic_name = "山东省各市GDP";
            optionXyMap01.options.push({
                backgroundColor: '#555555',

                title: [{
                        text: '山东省各市GDP历年变化',
                        //subtext: '   ',
                        left: '25%',
                        top: '1%',
                        textStyle: {
                            color: '#fff',
                            fontSize: 25
                        }
                    },
                    {
                        id: 'statistic',
                        text: statistic_name,
                        left: '75%',
                        top: '3%',
                        textStyle: {
                            color: '#fff',
                            fontSize: 16
                        }
                    }
                ],
                xAxis: {
                    type: 'value',
                    scale: true,
                    position: 'top',
                    min: 0,
                    boundaryGap: false,
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        margin: 1,
                        textStyle: {
                            color: '#aaa'
                        }
                    },
                },
                yAxis: {
                    type: 'category',
                    //  name: 'TOP 20',
                    nameGap: 16,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#ddd'
                        }
                    },
                    axisTick: {
                        show: false,
                        lineStyle: {
                            color: '#ddd'
                        }
                    },
                    axisLabel: {
                        interval: 0,
                        textStyle: {
                            color: '#ddd'
                        }
                    },
                    data: categoryData[n]
                },

                series: [{
                        //文字和标志
                        name: 'light',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: convertData(mapData[n]),
                        symbolSize: function(val) {
                            return val[2] / 15;
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
                                color: colors[colorIndex][n]
                            }
                        }
                    },
                    //地图？
                    {
                        type: 'map',
                        map: 'shandong',
                        geoIndex: 0,
                        //aspectScale: 0.75, //长宽比
                        showLegendSymbol: false, // 存在legend时显示
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: false,
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        },
                        roam: true,
                        itemStyle: {
                            normal: {
                                areaColor: '#031525',
                                borderColor: '#FFFFFF',
                            },
                            emphasis: {
                                areaColor: '#2B91B7'
                            }
                        },
                        animation: false,
                        data: mapData
                    },
                    //地图点的动画效果
                    {
                        //  name: 'Top 5',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        data: convertData(mapData[n].sort(function(a, b) {
                            return b.value - a.value;
                        }).slice(0, 20)),
                        symbolSize: function(val) {
                            return val[2] / 15;
                        },
                        showEffectOn: 'render',
                        rippleEffect: {
                            brushType: 'stroke'
                        },
                        hoverAnimation: true,
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#031525',
                                shadowBlur: 100,
                                shadowColor: colors[colorIndex][n]
                            }
                        },
                        zlevel: 1
                    },
                    //地图线的动画效果

                    //柱状图
                    {
                        zlevel: 1.5,
                        type: 'bar',
                        barMaxWidth: 8,
                        symbol: 'none',
                        itemStyle: {
                            normal: {
                                color: colors[n],
                                barBorderRadius: [0, 30, 30, 0]
                            }
                        },
                        data: barData[n]
                    }
                ]
            });
            if (r == 0) {
                r = 1;
            } else {
                r = 0;
            }
        }
        myChart.setOption(optionXyMap01);
    });
});