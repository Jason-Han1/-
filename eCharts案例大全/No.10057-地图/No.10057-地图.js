var mapName = 'china'
var huoyueData =[
{name:"上海",value: 7986},
{name:"云南",value: 1320},
{name:"内蒙古",value: 1110},
{name:"北京",value: 246},
{name:"吉林",value: 162},
{name:"四川",value: 2792},
{name:"天津",value: 1851},
{name:"安徽",value: 2037},
{name:"山东",value: 5069},
{name:"山西",value: 1500},
{name:"广东",value: 833},
{name:"广西",value: 131},
{name:"新疆",value: 2213},
{name:"江苏",value: 2251},
{name:"江西",value: 889},
{name:"河北",value: 1176},
{name:"河南",value: 3121},
{name:"浙江",value: 11585},
{name:"海南",value: 7},
{name:"湖北",value: 170},
{name:"湖南",value: 1002},
{name:"甘肃",value: 268},
{name:"福建",value: 952},
{name:"西藏",value: 29},
{name:"贵州",value: 47},
{name:"辽宁",value: 1389},
{name:"重庆",value: 235},
{name:"陕西",value: 377},
{name:"黑龙江",value: 239}
]
// 活跃排序
// 排序
function keysort(key) {
    return function(a, b) {
        return Number(b[key] - a[key])
    }
}
huoyueData.sort(keysort('value')); //按照fev1与fvc的和进行排序

var geoCoordMap = {};
var toolTipData = [ //总数量
    {
        name: "北京",
        value: [{
            name: "肺悦1",
            value: 95
        }, {
            name: "肺悦2",
            value: 82
        }]
    },
    {
        name: "天津",
        value: [{
            name: "肺悦1",
            value: 22
        }, {
            name: "肺悦2",
            value: 20
        }]
    },
    {
        name: "河北",
        value: [{
            name: "肺悦1",
            value: 60
        }, {
            name: "肺悦2",
            value: 42
        }]
    },
    {
        name: "山西",
        value: [{
            name: "肺悦1",
            value: 40
        }, {
            name: "肺悦2",
            value: 41
        }]
    },
    {
        name: "内蒙古",
        value: [{
            name: "肺悦1",
            value: 23
        }, {
            name: "肺悦2",
            value: 24
        }]
    },
    {
        name: "辽宁",
        value: [{
            name: "肺悦1",
            value: 39
        }, {
            name: "肺悦2",
            value: 28
        }]
    },
    {
        name: "吉林",
        value: [{
            name: "肺悦1",
            value: 41
        }, {
            name: "肺悦2",
            value: 41
        }]
    },
    {
        name: "黑龙江",
        value: [{
            name: "肺悦1",
            value: 35
        }, {
            name: "肺悦2",
            value: 31
        }]
    },
    {
        name: "上海",
        value: [{
            name: "肺悦1",
            value: 12
        }, {
            name: "肺悦2",
            value: 12
        }]
    },
    {
        name: "江苏",
        value: [{
            name: "肺悦1",
            value: 47
        }, {
            name: "肺悦2",
            value: 45
        }]
    },
    {
        name: "浙江",
        value: [{
            name: "肺悦1",
            value: 57
        }, {
            name: "肺悦2",
            value: 57
        }]
    },
    {
        name: "安徽",
        value: [{
            name: "肺悦1",
            value: 57
        }, {
            name: "肺悦2",
            value: 52
        }]
    },
    {
        name: "福建",
        value: [{
            name: "肺悦1",
            value: 59
        }, {
            name: "肺悦2",
            value: 57
        }]
    },
    {
        name: "江西",
        value: [{
            name: "肺悦1",
            value: 49
        }, {
            name: "肺悦2",
            value: 42
        }]
    },
    {
        name: "山东",
        value: [{
            name: "肺悦1",
            value: 67
        }, {
            name: "肺悦2",
            value: 52
        }]
    },
    {
        name: "河南",
        value: [{
            name: "肺悦1",
            value: 69
        }, {
            name: "肺悦2",
            value: 68
        }]
    },
    {
        name: "湖北",
        value: [{
            name: "肺悦1",
            value: 60
        }, {
            name: "肺悦2",
            value: 56
        }]
    },
    {
        name: "湖南",
        value: [{
            name: "肺悦1",
            value: 62
        }, {
            name: "肺悦2",
            value: 52
        }]
    },
    {
        name: "重庆",
        value: [{
            name: "肺悦1",
            value: 47
        }, {
            name: "肺悦2",
            value: 44
        }]
    },
    {
        name: "四川",
        value: [{
            name: "肺悦1",
            value: 65
        }, {
            name: "肺悦2",
            value: 60
        }]
    },
    {
        name: "贵州",
        value: [{
            name: "肺悦1",
            value: 32
        }, {
            name: "肺悦2",
            value: 30
        }]
    },
    {
        name: "云南",
        value: [{
            name: "肺悦1",
            value: 42
        }, {
            name: "肺悦2",
            value: 41
        }]
    },
    {
        name: "西藏",
        value: [{
            name: "肺悦1",
            value: 5
        }, {
            name: "肺悦2",
            value: 4
        }]
    },
    {
        name: "陕西",
        value: [{
            name: "肺悦1",
            value: 38
        }, {
            name: "肺悦2",
            value: 42
        }]
    },
    {
        name: "甘肃",
        value: [{
            name: "肺悦1",
            value: 28
        }, {
            name: "肺悦2",
            value: 28
        }]
    },
    {
        name: "青海",
        value: [{
            name: "肺悦1",
            value: 5
        }, {
            name: "肺悦2",
            value: 5
        }]
    },
    {
        name: "宁夏",
        value: [{
            name: "肺悦1",
            value: 10
        }, {
            name: "肺悦2",
            value: 8
        }]
    },
    {
        name: "新疆",
        value: [{
            name: "肺悦1",
            value: 36
        }, {
            name: "肺悦2",
            value: 31
        }]
    },
    {
        name: "广东",
        value: [{
            name: "肺悦1",
            value: 63
        }, {
            name: "肺悦2",
            value: 60
        }]
    },
    {
        name: "广西",
        value: [{
            name: "肺悦1",
            value: 29
        }, {
            name: "肺悦2",
            value: 30
        }]
    },
    {
        name: "海南",
        value: [{
            name: "肺悦1",
            value: 8
        }, {
            name: "肺悦2",
            value: 6
        }]
    },
    {
        name: "香港",
        value: [{
            name: "肺悦1",
            value: 0
        }, {
            name: "肺悦2",
            value: 0
        }]
    },
    {
        name: "澳门",
        value: [{
            name: "肺悦1",
            value: 0
        }, {
            name: "肺悦2",
            value: 0
        }]
    },
    {
        name: "台湾",
        value: [{
            name: "肺悦1",
            value: 0
        }, {
            name: "肺悦2",
            value: 0
        }]
    },
];
/*获取地图数据*/
var mapFeatures = echarts.getMap(mapName).geoJson.features;
mapFeatures.forEach(function(v) {
    // 地区名称
    var name = v.properties.name;
    // 地区经纬度
    geoCoordMap[name] = v.properties.cp;
});
// console.log("============geoCoordMap===================")
// console.log(geoCoordMap)
// console.log("================data======================")
// console.log(data)
// console.log(toolTipData)
var max = 480, //设置的气泡等大小的系数
    min = 9; // todo //设置的气泡等大小的系数
