//数据来源：https://data.tpdc.ac.cn/zh-hans/data/fa8426c0-d3f0-4615-8e78-0465a0957891/?q=%E4%B8%AD%E5%9B%BD%E6%B9%96%E6%B3%8A

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
//1960
var d1 = {
       '北京': 1.17 ,
       '天津' : 0 ,
       '河北' : 304.17 ,
       '山西' : 43.10 ,
       '内蒙古' : 5597.58 ,
       '辽宁' : 1.91 ,
       '吉林' : 631.26 ,
       '黑龙江' : 2421.19 ,
       '上海' : 117.07 ,
       '江苏' : 7125.19 ,
       '浙江' : 2417.33 ,
       '安徽': 4206.81 ,
       '福建': 1.71 ,
       '江西' : 1639.01 ,
       '山东' : 1274.69 ,
       '河南' : 10.19 ,
       '湖北' : 2740.18 ,
       '湖南' : 1836.05 ,
       '广东' : 7.73 ,
       '广西' : 3.42 ,
       '海南' : 0 ,
       '重庆' : 0,
       '四川' : 134.96 ,
       '贵州' : 47.93 ,
       '云南' : 1073.99 ,
       '西藏' : 24629.62 ,
       '陕西' : 64.05 ,
       '甘肃' : 118.83 ,
       '青海' : 13139.75 ,
       '宁夏' : 6.62 ,
       '新疆' : 5262.43 ,


}
//1970
var d2 = {
      '北京' : 1.68 ,
      '天津' : 0 ,
      '河北' : 340.80 ,
      '山西' : 30.80 ,
      '内蒙古' : 4767.41 ,
      '辽宁' : 7.26 ,
      '吉林' : 926.46 ,
      '黑龙江' : 1940.25 ,
      '上海' : 121.77 ,
      '江苏' : 6437.35 ,
      '浙江' : 2490.82,
      '安徽' : 3561.96 ,
      '福建' : 1.59 ,
      '江西' : 2359.89 ,
      '山东' : 503.91 ,
      '河南' : 8.62 ,
      '湖北' : 2590.23 ,
      '湖南' : 1315.23 ,
      '广东' : 68.85 ,
      '广西' : 18.52 ,
      '海南' : 0 ,
      '重庆' : 0,
      '四川' : 120.61 ,
      '贵州' : 29.25 ,
      '云南' : 1107.51,
      '西藏' : 24664.97 ,
      '陕西' : 59.26,
      '甘肃' : 118.11,
      '青海' : 13138.13 ,
      '宁夏' : 16.09 ,
      '新疆' : 5305.25 ,

}
//1990
var d3 = {
      '北京' : 1.53,
      '天津' : 0 ,
      '河北' : 244.91 ,
      '山西' : 103.91 ,
      '内蒙古' : 4749.11,
      '辽宁' : 25.62 ,
      '吉林' : 1360.84 ,
      '黑龙江' : 2664.38 ,
      '上海' : 106.62 ,
      '江苏' : 5826.03 ,
      '浙江' : 2383.22 ,
      '安徽' : 4114.95 ,
      '福建' : 0 ,
      '江西' : 2895.10 ,
      '山东' : 556.44 ,
      '河南' : 7.11 ,
      '湖北' : 2433.08 ,
      '湖南' : 2021.52 ,
      '广东' : 4.83 ,
      '广西' : 0 ,
      '海南' : 0 ,
  '重庆' : 2.33 ,
      '四川' : 142.71 ,
      '贵州' : 18.44 ,
      '云南' : 1071.90 ,
      '西藏' : 24307.39 ,
      '陕西' : 60.46 ,
      '甘肃' : 106.51 ,
      '青海' : 12834.04 ,
      '宁夏' : 45.96 , 
      '新疆' : 5319.99 ,

}
//1995
var d4 = {
      '北京' : 3.40 ,
      '天津' : 0 ,
      '河北' : 184.21 ,
      '山西' : 103.49 ,
      '内蒙古' : 5537.43 ,
      '辽宁' : 24.13 ,
      '吉林' : 1664.08 ,
      '黑龙江' : 2705.00 ,
      '上海' : 97.44 ,
      '江苏' : 5622.05 ,
      '浙江' : 2367.05 ,
      '安徽' : 3952.49 ,
      '福建' : 0 ,
      '江西' : 2823.66 ,
      '山东' : 524.20 ,
      '河南' : 0 ,
      '湖北' : 2774.31 ,
      '湖南' : 1749.15 ,
      '广东' : 4.90 ,
      '广西' : 3.78 ,
      '海南' : 0 ,
      '重庆' : 0 , 
      '四川' : 141.20 ,
      '贵州' : 72.20 ,
      '云南' : 1150.08 ,
      '西藏' : 23607.57 ,
      '陕西' : 79.73 ,
      '甘肃' : 169.93 ,
      '青海' : 12742.90 ,
      '宁夏' : 12.97 ,
      '新疆' : 5417.93 ,

}
//2000
var d5 = {
      '北京' : 3.50 ,
      '天津' : 1.11 ,
      '河北' : 189.20 ,
      '山西' : 14.46 ,
      '内蒙古' : 4978.22 ,
      '辽宁' : 49.25 ,
      '吉林' : 1174.74 ,
      '黑龙江' : 2755.41 ,
      '上海' : 95.91 ,
      '江苏' : 5716.19 ,
      '浙江' : 2360.20 ,
      '安徽' : 4106.59 ,
      '福建' : 0 ,
      '江西' : 3369.67 ,
      '山东' : 339.93 ,
      '河南' : 4.83 ,
      '湖北' : 2302.14 ,
      '湖南' : 2968.76 ,
      '广东' : 12.92 ,
      '广西' : 6.28 ,
      '海南' : 0 ,
      '重庆' : 0 , 
      '四川' : 139.12 ,
      '贵州' : 20.38 ,
      '云南' : 1104.58 ,
      '西藏' : 26588.05 ,
      '陕西' : 47.27 ,
      '甘肃' : 123.64 ,
      '青海' : 12476.55 ,
      '宁夏' : 12.03 ,
      '新疆' : 6088.25 ,

}
//2005
var d6 = {
      '北京' : 1.61 ,
      '天津' : 0.63 ,
      '河北' : 163.06 ,
      '山西' : 20.40 ,
      '内蒙古' : 4092.26 ,
      '辽宁' : 47.89 ,
      '吉林' : 1374.94 ,
      '黑龙江' : 3038.07 ,
      '上海' : 94.31 ,
      '江苏' : 6622.96 ,
      '浙江' : 2388.091 ,
      '安徽' : 3902.86 ,
      '福建' : 0 ,
      '江西' : 3250.38 ,
      '山东' : 962.72 ,
      '河南' : 6.11 ,
      '湖北' : 2265.56,
      '湖南' : 2494.98,
      '广东' : 5.71 ,
      '广西' : 3.17 ,
      '海南' : 0 ,
      '重庆' : 0 ,
      '四川' : 135.35 ,
      '贵州' : 20.38 ,
      '云南' : 1078.76 ,
      '西藏' : 28584.42,
      '陕西' : 43.23,
      '甘肃' : 133.89 ,
      '青海' : 13096.72 ,
      '宁夏' : 27.16 ,
      '新疆' : 6402.60 ,

};

