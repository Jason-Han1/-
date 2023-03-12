// 秋雁南飞：
// 此版本通过设置geoindex && seriesIndex: [1] 属性来实现geo和map共存，来达到hover散点和区域显示tooltip的效果
// 默认情况下，map series 会自己生成内部专用的 geo 组件。但是也可以用这个 geoIndex 指定一个 geo 组件。这样的话，map 和 其他 series（例如散点图）就可以共享一个 geo 组件了。并且，geo 组件的颜色也可以被这个 map series 控制，从而用 visualMap 来更改。
// 当设定了 geoIndex 后，series-map.map 属性，以及 series-map.itemStyle 等样式配置不再起作用，而是采用 geo 中的相应属性。
// http://echarts.baidu.com/option.html#series-map.geoIndex
// 并且加了pin气泡图标以示数值大小
// // 全局变量区:参考江西绿色金融（谢谢：本来想用闭包实现接口数据调用，没时间了）

// 本图作者：参考秋雁南飞的《投票统计》一图，网址：http://gallery.echartsjs.com/editor.html?c=xrJU-aE-LG
var name_title = "2010年全国人口普查男女性别差"
var subname = '数据来源：国家统计局\n，\n单位：万'
var nameColor = " rgb(55, 75, 113)"
var name_fontFamily = '等线'
var subname_fontSize = 15
var name_fontSize = 18
var mapName = 'china'
var data = [{
        name: "北京",
        value: 64
    },
    {
        name: "天津",
        value: 88
    },
    {
        name: "河北",
        value: 101
    },
    {
        name: "山西",
        value: 96
    },
    {
        name: "内蒙古",
        value: 97
    },
    {
        name: "辽宁",
        value: 55
    },
    {
        name: "吉林",
        value: 36
    },
    {
        name: "黑龙江",
        value: 54
    },
    {
        name: "上海",
        value: 69
    },
    {
        name: "江苏",
        value: 60
    },
    {
        name: "浙江",
        value: 151
    },
    {
        name: "安徽",
        value: 100
    },
    {
        name: "福建",
        value: 107
    },
    {
        name: "江西",
        value: 144
    },
    {
        name: "山东",
        value: 111
    },
    {
        name: "河南",
        value: 96
    },
    {
        name: "湖北",
        value: 155
    },
    {
        name: "湖南",
        value: 186
    },
    {
        name: "重庆",
        value: 37
    },
    {
        name: "四川",
        value: 124
    },
    {
        name: "贵州",
        value: 106
    },
    {
        name: "云南",
        value: 176
    },
    {
        name: "西藏",
        value: 9
    },
    {
        name: "陕西",
        value: 125
    },
    {
        name: "甘肃",
        value: 55
    },
    {
        name: "青海",
        value: 201
    },
    {
        name: "宁夏",
        value: 153
    },
    {
        name: "新疆",
        value: 72
    },
    {
        name: "广东",
        value: 449
    },
    {
        name: "广西",
        value: 183
    },
    {
        name: "海南",
        value: 51
    },
];

