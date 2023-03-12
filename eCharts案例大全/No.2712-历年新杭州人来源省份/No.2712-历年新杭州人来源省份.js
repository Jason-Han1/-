var uploadedDataURL = "/asset/get/s/data-1528971808162-BkOXf61WX.json";

var geoGpsMap = [120.18897, 30.267422]; //线形指向坐标

var geoCoordMap = {
    "天津": [117.4219, 39.4189],
    "山东": [117.1582, 36.8701],
    "辽宁": [123.1238, 42.1216],
    "湖北": [114.3896, 30.6628],
    "重庆": [108.384366, 30.439702],
    "四川": [103.9526, 30.7617],
    "广东": [113.12244, 23.009505],
    "江苏": [118.8062, 31.9208],
    '北京': [116.4551, 40.2539],
    '上海': [121.4648, 31.2891],


};

var d1 = {
'上海': 15,
'北京': 10,
'江苏': 4,
'湖南': 4,
'四川': 2,
'辽宁': 1,
'重庆': 1,
'河北': 1,
'湖北': 1,

};

var d2 = {
'上海': 76,
'北京': 40,
'江苏': 10,
'四川': 9,
'湖北': 9,
'广东': 8,
'福建': 6,
'重庆': 4,
'天津': 3,
'安徽': 3,

};

var d3 = {
'上海': 171,
'北京': 114,
'江苏': 45,
'广东': 24,
'四川': 20,
'辽宁': 16,
'重庆': 14,
'湖北': 10,
'山东': 9,
'安徽': 9,

};

var d4 = {
'上海': 377,
'北京': 336,
'江苏': 154,
'广东': 90,
'四川': 57,
'重庆': 50,
'湖北': 43,
'山东': 40,
'辽宁': 34,
'安徽': 34,

};

var d5 = {
'北京': 293,
'上海': 244,
'江苏': 172,
'广东': 133,
'四川': 61,
'辽宁': 46,
'湖北': 46,
'山东': 44,
'重庆': 40,
'天津': 33,

};