////////////////////////////////////////////////////////////
//2010
var  d7 ={
      '北京' : 1.15 ,
      '天津' : 0.66,
      '河北' : 201.77 ,
      '山西' : 92.81 ,
      '内蒙古' : 3812.35 ,
      '辽宁' : 15.59 ,
      '吉林' : 857.63 ,
      '黑龙江' : 2596.99,
      '上海' : 98.49 ,
      '江苏' : 6342.45,
      '浙江' : 2400.94,
      '安徽' : 3821.85,
      '福建' : 0 ,
      '江西' : 2935.60 ,
      '山东' : 769.33,
      '河南' : 4.72,
      '湖北' : 2312.16 ,
      '湖南' : 2078.37 ,
      '广东' : 72.18 ,
      '广西' : 19.06 ,
      '海南' : 0 ,
      '重庆' : 0 , 
      '四川' : 137.78,
      '贵州' : 18.77 ,
      '云南' : 1128.20,
      '西藏' : 29643.77,
      '陕西' : 41.361 ,
      '甘肃' : 141.57 ,
      '青海' : 14175.88 ,
      '宁夏' : 38.47,
      '新疆' : 6279.58 ,
}
//2015
var  d8 ={
      '北京' : 45.27 ,
      '天津' : 1.79,
      '河北' : 196.35,
      '山西' : 49.28 ,
      '内蒙古' : 4321.71 ,
      '辽宁' : 135.92 ,
      '吉林' : 1238.47 ,
      '黑龙江' : 2925.68 ,
      '上海' : 95.95 ,
      '江苏' : 5903.15 ,
      '浙江' : 2370.00 ,
      '安徽' : 3902.64 ,
      '福建' : 2.78 ,
      '江西' : 2616.19,
      '山东' : 451.18 ,
      '河南' : 3.72 ,
      '湖北' : 2341.55,
      '湖南' : 1552.50 ,
      '广东' : 21.45 ,
      '广西' : 0 ,
      '海南' : 5.04 ,
      '重庆' : 2.34 , 
      '四川' : 143.77 ,
      '贵州' : 61.44 ,
      '云南' : 1058.10 ,
      '西藏' : 29718.71 ,
      '陕西' : 38.78 ,
      '甘肃' : 160.59,
      '青海' : 13956.08,
      '宁夏' : 66.20,
      '新疆' : 6695.52 ,
}

