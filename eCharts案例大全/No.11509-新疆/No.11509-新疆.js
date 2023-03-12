var uploadedDataURL = "/asset/get/s/data-1554002347900-5nK3UVARt.json";
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('xj', geoJson);
    var geoCoordMap = {
        "乌鲁木齐市": [87.617733, 43.792818],
        "克拉玛依市": [84.873946, 45.595886],
        "吐鲁番市": [89.184078, 42.947613],
        "哈密市": [93.51316, 42.833248],
        "昌吉回族自治州": [87.304012, 44.014577],
        "博尔塔拉蒙古自治州": [82.074778, 44.903258],
        "巴音郭楞蒙古自治州": [86.150969, 41.768552],
        "阿克苏地区": [80.265068, 41.170712],
        "克孜勒苏柯尔克孜自治州": [76.172825, 39.713431],
        "喀什地区": [75.989138, 39.467664],
        "伊犁哈萨克自治州": [81.317946, 43.92186],
        "塔城地区": [82.985732, 46.746301],
        "阿勒泰地区": [88.13963, 47.848393],
        "石河子市": [86.041075, 44.305886],
        "阿拉尔市": [81.285884, 40.541914],
        "图木舒克市": [79.077978, 39.867316],
        "五家渠市": [87.526884, 44.167401],
        "北屯市": [87.824932, 47.353177],
        "铁门关市": [85.501218, 41.827251],
        "双河市": [82.353656, 44.840524],
        "可克达拉市": [80.63579, 43.6832],
        "和田地区": [79.92533, 37.110687]
    };
    
    var max = 480, min = 9; // todo 
    var maxSize4Pin = 100, minSize4Pin = 20;
    
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

    var data = [
        [{
            name: '乌鲁木齐市',
            value: 100
        }],
        [{
            name: '克拉玛依市',
            value: 200
        }],
        [{
            name: '吐鲁番市',
            value: 0
        }],
        [{
            name: '哈密市',
            value: 0
        }],
        [{
            name: '昌吉回族自治州',
            value: 0
        }],
        [{
            name: '博尔塔拉蒙古自治州',
            value: 0
        }],
        [{
            name: '巴音郭楞蒙古自治州',
            value: 0
        }],
        [{
            name: '阿克苏地区',
            value: 0
        }],
        [{
            name: '克孜勒苏柯尔克孜自治州',
            value: 0
        }],
        [{
            name: '喀什地区',
            value: 0
        }],
        [{
            name: '伊犁哈萨克自治州',
            value: 0
        }],
        [{
            name: '塔城地区',
            value: 0
        }],
        [{
            name: '阿勒泰地区',
            value: 0
        }],
        [{
            name: '石河子市',
            value: 0
        }],
        [{
            name: '阿拉尔市',
            value: 0
        }],
        [{
            name: '图木舒克市',
            value: 0
        }],
        [{
            name: '五家渠市',
            value: 0
        }],
        [{
            name: '北屯市',
            value: 0
        }],
        [{
            name: '铁门关市',
            value: 0
        }],
        [{
            name: '双河市',
            value: 0
        }],
        [{
            name: '可克达拉市',
            value: 0
        }],
        [{
            name: '和田地区',
            value: 0
        }],
    ];

    option = {
        backgroundColor: '#00265f',
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                return params.name;
            }
        },
        geo: {
            show: true,
            map: 'xj',
            roam: true,
            zoom: 1,
            label: {
                normal: {
                    show: false,
                    textStyle: {
                        color: '#fff'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    areaColor: "rgba(0,0,0,0)",
                    borderColor: "#07c5d5",
                    borderWidth: 1.5,
                    color: "rgba(0,0,0,0)",
                    shadowColor: 'rgba(63, 218, 255, 0.5)',
                    shadowBlur: 30
                },
                emphasis: {
                    areaColor: '#2B91B7',
                }
            },
        },
        series: [{
            type: 'map',
            map: 'xj',
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
                normal: {
                    show: true
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
        },{
            name: '点',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin',
            symbolSize: function (val) {
                var a = (maxSize4Pin - minSize4Pin) / (max - min);
                var b = minSize4Pin - a*min;
                b = maxSize4Pin - a*max;
                return a*val[2]+b;
            },
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
            data: convertData(data),
        },]
    };
    myChart.setOption(option);
});