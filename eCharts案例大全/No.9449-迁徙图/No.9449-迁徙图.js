var avg = 45;
var colors = ["#77f90b", "#0efffe", "#fada37", "#fd4747"];
var geoCoordMap = {
    '房山区': [115.928155, 39.697183],
    '昌平区': [116.247808, 40.247465],
    '大兴区': [116.392687, 39.375762],
    '密云区': [117.008996, 40.520052],
    '顺义区': [116.756034, 40.137236],
    '东城区': [116.418757, 39.917544],
    '西城区': [116.366794, 39.915309],
    '朝阳区': [116.756034, 40.137236],
    '石景区': [116.195445, 39.914601],
    '丰台区': [116.286968, 39.863642],
    '石家庄市': [114.502461, 38.045474],
    '邯郸市': [114.490686, 36.612273],
    '沧州市': [116.857461, 38.310582],
    '廊坊市': [116.704441, 39.523927],
    '保定市': [115.482331, 38.867657],
    '承德市': [117.939152, 40.976204],
    '西青区': [117.012247, 39.139446],
    '武清区': [117.057959, 39.376925],
    '东丽区': [117.313967, 39.087764]
}

var BJData = {
    eare1: [
        [{
            name: '丰台区'
        }, {
            name: '石家庄市',
            value: 45
        }],
        [{
            name: '丰台区'
        }, {
            name: '廊坊市',
            value: 70
        }],
        [{
            name: '丰台区'
        }, {
            name: '廊坊市',
            value: 170
        }],
        [{
            name: '丰台区'
        }, {
            name: '保定市',
            value: 170
        }],
    ],
    eare2: [
        [{
            name: '丰台区'
        }, {
            name: '西青区',
            value: 100
        }],
        [{
            name: '丰台区'
        }, {
            name: '武清区',
            value: 150
        }],
        [{
            name: '丰台区'
        }, {
            name: '东丽区',
            value: 50
        }]
    ]
};

//从两个地图的的地理坐标 转换为飞线数据
var convertData = function(data) {
    var res = [];
    for (let index in data) {
        var dataItem = data[index];
        var _dex = parseInt(index.replace("eare", ""));
        for (var i = 0; i < dataItem.length; i++) {
            var childItem = dataItem[i];
            var from = myChart.convertToPixel({
                geoIndex: 0
            }, geoCoordMap[childItem[0].name]);
            from = myChart.convertFromPixel('grid', from);
            var to = myChart.convertToPixel({
                geoIndex: _dex
            }, geoCoordMap[childItem[1].name]);
            to = myChart.convertFromPixel('grid', to);
            res.push({
                coords: [from, to],
                value: childItem[1].value,
                fromName: childItem[0].name,
                toName: childItem[1].name
            });
        }

    }
    return res;
};

