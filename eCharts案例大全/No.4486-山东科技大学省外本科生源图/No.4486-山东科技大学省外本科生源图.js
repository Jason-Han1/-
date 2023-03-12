var uploadedDataURL = "/asset/get/s/data-1528971808162-BkOXf61WX.json";

var geoGpsMap = [120.38, 36.07];
var t = 1;//流入流出控制
var r = 1;//右侧流入流出文字控制
var geoCoordMap = {
    "江苏": [118.8062, 31.9208],
    '黑龙江': [127.9688, 45.368],
    '内蒙古': [110.3467, 41.4899],
    "吉林": [125.8154, 44.2584],
    '北京': [116.4551, 40.2539],
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
  //  "山东": [117.1582, 36.8701],
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
    "西藏": [91.11, 29.97],
};

var d1 = {
'北京':5,
'天津':30,
'河北':150,
'山西':111,
'内蒙古':40,
'辽宁':40,
'吉林':36,
'黑龙江':60,
'上海':10,
'江苏':59,
'浙江':51,
'安徽':90,
'福建':70,
'江西':59,
'河南':116,
'湖北':40,
'湖南':50,
'重庆':40,
'四川':120,
'贵州':135,
'云南':100,
'西藏':40,
'陕西':100,
'甘肃':60,
'青海':20,
'宁夏':110,
'新疆':52,
'广东':10,
'广西':100,
'海南':40,


};

var d2 = {
'北京':5,
'天津':30,
'河北':150,
'山西':105,
'内蒙古':40,
'辽宁':40,
'吉林':40,
'黑龙江':60,
'上海':10,
'江苏':60,
'浙江':51,
'安徽':90,
'福建':70,
'江西':70,
'河南':116,
'湖北':40,
'湖南':49,
'重庆':36,
'四川':120,
'贵州':135,
'云南':100,
'西藏':25,
'陕西':100,
'甘肃':60,
'青海':20,
'宁夏':110,
'新疆':32,
'广东':10,
'广西':100,
'海南':40,

};

var colors = 
    ["#1DE9B6", "#EEDD78"];
var colorIndex = 0;
$(function() {

    var year = ["2019", "2020"];
    var mapData = [
        [],
        [],

    ];

    /*柱子Y名称*/
    var categoryData = [];
    var barData = [];

    for (var key in geoCoordMap) {
        mapData[0].push({
            "year": '2019',
            "name": key,
            "value": d1[key],
            "value1": d1[key],
        });
        mapData[1].push({
            "year": '2020',
            "name": key,
            "value": d2[key],
            "value1": d2[key],
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
                t=1;
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
                    top: '12%',
                    bottom: '12%',
                    width: '18%'
                },
                 backgroundColor: '#2c343c',
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
                    max: 150,
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
            var statistic_name = "各省"+"生源数量";
            optionXyMap01.options.push({
                
                
                title:
                [{
                         text: '山东科技大学省外本科生源图',
                         //subtext: '   ',
                         left: '11%',
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



