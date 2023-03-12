var uploadedDataURL = "/asset/get/s/data-1528971808162-BkOXf61WX.json";

var geoGpsMap = {
    '1': [113.12244, 23.009505],
    '2': [118.8062, 31.9208],
    '3': [118.8062, 31.9208],
    '4': [113.12244, 23.009505],
    '5': [113.12244, 23.009505],
    '6': [113.12244, 23.009505],
};
var geoCoordMap = {
    "江苏": [118.8062, 31.9208],
    '黑龙江': [127.9688, 45.368],
    '内蒙古': [110.3467, 41.4899],
    "吉林": [125.8154, 44.2584],
    '北京市': [116.4551, 40.2539],
    "辽宁": [123.1238, 42.1216],
    "河北": [114.4995, 38.1006],
    "天津": [117.4219, 39.4189],
    "山西": [112.3352, 37.9413],
    "陕西": [109.1162, 34.2004],
    "甘肃": [103.5901, 36.3043],
    "宁夏": [106.3586, 38.1775],
    "青海": [101.4038, 36.8207],
    "新疆": [87.9236, 43.5883],
    "四川": [103.9526, 30.7617],
    "重庆": [108.384366, 30.439702],
    "山东": [117.1582, 36.8701],
    "河南": [113.4668, 34.6234],
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

var d1 = {
    '江苏': 15520.7,
    '黑龙江': 4684.1,
    '内蒙古': 1828.3,
    '吉林': 3500.4,
    '北京市': 6506.3,
    '辽宁': 9417.2,
    '河北': 6072.5,
    '天津': 1830.0,
    '山西': 3416.8,
    '陕西': 7418.8,
    '甘肃': 3898.6,
    '宁夏': 918.6,
    '青海': 544.4,
    '新疆': 3717.6,
    '四川': 13827.4,
    '重庆': 6839.9,
    '山东': 7437.8,
    '河南': 14018.0,
    '安徽': 13955.3,
    '湖北': 10073,
    '浙江': 13014.5,
    '福建': 5871.9,
    '江西': 6779.5,
    '湖南': 16183.7,
    '贵州': 8657.1,
    '云南': 4908.0,
    '广东': 18078.9,
    '广西': 5190.4,
    '海南': 1421.0,
    '上海': 1331.7,

};

var d2 = {
    "江苏": 13830.8,
    '黑龙江': 4286.9,
    '内蒙古': 1612.5,
    "吉林": 3635.9,
    '北京市': 6284.9,
    "辽宁": 7369.2,
    "河北": 5327.4,
    "天津": 1834.5,
    "山西": 2961.2,
    "陕西": 6968.0,
    "甘肃": 4045.3,
    "宁夏": 9300,
    "青海": 5602,
    "新疆": 3594.8,
    "四川": 13596.9,
    "重庆": 6228.3,
    "山东": 6035.6,
    "河南": 12501.5,
    "安徽": 8681.0,
    "湖北": 10203.5,
    "浙江": 11136.9,
    "福建": 5164.6,
    "江西": 6241.8,
    "湖南": 1313.11,
    "贵州": 8754.1,
    "云南": 4879.4,
    "广东": 12392.6,
    "广西": 4910.1,
    '海南': 1372.8,
    '上海': 1384.4,

};

var d3 = {
    '江苏': 13358.0,
    '黑龙江': 3938.6,
    '内蒙古': 1573.5,
    '吉林': 3491.0,
    '北京市': 6151.9,
    '辽宁': 7363.2,
    '河北': 5070.1,
    '天津': 1837.7,
    '山西': 2637.4,
    '陕西': 6982.0,
    '甘肃': 4162.6,
    '宁夏': 8757,
    '青海': 5934,
    '新疆': 3214.8,
    '四川': 12374.6,
    '重庆': 6125.5,
    '山东': 6346.3,
    '河南': 12052.8,
    '安徽': 8110.6,
    '湖北': 10299.0,
    '浙江': 10501.8,
    '福建': 5164.9,
    '江西': 6287.6,
    '湖南': 12176,
    '贵州': 8946.4,
    '云南': 4651.9,
    '广东': 13034.5,
    '广西': 4869.9,
    '海南': 1391.2,
    '上海': 1441.6,



};

var d4 = {
    "江苏": 12678.3,
    '黑龙江': 3467,
    '内蒙古': 1486.7,
    "吉林": 3298.9,
    '北京市': 5887.1,
    "辽宁": 7248.3,
    "河北": 5002.3,
    "天津": 1744,
    "山西": 2515.5,
    "陕西": 6788,
    "甘肃": 4263.8,
    "宁夏": 7345,
    "青海": 6274,
    "新疆": 2708.3,
    "四川": 10909.3,
    "重庆": 6052.2,
    "山东": 6529.9,
    "河南": 11435.1,
    "安徽": 6910.5,
    "湖北": 10314.4,
    "浙江": 10449.7,
    "福建": 5113.4,
    "江西": 6299.7,
    "湖南": 11493.6,
    "贵州": 9180.3,
    "云南": 4462.2,
    "广东": 13741.8,
    "广西": 4857.8,
    '海南': 1466,
    '上海': 1548.5,
};

var d5 = {
    '江苏': 12061.2,
    '黑龙江': 3156.8,
    '内蒙古': 1326.8,
    '吉林': 3195.6,
    '北京市': 5893.5,
    '辽宁': 7134.3,
    '河北': 4734.6,
    '天津': 1745,
    '山西': 2383.7,
    '陕西': 7158.3,
    '甘肃': 4218.5,
    '宁夏': 6137,
    '青海': 6443,
    '新疆': 2120.4,
    '四川': 9856.9,
    '重庆': 6058.7,
    '山东': 6744.3,
    '河南': 11042.1,
    '安徽': 6334.7,
    '湖北': 9835,
    '浙江': 9838,
    '福建': 4810.5,
    '江西': 6068.6,
    '湖南': 10668,
    '贵州': 9302.5,
    '云南': 4148.4,
    '广东': 14214.4,
    '广西': 4793.1,
    '海南': 1438.3,
    '上海': 1584.5,



};

var d6 = {
    "江苏": 12029.8,
    '黑龙江': 2975.1,
    '内蒙古': 1215.8,
    "吉林": 3159.9,
    '北京市': 6297.7,
    "辽宁": 7026.6,
    "河北": 4473.3,
    "天津": 1767.9,
    "山西": 2230.5,
    "陕西": 7076.1,
    "甘肃": 4213.3,
    "宁夏": 5754,
    "青海": 6313,
    "新疆": 2027.6,
    "四川": 9166.8,
    "重庆": 6015.3,
    "山东": 6892,
    "河南": 10929.7,
    "安徽": 5927.5,
    "湖北": 8743.2,
    "浙江": 10189.3,
    "福建": 4576.1,
    "江西": 5806.9,
    "湖南": 10142.8,
    "贵州": 9375.6,
    "云南": 3838.1,
    "广东": 14232.6,
    "广西": 4708.5,
    '海南': 1418.7,
    '上海': 1644.2,
};

var colors = [
    ["#1DE9B6", "#1DE9B6", "#FFDB5C", "#FFDB5C", "#04B9FF", "#04B9FF"],
    ["#1DE9B6", "#F46E36", "#04B9FF", "#5DBD32", "#FFC809", "#FB95D5", "#BDA29A", "#6E7074", "#546570", "#C4CCD3"],
    ["#37A2DA", "#67E0E3", "#32C5E9", "#9FE6B8", "#FFDB5C", "#FF9F7F", "#FB7293", "#E062AE", "#E690D1", "#E7BCF3", "#9D96F5", "#8378EA", "#8378EA"],
    ["#DD6B66", "#759AA0", "#E69D87", "#8DC1A9", "#EA7E53", "#EEDD78", "#73A373", "#73B9BC", "#7289AB", "#91CA8C", "#F49F42"],
];
var colorIndex = 0;
$(function() {

    var year = ["2014", "2015", "2016", "2017", "2018", "2019"];
    var mapData = [
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
            "year": '2014',
            "name": key,
            "value": d1[key] / 100,
            "value1": d1[key] / 100,
        });
        mapData[1].push({
            "year": '2015',
            "name": key,
            "value": d1[key] / 100,
            "value1": d2[key] / 100,
        });
        mapData[2].push({
            "year": '2016',
            "name": key,
            "value": d3[key] / 100,
            "value1": d3[key] / 100,
        });
        mapData[3].push({
            "year": '2017',
            "name": key,
            "value": d3[key] / 100,
            "value1": d4[key] / 100,
        });
        mapData[4].push({
            "year": '2018',
            "name": key,
            "value": d5[key] / 100,
            "value1": d5[key] / 100,
        });
        mapData[5].push({
            "year": '2019',
            "name": key,
            "value": d5[key] / 100,
            "value1": d6[key] / 100,
        });
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

        var convertToLineData = function(data, gps) {
            var res = [];
            //流
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                var toCoord = geoCoordMap[dataItem.name];
                debugger;
                var fromCoord = gps;
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
                    center: [105, 34.6234],
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
                            areaColor: '#EEDD78',
                            borderWidth: 0
                        }
                    }
                },
            },
            options: []

        };

        for (var n = 0; n < year.length; n++) {

            optionXyMap01.options.push({
                backgroundColor: '#000000',
                title:


                    [{
                            text: '2014-2019年最大省际客运量',
                            subtext: '数据来源：国家统计局',
                            left: '15%',
                            top: '5%',
                            textStyle: {
                                color: '#70DB93',
                                fontSize: 25
                            }
                        },

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
                        show: false,
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
                    //未知作用
                    {
                        //文字和标志
                        name: 'light',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: convertData(mapData[n]),
                        symbolSize: function(val) {
                            return val[2] / 10;
                        },
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: true
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: colors[colorIndex][n]
                            }
                        }
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
                    },
                    //地图线的动画效果
                    {
                        type: 'lines',
                        zlevel: 2,
                        effect: {
                            show: true,
                            period: 4, //箭头指向速度，值越小速度越快
                            trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                            symbol: 'arrow', //箭头图标
                            symbolSize: 3, //图标大小
                        },
                        lineStyle: {
                            normal: {
                                color: colors[colorIndex][n],
                                width: 0.1, //尾迹线条宽度
                                opacity: 0.5, //尾迹线条透明度
                                curveness: .3 //尾迹线条曲直度
                            }
                        },
                        data: convertToLineData(mapData[n], geoGpsMap[n + 1])
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


function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
}