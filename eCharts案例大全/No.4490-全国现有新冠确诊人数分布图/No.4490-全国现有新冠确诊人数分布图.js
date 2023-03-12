var uploadedDataURL = "/asset/get/s/data-1528971808162-BkOXf61WX.json";

var geoGpsMap = [121.4648, 31.2891];
var t = 1; //流入流出控制
var r = 1; //右侧流入流出文字控制
var geoCoordMap = {
    '台湾省': [121.5135, 25.0308],
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
    "香港": [114.25, 22.25],
    "澳门": [113.58333333333333, 22.233333333333334],
};

var d1 = {
    '台湾省': 0,
    '江苏': 0,
    '黑龙江': 0,
    '内蒙古': 0,
    '吉林': 0,
    '北京市': 5,
    '辽宁': 0,
    '河北': 0,
    '天津': 0,
    '山西': 0,
    '陕西': 0,
    '甘肃': 0,
    '宁夏': 0,
    '青海': 0,
    '新疆': 0,
    '四川': 0,
    '重庆': 0,
    '山东': 0,
    '河南': 0,
    '安徽': 0,
    '湖北': 239,
    '浙江': 0,
    '福建': 0,
    '江西': 0,
    '湖南': 0,
    '贵州': 0,
    '云南': 0,
    '广东': 14,
    '广西': 0,
    '海南': 0,
    '上海': 2,
    '西藏': 0,
    '香港': 0,
    '澳门': 0,
};

var d2 = {
    '台湾省': 21,
    '江苏': 306,
    '黑龙江': 341,
    '内蒙古': 64,
    '吉林': 50,
    '北京市': 238,
    '辽宁': 62,
    '河北': 150,
    '天津': 73,
    '山西': 63,
    '陕西': 139,
    '甘肃': 24,
    '宁夏': 29,
    '青海': 2,
    '新疆': 55,
    '四川': 319,
    '重庆': 281,
    '山东': 304,
    '河南': 1,
    '安徽': 0,
    '湖北': 50041,
    '浙江': 566,
    '福建': 180,
    '江西': 501,
    '湖南': 428,
    '贵州': 73,
    '云南': 111,
    '广东': 708,
    '广西': 156,
    '海南': 80,
    '上海': 135,
    '西藏': 0,
    '香港': 58,
    '澳门': 4,
};
var d3 = {



    '台湾省': 105,
    '江苏': 0,
    '黑龙江': 8,
    '内蒙古': 0,
    '吉林': 0,
    '北京市': 99,
    '辽宁': 2,
    '河北': 2,
    '天津': 1,
    '山西': 0,
    '陕西': 6,
    '甘肃': 19,
    '宁夏': 0,
    '青海': 0,
    '新疆': 0,
    '四川': 4,
    '重庆': 3,
    '山东': 0,
    '河南': 8,
    '安徽': 0,
    '湖北': 5719,
    '浙江': 16,
    '福建': 7,
    '江西': 0,
    '湖南': 0,
    '贵州': 0,
    '云南': 2,
    '广东': 66,
    '广西': 2,
    '海南': 1,
    '上海': 51,
    '西藏': 0,
    '香港': 144,
    '澳门': 7,

};

var d4 = {


    '台湾省': 225,
    '江苏': 10,
    '黑龙江': 420,
    '内蒙古': 89,
    '吉林': 6,
    '北京市': 71,
    '辽宁': 1,
    '河北': 5,
    '天津': 12,
    '山西': 62,
    '陕西': 1,
    '甘肃': 0,
    '宁夏': 0,
    '青海': 0,
    '新疆': 0,
    '四川': 4,
    '重庆': 3,
    '山东': 15,
    '河南': 0,
    '安徽': 1,
    '湖北': 105,
    '浙江': 18,
    '福建': 15,
    '江西': 0,
    '湖南': 0,
    '贵州': 0,
    '云南': 4,
    '广东': 79,
    '广西': 0,
    '海南': 0,
    '上海': 110,
    '西藏': 0,
    '香港': 419,
    '澳门': 25,
};

