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

//1993年数据
var d1 = {
    "北京": 886.21,
    "天津": 538.94,
    "河北": 1690.84,
    "山西": 680.41,
    "内蒙古": 537.81,
    "辽宁": 2010.82,
    "吉林": 718.58,
    "黑龙江": 1198.3,
    "上海": 1519.23,
    "江苏": 2998.16,
    "浙江": 1925.91,
    "安徽": 1037.14,
    "福建": 1114.2,
    "江西": 723.04,
    "山东": 2770.37,
    "河南": 1660.18,
    "湖北": 1325.83,
    "湖南": 1244.71,
    "广东": 3469.28,
    "广西": 871.7,
    "海南": 260.41,
    "重庆": 608.53,
    "四川": 1486.08,
    "贵州": 417.69,
    "云南": 783.27,
    "西藏": 37.42,
    "陕西": 678.2,
    "甘肃": 372.24,
    "青海": 109.68,
    "宁夏": 104.49,
    "新疆": 495.25,

};

//1995年数据
var d2 = {
    "北京": 1507.69,
    "天津": 931.97,
    "河北": 2849.52,
    "山西": 1076.03,
    "内蒙古": 857.06,
    "辽宁": 2793.37,
    "吉林": 1137.23,
    "黑龙江": 1991.4,
    "上海": 2499.43,
    "江苏": 5155.25,
    "浙江": 3557.55,
    "安徽": 1810.66,
    "福建": 2094.9,
    "江西": 1169.73,
    "山东": 4953.35,
    "河南": 2988.37,
    "湖北": 2109.38,
    "湖南": 2132.13,
    "广东": 5933.05,
    "广西": 1497.56,
    "海南": 363.25,
    "重庆": 1123.06,
    "四川": 2443.21,
    "贵州": 636.21,
    "云南": 1222.15,
    "西藏": 56.11,
    "陕西": 1036.85,
    "甘肃": 557.76,
    "青海": 167.8,
    "宁夏": 175.19,
    "新疆": 814.85,

};
//2000年数据
var d3 = {
    "北京": 3136.66,
    "天津": 1701.88,
    "河北": 5043.96,
    "山西": 1845.72,
    "内蒙古": 1539.12,
    "辽宁": 4669.06,
    "吉林": 1915.51,
    "黑龙江": 3151.4,
    "上海": 4771.17,
    "江苏": 8553.69,
    "浙江": 6141.03,
    "安徽": 2902.09,
    "福建": 3764.54,
    "江西": 2003.07,
    "山东": 8337.47,
    "河南": 5052.99,
    "湖北": 3545.39,
    "湖南": 3551.49,
    "广东": 10741.25,
    "广西": 2080.04,
    "海南": 526.82,
    "重庆": 1791,
    "四川": 3928.2,
    "贵州": 1029.92,
    "云南": 2011.19,
    "西藏": 117.8,
    "陕西": 1804,
    "甘肃": 1052.88,
    "青海": 263.68,
    "宁夏": 295.02,
    "新疆": 1363.56,

};
//2005年数据
var d4 = {
    "北京": 6969.52,
    "天津": 3905.64,
    "河北": 10012.11,
    "山西": 4230.53,
    "内蒙古": 3905.05,
    "辽宁": 8047.26,
    "吉林": 3620.27,
    "黑龙江": 5513.7,
    "上海": 9247.66,
    "江苏": 18598.69,
    "浙江": 13417.68,
    "安徽": 5350.17,
    "福建": 6554.69,
    "江西": 4056.76,
    "山东": 18366.87,
    "河南": 10587.42,
    "湖北": 6590.19,
    "湖南": 6596.1,
    "广东": 22557.38,
    "广西": 3984.1,
    "海南": 918.75,
    "重庆": 3467.42,
    "四川": 7385.1,
    "贵州": 2005.42,
    "云南": 3462.73,
    "西藏": 248.8,
    "陕西": 3933.72,
    "甘肃": 1933.98,
    "青海": 543.32,
    "宁夏": 612.61,
    "新疆": 2604.19,

};
//2010年数据
var d5 = {
    "北京": 14113.58,
    "天津": 9224.46,
    "河北": 20394.26,
    "山西": 9200.86,
    "内蒙古": 11672,
    "辽宁": 18457.27,
    "吉林": 8667.58,
    "黑龙江": 10368.6,
    "上海": 17165.98,
    "江苏": 41425.48,
    "浙江": 27722.31,
    "安徽": 12359.33,
    "福建": 14737.12,
    "江西": 9451.26,
    "山东": 39169.92,
    "河南": 23092.36,
    "湖北": 15967.61,
    "湖南": 16037.96,
    "广东": 46013.06,
    "广西": 9569.85,
    "海南": 2064.5,
    "重庆": 7295.58,
    "四川": 17185.48,
    "贵州": 4602.16,
    "云南": 7224.18,
    "西藏": 507.46,
    "陕西": 10123.48,
    "甘肃": 4120.75,
    "青海": 1350.43,
    "宁夏": 1689.65,
    "新疆": 5437.47,


};
//2015年数据
var d6 = {
    "北京": 23014.59,
    "天津": 16538.19,
    "河北": 29806.11,
    "山西": 12766.49,
    "内蒙古": 17831.51,
    "辽宁": 28669.02,
    "吉林": 14063.13,
    "黑龙江": 15083.67,
    "上海": 25123.45,
    "江苏": 70116.38,
    "浙江": 42886.49,
    "安徽": 22005.63,
    "福建": 25979.82,
    "江西": 16723.78,
    "山东": 63002.33,
    "河南": 37002.16,
    "湖北": 29550.19,
    "湖南": 28902.21,
    "广东": 72812.55,
    "广西": 16803.12,
    "海南": 3702.76,
    "重庆": 15717.27,
    "四川": 30053.1,
    "贵州": 10502.56,
    "云南": 13619.17,
    "西藏": 1026.39,
    "陕西": 18021.86,
    "甘肃": 6790.32,
    "青海": 2417.05,
    "宁夏": 2911.77,
    "新疆": 9324.8,

};
//2019年数据
var d7 = {
    "北京": 35371.28,
    "天津": 14104.28,
    "河北": 35104.52,
    "山西": 17026.68,
    "内蒙古": 17212.53,
    "辽宁": 24909.45,
    "吉林": 11726.82,
    "黑龙江": 13612.68,
    "上海": 38155.32,
    "江苏": 99631.52,
    "浙江": 62351.74,
    "安徽": 37113.98,
    "福建": 42395,
    "江西": 24757.5,
    "山东": 71067.53,
    "河南": 54259.2,
    "湖北": 45828.31,
    "湖南": 39752.12,
    "广东": 107671.07,
    "广西": 21237.14,
    "海南": 5308.93,
    "重庆": 23605.77,
    "四川": 46615.82,
    "贵州": 16769.34,
    "云南": 23223.75,
    "西藏": 1697.82,
    "陕西": 25793.17,
    "甘肃": 8718.3,
    "青海": 2965.95,
    "宁夏": 3748.48,
    "新疆": 13597.11,

};

