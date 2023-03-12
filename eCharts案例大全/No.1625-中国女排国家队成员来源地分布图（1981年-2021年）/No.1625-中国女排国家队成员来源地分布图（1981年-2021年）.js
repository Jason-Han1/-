var uploadedDataURL = "/asset/get/s/data-1528971808162-BkOXf61WX.json";

//geoCoordMap把所有可能出现的城市加到数组里面
var geoCoordMap = {
    
    '黑龙江': [127.9688, 45.368],
    
    "吉林": [125.8154, 44.2584],
    '北京': [116.4551, 40.2539],
    "辽宁": [123.1238, 42.1216],
    "河北": [114.4995, 38.1006],
    "天津": [117.4219, 39.4189],
   
    "四川": [103.9526, 30.7617],
    "重庆": [108.384366, 30.439702],
    "山东": [117.1582, 36.8701],
    "河南": [113.4668, 34.6234],
    "江苏": [118.8062, 31.9208],
    "安徽": [117.29, 32.0581],
    "湖北": [114.3896, 30.6628],
    "浙江": [119.5313, 29.8773],
    "福建": [119.4543, 25.9222],
    
    
    
    
    '上海': [121.4648, 31.2891],
    
};

//主攻数据
var d1 = {
  '黑龙江': 1,
    
    "吉林": 1,
    '北京': 3,
    "辽宁": 10,
    "河北": 4,
    "天津": 3,
   
    "四川": 1,
    "重庆": 1,
    "山东": 4,
    "河南": 2,
    "江苏": 3,
    "安徽": 1,
    "湖北": 1,
    "浙江": 3,
   "福建": 4,
    
    
    
    '上海':4,
    '暂无公开数据':1,
    
};

//二传数据
var d2 = {
 
    '北京': 1,
    "辽宁": 2,
    "河北": 1,
    "天津": 6,
   
    "四川": 1,
    "山东": 1,

    "江苏": 3,

    "浙江": 2,
     "福建": 1,
     '暂无公开数据':2,
    '上海':2,
   
};
//自由人数据
var d3 = {
 
    "辽宁": 2,
    "天津": 2,
   
    "四川": 1,
    "山东": 1,
    "江苏": 3,

    "浙江": 1,
     "福建": 3,

    
};


var colors = [
    ["#56aac5",  "#f9d27d", "#ed4845", "#FFC809", "#FB95D5", "#BDA29A", "#6E7074", "#546570", "#C4CCD3"],
    ["#37A2DA", "#67E0E3", "#32C5E9", "#9FE6B8", "#FFDB5C", "#FF9F7F", "#FB7293", "#E062AE", "#E690D1", "#E7BCF3", "#9D96F5", "#8378EA", "#8378EA"],
    ["#DD6B66", "#759AA0", "#E69D87", "#8DC1A9", "#EA7E53", "#EEDD78", "#73A373", "#73B9BC", "#7289AB", "#91CA8C", "#F49F42"],
];
var colorIndex = 0;
$(function() {
    var year = ["主攻", "二传", "自由人", ];
    var mapData = [
        [],
        [],
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
            "year": '主攻',
            "name": key,
            "value": d1[key],
        });
        mapData[1].push({
            "year": '二传',
            "name": key,
            "value": d2[key],
        });
        mapData[2].push({
            "year": '自由人',
            "name": key,
            "value": d3[key],
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
                left: '12%',
                right: '17%',
                bottom: '3%',
                width: '50%',
                label: {
                    normal: {
                        textStyle: {
                            color: '#ddd'
                        }
                    },
                    emphasis: {
                        textStyle: {
                            color: '#A0313c'
                        }
                    }
                },
                symbolSize: 10,
                lineStyle: {
                    color: '#f2d0cc'
                },
                checkpointStyle: {
                    borderColor: '#f2d0cc',
                    borderWidth: 2
                },
                controlStyle: {
                    showNextBtn: false,
                    showPrevBtn: false,
                    normal: {
                        color: '#f2d0cc',
                        borderColor: '#f2d0cc'
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
                        type: 'line', // 默认为直线，可选为：'line' | 'shadow'
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
                            borderColor: 'rgba(191, 63, 79, 0.5)',
                            borderWidth: 1,
                            areaColor: {
                                type: 'radial',
                                x: 0,
                                y: 0,
                                r: 1,
                                colorStops: [{
                                    offset: 0,
                                    color: 'rgba(236, 93, 83, 0.2 )' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: 'rgba(236, 93, 83, 0.2)' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                          
                            shadowColor: 'rgba(191, 63, 79, 0)',
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            shadowBlur: 0
                        },
                        emphasis: {
                            areaColor: '#fffff',
                            borderWidth: 1,
                        }
                    }
                },
            },
            options: []

        };

        for (var n = 0; n < year.length; n++) {
            optionXyMap01.options.push({
                backgroundColor: '#ffffff',
                title:
                    [{
                            text: '中国女排国家队成员来源地分布图（1981年-2021年）',
                            left: '4%',
                            top: '7%',
                            textStyle: {
                                color: '#424242',
                                fontSize: 20
                            }
                        },
                        {
                            id: 'statistic',
                            text: year[n] + "人数统计情况",
                            left: '75%',
                            top: '7%',
                            textStyle: {
                                color: '#424242',
                                fontSize: 20
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
                            return val[2] / 0.3;
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

