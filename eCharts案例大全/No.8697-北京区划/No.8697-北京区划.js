var uploadedDataURL = "/asset/get/s/data-1581672927827-EfifDvNW.json";


// 请求的方式获取
$.get(uploadedDataURL, function(as) {
    // 引入北京地区地图
    echarts.registerMap('北京', as);
    // 每个地区的坐标
    var geoCoordMap = {
        '东城': [116.424697,39.927967],
        '西城': [116.358141,39.913919],
        '朝阳': [116.765487,40.136573],
        '丰台': [116.290679,39.857184],
        '石景山': [116.17672,39.949198],
        '海淀': [116.177807,40.062966],
        '门头沟': [115.905234,40.010063],
        '房山': [115.941902,39.708825],
        '通州': [116.747351,39.814339],
        '顺义': [116.737316,40.137897],
        '昌平': [116.226118,40.225311],
        '大兴': [116.402095,39.655493],
        '怀柔': [116.621138,40.432762],
        '平谷': [117.117604,40.192158],
        '密云': [117.065719,40.500122],
        '延庆': [116.016705,40.507607]
    };

    // 每个地区的累计疫情数量值
    var data = [{
        name: '东城',
        value: 390,
        alarm_num: 54
    }, {
        name: '西城',
        value: 119
    }, {
        name: '朝阳',
        value: 55,
        alarm_num: 9
    }, {
        name: '丰台',
        value: 329
    }, {
        name: '石景山',
        value: 219,
        alarm_num: 14
    }, {
        name: '海淀',
        value: 290
    }, {
        name: '门头沟',
        value: 319,
        alarm_num: 2
    }, {
        name: '房山',
        value: 199
    }, {
        name: '通州',
        value: 419,
        alarm_num: 11
    }, {
        name: '顺义',
        value: 299
    }, {
        name: '昌平',
        value: 49
    }, {
        name: '大兴',
        value: 219,
        alarm_num: 15
    }, {
        name: '怀柔',
        value: 89
    }, {
        name: '平谷',
        value: 49
    }, {
        name: '密云',
        value: 209,
        alarm_num: 27
    }, {
        name: '延庆',
        value: 129
    }];

    // 每个地区的新增疫情数量
    var data3 = [{
        name: '通州',
        value: 54
    }, {
        name: '顺义',
        value: 9
    }, {
        name: '平谷',
        value: 14
    }, {
        name: '丰台',
        value: 2
    }, {
        name: '怀柔',
        value: 11
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
        ['北京', data]
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
            map: '北京',
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
            type: 'effectScatter',
            coordinateSystem: 'geo',
            //symbol: 'pin',
            symbolSize: 15,
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
            data: convertData(data3)
        });
    });

    option = {
        backgroundColor: '#4f5555',
        title: {
            text: '北京疫情分布',
            subtext: '散点圆的大小随疫情累计数量改变而改变',
            left: 'center',
            textStyle: {
                color: '#7bbfea'
            }
        },
        geo: {
            map: '北京',
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