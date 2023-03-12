var uploadedDataURL = "/asset/get/s/data-1559032707973-kPCDcrc0f.json";


var colors = [
    ["#1DE9B6", "#F46E36", "#04B9FF", "#5DBD32", "#FFC809", "#FB95D5", "#BDA29A", "#6E7074", "#546570", "#C4CCD3"],
    ["#37A2DA", "#67E0E3", "#32C5E9", "#9FE6B8", "#FFDB5C", "#FF9F7F", "#FB7293", "#E062AE", "#E690D1", "#E7BCF3", "#9D96F5", "#8378EA", "#8378EA"],
    ["#DD6B66", "#759AA0", "#E69D87", "#8DC1A9", "#EA7E53", "#EEDD78", "#73A373", "#73B9BC", "#7289AB", "#91CA8C", "#F49F42"],
];

var colorIndex = 0;
$(function() {
    var geoCoordMap = {
    '北碚': [106.50,29.81],
    '城口': [108.6520475,31.90676506],
    '大足': [105.7692868,29.65392091],
    '垫江': [107.4004904,30.24903189],
    '丰都': [107.7461781,29.91492542],
    '奉节': [109.3758974,30.98202119],
    '合川': [106.2833096,30.09766756],
    '江北': [106.6214893,29.64821182],
    '江津': [106.2647885,28.98483627],
    '开州': [108.1818518,31.29466521],
    '南岸': [106.6379653,29.47704825],
    '南川': [107.1406799,29.12047319],
    '彭水': [108.2573507,29.36444557],
    '綦南': [106.8036647,28.96872774],
    '黔江': [108.7559876,29.44290625],
    '石柱': [108.2438988,30.07512144],
    '市区': [106.4377397,29.52648606],
    '铜梁': [106.0616035,29.81036286],
    '潼南': [105.8116920, 30.13795513],
    '万州': [108.0828876,30.73353669],
    '巫山': [109.8779184,31.09568937],
    '巫溪': [109.2970739,31.48090521],
    '武隆': [107.6831317,29.36831708],
    '秀山': [108.9997005,28.49462861],
    '永川': [105.8347961,29.41042605],
    '酉阳': [108.7911679,28.88330557],
    '云阳': [108.7533957,30.96025875],
    '长寿': [107.24,29.95],
    '忠县': [107.9279014,30.33522658],
    '川东': [107.3488646,29.68233099]
    };

    var voltageLevel = ["全部", "35kV", "110kV", "220kV", "500kV"];
    var mapData = [
        [], [], [], [], [], [], [],[], [], [], [],[], [], [], [],
        [], [], [], [], [], [], [], [], [],
        [], [], [], [], [], [], [], [], [], [], [], []
        ];

    /*柱子Y名称*/
    var categoryData = [];
    var barData = [];
    for (var key in geoCoordMap) {
        categoryData.push(key);
        mapData[0].push({
            "year": 2014,
            "name": key,
            "value": randomNum(100, 300)
        });
        mapData[1].push({
            "year": 2015,
            "name": key,
            "value": randomNum(100, 300)
        });
        mapData[2].push({
            "year": 2016,
            "name": key,
            "value": randomNum(100, 300)
        });
        mapData[3].push({
            "year": 2017,
            "name": key,
            "value": randomNum(100, 300)
        });
        mapData[4].push({
            "year": 2018,
            "name": key,
            "value": randomNum(100, 300)
        });
        mapData[5].push({
            "year": 2019,
            "name": key,
            "value": randomNum(100, 300)
        });
    }
    for (var i = 0; i < mapData.length; i++) {
        barData.push([]);
        for (var j = 0; j < mapData[i].length; j++) {
            barData[i].push(mapData[i][j].value)
        }
    }
    $.getJSON(uploadedDataURL, function(geoJson) {
        echarts.registerMap('xianyang3', geoJson);
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

        var convertToLineData = function(data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                var fromCoord = geoCoordMap[dataItem.name];
                var toCoord = [106.55, 29.57]; //市区
                if (fromCoord && toCoord) {
                    res.push([{
                        coord: fromCoord,
                        value: dataItem.value
                    }, {
                        coord: toCoord,
                    }]);
                }
            }
            return res;
        };

        optionXyMap01 = {
            timeline: {
                data: voltageLevel,
                axisType: 'category',
                autoPlay: true,
                playInterval: 3000,
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
                    map: 'xianyang3',
                    roam: true,
                    zoom: 1,
                    center: [108.5, 30],  //中心点
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
                                r: 0.5,
                                colorStops: [{
                                    offset: 0,
                                    color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            // shadowColor: 'rgba(128, 217, 248, 1)',
                            // shadowColor: 'rgba(255, 255, 255, 1)',
                            // shadowOffsetX: -2,
                            // shadowOffsetY: 2,
                            // shadowBlur: 10
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
        for (var n = 0; n < voltageLevel.length; n++) {
            optionXyMap01.options.push({
                backgroundColor: '#142037',
                title: [{
                        text: '地图',
                         left: 'center',
                         textStyle: {
                             color: '#fff'
                         }
                    },
                    {
                        id: 'statistic',
                        text: voltageLevel[n] + "变电站统计情况",
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
                    data: categoryData
                },
                series: [{
                        //文字和标志
                        name: 'light',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: convertData(mapData[n]),
                        symbolSize: function(val) {
                            return val[2] / 10;
                        },
                        // label: {
                        //     normal: {
                        //         formatter: '{b}',
                        //         position: 'right',
                        //         show: true
                        //     },
                        //     emphasis: {
                        //         show: true
                        //     }
                        // },
                        itemStyle: {
                            normal: {
                                color: colors[colorIndex][n]
                            }
                        }
                    },
                    {
                        type: 'map',
                        map: 'xianyang3',
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
                        //  name: 'Top 5',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        data: convertData(mapData[n].sort(function(a, b) {
                            return b.value - a.value;
                        }).slice(0, 20)),
                        symbolSize: function(val) {
                            return val[2] / 100;
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
                                shadowBlur: 5,
                                shadowColor: colors[colorIndex][n]
                            }
                        },
                        zlevel: 1
                    },
                    // {
                    //     type: 'lines',
                    //     zlevel: 2,
                    //     effect: {
                    //         show: true,
                    //         period: 4, //箭头指向速度，值越小速度越快
                    //         trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                    //         symbol: 'arrow', //箭头图标
                    //         symbolSize: 2, //图标大小
                    //     },
                    //     lineStyle: {
                    //         normal: {
                    //             color: colors[colorIndex][n],
                    //             width: 1, //尾迹线条宽度
                    //             opacity: 1, //尾迹线条透明度
                    //             curveness: .3 //尾迹线条曲直度
                    //         }
                    //     },
                    //     data: convertToLineData(mapData[n])
                    // },
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


function randomNum(minNum, maxNum) {
    let res = null;
    switch (arguments.length) {
        case 1:
            res = parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            res=  parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            res =  0;
            break;
    }
    return res;
}