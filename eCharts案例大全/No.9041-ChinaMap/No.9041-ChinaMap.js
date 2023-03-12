var uploadedDataURL = "/asset/get/s/data-1528971808162-BkOXf61WX.json";
var geoGpsMap = {
    '1': [127.9688, 45.368],
    '2': [116.4551, 40.2539],
    '3': [109.1162, 34.2004],
    '4': [113.12244, 23.009505],
    '5': [87.9236, 43.5883],
    '6': [91.11, 29.97],
};
var geoCoordMap = {
    '台湾': [121.5135, 25.0308],
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
    "西藏": [91.11, 29.97],
    "四川": [103.9526, 30.7617],
    "重庆": [108.384366, 30.439702],
    "山东": [117.1582, 36.8701],
    // "河南": [113.4668, 34.6234],
    // "江苏": [118.8062, 31.9208],
    // "安徽": [117.29, 32.0581],
    // "湖北": [114.3896, 30.6628],
    // "浙江": [119.5313, 29.8773],
    // "福建": [119.4543, 25.9222],
    // "江西": [116.0046, 28.6633],
    // "湖南": [113.0823, 28.2568],
    // "贵州": [106.6992, 26.7682],
    // "云南": [102.9199, 25.4663],
    // "广东": [113.12244, 23.009505],
    // "广西": [108.479, 23.1152],
    // "海南": [110.3893, 19.8516],
    // '上海': [121.4648, 31.2891],

};
var colors = [
    ["#1DE9B6", "#F46E36", "#04B9FF", "#5DBD32", "#FFC809", "#FB95D5", "#BDA29A", "#6E7074", "#546570", "#C4CCD3"],
    ["#37A2DA", "#67E0E3", "#32C5E9", "#9FE6B8", "#FFDB5C", "#FF9F7F", "#FB7293", "#E062AE", "#E690D1", "#E7BCF3", "#9D96F5", "#8378EA", "#8378EA"],
    ["#DD6B66", "#759AA0", "#E69D87", "#8DC1A9", "#EA7E53", "#EEDD78", "#73A373", "#73B9BC", "#7289AB", "#91CA8C", "#F49F42"],
];
var colorIndex = 0;
 var years = ['2016', '2017', '2018'];
 var jdData = [
     ['香港同胞1', '澳门同胞1', '马来西亚1', '菲律宾1', '新加坡1', '泰  国1', '印  度1', '越  南1', '缅  甸1', '朝  鲜1', '巴基斯坦1', '其  它1'], //12
     ['香港同胞12', '澳门同胞12', '马来西亚12', '菲律宾12', '新加坡12', '泰  国12', '印  度12', '越  南12'], //8
     ['香港同胞13', '澳门同胞13', '马来西亚13', '菲律宾13', '新加坡13', '泰  国13', '印  度13', '越  南13', '缅  甸13', '朝  鲜13']
 ] //10
 //   [ '香港同胞','澳门同胞','台湾同胞','马来西亚','菲律宾','新加坡','泰  国','印  度','越  南','缅  甸','朝  鲜','巴基斯坦','其  它']]
 var data = [
     [13.2, 1.11, 13.6, 9284, 64138, 2237, 4779, 48877, 2371, 36224, 12956, 2499],
     [15.26, 1.31, 16.68, 10331, 91580, 1909, 40469, 67490],
     [14.23, 1.31, 21.13, 10873, 94964, 2966, 129748, 59827, 8519, 38344],
 ];
