var uploadedDataURL = "/asset/get/s/data-1528971808162-BkOXf61WX.json";

var geoGpsMap = [121.4648, 31.2891];
var t = 1;//流入流出控制
var r = 1;//右侧流入流出文字控制
var geoCoordMap = {
    '台湾省': [121.5135,25.0308],
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
    "香港": [114.25,22.25],
    "澳门": [113.58333333333333,22.233333333333334],
};

var d1 = {
 '台湾省':340,
    '江苏':37,
'黑龙江':0,
'内蒙古':0,
'吉林':0,
'北京市':49,
'辽宁':382,
'河北':23,
'天津':66,
'山西':0,
'陕西':0,
'甘肃':0,
'宁夏':0,
'青海':0,
'新疆':0,
'四川':0,
'重庆':0,
'山东':362,
'河南':0,
'安徽':311,
'湖北':158,
'浙江':0,
'福建':0,
'江西':0,
'湖南':0,
'贵州':0,
'云南':0,
'广东':0,
'广西':0,
'海南':0,
'上海':0,
'西藏':0,
'香港':0,
'澳门':0,
};

var d2 = {
 '台湾省':340,
    '江苏':37,
'黑龙江':0,
'内蒙古':0,
'吉林':0,
'北京市':49,
'辽宁':382,
'河北':83,
'天津':66,
'山西':130,
'陕西':0,
'甘肃':0,
'宁夏':0,
'青海':0,
'新疆':0,
'四川':146,
'重庆':0,
'山东':362,
'河南':0,
'安徽':320,
'湖北':308,
'浙江':343,
'福建':229,
'江西':0,
'湖南':518,
'贵州':0,
'云南':0,
'广东':298,
'广西':0,
'海南':0,
'上海':0,
'西藏':0,
'香港':0,
'澳门':0,
};
var d3 = {



'台湾省':340,
    '江苏':306,
'黑龙江':0,
'内蒙古':0,
'吉林':109,
'北京市':49,
'辽宁':382,
'河北':83,
'天津':66,
'山西':130,
'陕西':164,
'甘肃':0,
'宁夏':0,
'青海':0,
'新疆':0,
'四川':213,
'重庆':0,
'山东':362,
'河南':319,
'安徽':320,
'湖北':311,
'浙江':446,
'福建':504,
'江西':131,
'湖南':518,
'贵州':0,
'云南':0,
'广东':298,
'广西':0,
'海南':304,
'上海':86,
'西藏':0,
'香港':0,
'澳门':0,
};

var d4 = {



'台湾省':340,
    '江苏':654,
'黑龙江':0,
'内蒙古':0,
'吉林':111,
'北京市':91,
'辽宁':382,
'河北':235,
'天津':179,
'山西':130,
'陕西':164,
'甘肃':0,
'宁夏':0,
'青海':0,
'新疆':0,
'四川':213,
'重庆':0,
'山东':720,
'河南':319,
'安徽':586,
'湖北':311,
'浙江':446,
'福建':504,
'江西':131,
'湖南':518,
'贵州':0,
'云南':0,
'广东':519,
'广西':0,
'海南':304,
'上海':114,
'西藏':0,
'香港':0,
'澳门':0,
};

var d5 = {
 '台湾省':340,
    '江苏':654,
'黑龙江':81,
'内蒙古':0,
'吉林':381,
'北京市':140,
'辽宁':935,
'河北':670,
'天津':179,
'山西':130,
'陕西':164,
'甘肃':0,
'宁夏':0,
'青海':0,
'新疆':0,
'四川':213,
'重庆':0,
'山东':720,
'河南':824,
'安徽':717,
'湖北':736,
'浙江':446,
'福建':675,
'江西':131,
'湖南':518,
'贵州':0,
'云南':0,
'广东':529,
'广西':0,
'海南':308,
'上海':114,
'西藏':0,
'香港':0,
'澳门':0,
};

var d6 = {
    '台湾省':340,
    '江苏':801,
'黑龙江':81,
'内蒙古':0,
'吉林':381,
'北京市':140,
'辽宁':1025,
'河北':862,
'天津':248,
'山西':130,
'陕西':312,
'甘肃':0,
'宁夏':0,
'青海':0,
'新疆':0,
'四川':213,
'重庆':236,
'山东':720,
'河南':824,
'安徽':717,
'湖北':854,
'浙江':698,
'福建':1204,
'江西':383,
'湖南':518,
'贵州':0,
'云南':0,
'广东':899,
'广西':766,
'海南':308,
'上海':114,
'西藏':0,
'香港':0,
'澳门':0,
};

