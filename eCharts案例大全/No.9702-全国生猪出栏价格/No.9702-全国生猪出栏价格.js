var name_title = "全国生猪出栏价格"
var subname = ''
var nameColor = " rgb(55, 75, 113)"
var name_fontFamily = '等线'
var subname_fontSize = 15
var name_fontSize = 18
var mapName = 'china'
var data = [{
    "name": "安徽",
    "value": 39.51
}, {
    "name": "北京",
    "value": 38.13
}, {
    "name": "福建",
    "value": 42.35
}, {
    "name": "甘肃",
    "value": 36.62
}, {
    "name": "广东",
    "value": 44
}, {
    "name": "广西",
    "value": 42.64
}, {
    "name": "贵州",
    "value": 36.33
}, {
    "name": "海南",
    "value": 29.18
}, {
    "name": "河北",
    "value": 37.49
}, {
    "name": "河南",
    "value": 38.38
}, {
    "name": "黑龙江",
    "value": 37.43
}, {
    "name": "湖北",
    "value": 40.75
}, {
    "name": "湖南",
    "value": 41.58
}, {
    "name": "吉林",
    "value": 36.81
}, {
    "name": "江苏",
    "value": 40.2
}, {
    "name": "江西",
    "value": 43.05
}, {
    "name": "辽宁",
    "value": 37.45
}, {
    "name": "内蒙古",
    "value": 36.75
}, {
    "name": "宁夏",
    "value": 30.48
}, {
    "name": "青海",
    "value": 30
}, {
    "name": "山东",
    "value": 38.26
}, {
    "name": "山西",
    "value": 38.29
}, {
    "name": "陕西",
    "value": 38.7
}, {
    "name": "上海",
    "value": 39.47
}, {
    "name": "四川",
    "value": 42.27
}, {
    "name": "天津",
    "value": 38.17
}, {
    "name": "西藏",
    "value": 30
}, {
    "name": "新疆",
    "value": 35.84
}, {
    "name": "云南",
    "value": 33.41
}, {
    "name": "浙江",
    "value": 41.13
}, {
    "name": "重庆",
    "value": 41.12
}];

