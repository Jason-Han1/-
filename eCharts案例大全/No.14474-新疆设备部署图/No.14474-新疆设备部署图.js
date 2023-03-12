// 获取新疆地区的json文件
var uploadedDataURL = "/asset/get/s/data-1507863641060-Sy-whsTh-.json";

// 请求的方式获取
$.get(uploadedDataURL, function(as) {
    // 引入新疆地区地图
    echarts.registerMap('新疆', as);
    // 每个地区的坐标
    var geoCoordMap = {
        '巴音郭楞蒙古': [88.1653, 39.6002],
        '和田': [81.167, 36.9855],
        '哈密': [93.7793, 42.9236],
        '阿克苏': [82.9797, 41.0229],
        '阿勒泰': [88.2971, 47.0929],
        '喀什': [77.168, 37.8534],
        '塔城': [86.6272, 45.8514],
        '昌吉': [89.6814, 44.4507],
        '克孜勒苏柯尔克孜': [74.6301, 39.5233],
        '吐鲁番': [89.6375, 42.4127],
        '伊犁哈萨克': [82.5513, 43.5498],
        '博尔塔拉蒙古': [81.8481, 44.6979],
        '乌鲁木齐': [87.9236, 43.5883],
        '克拉玛依': [85.2869, 45.5054],
        '阿拉尔': [81.2769, 40.6549],
        '图木舒克': [79.1345, 39.8749],
        '五家渠': [87.5391, 44.3024],
        '石河子': [86.0229, 44.2914]
    };

    // 每个地区的设备数量值
    var data = [{
        name: '巴音郭楞蒙古',
        value: 390,
        alarm_num: 54
    }, {
        name: '和田',
        value: 119
    }, {
        name: '哈密',
        value: 55,
        alarm_num: 9
    }, {
        name: '阿克苏',
        value: 329
    }, {
        name: '阿勒泰',
        value: 219,
        alarm_num: 14
    }, {
        name: '喀什',
        value: 290
    }, {
        name: '塔城',
        value: 319,
        alarm_num: 2
    }, {
        name: '昌吉',
        value: 199
    }, {
        name: '克孜勒苏柯尔克孜',
        value: 419,
        alarm_num: 11
    }, {
        name: '吐鲁番',
        value: 299
    }, {
        name: '伊犁哈萨克',
        value: 49
    }, {
        name: '博尔塔拉蒙古',
        value: 219,
        alarm_num: 15
    }, {
        name: '乌鲁木齐',
        value: 89
    }, {
        name: '克拉玛依',
        value: 49
    }, {
        name: '阿拉尔',
        value: 209,
        alarm_num: 27
    }, {
        name: '图木舒克',
        value: 129
    }, {
        name: '五家渠',
        value: 49,
        alarm_num: 7
    }, {
        name: '石河子',
        value: 229
    }];

    // 每个地区的设备告警数量
    var data2 = [{
        name: '巴音郭楞蒙古',
        value: 54
    }, {
        name: '哈密',
        value: 9
    }, {
        name: '阿勒泰',
        value: 14
    }, {
        name: '塔城',
        value: 2
    }, {
        name: '克孜勒苏柯尔克孜',
        value: 11
    }, {
        name: '博尔塔拉蒙古',
        value: 15
    }, {
        name: '乌鲁木齐',
        value: 12
    }, {
        name: '阿拉尔',
        value: 27
    }, {
        name: '五家渠',
        value: 7
    }]


    var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value),
                });
            }
        }
        // 有数据的地区的名称和value值
        return res;
    };

    // 设定series是一个空的数组
    var series = [];
    [
        ['新疆', data]
    ].forEach(function(item, i) {
        series.push({
            name: '定位点',
            type: 'effectScatter', // 散点图
            coordinateSystem: 'geo', // 使用地理坐标系
            hoverAnimation: 'false',
            legendHoverLink: 'false',
            rippleEffect: {
                period: 4,
                brushType: 'stroke',
                scale: 3
            },
            data: convertData(item[1]),
            symbolSize: function(val) {
                if (val[2] <= 100) {
                    return 4
                }
                if (val[2] > 100 && val[2] <= 200) {
                    return 8
                }
                if (val[2] > 200 && val[2] <= 300) {
                    return 12
                }
                if (val[2] > 300 && val[2] <= 400) {
                    return 16
                }
                if (val[2] > 400 && val[2] <= 500) {
                    return 20
                }
                if (val[2] > 500) {
                    return 24
                }
            },
            itemStyle: {
                normal: {
                    color: '#5599E4',
                }
            },
            zlevel: 1,
        }, {
            type: 'map',
            map: '新疆',
            zlevel: 0,
            itemStyle: {
                normal: {
                    areaColor: '#323c48',
                    borderColor: '#111'
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            },
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#ddb926',
                        fontSize: 10
                    },
                },
                emphasis: {
                    textStyle: {
                        color: '#ddb926',
                        fontSize: 10
                    },
                }

            },
            data: data
        }, {
            name: '点',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin',
            symbolSize: 25,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: 9,
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#F62157', //标志颜色
                }
            },
            zlevel: 6,
            data: convertData(data2)
        });
    });

    option = {
        backgroundColor: '#4f5555',
        title: {
            text: '新疆设备部署图',
            subtext: '散点圆的大小随设备数量改变而改变',
            left: 'center',
            textStyle: {
                color: '#7bbfea'
            }
        },
        geo: {
            map: '新疆',
            label: {
                textStyle: {
                    fontSize: '.1rem',
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#fff',
                    borderColor: '#587A9F'
                },
                emphasis: {
                    areaColor: '#ccc'
                }
            }
        },
        series: series
    };
    myChart.setOption(option);

});