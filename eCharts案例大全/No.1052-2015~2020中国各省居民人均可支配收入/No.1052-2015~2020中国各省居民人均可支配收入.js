var uploadedDataURL = "/asset/get/s/data-1636282594315-JLsviKcqm.xls";






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
};
//2015
var d1 = {
   '北京':48458,
'天津':	31291,
'河北':	18118,
'山西':	17854,
'内蒙古':22310,
'辽宁':	24576,
'吉林':	18684,
'黑龙江':18593,
'上海':	49867,
'江苏':	29539,
'浙江':	35537,
'安徽':	18363,
'福建':	25404,
'江西':	18437,
'山东':	22703,
'河南':	17125,
'湖北':	20026,
'湖南':	19317,
'广东':	27859,
'广西':	16873,
'海南':	18979,
'重庆':	20110,
'四川':	17221,
'贵州':	13697,
'云南':	15223,
'西藏':	12254,
'陕西':	17395,
'甘肃':	13467,
'青海':	15813,
'宁夏':	17329,
'新疆':	16859,

}
//2016
var d2 = {
    '北京':	52530,
'天津':	34074,
'河北':	19725,
'山西':	19049,
'内蒙古':24127,
'辽宁':	26040,
'吉林':	19967,
'黑龙江':19838,
'上海':	54305,
'江苏':	32070,
'浙江':	38529,
'安徽':	19998,
'福建':	27608,
'江西':	20110,
'山东':	24685,
'河南':	18443,
'湖北':	21787,
'湖南':	21115,
'广东':	30296,
'广西':	18305,
'海南':	20653,
'重庆':	22034,
'四川':	18808,
'贵州':	15121,
'云南':	16720,
'西藏':	13639,
'陕西':	18874,
'甘肃':	14670,
'青海':	17302,
'宁夏':	18832,
'新疆':	18355,

}
//2017
var d3 = {
    '北京':	57230,
'天津':	37022,
'河北':	21484,
'山西':	20420,
'内蒙古':26212,
'辽宁':	27835,
'吉林':	21368,
'黑龙江':21206,
'上海':	58988,
'江苏':	35024,
'浙江':	42046,
'安徽':	21863,
'福建':30048,
'江西':	22031,
'山东':	26930,
'河南':	20170,
'湖北':	23757,
'湖南':	23103,
'广东':	33003,
'广西':	19905,
'海南':	22553,
'重庆':	24153,
'四川':	20580,
'贵州':	16704,
'云南':	18348,
'西藏':	15457,
'陕西':	20635,
'甘肃':	16011,
'青海':	19001,
'宁夏':	20562,
'新疆':	19975,

}
//2018
var d4 = {
    '北京':	62361,
'天津':	39506,
'河北':	23446,
'山西':	21990,
'内蒙古':28376,
'辽宁':	29701,
'吉林':	22798,
'黑龙江':22726,
'上海':	64183,
'江苏':	38096,
'浙江':	45840,
'安徽':	23984,
'福建':	32644,
'江西':	24080,
'山东':	29205,
'河南':	21964,
'湖北':	25815,
'湖南':	25241,
'广东':	35810,
'广西':	21485,
'海南':	24579,
'重庆':	26386,
'四川':	22461,
'贵州':	18430,
'云南':	20084,
'西藏':	17286,
'陕西':	22528,
'甘肃':	17488,
'青海':	20757,
'宁夏':	22400,
'新疆':	21500,

}
//2019
var d5 = {
    '北京':67756,
'天津':	42404,
'河北':	25665,
'山西':	23828,
'内蒙古':30555,
'辽宁':	31820,
'吉林':	24563,
'黑龙江':24254,
'上海': 69442,
'江苏':	41400,
'浙江':	49899,
'安徽':	26415,
'福建':	35616,
'江西':	26262,
'山东':	31597,
'河南':	23903,
'湖北':	28319,
'湖南':	27680,
'广东':	39014,
'广西':	23328,
'海南':	26679,
'重庆':	28920,
'四川':	24703,
'贵州':	20397,
'云南':	22082,
'西藏':	19501,
'陕西':	24666,
'甘肃':	19139,
'青海':	22618,
'宁夏':	24412,
'新疆': 23103,

}
//2020
var d6 = {
  '北京':	69434,
'天津':	43854,
'河北':	27136,
'山西':	25214,
'内蒙古':31497,
'辽宁':	32738,
'吉林':	25751,
'黑龙江':24902,
'上海':	72232,
'江苏':	43390,
'浙江':	52397,
'安徽':	28103,
'福建':	37202,
'江西':	28017,
'山东':	32886,
'河南':	24810,
'湖北':	27881,
'湖南':	29380,
'广东':	41029,
'广西':	24562,
'海南':	27904,
'重庆':	30824,
'四川': 26522,
'贵州': 21795,
'云南':	23295,
'西藏':	21744,
'陕西':	26226,
'甘肃':	20335,
'青海':	24037,
'宁夏':	25735,
'新疆':	23845,

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
                    text: '2015~2020中国各省居民人均可支配收入',
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
                    max: 80000,
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
