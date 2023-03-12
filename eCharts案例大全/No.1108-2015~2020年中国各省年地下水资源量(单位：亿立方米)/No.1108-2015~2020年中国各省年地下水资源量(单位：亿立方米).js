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
};
//2015年数据
var d1 = {
    '北京': 16.0,
    '天津': 3.7,
    '河北': 89.3,
    '山西': 97.3,
    '内蒙古': 236.3,
    '辽宁': 82.3,
    '吉林': 120.2,
    '黑龙江': 295.4,
    '上海': 10.0,
    '江苏': 118.9,
    '浙江': 231.8,
    '安徽': 178.9,
    '福建': 330.5,
    '江西': 397.2,
    '山东': 116.9,
    '河南': 166.8,
    '湖北': 282.0,
    '湖南': 434.1,
    '广东': 420.5,
    '广西': 403.0,
    '海南': 96.7,
    '重庆': 121.8,
    '四川': 606.2,
    '贵州': 294.4,
    '云南': 558.4,
    '西藏': 985.1,
    '陕西': 124.1,
    '甘肃': 112.6,
    '青海': 349.4,
    '宁夏': 21.3,
    '新疆': 443.9,
};
//2016年数据
var d2 = {
    '北京': 20.6,
    '天津': 4.9,
    '河北': 113.6,
    '山西': 86.4,
    '内蒙古': 224.6,
    '辽宁': 83.2,
    '吉林': 127.4,
    '黑龙江': 283.0,
    '上海': 11.7,
    '江苏': 142.4,
    '浙江': 269.8,
    '安徽': 193.7,
    '福建': 332.3,
    '江西': 465.0,
    '山东': 133.1,
    '河南': 173.1,
    '湖北': 279.6,
    '湖南': 432.4,
    '广东': 461.4,
    '广西': 467.3,
    '海南': 50.6,
    '重庆': 103.3,
    '四川': 584.0,
    '贵州': 282.2,
    '云南': 607.5,
    '西藏': 803.0,
    '陕西': 120.6,
    '甘肃': 100.9,
    '青海': 273.6,
    '宁夏': 20.9,
    '新疆': 544.9,
};
//2017年数据
var d3 = {
    '北京': 24.2,
    '天津': 6.1,
    '河北': 133.7,
    '山西': 104.9,
    '内蒙古': 248.2,
    '辽宁': 120.9,
    '吉林': 154.7,
    '黑龙江': 285.9,
    '上海': 11.3,
    '江苏': 164.0,
    '浙江': 255.5,
    '安徽': 219.3,
    '福建': 450.7,
    '江西': 501.9,
    '山东': 164.8,
    '河南': 190.2,
    '湖北': 313.6,
    '湖南': 475.4,
    '广东': 570.0,
    '广西': 529.2,
    '海南': 118.3,
    '重庆': 112.3,
    '四川': 593.3,
    '贵州': 251.3,
    '云南': 699.7,
    '西藏': 1028.0,
    '陕西': 107.4,
    '甘肃': 108.7,
    '青海': 282.5,
    '宁夏': 18.6,
    '新疆': 610.4,
};
//2018年数据
var d4 = {
    '北京': 20.4,
    '天津': 5.5,
    '河北': 116.3,
    '山西': 104.1,
    '内蒙古': 207.3,
    '辽宁': 86.6,
    '吉林': 133.3,
    '黑龙江': 273.2,
    '上海': 9.2,
    '江苏': 114.5,
    '浙江': 204.3,
    '安徽': 201.0,
    '福建': 287.5,
    '江西': 379.5,
    '山东': 151.1,
    '河南': 206.5,
    '湖北': 319.0,
    '湖南': 436.8,
    '广东': 440.7,
    '广西': 446.6,
    '海南': 96.8,
    '重庆': 116.1,
    '四川': 607.5,
    '贵州': 260.8,
    '云南': 762.0,
    '西藏': 1086.0,
    '陕西': 141.6,
    '甘肃': 133.4,
    '青海': 355.7,
    '宁夏': 19.3,
    '新疆': 587.0,
};
//2019年数据
var d5 = {
    '北京': 28.9,
    '天津': 7.3,
    '河北': 124.4,
    '山西': 100.3,
    '内蒙古': 253.6,
    '辽宁': 79.8,
    '吉林': 137.9,
    '黑龙江': 347.5,
    '上海': 9.6,
    '江苏': 119.7,
    '浙江': 213.9,
    '安徽': 203.7,
    '福建': 245.7,
    '江西': 298.5,
    '山东': 196.7,
    '河南': 188.0,
    '湖北': 257.7,
    '湖南': 333.5,
    '广东': 460.6,
    '广西': 440.9,
    '海南': 98.0,
    '重庆': 104.0,
    '四川': 635.1,
    '贵州': 252.7,
    '云南': 772.8,
    '西藏': 1105.7,
    '陕西': 125.0,
    '甘肃': 165.6,
    '青海': 424.2,
    '宁夏': 18.1,
    '新疆': 497.0,
};
//2020年数据
var d6 = {
    '北京': 24.7,
    '天津': 4.2,
    '河北': 97.8,
    '山西': 82.5,
    '内蒙古': 233.8,
    '辽宁': 106.8,
    '吉林': 156.1,
    '黑龙江': 413.6,
    '上海': 10.4,
    '江苏': 77.5,
    '浙江': 253.7,
    '安徽': 144.8,
    '福建': 339.0,
    '江西': 482.4,
    '山东': 128.4,
    '河南': 119.1,
    '湖北': 217.3,
    '湖南': 472.3,
    '广东': 508.2,
    '广西': 445.0,
    '海南': 73.0,
    '重庆': 98.5,
    '四川': 616.2,
    '贵州': 267.0,
    '云南': 554.6,
    '西藏': 1037.0,
    '陕西': 139.4,
    '甘肃': 148.7,
    '青海': 412.7,
    '宁夏': 18.4,
    '新疆': 508.5,
};

