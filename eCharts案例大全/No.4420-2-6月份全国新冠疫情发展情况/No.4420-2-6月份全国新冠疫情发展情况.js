var uploadedDataURL = "/asset/get/s/data-1528971808162-BkOXf61WX.json";

//把所有城市的位置和各月份疫情信息添加到数组里面
var geoCoordMap = {
    "黑龙江": [126.5363383,	45.80734693],
    "吉林": [125.2866434, 43.85392591],
    '辽宁': [123.4409403, 41.88958731],
    "内蒙古": [111.7749771, 40.86165455],
    '北京': [116.3892349, 39.94138347],
    "河北": [115.422438, 38.97441078],
    "山西": [112.5220474, 37.89008234],
    "山东": [117.1143325, 36.66627107],
    "陕西": [108.9405044, 34.43188934],
    "河南": [113.6426529, 34.77551637],
    "安徽": [117.2461685, 31.85662269],
    "江苏": [120.8716568, 32.04306309],
    "湖北": [114.3238052, 30.59778902],
    '浙江': [119.6302017, 29.13063113],
    '上海': [121.4539322, 31.29503989],
    '天津': [117.3560318, 39.37470211],
    "宁夏": [106.2049087, 38.51169302],
    "甘肃": [103.8153824, 36.13127563],
    '青海': [97.34443509, 37.44220945],
    '新疆': [87.58857571, 43.87616769],
    "西藏": [91.17011868, 29.69049859],
    "云南": [102.8156265, 24.88400738],
    "四川": [104.0460952, 30.58360306],
    "重庆": [106.9112524, 29.44393675],
    "贵州": [106.6311011, 26.66173062],
    "广西": [108.3559545, 22.83141275],
    "广东": [113.2613500, 23.12978772],
    "湖南": [112.9427465, 28.25071721],
    "江西": [115.8651098, 28.69495848],
    "福建": [119.3038305, 26.09086315],
    "台湾": [121.5670141, 25.0503063],
    "海南": [110.2181371, 20.0606117],
    "香港": [114.0523657, 22.53745592],
};
//2月份数据
var d1 = {
    "黑龙江": 266,
    "吉林": 57,
    '辽宁': 89,
    "内蒙古": 41,
    '北京': 242,
    "河北": 149,
    "山西": 84,
    "山东": 325,
    "陕西": 163,
    "河南": 795,
    "安徽": 568,
    "江苏": 347,
    "湖北": 18473,
    '浙江': 873,
    '上海': 231,
    '天津': 67,
    "宁夏": 39,
    "甘肃": 56,
    '青海': 15,
    '新疆': 36,
    "西藏": 1,
    "云南": 123,
    "四川": 293,
    "重庆": 373,
    "贵州": 62,
    "广西": 154,
    "广东": 895,
    "湖南": 655,
    "江西": 563,
    "福建": 203,
    "台湾": 0,
    "海南": 97,
    "香港": 0,
};

