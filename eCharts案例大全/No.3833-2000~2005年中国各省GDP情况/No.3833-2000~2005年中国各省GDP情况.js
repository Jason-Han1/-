//数据来源：国家统计局，本数据不包含香港，澳门，台湾地区
var uploadedDataURL = "/asset/get/s/data-1528971808162-BkOXf61WX.json";

var geoCoordMap = {
    '北京': [116.40, 40.40],
    '天津': [117.04, 39.52],
    '河北': [115.21, 38.44],
    '山西': [111.95, 37.65],
    '内蒙古': [112.17, 42.81],
    '辽宁': [123.42, 41.29],
    '吉林': [126.32, 43.38],
    '黑龙江': [128.34, 47.05],
    '上海': [121.46, 31.28],
    '江苏': [120.26, 32.54],
    '浙江': [120.15, 29.28],
    '安徽': [117.28, 31.86],
    '福建': [118.31, 26.07],
    '江西': [115.89, 27.97],
    '山东': [118.01, 36.37],
    '河南': [113.46, 34.25],
    '湖北': [112.29, 30.98],
    '湖南': [112.08, 27.79],
    '广东': [113.98, 22.82],
    '广西': [108.67, 23.68],
    '海南': [110.03, 19.33],
    '重庆': [107.51, 29.63],
    '四川': [103.36, 30.65],
    '贵州': [106.91, 26.67],
    '云南': [101.71, 24.84],
    '西藏': [89.13, 30.66],
    '陕西': [108.94, 34.46],
    '甘肃': [103.82, 36.05],
    '青海': [97.07, 35.62],
    '宁夏': [106.27, 36.76],
    '新疆': [86.61, 40.79],
}

//2000年数据
var d1 = {
    '北京': 3161.66,
    '天津': 1701.88,
    '河北': 5043.96,
    '山西': 1845.72,
    '内蒙古': 1539.12,
    '辽宁': 4669.06,
    '吉林': 1951.51,
    '黑龙江': 3151.4,
    '上海': 4771.17,
    '江苏': 8553.69,
    '浙江': 6141.03,
    '安徽': 2902.09,
    '福建': 3764.54,
    '江西': 2003.07,
    '山东': 8337.47,
    '河南': 5052.99,
    '湖北': 3545.39,
    '湖南': 3551.49,
    '广东': 10741.25,
    '广西': 2080.04,
    '海南': 526.82,
    '重庆': 1791,
    '四川': 3928.2,
    '贵州': 1029.92,
    '云南': 2011.19,
    '西藏': 117.8,
    '陕西': 1804,
    '甘肃': 1052.88,
    '青海': 263.68,
    '宁夏': 295.02,
    '新疆': 1363.56,
};
//2001年数据
var d2 = {
    '北京': 3707.96,
    '天津': 1919.09,
    '河北': 5516.76,
    '山西': 2029.53,
    '内蒙古': 1713.81,
    '辽宁': 5033.08,
    '吉林': 2120.35,
    '黑龙江': 3390.1,
    '上海': 5210.12,
    '江苏': 9456.84,
    '浙江': 6898.34,
    '安徽': 3246.71,
    '福建': 4072.85,
    '江西': 2175.68,
    '山东': 9195.04,
    '河南': 5533.01,
    '湖北': 3880.53,
    '湖南': 3831.9,
    '广东': 12039.25,
    '广西': 2279.34,
    '海南': 579.17,
    '重庆': 1976.86,
    '四川': 4293.49,
    '贵州': 1133.27,
    '云南': 2138.31,
    '西藏': 139.16,
    '陕西': 2010.62,
    '甘肃': 1125.37,
    '青海': 300.13,
    '宁夏': 337.44,
    '新疆': 1491.6,
};
//2002年数据
var d3 = {
    '北京': 4315,
    '天津': 2150.76,
    '河北': 6018.28,
    '山西': 2324.8,
    '内蒙古': 1940.94,
    '辽宁': 5458.22,
    '吉林': 2348.54,
    '黑龙江': 3637.2,
    '上海': 5741.03,
    '江苏': 10606.85,
    '浙江': 8003.67,
    '安徽': 3519.72,
    '福建': 4467.55,
    '江西': 2450.48,
    '山东': 10275.5,
    '河南': 6035.48,
    '湖北': 4212.82,
    '湖南': 4151.54,
    '广东': 13502.42,
    '广西': 2523.73,
    '海南': 642.73,
    '重庆': 2232.86,
    '四川': 4725.01,
    '贵州': 1243.43,
    '云南': 2312.82,
    '西藏': 162.04,
    '陕西': 2253.39,
    '甘肃': 1232.03,
    '青海': 340.65,
    '宁夏': 377.16,
    '新疆': 1612.65,
};
//2003年数据
var d4 = {
    '北京': 5007.21,
    '天津': 2578.03,
    '河北': 6921.29,
    '山西': 2855.23,
    '内蒙古': 2388.38,
    '辽宁': 6002.54,
    '吉林': 2662.08,
    '黑龙江': 4057.4,
    '上海': 6694.23,
    '江苏': 12442.87,
    '浙江': 9705.02,
    '安徽': 3923.11,
    '福建': 4983.67,
    '江西': 2807.41,
    '山东': 12078.15,
    '河南': 6867.7,
    '湖北': 4757.45,
    '湖南': 4659.99,
    '广东': 15844.64,
    '广西': 2821.11,
    '海南': 713.96,
    '重庆': 2555.72,
    '四川': 5333.09,
    '贵州': 1426.34,
    '云南': 2556.02,
    '西藏': 185.09,
    '陕西': 2587.72,
    '甘肃': 1399.83,
    '青海': 390.2,
    '宁夏': 445.36,
    '新疆': 1886.35,
};
//2004年数据
var d5 = {
    '北京': 6033.21,
    '天津': 3110.97,
    '河北': 8477.63,
    '山西': 3571.37,
    '内蒙古': 3041.07,
    '辽宁': 6672,
    '吉林': 3122.01,
    '黑龙江': 4750.6,
    '上海': 8072.83,
    '江苏': 15003.6,
    '浙江': 11648.7,
    '安徽': 4759.3,
    '福建': 5763.35,
    '江西': 3456.7,
    '山东': 15021.84,
    '河南': 8553.79,
    '湖北': 5633.24,
    '湖南': 5641.94,
    '广东': 18864.62,
    '广西': 3433.5,
    '海南': 819.66,
    '重庆': 3034.58,
    '四川': 6379.63,
    '贵州': 1677.8,
    '云南': 3081.91,
    '西藏': 220.34,
    '陕西': 3175.58,
    '甘肃': 1688.49,
    '青海': 466.1,
    '宁夏': 537.11,
    '新疆': 2209.09,

};
//2005年数据
var d6 = {
    '北京': 6969.52,
    '天津': 3905.64,
    '河北': 10012.11,
    '山西': 4230.53,
    '内蒙古': 3905.03,
    '辽宁': 8047.26,
    '吉林': 3620.27,
    '黑龙江': 5513.7,
    '上海': 9247.66,
    '江苏': 18598.69,
    '浙江': 13417.68,
    '安徽': 5350.17,
    '福建': 6554.69,
    '江西': 4056.76,
    '山东': 18366.87,
    '河南': 10587.42,
    '湖北': 6590.19,
    '湖南': 6596.1,
    '广东': 22557.37,
    '广西': 3984.1,
    '海南': 918.75,
    '重庆': 3467.72,
    '四川': 7385.1,
    '贵州': 2005.42,
    '云南': 3462.73,
    '西藏': 248.8,
    '陕西': 3933.72,
    '甘肃': 1933.98,
    '青海': 543.32,
    '宁夏': 612.61,
    '新疆': 2604.19,
};


