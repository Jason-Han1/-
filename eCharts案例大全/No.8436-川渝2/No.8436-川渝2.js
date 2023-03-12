var uploadedDataURL = "/asset/get/s/data-1584027347522-wiHQfsnD.json";
var mapName = 'chuanyu'
function randomData() {
    return Math.round(Math.random() * 100);
}

var data = [{
    name: '宜宾'
}, {
    name: '广元'
}, {
    name: '达州'
}, {
    name: '西昌'
}, {
    name: '乐山'
}, {
    name: '绵阳'
}, {
    name: '攀枝花'
}, {
    name: '重庆市'
}, {
    name: '成都市'
}];

var data2 = [{
        name: "成都",
        value: 199
    },
    {
        name: "天津",
        value: 42
    },
    {
        name: "河北",
        value: 102
    },
    {
        name: "山西",
        value: 81
    },
    {
        name: "内蒙古",
        value: 47
    },
    {
        name: "辽宁",
        value: 67
    },
    {
        name: "吉林",
        value: 82
    },
    {
        name: "黑龙江",
        value: 123
    },
    {
        name: "江苏",
        value: 92
    },
    {
        name: "浙江",
        value: 114
    },
    {
        name: "安徽",
        value: 109
    },
    {
        name: "福建",
        value: 116
    },
    {
        name: "江西",
        value: 91
    },
    {
        name: "山东",
        value: 119
    },
    {
        name: "河南",
        value: 137
    },
    {
        name: "湖北",
        value: 116
    },
    {
        name: "湖南",
        value: 114
    },
    {
        name: "重庆",
        value: 91
    },
    {
        name: "四川",
        value: 125
    },
    {
        name: "贵州",
        value: 62
    },
    {
        name: "云南",
        value: 83
    },
    {
        name: "西藏",
        value: 9
    },
    {
        name: "陕西",
        value: 80
    },
    {
        name: "甘肃",
        value: 56
    },
    {
        name: "青海",
        value: 10
    },
    {
        name: "宁夏",
        value: 18
    },
    {
        name: "新疆",
        value: 180
    },
    {
        name: "广东",
        value: 123
    },
    {
        name: "广西",
        value: 59
    },
    {
        name: "海南",
        value: 14
    },
];


var geoCoordMap = {
    '宜宾': [104.63, 28.76],
    '广元': [105.829757, 32.433668],
    '达州': [107.502262, 31.209484],
    '西昌': [102.258746, 27.886762],
    '乐山': [103.761263, 29.58202],
    '绵阳': [104.741722, 31.46402],
    '攀枝花': [101.718637, 26.582347],
    '重庆市': [108.384366, 30.439702],
    '成都市': [104.065735, 30.659462]
};

// var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
var planePath = 'image://data:image/png;base64,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'
var dataFrom = '成都市';

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

function showChuanYu() {
    $.get(uploadedDataURL, function(geoJson) {
                // myChart.hideLoading();
        console.log(geoJson)
        echarts.registerMap(mapName, geoJson);
    /*获取地图数据*/
        myChart.showLoading();
        var mapFeatures = echarts.getMap(mapName).geoJson.features;
        myChart.hideLoading();
        mapFeatures.forEach(function(v) {
            // 地区名称
            var name = v.properties.name;
            // 地区经纬度
            geoCoordMap[name] = v.properties.cp;
        
        });
        var option = {
            // tooltip: {
            //     trigger: 'item'
        
            // },
        
            visualMap: {
                show: true,
                min: 0,
                max: 100,
                left: '10%',
                top: 'bottom',
                calculable: true,
                seriesIndex: [2],
                inRange: {
                    color: ['#04387b', '#467bc0'] // 蓝绿
                }
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: {
                        readOnly: false
                    },
                    restore: {},
                    saveAsImage: {}
                }
            },
        
        
            geo: {
                map: 'chuanyu',
                zoom: 1.2,
                label: {
                    normal: {
                        show: true,
                        color: 'white'
                    },
                    emphasis: {
                        show: false,
                        color: '#292929'
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#023677',
                        borderColor: '#1180c7',
                    },
                    emphasis: {
                        areaColor: '#4499d0',
                    }
                }
            },
            series: [
                {
                    name: '成都市',
                    type: 'lines',
                    zlevel: 2,
                    symbolSize: 10,
                    effect: {
                        show: true,
                        period: 6,
                        symbol: planePath,
                        trailLength: 0,
                        symbolSize: 15
                    },
                    lineStyle: {
                        normal: {
                            color: 'yellow',
                            width: 2,
                            opacity: 0.5,
                            curveness: 0.2,
                            type: 'dotted',
                        }
                    },
                    data: data.map(function(dataItem) {
                        return {
                            fromName: dataFrom,
                            toName: dataItem.name,
                            coords: [
                                geoCoordMap[dataFrom],
                                geoCoordMap[dataItem.name]
                            ]
                        }
                    })
                }, {
                    name: '供需占比',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: convertData(data),
                    symbolSize: 8,
                    showEffectOn: 'render',
                    rippleEffect: {
                        scale: 5,
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
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
                            color: 'yellow',
                            shadowBlur: 20,
                            shadowColor: '#333'
                        }
                    }
                }, {
                    type: 'map',
                    mapType: 'chuanyu',
                    geoIndex: 0,
                    itemStyle: {
                        normal: {
                            areaColor: 'white',
                            borderColor: '#3B5077',
                        },
                        emphasis: {
                            areaColor: '#2B91B7'
                        }
                    },
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data: data2
                }
            ]
        };
        myChart.setOption(option);
    })
}
showChuanYu()