var d5 = {
    '台湾省': 35,
    '江苏': 0,
    '黑龙江': 0,
    '内蒙古': 19,
    '吉林': 25,
    '北京市': 6,
    '辽宁': 3,
    '河北': 0,
    '天津': 2,
    '山西': 0,
    '陕西': 2,
    '甘肃': 0,
    '宁夏': 0,
    '青海': 0,
    '新疆': 0,
    '四川': 0,
    '重庆': 0,
    '山东': 1,
    '河南': 0,
    '安徽': 0,
    '湖北': 7,
    '浙江': 0,
    '福建': 0,
    '江西': 0,
    '湖南': 0,
    '贵州': 0,
    '云南': 0,
    '广东': 3,
    '广西': 0,
    '海南': 1,
    '上海': 18,
    '西藏': 0,
    '香港': 26,
    '澳门': 1,
};

var d6 = {
    '台湾省': 5,
    '江苏': 0,
    '黑龙江': 0,
    '内蒙古': 3,
    '吉林': 0,
    '北京市': 184,
    '辽宁': 4,
    '河北': 12,
    '天津': 3,
    '山西': 0,
    '陕西': 5,
    '甘肃': 12,
    '宁夏': 0,
    '青海': 0,
    '新疆': 0,
    '四川': 17,
    '重庆': 0,
    '山东': 2,
    '河南': 0,
    '安徽': 0,
    '湖北': 0,
    '浙江': 1,
    '福建': 4,
    '江西': 0,
    '湖南': 0,
    '贵州': 0,
    '云南': 0,
    '广东': 19,
    '广西': 0,
    '海南': 2,
    '上海': 22,
    '西藏': 0,
    '香港': 48,
    '澳门': 0,
};

var d7 = {
    '台湾省': 7,
    '江苏': 1,
    '黑龙江': 0,
    '内蒙古': 11,
    '吉林': 0,
    '北京市': 132,
    '辽宁': 9,
    '河北': 2,
    '天津': 5,
    '山西': 1,
    '陕西': 4,
    '甘肃': 0,
    '宁夏': 0,
    '青海': 0,
    '新疆': 30,
    '四川': 4,
    '重庆': 3,
    '山东': 5,
    '河南': 0,
    '安徽': 0,
    '湖北': 0,
    '浙江': 2,
    '福建': 2,
    '江西': 0,
    '湖南': 0,
    '贵州': 0,
    '云南': 2,
    '广东': 15,
    '广西': 1,
    '海南': 0,
    '上海': 25,
    '西藏': 0,
    '香港': 491,
    '澳门': 0,
};
var d8 = {


    '台湾省': 28,
    '江苏': 9,
    '黑龙江': 1,
    '内蒙古': 3,
    '吉林': 0,
    '北京市': 2,
    '辽宁': 32,
    '河北': 2,
    '天津': 4,
    '山西': 0,
    '陕西': 29,
    '甘肃': 0,
    '宁夏': 0,
    '青海': 0,
    '新疆': 354,
    '四川': 15,
    '重庆': 0,
    '山东': 22,
    '河南': 0,
    '安徽': 0,
    '湖北': 2,
    '浙江': 6,
    '福建': 4,
    '江西': 0,
    '湖南': 0,
    '贵州': 0,
    '云南': 5,
    '广东': 26,
    '广西': 0,
    '海南': 0,
    '上海': 83,
    '西藏': 0,
    '香港': 859,
    '澳门': 0,
};
var d9 = {
    '台湾省': 16,
    '江苏': 2,
    '黑龙江': 0,
    '内蒙古': 1,
    '吉林': 0,
    '北京市': 18,
    '辽宁': 0,
    '河北': 3,
    '天津': 6,
    '山西': 1,
    '陕西': 9,
    '甘肃': 0,
    '宁夏': 0,
    '青海': 0,
    '新疆': 0,
    '四川': 17,
    '重庆': 1,
    '山东': 11,
    '河南': 1,
    '安徽': 0,
    '湖北': 0,
    '浙江': 9,
    '福建': 14,
    '江西': 0,
    '湖南': 0,
    '贵州': 0,
    '云南': 9,
    '广东': 18,
    '广西': 3,
    '海南': 0,
    '上海': 34,
    '西藏': 0,
    '香港': 219,
    '澳门': 0,
};

