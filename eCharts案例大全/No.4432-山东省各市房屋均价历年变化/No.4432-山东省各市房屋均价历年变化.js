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
    '济南市': 9281,
    '菏泽市': 4744,
    '德州市': 5286,
    '聊城市': 5391,
    '泰安市': 6759,
    '临沂市': 4400,
    '淄博市': 5594,
    '枣庄市': 4510,
    '滨州市': 4644,
    '潍坊市': 4660,
    '东营市': 6184,
    '青岛市': 12384,
    '烟台市': 7495,
    '威海市': 5626,
    '日照市': 6109,
    '济宁市': 5507,
};

var d2 = {

    '济南市': 11667,
    '菏泽市': 4751,
    '德州市': 5344,
    '聊城市': 5577,
    '泰安市': 7000,
    '临沂市': 4663,
    '淄博市': 5893,
    '枣庄市': 4446,
    '滨州市': 5000,
    '潍坊市': 4870,
    '东营市': 6249,
    '青岛市': 13523,
    '烟台市': 8109,
    '威海市': 6005,
    '日照市': 5924,
    '济宁市': 5683,
};

var d3 = {

    '济南市': 15842,
    '菏泽市': 6150,
    '德州市': 6905,
    '聊城市': 7741,
    '泰安市': 8339,
    '临沂市': 5240,
    '淄博市': 7029,
    '枣庄市': 4979,
    '滨州市': 7278,
    '潍坊市': 5997,
    '东营市': 6251,
    '青岛市': 18142,
    '烟台市': 8801,
    '威海市': 8232,
    '日照市': 6819,
    '济宁市': 6671,
};
var d4 = {
    '济南市':17674,
    '菏泽市':6523,
    '德州市': 8132,
    '聊城市': 9399,
    '泰安市': 10551,
    '临沂市': 6221,
    '淄博市': 8499,
    '枣庄市': 6216,
    '滨州市': 7836,
    '潍坊市': 6736,
    '东营市': 7072,
    '青岛市': 18788,
    '烟台市': 10490,
    '威海市': 10286,
    '日照市': 8828,
    '济宁市': 7590,
};

var d5 = {

    '济南市': 16048,
    '菏泽市': 6077,
    '德州市': 8901,
    '聊城市': 9728,
    '泰安市': 11120,
    '临沂市': 7351,
    '淄博市': 8680,
    '枣庄市': 7707,
    '滨州市': 7853,
    '潍坊市': 6907,
    '东营市': 7989,
    '青岛市': 16340,
    '烟台市': 10452,
    '威海市': 10202,
    '日照市': 10200,
    '济宁市': 8273,
};

var d6 = {
    '济南市': 15297,
    '菏泽市': 5874,
    '德州市': 8920,
    '聊城市': 10481,
    '泰安市': 10905,
    '临沂市': 8653,
    '淄博市': 8731,
    '枣庄市': 7899,
    '滨州市': 7799,
    '潍坊市': 6980,
    '东营市': 8175,
    '青岛市': 16642,
    '烟台市': 10098,
    '威海市': 9638,
    '日照市': 10055,
    '济宁市': 8309,
};



var colors = ["#1DE9B6", "#EEDD78", "#FFFF00", "#FFDB5C", "#37A2DA", "#04B9FF"];
var colorIndex = 0;
$(function() {

    var year = [ "2015", "2016", "2017", "2018", "2019","2020"];
    var mapData = [
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
            "year": '2015',
            "name": key,
            "value": d1[key] / 10,
            "value1": d1[key] / 10,
        });
        mapData[1].push({
            "year": '2016',
            "name": key,
            "value": d2[key] / 10,
            "value1": d2[key] / 10,
        });
        mapData[2].push({
            "year": '2017',
            "name": key,
            "value": d3[key] / 10,
            "value1": d3[key] / 10,
        });
        mapData[3].push({
            "year": '2018',
            "name": key,
            "value": d4[key] / 10,
            "value1": d4[key] / 10,
        });
        mapData[4].push({
            "year": '2019',
            "name": key,
            "value": d5[key] / 10,
            "value1": d5[key] / 10,
        });
        mapData[5].push({
            "year": '2020',
            "name": key,
            "value": d6[key] / 10,
            "value1": d6[key] / 10,
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
                    min: 3000,
                    max: 15000,
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
            var statistic_name = "山东省各市房屋均价";
            optionXyMap01.options.push({
                backgroundColor: '#555555',

                title: [{
                        text: '山东省各市房屋均价历年变化',
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
                            return val[2] / 20;
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
                            return val[2] / 20;
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