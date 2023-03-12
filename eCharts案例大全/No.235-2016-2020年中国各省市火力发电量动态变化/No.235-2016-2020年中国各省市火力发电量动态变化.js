var uploadedDataURL = '/asset/get/s/data-1639194598494-6-HZqJr6g.json';
var geoGpsMap = [121.4648, 31.2891];
var t = 1;
var r = 1;
//所有地点坐标
var geoCoordMap = {
    江苏: [118.8062, 31.9208],
    黑龙江: [127.9688, 45.368],
    内蒙古: [110.3467, 41.4899],
    吉林: [125.8154, 44.2584],
    北京: [116.4551, 40.2539],
    辽宁: [123.1238, 42.1216],
    河北: [114.4995, 38.1006],
    天津: [117.4219, 39.4189],
    山西: [112.3352, 37.9413],
    陕西: [109.1162, 34.2004],
    甘肃: [103.5901, 36.3043],
    宁夏: [106.3586, 38.1775],
    青海: [101.4038, 36.8207],
    新疆: [87.9236, 43.5883],
    四川: [103.9526, 30.7617],
    重庆: [108.384366, 30.439702],
    山东: [117.1582, 36.8701],
    河南: [113.4668, 34.6234],
    安徽: [117.29, 32.0581],
    湖北: [114.3896, 30.6628],
    浙江: [119.5313, 29.8773],
    福建: [119.4543, 25.9222],
    江西: [116.0046, 28.6633],
    湖南: [113.0823, 28.2568],
    贵州: [106.6992, 26.7682],
    云南: [102.9199, 25.4663],
    广东: [113.12244, 23.009505],
    广西: [108.479, 23.1152],
    海南: [110.3893, 19.8516],
    上海: [121.4648, 31.2891],
    西藏: [91.11, 29.97],
};

var d1 = {
    山东: 4976.2,
    内蒙古: 3312.8,
    江苏: 4397.3,
    广东: 2971,
    新疆: 2215.1,
    山西: 2354.2,
    河北: 2371.3,
    安徽: 2129.9,
    河南: 2516.2,
    浙江: 2374,
    陕西: 1580,
    福建: 900.2,
    宁夏: 894.3,
    辽宁: 1398.8,
    贵州: 1113.5,
    湖北: 1012,
    江西: 832.3,
    广西: 574.2,
    黑龙江: 802.8,
    甘肃: 702.9,
    湖南: 722.6,
    上海: 800.1,
    吉林: 578.4,
    天津: 610.3,
    重庆: 448.6,
    四川: 397.8,
    北京: 417.5,
    云南: 236.3,
    海南: 194.6,
    青海: 120.9,
    西藏: 1.5,
};
var d2 = {
    山东: 4808.2,
    内蒙古: 3659.2,
    江苏: 4437.9,
    广东: 3327.3,
    新疆: 2349.2,
    山西: 2572.6,
    河北: 2475.5,
    安徽: 2305.7,
    河南: 2564.9,
    浙江: 2554.1,
    陕西: 1585.1,
    福建: 1118.1,
    宁夏: 1073.5,
    辽宁: 1407.8,
    贵州: 1133.4,
    湖北: 1042,
    江西: 939.1,
    广西: 617.3,
    黑龙江: 805.1,
    甘肃: 713.6,
    湖南: 786,
    上海: 822.8,
    吉林: 596.9,
    天津: 603.4,
    重庆: 468.5,
    四川: 380.5,
    北京: 372.3,
    云南: 237.1,
    海南: 194.6,
    青海: 161.2,
    西藏: 1.6,
};
var d3 = {
    山东: 5367.7,
    内蒙古: 4138.4,
    江苏: 4477.3,
    广东: 3260.1,
    新疆: 2517.8,
    山西: 2787.5,
    河北: 2723.2,
    安徽: 2491.3,
    河南: 2708.3,
    浙江: 2583.4,
    陕西: 1566.6,
    福建: 1390.4,
    宁夏: 1261.9,
    辽宁: 1411.1,
    贵州: 1217.6,
    湖北: 1237,
    江西: 1056.3,
    广西: 825.7,
    黑龙江: 873.9,
    甘肃: 776.8,
    湖南: 912.5,
    上海: 813.5,
    吉林: 671.2,
    天津: 692.6,
    重庆: 539.1,
    四川: 447.9,
    北京: 422.8,
    云南: 287.3,
    海南: 210.3,
    青海: 123.1,
    西藏: 2.2,
};
var d4 = {
    山东: 5169.4,
    内蒙古: 4556.1,
    江苏: 4439,
    广东: 3346,
    新疆: 2822,
    山西: 2930.5,
    河北: 2755.2,
    安徽: 2637.2,
    河南: 2532,
    浙江: 2494.4,
    陕西: 1859.1,
    福建: 1406.4,
    宁夏: 1416.6,
    辽宁: 1473.6,
    贵州: 1338.8,
    湖北: 1466.8,
    江西: 1095,
    广西: 1005.8,
    黑龙江: 911.6,
    甘肃: 785.3,
    湖南: 903.7,
    上海: 783.2,
    吉林: 719.4,
    天津: 701.8,
    重庆: 552.6,
    四川: 502.5,
    北京: 420.5,
    云南: 309.3,
    海南: 209.8,
    青海: 106.7,
    西藏: 3.9,
};
var d5 = {
    山东: 5067.2,
    内蒙古: 4782,
    江苏: 4390.5,
    广东: 3575.9,
    新疆: 3257.6,
    山西: 3019.1,
    河北: 2750.5,
    安徽: 2527.3,
    河南: 2481.9,
    浙江: 2428.2,
    陕西: 2008.7,
    福建: 1561.4,
    宁夏: 1529.3,
    辽宁: 1498.1,
    贵州: 1329.3,
    湖北: 1216.4,
    江西: 1158.1,
    广西: 1064.7,
    黑龙江: 921.6,
    甘肃: 874.4,
    湖南: 851.2,
    上海: 803.7,
    吉林: 749.9,
    天津: 737.7,
    重庆: 535,
    四川: 524.4,
    北京: 429.1,
    云南: 409.8,
    海南: 208.2,
    青海: 103.6,
    西藏: 4.1,
};
total = [43957.6, 46114.5, 49794.8, 51654.2, 52798.9];

