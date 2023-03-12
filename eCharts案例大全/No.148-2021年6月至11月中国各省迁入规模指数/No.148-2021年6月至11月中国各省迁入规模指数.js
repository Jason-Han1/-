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

//2021年6月数据
var d1 = {
  "北京":9.05052204,
"天津":3.92028768,
"河北":10.73002572,
"山西":3.34639728,
"内蒙古":2.91309696,
"辽宁":2.69073144,
"吉林":1.6808634,
"黑龙江":1.61795772,
"上海":7.93951524,
"江苏":12.2640264,
"浙江":8.44190748,
"安徽":6.53845068,
"福建":2.26123812,
"江西":3.45522672,
"山东":7.14317184,
"河南":7.14545496,
"湖北":3.95608968,
"湖南":4.08370572,
"广东":4.67931708,
"广西":2.3671494,
"海南":0.69278544,
"重庆":3.6254142,
"四川":5.13962172,
"贵州":2.77389792,
"云南":2.15026272,
"西藏":0.23261256,
"陕西":4.2088464,
"甘肃":2.17053216,
"青海":0.77125068,
"宁夏":0.96929028,
"新疆":0.74181204,

};

//2021年7月数据
var d2 = {
  "北京":9.741935 ,
"天津":3.999605,
"河北":11.057467,
"山西":3.587433,
"内蒙古":3.557756,
"辽宁":3.443353,
"吉林":2.009240,
"黑龙江":2.044932,
"上海":7.969637,
"江苏":11.824112,
"浙江":9.281147,
"安徽":6.608140,
"福建":2.851768,
"江西":4.022693,
"山东":7.852845,
"河南":7.310172,
"湖北":4.691720,
"湖南":5.268870,
"广东":8.546639,
"广西":3.481855,
"海南":0.849754,
"重庆":4.117990,
"四川":5.766991,
"贵州":3.565835,
"云南":2.424167,
"西藏":0.322657,
"陕西":4.812726,
"甘肃":2.725447,
"青海":1.128460,
"宁夏":1.138793,
"新疆":0.870588,

};
//2021年8月数据
var d3 = {
  "北京":5.139172,
"天津":2.800756,
"河北":6.839648,
"山西":2.124990,
"内蒙古":2.132363,
"辽宁":1.576780,
"吉林":1.143143,
"黑龙江":0.982337,
"上海":4.470977,
"江苏":6.066385,
"浙江":7.543651,
"安徽":6.557530,
"福建":1.375357,
"江西":3.614770,
"山东":6.191631,
"河南":6.500660,
"湖北":4.097262,
"湖南":4.659241,
"广东":7.952960,
"广西":3.305033,
"海南":0.662604,
"重庆":3.400999,
"四川":4.665783,
"贵州":2.538416,
"云南":1.786429,
"西藏":0.177751,
"陕西":3.388929,
"甘肃":1.855020,
"青海":0.581436,
"宁夏":0.857603,
"新疆":0.609417,

};
//2021年9月数据
var d4 = {
   "北京":8.281195,
"天津":3.570042,
"河北":9.760658,
"山西":2.935193,
"内蒙古":2.658364,
"辽宁":2.672514,
"吉林":1.565057,
"黑龙江":1.282203,
"上海":6.665289,
"江苏":10.929422,
"浙江":7.543651,
"安徽":6.557530,
"福建":1.375357,
"江西":3.614770,
"山东":6.191631,
"河南":6.500660,
"湖北":4.097262,
"湖南":4.659241,
"广东":7.952960,
"广西":3.305033,
"海南":0.662604,
"重庆":3.400999,
"四川":4.665783,
"贵州":2.538416,
"云南":1.786429,
"西藏":0.177751,
"陕西":3.388929,
"甘肃":1.855020,
"青海":0.581436,
"宁夏":0.857603,
"新疆":0.609417,

};
//2021年10月数据
var d5 = {
   "北京":9.705319,
"天津":4.228173,
"河北":10.427531,
"山西":3.433588,
"内蒙古":2.745203,
"辽宁":2.667921,
"吉林":1.401407,
"黑龙江":0.848343,
"上海":9.175092,
"江苏":14.532200,
"浙江":9.931267,
"安徽":7.956216,
"福建":1.801825,
"江西":4.442418,
"山东":7.306980,
"河南":7.537206,
"湖北":4.922597,
"湖南":5.209752,
"广东":11.243226,
"广西":3.802966,
"海南":0.831546,
"重庆":4.371120,
"四川":5.935429,
"贵州":2.882450,
"云南":2.235667,
"西藏":0.190719,
"陕西":3.847203,
"甘肃":1.893152,
"青海":0.604204,
"宁夏":0.888209,
"新疆":0.468777,

   
};
//2021年11月数据
var d6 = {
   "北京":4.861435,
"天津":2.968592,
"河北":7.182381,
"山西":2.218224,
"内蒙古":1.642898,
"辽宁":1.513698,
"吉林":0.996508,
"黑龙江":0.637499 ,
"上海":6.884707,
"江苏":10.728221,
"浙江":6.701477,
"安徽":5.735002,
"福建":2.017402,
"江西":2.531659,
"山东":5.177871,
"河南":4.769751,
"湖北":3.215995,
"湖南":3.543758,
"广东":7.578236,
"广西":2.862588,
"海南":0.782878,
"重庆":2.178561,
"四川":3.174336,
"贵州":2.178076,
"云南":1.753390,
"西藏":0.101572,
"陕西":2.439946,
"甘肃":0.849541,
"青海":0.249058,
"宁夏":0.444608,
"新疆":0.248687,

};

var colors = [
    ["#1DE9B6", "#F46E36", "#04B9FF", "#5DBD32", "#FFC809", "#FB95D5", "#BDA29A", "#6E7074", "#546570", "#C4CCD3"],
    ["#37A2DA", "#67E0E3", "#32C5E9", "#9FE6B8", "#FFDB5C", "#FF9F7F", "#FB7293", "#E062AE", "#E690D1", "#E7BCF3", "#9D96F5", "#8378EA", "#8378EA"],
    ["#DD6B66", "#759AA0", "#E69D87", "#8DC1A9", "#EA7E53", "#EEDD78", "#73A373", "#73B9BC", "#7289AB", "#91CA8C", "#F49F42"],
];
var colorIndex = 0;
$(function() {
    var year = ["2021.06", "2021.07", "2021.08", "2021.09", "2021.10", "2021.11"];
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
            "year": '2021.06',
            "name": key,
            "value": d1[key],
        });
        mapData[1].push({
            "year": '2021.07',
            "name": key,
            "value": d2[key],
        });
        mapData[2].push({
            "year": '2021.08',
            "name": key,
            "value": d3[key],
        });
        mapData[3].push({
            "year": '2021.09',
            "name": key,
            "value": d4[key],
        });
        mapData[4].push({
            "year": '2021.10',
            "name": key,
            "value": d5[key],
        });
        mapData[5].push({
            "year": '2021.11',
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
                            text: '2021年6月至11月中国各省迁入规模指数',
                            subtext: '数据来源：百度地图迁徙大数据',
                            sublink: 'https://qianxi.baidu.com/',
                            left: '5%',
                            top: '5%',
                            textStyle: {
                                color: '#fff',
                                fontSize:25
                            }
                        },
                        {
                            id: 'statistic',
                            text: year[n] + "迁入规模指数",
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
                            return val[2] *5;
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

