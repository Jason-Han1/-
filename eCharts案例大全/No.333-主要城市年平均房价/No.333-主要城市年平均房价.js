var uploadedDataURL = '/asset/get/s/data-1528971808162-BkOXf61WX.json';

//geoCoordMap把所有可能出现的城市加到数组里面
var geoCoordMap = {
    北京: [116.405285, 39.904989],
    上海: [121.472644, 31.231706],
    广州: [113.280637, 23.125178],
    深圳: [114.085947, 22.547],

    成都: [104.065735, 30.659462],
    杭州: [120.153576, 30.287459],
    重庆: [106.504962, 29.533155],
    西安: [108.948024, 34.263161],
    苏州: [120.619585, 31.299379],
    武汉: [114.298572, 30.584355],
    南京: [118.767413, 32.041544],
    天津: [117.190182, 39.125596],
    郑州: [113.665412, 34.757975],
    长沙: [112.982279, 28.19409],
    东莞: [113.760234, 23.048884],
    佛山: [113.122717, 23.028762],
    宁波: [121.549792, 29.868388],
    青岛: [120.369557, 36.094406],
    沈阳: [123.429096, 41.796767],
};

//2015年数据
var d1 = {
    北京: 39437,
    上海: 32324,
    广州: 20016,
    深圳: 41494,

    成都: 7256.67,
    杭州: 16080,
    重庆: 6289,
    西安: 6450,
    苏州: 12251,
    武汉: 10000,
    南京: 18697,
    天津: 15553,
    郑州: 8790,
    长沙: 6448,
    东莞: 8371,
    佛山: 6082,
    宁波: 12250,
    青岛: 12384,
    沈阳: 7242,
};

//2016年数据
var d2 = {
    北京: 57597,
    上海: 41741,
    广州: 22926,
    深圳: 43289,

    成都: 7643.42,
    杭州: 21655,
    重庆: 7493,
    西安: 6514,
    苏州: 16181,
    武汉: 13875,
    南京: 24867,
    天津: 23220,
    郑州: 12091,
    长沙: 7601,
    东莞: 11651,
    佛山: 7161,
    宁波: 13857,
    青岛: 13523,
    沈阳: 7242,
};
//2017年数据
var d3 = {
    北京: 57768,
    上海: 53195.42,
    广州: 28578,
    深圳: 51477,

    成都: 11269.75,
    杭州: 28540,
    重庆: 9925,
    西安: 8880,
    苏州: 15320,
    武汉: 16259,
    南京: 25733,
    天津: 22205,
    郑州: 12859,
    长沙: 9873,
    东莞: 13913,
    佛山: 10229,
    宁波: 17037,
    青岛: 18142,
    沈阳: 7999,
};
//2018年数据
var d4 = {
    北京: 59868,
    上海: 46603,
    广州: 32088,
    深圳: 53205,

    成都: 13252.58,
    杭州: 28651,
    重庆: 12080,
    西安: 12207,
    苏州: 16943,
    武汉: 17568,
    南京: 27568,
    天津: 22188,
    郑州: 13582,
    长沙: 10627,
    东莞: 14813,
    佛山: 10908,
    宁波: 20313,
    青岛: 18788,
    沈阳: 7242,
};
//2019年数据
var d5 = {
    北京: 58568,
    上海: 48283.67,
    广州: 31692,
    深圳: 54790,

    成都: 11618.5,
    杭州: 27002,
    重庆: 11187,
    西安: 12446,
    苏州: 16818,
    武汉: 10000,
    南京: 28526,
    天津: 20952,
    郑州: 13266,
    长沙: 10078,
    东莞: 16105,
    佛山: 12652,
    宁波: 22814,
    青岛: 16340,
    沈阳: 9817,
};
//2020年数据
var d6 = {
    北京: 57561,
    上海: 51201.83,
    广州: 33364,
    深圳: 56795,

    成都: 12341.08,
    杭州: 27851,
    重庆: 11275,
    西安: 12748,
    苏州: 21678,
    武汉: 16772,
    南京: 28640,
    天津: 19729,
    郑州: 13509,
    长沙: 10151,
    东莞: 18296,
    佛山: 13173,
    宁波: 26075,
    青岛: 16619,
    沈阳: 10216,
};
//2021年数据
var d7 = {
    北京: 58768,
    上海: 44812.82,
    广州: 35143,
    深圳: 57733,

    成都: 13304.73,
    杭州: 31577,
    重庆: 12526,
    西安: 13871,
    苏州: 22216,
    武汉: 16829,
    南京: 27977,
    天津: 18121,
    郑州: 13513,
    长沙: 10467,
    东莞: 20215,
    佛山: 14221,
    宁波: 26579,
    青岛: 16134,
    沈阳: 9999,
};