var option = {
    backgroundColor: "#edf7f7",
    tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderColor: '#ffc',
        enterable: true,
        padding: [0, 10],
        formatter: function(params) {
            var name = params.name;
            var value = params.value[2];
            if (name == undefined || value == undefined) {
                return;
            } else {
                var res = "";
                res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
                return res;
            }

        }
    },
    xAxis: {
        type: 'value',
        show: false,
        min: 0,
        max: 100,
        position: 'top'
    },
    yAxis: {
        type: 'value',
        show: false,
        min: 0,
        max: 100,
        inverse: true
    },
    geo: [{
            id: '北京',
            map: '北京',
            roam: false,//控制地图是否可以缩放
            center: [117.6, 40.3],
            zoom: 0.8,
            label: {
                normal: { //静态的时候展示样式
                    show: true, //是否显示地图省份得名称
                    textStyle: {
                        color: 'rgb(249, 249, 249)',
                        fontSize: 12,
                        fontFamily: "Arial"
                    }
                },
                emphasis: { //动态展示的样式
                    color: '#43d0d6',
                },
            },
            itemStyle: {
                normal: {
                    color: 'rgba(1, 57, 84, .8)', //地图背景色
                    borderColor: '#516a89', //省市边界线
                    borderWidth: 1
                },
                emphasis: {
                    color: 'rgba(1, 57, 84, 0.9)' //悬浮背景
                }
            }
        },
        {
            id: '河北',
            map: '河北',
            roam: false,
            center: [112, 37],
            zoom: 0.7,
            label: {
                normal: { //静态的时候展示样式
                    show: false, //是否显示地图省份得名称
                    textStyle: {
                        color: 'rgb(249, 249, 249)',
                        fontSize: 10,
                        fontFamily: "Arial"
                    }
                },
                emphasis: { //动态展示的样式
                    color: 'transparent',
                },
            },
            itemStyle: {
                normal: {
                    color: 'rgba(1, 57, 84, .8)', //地图背景色
                    borderColor: '#516a89', //省市边界线00fcff 516a89
                    borderWidth: 1
                },
                emphasis: {
                    color: 'rgba(1, 57, 84, 0.9)' //悬浮背景
                }
            }
        },
        {
            id: '天津',
            map: '天津',
            roam: false,
            center: [115.9, 39.6],
            zoom: 0.7,
            label: {
                normal: { //静态的时候展示样式
                    show: false, //是否显示地图省份得名称
                    textStyle: {
                        color: 'rgb(249, 249, 249)',
                        fontSize: 10,
                        fontFamily: "Arial"
                    }
                },
                emphasis: { //动态展示的样式
                    color: 'transparent',
                },
            },
            itemStyle: {
                normal: {
                    color: 'rgba(1, 57, 84, .8)', //地图背景色
                    borderColor: '#516a89', //省市边界线00fcff 516a89
                    borderWidth: 1
                },
                emphasis: {
                    color: 'rgba(1, 57, 84, 0.9)' //悬浮背景
                }
            }
        }
    ],
    series: []
};
setTimeout(function() {
    myChart.setOption({
        series: [{
                type: 'lines',
                coordinateSystem: 'cartesian2d',
                xAxisIndex: 0,
                yAxisIndex: 0,
                zlevel: 2,
                effect: {
                    show: true,
                    period: 4, //箭头指向速度，值越小速度越快
                    trailLength: 0.04, //特效尾迹长度[0,1]值越大，尾迹越长重
                    symbol: 'arrow', //箭头图标
                    symbolSize: 7, //图标大小
                    color: "#fff",
                },
                lineStyle: {
                    normal: {
                        color: function(params) {
                            var num = params.value;
                            if (num > 0 && num <= avg) {
                                return colors[0];
                            } else if (num > avg && num <= 2 * avg) {
                                return colors[1];
                            } else if (num > 2 * avg && num <= 3 * avg) {
                                return colors[2];
                            }
                        },
                        width: 1, //尾迹线条宽度
                        opacity: 1, //尾迹线条透明度
                        curveness: .3 //尾迹线条曲直度
                    }
                },
                data: convertData(BJData)
            },
            {
                type: 'effectScatter',
                coordinateSystem: 'cartesian2d',
                zlevel: 3,
                rippleEffect: { //涟漪特效
                    period: 4, //动画时间，值越小速度越快
                    brushType: 'stroke', //波纹绘制方式 stroke, fill
                    scale: 4 //波纹圆环最大限制，值越大波纹越大
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right', //显示位置
                        offset: [5, 0], //偏移设置
                        formatter: function(params) { //圆环显示文字
                            return params.data.name;
                        },
                        fontSize: 13
                    },
                    emphasis: {
                        show: true,
                        label: {
                            show: true,
                        }
                    }
                },
                symbol: 'circle',
                symbolSize: function(val) {
                    return 10; //圆环大小
                },
                itemStyle: {
                    normal: {
                        show: false,
                        color: function(params) {
                            var num = params.value[2];
                            if (num > 0 && num <= avg) {
                                return colors[0];
                            } else if (num > avg && num <= 2 * avg) {
                                return colors[1];
                            } else if (num > 2 * avg && num <= 3 * avg) {
                                return colors[2];
                            }
                        },
                    }
                },
                data: convertData(BJData).map(function(dataItem) {
                    return {
                        name: dataItem.toName,
                        value: dataItem.coords[1].concat([dataItem.value])
                    };
                }),
            },
        ]
    });
}, 10);