var geoCoordMap = {};
var toolTipData = [{
        name: "北京",
        value: [{
            name: "男",
            value: 1012
        }, {
            name: "女",
            value: 948
        }]
    },
    {
        name: "天津",
        value: [{
            name: "男",
            value: 691
        }, {
            name: "女",
            value: 603
        }]
    },
    {
        name: "河北",
        value: [{
            name: "男",
            value: 3643
        }, {
            name: "女",
            value: 3542
        }]
    },
    {
        name: "山西",
        value: [{
            name: "男",
            value: 1833
        }, {
            name: "女",
            value: 1737
        }]
    },
    {
        name: "内蒙古",
        value: [{
            name: "男",
            value: 1284
        }, {
            name: "女",
            value: 1187
        }]
    },
    {
        name: "辽宁",
        value: [{
            name: "男",
            value: 2215
        }, {
            name: "女",
            value: 2160
        }]
    },
    {
        name: "吉林",
        value: [{
            name: "男",
            value: 1391
        }, {
            name: "女",
            value: 1355
        }]
    },
    {
        name: "黑龙江",
        value: [{
            name: "男",
            value: 1943
        }, {
            name: "女",
            value: 1889
        }]
    },
    {
        name: "上海",
        value: [{
            name: "男",
            value: 1185
        }, {
            name: "女",
            value: 1116
        }]
    },
    {
        name: "江苏",
        value: [{
            name: "男",
            value: 3963
        }, {
            name: "女",
            value: 3903
        }]
    },
    {
        name: "浙江",
        value: [{
            name: "男",
            value: 2797
        }, {
            name: "女",
            value: 2646
        }]
    },
    {
        name: "安徽",
        value: [{
            name: "男",
            value: 3025
        }, {
            name: "女",
            value: 2925
        }]
    },
    {
        name: "福建",
        value: [{
            name: "男",
            value: 1898
        }, {
            name: "女",
            value: 1791
        }]
    },
    {
        name: "江西",
        value: [{
            name: "男",
            value: 2300
        }, {
            name: "女",
            value: 2156
        }]
    },
    {
        name: "山东",
        value: [{
            name: "男",
            value: 4845
        }, {
            name: "女",
            value: 4734
        }]
    },
    {
        name: "河南",
        value: [{
            name: "男",
            value: 4749
        }, {
            name: "女",
            value: 4653
        }]
    },
    {
        name: "湖北",
        value: [{
            name: "男",
            value: 2940
        }, {
            name: "女",
            value: 2785
        }]
    },
    {
        name: "湖南",
        value: [{
            name: "男",
            value: 3378
        }, {
            name: "女",
            value: 3192
        }]
    },
    {
        name: "重庆",
        value: [{
            name: "男",
            value: 1461
        }, {
            name: "女",
            value: 1424
        }]
    },
    {
        name: "四川",
        value: [{
            name: "男",
            value: 4083
        }, {
            name: "女",
            value: 3959
        }]
    },
    {
        name: "贵州",
        value: [{
            name: "男",
            value: 1790
        }, {
            name: "女",
            value: 1684
        }]
    },
    {
        name: "云南",
        value: [{
            name: "男",
            value: 2387
        }, {
            name: "女",
            value: 2211
        }]
    },
    {
        name: "西藏",
        value: [{
            name: "男",
            value: 154
        }, {
            name: "女",
            value: 145
        }]
    },
    {
        name: "陕西",
        value: [{
            name: "男",
            value: 1929
        }, {
            name: "女",
            value: 1804
        }]
    },
    {
        name: "甘肃",
        value: [{
            name: "男",
            value: 1306
        }, {
            name: "女",
            value: 1251
        }]
    },
    {
        name: "青海",
        value: [{
            name: "男",
            value: 2914
        }, {
            name: "女",
            value: 2713
        }]
    },
    {
        name: "宁夏",
        value: [{
            name: "男",
            value: 3227
        }, {
            name: "女",
            value: 3074
        }]
    },
    {
        name: "新疆",
        value: [{
            name: "男",
            value: 1127
        }, {
            name: "女",
            value: 1055
        }]
    },
    {
        name: "广东",
        value: [{
            name: "男",
            value: 5440
        }, {
            name: "女",
            value: 4991
        }]
    },
    {
        name: "广西",
        value: [{
            name: "男",
            value: 2392
        }, {
            name: "女",
            value: 2209
        }]
    },
    {
        name: "海南",
        value: [{
            name: "男",
            value: 4592
        }, {
            name: "女",
            value: 4079
        }]
    },
];

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
var max = 480,
    min = 9; // todo 
var maxSize4Pin = 100,
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
        max: 200,
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
            color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#1488CC', '#2B32B2'] // 浅蓝
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿

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
                return val[2] / 10;
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
                    formatter: '{@[2]}',
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
                return val[2] / 10;
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