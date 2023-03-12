/**
此版本通过设置geoindex && seriesIndex: [1] 属性来实现geo和map共存，来达到hover散点和区域显示tooltip的效果

默认情况下，map series 会自己生成内部专用的 geo 组件。但是也可以用这个 geoIndex 指定一个 geo 组件。这样的话，map 和 其他 series（例如散点图）就可以共享一个 geo 组件了。并且，geo 组件的颜色也可以被这个 map series 控制，从而用 visualMap 来更改。
当设定了 geoIndex 后，series-map.map 属性，以及 series-map.itemStyle 等样式配置不再起作用，而是采用 geo 中的相应属性。

http://echarts.baidu.com/option.html#series-map.geoIndex

并且加了pin气泡图标以示数值大小
*/

var uploadedDataURL = "/asset/get/s/data-1519279347346-BkslpCjwf.json";

myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('anhui', geoJson);
    myChart.hideLoading();
    var geoCoordMap = {
        '合肥市': [117.37, 31.786],
        '六安市': [116.27, 31.786],
        '滁州市': [118.07, 32.486],
        '蚌埠市': [117.27, 33.086],
        '淮南市': [116.67, 32.786],
        '宿州市': [117.77, 33.486],
        '淮北市': [116.67, 33.686],
        '亳州市': [116.27, 33.386],
        '阜阳市': [115.57, 32.986],
        '安庆市': [116.47, 30.486],
        '池州市': [117.47, 30.386],
        '黄山市': [118.17, 29.886],
        '宣城市': [119.27, 30.916],
        '芜湖市': [118.17, 31.186],
        '马鞍山市': [118.47, 31.616],
        '铜陵市': [117.87, 30.956],
    }
    var data = [{
            name: '合肥市',
            value: 1715
        },
        {
            name: '六安市',
            value: 208
        },
        {
            name: '滁州市',
            value: 261
        },
        {
            name: '蚌埠市',
            value: 268
        },
        {
            name: '淮南市',
            value: 668
        },
        {
            name: '宿州市',
            value: 219
        },
        {
            name: '淮北市',
            value: 252
        },
        {
            name: '亳州市',
            value: 208
        },
        {
            name: '阜阳市',
            value: 318
        },
        {
            name: '安庆市',
            value: 688
        },
        {
            name: '池州市',
            value: 315
        },
        {
            name: '黄山市',
            value: 117
        },
        {
            name: '宣城市',
            value: 545
        },
        {
            name: '芜湖市',
            value: 272
        },
        {
            name: '马鞍山市',
            value: 231
        },
        {
            name: '铜陵市',
            value: 34
        },
    ];
    var max = 1800,
        min = 0; // todo 
    var maxSize4Pin = 100,
        minSize4Pin = 20;

    var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    //value: geoCoord.concat(data[i].value)
                    value: data[i].value
                });
            }
        }
        return res;
    };


    option = {
        title: {
            text: '',
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
        visualMap: {
            show: true,
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
                //color: ['#3C3B3F', '#605C3C'] // 黑绿
                //color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
                // color: ['#23074d', '#cc5333'] // 紫红
                color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#1488CC', '#2B32B2'] // 浅蓝
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#00467F', '#A5CC82'] // 蓝绿

            }
        },
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
            map: 'anhui',
            label: {
                normal: {
                    show: true

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
                map: 'anhui',
                geoIndex: 0,
                aspectScale: 0.75, //长宽比
                showLegendSymbol: false, // 存在legend时显示
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true,
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
                animation: true,
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
                        color: '#F62157', //标志颜色
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