var colors = ['#1DE9B6', '#EEDD78', '#FFFF00', '#FFDB5C', '#37A2DA', '#04B9FF'];
var colorIndex = 0;
$(function () {
    var year = ['2016', '2017', '2018', '2019', '2020'];
    var mapData = [[], [], [], [], []];

    /*柱子Y名称*/
    var categoryData = [];
    var barData = [];

    for (var key in geoCoordMap) {
        mapData[0].push({
            year: '2016',
            name: key,
            value: d1[key] / 25,
            value1: d1[key] / 10,
        });
        mapData[1].push({
            year: '2017',
            name: key,
            value: d2[key] / 25,
            value1: d2[key] / 10,
        });
        mapData[2].push({
            year: '2018',
            name: key,
            value: d3[key] / 25,
            value1: d3[key] / 10,
        });
        mapData[3].push({
            year: '2019',
            name: key,
            value: d4[key] / 25,
            value1: d4[key] / 10,
        });
        mapData[4].push({
            year: '2020',
            name: key,
            value: d5[key] / 25,
            value1: d5[key] / 10,
        });
    }

    for (var i = 0; i < mapData.length; i++) {
        mapData[i].sort(function sortNumber(a, b) {
            return a.value - b.value;
        });
        barData.push([]);
        categoryData.push([]);
        for (var j = 0; j < mapData[i].length; j++) {
            barData[i].push(mapData[i][j].value1 * 10);
            categoryData[i].push(mapData[i][j].name);
        }
    }

    $.getJSON(uploadedDataURL, function (geoJson) {
        $('body').css({
            background:
                'url(https://corgixuoos.oss-cn-shanghai.aliyuncs.com/soc/0623%E4%BF%AE%E6%94%B9%E5%A4%A7%E5%B1%8F-%E6%95%B4%E4%BD%93-Recovered.png) repeat-y', //'#2a6d87',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
        });

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

        var convertToLineData = function (data, gps) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                var toCoord = geoCoordMap[dataItem.name];
                var fromCoord = gps;
                if (fromCoord && toCoord) {
                    if (t == 1) {
                        res.push([
                            {
                                coord: toCoord,
                            },
                            {
                                coord: fromCoord,
                                value: dataItem.value,
                            },
                        ]);
                    } else {
                        res.push([
                            {
                                coord: fromCoord,
                                value: dataItem.value,
                            },
                            {
                                coord: toCoord,
                            },
                        ]);
                    }
                }
            }
            if (t == 0) {
                t = 1;
            } else {
                t = 0;
            }
            return res;
        };

        var optionXyMap01 = {
            timeline: {
                data: year,
                axisType: 'category',
                autoPlay: true,
                playInterval: 1500, //时间间隔
                left: '8%',
                right: '10%',
                bottom: '3%',
                width: '60%',
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
                    color: '#FFFFFF',
                },
                checkpointStyle: {
                    borderColor: '#FFFFFF',
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
                        color: '#FFFFFF',
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
                    right: '2%',
                    top: '10%',
                    bottom: '10%',
                    width: '18%',
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
                visualMap: {
                    min: 0,
                    max: 6000,
                    left: 'left',
                    top: 'bottom',
                    text: ['高', '低'],
                    textStyle: {
                        color: 'white',
                    },
                    calculable: true,
                    colorLightness: [0.8, 100],
                    color: ['#c05050', '#e5cf0d', '#5ab1ef'],
                    dimension: 0,
                    seriesIndex: 3, // 仅使第一个series生效
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
                                x: 0.4,
                                y: 0.5,
                                r: 0.8,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: 'rgba(3, 0, 38,9)', // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(3, 0, 38,9)', // 100% 处的颜色
                                    },
                                ],
                                globalCoord: false, // 缺省为 false
                            },
                            shadowColor: 'rgba(128, 217, 248, 9)',
                            // shadowColor: 'rgba(255, 255, 255, 1)',
                            shadowOffsetX: -2,
                            shadowOffsetY: 2,
                            shadowBlur: 10,
                        },
                        emphasis: {
                            areaColor: '#FCFFD9',
                            borderWidth: 0,
                        },
                    },
                },
            },
            options: [],
        };

        for (var n = 0; n < year.length; n++) {
            var statistic_name = '火力发电年产量(亿千瓦时)';
            optionXyMap01.options.push({
                backgroundColor: '#012248',

                title: [
                    {
                        text: '2016-2020年中国各省市火力发电量动态变化',
                        left: 'center',
                        top: '5%',
                        textStyle: {
                            color: '#fff',
                            fontSize: 22,
                        },
                    },

                    {
                        id: 'statistic',
                        text: statistic_name,
                        left: '80%',
                        top: '7%',
                        textStyle: {
                            color: '#fff',
                            fontSize: 15,
                        },
                    },
                    {
                        text: '年度火力发电总量：' + total[n] + '亿千瓦时',
                        left: 'center',
                        top: '10%',
                        textStyle: {
                            color: '#FFAC50',
                            fontSize: 16,
                        },
                    },
                ],
                grid: {
                    right: 70,
                    top: 90,
                    bottom: 30,
                    width: '220',
                },
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
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        margin: 1,
                        textStyle: {
                            color: '#aaa',
                        },
                    },
                },
                yAxis: {
                    type: 'category',
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
                    {
                        //文字和标志
                        name: 'light',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: convertData(mapData[n]),
                        symbolSize: function (val) {
                            return val[2] / 5;
                        },
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: true,
                            },
                            emphasis: {
                                show: true,
                            },
                        },
                        itemStyle: {
                            normal: {
                                color: colors[1],
                            },
                        },
                    },
                    //地图？
                    {
                        type: 'map',
                        map: 'china',
                        geoIndex: 0,
                        aspectScale: 0.75, //长宽比
                        showLegendSymbol: false, // 存在legend时显示
                        label: {
                            normal: {
                                show: false,
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
                    //地图点的动画效果
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
                            return val[2] / 6;
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
                                color: colors[1],
                                shadowBlur: 100,
                                shadowColor: colors[1],
                            },
                        },
                        zlevel: 1,
                    },
                    //地图线的动画效果

                    //柱状图
                    {
                        zlevel: 1.5,
                        type: 'bar',
                        barMaxWidth: 8,
                        symbol: 'none',
                        itemStyle: {
                            normal: {
                                color: colors[n],
                                barBorderRadius: [0, 30, 30, 0],
                            },
                        },
                        data: barData[n],
                    },
                ],
            });
            if (r == 0) {
                r = 1;
            } else {
                r = 0;
            }
        }
        myChart.setOption(optionXyMap01);
    });
});