$(function() {
    var year = ["2014", "2015", "2016", "2017", "2018"];
    var mapData = [
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
        categoryData.push(key);
        mapData[0].push({
            "year": '2014',
            "name": key,
            "value": randomNum(100, 300)
        });
        mapData[1].push({
            "year": '2015',
            "name": key,
            "value": randomNum(100, 300)
        });
        mapData[2].push({
            "year": '2016',
            "name": key,
            "value": randomNum(100, 300)
        });
        mapData[3].push({
            "year": '2017',
            "name": key,
            "value": randomNum(100, 300)
        });
        mapData[4].push({
            "year": '2018',
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

        // var convertToLineData = function(data, gps) {
        //     var res = [];
        //     for (var i = 0; i < data.length; i++) {
        //         var dataItem = data[i];
        //         var fromCoord = geoCoordMap[dataItem.name];
        //         var toCoord = gps; //郑州
        //         //  var toCoord = geoGps[Math.random()*3]; 
        //         if (fromCoord && toCoord) {
        //             res.push([{
        //                 coord: fromCoord,
        //                 value: dataItem.value
        //             }, {
        //                 coord: toCoord,
        //             }]);
        //         }
        //     }
        //     return res;
        // };

        optionXyMap01 = {
            timeline: {
                data: year,
                axisType: 'category',
                show: true,
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
                            fontSize: 28,
                            color: '#ddd'
                        }
                    },
                    position: -200,
                    emphasis: {
                        textStyle: {
                fontSize: 28,
                            color: '#fff'
                        }
                    }
                },
                symbol: 'none',
                // symbolSize: 0,
                // symbolOffset: [0, 5],
                lineStyle: {
                    show: false,
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
                title: {
                    text: '大数据asdasd',
                    left: '75%',
                    top: '8%',
                    textStyle: {
                        color: '#fff',
                        fontSize: 30
                    }
                },
                backgroundColor: '#051b4a',
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
                    // data: categoryData
                },
                series: [
                    //地图？
                    {
                        type: 'map',
                        map: 'china',
                        tooltip: {
                            trigger: 'item',
                            formatter: '{b}:{c}'
                            // formatter: function (params) {
                            //     console.log()
                            // }
                        },
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
                        // data: mapData
                    },
                    //地图点的动画效果
                    {
                        //  name: 'Top 5',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
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
                        zlevel: 1,
                        // data: convertData(mapData[n].sort(function(a, b) {
                        //     return b.value - a.value;
                        // }).slice(0, 20)),
                    },
                    //柱状图
                    {
                        zlevel: 1.5,
                        type: 'bar',
                        symbol: 'none',
                        // barWidth: barData[n].length > 10 ?'':50,
                        // barMaxWidth: barData[n].length > 5 ?'':'70%',
                        itemStyle: {
                            // normal: {
                            //     color: colors[colorIndex][n]
                            // }
                            normal: {
                                color: function(params) {
                                    // build a color map as your need.
                                    var colorList = [
                                        '#bcd3bb', '#e88f70', '#9dc5c8', '#e1e8c8',
                                        '#7b7c68', '#e5b5b5', '#f0b489', '#928ea8',
                                        '#bda29a', '#376956', '#c3bed4', '#495a80',
                                        '#9966cc', '#bdb76a', '#eee8ab', '#a35015',
                                        '#04dd98', '#d9b3e6', '#b6c3fc','#315dbc',
                                    ];
                                    return colorList[params.dataIndex]
                                },
    
                            }
                        },
                        // data: barData[n]
                    }
                ],
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
                title: 
                    {
                        // id: 'statistic',
                        text: year[n] + "年数据统计情况",
                        // left: '75%',
                        // top: '8%',
                        // textStyle: {
                        //     color: '#fff',
                        //     fontSize: 30
                        // }
                    },
                yAxis: [{
                    data:  categoryData
                }],
                series: [
                    {data: mapData},
                    {data: convertData(mapData[n].sort(function(a, b) {
                            return b.value - a.value;
                        }).slice(0, 20))},
                    {data: barData[n]}
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
myChart.on('mouseover', {componentType: 'series'}, function(params){
    myChart.dispatchAction({
        type: 'timelinePlayChange',
        playState: false
    })
})
myChart.on('mouseout', {componentType: 'series'}, function(params){
    myChart.dispatchAction({
        type: 'timelinePlayChange',
        playState: true
    })
})
