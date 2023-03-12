var uploadedDataURL = "/asset/get/s/data-1528971808162-BkOXf61WX.json";

//geoCoordMap把所有可能出现的城市加到数组里面
var geoCoordMap = {
    '六盘水': [104.82, 26.58],
    '遵义': [106.9, 27.7],
    '铜仁': [109.21, 27.73],
    "毕节": [105.29, 27.32],
    "黔西南": [106.4, 27.03],
    "安顺": [105.13, 25.21],
    "黔东南": [107.17, 25.19],
    "黔南": [107.31, 26.15],
    "贵阳": [106.71, 26.57],
};

//2016年数据
var d1 = {
    "六盘水": 41.6500,
    "遵义": 55.8300,
    '铜仁': 58.3200,
    "毕节": 115.4500,
    '黔西南': 43.4059,
    "安顺": 34.3069,
    "黔东南": 84.3200,
    "黔南": 58.2900,
    "贵阳": 1.6267,
};

//2017年数据
var d2 = {
    "六盘水": 32.5261,
    "遵义": 43.2436,
    '铜仁': 46.3216,
    "毕节": 91.1853,
    '黔西南': 39.5747,
    "安顺": 26.5115,
    "黔东南": 69.2691,
    "黔南": 46.5707,
    "贵阳": 1.5628,
};
//2018年数据
var d3 = {
    "六盘水": 25.3451,
    "遵义": 30.0169,
    '铜仁': 32.1661,
    "毕节": 68.6307,
    '黔西南': 30.4268,
    "安顺": 23.8778,
    "黔东南": 51.1583,
    "黔南": 36.3098,
    "贵阳": 1.3586,
};
//2019年数据
var d4 = {
    "六盘水": 20.2868,
    "遵义": 25.5269,
    '铜仁': 28.4561,
    "毕节": 52.7420,
    '黔西南': 23.3717,
    "安顺": 17.5064,
    "黔东南": 35.9076,
    "黔南": 23.9234,
    "贵阳": 1.3586,
};
//2020年数据
var d5 = {
    "六盘水": 12.9968,
    "遵义": 18.2369,
    '铜仁': 22.4361,
    "毕节": 34.3520,
    '黔西南': 20.2017,
    '安顺': 12.1164,
    '黔东南':25.7576 ,
    '黔南': 16.6334,
    '贵阳': 1.3586,
};


var colors = [
    ["#1DE9B6", "#F46E36", "#04B9FF", "#5DBD32", "#FFC809", "#FB95D5", "#BDA29A", "#6E7074", "#546570", "#C4CCD3"],
    ["#37A2DA", "#67E0E3", "#32C5E9", "#9FE6B8", "#FFDB5C", "#FF9F7F", "#FB7293", "#E062AE", "#E690D1", "#E7BCF3", "#9D96F5", "#8378EA", "#8378EA"],
    ["#DD6B66", "#759AA0", "#E69D87", "#8DC1A9", "#EA7E53", "#EEDD78", "#73A373", "#73B9BC", "#7289AB", "#91CA8C", "#F49F42"],
];
var colorIndex = 0;
$(function() {
    var year = ["2016", "2017", "2018", "2019", "2020"];
    var mapData = [
        [],
        [],
        [],
        [],
        []
    ];

    /*柱子Y名称*/
    var categoryData = [];
    var barData = [];

    for (var key in geoCoordMap) {
        mapData[0].push({
           "year": '2016',
            "name": key,
            "value": d1[key],
        });
        mapData[1].push({
            "year": '2017',
            "name": key,
            "value": d2[key],
        });
        mapData[2].push({
            "year": '2018',
            "name": key,
            "value": d3[key],
        });
        mapData[3].push({
            "year": '2019',
            "name": key,
            "value": d4[key],
        });
        mapData[4].push({
            "year": '2020',
            "name": key,
            "value": d5[key],
        });
    }

    for (var i = 0; i < mapData.length; i++) {
        mapData[i].sort(function sortNumber(a, b) {
            return a.value - b.value
        });
        barData.push([]);
        categoryData.push([]);
        for (var j = 0; j < mapData[i].length; j++) {
            barData[i].push(mapData[i][j].value);
            categoryData[i].push(mapData[i][j].name);
        }
    }

    $.getJSON(uploadedDataURL, function(geoJson) {

        echarts.registerMap('china', geoJson);
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

        optionXyMap01 = {
            timeline: {
                data: year,
                axisType: 'category',
                autoPlay: true,
                playInterval: 3000,
                left: '10%',
                right: '10%',
                bottom: '3%',
                width: '80%',
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
                    color: '#555'
                },
                checkpointStyle: {
                    borderColor: '#777',
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
                        color: '#aaa',
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
                    right: '1%',
                    top: '15%',
                    bottom: '10%',
                    width: '20%'
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
                geo: {
                    show: true,
                    map: 'china',
                    roam: true,
                    zoom: 1,
                    center: [113.83531246, 34.0267395887],
                    label: {
                        emphasis: {
                            show: false
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
                                    color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            shadowColor: 'rgba(128, 217, 248, 1)',
                            // shadowColor: 'rgba(255, 255, 255, 1)',
                            shadowOffsetX: -2,
                            shadowOffsetY: 2,
                            shadowBlur: 10
                        },
                        emphasis: {
                            areaColor: '#389BB7',
                            borderWidth: 0
                        }
                    }
                },
            },
            options: []

        };

        for (var n = 0; n < year.length; n++) {
            optionXyMap01.options.push({
                backgroundColor: '#013954',
                title: [{
                        text: '贵州省各市贫困人口指数(万)',
                        left: '25%',
                        top: '7%',
                        textStyle: {
                            color: '#fff',
                            fontSize: 25
                        }
                    },
                    {
                        id: 'statistic',
                        text: year[n] + "数据统计情况",
                        left: '75%',
                        top: '8%',
                        textStyle: {
                            color: '#fff',
                            fontSize: 25
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
                        margin: 2,
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

                series: [
                    //地图
                    {
                        type: 'map',
                        map: 'china',
                        geoIndex: 0,
                        aspectScale: 0.75, //长宽比
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
                    //地图中闪烁的点
                    {
                        //  name: 'Top 5',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        data: convertData(mapData[n].sort(function(a, b) {
                            return b.value - a.value;
                        }).slice(0, 20)),
                        symbolSize: function(val) {
                            return val[2] / 10;
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
                                color: colors[colorIndex][n],
                                shadowBlur: 10,
                                shadowColor: colors[colorIndex][n]
                            }
                        },
                        zlevel: 1
                    },
                    //柱状图
                    {
                        zlevel: 1.5,
                        type: 'bar',
                        symbol: 'none',
                        itemStyle: {
                            normal: {
                                color: colors[colorIndex][n]
                            }
                        },
                        data: barData[n]
                    }
                ]
            })
        }
        myChart.setOption(optionXyMap01);
    });
});
