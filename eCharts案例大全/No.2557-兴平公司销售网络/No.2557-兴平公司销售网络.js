var uploadedDataURL = "/asset/get/s/data-1528971808162-BkOXf61WX.json";

var geoGpsMap = [113.4668, 34.6234];
var t = 1;//流入流出控制
var r = 2;//右侧流入流出文字控制
var geoCoordMap = {
    "郑州局": [118.8062, 31.9208],
    '武汉局': [127.9688, 45.368],
    '西安局': [110.3467, 41.4899],
    "成都局": [125.8154, 44.2584],
    "哈局": [123.1238, 42.1216],
    "沈阳局": [101.4038, 36.8207],
    "太原局": [103.9526, 30.7617],
    "北京局": [113.4668, 34.6234],

};

var d1 = {
'沈阳局':10041,
'郑州局':13093,
'武汉局':1157,
'西安局':4903,
'成都局':2667,
'哈局':8331,
'太原局':3727,
'北京局':681
};

var d2 = {
    '沈阳局':10041,
'郑州局':13093,
'武汉局':1157,
'西安局':4903,
'成都局':2667,
'哈局':8331,
'太原局':3727,
'北京局':681
};

var d3 = {
  '沈阳局':10041,
'郑州局':13093,
'武汉局':1157,
'西安局':4903,
'成都局':2667,
'哈局':8331,
'太原局':3727,
'北京局':681
};

var d4 = {
  '沈阳局':10041,
'郑州局':13093,
'武汉局':1157,
'西安局':4903,
'成都局':2667,
'哈局':8331,
'太原局':3727,
'北京局':681
};

var d5 = {
  '沈阳局':10041,
'郑州局':13093,
'武汉局':1157,
'西安局':4903,
'成都局':2667,
'哈局':8331,
'太原局':3727,
'北京局':681

};

var d6 = {
 '沈阳局':10041,
'郑州局':13093,
'武汉局':1157,
'西安局':4903,
'成都局':2667,
'哈局':8331,
'太原局':3727,
'北京局':681
};

var colors = 
    ["#1DE9B6", "#EEDD78", "#32C5E9", "#FFDB5C", "#37A2DA", "#04B9FF"];
var colorIndex = 0;
$(function() {

    var year = ["2020-01", "2020-02", "2020-03", "2020-04", "2020-05", "2020-06"];
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
            "year": '2020-01',
            "name": key,
            "value": d1[key]/100,
            "value1": d1[key]/100,
        });
        mapData[1].push({
            "year": '2020-02',
            "name": key,
            "value": d2[key]/100,
            "value1": d2[key]/100,
        });
        mapData[2].push({
            "year": '2020-03',
            "name": key,
            "value": d3[key]/100,
            "value1": d3[key]/100,
        });
        mapData[3].push({
            "year": '2020-04',
            "name": key,
            "value": d4[key]/100,
            "value1": d4[key]/100,
        });
        mapData[4].push({
            "year": '2020-05',
            "name": key,
            "value": d5[key]/100,
            "value1": d5[key]/100,
        });
        mapData[5].push({
            "year": '2020-06',
            "name": key,
            "value": d6[key]/100,
            "value1": d6[key]/100,
        });
    }

    for (var i = 0; i < mapData.length; i++) {
    mapData[i].sort(function sortNumber(a,b){return a.value-b.value});
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
        'position':'fixed',
       'top': 0,
       'left': 0,
       'width':'100%',
       'height':'100%',
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
                if (fromCoord && toCoord) {
                    if(t==1){
                        res.push([{
                        coord: toCoord,
                         },{
                        coord: fromCoord,
                        value: dataItem.value
                         }]);
                    }else{
                       res.push([{
                            coord: fromCoord,
                            value: dataItem.value
                        },{
                        coord: toCoord,
                        }]); 
                    }
                    
                }
            }
            if(t==0){
                t=1;
            }else{
                t=0;
            }
            return res;
        };

        optionXyMap01 = {
            timeline: {
                data: year,
                axisType: 'category',
                autoPlay: true,
                playInterval: 5000,
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
                    right: '2%',
                    top: '10%',
                    bottom: '10%',
                    width: '18%'
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
                    max: 250,
                    left: 'left',
                    top: 'bottom',
                    text: ['高', '低'],
                    textStyle:{
                        color:'white'
                    },
                    calculable: true,
                    colorLightness: [0.8, 100],
                    color: ['#c05050','#e5cf0d','#5ab1ef'],
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
            var statistic_name = "销售量排行";
            optionXyMap01.options.push({
                
                
                title:
                [{
                         text: '兴平公司销售网络',
                         //subtext: '   ',
                         left: '25%',
                         top: '1%',
                         textStyle: {
                             color: '#fff',
                            fontSize: 25
                         }
                    },
                    {
                        id: 'statistic',
                        text: statistic_name,
                        left: '75%',
                        top: '3%',
                        textStyle: {
                            color: '#fff',
                            fontSize: 16
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
                        margin: 1,
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
                    //未知作用
                    {
                        //文字和标志
                        name: 'light',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: convertData(mapData[n]),
                        symbolSize: function(val) {
                            return 6;
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
                                color: colors[n]
                            }
                        }
                    },
                    //地图？
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
                            return 5;
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
                            show: true,
                            period: 5, //箭头指向速度，值越小速度越快
                            trailLength: 0.2, //特效尾迹长度[0,1]值越大，尾迹越长重
                            symbol: 'arrow', //箭头图标
                            symbolSize: 6, //图标大小
                        },
                        lineStyle: {
                            normal: {
                                color: colors[n],
                                width: 1, //尾迹线条宽度
                                opacity: 0.2, //尾迹线条透明度
                                curveness: .3 //尾迹线条曲直度
                            }
                        },
                        data: convertToLineData(mapData[n], geoGpsMap)
                    },
                    //柱状图
                    {
                        zlevel: 1.5,
                        type: 'bar',
                        barMaxWidth: 8,
                        symbol: 'none',
                        itemStyle: {
                            normal: {
                                color: colors[n],
                                barBorderRadius: [0, 30, 30, 0]
                            }
                        },
                        data:barData[n]
                    }
                ]
            });
            if(r==0){
                r=1;
            }else{
                r=0;
            }
        }
        myChart.setOption(optionXyMap01);
    });
});



