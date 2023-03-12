var uploadedDataURL = "/asset/get/s/data-1528971808162-BkOXf61WX.json";

//geoCoordMap把所有可能出现的城市加到数组里面
var geoCoordMap = {
     '北京': [116.46, 39.92],
    "天津": [117.2, 39.13],
    "河北": [114.48,38.03],
    "山西": [112.53,37.87],
    "内蒙古": [111.65,40.82],
     
    "辽宁": [123.38,41.8],
    "吉林": [125.35,43.88],
    "黑龙江": [126.63,45.75],
    
    '上海': [121.48, 31.22],
    "江苏": [118.78,32.04],
    "浙江": [120.19,30.26],
    "安徽": [117.27,31.86],
    "福建": [119.3,26.08],
    "江西": [115.89,28.68],
    "山东": [117,36.65],
    
    "河南": [113.65,34.76],
    "湖北": [114.31,30.52],
    "湖南": [113,28.21],
    "广东": [113.23,23.16],
    "广西": [108.33,22.84],
    "海南": [110.35,20.02],
    
    "重庆": [106.54, 29.59],
    "四川": [104.06,30.67],
    "贵州": [106.71,26.57],
    "云南": [102.73,25.04],
    "西藏": [91.11,29.97],
    
    "陕西": [108.95,34.27],
    "甘肃": [103.73,36.03],
    "青海": [101.74,36.56],
    "宁夏": [106.27,38.47],
    "新疆": [87.68,43.77],

};

//2013年数据
var d1 = {
    '北京': 58072,
    "天津": 61167,
    "河北": 404522,
    "山西": 286103,
    "内蒙古": 161587,

    "辽宁": 231626,
    "吉林": 157117,
    "黑龙江": 206088,
    
    '上海': 52675,
    "江苏": 425924,
    "浙江": 296105,
    "安徽": 416723,
    "福建": 231800,
    "江西": 240907,
    "山东": 509383,
    
    "河南": 631289,
    "湖北": 391211,
    "湖南": 316720,
    "广东": 723659,
    "广西": 241922,
    "海南": 53651,
    
    "重庆": 214128,
    "四川": 485487,
    "贵州": 210409,
    "云南": 209987,
    "西藏": 14734,
    
    "陕西": 317569,
    "甘肃": 216530,
    "青海": 33081,
    "宁夏": 49770,
    "新疆": 139843,
};

