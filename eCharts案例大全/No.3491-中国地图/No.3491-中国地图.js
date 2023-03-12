var uploadedDataURL = "/asset/get/s/data-1528971808162-BkOXf61WX.json";

var geoGpsMap = [121.4648, 31.2891];
var t = 1;//流入流出控制
var r = 1;//右侧流入流出文字控制
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
    "西藏": [91.11, 29.97],
};

var d1 = {
    '江苏':10041,
'黑龙江':4093,
'内蒙古':1157,
'吉林':4903,
'北京市':2667,
'辽宁':8331,
'河北':23727,
'天津':681,
'山西':5352,
'陕西':38,
'甘肃':77,
'宁夏':65,
'青海':10,
'新疆':22000,
'四川':309,
'重庆':77,
'山东':21666,
'河南':15717,
'安徽':15671,
'湖北':3714,
'浙江':3141,
'福建':955,
'江西':4978,
'湖南':778,
'贵州':33,
'云南':149,
'广东':1124,
'广西':125,
'海南':7,
'上海':2155,
'西藏':0

};

var colorIndex = 0;
var colors = "#1DE9B6"
$(function() {

   
    var mapData = [];

    /*柱子Y名称*/
    var categoryData = [];
    // var barData = [];

    for (var key in geoCoordMap) {
        mapData.push({
            "year": '2020-01',
            "name": key,
            "value": d1[key]/100,
            "value1": d1[key]/100,
        });
    }

    for (var j = 0; j < mapData.length; j++) {
        categoryData.push(mapData[j].name);
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
            return res;
        };

        optionXyMap01 = {
            timeline: {
                show:false,
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
        
        optionXyMap01.options.push({
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
                    show: false,
                },
                axisTick: {
                    show: false,
                    lineStyle: {
                        color: '#ddd'
                    }
                },
                axisLabel: {
                    show:false,
                },
                data: categoryData
            },
            series: [
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
                    data: convertData(mapData.sort(function(a, b) {
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
                            color: colors,
                            shadowBlur: 10,
                            shadowColor: colors
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
                            color: colors,
                            width: 1, //尾迹线条宽度
                            opacity: 0.2, //尾迹线条透明度
                            curveness: .3 //尾迹线条曲直度
                        }
                    },
                    data: convertToLineData(mapData, geoGpsMap)
                }
            ]
        });
        console.log(JSON.stringify(optionXyMap01))
        myChart.setOption(optionXyMap01);
    });
});



