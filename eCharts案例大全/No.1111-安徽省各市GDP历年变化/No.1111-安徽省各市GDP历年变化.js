var uploadedDataURL = "/asset/get/s/data-1482909768458-HJlU_yWBe.json";

var t = 1; //流入流出控制
var r = 1; //右侧流入流出文字控制

var geoCoordMap = {
    '合肥市': [117.25, 31.83],
    '滁州市': [118.32, 32.3],
    '芜湖市': [118.43, 31.35],
    '阜阳市': [115.38, 32.89],
    '蚌埠市': [117.39, 32.92],
    '淮南市': [116.99, 32.63],
    '马鞍山市': [118.5, 31.71],
    '安庆市': [117.05, 30.52],
    '黄山市': [118.33, 29.71],
    '铜陵市': [117.81, 30.94],
    '宿州市': [116.98, 33.64],
    '淮北市': [116.8, 33.9],
    '六安市': [116.51, 31.75],
    '池州市': [117.49, 30.66],
    '宣城市': [118.76, 30.94],
    '亳州市': [115.78, 33.84],
};
var d1 = {
    '合肥市': 3600,
    '芜湖市': 1600,
    '滁州市': 850,
    '阜阳市': 850,
    '安庆市': 1200,
    '马鞍山市':1090,
    '蚌埠市': 770,
    '宿州市': 780,
    '亳州市': 615,
    '六安市': 780,
    '宣城市': 670,
    '淮南市': 720.15,
    '淮北市': 560,
    '铜陵市': 580,
    '池州市': 360,
    '黄山市': 370,
};

var d2 = {
    '合肥市': 4164.34,
    '芜湖市': 1873.63,
    '滁州市': 970.7,
    '阜阳市': 962.5,
    '安庆市': 1359.7,
    '马鞍山市':1232.0,
    '蚌埠市': 890.2,
    '宿州市': 915.0,
    '亳州市': 715.7,
    '六安市': 918.2,
    '宣城市': 757.5,
    '淮南市': 781.8,
    '淮北市': 620.5,
    '铜陵市': 621.3,
    '池州市': 424.9,
    '黄山市': 424.9,
};

var d3 = {
    '合肥市': 4672.9,
    '芜湖市': 2099.53,
    '滁州市': 1086.1,
    '阜阳市': 1062.5,
    '安庆市': 1418.2,
    '马鞍山市':1293.0,
    '蚌埠市': 1007.9,
    '宿州市': 842.8,
    '亳州市': 791.1,
    '六安市': 1010.3,
    '宣城市': 842.8,
    '淮南市': 819.4,
    '淮北市': 703.7,
    '铜陵市': 680.6,
    '池州市': 462.2,
    '黄山市': 470.3,
};
var d4 = {
    '合肥市': 5158,
    '芜湖市': 2308,
    '滁州市': 1185,
    '阜阳市': 1146,
    '安庆市': 1544,
    '马鞍山市':1357,
    '蚌埠市': 1108,
    '宿州市': 1126,
    '亳州市': 851,
    '六安市': 1086,
    '宣城市': 913,
    '淮南市': 789,
    '淮北市':748 ,
    '铜陵市': 716,
    '池州市': 504,
    '黄山市': 507,
};

var d5 = {
    '合肥市': 5660.3,
    '芜湖市': 2457.3,
    '滁州市': 1305.7,
    '阜阳市': 1267.4,
    '安庆市': 1613.2,
    '马鞍山市':1365.3,
    '蚌埠市': 1253.1,
    '宿州市': 1235.8,
    '亳州市': 942.6,
    '六安市': 1143.4,
    '宣城市': 971.5,
    '淮南市': 770.6,
    '淮北市': 760.4,
    '铜陵市': 721.3,
    '池州市': 544.7,
    '黄山市': 530.6,
};

var d6 = {
   '合肥市': 6200,
    '芜湖市': 2660,
    '滁州市': 1418,
    '阜阳市': 1401.9,
    '安庆市': 1500,
    '马鞍山市':1440,
    '蚌埠市': 1385.8,
    '宿州市': 1320,
    '亳州市': 1030,
    '六安市': 1108.1,
    '宣城市': 1050,
    '淮南市': 945,
    '淮北市': 780,
    '铜陵市': 960,
    '池州市': 583,
    '黄山市': 576.8,
};

var d7 = {
    '合肥市': 7213.45,
    '芜湖市': 3065.52,
    '滁州市': 1607.7,
    '阜阳市': 1571.1,
    '安庆市': 1708.6,
    '马鞍山市':1738.09,
    '蚌埠市': 1550.66,
    '宿州市': 1503.91,
    '亳州市': 1184.0,
    '六安市': 1218.7,
    '宣城市': 1188.6,
    '淮南市': 1111.5,
    '淮北市': 929.0,
    '铜陵市': 1163.9,
    '池州市': 654.1,
    '黄山市': 645.7,
};
var d8 = {
    '合肥市': 7822.9,
    '芜湖市': 3278.53,
    '滁州市': 1801.7,
    '阜阳市': 1759.5,
    '安庆市': 1900,
    '马鞍山市':1918.1,
    '蚌埠市': 1714.7,
    '宿州市': 1630.22,
    '亳州市': 1277.19,
    '六安市': 1288.1,
    '宣城市': 1317.2,
    '淮南市': 1133.30,
    '淮北市': 985.2,
    '铜陵市': 1222.4,
    '池州市': 684.9,
    '黄山市': 677.9,
};
var d9 = {
    '合肥市':9409.4 ,
    '芜湖市': 3618.26,
    '滁州市': 2909.1,
    '阜阳市': 2705,
    '安庆市': 2380.5,
    '马鞍山市':2111,
    '蚌埠市': 2057.2,
    '宿州市': 1978.75,
    '亳州市': 1749,
    '六安市': 1620.1,
    '宣城市': 1561.3,
    '淮南市': 1296.2,
    '淮北市': 1077.9,
    '铜陵市': 960.2,
    '池州市': 831.7,
    '黄山市': 818,
};
var d10 = {
    '合肥市': 10045.72 ,
    '芜湖市': 3753.02 ,
    '滁州市': 3032.1,
    '阜阳市': 2805.2,
    '安庆市': 2467.7,
    '马鞍山市':2186.9,
    '蚌埠市': 2082.7,
    '宿州市': 2045,
    '亳州市': 1806.01,
    '六安市': 1669.5,
    '宣城市': 1607.5,
    '淮南市': 1337.2,
    '淮北市': 1119.1,
    '铜陵市': 1003.7,
    '池州市': 868.9,
    '黄山市': 850.4,
};

