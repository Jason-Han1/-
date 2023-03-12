var uploadedDataURL = "/asset/get/s/data-1482909768458-HJlU_yWBe.json";


var t = 1; //流入流出控制
var r = 1; //右侧流入流出文字控制


var geoCoordMap = {
    '合肥市': [117.25, 31.83],
    '滁州市': [118.32, 32.3],
    '芜湖市': [118.43, 31.35],
    '阜阳市': [115.38, 32.89],
    '蚌埠市': [117.39, 32.92],
    '淮南市': [116.99, 32.63],
    '马鞍山市': [118.5, 31.71],
    '安庆市': [117.05, 30.52],
    '黄山市': [118.33, 29.71],
    '铜陵市': [117.81, 30.94],
    '宿州市': [116.98, 33.64],
    '淮北市': [116.8, 33.9],
    '六安市': [116.51, 31.75],
    '池州市': [117.49, 30.66],
    '宣城市': [118.76, 30.94],
    '亳州市': [115.78, 33.84],
};

var d1 = {
    '合肥市': 8461,
    '芜湖市': 5896,
    '滁州市': 4708,
    '阜阳市': 6309,
    '安庆市': 5484,
    '马鞍山市':4985,
    '蚌埠市': 5307,
    '宿州市': 5166,
    '亳州市': 4577,
    '六安市': 5150,
    '宣城市': 4458,
    '淮南市': 4283,
    '淮北市': 5073,
    '铜陵市': 5381,
    '池州市': 5609,
    '黄山市': 5627,

};

var d2 = {

    '合肥市': 14983,
    '芜湖市': 6613,
    '滁州市': 4809,
    '阜阳市': 6650,
    '安庆市': 5391,
    '马鞍山市':4872,
    '蚌埠市': 5153,
    '宿州市': 5056,
    '亳州市': 4575,
    '六安市': 5788,
    '宣城市': 4912,
    '淮南市': 4289,
    '淮北市': 5416,
    '铜陵市': 5483,
    '池州市': 5615,
    '黄山市': 5652,
   
};

var d3 = {

    '合肥市': 14362,
    '芜湖市': 9175,
    '滁州市': 6508,
    '阜阳市': 9012,
    '安庆市': 6979,
    '马鞍山市':5939,
    '蚌埠市': 6466,
    '宿州市': 5629,
    '亳州市': 5507,
    '六安市': 7870,
    '宣城市': 8156,
    '淮南市': 5407,
    '淮北市': 5942,
    '铜陵市': 7305,
    '池州市': 7552,
    '黄山市': 7890,
};
var d4 = {
    '合肥市': 14217,
    '芜湖市': 10316,
    '滁州市': 6490,
    '阜阳市': 8746,
    '安庆市': 8673,
    '马鞍山市':6514,
    '蚌埠市': 6858,
    '宿州市': 6283,
    '亳州市': 6108,
    '六安市': 7746,
    '宣城市': 8321,
    '淮南市': 5738,
    '淮北市': 6290,
    '铜陵市': 8550,
    '池州市': 8400,
    '黄山市': 9061,
};

var d5 = {

    '合肥市': 14226,
    '芜湖市': 9671,
    '滁州市': 7170,
    '阜阳市': 8002,
    '安庆市': 8521,
    '马鞍山市':7173,
    '蚌埠市': 7113,
    '宿州市': 6526,
    '亳州市': 6308,
    '六安市': 7610,
    '宣城市': 8200,
    '淮南市': 6008,
    '淮北市': 6831,
    '铜陵市': 5780,
    '池州市': 8838,
    '黄山市': 8571
};

var d6 = {
    '合肥市': 14594,
    '芜湖市': 9506,
    '滁州市': 6945,
    '阜阳市': 7459,
    '安庆市': 8523,
    '马鞍山市':7667,
    '蚌埠市': 7294,
    '宿州市': 6642,
    '亳州市': 6271,
    '六安市': 7373,
    '宣城市': 8179,
    '淮南市': 6205,
    '淮北市': 7322,
    '铜陵市': 7775,
    '池州市': 9012,
    '黄山市': 8617,
};
var d7 = {
    '合肥市': 15907,
    '芜湖市': 9988,
    '滁州市': 7165,
    '阜阳市': 7273,
    '安庆市': 8188,
    '马鞍山市':9195,
    '蚌埠市': 7446,
    '宿州市': 6651,
    '亳州市': 6370,
    '六安市': 7231,
    '宣城市': 8206,
    '淮南市': 6148,
    '淮北市': 7624,
    '铜陵市': 7852,
    '池州市': 9010,
    '黄山市': 8690,
};
var colors = ["#1DE9B6", "#EEDD78", "#FFFF00", "#FFDB5C", "#37A2DA", "#04B9FF"];
var colorIndex = 0;
$(function() {

   var year = [ "2015", "2016", "2017", "2018", "2019","2020","2021"];
    var mapData = [
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
     mapData[6].push({
            "year": '2021',
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
     echarts.registerMap('anhui', geoJson);
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
            if (t === 0) {
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
                    min: 2000,
                    max: 20000,
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
                    map: 'anhui',
                    roam: true,
                    zoom: 1,
                   center: [118.284922, 31.861184],
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
                            borderWidth: 1
                        }
                    }
                },
            },
            options: []

        };

        for (var n = 0; n < year.length; n++) {
            var statistic_name = "安徽省各市房屋均价";
            optionXyMap01.options.push({
                backgroundColor: '#555555',

                title: [{
                        text: '安徽省各市房屋均价历年变化(单位：元）',
                        //subtext: '   ',
                        left: '20%',
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
                            return val[2] / 50;
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
                        map: 'anhui',
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
                            return val[2] / 50;
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
                        zlevel: 1,
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
            if (r === 0) {
                r = 1;
            } else {
                r = 0;
            }
        }
        myChart.setOption(optionXyMap01);
    });
});