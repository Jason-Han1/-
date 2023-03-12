var uploadedDataURL = "/asset/get/s/data-1520413844487-rknqhXp_f.json";

myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('shanghai', geoJson);
    myChart.hideLoading();
    var geoCoordMap = {
        '浦东新区': [121.7795171, 31.13357039],
        '宝山区': [121.4402384, 31.3583161],
        '金山区': [121.3070063, 30.73722838],
    }
    var data = [{
            name: '崇明县',
            value: 393
        },
        {
            name: '宝山区',
            value: 30
        },
        {
            name: '嘉定区',
            value: 1790
        },
        {
            name: '青浦区',
            value: 757
        },
        {
            name: '杨浦区',
            value: 714
        },
        {
            name: '虹口区',
            value: 2261
        },
        {
            name: '闸北区',
            value: 359
        },
        {
            name: '普陀区',
            value: 1139
        },
        {
            name: '静安区',
            value: 127
        },
        {
            name: '黄浦区',
            value: 393
        },
        {
            name: '卢湾区',
            value: 0
        },
        {
            name: '长宁区',
            value: 259
        },
        {
            name: '徐汇区',
            value: 270
        },
        {
            name: '浦东新区',
            value: 31
        },
        {
            name: '松江区',
            value: 860
        },
        {
            name: '闵行区',
            value: 1545
        },
        {
            name: '金山区',
            value: 21
        },
        {
            name: '奉贤区',
            value: 1573
        },
        {
            name: '南汇区',
            value: 0
        }
    ];
    var max = 4800,
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
            text: 'shanghai',
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
            orient: 'vertical',
            y: 'bottom',
            x: 'right',
            data: ['credit_pm2.5'],
            textStyle: {
                color: '#fff'
            }
        },
        visualMap: {
            show: false,
            min: 0,
            max: 5000,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'],
            calculable: true,
            seriesIndex: [1],
            inRange: {
                color: ['#0f0c29', '#302b63', '#24243e']
            }
        },
        geo: {
            show: true,
            map: 'shanghai',
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
                name: 'credit_pm2.5',
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
                map: 'shanghai',
                geoIndex: 0,
                aspectScale: 0.75,
                showLegendSymbol: false,
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
            },
            {
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
                        color: '#F62157',
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