var maxSize4Pin = 100, //设置的气泡等大小的系数
    minSize4Pin = 20; //设置的气泡等大小的系数

var convertData = function(dt) {// 处理覆盖上面的点，得有经纬度，所以下面的value有经纬度
    var res = [];
    for (var i = 0; i < dt.length; i++) {
        var geoCoord = geoCoordMap[dt[i].name];
        if (geoCoord) {
            res.push({
                name: dt[i].name,
                value: geoCoord.concat(dt[i].value),//这里把经纬度
            });
        }
    }
    return res;
};
option = {

    backgroundColor:'#fff',
    title: {
        text: "各省肺悦检测人数统计",
        // subtext: "数据来自朔茂科技",
        x: 'center',
        textStyle: {
            color: "#000",
            fontSize: 36,
            fontWeight: 'normal'
        },
        subtextStyle: {
            fontSize: 14,
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            // console.log(typeof(params.value)[2])
            if (typeof(params.value)[2] == "undefined" || typeof(params.value)[2] == 'object') {
                var toolTiphtml = ''
                for (var i = 0; i < toolTipData.length; i++) {
                    if (params.name == toolTipData[i].name) {
                        toolTiphtml += toolTipData[i].name + '（设备覆盖情况）<br>'
                        for (var j = 0; j < toolTipData[i].value.length; j++) {
                            toolTiphtml += toolTipData[i].value[j].name + '：' + toolTipData[i].value[j].value + "<br>"
                        }
                    }
                }
                // console.log(toolTiphtml)
                // console.log(convertData(data))
                return toolTiphtml;
            } else {
                var toolTiphtml = ''
                // for(var i = 0;i<toolTipData.length;i++){
                //     if(params.name==toolTipData[i].name){
                //         toolTiphtml += toolTipData[i].name+'：<br>'
                //         for(var j = 0;j<toolTipData[i].value.length;j++){
                //             toolTiphtml+=toolTipData[i].value[j].name+'：'+toolTipData[i].value[j].value+"<br>"
                //         }
                //     }
                // }
                toolTiphtml += params.name + '：<br>';
                toolTiphtml += '活跃数：' + params.data.value[2];
                // console.log(toolTiphtml)
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
        show: true, //去掉层级过滤显示
        min: 0,
        // max: 200,//取活跃值最高的当上限
        max: huoyueData[0].value, //取活跃值最高的当上限
        left: 'left',
        top: 'bottom',
        text: ['高', '低'], // 文本，默认为数值文本
        calculable: true,
        seriesIndex: [1],
        textStyle: {
            color: '#C8D3FF',
        },
        inRange: {
            // color: ['#3B5077', '#031525'] // 蓝黑
            // color: ['#ffc0cb', '#800080'] // 红紫
            // color: ['#3C3B3F', '#605C3C'] // 黑绿
            // color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
            // color: ['#23074d', '#cc5333'] // 紫红
      
            // color: ['#1488CC', '#031525'] // 浅蓝
            color: ['#f5eca9', '#be4750'] // 蓝绿
            // color: ['#5474F6', '#3652D5', '#2542AF', '#1D1663']
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
        layoutCenter: ["50%", "50%"],
        layoutSize: "120%",
        roam: false, //是否可以放大缩小
        itemStyle: {
            normal: {
                // areaColor: '#031525',//所有地图区块默认的
                // areaColor: '#3764FF', //所有地图区块默认的
                // borderColor: '#3B5077',
            },
            emphasis: {
                // areaColor: '#2B91B7',//省份放上去的颜色
                areaColor: 'rgba(55, 100, 255, 0.5)', //省份放上去的颜色
            }
        }
    },
    series: [{
            name: '散点', //省份的名称以及名称旁边的，根据数据来显示：有数据就显示没有数据就不显示
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(toolTipData),
            symbolSize: function(val) {
                if (Number(val[2].value) + Number(val[3].value) > 0) {
                    return 20; //固定
                } else {
                    return 0; //不显示
                }
                console.log(val)
                // return val[2] / 10;//根据数据自适应大小

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
            data: huoyueData
        },
        // 这里注释的是总数的分布
        // {
        //     name: '点',
        //     type: 'scatter',
        //     coordinateSystem: 'geo',
        //     symbol: 'pin', //气泡
        //     symbolSize: function(val) {
        //         var a = (maxSize4Pin - minSize4Pin) / (max - min);
        //         var b = minSize4Pin - a * min;
        //         b = maxSize4Pin - a * max;
        //         return a * val[2] + b;//气泡的大小随之数据变化
        //     },
        //     label: {
        //         normal: {
        //             show: true,
        //             formatter: function(params) {
        //                 return params.data.value[2]
        //             },
        //             textStyle: {
        //                 color: '#fff',
        //                 fontSize: 9,
        //             }
        //         }
        //     },
        //     itemStyle: {
        //         normal: {
        //             color: '#F62157', //标志颜色.气泡颜色
        //         }
        //     },
        //     zlevel: 6,
        //     data: convertData(data),
        // },
        // 这里的是活跃的分布
        {
            name: '点',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin', //气泡
            symbolSize: function(val) {
                var a = (maxSize4Pin - minSize4Pin) / (max - min);
                var b = minSize4Pin - a * min;
                b = maxSize4Pin - a * max;
                // 没有活跃度的不显示气泡有的才显示
                return 70

            },
            label: {
                normal: {
                    show: true,
                    formatter: function(params) {
                        return params.data.value[2]
                    },
                    textStyle: {
                        color: '#fff',
                        fontSize: 15,
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#F62157', //标志颜色.气泡颜色
                }
            },
            zlevel: 6,
            data: convertData(huoyueData),
        },
        // {
        //     name: 'Top 5',
        //     type: 'effectScatter',
        //     coordinateSystem: 'geo',
        //     data: convertData(huoyueData.sort(function(a, b) {
        //         return b.value - a.value;
        //     }).slice(0, 5)),
        //     symbolSize: function(val) {
        //         return val[2] / 10 > 10 ? val[2] / 10 : 10; //自适应大小
        //     },
        //     showEffectOn: 'render',
        //     rippleEffect: {
        //         period: 10, //涟漪动画周期
        //         brushType: 'stroke'
        //     },
        //     hoverAnimation: false,
        //     label: {
        //         normal: {
        //             formatter: '{b}',
        //             position: 'right',
        //             show: true
        //         }
        //     },
        //     itemStyle: {
        //         normal: {
        //             color: 'yellow',
        //             shadowBlur: 10,
        //             shadowColor: 'yellow'
        //         }
        //     },
        //     zlevel: 1
        // },
    ]
};
myChart.setOption(option);

        myChart.on('click',function(t){
            alert(t.name)
        })