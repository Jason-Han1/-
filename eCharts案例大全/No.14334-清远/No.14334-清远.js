/**
此版本通过设置geoindex && seriesIndex: [1] 属性来实现geo和map共存，来达到hover散点和区域显示tooltip的效果

默认情况下，map series 会自己生成内部专用的 geo 组件。但是也可以用这个 geoIndex 指定一个 geo 组件。这样的话，map 和 其他 series（例如散点图）就可以共享一个 geo 组件了。并且，geo 组件的颜色也可以被这个 map series 控制，从而用 visualMap 来更改。
当设定了 geoIndex 后，series-map.map 属性，以及 series-map.itemStyle 等样式配置不再起作用，而是采用 geo 中的相应属性。

http://echarts.baidu.com/option.html#series-map.geoIndex

并且加了pin气泡图标以示数值大小
*/

var uploadedDataURL = "/asset/get/s/data-1513915836999-BkHTS-qfz.json";
myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('jiangxi', geoJson);
    myChart.hideLoading();
    var geoCoordMap = {
        '佛冈县': [113.555135527344, 23.9051271796876],
        '连南瑶族自治县': [112.263338652344, 24.446567609375],
        '连山壮族瑶族自治县': [112.157345, 24.7438430000001],
        '连州市': [112.377345, 24.923843],
        '清城区': [113.057345, 23.643843],
        '清新县': [112.857345, 23.943843],
        '阳山县': [112.747345, 24.553843],
        '英德市': [113.167345, 24.253843]

    }
    var data = [{
        name: '佛冈县',
        value: 199
    }, {
        name: '连南瑶族自治县',
        value: 39
    }, {
        name: '连山壮族瑶族自治县',
        value: 152
    }, {
        name: '连州市',
        value: 299
    }, {
        name: '清城区',
        value: 89
    }, {
        name: '清新县',
        value: 52
    }, {
        name: '阳山县',
        value: 9
    }, {
        name: '英德市',
        value: 352
    }];
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
            text: '清远',
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
            orient: 'vertical',
            y: 'bottom',
            x: 'right',
            data: ['credit_pm2.5'],
            textStyle: {
                color: '#fff'
            }
        },
        dataRange: {
            show: false,
            x: 'left',
            y: 'bottom',
            seriesIndex: [1],
            splitList: [{
                start: 199,
                end: 199,
                label: '佛冈县',
                color: 'red'
            }, {
                start: 39,
                end: 39,
                label: '连南瑶族自治县',
                color: 'green'
            }, {
                start: 152,
                end: 152,
                label: '连山壮族瑶族自治县',
                color: 'blue'
            }, {
                start: 299,
                end: 299,
                label: '连州市',
                color: 'black'
            }, {
                start: 89,
                end: 89,
                label: '清城区',
                color: '#800080'
            }, {
                start: 52,
                end: 52,
                label: '清新县',
                color: '#2B32B2'
            }, {
                start: 9,
                end: 9,
                label: '阳山县',
                color: '#031525'
            }, {
                start: 352,
                end: 352,
                label: '英德市',
                color: '#A5CC82'
            }, ],

        },
        /*visualMap: {
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
                // color: ['#23074d', '#cc5333'] // 紫红
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#1488CC', '#2B32B2'] // 浅蓝
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#00467F', '#A5CC82'] // 蓝绿

            }
        },*/
        // toolbox: {
        //     show: true,
        //     orient: 'vertical',
        //     left: 'right',
        //     top: 'center',
        //     feature: {
        //             dataView: {readOnly: false},
        //             restore: {},
        //             saveAsImage: {}
        //             }
        // },
        geo: {
            show: true,
            map: 'jiangxi',
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
            }, {
                type: 'map',
                map: 'qingyuan',
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