var colors = [
    ['#1DE9B6', '#F46E36', '#04B9FF', '#5DBD32', '#FFC809', '#FB95D5', '#BDA29A', '#6E7074', '#546570', '#C4CCD3'],
    [
        '#37A2DA',
        '#67E0E3',
        '#32C5E9',
        '#9FE6B8',
        '#FFDB5C',
        '#FF9F7F',
        '#FB7293',
        '#E062AE',
        '#E690D1',
        '#E7BCF3',
        '#9D96F5',
        '#8378EA',
        '#8378EA',
    ],
    [
        '#DD6B66',
        '#759AA0',
        '#E69D87',
        '#8DC1A9',
        '#EA7E53',
        '#EEDD78',
        '#73A373',
        '#73B9BC',
        '#7289AB',
        '#91CA8C',
        '#F49F42',
    ],
];
var colorIndex = 0;
$(function () {
    var year = ['2015', '2016', '2017', '2018', '2019', '2020', '2021'];
    var mapData = [[], [], [], [], [], [], []];

    /*柱子Y名称*/
    var categoryData = [];
    var barData = [];

    for (var key in geoCoordMap) {
        mapData[0].push({
            year: '2015',
            name: key,
            value: d1[key],
        });
        mapData[1].push({
            year: '2016',
            name: key,
            value: d2[key],
        });
        mapData[2].push({
            year: '2017',
            name: key,
            value: d3[key],
        });
        mapData[3].push({
            year: '2018',
            name: key,
            value: d4[key],
        });
        mapData[4].push({
            year: '2019',
            name: key,
            value: d5[key],
        });
        mapData[5].push({
            year: '2020',
            name: key,
            value: d6[key],
        });
        mapData[6].push({
            year: '2021',
            name: key,
            value: d7[key],
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

    $.getJSON(uploadedDataURL, function (geoJson) {
        echarts.registerMap('china', geoJson);
        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value),
                    });
                }
            }
            return res;
        };

       option = {
           backgroundColor: '#080b30',
            title: {
                text: '测试',
                textStyle: {
                    align: 'center',
                    color: '#fff',
                    fontSize: 20,
                },
                top: '5%',
                left: 'center',
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(0, 255, 233,0)'
                            }, {
                                offset: 0.5,
                                color: 'rgba(255, 255, 255,1)',
                            }, {
                                offset: 1,
                                color: 'rgba(0, 255, 233,0)'
                            }],
                            global: false
                        }
                    },
                },
            },
            grid: {
                top: '15%',
                left: '5%',
                right: '5%',
                bottom: '15%',
                // containLabel: true
            },
            xAxis: [{
                type: 'category',
                axisLine: {
                    show: true
                },
                splitArea: {
                    // show: true,
                    color: '#f00',
                    lineStyle: {
                        color: '#f00'
                    },
                },
                axisLabel: {
                    color: '#fff'
                },
                splitLine: {
                    show: false
                },
                boundaryGap: false,
                data: ['2015', '2016', '2017', '2018', '2019', '2020','2021'],
        
            }],
        
            yAxis: [{
                type: 'value',
                min: 0,
                // max: 140,
                splitNumber: 4,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(255,255,255,0.1)'
                    }
                },
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                    margin: 20,
                    textStyle: {
                        color: '#d1e6eb',
        
                    },
                },
                axisTick: {
                    show: false,
                },
            }],
            series: [{
                    name: '注册总量',
                    type: 'line',
                    // smooth: true, //是否平滑
                    showAllSymbol: true,
                    // symbol: 'image://./static/images/guang-circle.png',
                    symbol: 'circle',
                    symbolSize: 25,
                    lineStyle: {
                        normal: {
                            color: "#6c50f3",
                            shadowColor: 'rgba(0, 0, 0, .3)',
                            shadowBlur: 0,
                            shadowOffsetY: 5,
                            shadowOffsetX: 5,
                        },
                    },
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#6c50f3',
                        }
                    },
                    itemStyle: {
                        color: "#6c50f3",
                        borderColor: "#fff",
                        borderWidth: 3,
                        shadowColor: 'rgba(0, 0, 0, .3)',
                        shadowBlur: 0,
                        shadowOffsetY: 2,
                        shadowOffsetX: 2,
                    },
                    tooltip: {
                        show: false
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(108,80,243,0.3)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(108,80,243,0)'
                                }
                            ], false),
                            shadowColor: 'rgba(108,80,243, 0.9)',
                            shadowBlur: 20
                        }
                    },
                    data: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02, ]
                },
                {
                    name: '注册总量',
                    type: 'line',
                    // smooth: true, //是否平滑
                    showAllSymbol: true,
                    // symbol: 'image://./static/images/guang-circle.png',
                    symbol: 'circle',
                    symbolSize: 25,
                    lineStyle: {
                        normal: {
                            color: "#00ca95",
                            shadowColor: 'rgba(0, 0, 0, .3)',
                            shadowBlur: 0,
                            shadowOffsetY: 5,
                            shadowOffsetX: 5,
                        },
                    },
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#00ca95',
                        }
                    },
        
                    itemStyle: {
                        color: "#00ca95",
                        borderColor: "#fff",
                        borderWidth: 3,
                        shadowColor: 'rgba(0, 0, 0, .3)',
                        shadowBlur: 0,
                        shadowOffsetY: 2,
                        shadowOffsetX: 2,
                    },
                    tooltip: {
                        show: false
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(0,202,149,0.3)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(0,202,149,0)'
                                }
                            ], false),
                            shadowColor: 'rgba(0,202,149, 0.9)',
                            shadowBlur: 20
                        }
                    },
                    data: [281.55, 398.35, 214.02, 179.55, 289.57, 356.14, ],
                },
            ]
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
                            color: '#ddd',
                        },
                    },
                    emphasis: {
                        textStyle: {
                            color: '#fff',
                        },
                    },
                },
                symbolSize: 10,
                lineStyle: {
                    color: '#555',
                },
                checkpointStyle: {
                    borderColor: '#777',
                    borderWidth: 2,
                },
                controlStyle: {
                    showNextBtn: true,
                    showPrevBtn: true,
                    normal: {
                        color: '#666',
                        borderColor: '#666',
                    },
                    emphasis: {
                        color: '#aaa',
                        borderColor: '#aaa',
                    },
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
                    width: '20%',
                },
                tooltip: {
                    trigger: 'axis', // hover触发器
                    axisPointer: {
                        // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                        shadowStyle: {
                            color: 'rgba(150,150,150,0.1)', //hover颜色
                        },
                    },
                },
                geo: {
                    show: true,
                    map: 'china',
                    roam: true,
                    zoom: 1,
                    center: [113.83531246, 34.0267395887],
                    label: {
                        emphasis: {
                            show: true,
                        },
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
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: 'rgba(147, 235, 248, 0)', // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(147, 235, 248, .2)', // 100% 处的颜色
                                    },
                                ],
                                globalCoord: false, // 缺省为 false
                            },
                            shadowColor: 'rgba(128, 217, 248, 1)',
                            // shadowColor: 'rgba(255, 255, 255, 1)',
                            shadowOffsetX: -2,
                            shadowOffsetY: 2,
                            shadowBlur: 10,
                        },
                        emphasis: {
                            areaColor: '#389BB7',
                            borderWidth: 0,
                        },
                    },
                },
            },
            options: [],
        };

        for (var n = 0; n < year.length; n++) {
            optionXyMap01.options.push({
                backgroundColor: '#013954',
                title: [
                    {
                        text: '一线城市近七年年平均房价',
                        left: '20%',
                        top: '7%',
                        textStyle: {
                            color: '#fff',
                            fontSize: 25,
                        },
                    },
                    {
                        id: 'statistic',
                        text: year[n] + '年房价（元/平方米）',
                        left: '80%',
                        top: '8%',
                        textStyle: {
                            color: '#fff',
                            fontSize: 25,
                        },
                    },
                ],
                xAxis: {
                    type: 'value',
                    scale: true,
                    position: 'top',
                    min: 0,
                    boundaryGap: false,
                    splitLine: {
                        show: false,
                    },
                    axisLine: {
                        show: true,
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        margin: 2,
                        textStyle: {
                            color: '#aaa',
                        },
                    },
                },
                yAxis: {
                    type: 'category',
                    //  name: 'TOP 20',
                    nameGap: 16,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#ddd',
                        },
                    },
                    axisTick: {
                        show: false,
                        lineStyle: {
                            color: '#ddd',
                        },
                    },
                    axisLabel: {
                        interval: 0,
                        textStyle: {
                            color: '#ddd',
                        },
                    },
                    data: categoryData[n],
                },

                series: [
                    //地图
                    {
                        type: 'map',
                        map: 'china',
                        geoIndex: 0,
                        aspectScale: 0.75, //长宽比
                        showLegendSymbol: true, // 存在legend时显示
                        label: {
                            normal: {
                                show: true,
                            },
                            emphasis: {
                                show: false,
                                textStyle: {
                                    color: '#fff',
                                },
                            },
                        },
                        roam: true,
                        itemStyle: {
                            normal: {
                                areaColor: '#031525',
                                borderColor: '#FFFFFF',
                            },
                            emphasis: {
                                areaColor: '#2B91B7',
                            },
                        },
                        animation: false,
                        data: mapData,
                    },
                    //地图中闪烁的点
                    {
                        //  name: 'Top 5',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        data: convertData(
                            mapData[n]
                                .sort(function (a, b) {
                                    return b.value - a.value;
                                })
                                .slice(0, 20)
                        ),
                        symbolSize: function (val) {
                            return val[2] / 1200;
                        },
                        showEffectOn: 'render',
                        rippleEffect: {
                            brushType: 'stroke',
                        },
                        hoverAnimation: true,
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: true,
                            },
                        },
                        itemStyle: {
                            normal: {
                                color: colors[colorIndex][n],
                                shadowBlur: 10,
                                shadowColor: colors[colorIndex][n],
                            },
                        },
                        zlevel: 1,
                    },
                    //柱状图
                    {
                        zlevel: 1.5,
                        type: 'bar',
                        symbol: 'none',
                        itemStyle: {
                            normal: {
                                color: colors[colorIndex][n],
                            },
                        },
                        data: barData[n],
                    },
                ],
            });
        }
        myChart.setOption(optionXyMap01);
    });
});
