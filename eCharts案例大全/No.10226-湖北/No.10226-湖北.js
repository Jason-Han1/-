var uploadedDataURL = "/asset/get/s/data-1566907218833-Vho7hEh86.json";

// var uploadedDataURL = "/asset/get/s/data-1566974946377-hLWBwxrJr.json";

// var uploadedDataURL = "/asset/get/s/data-1566905910694-qhj2VnxNp.json";


        
myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('jiangxi', geoJson);
    myChart.hideLoading();
    var geoCoordMap = {
        '武汉市':[114.298572,30.584355],
        '黄石市':[115.077048,30.220074],
        '十堰市':[110.787916,32.646907],
        '宜昌市':[111.290843,30.702636],
        '襄阳市':[112.144146,32.042426],
        '鄂州市':[114.890593,30.396536],
        '荆门市':[112.204251,31.03542],
        '孝感市':[113.926655,30.926423],
        '荆州市':[112.23813,30.326857],
        '黄冈市':[114.879365,30.447711],
        '咸宁市':[114.328963,29.832798],
        '随州市':[113.37377,31.717497],
        '恩施土家族苗族自治州':[109.48699,30.283114],
        '仙桃市':[113.453974,30.364953],
        '潜江市':[112.896866,30.421215],
        '天门市':[113.165862,30.653061],
        '神农架林区':[110.671525,31.744449],
        '地理中心':[112.50515810863031, 30.902817368970947],
        '经济中心':[113.31570343884808, 30.861278328394413],
    }
    var data = [
        {"name":"武汉市","value":0.3772},
        {"name":"黄石市","value":0.0403},
        {"name":"十堰市","value":0.0444},
        {"name":"宜昌市","value":0.1032},
        {"name":"襄阳市","value":0.1095},
        {"name":"鄂州市","value":0.0255},
        {"name":"荆门市","value":0.0469},
        {"name":"孝感市","value":0.0486},
        {"name":"荆州市","value":0.0529},
        {"name":"黄冈市","value":0.0517},
        {"name":"咸宁市","value":0.0346},
        {"name":"随州市","value":0.0257},
        {"name":"恩施土家族苗族自治州","value":0.0221},
        {"name":"仙桃市","value":0},
        {"name":"潜江市","value":0},
        {"name":"天门市","value":0},
        {"name":"神农架林区","value":0},
        ];
    
    var icon_data = [
        {"name":"武汉市","value":20},
        {"name":"黄石市","value":20},
        {"name":"十堰市","value":20},
        {"name":"宜昌市","value":20},
        {"name":"襄阳市","value":20},
        {"name":"鄂州市","value":20},
        {"name":"荆门市","value":20},
        {"name":"孝感市","value":20},
        {"name":"荆州市","value":20},
        // {"name":"黄冈市","value":20},
        {"name":"咸宁市","value":20},
        {"name":"随州市","value":20},
        {"name":"恩施土家族苗族自治州","value":20},
        {"name":"仙桃市","value":20},
        {"name":"潜江市","value":20},
        {"name":"天门市","value":20},
        {"name":"神农架林区","value":20},
        ]
    var icon_data_2 = [
        {"name":"黄冈市","value":20},
        ]
        
    var special_data = [
    {"name":"地理中心","value":20},
    {"name":"经济中心","value":20},
    ]
    
    var max = 480, min = 9; // todo 
    var maxSize4Pin = 100, minSize4Pin = 20;

  var convertData = function (data) {
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


    option = {
        backgroundColor: '#FFFFFF',
        title: {
            text: '湖北省',
            subtext: '',
            x: 'center',
            textStyle: {
                color: '#ccc'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
              if(typeof(params.value)[2] == "undefined"){
              	return params.name + ' : ' + params.value;
              }else{
              	return params.name + ' : ' + params.value[2];
              }
            }
        },
        geo: {
            map: 'jiangxi',
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: false,
            itemStyle: {
                normal: {
                    areaColor: '#CCCCCC',
                    borderColor: '#FFFFFF'
                },
                emphasis: {
                    areaColor: '#00CC33'
                }
            }
        },
        visualMap: {
            show: true,
            min: 0,
            max: 0.4,
            left: 'center',
            top: '85%',
            precision: 2,
            orient:'horizontal',
            // text: ['高', '低'], // 文本，默认为数值文本
            calculable: true,
            seriesIndex: [0],
            inRange: {
                color: ['RGB(204,204,204)', 'RGB(163,163,163)'] // 浅蓝
            }
        },
        series : [
        {
            type: 'map',
            map: 'jiangxi',
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
                    borderColor: '#3B5077',
                },
                emphasis: {
                    areaColor: '#2B91B7'
                }
            },
            animation: false,
            data: data
        },
        {
            name: 'cities',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(icon_data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 50)),
            symbolSize: function (val) {
                return val[2] / 5;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: ['150%', '150%'],
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#003399',
                }
            },
            zlevel: 1
        },
        {
            name: 'cities',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(icon_data_2.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 50)),
            symbolSize: function (val) {
                return val[2] / 5;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: ['150%', '-150%'],
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#003399',
                }
            },
            zlevel: 1
        },
        {
            name: 'cities',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(special_data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 50)),
            symbolSize: function (val) {
                return val[2] / 5;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: ['250%', '150%'],
                    fontWeight:'bold',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#CC6666',
                }
            },
            zlevel: 1
        },
         
    ]
    };
    myChart.setOption(option);
});