var colors = [
    ["#1DE9B6", "#fde8cd", "#04B9FF", "#5DBD32", "#FFC809", "#FB95D5", "#BDA29A", "#6E7074", "#E690D1", "#C4CCD3", "#1DE9B6", "#04B9FF", "#FFC809", "#FB95D5", "#C4CCD3", "#1DE9B6", "#04B9FF", "#FFC809", "#FB95D5"],
    ["#37A2DA", "#fde8cd", "#32C5E9", "#5DBD32", "#FFDB5C", "#FF9F7F", "#FB7293", "#E062AE", "#546570", "#E7BCF3", "#9D96F5", "#8378EA", "#8378EA", "#37A2DA", "#fde8cd", "#32C5E9", "#FFDB5C", "#FF9F7F", "#E7BCF3", "#9D96F5", "#8378EA"],
    ["#DD6B66", "#fde8cd", "#E69D87", "#8DC1A9", "#EA7E53", "#EEDD78", "#73A373", "#73B9BC", "#7289AB", "#91CA8C", "#F49F42", "#73A373", "#73B9BC", "#7289AB", "#91CA8C", "#F49F42", "#DD6B66", "#E69D87", "#EA7E53", "#EEDD78"],
];
var colorIndex = 2;
$(function() {
    var year = ["2000", "2001", "2002", "2003", "2004", "2005"];
    var mapData = [
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
            "year": '2000',
            "name": key,
            "value": d1[key],
        });
        mapData[1].push({
            "year": '2001',
            "name": key,
            "value": d2[key],
        });
        mapData[2].push({
            "year": '2002',
            "name": key,
            "value": d3[key],
        });
        mapData[3].push({
            "year": '2003',
            "name": key,
            "value": d4[key],
        });
        mapData[4].push({
            "year": '2004',
            "name": key,
            "value": d5[key],
        });
        mapData[5].push({
            "year": '2005',
            "name": key,
            "value": d6[key],
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
                left: '5%',
                right: '15%',
                bottom: '1%',
                width: '65%',
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
                    right: '2%',
                    top: '15%',
                    bottom: '5%',
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
                    zoom: 0.9,
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
                            shadowOffsetX: -2,
                            shadowOffsetY: 2,
                            shadowBlur: 10
                        },
                    }
                },
            },
            options: []

        };
        for (var n = 0; n < year.length; n++) {
            optionXyMap01.options.push({
                backgroundColor: '#013954',
                title: {
                    text: '2000~2005年中国各省GDP情况',
                    left: '23%',
                    top: '7%',
                    textStyle: {
                        color: '#fff',
                        fontSize: 20
                    }
                },
                xAxis: {
                    type: 'value',
                    scale: true,
                    position: 'top',
                    min: 0,
                    max: 110000,
                    boundaryGap: false,
                    splitNumber: 4,
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
                    {
                        name: 'Top 5',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        symbol: 'pin',
                        symbolSize: [50, 50],
                        label: {
                            normal: {
                                show: true,
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 9,
                                },
                                formatter(value) {
                                    return value.data.value[2]
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#D8BC37', //标志颜色
                            }
                        },
                        data: convertData(mapData[n].sort(function(a, b) {
                            return b.value - a.value;
                        }).slice(0, 35)),
                        showEffectOn: 'render',
                        rippleEffect: {
                            brushType: 'stroke'
                        },
                        hoverAnimation: true,
                        zlevel: 1
                    },
                    //柱状图
                    {
                        zlevel: 1.5,
                        type: 'bar',
                        barMaxWidth: 10,
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