var colors = ["#1DE9B6", "#EEDD78", "#FFFF00", "#FFDB5C", "#37A2DA", "#04B9FF"];
var colorIndex = 0;
$(function() {

    var year = [ "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019","2020"];
    var mapData = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
    ];

    /*柱子Y名称*/
    var categoryData = [];
    var barData = [];

    for (var key in geoCoordMap) {
        mapData[0].push({
            "year": '2011',
            "name": key,
            "value": d1[key] / 10,
            "value1": d1[key] / 19,
        });
        mapData[1].push({
            "year": '2012',
            "name": key,
            "value": d2[key] / 10,
            "value1": d2[key] / 10,
        });
        mapData[2].push({
            "year": '2013',
            "name": key,
            "value": d3[key] / 10,
            "value1": d3[key] / 10,
        });
        mapData[3].push({
            "year": '2014',
            "name": key,
            "value": d4[key] / 10,
            "value1": d4[key] / 10,
        });
        mapData[4].push({
            "year": '2015',
            "name": key,
            "value": d5[key] / 10,
            "value1": d5[key] / 10,
        });
        mapData[5].push({
            "year": '2016',
            "name": key,
            "value": d6[key] / 10,
            "value1": d6[key] / 10,
        });
        mapData[6].push({
            "year": '2017',
            "name": key,
            "value": d7[key] / 10,
            "value1": d7[key] / 10,
        });
        mapData[7].push({
            "year": '2018',
            "name": key,
            "value": d8[key] / 10,
            "value1": d8[key] / 10,
        });
        mapData[8].push({
            "year": '2019',
            "name": key,
            "value": d9[key] / 10,
            "value1": d9[key] / 10,
        });
        mapData[9].push({
            "year": '2020',
            "name": key,
            "value": d10[key] / 10,
            "value1": d10[key] / 10,
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
        // echarts.registerMap(nameMap, gdMap);
        echarts.registerMap('anhui', geoJson);
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
                var fromCoord = gps; //郑州
                //  var toCoord = geoGps[Math.random()*3];
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
            if (t === 0) {
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
                playInterval: 1500,
                left: '10%',
                right: '10%',
                bottom: '3%',
                width: '80%',
                //  height: null,
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
                    min: 300,
                    max: 12000,
                    left: 'left',
                    top: 'bottom',
                    text: ['高', '低'],
                    textStyle: {
                        color: 'white',
                    },
                    calculable: true,
                    colorLightne: [0.8, 100],
                    color: ['#c05050', '#e5cf0d', '#5ab1ef'],
                    dimension: 0,
                },
                geo: {
                    show: true,
                    map: 'anhui',
                    roam: true,
                    zoom: 1,
                    center: [117.28492, 31.861184],
                    label: {
                        emphasis: {
                            show: true,
                        },
                    },
                    itemStyle: {
                        normal: {
                            borderColor: 'rgba(147, 235, 248, 1)',
                            borderWidth:1,
                            areaColor: {
                                type: 'radial',
                                x: 0.5,
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
            var statistic_name = '安徽省各市GDP';
            optionXyMap01.options.push({
                backgroundColor: '#555555',

                title: [
                    {
                        text: '安徽省各市GDP历年变化(单位：亿元）',
                        //subtext: '   ',
                        left: '25%',
                        top: '1%',
                        textStyle: {
                            color: '#fff',
                            fontSize: 25,
                        },
                    },
                    {
                        id: 'statistic',
                        text: statistic_name,
                        left: '75%',
                        top: '3%',
                        textStyle: {
                            color: '#fff',
                            fontSize: 16,
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

                series: [{
                        //文字和标志
                        name: 'light',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: convertData(mapData[n]),
                        symbolSize: function (val) {
                            return val[2] / 20;
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
                                color: colors[colorIndex][n],
                            },
                        },
                    },
                    //地图?
                    {
                        type: 'map',
                        map: 'anhui',
                        geoIndex: 0,
                        //aspectScale: 0.75, //长宽比
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
                            return val[2] /20;
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
                                color: '#031525',
                                shadowBlur: 100,
                                shadowColor: colors[colorIndex][n],
                            },
                        },
                        zlevel: 1,
                    },
                    //地图线的动画效果

                    //柱状图
                    {
                        zlevel: 1,
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
            if (r === 0) {
                r = 1;
            } else {
                r = 0;
            }
        }
        myChart.setOption(optionXyMap01);
    });
});