var d7 = {
'台湾省':340,
    '江苏':801,
'黑龙江':81,
'内蒙古':0,
'吉林':381,
'北京市':140,
'辽宁':1025,
'河北':862,
'天津':248,
'山西':556,
'陕西':465,
'甘肃':799,
'宁夏':0,
'青海':268,
'新疆':719,
'四川':552,
'重庆':263,
'山东':1016,
'河南':871,
'安徽':717,
'湖北':985,
'浙江':991,
'福建':1204,
'江西':930,
'湖南':1215,
'贵州':301,
'云南':0,
'广东':1333,
'广西':1483,
'海南':308,
'上海':114,
'西藏':0,
'香港':0,
'澳门':0,
};
var d8 = {
    

'台湾省':340,
    '江苏':834,
'黑龙江':362,
'内蒙古':165,
'吉林':740,
'北京市':140,
'辽宁':1526,
'河北':970,
'天津':310,
'山西':556,
'陕西':465,
'甘肃':799,
'宁夏':0,
'青海':268,
'新疆':719,
'四川':737,
'重庆':430,
'山东':1016,
'河南':948,
'安徽':1281,
'湖北':985,
'浙江':1180,
'福建':1617,
'江西':1240,
'湖南':1219,
'贵州':583,
'云南':0,
'广东':1333,
'广西':1706,
'海南':308,
'上海':114,
'西藏':0,
'香港':0,
'澳门':0,
};
var d9 = {
    '台湾省':349,
    '江苏':1139,
'黑龙江':362,
'内蒙古':165,
'吉林':740,
'北京市':140,
'辽宁':1526,
'河北':986,
'天津':312,
'山西':556,
'陕西':465,
'甘肃':799,
'宁夏':0,
'青海':268,
'新疆':719,
'四川':737,
'重庆':677,
'山东':1046,
'河南':1201,
'安徽':1354,
'湖北':1047,
'浙江':1180,
'福建':1617,
'江西':1240,
'湖南':1219,
'贵州':606,
'云南':0,
'广东':1479,
'广西':1706,
'海南':652,
'上海':114,
'西藏':0,
'香港':0,
'澳门':0,
};

var d10 = {
    
'台湾省':349,
    '江苏':1139,
'黑龙江':362,
'内蒙古':291,
'吉林':740,
'北京市':140,
'辽宁':1526,
'河北':1180,
'天津':312,
'山西':556,
'陕西':853,
'甘肃':1154,
'宁夏':0,
'青海':268,
'新疆':719,
'四川':904,
'重庆':699,
'山东':1171,
'河南':1201,
'安徽':1389,
'湖北':1116,
'浙江':1268,
'福建':1617,
'江西':1531,
'湖南':1219,
'贵州':908,
'云南':707,
'广东':1523,
'广西':1759,
'海南':652,
'上海':114,
'西藏':0,
'香港':0,
'澳门':0,
};
var d11= {
    

'台湾省':349,
    '江苏':1381,
'黑龙江':1004,
'内蒙古':383,
'吉林':740,
'北京市':140,
'辽宁':2028,
'河北':1180,
'天津':312,
'山西':672,
'陕西':853,
'甘肃':1154,
'宁夏':0,
'青海':268,
'新疆':719,
'四川':1228,
'重庆':699,
'山东':1665,
'河南':1201,
'安徽':1469,
'湖北':1116,
'浙江':1453,
'福建':1864,
'江西':1531,
'湖南':1537,
'贵州':1142,
'云南':987,
'广东':1889,
'广西':1759,
'海南':652,
'上海':114,
'西藏':0,
'香港':26,
'澳门':0,
};
var d12= {
    
 '台湾省':345,
    '江苏':1556,
'黑龙江':1129,
'内蒙古':476,
'吉林':742,
'北京市':247,
'辽宁':2033,
'河北':1530,
'天津':	317,
'山西':802,
'陕西':856,
'甘肃':1215,
'宁夏':212,
'青海':268,
'新疆':719,
'四川':1577,
'重庆':896,
'山东':1879,
'河南':1841,
'安徽':1844,
'湖北':1611,
'浙江':1470,
'福建':1816,
'江西':1941,
'湖南':1892,
'贵州':1339,
'云南':1074,
'广东':2095,
'广西':1769,
'海南':653,
'上海':113,
'西藏':0,
'香港':26,
'澳门':0,

};
var d13= {
     '台湾省':345,
 '江苏':2031,
'黑龙江':1129,
'内蒙古':577,
'吉林':742,
'北京市':359,
'辽宁':2089,
'河北':1657,
'天津':317,
'山西':1121,
'陕西':1019,
'甘肃':1488,
'宁夏':315,
'青海':268,
'新疆':719,
'四川':1577,
'重庆':896,
'山东':2005,
'河南':1886,
'安徽':2297,
'湖北':1628,
'浙江':1518,
'福建':1904,
'江西':1941,
'湖南':1892,
'贵州':1505,
'云南':1074,
'广东':2156,
'广西':1769,
'海南':653,
'上海':131,
'西藏':0,
'香港':26,
'澳门':0,


};
var colors = 
    ["#1DE9B6", "#EEDD78", "#FFFF00", "#FFDB5C", "#37A2DA", "#04B9FF"];