var d10 = {

    '台湾省': 37,
    '江苏': 5,
    '黑龙江': 0,
    '内蒙古': 11,
    '吉林': 0,
    '北京市': 1,
    '辽宁': 8,
    '河北': 4,
    '天津': 8,
    '山西': 4,
    '陕西': 28,
    '甘肃': 0,
    '宁夏': 0,
    '青海': 0,
    '新疆': 0,
    '四川': 35,
    '重庆': 0,
    '山东': 14,
    '河南': 5,
    '安徽': 0,
    '湖北': 0,
    '浙江': 10,
    '福建': 0,
    '江西': 0,
    '湖南': 0,
    '贵州': 9,
    '云南': 37,
    '广东': 2,
    '广西': 0,
    '海南': 0,
    '上海': 76,
    '西藏': 0,
    '香港': 164,
    '澳门': 0,
};
var d11 = {


    '台湾省': 59,
    '江苏': 10,
    '黑龙江': 0,
    '内蒙古': 24,
    '吉林': 0,
    '北京市': 6,
    '辽宁': 6,
    '河北': 5,
    '天津': 19,
    '山西': 6,
    '陕西': 44,
    '甘肃': 2,
    '宁夏': 0,
    '青海': 0,
    '新疆': 17,
    '四川': 44,
    '重庆': 1,
    '山东': 0,
    '河南': 7,
    '安徽': 1,
    '湖北': 9,
    '浙江': 11,
    '福建': 34,
    '江西': 0,
    '湖南': 0,
    '贵州': 0,
    '云南': 6,
    '广东': 36,
    '广西': 0,
    '海南': 0,
    '上海': 87,
    '西藏': 0,
    '香港': 156,
    '澳门': 0,
};
var d12 = {

    '台湾省': 131,
    '江苏': 5,
    '黑龙江': 12,
    '内蒙古': 20,
    '吉林': 0,
    '北京市': 11,
    '辽宁': 6,
    '河北': 0,
    '天津': 4,
    '山西': 3,
    '陕西': 16,
    '甘肃': 0,
    '宁夏': 0,
    '青海': 0,
    '新疆': 0,
    '四川': 36,
    '重庆': 0,
    '山东': 13,
    '河南': 5,
    '安徽': 0,
    '湖北': 0,
    '浙江': 9,
    '福建': 24,
    '江西': 0,
    '湖南': 0,
    '贵州': 0,
    '云南': 14,
    '广东': 41,
    '广西': 1,
    '海南': 0,
    '上海': 108,
    '西藏': 0,
    '香港': 1173,
    '澳门': 0,
};



