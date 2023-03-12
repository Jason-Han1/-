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
    北京市: [116.4551, 40.2539],
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
    北京市: 35.1,
    天津: 18.9,
    河北: 208.3,
    山西: 134.1,
    内蒙古: 426.5,
    辽宁: 331.6,
    吉林: 488.8,
    黑龙江: 843.7,
    上海: 61.0,
    江苏: 741.7,
    浙江: 1245.2,
    安徽: 2109.0,
    福建: 2109.0,
    江西: 2221.1,
    山东: 220.3,
    河南: 337.3,
    湖北: 1498.0,
    湖南: 2196.6,
    广东: 2458.6,
    广西: 2178.6,
    海南: 489.9,
    重庆: 604.9,
    四川: 2340.9,
    贵州: 1066.1,
    云南: 2088.9,
    西藏: 4642.2,
    陕西: 271.5,
    甘肃: 168.4,
    青海: 612.7,
    宁夏: 9.6,
    新疆: 1093.4,
};
var d2 = {
    北京市: 29.8,
    天津: 13.0,
    河北: 138.3,
    山西: 130.2,
    内蒙古: 309.9,
    辽宁: 186.3,
    吉林: 394.4,
    黑龙江: 742.5,
    上海: 34.0,
    江苏: 392.9,
    浙江: 895.3,
    安徽: 784.9,
    福建: 1055.6,
    江西: 1655.1,
    山东: 225.6,
    河南: 423.1,
    湖北: 1248.8,
    湖南: 1912.4,
    广东: 1786.6,
    广西: 2388.0,
    海南: 383.9,
    重庆: 656.1,
    四川: 2467.1,
    贵州: 1051.5,
    云南: 2202.6,
    西藏: 4749.9,
    陕西: 449.1,
    甘肃: 238.9,
    青海: 785.7,
    宁夏: 10.8,
    新疆: 1018.6,
};
var d3 = {
    北京市: 35.5,
    天津: 17.6,
    河北: 164.1,
    山西: 121.9,
    内蒙古: 461.5 ,
    辽宁: 235.4,
    吉林: 481.2,
    黑龙江: 1011.4,
    上海: 38.7,
    江苏: 378.4,
    浙江: 866.2,
    安徽: 835.8,
    福建: 778.5,
    江西: 1149.1,
    山东: 343.3,
    河南: 339.8,
    湖北: 857.0,
    湖南: 1342.9,
    广东: 1895.1,
    广西: 1831.0,
    海南: 418.1,
    重庆: 524.2,
    四川: 2952.6,
    贵州:  978.7,
    云南: 2206.5,
    西藏: 4658.2,
    陕西: 371.4,
    甘肃: 333.3,
    青海: 961.9,
    宁夏: 14.7,
    新疆: 858.8,
};
var d4 = {
    北京市: 24.6,
    天津: 8.1,
    河北: 113.5,
    山西: 97.3,
    内蒙古: 447.9,
    辽宁: 256.0,
    吉林: 506.1,
    黑龙江: 1511.4,
    上海: 48.3,
    江苏: 231.7,
    浙江: 1321.5,
    安徽: 539.9,
    福建: 1363.9,
    江西: 2051.6,
    山东: 195.2,
    河南: 168.6,
    湖北: 613.7,
    湖南: 2098.3,
    广东: 2068.2,
    广西: 2105.1,
    海南: 252.3,
    重庆: 498.1,
    四川: 2748.9,
    贵州: 1117.0,
    云南: 1533.8,
    西藏: 4496.9,
    陕西: 495.3,
    甘肃: 325.9,
    青海: 919.3,
    宁夏: 12.6,
    新疆: 870.1,
};
var d5 = {
    北京市: 25.8,
    天津: 13.3,
    河北: 146.3,
    山西: 115.2,
    内蒙古: 503.9,
    辽宁: 397.1,
    吉林: 586.2,
    黑龙江: 1419.9,
    上海: 58.6,
    江苏: 543.4,
    浙江: 1026.6,
    安徽: 1280.4,
    福建: 760.3,
    江西: 1685.6,
    山东: 375.3,
    河南: 408.6,
    湖北: 1754.7,
    湖南: 2118.9,
    广东: 1626,
    广西: 2114.8,
    海南: 263.6,
    重庆: 766.9,
    四川: 3237.3,
    贵州: 1328.6,
    云南: 1799.2,
    西藏: 4597.3,
    陕西: 419.6,
    甘肃: 408,
    青海: 1011.9,
    宁夏: 11,
    新疆: 801,
};
var colors = ['#1DE9B6', '#EEDD78', '#FFFF00', '#FFDB5C', '#37A2DA', '#04B9FF'];
var colorIndex = 0;
$(function () {
    var year = ['2016', '2017', '2018', '2019', '2020', ]
    var mapData = [[], [], [], [], [], []];

    /*柱子Y名称*/
    var categoryData = [];
    var barData = [];

    for (var key in geoCoordMap) {
        mapData[0].push({
            year: '2016',
            name: key,
            value: d1[key] ,
            value1: d1[key],
        });
        mapData[1].push({
            year: '2017',
            name: key,
            value: d2[key] ,
            value1: d2[key],
        });
        mapData[2].push({
            year: '2018',
            name: key,
            value: d3[key] ,
            value1: d3[key] ,
        });
        mapData[3].push({
            year: '2019',
            name: key,
            value: d4[key] ,
            value1: d4[key] ,
        });
        mapData[4].push({
            year: '2020',
            name: key,
            value: d5[key] ,
            value1: d5[key] ,
        });
   
    }

    for (var i = 0; i < mapData.length; i++) {
        mapData[i].sort(function sortNumber(a, b) {
            return a.value - b.value;
        });
        barData.push([]);
        categoryData.push([]);
        for (var j = 0; j < mapData[i].length; j++) {
            barData[i].push(mapData[i][j].value1);
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

        optionXyMap01 = {
            timeline: {
                data: year,
                axisType: 'category',
                autoPlay: true,
                playInterval: 1500, //时间间隔
                left: '20%',
                right: '10%',
                bottom: '3%',
                width: '60%',
                label: {
                    normal: {
                        textStyle: {
                            color: '#fff',
                        },
                    },
                    emphasis: {
                        textStyle: {
                            color: '#ddd',
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
                        color: '#333',
                        borderColor: '#555',
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
                            color: 'rgba(255,255,200,1)', //hover颜色
                        },
                    },
                },
                visualMap: {
                    min: 0,
                    max: 5000,
                    left:'5%',
                    top: 'bottom',
                    text: ['高', '低'],
                    textStyle: {
                        color: 'black',
                    },
                    calculable: true,
                    colorLightness: [1, 150],
                    color: ['#2828FF', '#0066CC', '#97CBFF'],
                    dimension: 0,
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
                            borderColor: 'rgba(10, 50, 60, 0.8)',
                            borderWidth: 1,
                            areaColor: {
                                type: 'white',
                                x: 0.6,
                                y: 0.5,
                                r: 0.8,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: 'rgba(10, 10, 60,0.5)', // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(30, 40, 38,1)', // 100% 处的颜色
                                    },
                                ],
                                globalCoord: false, // 缺省为 false
                            },
                            shadowColor: 'rgba(0, 0, 200, 9)',
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
            var statistic_name = '水资源总量(亿立方米)';
            optionXyMap01.options.push({
                backgroundColor: '#D1EEEE',

                title: [
                    {
                        text: '2016-2020年各省级行政区水资源总量',
                        left: '30%',
                        top: '3%',
                        textStyle: {
                            color: '#000079',
                            fontSize: 26,
                        },
                    },
                    {
                        id: 'statistic',
                        text: statistic_name,
                        left: '80%',
                        top: '8%',
                        textStyle: {
                            color: '#339',
                            fontSize: 18,
                        },
                    },
                ],
                grid: {
                    right: 50,
                    top: 85,
                    bottom: 1,
                    width: '200',
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
                        margin: 5,
                        textStyle: {
                            color: '#242424',
                        },
                    },
                },
                yAxis: {
                    type: 'category',
                    nameGap: 16,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#242424',
                        },
                    },
                    axisTick: {
                        show: false,
                        lineStyle: {
                            color: '#242424',
                        },
                    },
                    axisLabel: {
                        interval: 0,
                        textStyle: {
                            color: '#242424',
                        },
                    },
                    data: categoryData[n],
                },

                series: [
                    {
                        //文字和标志
                        name: 'water',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: convertData(mapData[n]),
                        symbolSize: function (val) {
                            return val[2] / 100;
                        },
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'left',
                                show: true,
                            },
                            emphasis: {
                                show: true,
                            },
                        },
                        itemStyle: {
                            normal: {
                                color: colors[colorIndex][n],
                            },
                        },
                    },
                    //地图
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
                                    color: '#242424',
                                },
                            },
                        },
                        roam: true,
                        itemStyle: {
                            normal: {
                                areaColor: '#00C5CD',
                                borderColor: '#0000CD',
                            },
                            emphasis: {
                                areaColor: '#242424',
                            },
                        },
                        animation: false,
                        data: mapData,
                    },
                   
                    //地图线的动画效果

                    //柱状图
                    {
                        zlevel: 1.5,
                        type: 'bar',
                        barMaxWidth: 30,
                        symbol: 'none',
                        itemStyle: {
                            normal: {
                                color: colors[n],
                                barBorderRadius: [255, 30, 200, 1],
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
