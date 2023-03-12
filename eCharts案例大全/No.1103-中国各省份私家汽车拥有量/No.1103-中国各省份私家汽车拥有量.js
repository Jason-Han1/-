var name_title = "中国各省份私家汽车拥有量"
var nameColor = " rgb(0, 0, 0)"
var name_fontFamily = '宋体'
var name_fontSize = 38

var data = [

    {
        name: "北京",
        value: 497.03,
        scale: '2.21%'
    },
    {
        name: "天津",
        value: 259.43,
        scale: '1.15%'
    },
    {
        name: "河北",
        value: 1518.86,
        scale: '6.75%'
    },
    {
        name: "山西",
        value: 640.82,
        scale: '2.85%'
    },
    {
        name: "内蒙古",
        value: 530.39,
        scale: '2.36%'
    },
    {
        name: "辽宁",
        value: 750.63,
        scale: '3.33%        '
    },
    {
        name: "吉林",
        value: 408.08,
        scale: '1.81%        '
    },
    {
        name: "黑龙江",
        value: 463.57,
        scale: '2.06%      '
    },
    {
        name: "上海",
        value: 321.27,
        scale: '1.43%        '
    },
    {
        name: "江苏",
        value: 1639.89,
        scale: '7.29%       '
    },
    {
        name: "浙江",
        value: 1459.21,
        scale: '6.48%       '
    },
    {
        name: "安徽",
        value: 794.26,
        scale: '3.53%        '
    },
    {
        name: "福建",
        value: 590.51,
        scale: '2.62%        '
    },
    {
        name: "江西",
        value: 537.77,
        scale: '2.39%        '
    },
    {
        name: "山东",
        value: 2092.39,
        scale: '9.30%       '
    },
    {
        name: "河南",
        value: 1471.95,
        scale: '6.54%       '
    },
    {
        name: "湖北",
        value: 772.35,
        scale: '3.43%        '
    },
    {
        name: "湖南",
        value: 807.96,
        scale: '3.59%        '
    },
    {
        name: "广东",
        value: 2037.15,
        scale: '9.05%       '
    },
    {
        name: "广西",
        value: 613.4,
        scale: '2.73% '
    },
    {
        name: "海南",
        value: 117.91,
        scale: '0.52%        '
    },
    {
        name: "重庆",
        value: 403.3,
        scale: '1.79%         '
    },
    {
        name: "四川",
        value: 1058.68,
        scale: '4.70%       '
    },
    {
        name: "贵州",
        value: 487.45,
        scale: '2.17%        '
    },
    {
        name: "云南",
        value: 681.57,
        scale: '3.03%        '
    },
    {
        name: "西藏",
        value: 47.82,
        scale: '0.21%     '
    },
    {
        name: "陕西",
        value: 609.24,
        scale: '2.71%  '
    },
    {
        name: "甘肃",
        value: 290.91,
        scale: '1.29%'
    },
    {
        name: "青海",
        value: 99.64,
        scale: '0.44% '
    },
    {
        name: "宁夏",
        value: 143.16,
        scale: '0.64%'
    },
    {
        name: "新疆",
        value: 362.41,
        scale: '1.61%'
    },

];
var mapName = 'china'
var geoCoordMap = {};

/*获取地图数据*/
myChart.showLoading();
var mapFeatures = echarts.getMap(mapName).geoJson.features;
myChart.hideLoading();
mapFeatures.forEach(function(v) { // 地区名称
var name = v.properties.name;
// 地区经纬度
 geoCoordMap[name] = v.properties.cp;

});

console.log(data)
var max = 2100,
    min = 40; // todo 
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
    console.log(res)
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
      
    },
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            console.log(params.data)
            if (params.data.scale) {
                var toolTiphtml = params.data.name + ':<br>' + params.data.scale
                return toolTiphtml;
            }
            return;
        }
    },
    visualMap: {
        show: true,
        min: 40,
        max: 2100,
        left: 'left',
        top: 'bottom',
        text: ['2100万辆', '40万辆'], // 文本，默认为数值文本
        calculable: false,
        seriesIndex: [1],
        inRange: {
         
          color:['#00467F', '#A5CC82']
           
       
            
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
                return val[2] /100;
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
                return (a * val[2] + b);
            },
            label: {
                normal: {
                    formatter: '{@[2]}'+'万辆',
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: 15,
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
            name: 'Top 10',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data.sort(function(a, b) {
                return b.value - a.value;
            }).slice(0, 10)),
            symbolSize: function(val) {
                return val[2] / 100;
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