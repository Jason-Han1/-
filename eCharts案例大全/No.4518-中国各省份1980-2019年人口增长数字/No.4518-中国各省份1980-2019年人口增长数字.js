var name_title = "中国各省份1980-2019年人口增长数字"
var subname = '数据取自国家统计局官网\n\n单位：万人\n\n（此数据未包含台湾省）'
var nameColor = " rgb(55, 75, 113)"
var name_fontFamily = '等线'
var subname_fontSize = 20
var name_fontSize = 30
var mapName = 'china'
var data = [
    {name:"北京",value:1250.667},
    {name:"天津",value:799.241},
    {name:"河北",value:2407.656},
    {name:"山西",value:1243.087},
    {name:"内蒙古",value:654.782},
    {name:"辽宁",value:846.433},
    {name:"吉林",value:473.787},
    {name:"黑龙江",value:536.841},
    {name:"上海",value:1262.033},
    {name:"江苏",value:2094.108},
    {name:"浙江",value:1996.477},
    {name:"安徽",value:1461.303},
    {name:"福建",value:1439.764},
    {name:"江西",value:1385.954},
    {name:"山东",value:2744.369},
    {name:"河南",value:2341.138},
    {name:"湖北",value:1225.985},
    {name:"湖南",value:1622.974},
    {name:"广东",value:5685.056},
    {name:"广西",value:1417.113},
    {name:"海南",value:286.559},
    {name:"重庆",value:225.451},
    {name:"四川",value:-1456.779},
    {name:"贵州",value:844.454},
    {name:"云南",value:1682.241},
    {name:"西藏",value:166.367},
    {name:"陕西",value:1035.010},
    {name:"甘肃",value:728.010},
    {name:"青海",value:229.895},
    {name:"宁夏",value:319.121},
    {name:"新疆",value:1237.313},
    ];
    
var geoCoordMap = {};
var toolTipData = [ 
    {name:"北京",value:[{name:"女性",value:622.628},{name:"男性",value:628.167}]},
    {name:"天津",value:[{name:"女性",value:325.344},{name:"男性",value:473.769}]},
    {name:"河北",value:[{name:"女性",value:1191.590},{name:"男性",value:1216.067}]},
    {name:"山西",value:[{name:"女性",value:661.233},{name:"男性",value:581.726}]},
    {name:"内蒙古",value:[{name:"女性",value:331.244},{name:"男性",value:323.538}]},
    {name:"辽宁",value:[{name:"女性",value:451.274},{name:"男性",value:395.159}]},
    {name:"吉林",value:[{name:"女性",value:250.759},{name:"男性",value:223.028}]},
    {name:"黑龙江",value:[{name:"女性",value:283.344},{name:"男性",value:253.497}]},
    {name:"上海",value:[{name:"女性",value:581.618},{name:"男性",value:680.544}]},
    {name:"江苏",value:[{name:"女性",value:1014.959},{name:"男性",value:1079.149}]},
    {name:"浙江",value:[{name:"女性",value:963.359},{name:"男性",value:1033.118}]},
    {name:"安徽",value:[{name:"女性",value:780.962},{name:"男性",value:680.213}]},
    {name:"福建",value:[{name:"女性",value:687.379},{name:"男性",value:752.385}]},
    {name:"江西",value:[{name:"女性",value:695.731},{name:"男性",value:690.351}]},
    {name:"山东",value:[{name:"女性",value:1370.392},{name:"男性",value:1373.977}]},
    {name:"河南",value:[{name:"女性",value:1189.800},{name:"男性",value:1151.338}]},
    {name:"湖北",value:[{name:"女性",value:651.274},{name:"男性",value:574.710}]},
    {name:"湖南",value:[{name:"女性",value:845.682},{name:"男性",value:777.292}]},
    {name:"重庆",value:[{name:"女性",value:167.815},{name:"男性",value:57.507}]},
    {name:"四川",value:[{name:"女性",value:-524.203},{name:"男性",value:-932.577}]},
    {name:"贵州",value:[{name:"女性",value:378.669},{name:"男性",value:465.785}]},
    {name:"云南",value:[{name:"女性",value:795.190},{name:"男性",value:887.051}]},
    {name:"西藏",value:[{name:"女性",value:80.713},{name:"男性",value:85.526}]},
    {name:"陕西",value:[{name:"女性",value:541.315},{name:"男性",value:493.695}]},
    {name:"甘肃",value:[{name:"女性",value:380.146},{name:"男性",value:347.864}]},
    {name:"青海",value:[{name:"女性",value:110.505},{name:"男性",value:119.262}]},
    {name:"宁夏",value:[{name:"女性",value:155.710},{name:"男性",value:163.410}]},
    {name:"新疆",value:[{name:"女性",value:621.187},{name:"男性",value:616.254}]},
    {name:"广东",value:[{name:"女性",value:2431.849},{name:"男性",value:3253.079}]},
    {name:"广西",value:[{name:"女性",value:677.731},{name:"男性",value:739.382}]},
    {name:"海南",value:[{name:"女性",value:142.787},{name:"男性",value:143.772}]},
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
        min: -2000,
        max: 6000,
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