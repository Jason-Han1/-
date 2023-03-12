
var name_title = "中国人民大学2017年各省市计划录取人数"
var subname = '数据爬取自千栀网\n，\n上海、浙江无文理科录取人数'
var nameColor = " rgb(55, 75, 113)"
var name_fontFamily = '等线'
var subname_fontSize = 15
var name_fontSize = 18
var mapName = 'china'
var data = [
        {name:"北京",value:69,scale:'2.72%'},
        {name:"天津",value:93,scale:'3.67%'},
        {name:"河北",value:113,scale:'4.46%'},
        {name:"山西",value:31,scale:'1.22%'},
        {name:"内蒙古",value:31,scale:'1.22%'},
        {name:"辽宁",value:55,scale:'2.17%'},
        {name:"吉林",value:29,scale:'1.14%'},
        {name:"黑龙江",value:71,scale:'2.80%'},
        {name:"上海",value:50,scale:'1.97%'},
        {name:"江苏",value:436,scale:'17.2%'},
        {name:"浙江",value:132,scale:'5.21%'},
        {name:"安徽",value:160,scale:'6.31%'},
        {name:"福建",value:68,scale:'2.68%'},
        {name:"江西",value:49,scale:'1.93%'},
        {name:"山东",value:143,scale:'5.64%'},
        {name:"河南",value:99,scale:'3.91%'},
        {name:"湖北",value:44,scale:'1.74%'},
        {name:"湖南",value:47,scale:'1.85%'},
        {name:"重庆",value:53,scale:'2.09%'},
        {name:"四川",value:83,scale:'3.27%'},
        {name:"贵州",value:60,scale:'2.37%'},
        {name:"云南",value:55,scale:'2.17%'},
        {name:"西藏",value:7,scale:'0.28%'},
        {name:"陕西",value:232,scale:'9.15%'},
        {name:"甘肃",value:44,scale:'1.74%'},
        {name:"青海",value:15,scale:'0.59%'},
        {name:"宁夏",value:61,scale:'2.41%'},
        {name:"新疆",value:76,scale:'3.00%'},
        {name:"广东",value:41,scale:'1.62%'},
        {name:"广西",value:44,scale:'1.74%'},
        {name:"海南",value:44,scale:'1.74%'},
    ];
    
var geoCoordMap = {};

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

console.log(data)
var max = 500,
    min = 10; // todo 
var maxSize4Pin = 50,
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
    console.log(res)
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
            console.log(params.data)
            if(params.data.scale){
                var toolTiphtml = params.data.name+':<br>'+params.data.scale
                return toolTiphtml;
            }
            return;
        }
    },
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
                return val[2] / 25;
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