//2014年数据
var d2 = {
  '北京': 57773,
    "天津": 61100,
    "河北": 361988,
    "山西": 273507,
    "内蒙古": 162138,

    "辽宁": 231520,
    "吉林": 155501,
    "黑龙江": 198990,
    
    '上海': 50971,
    "江苏": 396668,
    "浙江": 296640,
    "安徽": 429396,
    "福建": 227273,
    "江西": 277005,
    "山东": 543232,
    
    "河南": 602825,
    "湖北": 349485,
    "湖南": 320363,
    "广东": 728690,
    "广西": 253288,
    "海南": 58466,
    
    "重庆": 221234,
    "四川": 504932,
    "贵州": 238495,
    "云南": 221640,
    "西藏": 16182,
    
    "陕西": 304394,
    "甘肃": 223828,
    "青海": 32367,
    "宁夏": 54966,
    "新疆": 141332,
};
//2015年数据
var d3 = {
    '北京': 57738,
    "天津": 58350,
    "河北": 352416,
    "山西": 283568,
    "内蒙古": 165936,

    "辽宁": 223546,
    "吉林": 139932,
    "黑龙江": 193938,
    
    '上海': 51227,
    "江苏": 368844,
    "浙江": 270956,
    "安徽": 433003,
    "福建": 208113,
    "江西": 287377,
    "山东": 568865,
    
    "河南": 610455,
    "湖北": 316918,
    "湖南": 334954,
    "广东": 726690,
    "广西": 257331,
    "海南": 60551,
    
    "重庆": 223647,
    "四川": 497843,
    "贵州": 280735,
    "云南": 240680,
    "西藏": 18109,
    
    "陕西": 290052,
    "甘肃": 224408,
    "青海": 35882,
    "宁夏": 55417,
    "新疆": 139054,
};
//2016年数据
var d4 = {
     '北京': 52841,
    "天津": 56059,
    "河北": 368170,
    "山西": 284423,
    "内蒙古": 160737,

    "辽宁": 216098,
    "吉林": 138986,
    "黑龙江": 190714,
    
    '上海': 51889,
    "江苏": 338683,
    "浙江": 259893,
    "安徽": 388305,
    "福建": 196997,
    "江西": 302009,
    "山东": 579148,
    
    "河南": 633076,
    "湖北": 305669,
    "湖南": 341973,
    "广东": 703300,
    "广西": 268465,
    "海南": 58826,
    
    "重庆": 219224,
    "四川": 496623,
    "贵州": 307414,
    "云南": 248914,
    "西藏": 19964,
    
    "陕西": 277569,
    "甘肃": 219083,
    "青海": 38041,
    "宁夏": 56075,
    "新疆": 144332,
};
//2017年数据
var d5 = {
     '北京': 49685,
    "天津": 55239,
    "河北": 376969,
    "山西": 260270,
    "内蒙古": 153262,

    "辽宁": 202502,
    "吉林": 130110,
    "黑龙江": 181619,
    
    '上海': 51344,
    "江苏": 317594,
    "浙江": 246221,
    "安徽": 376695,
    "福建": 196523,
    "江西": 301912,
    "山东": 553774,
    
    "河南": 631394,
    "湖北": 289536,
    "湖南": 344076,
    "广东": 676686,
    "广西": 281761,
    "海南": 56105,
    
    "重庆": 210874,
    "四川": 490317,
    "贵州": 323440,
    "云南": 252177,
    "西藏": 18339,
    
    "陕西": 266982,
    "甘肃": 208113,
    "青海": 38284,
    "宁夏": 53632,
    "新疆": 161857,
   
};
//2018年数据
var d6 = {
   '北京': 51065,
    "天津": 53731,
    "河北": 401065,
    "山西": 247611,
    "内蒙古": 146323,
     
    "辽宁": 206402,
    "吉林": 133057,
    "黑龙江": 180948,
    
    '上海': 51942,
    "江苏": 312440,
    "浙江": 253335,
    "安徽": 369152,
    "福建": 206080,
    "江西": 304483,
    "山东": 550112,
    
    "河南": 660798,
    "湖北": 275641,
    "湖南": 364539,
    "广东": 646488,
    "广西": 295808,
    "海南": 57018,
    
    "重庆": 204087,
    "四川": 479939,
    "贵州": 330559,
    "云南": 257036,
    "西藏": 19133,
    
    "陕西": 263301,
    "甘肃": 201083,
    "青海": 39125,
    "宁夏": 52262,
    "新疆": 177880,
};
//2019年数据
var d7 = {
     '北京': 50390,
    "天津": 54368,
    "河北": 427550,
    "山西": 244365,
    "内蒙古": 144760,
     
    "辽宁": 206749,
    "吉林": 137352,
    "黑龙江": 185865,
    
    '上海': 51624,
    "江苏": 313885,
    "浙江": 254026,
    "安徽": 363296,
    "福建": 210157,
    "江西": 326947,
    "山东": 551604,
    
    "河南": 679853,
    "湖北": 274071,
    "湖南": 379575,
    "广东": 628523,
    "广西": 326975,
    "海南": 57354,
    
    "重庆": 206590,
    "四川": 470039,
    "贵州": 333356,
    "云南": 272366,
    "西藏": 19159,
    
    "陕西": 252235,
    "甘肃": 193621,
    "青海": 41582,
    "宁夏": 47318,
    "新疆": 186939,
};

var colors = [
    ["#8378EA","#F49F42","#9FE6B8","#BDA29A","#E690D1","#FFDB5C","#73B9BC"],
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
                    width: '30%'
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
                            text: '2013~2019年中国各个地区普通高中毕业生情况',
                            subtext:'数据来源，国家统计年鉴（单位：人）',
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
                            return val[2] / 40000;
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
                        barMaxWidth:8,
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

