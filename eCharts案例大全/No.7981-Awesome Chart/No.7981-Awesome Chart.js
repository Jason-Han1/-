var uploadedDataURL = "/asset/get/s/data-1585799654003-46R-3f-c3.json";
//线条聚点
var geoGpsMap = {
    '1': [116.43, 39.910],
    '2': [116.43, 39.925],
    // '3': [109.1162, 34.2004],
    // '4': [113.12244, 23.009505],
    '基站1': [116.43, 39.910],
    '基站2': [116.43, 39.925],
    // '基站3': [109.1162, 34.2004],
    // '基站4': [113.12244, 23.009505],

};


//geoCoordMap把所有可能出现的传感器加到数组里面
var geoCoordMap = {
    "客厅1": [116.41, 39.9036],
    "客厅2": [116.43, 39.918],
    '主卧1': [116.409, 39.921],
    "主卧2": [116.409, 39.935],
    '书房': [116.432, 39.939],
    "卫生间": [116.4516, 39.939],
    "客厅3": [116.4516, 39.9306],
    '次卧': [116.4516, 39.920],
    "楼梯": [116.447, 39.911],
    "厨房": [116.4516, 39.905],


};

//温度
var d1 = {
     "客厅1": 20,
    "客厅2": 25,
    '主卧1': 17,
    "主卧2": 19,
    '书房': 13,
    "卫生间": 22,
    "客厅3": 11,
    '次卧': 9,
    "楼梯": 29,
    "厨房": 38,

};

//湿度
var d2 = {
      "客厅1": 40,
    "客厅2": 45,
    '主卧1': 37,
    "主卧2": 39,
    '书房': 23,
    "卫生间": 80,
    "客厅3": 56,
    '次卧': 39,
    "楼梯": 29,
    "厨房": 68,


};
//振动
var d3 = {
    //"客厅1": 4,
    "客厅2": 5,
    //'主卧1': 3,
    "主卧2": 3,
    '书房': 2,
    "卫生间": 0,
    "客厅3": 0,
    '次卧': 3,
    "楼梯": 2,
    "厨房": 0,

};
//烟雾
var d4 = {
    "客厅1": 40,
    "客厅2": 45,
    '主卧1': 37,
    "主卧2": 39,
    '书房': 23,
    "卫生间": 80,
    "客厅3": 56,
    '次卧': 39,
    "楼梯": 29,
    "厨房": 68,

};
//光线
var d5 = {
    "客厅1": 40,
    "客厅2": 45,
    '主卧1': 37,
    "主卧2": 39,
    '书房': 23,
    "卫生间": 80,
    "客厅3": 56,
    '次卧': 39,
    "楼梯": 29,
    "厨房": 68,


};
//
// var d6 = {
//   "客厅1": 40,
//     "客厅2": 45,
//     '主卧1': 37,
//     "主卧2": 39,
//     '书房': 23,
//     "卫生间": 80,
//     "客厅3": 56,
//     '次卧': 39,
//     "楼梯": 29,
//     "厨房": 68,

// };
// 
// var d7 = {
//     "客厅1": 40,
//     "客厅2": 45,
//     '主卧1': 37,
//     "主卧2": 39,
//     '书房': 23,
//     "卫生间": 80,
//     "客厅3": 56,
//     '次卧': 39,
//     "楼梯": 29,
//     "厨房": 68,
// };
var database = [
    {name: "基站1", value: 9},
    {name: "基站2", value: 12},
    ]
