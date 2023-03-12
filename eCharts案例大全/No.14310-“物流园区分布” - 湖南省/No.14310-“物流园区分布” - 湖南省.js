var uploadedDataURL = "/asset/get/s/data-1518063087200-BkPxCBtIG.json";

//var uploadedDataURL = "/asset/get/s/data-1514342693837-rJR7KYemM.json";


myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('neimenggu', geoJson);
    myChart.hideLoading();
    var geoCoordMap = {
        '呼和浩特': [111.769261, 40.870514],
        '呼和浩特白塔机场': [111.833178, 40.859244],
        '呼和<b>浩特出口</b>加工区': [111.533627, 40.784795],
        '鄂尔多斯伊金霍洛机场': [109.873114, 39.501839],
        '满洲里西郊机场': [117.346433, 49.578928],
        '满洲里铁路': [117.427562, 49.597422],
        '满洲里二卡口岸': [117.749726, 49.521265],
        '满洲里十八里口岸': [117.388269, 49.633523],
        '阿日哈沙特口岸': [115.877281, 48.601564],
        '满洲里综合保税区': [117.388269, 49.633523],
        '二连浩特铁路': [112.035356, 43.616498],
        '二连浩特公路': [111.982579, 43.66466],
        '海拉尔东山机场': [119.831036, 49.218291],
        '额布都格': [118.202663, 48.061892],
        '胡列也吐': [119.773346, 49.207869],
        '满都拉': [116.08482, 43.946392],
        '黑山头': [119.584946, 50.221065],
        '室韦': [119.909651, 51.346806],
        '策克': [101.285437, 42.541945],
        '珠恩嘎达布其': [116.260819, 45.755168],
        '甘其毛都': [107.585974, 42.415918],
        '巴格毛都': [107.201779, 42.000301],
        '阿尔山': [119.538404, 47.334095],
    }
    var data = [{
            name: '呼和浩特',
            value: 9
        },
        {
            name: '呼和浩特白塔机场',
            value: 12
        },
        {
            name: '呼和浩特出口加工区',
            value: 12
        },
        {
            name: '鄂尔多斯伊金霍洛机场',
            value: 12
        },
        {
            name: '满洲里西郊机场',
            value: 14
        },
        {
            name: '满洲里铁路',
            value: 15
        },
        {
            name: '满洲里二卡口岸',
            value: 16
        },
        {
            name: '满洲里十八里口岸',
            value: 18
        },
        {
            name: '阿日哈沙特口岸',
            value: 18
        },
        {
            name: '满洲里综合保税区',
            value: 19
        },
        {
            name: '二连浩特铁路',
            value: 21
        },
        {
            name: '二连浩特公路',
            value: 23
        },
        {
            name: '海拉尔东山机场',
            value: 24
        },
        {
            name: '额布都格',
            value: 24
        },
        {
            name: '胡列也吐',
            value: 25
        },
        {
            name: '满都拉',
            value: 25
        },
        {
            name: '黑山头',
            value: 25
        },
        {
            name: '室韦',
            value: 26
        },
        {
            name: '策克',
            value: 27
        },
        {
            name: '珠恩嘎达布其',
            value: 30
        },
        {
            name: '甘其毛都',
            value: 38
        },
        {
            name: '巴格毛都',
            value: 43
        },
        {
            name: '阿尔山',
            value: 54
        }
    ];
    var max = 480,
        min = 9; // todo 
    var maxSize4Pin = 100,
        minSize4Pin = 20;

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
        title: {
            text: '“口岸分布” - 内蒙古自治区',
            subtext: '',
            x: 'center',
            textStyle: {
                color: '#ccc'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                if (typeof(params.value)[2] == "undefined") {
                    return params.name + ' : ' + params.value;
                } else {
                    return params.name + ' : ' + params.value[2];
                }
            }
        },
        legend: {
            /* orient: 'vertical',
             y: 'bottom',
             x: 'right',
             data: ['credit_pm2.5'],
             textStyle: {
                 color: '#fff'
             }*/
            orient: 'vertical',
            y: 'top',
            x: 'left',
            data: ['500'],
            textStyle: {
                color: '#24243e'
            }
        },
        visualMap: {
            show: false,
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
                //color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
                color: ['#D9DEE4']
                // color: ['#23074d', '#cc5333'] // 紫红
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#1488CC', '#2B32B2'] // 浅蓝
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#00467F', '#A5CC82'] // 蓝绿

            }
        },
        geo: {
            show: true,
            map: 'neimenggu',
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

                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(data),
                symbolSize: function(val) {
                    return val[2] / 10;
                },
                label: {
                    normal: {
                        formatter: '11{b}',
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
                map: 'neimenggu',
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
                name: '点',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbol: 'pin',
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
                        color: '#F62157', //标志颜色
                    }
                },
                zlevel: 6,
                data: convertData(data),
            }, {
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
                        color: '#05C3F9',
                        shadowBlur: 10,
                        shadowColor: '#05C3F9'
                    }
                },
                zlevel: 1
            },

        ]
    };
    myChart.setOption(option);
});