var geoCoordMap = {};
var toolTipData = [{
    name: "安徽",
    value: [{
        name: "猪肉价格",
        value: 39.51
    }, {
        name: "九月畜肉类消费价格指数（上年同期）",
        value: 151.8
    }]
}, {
    name: "北京",
    value: [{
        name: "猪肉价格",
        value: 38.13
    }, {
        name: "九月畜肉类消费价格指数（上年同期）",
        value: 128.2
    }]
}, {
    name: "福建",
    value: [{
        name: "猪肉价格",
        value: 42.35
    }, {
      name: "九月畜肉类消费价格指数（上年同期）",
        value: 148.7
    }]
}, {
    name: "甘肃",
    value: [{
        name: "猪肉价格",
        value: 36.62
    }, {
        name: "九月畜肉类消费价格指数（上年同期）",
        value: 130.3
    }]
}, {
    name: "广东",
    value: [{
        name: "猪肉价格",
        value: 44
    }, {
       name: "九月畜肉类消费价格指数（上年同期）",
        value: 151.7
    }]
}, {
    name: "广西",
    value: [{
        name: "猪肉价格",
        value: 42.64
    }, {
        name: "九月畜肉类消费价格指数（上年同期）",
        value: 175.2
    }]
}, {
    name: "贵州",
    value: [{
        name: "猪肉价格",
        value: 36.33
    }, {
      name: "九月畜肉类消费价格指数（上年同期）",
        value: 135.8
    }]
}, {
    name: "海南",
    value: [{
        name: "猪肉价格",
        value: 29.18
    }, {
      name: "九月畜肉类消费价格指数（上年同期）",
        value: 144
    }]
}, {
    name: "河北",
    value: [{
        name: "猪肉价格",
        value: 37.49
    }, {
      name: "九月畜肉类消费价格指数（上年同期）",
        value: 142.2
    }]
}, {
    name: "河南",
    value: [{
        name: "猪肉价格",
        value: 38.38
    }, {
       name: "九月畜肉类消费价格指数（上年同期）",
        value: 155.8
    }]
}, {
    name: "黑龙江",
    value: [{
        name: "猪肉价格",
        value: 37.43
    }, {
      name: "九月畜肉类消费价格指数（上年同期）",
        value: 145.5
    }]
}, {
    name: "湖北",
    value: [{
        name: "猪肉价格",
        value: 40.75
    }, {
       name: "畜肉类消费价格指数（上年同期）",
        value: 148.1
    }]
}, {
    name: "湖南",
    value: [{
        name: "猪肉价格",
        value: 41.58
    }, {
       name: "九月畜肉类消费价格指数（上年同期）",
        value: 157.4
    }]
}, {
    name: "吉林",
    value: [{
        name: "猪肉价格",
        value: 36.81
    }, {
        name: "九月畜肉类消费价格指数（上年同期）",
        value: 143
    }]
}, {
    name: "江苏",
    value: [{
        name: "猪肉价格",
        value: 40.2
    }, {
        name: "九月畜肉类消费价格指数（上年同期）",
        value:143.3
    }]
}, {
    name: "江西",
    value: [{
        name: "猪肉价格",
        value: 43.05
    }, {
        name: "九月畜肉类消费价格指数（上年同期）",
        value: 154.2
    }]
}, {
    name: "辽宁",
    value: [{
        name: "猪肉价格",
        value: 37.45
    }, {
      name: "九月畜肉类消费价格指数（上年同期）",
        value: 143
    }]
}, {
    name: "内蒙古",
    value: [{
        name: "猪肉价格",
        value: 36.75
    }, {
       name: "九月畜肉类消费价格指数（上年同期）",
        value: 135.2
    }]
}, {
    name: "宁夏",
    value: [{
        name: "猪肉价格",
        value: 30.48
    }, {
      name: "九月畜肉类消费价格指数（上年同期）",
        value: 124.3
    }]
}, {
    name: "青海",
    value: [{
        name: "猪肉价格",
        value: 13.41
    }, {
        name: "九月畜肉类消费价格指数（上年同期）",
        value: 120.6
    }]
}, {
    name: "山东",
    value: [{
        name: "猪肉价格",
        value: 38.26
    }, {
        name: "九月畜肉类消费价格指数（上年同期）",
        value: 154.6
    }]
}, {
    name: "山西",
    value: [{
        name: "猪肉价格",
        value: 38.29
    }, {
        name: "九月畜肉类消费价格指数（上年同期）",
        value:142.4
    }]
}, {
    name: "陕西",
    value: [{
        name: "猪肉价格",
        value: 38.7
    }, {
       name: "九月畜肉类消费价格指数（上年同期）",
        value: 142.2
    }]
}, {
    name: "上海",
    value: [{
        name: "猪肉价格",
        value: 39.47
    }, {
        name: "九月畜肉类消费价格指数（上年同期）",
        value: 127.3
    }]
}, {
    name: "四川",
    value: [{
        name: "猪肉价格",
        value: 42.27
    }, {
        name: "九月畜肉类消费价格指数（上年同期）",
        value: 164.6
    }]
}, {
    name: "天津",
    value: [{
        name: "猪肉价格",
        value: 38.17
    }, {
        name: "九月畜肉类消费价格指数（上年同期）",
        value: 137.1
    }]
}, {
    name: "西藏",
    value: [{
        name: "猪肉价格",
        value: 0000
    }, {
        name: "九月畜肉类消费价格指数（上年同期）",
        value: 109.4
    }]
}, {
    name: "新疆",
    value: [{
        name: "猪肉价格",
        value: 35.84
    }, {
        name: "九月畜肉类消费价格指数（上年同期）",
        value: 117.7
    }]
}, {
    name: "云南",
    value: [{
        name: "猪肉价格",
        value: 33.41
    }, {
        name: "九月畜肉类消费价格指数（上年同期）",
        value: 122.5
    }]
}, {
    name: "浙江",
    value: [{
        name: "猪肉价格",
        value: 41.13
    }, {
        name: "九月畜肉类消费价格指数（上年同期）",
        value: 138.4
    }]
}, {
    name: "重庆",
    value: [{
        name: "猪肉价格",
        value: 41.12
    }, {
        name: "九月畜肉类消费价格指数（上年同期）",
        value: 156.7
    }]
}];

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

