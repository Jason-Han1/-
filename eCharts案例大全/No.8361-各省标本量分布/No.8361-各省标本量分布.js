var nameColor = " rgb(55, 75, 113)"
var name_fontFamily = '等线'
var subname_fontSize = 15
var name_fontSize = 18
var mapName = 'china'
var data = [{
        name: "青海",
        value: 85.7
    },
    {
        name: "江苏",
        value: 77.6
    },
    {
        name: "北京",
        value: 64.8
    },
    {
        name: "浙江",
        value: 58.4
    },
    {
        name: "安徽",
        value: 47.1
    },
    {
        name: "河北",
        value: 43.1
    },
    {
        name: "内蒙古",
        value: 38.5
    },
    {
        name: "黑龙江",
        value: 37.5
    },
    {
        name: "广东",
        value: 35.4
    },
    {
        name: "云南",
        value: 32.8
    },
    {
        name: "湖南",
        value: 32.8
    },
    {
        name: "四川",
        value: 32.1
    },
    {
        name: "辽宁",
        value: 31.4
    },
    {
        name: "江西",
        value: 29.2
    },
    {
        name: "陕西",
        value: 26.9
    },
    {
        name: "重庆",
        value: 26.2
    },
    {
        name: "山东",
        value: 23.9
    },
    {
        name: "福建",
        value: 20.1
    },
    {
        name: "天津",
        value: 19.3
    },
    {
        name: "新疆",
        value: 15.3
    },
    {
        name: "河南",
        value: 14.9
    },
    {
        name: "广西",
        value: 6.9
    },
    {
        name: "上海",
        value: 4.8
    },

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
var yData = [];
var barData = [];
var max = 480,
    min = 9; // todo 
var maxSize4Pin = 100,
    minSize4Pin = 20;

for (var i = 0; i < 10; i++) {
    barData.push(data[i]);
    yData.push(i + data[i].name);
}

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

    title: [{
        show: true,
        text: '各省平均标本量排名TOP10',
        textStyle: {
            color: '#2D3E53',
            fontSize: 15
        },
        right: 60,
        top: 100
    }],
    tooltip: {
        show: true,
        formatter: function(params) {
            return params.name + '：' + params.data['value']
        },
    },
    visualMap: {
        type: 'continuous',
        orient: 'horizontal',
        itemWidth: 10,
        itemHeight: 100,
        text: ['高', '低'],
        showLabel: true,
        seriesIndex: [0],
        min: 0,
        max: 100,
        inRange: {
            color: ['#fff', '#fff', '#fff']
        },
        textStyle: {
            color: '#7B93A7'
        },
        bottom: 30,
        left: 'left',
        show: true
    },
    grid: {
        right: 10,
        top: 135,
        bottom: 100,
        width: '20%'
    },
    xAxis: {
        show: false
    },
    yAxis: {
        type: 'category',
        inverse: true,
        nameGap: 16,
        axisLine: {
            show: false,
            lineStyle: {
                color: '#ddd'
            }
        },
        axisTick: {
            show: false,
            lineStyle: {
                color: '#ddd'
            }
        },
        axisLabel: {
            interval: 0,
            margin: 85,
            textStyle: {
                color: '#455A74',
                align: 'left',
                fontSize: 14
            },
            rich: {
                a: {
                    color: '#fff',
                    backgroundColor: '#FAAA39',
                    width: 20,
                    height: 20,
                    align: 'center',
                    borderRadius: 2
                },
                b: {
                    color: '#fff',
                    backgroundColor: '#4197FD',
                    width: 20,
                    height: 20,
                    align: 'center',
                    borderRadius: 2
                }
            },
            formatter: function(params) {
                if (parseInt(params.slice(0, 1)) < 3) {
                    return [
                        '{a|' + (parseInt(params.slice(0, 1)) + 1) + '}' + '  ' + params.slice(1)
                    ].join('\n')
                } else {
                    return [
                        '{b|' + (parseInt(params.slice(0, 1)) + 1) + '}' + '  ' + params.slice(1)
                    ].join('\n')
                }
            }
        },
        data: yData
    },
    geo: {
        // roam: true,
        map: 'china',
        // layoutSize: '80%',
        left: 'left',
        right: '300',
        label: {

            normal: {
                show: !0,
                fontSize: "8",

                color: "rgba(0,0,0,0.7)"
            }
        },
        itemStyle: {
            emphasis: {
                areaColor: '#fff464'
            }
        }
    },

    series: [{
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
                        color: '#562012'
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
                        color: '#e93f58',
                        fontSize: 20,
                        fontWeight:'bold'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#fff', //标志颜色
                }
            },
            zlevel: 6,
            data: convertData(data),
        }, {
            name: 'barSer',
            type: 'bar',
            roam: false,
            visualMap: false,
            zlevel: 2,
            barMaxWidth: 8,
            barGap: 0,
            label: {
                normal: {
                    show: true,
                
                    textStyle: {
                        color: '#1b221f',
                        fontSize: 16,
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [{
                                colorStops: [{
                                    offset: 0,
                                    color: '#FFD119' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#FFAC4C' // 100% 处的颜色
                                }]
                            },
                            {
                                colorStops: [{
                                    offset: 0,
                                    color: '#00C0FA' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#2F95FA' // 100% 处的颜色
                                }]
                            }
                        ];
                        if (params.dataIndex < 3) {
                            return colorList[0]
                        } else {
                            return colorList[1]
                        }
                    },
                    barBorderRadius: 15
                }
            },
            data: barData
        }

    ]
};
myChart.setOption(option);