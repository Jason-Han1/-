var name_title = "中国各省份2000-2010年人口增长数字"
var subname = '数据取自国家统计局官网\n\n（此数据未包含台湾省）'
var nameColor = " rgb(55, 75, 113)"
var name_fontFamily = '等线'
var subname_fontSize = 20
var name_fontSize = 30
var mapName = 'china'
var data = [
    {name:"北京",value:6043174},
    {name:"天津",value:3089962},
    {name:"河北",value:5169791},
    {name:"山西",value:3240859},
    {name:"内蒙古",value:1382944},
    {name:"辽宁",value:1921911},
    {name:"吉林",value:650624},
    {name:"黑龙江",value:2076415},
    {name:"上海",value:6611462},
    {name:"江苏",value:5617364},
    {name:"浙江",value:8496240},
    {name:"安徽",value:500520},
    {name:"福建",value:2796270},
    {name:"江西",value:4170199},
    {name:"山东",value:5820930},
    {name:"河南",value:2793085},
    {name:"湖北",value:-2271143},
    {name:"湖南",value:2426589},
    {name:"广东",value:19095452},
    {name:"广西",value:2169223},
    {name:"海南",value:1112450},
    {name:"重庆",value:-1666593},
    {name:"四川",value:-1930768},
    {name:"贵州",value:-499139},
    {name:"云南",value:3606677},
    {name:"西藏",value:385836},
    {name:"陕西",value:1962307},
    {name:"甘肃",value:450981},
    {name:"青海",value:803760},
    {name:"宁夏",value:814957},
    {name:"新疆",value:3356304},
    ];
    
var geoCoordMap = {};
var toolTipData = [ 
    {name:"北京",value:[{name:"女性",value:2991262},{name:"男性",value:3051912}]},
    {name:"天津",value:[{name:"女性",value:1199246},{name:"男性",value:1890716}]},
    {name:"河北",value:[{name:"女性",value:2675838},{name:"男性",value:2493953}]},
    {name:"山西",value:[{name:"女性",value:1702857},{name:"男性",value:1538002}]},
    {name:"内蒙古",value:[{name:"女性",value:606316},{name:"男性",value:776628}]},
    {name:"辽宁",value:[{name:"女性",value:1097549},{name:"男性",value:824362}]},
    {name:"吉林",value:[{name:"女性",value:464153},{name:"男性",value:186471}]},
    {name:"黑龙江",value:[{name:"女性",value:1171056},{name:"男性",value:905359}]},
    {name:"上海",value:[{name:"女性",value:3186808},{name:"男性",value:3424654}]},
    {name:"江苏",value:[{name:"女性",value:2972695},{name:"男性",value:2644669}]},
    {name:"浙江",value:[{name:"女性",value:4112111},{name:"男性",value:4384129}]},
    {name:"安徽",value:[{name:"女性",value:692827},{name:"男性",value:-192307}]},
    {name:"福建",value:[{name:"女性",value:1383751},{name:"男性",value:1412519}]},
    {name:"江西",value:[{name:"女性",value:2156918},{name:"男性",value:2013281}]},
    {name:"山东",value:[{name:"女性",value:2916046},{name:"男性",value:2904884}]},
    {name:"河南",value:[{name:"女性",value:2346621},{name:"男性",value:446464}]},
    {name:"湖北",value:[{name:"女性",value:-680149},{name:"男性",value:-1590994}]},
    {name:"湖南",value:[{name:"女性",value:1643834},{name:"男性",value:782755}]},
    {name:"重庆",value:[{name:"女性",value:-434034},{name:"男性",value:-1232559}]},
    {name:"四川",value:[{name:"女性",value:-196982},{name:"男性",value:-1733786}]},
    {name:"贵州",value:[{name:"女性",value:59867},{name:"男性",value:-559006}]},
    {name:"云南",value:[{name:"女性",value:1944324},{name:"男性",value:1662353}]},
    {name:"西藏",value:[{name:"女性",value:168555},{name:"男性",value:217281}]},
    {name:"陕西",value:[{name:"女性",value:1053491},{name:"男性",value:908816}]},
    {name:"甘肃",value:[{name:"女性",value:408442},{name:"男性",value:42539}]},
    {name:"青海",value:[{name:"女性",value:379557},{name:"男性",value:424203}]},
    {name:"宁夏",value:[{name:"女性",value:401070},{name:"男性",value:413887}]},
    {name:"新疆",value:[{name:"女性",value:1638338},{name:"男性",value:1717966}]},
    {name:"广东",value:[{name:"女性",value:8076634},{name:"男性",value:11018818}]},
    {name:"广西",value:[{name:"女性",value:1483895},{name:"男性",value:685328}]},
    {name:"海南",value:[{name:"女性",value:522612},{name:"男性",value:589838}]},
];

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
var maxSize4Pin = 300,
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
        subtextStyle:{
            fontSize:subname_fontSize,
            fontFamily:name_fontFamily
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            if (typeof(params.value)[2] == "undefined") {
                var toolTiphtml = ''
                for(var i = 0;i<toolTipData.length;i++){
                    if(params.name==toolTipData[i].name){
                        toolTiphtml += toolTipData[i].name+':<br>'
                        for(var j = 0;j<toolTipData[i].value.length;j++){
                            toolTiphtml+=toolTipData[i].value[j].name+':'+toolTipData[i].value[j].value+"<br>"
                        }
                    }
                }
                console.log(toolTiphtml)
                // console.log(convertData(data))
                return toolTiphtml;
            } else {
                var toolTiphtml = ''
                for(var i = 0;i<toolTipData.length;i++){
                    if(params.name==toolTipData[i].name){
                        toolTiphtml += toolTipData[i].name+':<br>'
                        for(var j = 0;j<toolTipData[i].value.length;j++){
                            toolTiphtml+=toolTipData[i].value[j].name+':'+toolTipData[i].value[j].value+"<br>"
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
        min: -5000000,
        max: 20000000,
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
                return val[1] / 3;
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
                var a = 1;
                var b = 1;
                b = 1;
                return a * val[1] + b;
            },
            label: {
                normal: {
                    show: true,formatter: function (params) {return params.value[2];}
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
                return val[1] / 2;
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
            zlevel:1
        },

    ]
};
myChart.setOption(option);