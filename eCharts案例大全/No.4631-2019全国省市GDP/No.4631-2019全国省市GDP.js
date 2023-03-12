
var name_title = "2019年全国省市GDP"
var subname = '数据来源：百度城市GDP贴吧\n，\n单位：(亿元)'
var nameColor = " #663366"
var name_fontFamily = '等线'
var subname_fontSize = 15
var name_fontSize = 26
var mapName = 'china'
var data = [
    {name:"北京",value:35371.3},
    {name:"天津",value:14104.28},
    {name:"河北",value:35104.5},
    {name:"山西",value:17026.68},
    {name:"内蒙古",value:17212.5},
    {name:"辽宁",value:24909.5},
    {name:"吉林",value:11726.8},
    {name:"黑龙江",value:13612.7},
    {name:"上海",value:38155.32},
    {name:"江苏",value:99631.52},
    {name:"浙江",value:62352},
    {name:"安徽",value:37114},
    {name:"福建",value:42395},
    {name:"江西",value:34757.5},
    {name:"山东",value:71067.5},
    {name:"河南",value:54259.2},
    {name:"湖北",value:45828.31},
    {name:"湖南",value:39752.12},
    {name:"重庆",value:23605.77},
    {name:"四川",value:46615.82},
    {name:"贵州",value:16769.34},
    {name:"云南",value:23223.75},
    {name:"西藏",value:1697.82},
    {name:"陕西",value:25793.17},
    {name:"甘肃",value:8718.3},
    {name:"青海",value:2965.95},
    {name:"宁夏",value:3748.48},
    {name:"新疆",value:13597.11},
    {name:"广东",value:107671.07},
    {name:"广西",value:21237.14},
    {name:"海南",value:5308.94},
    ];
    
var geoCoordMap = {};
var toolTipData = [ 
   {name:"北京",value:35371.3},
    {name:"天津",value:14104.28},
    {name:"河北",value:35104.5},
    {name:"山西",value:17026.68},
    {name:"内蒙古",value:17212.5},
    {name:"辽宁",value:24909.5},
    {name:"吉林",value:11726.8},
    {name:"黑龙江",value:13612.7},
    {name:"上海",value:38155.32},
    {name:"江苏",value:99631.52},
    {name:"浙江",value:62352},
    {name:"安徽",value:37114},
    {name:"福建",value:42395},
    {name:"江西",value:34757.5},
    {name:"山东",value:71067.5},
    {name:"河南",value:54259.2},
    {name:"湖北",value:45828.31},
    {name:"湖南",value:39752.12},
    {name:"重庆",value:23605.77},
    {name:"四川",value:46615.82},
    {name:"贵州",value:16769.34},
    {name:"云南",value:23223.75},
    {name:"西藏",value:1697.82},
    {name:"陕西",value:25793.17},
    {name:"甘肃",value:8718.3},
    {name:"青海",value:2965.95},
    {name:"宁夏",value:3748.48},
    {name:"新疆",value:13597.11},
    {name:"广东",value:107671.07},
    {name:"广西",value:21237.14},
    {name:"海南",value:5308.94},
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

console.log(data)
console.log(toolTipData)
var max = 12000,
    min = 10; // todo 
var maxSize4Pin = 8,
    minSize4Pin = 3;

var convertData = function (data) {
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
            formatter: function (params) {
              if(typeof(params.value)[2] == "undefined"){
              	return params.name + ' : ' + params.value;
              }else{
              	return params.name + ' : ' + params.value[2];
              }
            }
        },
    
    visualMap: {
        show: true,
        min: 1500,
        max: 120000,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'], // 文本，默认为数值文本
        calculable: true,
        seriesIndex: [1],
        inRange: {
             color: ['#600060', '#FFFFFF'] //紫白
         
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
                areaColor: '#CC99CC',
            }
        }
    },
    series: [{
            name: '散点',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function(val) {
                return val[2] / 4000;
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
                    color: '#FF9900'
                }
            }
        },
        {
            type: 'map',
            map: mapName,
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            encode:{
              value:2
            },
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
                    areaColor: '#DD78DD'
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
            encode:{
              value:2
            },
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
                    color: '#FF0000', //标志颜色
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
                return val[2] / 4000;
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