//2020
var  d9 ={
      '北京' : 224.02 ,
      '天津' : 1.70 ,
      '河北' : 209.21 ,
      '山西' : 116.75 ,
      '内蒙古' : 4263.72 ,
      '辽宁' : 150.65 ,
      '吉林' : 1010.25 ,
      '黑龙江' : 2808.70 ,
      '上海' : 104.00,
      '江苏' : 5983.86 ,
      '浙江' : 2433.42 ,
      '安徽' : 7882.23 ,
      '福建' : 0 ,
      '江西' : 4023.87 ,
      '山东' : 503.28 ,
      '河南' : 128.13 ,
      '湖北' : 6527.24 ,
      '湖南' : 2456.84 ,
      '广东' : 14.65 ,
      '广西' : 21.19 ,
      '海南' : 0 ,
      '重庆' : 1.97 ,
      '四川' : 141.82 ,
      '贵州' : 99.39,
      '云南' : 1123.98 ,
      '西藏' : 32507.69 ,
      '陕西' : 90.11 ,
      '甘肃' : 348.77 ,
      '青海' : 15208.77 ,
      '宁夏' : 87.62 ,
      '新疆' : 7836.52 ,
}






var colors = [
    ["#1DE9C9", "#FFFF00", "#04B9FF", "#5DBD32", "#FFC809", "#FB95D5", "#BDA29A", "#6E7074", "#E690D1", "#C4CCD3", "#1DE9B6", "#04B9FF", "#FFC809", "#FB95D5", "#C4CCD3", "#1DE9B6", "#04B9FF", "#FFC809", "#FB95D5"],
    ["#37A2DA", "#FFFF00", "#32C5E9", "#5DBD32", "#FFDB5C", "#FF9F7F", "#FB7293", "#E062AE", "#546570", "#E7BCF3", "#9D96F5", "#8378EA", "#8378EA", "#37A2DA", "#fde8cd", "#32C5E9", "#FFDB5C", "#FF9F7F", "#E7BCF3", "#9D96F5", "#8378EA"],
    ["#DD6B66", "#FFFF00", "#E69D87", "#8DC1A9", "#EA7E53", "#EEDD78", "#73A373", "#73B9BC", "#7289AB", "#91CA8C", "#F49F42", "#73A373", "#73B9BC", "#7289AB", "#91CA8C", "#F49F42", "#DD6B66", "#E69D87", "#EA7E53", "#EEDD78"],
];
var colorIndex = 1;
$(function() {
    var year = ["1960", "1970", "1990", "1995", "2000", "2005","2010","2015","2020"];

    var mapData = [
        [],
        [],
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
            "year": '1960',
            "name": key,
            "value": d1[key],
        });
        mapData[1].push({
            "year": '1970',
            "name": key,
            "value": d2[key],
        });
        mapData[2].push({
            "year": '1990',
            "name": key,
            "value": d3[key],
        });
        mapData[3].push({
            "year": '1995',
            "name": key,
            "value": d4[key],
        });
        mapData[4].push({
            "year": '2000',
            "name": key,
            "value": d5[key],
        });
        mapData[5].push({
            "year": '2005',
            "name": key,
            "value": d6[key],
        });
        mapData[6].push({
            "year": '2010',
            "name": key,
            "value": d7[key],
        });
        mapData[7].push({
            "year": '2015',
            "name": key,
            "value": d8[key],
        });
        mapData[8].push({
            "year": '2020',
            "name": key,
            "value": d9[key],
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
                bottom: '13%',
                width: '65%',
                //  height: null,
                label: {
                    normal: {
                        textStyle: {
                            color: '#777'
                        }
                    },
                    emphasis: {
                        textStyle: {
                            color: '#777'
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
                    right: '3%',
                    top: '15%',
                    bottom: '10%',
                    width: '20%'
                },
                tooltip: {
                    trigger: 'axis', // hover触发器
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                        shadowStyle: {
                            color: 'rgba(50,150,150,0.1)' //hover颜色
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
                            borderColor: 'rgba(17, 235, 248, 1)',
                            borderWidth: 1,
                            areaColor: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.5,
                                r: 0.8,
                                colorStops: [{
                                    offset: 0,
                                    color: 'rgba(147, 25, 28, 0)' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            shadowColor: 'rgba(18, 27, 28, 1)',
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
                backgroundColor: '#013154',
                title:[ {
                    text: '1960-2020年中国各省湖泊面积变化',
                    left: '23%',
                    top: '7%',
                    textStyle: {
                        color: '#fff',
                        fontSize: 20
                    }
                },
                 {
                    id: 'statistic',
                    text: year[n] + "年各省湖泊面积",
                    left: '75%',
                    top: '8%',
                    textStyle: {
                    color: '#fff',
                    fontSize: 20
                        }
                    }
                ],
                xAxis: {
                    type: 'value',
                    scale: true,
                    position: 'top',
                    min: 0,
                    max: 30000,
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
                                areaColor: '#2B91C7',
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
                        zlevel: 3.5,
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