var colors = ["#1DE9B6", "#EEDD78", "#FFFF00", "#FFDB5C", "#37A2DA", "#04B9FF"];
var colorIndex = 0;
$(function() {

    var year = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月", ];
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
            "year": '1月',
            "name": key,
            "value": d1[key] / 10,
            "value1": d1[key] / 19,
        });
        mapData[1].push({
            "year": '2月',
            "name": key,
            "value": d2[key] / 10,
            "value1": d2[key] / 10,
        });
        mapData[2].push({
            "year": '3月',
            "name": key,
            "value": d3[key] / 10,
            "value1": d3[key] / 10,
        });
        mapData[3].push({
            "year": '4月',
            "name": key,
            "value": d4[key] / 10,
            "value1": d4[key] / 10,
        });
        mapData[4].push({
            "year": '5月',
            "name": key,
            "value": d5[key] / 10,
            "value1": d5[key] / 10,
        });
        mapData[5].push({
            "year": '6月',
            "name": key,
            "value": d6[key] / 10,
            "value1": d6[key] / 10,
        });
        mapData[6].push({
            "year": '7月',
            "name": key,
            "value": d7[key] / 10,
            "value1": d7[key] / 10,
        });
        mapData[7].push({
            "year": '8月',
            "name": key,
            "value": d8[key] / 10,
            "value1": d8[key] / 10,
        });
        mapData[8].push({
            "year": '9月',
            "name": key,
            "value": d9[key] / 10,
            "value1": d9[key] / 10,
        });
        mapData[9].push({
            "year": '10月',
            "name": key,
            "value": d10[key] / 10,
            "value1": d10[key] / 10,
        });
        mapData[10].push({
            "year": '11月',
            "name": key,
            "value": d11[key] / 10,
            "value1": d11[key] / 10,
        });
        mapData[11].push({
            "year": '12月',
            "name": key,
            "value": d12[key] / 10,
            "value1": d12[key] / 10,
        });
        //                       mapData[12].push({
        //          "year": '2020',
        //        "name": key,
        //          "value": d13[key]/10,
        //          "value1": d13[key]/10,
        //     });
    }

    for (var i = 0; i < mapData.length; i++) {
        mapData[i].sort(function sortNumber(a, b) {
            return a.value - b.value
        });
        barData.push([]);
        categoryData.push([]);
        for (var j = 0; j < mapData[i].length; j++) {
            barData[i].push(mapData[i][j].value1 * 10);
            categoryData[i].push(mapData[i][j].name);
        }
    }

    $.getJSON(uploadedDataURL, function(geoJson) {
        $('body').css({
            'background': 'url(https://corgixuoos.oss-cn-shanghai.aliyuncs.com/soc/0623%E4%BF%AE%E6%94%B9%E5%A4%A7%E5%B1%8F-%E6%95%B4%E4%BD%93-Recovered.png) repeat-y', //'#2a6d87',
            'position': 'fixed',
            'top': 0,
            'left': 0,
            'width': '80%',
            'height': '80%',
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
                    if (t == 1) {
                        res.push([{
                            coord: toCoord,
                        }, {
                            coord: fromCoord,
                            value: dataItem.value
                        }]);
                    } else {
                        res.push([{
                            coord: fromCoord,
                            value: dataItem.value
                        }, {
                            coord: toCoord,
                        }]);
                    }

                }
            }
            if (t == 0) {
                t = 1;
            } else {
                t = 0;
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
                    max: 100000,
                    left: 'left',
                    top: 'bottom',
                    text: ['高', '低'],
                    textStyle: {
                        color: 'white'
                    },
                    calculable: true,
                    colorLightness: [0.8, 100],
                    color: ['#c05050', '#e5cf0d', '#5ab1ef'],
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
                            borderColor: 'rgba(147, 235, 246, 1)',
                            borderWidth: 1,
                            areaColor: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.5,
                                r: 0.8,
                                colorStops: [{
                                    offset: 0,
                                    color: 'red' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: 'rgba(50, 100, 138,9)' // 100% 处的颜色
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
                            areaColor: '#FCFFD9',
                            borderWidth: 0
                        }
                    }
                },
            },
            options: []

        };

        for (var n = 0; n < year.length; n++) {
            var statistic_name = "全国各省每月确诊人数";
            optionXyMap01.options.push({
                backgroundColor: '#555555',

                title: [{
                        text: '全国各省现有新冠确诊人数',
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

                series: [{
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
                            return val[200] / 5;
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
                        zlevel: 30.5,
                        type: 'bar',
                        barMaxWidth: 8,
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
            if (r == 0) {
                r = 1;
            } else {
                r = 0;
            }
        }
        myChart.setOption(optionXyMap01);
    });
});