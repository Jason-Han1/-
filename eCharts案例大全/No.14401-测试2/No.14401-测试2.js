var uploadedDataURL = "/asset/get/s/data-1482909900836-H1BC_1WHg.json";
myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('shanghai', geoJson);
    myChart.hideLoading();
    var geoCoordMap = {
        '黄浦区': [121.490317, 31.222771],
        '徐汇区': [121.43752, 31.179973],
        '长宁区': [121.4222, 31.218123],
        '静安区': [121.448224, 31.229003],
        '普陀区': [121.392499, 31.241701],
        '闸北区': [121.465689, 31.25318],
        '虹口区': [121.491832, 31.26097],
        '杨浦区': [121.522797, 31.270755],
        '闵行区': [121.375972, 31.111658],
        '宝山区': [121.489934, 31.398896],
        '嘉定区': [121.250333, 31.383524],
        '浦东新区': [121.567706, 31.245944],
        '金山区': [121.330736, 30.724697],
        '松江区': [121.223543, 31.03047],
        '青浦区': [121.113021, 31.151209],
        '奉贤区': [121.458472, 30.912345],
        '崇明县': [121.397516, 31.626946],
    }
    var data = [{
        name: '黄浦区',
        value: 219
    }, {
        name: '徐汇区',
        value: 339
    }, {
        name: '长宁区',
        value: 412
    }, {
        name: '静安区',
        value: 429
    }, {
        name: '普陀区',
        value: 389
    }, {
        name: '闸北区',
        value: 352
    }, {
        name: '虹口区',
        value: 329
    }, {
        name: '杨浦区',
        value: 532
    }, {
        name: '闵行区',
        value: 299
    }, {
        name: '宝山区',
        value: 139
    }, {
        name: '嘉定区',
        value: 440
    }, {
        name: '浦东新区',
        value: 89
    }, {
        name: '金山区',
        value: 652
    }, {
        name: '松江区',
        value: 415
    }, {
        name: '青浦区',
        value: 329
    }, {
        name: '奉贤区',
        value: 752
    }, {
        name: '崇明县',
        value: 399
    }, ];
    var max = 1000,
        min = 0; // todo 
    var maxSize4Pin = 100,
        minSize4Pin = 0;

    var convertData = function(data) {
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
        backgroundColor: '#0f0c29',
        title: {
            text: '上海',
            subtext: 'data from Map',
            x: 'left',
            textStyle: {
                color: '#ccc'
            }
        },
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(12, 204, 104, 0.92)',
            borderColor: '#FFFFCC',
            showDelay: 0,
            hideDelay: 0,
            enterable: true,
            transitionDuration: 0,
            extraCssText: 'z-index:100',
            formatter: function(params, ticket, callback) {
                //根据业务自己拓展要显示的内容
                var res = "";
                var name = params.name;
                var value = params.value;
                res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
                return res;
            }
        },
        legend: {
            orient: 'vertical',
            y: 'bottom',
            x: 'right',
            data: ['credit_pm2.5'],
            textStyle: {
                color: '#fff'
            }
        },
        visualMap: {
            show: true,
            min: 0,
            max: 1000,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'], // 文本，默认为数值文本
            calculable: true,
            seriesIndex: [1],
            dimension: 0,
            inRange: {
                color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑

            },
            textStyle: {
                color: '#fff'
            }
        },
        geo: {
            map: 'shanghai',
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true, //是否允许缩放
            layoutCenter: ['50%', '50%'], //地图位置
            layoutSize: "95%",
            itemStyle: {
                normal: {
                    color: 'rgba(51, 69, 89, .5)', //地图背景色
                    borderColor: 'rgba(100,149,237,1)' //省市边界线
                },
                emphasis: {
                    color: 'rgba(37, 43, 61, .5)' //悬浮背景
                }
            }
        },
        series: [{
                name: 'credit_pm2.5',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(data),
                symbolSize: function(val) {
                    return val[2] / 30;
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
            }, {
                type: 'map',
                map: 'shanghai',
                geoIndex: 0,
                aspectScale: 0.75, //长宽比
                showLegendSymbol: false, // 存在legend时显示
                label: {
                    normal: {
                        show: false
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
            }, {
                name: '前五名',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData(data.sort(function(a, b) {
                    return b.value - a.value;
                }).slice(0, 5)),
                symbolSize: function(val) {
                    return val[2] / 30;
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
                        color: '#eac736',
                        shadowBlur: 10,
                        shadowColor: '#05C3F9'
                    }
                },
                zlevel: 1
            },

        ]
    };
    myChart.setOption(option);

    var counts = option.series[0].data.length; //获取所有闪动圆环数量
    var dataIndex = 0;
    //让圆环的提示框自动触发轮播显示
    function autoHoverTip() {
        for (var i = 0; i < counts; i++) {
            (function(i) {
                ts = setTimeout(function() {
                    myChart.dispatchAction({
                        type: 'showTip',
                        seriesIndex: 1,
                        dataIndex: i
                    });
                }, 5000 * i);
            })(i);
        }
    }

    setTimeout(function() {
        autoHoverTip();
        tv = setInterval(autoHoverTip, counts * 1000);
    }, 500);
});