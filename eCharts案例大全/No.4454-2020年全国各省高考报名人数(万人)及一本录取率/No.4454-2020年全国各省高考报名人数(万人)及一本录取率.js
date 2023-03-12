// 网址：http://gallery.echartsjs.com/editor.html?c=xrJU-aE-LG
var name_title = "2020年全国各省高考报名人数(万人)及一本录取率"
var subname = '数据来自百度搜索'
var nameColor = " rgb(55, 75, 113)"
var name_fontFamily = '等线'
var subname_fontSize = 18
var name_fontSize = 28
var mapName = 'china'
var data = [
    {name:"北京",value:4.9},
    {name:"天津",value:5.6},
    {name:"河北",value:62.48},
    {name:"山西",value:32.6},
    {name:"内蒙古",value:19.793},
    {name:"辽宁",value:24.4},
    {name:"吉林",value:14.2},
    {name:"黑龙江",value:21.13},
    {name:"上海",value:5},
    {name:"江苏",value:34.89},
    {name:"浙江",value:32.57},
    {name:"安徽",value:52.38},
    {name:"福建",value:20.26},
    {name:"江西",value:38.94},
    {name:"山东",value:53},
    {name:"河南",value:115.8},
    {name:"湖北",value:39.48},
    {name:"湖南",value:53.7},
    {name:"重庆",value:28.3},
    {name:"四川",value:67},
    {name:"贵州",value:47},
    {name:"云南",value:34.4},
    {name:"西藏",value:3},
    {name:"陕西",value:32.23},
    {name:"甘肃",value:26.31},
    {name:"青海",value:5.67},
    {name:"宁夏",value:6.03},
    {name:"新疆",value:22.93},
    {name:"广东",value:77.96},
    {name:"广西",value:50.7},
    {name:"海南",value:5.73},
    ];
    
var geoCoordMap = {};
var toolTipData = [ 
    {name:"北京",value:[ {name:"总人数",value:4.9},{name:"一本录取率",value:30.5+"%"},{name:"一本录取人数",value:1.4945}]},
    {name:"天津",value:[ {name:"总人数",value:5.6},{name:"一本录取率",value:24.1+"%"},{name:"一本录取人数",value:1.3496}]},
    {name:"河北",value:[ {name:"总人数",value:62.48},{name:"一本录取率",value:14.6+"%"},{name:"一本录取人数",value:9.1221}]},
    {name:"山西",value:[ {name:"总人数",value:32.6},{name:"一本录取率",value:9.8+"%"},{name:"一本录取人数",value:3.1948}]},
    {name:"内蒙古",value:[ {name:"总人数",value:19.793},{name:"一本录取率",value:14.0+"%"},{name:"一本录取人数",value:2.7710}]},
    {name:"辽宁",value:[ {name:"总人数",value:24.4},{name:"一本录取率",value:16.1+"%"},{name:"一本录取人数",value:3.9284}]},
    {name:"吉林",value:[ {name:"总人数",value:14.2},{name:"一本录取率",value:12.4+"%"},{name:"一本录取人数",value:1.7608}]},
    {name:"黑龙江",value:[ {name:"总人数",value:21.13},{name:"一本录取率",value:13.5+"%"},{name:"一本录取人数",value:2.8526}]},
    {name:"上海",value:[{name:"总人数",value:5},{name:"一本录取率",value:21.8+"%"},{name:"一本录取人数",value:1.09}]},
    {name:"江苏",value:[ {name:"总人数",value:34.89},{name:"一本录取率",value:12.1+"%"},{name:"一本录取人数",value:4.2217}]},
    {name:"浙江",value:[ {name:"总人数",value:32.57},{name:"一本录取率",value:14.0+"%"},{name:"一本录取人数",value:4.5598}]},
    {name:"安徽",value:[ {name:"总人数",value:52.38},{name:"一本录取率",value:14.2+"%"},{name:"一本录取人数",value:7.4380}]},
    {name:"福建",value:[ {name:"总人数",value:20.26},{name:"一本录取率",value:18.7+"%"},{name:"一本录取人数",value:3.7886}]},
    {name:"江西",value:[ {name:"总人数",value:38.94},{name:"一本录取率",value:10.4+"%"},{name:"一本录取人数",value:4.0498}]},
    {name:"山东",value:[ {name:"总人数",value:53},{name:"一本录取率",value:10.6+"%"},{name:"一本录取人数",value:5.618}]},
    {name:"河南",value:[ {name:"总人数",value:115.8},{name:"一本录取率",value:7.8+"%"},{name:"一本录取人数",value:9.0324}]},
    {name:"湖北",value:[ {name:"总人数",value:39.48},{name:"一本录取率",value:15.8+"%"},{name:"一本录取人数",value:6.2378}]},
    {name:"湖南",value:[ {name:"总人数",value:53.7},{name:"一本录取率",value:11.2+"%"},{name:"一本录取人数",value:6.0144}]},
    {name:"重庆",value:[{name:"总人数",value:28.3},{name:"一本录取率",value:11.5+"%"},{name:"一本录取人数",value:3.2545}]},
    {name:"四川",value:[ {name:"总人数",value:67},{name:"一本录取率",value:10.6+"%"},{name:"一本录取人数",value:7.102}]},
    {name:"贵州",value:[ {name:"总人数",value:47},{name:"一本录取率",value:14.5+"%"},{name:"一本录取人数",value:6.815}]},
    {name:"云南",value:[{name:"总人数",value:34.4},{name:"一本录取率",value:10.9+"%"},{name:"一本录取人数",value:3.7496}]},
    {name:"西藏",value:[ {name:"总人数",value:3},{name:"一本录取率",value:11.0+"%"},{name:"一本录取人数",value:0.33}]},
    {name:"陕西",value:[ {name:"总人数",value:32.23},{name:"一本录取率",value:14.6+"%"},{name:"一本录取人数",value:4.7056}]},
    {name:"甘肃",value:[ {name:"总人数",value:26.31},{name:"一本录取率",value:15.2},{name:"一本录取人数",value:3.9991}]},
    {name:"青海",value:[ {name:"总人数",value:5.67},{name:"一本录取率",value:15.2+"%"},{name:"一本录取人数",value:0.8618}]},
    {name:"宁夏",value:[ {name:"总人数",value:6.03},{name:"一本录取率",value:19.0+"%"},{name:"一本录取人数",value:1.1457}]},
    {name:"新疆",value:[{name:"总人数",value:22.93},{name:"一本录取率",value:12.9+"%"},{name:"一本录取人数",value:2.9580}]},
    {name:"广东",value:[ {name:"总人数",value:77.96},{name:"一本录取率",value:11.2+"%"},{name:"一本录取人数",value:8.7315}]},
    {name:"广西",value:[ {name:"总人数",value:50.7},{name:"一本录取率",value:8.4+"%"},{name:"一本录取人数",value:4.2588}]},
    {name:"海南",value:[ {name:"总人数",value:5.73},{name:"一本录取率",value:15.5+"%"},{name:"一本录取人数",value:0.8882}]},
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
var maxSize4Pin = 20,
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
        min: 0,
        max: 115,
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
            color: ['#A5CC82', '#00467F'] // 蓝绿
            // color: ['#1488CC', '#2B32B2'] // 浅蓝
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
                areaColor: '#FF0000',
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
                    color: '#ffffff'
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