var colorIndex = 0;
$(function() {

    var year = ["2008", "2009", "2010", "2011", "2012", "2013","2014","2015","2016","2017","2018","2019","2020"];
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
        [],
        [],
        [],
    ];

    /*柱子Y名称*/
    var categoryData = [];
    var barData = [];

    for (var key in geoCoordMap) {
        mapData[0].push({
            "year": '2008',
            "name": key,
            "value": d1[key]/10,
            "value1": d1[key]/19,
        });
        mapData[1].push({
            "year": '2009',
            "name": key,
            "value": d2[key]/10,
            "value1": d2[key]/10,
        });
        mapData[2].push({
            "year": '2010',
            "name": key,
            "value": d3[key]/10,
            "value1": d3[key]/10,
        });
        mapData[3].push({
            "year": '2011',
            "name": key,
            "value": d4[key]/10,
            "value1": d4[key]/10,
        });
        mapData[4].push({
            "year": '2012',
            "name": key,
            "value": d5[key]/10,
            "value1": d5[key]/10,
        });
        mapData[5].push({
            "year": '2013',
            "name": key,
            "value": d6[key]/10,
            "value1": d6[key]/10,
        });
                mapData[6].push({
            "year": '2014',
            "name": key,
            "value": d7[key]/10,
            "value1": d7[key]/10,
        });
         mapData[7].push({
            "year": '2015',
            "name": key,
            "value": d8[key]/10,
            "value1": d8[key]/10,
        });
               mapData[8].push({
            "year": '2016',
            "name": key,
            "value": d9[key]/10,
            "value1": d9[key]/10,
        });
               mapData[9].push({
            "year": '2017',
            "name": key,
            "value": d10[key]/10,
            "value1": d10[key]/10,
        });
               mapData[10].push({
            "year": '2018',
            "name": key,
            "value": d11[key]/10,
            "value1": d11[key]/10,
        });
                       mapData[11].push({
            "year": '2019',
            "name": key,
            "value": d12[key]/10,
            "value1": d12[key]/10,
        });
                       mapData[12].push({
            "year": '2020',
            "name": key,
            "value": d13[key]/10,
            "value1": d13[key]/10,
        });
    }

    for (var i = 0; i < mapData.length; i++) {
    mapData[i].sort(function sortNumber(a,b){return a.value-b.value});
        barData.push([]);
        categoryData.push([]);
        for (var j = 0; j < mapData[i].length; j++) {
            barData[i].push(mapData[i][j].value1*10);
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
                playInterval: 1500,
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
                    color: '#FFFFFF'
                },
                checkpointStyle: {
                    borderColor: '#FFFFFF',
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
                        color: '#FFFFFF',
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
                    max: 2000,
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
                                    color: 'rgba(3, 0, 38,9)' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: 'rgba(3, 0, 38,9)' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            shadowColor: 'rgba(128, 217, 248, 9)',
                            // shadowColor: 'rgba(255, 255, 255, 1)',
                            shadowOffsetX: -2,
                            shadowOffsetY: 2,
                            shadowBlur: 10
                        },
                        emphasis: {
                            areaColor:  '#FCFFD9',
                            borderWidth: 0
                        }
                    }
                },
            },
            options: []

        };
        
        for (var n = 0; n < year.length; n++) {
            var statistic_name = "各省高铁里程";
            optionXyMap01.options.push({
                           backgroundColor: '#555555',
                
                title:
                [{
                         text: '高铁各省里程历年变化',
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
                    {
                        //文字和标志
                        name: 'light',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: convertData(mapData[n]),
                        symbolSize: function(val) {
                            return val[2] / 5;
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
                            return val[2] / 5;
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
                                color: '#031525',
                                shadowBlur: 100,
                                shadowColor: colors[colorIndex][n]
                            }
                        },
                        zlevel: 1
                    },
                    //地图线的动画效果

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