//3月份数据
var d2 = {
    "黑龙江": 88,
    "吉林": 4,
    '辽宁': 18,
    "内蒙古": 11,
    '北京': 116,
    "河北": 8,
    "山西": 9,
    "山东": 175,
    "陕西": 20,
    "河南": 11,
    "安徽": 14,
    "江苏": 43,
    "湖北": 22695,
    '浙江': 84,
    '上海': 33,
    '天津': 5,
    "宁夏": 6,
    "甘肃": 30,
    '青海': 0,
    '新疆': 3,
    "西藏": 0,
    "云南": 3,
    "四川": 118,
    "重庆": 68,
    "贵州": 30,
    "广西": 33,
    "广东": 163,
    "湖南": 81,
    "江西": 33,
    "福建": 17,
    "台湾": 2,
    "海南": 4,
    "香港": 0,
};
//4月份数据
var d3 = {
    "黑龙江": 42,
    "吉林": 5,
    '辽宁': 12,
    "内蒙古": 43,
    '北京': 136,
    "河北": 11,
    "山西": 5,
    "山东": 18,
    "陕西": 7,
    "河南": 2,
    "安徽": 0,
    "江苏": 18,
    "湖北": 577,
    '浙江': 33,
    '上海': 147,
    '天津': 33,
    "宁夏": 0,
    "甘肃": 5,
    '青海': 0,
    '新疆': 0,
    "西藏": 0,
    "云南": 10,
    "四川": 16,
    "重庆": 3,
    "贵州": 1,
    "广西": 0,
    "广东": 129,
    "湖南": 1,
    "江西": 1,
    "福建": 44,
    "台湾": 8,
    "海南": 0,
    "香港": 28,
};
//5月份数据
var d4 = {
   "黑龙江":173,
    "吉林": 8,
    '辽宁': 0,
    "内蒙古": 33,
    '北京': 29,
    "河北": 2,
    "山西": 5,
    "山东": 6,
    "陕西": 41,
    "河南": 0,
    "安徽": 0,
    "江苏": 2,
    "湖北": 0,
    '浙江': 0,
    '上海': 29,
    '天津': 1,
    "宁夏": 0,
    "甘肃": 0,
    '青海': 0,
    '新疆': 0,
    "西藏": 0,
    "云南": 2,
    "四川": 0,
    "重庆": 0,
    "贵州": 0,
    "广西": 0,
    "广东": 5,
    "湖南": 0,
    "江西": 0,
    "福建": 1,
    "台湾": 0,
    "海南": 0,
    "香港": 0,
};
//6月份数据
var d5 = {
    "黑龙江": 0,
    "吉林": 3,
    '辽宁': 0,
    "内蒙古": 21,
    '北京': 2,
    "河北": 0,
    "山西": 0,
    "山东": 5,
    "陕西": 1,
    "河南": 0,
    "安徽": 0,
    "江苏": 0,
    "湖北": 0,
    '浙江': 0,
    '上海': 7,
    '天津': 0,
    "宁夏": 0,
    "甘肃": 0,
    '青海': 0,
    '新疆': 0,
    "西藏": 0,
    "云南": 0,
    "四川": 17,
    "重庆": 0,
    "贵州": 0,
    "广西": 0,
    "广东": 9,
    "湖南": 0,
    "江西": 0,
    "福建": 1,
    "台湾": 0,
    "海南": 1,
    "香港": 3,
};
var colors = [
    ["#1DE9B6", "#F46E36", "#04B9FF", "#5DBD32", "#FFC809", "#FB95D5", "#BDA29A", "#6E7074", "#546570", "#C4CCD3"],
    ["#37A2DA", "#67E0E3", "#32C5E9", "#9FE6B8", "#FFDB5C", "#FF9F7F", "#FB7293", "#E062AE", "#E690D1", "#E7BCF3", "#9D96F5", "#8378EA", "#8378EA"],
    ["#DD6B66", "#759AA0", "#E69D87", "#8DC1A9", "#EA7E53", "#EEDD78", "#73A373", "#73B9BC", "#7289AB", "#91CA8C", "#F49F42"],
];
var colorIndex = 0;
$(function() {
    var month = ["2月", "3月", "4月", "5月", "6月"];
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
            "month": '2',
            "name": key,
            "value": d1[key],
        });
        mapData[1].push({
            "month": '3',
            "name": key,
            "value": d2[key],
        });
        mapData[2].push({
            "month": '4',
            "name": key,
            "value": d3[key],
        });
        mapData[3].push({
            "month": '5',
            "name": key,
            "value": d4[key],
        });
        mapData[4].push({
            "month": '6',
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
                data: month,
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
                    itemStyle: {  //地图颜色
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
                                    color: 'rgba(143, 235, 231, 0)' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: 'rgba(143, 235, 231, .2)' // 100% 处的颜色
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

        for (var n = 0; n < month.length; n++) {
            optionXyMap01.options.push({
                backgroundColor: '#013954',
                title:
                    [{
                            text: '2-6月份全国新冠疫情发展情况',
                            left: '23%',
                            top: '7%',
                            textStyle: {
                                color: '#fff',
                                fontSize: 25
                            }
                        },
                        {
                            id: 'statistic',
                            text: month[n] + "各省现有确诊人数",
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
                            return val[2] / 150;
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