var colors = ["#1DE9B6", "#EEDD78", "#32C5E9", "#FFDB5C", "#37A2DA", "#04B9FF"];
var colorIndex = 0;
$(function() {

    var year = ["2017", "2018", "2019", "2020", "2021"];
    var mapData = [
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
            "year": '2017',
            "name": key,
            "value": d1[key],
            "value1": d1[key],
        });
        mapData[1].push({
            "year": '2018',
            "name": key,
            "value": d2[key],
            "value1": d2[key],
        });
        mapData[2].push({
            "year": '2019',
            "name": key,
            "value": d3[key],
            "value1": d3[key],
        });
        mapData[3].push({
            "year": '2020',
            "name": key,
            "value": d4[key],
            "value1": d4[key],
        });
        mapData[4].push({
            "year": '2021',
            "name": key,
            "value": d5[key],
            "value1": d5[key],
        });
    }

    for (var i = 0; i < mapData.length; i++) {
        mapData[i].sort(function sortNumber(a, b) {
            return a.value - b.value //柱状图排序
        });
        barData.push([]);
        categoryData.push([]);
        for (var j = 0; j < mapData[i].length; j++) {
            barData[i].push(mapData[i][j].value1);
            categoryData[i].push(mapData[i][j].name);
        }
    }

    $.getJSON(uploadedDataURL, function(geoJson) {
        $('body').css({
            'background': 'url(https://corgixuoos.oss-cn-shanghai.aliyuncs.com/soc/0623%E4%BF%AE%E6%94%B9%E5%A4%A7%E5%B1%8F-%E6%95%B4%E4%BD%93-Recovered.png) repeat-y', //'#2a6d87',
            'position': 'fixed',
            'top': 0,
            'left': 0,
            'width': '100%',
            'height': '100%',
            'background-size': 'cover',
            '-webkit-background-size': 'cover',
            '-o-background-size': 'cover',
            'background-position': 'center 0',
            //'writing-mode': 'vertical-rl'
        });

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

        var convertToLineData = function(data, gps) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                var toCoord = geoCoordMap[dataItem.name];
                var fromCoord = gps; //郑州
                //  var toCoord = geoGps[Math.random()*3]; 
                if (fromCoord && toCoord)
                    res.push([{
                        coord: toCoord,
                    }, {
                        coord: fromCoord,
                        value: dataItem.value
                    }]);

            }

            return res;
        };

        optionXyMap01 = {
            timeline: {
                data: year,
                axisType: 'category',
                autoPlay: true,
                playInterval: 3000,//切换速度
                left: '10%',
                right: '10%',
                bottom: '3%',
                width: '80%',
                //  height: null,
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
                grid: { //柱状图控制
                    right: '5%',
                    top: '10%',
                    bottom: '10%',
                    width: '12%'
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
                visualMap: {
                    min: 0,
                    max: 80,
                    left: 'left',
                    top: 'bottom',
                    text: ['高', '低'],
                    textStyle: {
                        color: '#323232'
                    },
                    calculable: true,
                    colorLightness: [0.8, 100],
                    color: ['rgba(255, 80, 80, 1)', '#FFEB84', 'rgba(99,190,123, 0.8)'],
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
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderColor: 'rgba(0, 0, 0, 0.8)',//地图边框
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
                            shadowColor: 'rgba(255, 255, 255, 1)',
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
            var statistic_name = "籍贯分布（不含浙江）";
            optionXyMap01.options.push({
                backgroundColor: '#FFFFFF',
                title: [{
                        text: '历年新杭州人来源省份',
                        //subtext: '   ',
                        left: '35%',
                        top: '1%',
                        textStyle: {
                            color: '#000000',
                            fontSize: 30
                        }
                    },
                    {
                        id: 'statistic',
                        text: statistic_name,
                        left: '80%',
                        top: '6%',
                        textStyle: {
                            color: '#000000',
                            fontSize: 20,
                        }
                    }
                ],
                xAxis: { //x轴
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
                        margin: 1,
                        textStyle: {
                            color: '#000000'
                        }
                    },
                },
                yAxis: {
                    type: 'category',
                    //name: 'TOP 20',
                    nameGap: 16,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#000000'
                        }
                    },
                    axisTick: {
                        show: false,
                        lineStyle: {
                            color: '#000000'
                        }
                    },
                    axisLabel: {
                        interval: 0,
                        textStyle: {
                            color: '#000000'
                        }
                    },
                    data: categoryData[n]
                },

                series: [
                    //未知作用
                    {
                        //文字和标志
                        name: 'light',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: convertData(mapData[n]),
                        symbolSize: function(val) {
                            return 5;
                        },
                        label: {
                            normal: {
                                formatter: '{b}',
                                
                                fontSize : 14,
                                position: 'right',
                                show: true
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: colors[n]
                            }
                        }
                    },
                    //地图
                    {
                        type: 'map',
                        map: 'china',
                        geoIndex: 0,
                        aspectScale: 1, //长宽比
                        showLegendSymbol: false, // 存在legend时显示
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: false,
                                textStyle: {
                                    color: '#000000'
                                }
                            }
                        },
                        roam: true,
                        itemStyle: {
                            normal: {
                                areaColor: '#031525',
                                borderColor: '#000000',
                            },
                            emphasis: {
                                areaColor: '#2B91B7'
                            }
                        },
                        animation: false,
                        data: mapData
                    },
                    //地图点的动画效果
                    {
                        //  name: 'Top 5',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        data: convertData(mapData[n].sort(function(a, b) {
                            return b.value - a.value;
                        }).slice(0, 20)),
                        symbolSize: function(val) {
                            return  5;
                        },
                        showEffectOn: 'render',
                        rippleEffect: {
                            brushType: 'stroke'
                        },
                        hoverAnimation: false,
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: colors[n],
                                shadowBlur: 10,
                                shadowColor: colors[n]
                            }
                        },
                        zlevel: 1
                    },
                    //地图线的动画效果
                    {
                        type: 'lines',
                        zlevel: 2,
                        effect: {
                            show: true, //是否显示箭头
                            period: 3, //箭头指向速度，值越小速度越快
                            trailLength: 0.05, //特效尾迹长度[0,1]值越大，尾迹越长重
                            symbol: 'arrow', //箭头图标
                            symbolSize: 8, //图标大小
                        },
                        lineStyle: {
                            normal: {
                                color: colors[n],
                                width: 2, //尾迹线条宽度
                                opacity: 0.2, //尾迹线条透明度
                                curveness: .1 //尾迹线条曲直度
                            }
                        },
                        data: convertToLineData(mapData[n], geoGpsMap)
                    },
                    //柱状图
                    {
                        zlevel: 1.5,
                        type: 'bar',
                        barMaxWidth: 12,
                        symbol: 'none',
                        itemStyle: {
                            normal: {
                                color: colors[n],
                                barBorderRadius: [0, 30, 30, 0]
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