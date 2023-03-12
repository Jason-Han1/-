var uploadedDataURL = "/asset/get/s/data-1528971808162-BkOXf61WX.json";

//geoCoordMap把所有可能出现的城市加到数组里面
var geoCoordMap = {
   '台湾': [121.5135, 25.0308],
        '黑龙江': [127.9688, 45.368],
        '内蒙古': [110.3467, 41.4899],
        "吉林": [125.8154, 44.2584],
        '北京': [116.4551, 40.2539],
        "辽宁": [123.1238, 42.1216],
        "河北": [114.4995, 38.1006],
        "天津": [117.4219, 39.4189],
        "山西": [112.3352, 37.9413],
        "陕西": [109.1162, 34.2004],
        "甘肃": [103.5901, 36.3043],
        "宁夏": [106.3586, 38.1775],
        "青海": [101.4038, 36.8207],
        "新疆": [87.9236, 43.5883],
        "西藏": [91.11, 29.97],
        "四川": [103.9526, 30.7617],
        "重庆": [108.384366, 30.439702],
        "山东": [117.1582, 36.8701],
        "河南": [113.4668, 34.6234],
        "江苏": [118.8062, 31.9208],
        "安徽": [117.29, 32.0581],
        "湖北": [114.3896, 30.6628],
        "浙江": [119.5313, 29.8773],
        "福建": [119.4543, 25.9222],
        "江西": [116.0046, 28.6633],
        "湖南": [113.0823, 28.2568],
        "贵州": [106.6992, 26.7682],
        "云南": [102.9199, 25.4663],
        "广东": [113.12244, 23.009505],
        "广西": [108.479, 23.1152],
        "海南": [110.3893, 19.8516],
        '上海': [121.4648, 31.2891],
};

//2013年数据
var d1 = {
  "北京":2114.8,
"天津":1472.21,
"河北":7332.61,
"山西":3629.8,
"内蒙古":2497.61,
"辽宁":4390,
"吉林":2751.28,
"黑龙江":3835.02,
"上海":2415.15,
"江苏":7939.49,
"浙江":5498,
"安徽":6029.8,
"福建":3774,
"江西":4522.15,
"山东":9733.39,
"河南":9413.35,
"湖北":5799,
"湖南":6690.6,
"广东":10644,
"广西":4719,
"海南":895.28,
"重庆":2970,
"四川":8107,
"贵州":3502.22,
"云南":4686.6,
"西藏":312.04,
"陕西":3764,
"甘肃":2582.18,
"青海":577.79,
"宁夏":654.19,
"新疆":2264.3,

};

