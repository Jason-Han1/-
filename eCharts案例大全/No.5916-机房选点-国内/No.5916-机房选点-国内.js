// 国内节点

var uploadedDataURL = "/asset/get/s/data-1528971808162-BkOXf61WX.json";

//如果想要修改，请点击上方克隆，然后在自己的版本上修改，不要在lz的版本上改！！

var geoGpsMap = {
    '1': [125.8154, 44.2584],
    '2': [125.8154, 44.2584],
    '3': [117.1582, 36.8701],
    '4': [117.1582, 36.8701],
};
var geoCoordMap = {
    '沈阳市': [123.43, 41.8],
    '济南市': [116.98, 36.67],
    '青岛市': [120.38, 36.07],
    '南京市': [118.78, 32.07],
    '无锡市': [120.3, 31.57],
    '郑州市': [113.62, 34.75],
    '武汉市': [114.3, 30.6],
    '石家庄市': [114.52, 38.05],
    '西安市': [108.93, 34.27],
    '重庆市': [106.55, 29.57],
    '杭州市': [120.15, 30.28],
    '合肥市': [117.25, 31.83],
    '福州市': [119.3, 26.08],
    '宁波市': [121.55, 29.88],
    '东莞市': [113.75, 23.05],
    "芜湖市": [118.38, 31.33],
    "昆明市": [102.72, 25.05],
    "呼和浩特市": [111.73, 40.83],
    "天津市": [117.2, 39.12],
    "上海市": [121.47, 31.23],
    "长沙市": [112.93, 28.23],
    "北京市": [116.4, 39.9],
    "太原市": [112.55, 37.87],
    "深圳市": [114.05, 22.55],
    "广州市": [113.27, 23.13],
    "南宁市": [108.37, 22.82],
    "成都市": [104.07, 30.67],
    "南昌市": [115.85, 28.68],
    "淮南市": [117.0, 32.63],
    "泉州市": [118.67, 24.88]
};

// 电信节点
var d1 = ["芜湖市", "石家庄市", "昆明市", "呼和浩特市", "宁波市", "天津市", "上海市", "长沙市", "北京市", "太原市", "深圳市", "广州市", "南宁市", "成都市", "南昌市"]
// 联通节点
var d3 = ["沈阳市", "合肥市", "南昌市", "郑州市", "东莞市", "天津市", "上海市", "长沙市", "北京市", "太原市", "深圳市", "广州市", "南宁市", "成都市", "南昌市"]
// 移动节点
var d2 = ["淮南市", "南京市", "杭州市", "泉州市", "武汉市", "上海市", "长沙市", "北京市", "太原市", "深圳市", "广州市", "南宁市", "成都市", "南昌市"]
// 三通节点
var d4 = ["沈阳市", "济南市", "青岛市", "南京市", "无锡市", "郑州市", "武汉市", "石家庄市", "西安市", "重庆市", "杭州市", "合肥市", "福州市", "宁波市", "东莞市"]

var colors = [
    ["#FFDB5C", "#FFDB5C", "#FFDB5C", "#FFDB5C", "#04B9FF", "#04B9FF"],
    ["#1DE9B6", "#F46E36", "#04B9FF", "#5DBD32", "#FFC809", "#FB95D5", "#BDA29A", "#6E7074", "#546570", "#C4CCD3"],
    ["#37A2DA", "#67E0E3", "#32C5E9", "#9FE6B8", "#FFDB5C", "#FF9F7F", "#FB7293", "#E062AE", "#E690D1", "#E7BCF3", "#9D96F5", "#8378EA", "#8378EA"],
    ["#DD6B66", "#759AA0", "#E69D87", "#8DC1A9", "#EA7E53", "#EEDD78", "#73A373", "#73B9BC", "#7289AB", "#91CA8C", "#F49F42"],
];
var colorIndex = 0;
$(function() {
    var year = ["中国电信", "中国移动", "中国联通", "三通节点"];
    var mapData = [
        d1.map(item => {
            return {
                year: "中国电信",
                name: item,
                value: 25.2,
                value1: 25.2
            }
        }),
        d2.map(item => {
            return {
                year: "中国移动",
                name: item,
                value: 25.2,
                value1: 25.2
            }
        }),
        d3.map(item => {
            return {
                year: "中国联通",
                name: item,
                value: 25.2,
                value1: 25.2
            }
        }),
        d4.map(item => {
            return {
                year: "三通节点",
                name: item,
                value: 25.2,
                value1: 25.2
            }
        })
    ];


    for (var key in geoCoordMap) {
        // mapData[0].push({
        //     "year": '中国电信',
        //     "name": key,
        //     "value": 25.2,
        //     "value1": 25.2,
        // });
        mapData[1].push({
            "year": '中国移动',
            "name": key,
            "value": 25.2,
            "value1": 25.2,
        });
        mapData[2].push({
            "year": '中国联通',
            "name": key,
            "value": 25.2,
            "value1": 25.2,
        });
        mapData[3].push({
            "year": '三通节点',
            "name": key,
            "value": 25.2,
            "value1": 25.2,
        });
    }

    /*柱子Y名称*/
    var categoryData = [];
    for (var i = 0; i < mapData.length; i++) {
        mapData[i].sort(function sortNumber(a, b) {
            return a.value - b.value
        });
        categoryData.push([]);
        for (var j = 0; j < mapData[i].length; j++) {
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
            // 底部tab切换
            timeline: {
                data: year,
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
            // 地图叠加显示
            optionXyMap01.options.push({
                backgroundColor: '#013954',
                title: {
                    text: year[n],
                    subtext: '',
                    left: 'center',
                    top: '15%',
                    textStyle: {
                        color: '#fff',
                        fontSize: 25
                    }
                },
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
                    name: 'TOP 20',
                    nameGap: 16,
                    show: false,
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
                    data: []
                },

                series: [
                    //地图？
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
                    //地图点的动画效果
                    {
                        //  name: 'Top 5',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        data: convertData(mapData[n].sort(function(a, b) {
                            return b.value - a.value;
                        }).slice(0, 20)),
                        symbolSize: function(val) {
                            return val[2] / 10;
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
                    }
                ]
            })
        }
        myChart.setOption(optionXyMap01);
    });
});