var name_title = "各省访客分布"
var subname = ''
var nameColor = " rgb(55, 75, 113)"
var name_fontFamily = '等线'
var subname_fontSize = 15
var name_fontSize = 18
var mapName = 'china'
var data = [{
    "name": "安徽",
    "value": 66700
}, {
    "name": "北京",
    "value": 60365
}, {
    "name": "福建",
    "value": 69003
}, {
    "name": "甘肃",
    "value": 13821
}, {
    "name": "广东",
    "value": 179419
}, {
    "name": "广西",
    "value": 32148
}, {
    "name": "贵州",
    "value": 23958
}, {
    "name": "海南",
    "value": 8833
}, {
    "name": "河北",
    "value": 68955
}, {
    "name": "河南",
    "value": 89746
}, {
    "name": "黑龙江",
    "value": 24985
}, {
    "name": "湖北",
    "value": 65377
}, {
    "name": "湖南",
    "value": 56366
}, {
    "name": "吉林",
    "value": 20140
}, {
    "name": "江苏",
    "value": 155869
}, {
    "name": "江西",
    "value": 40243
}, {
    "name": "辽宁",
    "value": 45475
}, {
    "name": "内蒙古",
    "value": 18158
}, {
    "name": "宁夏",
    "value": 4870
}, {
    "name": "青海",
    "value": 2780
}, {
    "name": "山东",
    "value": 109596
}, {
    "name": "山西",
    "value": 33375
}, {
    "name": "陕西",
    "value": 38842
}, {
    "name": "上海",
    "value": 68829
}, {
    "name": "四川",
    "value": 62467
}, {
    "name": "天津",
    "value": 22681
}, {
    "name": "西藏",
    "value": 962
}, {
    "name": "新疆",
    "value": 12374
}, {
    "name": "云南",
    "value": 31154
}, {
    "name": "浙江",
    "value": 233131
}, {
    "name": "重庆",
    "value": 27925
}];

var geoCoordMap = {};
var toolTipData = [{
    name: "安徽",
    value: [{
        name: "支付金额",
        value: 1616745
    }, {
        name: "访客数",
        value: 66700
    }]
}, {
    name: "北京",
    value: [{
        name: "支付金额",
        value: 2156576
    }, {
        name: "访客数",
        value: 60365
    }]
}, {
    name: "福建",
    value: [{
        name: "支付金额",
        value: 1719807
    }, {
        name: "访客数",
        value: 69003
    }]
}, {
    name: "甘肃",
    value: [{
        name: "支付金额",
        value: 323535
    }, {
        name: "访客数",
        value: 13821
    }]
}, {
    name: "广东",
    value: [{
        name: "支付金额",
        value: 4624719
    }, {
        name: "访客数",
        value: 179419
    }]
}, {
    name: "广西",
    value: [{
        name: "支付金额",
        value: 662102
    }, {
        name: "访客数",
        value: 32148
    }]
}, {
    name: "贵州",
    value: [{
        name: "支付金额",
        value: 620073
    }, {
        name: "访客数",
        value: 23958
    }]
}, {
    name: "海南",
    value: [{
        name: "支付金额",
        value: 220491
    }, {
        name: "访客数",
        value: 8833
    }]
}, {
    name: "河北",
    value: [{
        name: "支付金额",
        value: 1453640
    }, {
        name: "访客数",
        value: 68955
    }]
}, {
    name: "河南",
    value: [{
        name: "支付金额",
        value: 1808798
    }, {
        name: "访客数",
        value: 89746
    }]
}, {
    name: "黑龙江",
    value: [{
        name: "支付金额",
        value: 670433
    }, {
        name: "访客数",
        value: 24985
    }]
}, {
    name: "湖北",
    value: [{
        name: "支付金额",
        value: 1617945
    }, {
        name: "访客数",
        value: 65377
    }]
}, {
    name: "湖南",
    value: [{
        name: "支付金额",
        value: 1464625
    }, {
        name: "访客数",
        value: 56366
    }]
}, {
    name: "吉林",
    value: [{
        name: "支付金额",
        value: 521960
    }, {
        name: "访客数",
        value: 20140
    }]
}, {
    name: "江苏",
    value: [{
        name: "支付金额",
        value: 4663961
    }, {
        name: "访客数",
        value: 155869
    }]
}, {
    name: "江西",
    value: [{
        name: "支付金额",
        value: 862185
    }, {
        name: "访客数",
        value: 40243
    }]
}, {
    name: "辽宁",
    value: [{
        name: "支付金额",
        value: 1313990
    }, {
        name: "访客数",
        value: 45475
    }]
}, {
    name: "内蒙古",
    value: [{
        name: "支付金额",
        value: 471542
    }, {
        name: "访客数",
        value: 18158
    }]
}, {
    name: "宁夏",
    value: [{
        name: "支付金额",
        value: 112290
    }, {
        name: "访客数",
        value: 4870
    }]
}, {
    name: "青海",
    value: [{
        name: "支付金额",
        value: 66695
    }, {
        name: "访客数",
        value: 2780
    }]
}, {
    name: "山东",
    value: [{
        name: "支付金额",
        value: 2622393
    }, {
        name: "访客数",
        value: 109596
    }]
}, {
    name: "山西",
    value: [{
        name: "支付金额",
        value: 620516
    }, {
        name: "访客数",
        value: 33375
    }]
}, {
    name: "陕西",
    value: [{
        name: "支付金额",
        value: 881462
    }, {
        name: "访客数",
        value: 38842
    }]
}, {
    name: "上海",
    value: [{
        name: "支付金额",
        value: 2359948
    }, {
        name: "访客数",
        value: 68829
    }]
}, {
    name: "四川",
    value: [{
        name: "支付金额",
        value: 1772257
    }, {
        name: "访客数",
        value: 62467
    }]
}, {
    name: "天津",
    value: [{
        name: "支付金额",
        value: 767996
    }, {
        name: "访客数",
        value: 22681
    }]
}, {
    name: "西藏",
    value: [{
        name: "支付金额",
        value: 15957
    }, {
        name: "访客数",
        value: 962
    }]
}, {
    name: "新疆",
    value: [{
        name: "支付金额",
        value: 321619
    }, {
        name: "访客数",
        value: 12374
    }]
}, {
    name: "云南",
    value: [{
        name: "支付金额",
        value: 940737
    }, {
        name: "访客数",
        value: 31154
    }]
}, {
    name: "浙江",
    value: [{
        name: "支付金额",
        value: 4802334
    }, {
        name: "访客数",
        value: 233131
    }]
}, {
    name: "重庆",
    value: [{
        name: "支付金额",
        value: 706113
    }, {
        name: "访客数",
        value: 27925
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
var max = 300000,
    min = 1000; // todo 
var maxSize4Pin = 80,
    minSize4Pin = 20;

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
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            if (typeof(params.value)[2] == "undefined") {
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
    // legend: {
    //     orient: 'vertical',
    //     y: 'bottom',
    //     x: 'right',
    //     data: ['credit_pm2.5'],
    //     textStyle: {
    //         color: '#fff'
    //     }
    // },
    visualMap: {
        show: true,
        min: 0,
        max: 250000,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'], // 文本，默认为数值文本
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
            itemStyle: {
                normal: {
                    color: '#F62157', //标志颜色
                }
            },
            zlevel: 6,
            data: convertData(data),
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
                    shadowBlur: 10,
                    shadowColor: 'yellow'
                }
            },
            zlevel: 1
        },

    ]
};
myChart.setOption(option);