//2014年数据
var d2 = {
  "北京":2151.6,
"天津":1516.81,
"河北":7383.75,
"山西":3647.96,
"内蒙古":2504.81,
"辽宁":4391,
"吉林":2752.38,
"黑龙江":3833,
"上海":2425.68,
"江苏":7960.06,
"浙江":5508,
"安徽":6082.9,
"福建":3806,
"江西":4542.16,
"山东":9789.43,
"河南":9436,
"湖北":5816,
"湖南":6737.24,
"广东":10724,
"广西":4754,
"海南":903.48,
"重庆":2991.4,
"四川":8140.2,
"贵州":3508.04,
"云南":4713.9,
"西藏":317.55,
"陕西":3775.12,
"甘肃":2590.78,
"青海":583.42,
"宁夏":661.54,
"新疆":2298.47,

};
//2015年数据
var d3 = {
  "北京":2170.5,
"天津":1546.95,
"河北":7424.92,
"山西":3664.12,
"内蒙古":2511.04,
"辽宁":4382.4,
"吉林":2753.32,
"黑龙江":3811.7,
"上海":2415.27,
"江苏":7976.3,
"浙江":5539,
"安徽":6143.6,
"福建":3839,
"江西":4565.63,
"山东":9847.16,
"河南":9480,
"湖北":5851.5,
"湖南":6783.03,
"广东":10849,
"广西":4796,
"海南":910.82,
"重庆":3016.55,
"四川":8204,
"贵州":3529.5,
"云南":4741.8,
"西藏":323.97,
"陕西":3793,
"甘肃":2599.55,
"青海":588.43,
"宁夏":667.88,
"新疆":2359.73,

};
//2016年数据
var d4 = {
   "北京":2173,
"天津":1562,
"河北":7470,
"山西":3682,
"内蒙古":2520,
"辽宁":4378,
"吉林":2733,
"黑龙江":3799,
"上海":2420,
"江苏":7999,
"浙江":5590,
"安徽":6196,
"福建":3874,
"江西":4592,
"山东":9947,
"河南":9532,
"湖北":5885,
"湖南":6822,
"广东":10999,
"广西":4838,
"海南":917,
"重庆":3048,
"四川":8262,
"贵州":3555,
"云南":4771,
"西藏":331,
"陕西":3813,
"甘肃":2610,
"青海":593,
"宁夏":675,
"新疆":2398,

};
//2017年数据
var d5 = {
   "北京":2170.7,
"天津":1557,
"河北":7519.52,
"山西":3702,
"内蒙古":2529,
"辽宁":4369,
"吉林":2717,
"黑龙江":3788.7,
"上海":2418,
"江苏":8029.3,
"浙江":5657,
"安徽":6255,
"福建":3911,
"江西":4622,
"山东":10005.83,
"河南":9559.13,
"湖北":5902,
"湖南":6860.15,
"广东":11169,
"广西":4885,
"海南":926,
"重庆":3075.16,
"四川":8302,
"贵州":3580,
"云南":4800.5,
"西藏":337,
"陕西":3835,
"甘肃":2626,
"青海":598,
"宁夏":682,
"新疆":2445,

   
};
//2018年数据
var d6 = {
   "北京":2154,
"天津":1560,
"河北":7556,
"山西":3718,
"内蒙古":2534,
"辽宁":4359,
"吉林":2704,
"黑龙江":3773,
"上海":2424,
"江苏":8051,
"浙江":5737,
"安徽":6324,
"福建":3941,
"江西":4648,
"山东":10047,
"河南":9605,
"湖北":5917,
"湖南":6899,
"广东":11346,
"广西":4926,
"海南":934,
"重庆":3102,
"四川":8341,
"贵州":3600,
"云南":4830,
"西藏":344,
"陕西":3864,
"甘肃":2637,
"青海":603,
"宁夏":688,
"新疆":2487,

};
//2019年数据
var d7 = {
   "北京":2153.6,
"天津":1561.83,
"河北":7591.97,
"山西":3729,
"内蒙古":2539.56,
"辽宁":4351.7,
"吉林":2690.73,
"黑龙江":3751.3,
"上海":2428.14,
"江苏":8070,
"浙江":5850,
"安徽":6365.9,
"福建":3973,
"江西":4666.1318,
"山东":10070.21,
"河南":9639.75,
"湖北":5927,
"湖南":6918.38,
"广东":11521,
"广西":4960,
"海南":944.72,
"重庆":3124.32,
"四川":8375,
"贵州":3622.95,
"云南":4858,
"西藏":350.6,
"陕西":3876.21,
"甘肃":2647.43,
"青海":607.82,
"宁夏":694.66,
"新疆":2523.22,

};

var colors = [
    ["#1DE9B6", "#F46E36", "#04B9FF", "#5DBD32", "#FFC809", "#FB95D5", "#BDA29A", "#6E7074", "#546570", "#C4CCD3"],
    ["#37A2DA", "#67E0E3", "#32C5E9", "#9FE6B8", "#FFDB5C", "#FF9F7F", "#FB7293", "#E062AE", "#E690D1", "#E7BCF3", "#9D96F5", "#8378EA", "#8378EA"],
    ["#DD6B66", "#759AA0", "#E69D87", "#8DC1A9", "#EA7E53", "#EEDD78", "#73A373", "#73B9BC", "#7289AB", "#91CA8C", "#F49F42"],
];
var colorIndex = 0;
$(function() {
    var year = ["2013", "2014", "2015", "2016", "2017", "2018","2019"];
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
            "year": '2013',
            "name": key,
            "value": d1[key],
        });
        mapData[1].push({
            "year": '2014',
            "name": key,
            "value": d2[key],
        });
        mapData[2].push({
            "year": '2015',
            "name": key,
            "value": d3[key],
        });
        mapData[3].push({
            "year": '2016',
            "name": key,
            "value": d4[key],
        });
        mapData[4].push({
            "year": '2017',
            "name": key,
            "value": d5[key],
        });
        mapData[5].push({
            "year": '2018',
            "name": key,
            "value": d6[key],
        });
          mapData[6].push({
            "year": '2019',
            "name": key,
            "value": d7[key],
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
                title:
                    [{
                            text: '2013-2019年中国各区域人口数量变化',
                            left: '30%',
                            top: '5%',
                            textStyle: {
                                color: '#fff',
                                fontSize:17
                            }
                        },
                        {
                            id: 'statistic',
                            text: year[n] + "数据统计情况",
                            left: '75%',
                            top: '5%',
                            textStyle: {
                                color: '#fff',
                                fontSize: 15
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
                        }).slice(0, 40)),
                        symbolSize: function(val) {
                            return val[2] /500;
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

