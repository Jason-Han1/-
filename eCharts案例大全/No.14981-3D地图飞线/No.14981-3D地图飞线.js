var uploadedDataURL_data = "/asset/get/s/data-1502774981085-HJaaUZgd-.json";

var uploadedDataURL_map = "/asset/get/s/data-1502776163655-BynDiZe_b.json";

function show() {
    $.getJSON(uploadedDataURL_data, function(map_data) {
    $.get(uploadedDataURL_map, function(jiangyinJson) {
        echarts.registerMap('jiangyin', jiangyinJson);
            var JYData = map_data.JYdata; //接受信息的数据
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
                    // fromName: dataItem[0].name,
                    // toName: dataItem[1].name,
                    coords: [fromCoord, toCoord],
                    value:dataItem[1].value
                });
            }
        }
        return res;
    }; //飞线起点和终点的方法

    var color = ['#f4e925']; //线的颜色
        var JYseries = [];
               myChart.setOption({
                geo3D:{
                    map:'jiangyin'
                },
                series: [{
                    type: 'map3D',
                    name: '江阴',
                    boxWidth: 100,
                    boxHeight: 10,
                    regionHeight: 2,
                    map: 'jiangyin',
                    environment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00aaff' // 天空颜色
                    }, {
                        offset: 0.7,
                        color: '#998866' // 地面颜色
                    }, {
                        offset: 1,
                        color: '#998866' // 地面颜色
                    }], false),
                    groundPlane:{
                        show:false
                    },
                    label:{
                        show:false
                    },
                    itemStyle:{
                        areaColor:"#5896A7",
                        opacity:1,
                        borderWidth:1
                    },
                    // data:{},
//                    data: [{"name":"主机","value":"400","regionHeight":"100"}],
                    light: {
                        main: {
                            intensity: 1
                        },
                        ambient: {
                            intensity: 0.2
                        },
                        visualMap: {
                            show: true,
                            min: 0,
                            max: 15,
                            inRange: {
                                color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
                            }
                        }
                    },
                    viewControl:{
                        autoRotate:false,
                        distance:100
                    }

                },
                                    {
                                        type: 'lines3D', //类型为线型
                                        name: '飞线',
                                        coordinateSystem:'geo3D',
                                        geo3DIndex:0,
                                        zlevel: 2, //浮现在模板上面
                                        effect: {
                                            // animation: false,
                                            show: true,
                                            constantSpeed: 70, //速度
                                            trailLength: 0.5, //尾巴长度
                                            trailColor: '#fff', //颜色
                                            trailWidth:4
                                            // symbolSize: 3 //宽度
                                        }, //效果
                                        lineStyle: {
                                            color: color[0], //颜色
                                            width: 0 //外框
                                            // curveness: 0.2 //弧度
                                        }, //线的效果
                                        data: convertData(JYData)
                                    } ,//飞线
                     {
                        type: 'bar3D',
                        name: '地区',
                        coordinateSystem: 'geo3D',
                        data: convertData2(map_data.jiangyin_value),
                        symbolSize: function(val) {
                            return val[2] / 10; //重要性比例
                        },
//                        label: {
//                            normal: {
//                                formatter: '{b}',
//                                position: 'right',
//                                show: false
//                            },
//                            //标签显示
//                            emphasis: {
//                                show: true
//                            }
//                        },
                        itemStyle: {
                            normal: {
                                color: '#BBA02C' //地区颜色

                            }

                        },
                         zlevel: 2
                    }
                    , {
                        type: 'bar3D',
                        name: '接收点',
                        coordinateSystem: 'geo3D',
                        data: convertData2(map_data.jiangyin_value.sort(function(a, b) {
                            return b.value - a.value;
                        }).slice(0, 1)),
                        symbolSize: function(val) {
                            return val[2] / 10; //接受点的重要性比例
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
                        name: '发出点',
                        type: 'bar3D',
                        coordinateSystem: 'geo3D',
                        data: convertData1(JYData),
                        symbolSize: function(val) {
                            return val[2] / 5; //比例
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
                                color: '#f4e925',
                                shadowBlur: 10,
                                shadowColor: '#333'
                            } //阴影效果
                        },
                        zlevel: 10
                    }
                ]
            });
    });
});
}
show()