var colors = [
    ["#1DE9B6", "#F46E36", "#04B9FF", "#5DBD32", "#FFC809", "#FB95D5", "#BDA29A", "#6E7074", "#546570", "#C4CCD3"],
    ["#37A2DA", "#67E0E3", "#32C5E9", "#9FE6B8", "#FFDB5C", "#FF9F7F", "#FB7293", "#E062AE", "#E690D1", "#E7BCF3", "#9D96F5", "#8378EA", "#8378EA"],
    ["#DD6B66", "#759AA0", "#E69D87", "#8DC1A9", "#EA7E53", "#EEDD78", "#73A373", "#73B9BC", "#7289AB", "#91CA8C", "#F49F42"],
];
var colorIndex = 0;
$(function() {
    var year = ["温度（℃）", "湿度（%）", "振动(g)", "烟雾（ppm）", "光线"];
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
    var fei =[];
    var rong=[];
    var barData = [];





    for (var key in geoCoordMap) {
        mapData[0].push({
            "year": '温度',
            "name": key,
            "value": d1[key],
        });
        mapData[1].push({
            "year": '湿度',
            "name": key,
            "value": d2[key],
        });
        mapData[2].push({
            "year": '振动',
            "name": key,
            "value": d3[key],
        });
        mapData[3].push({
            "year": '烟雾',
            "name": key,
            "value": d4[key],
        });
        mapData[4].push({
            "year": '光线',
            "name": key,
            "value": d5[key],
        });
        // mapData[5].push({
        //     "year": 'b',
        //     "name": key,
        //     "value": d6[key],
        // });
        // mapData[6].push({
        //     "year": 'c',
        //     "name": key,
        //     "value": d7[key],
        // });
    }
var jian=[];
var count=[];
var datamax=[];
var datamin=[];
  //visualMap的max正常值设定
        var zhu = [45,80,10,50,20,20,20]
          //visualMap的min正常值设定
        var li = [-5,15,0,0,0,0,0]
//var count2=[];
        var count3=[];
    for (var i = 0; i < mapData.length; i++) {
        mapData[i].sort(function sortNumber(a, b) {
            return a.value - b.value
        });
        barData.push([]);
        categoryData.push([]);
        fei.push([]);
        rong.push([]);
        
        jian[i]=0;
        count[i]=0;
        count3[i]=0;
        datamax[i]=0;
        datamin[i]=1000;
        for (var j = 0; j < mapData[i].length; j++) {
            if(mapData[i][j].value>=-100){
            jian[i]+=mapData[i][j].value;
            count[i]++;//平均计数
            }
            else{ fei[i].push(mapData[i][j].name)}
            
        if(mapData[i][j].value>=datamax[i]){
            datamax[i]=mapData[i][j].value;
            
        }
         if(mapData[i][j].value<=datamin[i]){
            datamin[i]=mapData[i][j].value;
            
        }
            //count2[i]=mapData[i].length-count[i];
             if(mapData[i][j].value<li[i]||mapData[i][j].value>zhu[i]){
            count3[i]++;
            rong[i].push(mapData[i][j].name);
            
        }
            barData[i].push(mapData[i][j].value);
            categoryData[i].push(mapData[i][j].name);
           
        }
    }

    $.getJSON(uploadedDataURL, function(geoJson) {

        echarts.registerMap('home', geoJson);
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
var convertData1 = function (database) {
    var res1 = [];
    for (var i = 0; i < database.length; i++) {
        var geoCoord1 = geoGpsMap[database[i].name];
        if (geoCoord1) {
            res1.push({
                name: database[i].name,
                value: geoCoord1.concat(database[i].value)
            });
        }
    }
    return res1;
};

var convertedData1 = [
    convertData1(database),
    convertData1(database.sort(function (a, b) {
        return b.value - a.value;
    }).slice(0, 6))
];
//         //聚点随机程序
        var convertToLineData = function(data, gps) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                var fromCoord = geoCoordMap[dataItem.name];
                debugger;
                var toCoord = gps; //郑州
                // var toCoord = geoGps[Math.random()*3]; 
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
            //底部滚动栏
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
                    borderColor: '#87CEEB',
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
                //柱状图样式
                grid: {
                    left: '65%',
                    top: '34.5%',
                    bottom: '44.5%',
                    width: '20%'
                },
                tooltip: {
                    trigger: 'axis', // hover触发器
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                        shadowStyle: {
                            color: '#F0ffff' //hover颜色
                        }
                    }


                },
                //地图样式
                geo: {
                    show: true,
                    map: 'home',
                    roam: true,
                    zoom: 0.8,
                    center: [116.453, 39.920],
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
            options: [
                ]

        };
      

        for (var n = 0; n < year.length; n++) {
            
            optionXyMap01.options.push({
                //背景色
                backgroundColor: '#013954',
                
                //标题
                title: [{
                        text: '传感器布设平面图',
                        left: '16%',
                        top: '5%',
                        textStyle: {
                            color: '#fff',
                            fontSize: 25
                        }
                    },
                    {
                        id: 'statistic',
                        text: year[n] + "数据统计情况",
                        left: '60%',
                        top: '5%',
                        textStyle: {
                            color: '#fff',
                            fontSize: 25
                        }
                    },
                    {
                        
                        text: "平均值："+jian[n]/count[n],
                        left: '60%',
                        top: '14.5%',
                        textStyle: {
                            color: '#90ee90',
                            fontSize: 15
                        }
                    },
                     {
                        
                        text: "最大值："+datamax[n],
                        left: '72%',
                        top: '14.5%',
                        textStyle: {
                            color: '#FF4500',
                            fontSize: 15
                        }
                    },
                     {
                        
                        text: "最小值："+datamin[n],
                        left: '84%',
                        top: '14.5%',
                        textStyle: {
                            color: '#87CEFF',
                            fontSize: 15
                        }
                    },
                    {
                       
                        text: "未使用的传感器："+(mapData[n].length-count[n]),//+'\n'+fei[n],
                        left: '60%',
                        top: '17.5%',
                        textStyle: {
                            color: '#FF7F00',
                            fontSize: 15
                        },
                        
                        extraCssText:'width:120px; white-space:pre-wrap'//额外样式使\n生效
                    },
                    {
                       
                        text: "数据异常传感器："+(count3[n]),
                        left: '76%',
                        top: '17.5%',
                        textStyle: {
                            color: '#9370DB',
                            fontSize: 15
                        },
                        
                        extraCssText:'width:120px; white-space:pre-wrap'//额外样式使\n生效
                    },
                    {
                       
                        text: "(数据正常范围："+li[n]+"~"+zhu[n]+")",
                        left: '60%',
                        top: '20.5%',
                        textStyle: {
                            color: '#FFA54F',
                            fontSize: 15
                        },
                        
                        extraCssText:'width:120px; white-space:pre-wrap'//额外样式使\n生效
                    },
                    {
                       
                       text: "未使用的传感器："+(fei[n]),//+'\n'+fei[n],
                        left: '60%',
                        top: '23.5%',
                        textStyle: {
                            color: '#FF7F00',
                            fontSize: 15
                        },
                        
                        extraCssText:'width:120px; white-space:pre-wrap'//额外样式使\n生效
                    }, {
                       
                        text: "数据异常传感器："+(rong[n]),
                        left: '60%',
                        top: '26.5%',
                        textStyle: {
                            color: '#9370DB',
                            fontSize: 15
                        },
                        
                        extraCssText:'width:120px; white-space:pre-wrap'//额外样式使\n生效
                    }
                    

                ],
                visualMap: {
                    min: li[n],
                    max: zhu[n],
                    calculable: true,
                    text: ['High', 'Low'],
                    inRange: {
                        color: ['#50a3ba', '#eac736', '#d94e5d']

                    },
                    right:330,
                    bottom: 100,
                    textStyle: {
                        color: '#fff'
                    }
                },
    //             brush: {
    //     outOfBrush: {
    //         color: '#abc'
    //     },
    //     brushStyle: {
    //         borderWidth: 2,
    //         color: 'rgba(0,0,0,0.2)',
    //         borderColor: 'rgba(0,0,0,0.5)',
    //     },
    //     seriesIndex: [0, 1],
    //     throttleType: 'debounce',
    //     throttleDelay: 300,
    //     geoIndex: 0
    // },
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
                        map: 'home',
                       
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
                        data: mapData&&database
                    },
                    //地图中闪烁的点
                    {
                        //name: 'Top 5',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        data: convertData(mapData[n].sort(function(a, b) {
                            return b.value - a.value;
                        }).slice(0, 20)),
                        symbolSize: function(val) {
                            return (val[2]*40+1200)/120 ;
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
                     {
                        //基站点显示
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        data: convertData1(database.sort(function(a, b) {
                            return b.value - a.value;
                        }).slice(0, 20)),
                        symbolSize: function(val) {
                            return (val[2]*40+1200)/120 ;
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
                    //线条聚点
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
                        //调用聚点随机
                        data: convertToLineData(mapData[n], geoGpsMap[Math.ceil(Math.random() * 2)])
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