var colors = [
    ["#1DE9B6", "#FFFF00", "#04B9FF", "#5DBD32", "#FFC809", "#FB95D5", "#BDA29A", "#6E7074", "#E690D1", "#C4CCD3", "#1DE9B6", "#04B9FF", "#FFC809", "#FB95D5", "#C4CCD3", "#1DE9B6", "#04B9FF", "#FFC809", "#FB95D5"],
    ["#37A2DA", "#FFFF00", "#32C5E9", "#5DBD32", "#FFDB5C", "#FF9F7F", "#FB7293", "#E062AE", "#546570", "#E7BCF3", "#9D96F5", "#8378EA", "#8378EA", "#37A2DA", "#fde8cd", "#32C5E9", "#FFDB5C", "#FF9F7F", "#E7BCF3", "#9D96F5", "#8378EA"],
    ["#DD6B66", "#FFFF00", "#E69D87", "#8DC1A9", "#EA7E53", "#EEDD78", "#73A373", "#73B9BC", "#7289AB", "#91CA8C", "#F49F42", "#73A373", "#73B9BC", "#7289AB", "#91CA8C", "#F49F42", "#DD6B66", "#E69D87", "#EA7E53", "#EEDD78"],
];
var colorIndex = 2;
$(function() {
    var year = ["2015", "2016", "2017", "2018", "2019", "2020"];
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
            "year": '2015',
            "name": key,
            "value": d1[key],
        });
        mapData[1].push({
            "year": '2016',
            "name": key,
            "value": d2[key],
        });
        mapData[2].push({
            "year": '2017',
            "name": key,
            "value": d3[key],
        });
        mapData[3].push({
            "year": '2018',
            "name": key,
            "value": d4[key],
        });
        mapData[4].push({
            "year": '2019',
            "name": key,
            "value": d5[key],
        });
        mapData[5].push({
            "year": '2020',
            "name": key,
            "value": d6[key],
        });
    }

    for (var i = 0; i < mapData.length; i++) {
        mapData[i].sort(function sortNumber(a, b) {
            return a.value - b.value;
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
                    text: '2015~2020年中国各省年地下水资源量(单位：亿立方米)',
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
                    max: 1200,
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
                                    return value.data.value[2];
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
            });
        }
        myChart.setOption(optionXyMap01);
    });
});