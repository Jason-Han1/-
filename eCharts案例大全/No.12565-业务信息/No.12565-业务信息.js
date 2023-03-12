var uploadedDataURL = "/asset/get/s/data-1545288264988-dJuw8gGVb.png";

var jnMap = "/asset/get/s/data-1545269022588-ITAd8LEcz.json"; //江宁地图

var map_data = {
  "jiangyin_value":[
    {"name":"江宁产业云","value":400},
    {"name":"江宁开发区","value":120},
    {"name":"滨江开发区","value":40},
    {"name":"江宁高新园","value":150},
    {"name":"4号","value":250},

  ],
  "jiangyin_geoCoordMap":{
  "江宁产业云": [118.602219,32.02533],
  "江宁开发区":[118.789233,31.927150],
   "滨江开发区":[118.592459,31.830597],
   "江宁高新园":[118.864742,31.853386]
},
  "JNdata":[
    [{"name":"江宁开发区"}, {"name":"江宁产业云","value":"200"}],
    [{"name":"滨江开发区"}, {"name":"江宁产业云","value":"200"}],
    [{"name":"江宁高新园"}, {"name":"江宁产业云","value":"200"}]
  ]
};
    $.getJSON(jnMap, function(map) {
        echarts.registerMap('jiangning', map);
    var JNdata = map_data.JNdata; //接受信息的数据
    var convertData2 = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = map_data.jiangyin_geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    }; //接受信息的地区与其经纬匹配的方法
    var convertData1 = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = map_data.jiangyin_geoCoordMap[data[i][0].name];
            if (geoCoord) {
                res.push({
                    name: data[i][0].name,
                    value: geoCoord.concat(data[i][1].value)
                });
            }
        }
        return res;
    }; //各地区重要性与其经纬度匹配的方法

    var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = map_data.jiangyin_geoCoordMap[dataItem[0].name];
            var toCoord = map_data.jiangyin_geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name,
                    toName: dataItem[1].name,
                    coords: [fromCoord, toCoord]
                });
            }
        }
        return res;
    }; //飞线起点和终点的方法

    var color = ['#f4e925']; //线的颜色
    var JNseries = [];
    [
        ['产业云', JNdata]
    ].forEach(function(item, i) {
        JNseries.push({
                name: '飞线',
                type: 'lines', //类型为线型
                zlevel: 2, //浮现在模板上面
                effect: {
                    animation: false,
                    show: true,
                    constantSpeed: 70, //速度
                    trailLength: 0.5, //尾巴长度
                    color: '#fff', //颜色
                    symbolSize: 4 //宽度
                }, //效果
                lineStyle: {
                    normal: {
                        color: color[i], //颜色
                        width: 0, //外框
                        curveness: 0.2 //弧度
                    }
                }, //线的效果
                data: convertData(item[1])
            } //飞线
            , {
                name: '地区',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData2(map_data.jiangyin_value),
                symbolSize: function(val) {
                    return val[2] / 15; //重要性比例
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    //标签显示
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#BBA02C' //地区颜色

                    },

                }
            } //各地区具体显示
            , {
                name: '接收点',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData2(map_data.jiangyin_value.sort(function(a, b) {
                    return b.value - a.value;
                }).slice(0, 1)),
                symbolSize: function(val) {
                    return val[2] / 100; //接受点的重要性比例
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
                }, //标签
                itemStyle: {
                    normal: {
                        color: '#f4e925',
                        shadowBlur: 10, //阴影大小
                        shadowColor: '#333' //阴影颜色
                    }
                },
                zlevel: 1
            } //接收点
            , {
                name: '',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData1(JNdata),
                symbolSize: function(val) {
                    return val[2] / 10; //比例
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
                        color: '#fff',
                        shadowBlur: 10,
                        shadowColor: '#333'
                    } //阴影效果
                },
                zlevel: 1
            }
        );
        console.log(JNseries)
    });

    option = {
        backgroundColor: '#0b0c26', //整体背景颜色
        title: [{
                text: '产业云分布',
                subtext: '南京市江宁区',
                left: 'center',
                textStyle: {
                    color: '#fff'
                }
            } //标题属性
        ],
        tooltip: {
            trigger: 'item',
            formatter:'{b}',
        }, //信息显示
        grid: {
            right: 40,
            top: 100,
            bottom: 40,
            width: '30%'
        },
        legend: {
            orient: 'vertical',
            top: 'bottom',
            left: 'right',
            data: ['企业分布情况'],
            textStyle: {
                color: '#fff'
            },
            selectedMode: 'single'
        },
        geo: {
            map: 'jiangning', //地图名称
            label: {
                emphasis: {
                    show: false
                }
            }, //地图标签
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#133095', //内部颜色
                    borderColor: '#404a59' //外部颜色
                },
                emphasis: {
                    areaColor: '#2a333d' //触摸后的颜色
                }
            }
        }, //地图信息
        series: JNseries
    };
    myChart.setOption(option);
    });
//});