var colors = [
    ["#1DE9B6", "#F46E36", "#04B9FF", "#5DBD32", "#FFC809", "#90EE90", "#BDA29A", "#6E7074", "#546570", "#C4CCD3"],
    ["#37A2DA", "#67E0E3", "#32C5E9", "#9FE6B8", "#FFDB5C", "#FF9F7F", "#FB7293", "#E062AE", "#E690D1", "#E7BCF3", "#9D96F5", "#8378EA", "#8378EA"],
    ["#DD6B66", "#759AA0", "#E69D87", "#8DC1A9", "#EA7E53", "#EEDD78", "#73A373", "#73B9BC", "#7289AB", "#91CA8C", "#F49F42"],
];
var colorIndex = 0;
$(function() {
    var year = ["1993", "1995", "2000", "2005", "2010", "2015", "2019"];
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
            "year": '1993',
            "name": key,
            "value": d1[key],
        });
        mapData[1].push({
            "year": '1995',
            "name": key,
            "value": d2[key],
        });
        mapData[2].push({
            "year": '2000',
            "name": key,
            "value": d3[key],
        });
        mapData[3].push({
            "year": '2005',
            "name": key,
            "value": d4[key],
        });
        mapData[4].push({
            "year": '2010',
            "name": key,
            "value": d5[key],
        });
        mapData[5].push({
            "year": '2015',
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
                title: [{
                        text: '1993~2019年中国各区域GDP变化',
                        subtext: '数据来源：国家统计局(单位:亿元)',
                        left: 'center',
                        top: '5%',
                        textStyle: {
                            color: '#fff',
                            fontSize: 18
                        }
                    },
                    {
                        id: 'statistic',
                        text: year[n] + "数据统计情况",
                        left: '75%',
                        top: '7%',
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
                            return val[2] / 1500;
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
                        barMaxWidth: 8,
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