// console.log("============geoCoordMap===================")
// console.log(geoCoordMap)
// console.log("================data======================")
console.log(data)
console.log(toolTipData)
var max = 500000,
    min = 1000; // todo 
var maxSize4Pin = 80,
    minSize4Pin =40;

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
    return res;
};
option = {
    title: {
        text: name_title,
        subtext: subname,
        x: 'center',
        textStyle: {
            color: nameColor,
            fontFamily: name_fontFamily,
            fontSize: name_fontSize
        },
        subtextStyle: {
            fontSize: subname_fontSize,
            fontFamily: name_fontFamily
        }
    },
    tooltip: {//wenzikuang
        trigger: 'item',
        formatter: function(params) {
            if (typeof(params.value)[2] == "-2") {
                var toolTiphtml = ''
                for (var i = 0; i < toolTipData.length; i++) {
                    if (params.name == toolTipData[i].name) {
                        toolTiphtml += toolTipData[i].name + ':<br>'
                        for (var j = 0; j < toolTipData[i].value.length; j++) {
                            toolTiphtml += toolTipData[i].value[j].name + ':' + toolTipData[i].value[j].value + "<br>"
                        }
                    }
                }
                console.log(toolTiphtml)
                // console.log(convertData(data))
                return toolTiphtml;
            } else {
                var toolTiphtml = ''
                for (var i = 0; i < toolTipData.length; i++) {
                    if (params.name == toolTipData[i].name) {
                        toolTiphtml += toolTipData[i].name + ':<br>'
                        for (var j = 0; j < toolTipData[i].value.length; j++) {
                            toolTiphtml += toolTipData[i].value[j].name + ':' + toolTipData[i].value[j].value + "<br>"
                        }
                    }
                }
                console.log(toolTiphtml)
                // console.log(convertData(data))
                return toolTiphtml;
           }
       }
    },
   
    visualMap: {
        show: true,
        min: 30,
        max: 45,
        left: 'left',
        top: 'bottom',
        //text: ['高', '低'], // 文本，默认为数值文本
        calculable: true,
        seriesIndex: [1],
        inRange: {
            // color: ['#3B5077', '#031525'] // 蓝黑
            // color: ['#ffc0cb', '#800080'] // 红紫
            // color: ['#3C3B3F', '#605C3C'] // 黑绿
            // color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
            // color: ['#23074d', '#cc5333'] // 紫红
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#1488CC', '#2B32B2'] // 浅蓝
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            color: ['#BC8F8F', '#CD0000'] // 蓝绿
            // color:['#FFC1C1','#FF3030'] //红

        }
    },
    /*工具按钮组*/
    // toolbox: {
    //     show: true,
    //     orient: 'vertical',
    //     left: 'right',
    //     top: 'center',
    //     feature: {
    //         dataView: {
    //             readOnly: false
    //         },
    //         restore: {},
    //         saveAsImage: {}
    //     }
    // },
    geo: {
        show: true,
        map: mapName,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false,
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#031525',
                borderColor: '#3B5077',
            },
            emphasis: {
                areaColor: '#2B91B7',
            }
        }
    },
    series: [{
            name: '散点',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function(val) {
                return val[2] / 10000;
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
                    color: '#05C3F9'
                }
            }
        },
        {
            type: 'map',
            map: mapName,
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
        },
        {
            name: '点',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin', //气泡
            symbolSize: function(val) {
                var a = (maxSize4Pin - minSize4Pin) / (max - min);
                var b = minSize4Pin - a * min;
                b = maxSize4Pin - a * max;
                return a * val[2] + b;
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
            //itemStyle: {
                normal: {
                    color: '#F62157', //标志颜色
                }
            //},
            //zlevel: 6,
            //data: convertData(data),
        },
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data.sort(function(a, b) {
                return b.value - a.value;
            }).slice(0, 5)),
            symbolSize: function(val) {
                return val[2] / 10000;
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
                    color: 'yellow',
                    shadowBlur: 5,
                    shadowColor: 'yellow'
                }
            },
            zlevel: 1
        },

    ]
};