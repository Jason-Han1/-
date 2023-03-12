var name_title = "中国一月份各省份疫情人口数字"
var nameColor = " rgb(55, 75, 113)"
var name_fontFamily = '等线'
var subname_fontSize = 20
var name_fontSize = 30
var mapName = 'china'
var data = [
    {
          name: "北京",
          value: 212,
        },
        {
          name: "天津",
          value: 60,
        },
        {
          name: "上海",
          value: 208,
        },
        {
          name: "重庆",
          value: 337,
        },
        {
          name: "河北",
          value: 126,
        },
        {
          name: "河南",
          value: 675,
        },
        {
          name: "云南",
          value: 117,
        },
        {
          name: "辽宁",
          value: 74,
        },
        {
          name: "黑龙江",
          value: 155,
        },
        {
          name: "湖南",
          value: 593,
        },
        {
          name: "安徽",
          value: 480,
        },
        {
          name: "山东",
          value: 270,
        },
        {
          name: "新疆",
          value: 29,
        },
        {
          name: "江苏",
          value: 308,
        },
        {
          name: "浙江",
          value: 829,
        },
        {
          name: "江西",
          value: 476,
        },
        {
          name: "湖北",
          value: 13522,
        },
        {
          name: "广西",
          value: 139,
        },
        {
          name: "甘肃",
          value: 55,
        },
        {
          name: "山西",
          value: 74,
        },
        {
          name: "内蒙古",
          value: 34,
        },
        {
          name: "陕西",
          value: 142,
        },
        {
          name: "吉林",
          value: 42,
        },
        {
          name: "福建",
          value: 179,
        },
        {
          name: "贵州",
          value: 56,
        },
        {
          name: "广东",
          value: 797,
        },
        {
          name: "青海",
          value: 15,
        },
        {
          name: "西藏",
          value: 1,
        },
        {
          name: "四川",
          value: 282,
        },
        {
          name: "宁夏",
          value: 34,
        },
        {
          name: "海南",
          value: 79,
        },
        {
          name: "台湾",
          value: 10,
        },
        {
          name: "香港",
          value: 15,
        },
        {
          name: "澳门",
          value: 9,
        },
    ];
    
var geoCoordMap = {};
var toolTipData = [ 
    {name:"北京",value:[{name:"确诊数",value:212}]},
        {name:"天津",value:[{name:"确诊数",value:60}]},
        {name:"河北",value:[{name:"确诊数",value:126}]},
        {name:"山西",value:[{name:"确诊数",value:74}]},
        {name:"内蒙古",value:[{name:"确诊数",value:34}]},
        {name:"辽宁",value:[{name:"确诊数",value:74}]},
        {name:"吉林",value:[{name:"确诊数",value:42}]},
        {name:"黑龙江",value:[{name:"确诊数",value:155}]},
        {name:"上海",value:[{name:"确诊数",value:208}]},
        {name:"江苏",value:[{name:"确诊数",value:308}]},
        {name:"浙江",value:[{name:"确诊数",value:829}]},
        {name:"安徽",value:[{name:"确诊数",value:480}]},
        {name:"福建",value:[{name:"确诊数",value:179}]},
        {name:"江西",value:[{name:"确诊数",value:476}]},
        {name:"山东",value:[{name:"确诊数",value:270}]},
        {name:"河南",value:[{name:"确诊数",value:675}]},
        {name:"湖北",value:[{name:"确诊数",value:13522}]},
        {name:"湖南",value:[{name:"确诊数",value:593}]},
        {name:"重庆",value:[{name:"确诊数",value:337}]},
        {name:"四川",value:[{name:"确诊数",value:282}]},
        {name:"贵州",value:[{name:"确诊数",value:56}]},
        {name:"云南",value:[{name:"确诊数",value:117}]},
        {name:"西藏",value:[{name:"确诊数",value:1}]},
        {name:"陕西",value:[{name:"确诊数",value:142}]},
        {name:"甘肃",value:[{name:"确诊数",value:55}]},
        {name:"青海",value:[{name:"确诊数",value:15}]},
        {name:"宁夏",value:[{name:"确诊数",value:34}]},
        {name:"新疆",value:[{name:"确诊数",value:29}]},
        {name:"广东",value:[{name:"确诊数",value:797}]},
        {name:"广西",value:[{name:"确诊数",value:139}]},
        {name:"海南",value:[{name:"确诊数",value:79}]},
        {name:"香港",value:[{name:"确诊数",value:15}]},
        {name:"澳门",value:[{name:"确诊数",value:9}]},
        {name:"台湾",value:[{name:"确诊数",value:10}]}
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
        min: 0,
        max: 500,
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
            color: ['#00467F', '#A5CC82'] // 蓝绿
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