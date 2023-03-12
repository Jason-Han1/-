/**
此版本通过设置geoindex && seriesIndex: [1] 属性来实现geo和map共存，来达到hover散点和区域显示tooltip的效果

默认情况下，map series 会自己生成内部专用的 geo 组件。但是也可以用这个 geoIndex 指定一个 geo 组件。这样的话，map 和 其他 series（例如散点图）就可以共享一个 geo 组件了。并且，geo 组件的颜色也可以被这个 map series 控制，从而用 visualMap 来更改。
当设定了 geoIndex 后，series-map.map 属性，以及 series-map.itemStyle 等样式配置不再起作用，而是采用 geo 中的相应属性。

http://echarts.baidu.com/option.html#series-map.geoIndex

并且加了pin气泡图标以示数值大小
*/

var uploadedDataURL = "/asset/get/s/data-1528971808162-BkOXf61WX.json";
myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('china', geoJson);
    myChart.hideLoading();
    var geoCoordMap = {
        '苏州': [120.58, 31.30],
        '南京': [118.8062, 31.9208],
        '上海': [121.4648, 31.2891],
        '杭州': [119.5313, 29.8773],
        '天津': [117.4219, 39.4189],
        '北京': [116.4551, 40.2539],
        "成都": [103.9526, 30.7617],
        "宁波": [121.56, 29.86],
        "深圳": [113.12244, 23.009505]

    };
    var data = [{
            name: "北京",
            transAmt: 199,
            serviceRate: 99
        },
        {
            name: "苏州",
            transAmt: 42,
            serviceRate: 99
        },
        {
            name: "南京",
            transAmt: 102,
            serviceRate: 99
        },
        {
            name: "上海",
            transAmt: 81,
           serviceRate: 99  
        },
        {
            name: "杭州",
            transAmt: 47,
            serviceRate: 99
        },
        {
            name: "天津",
            transAmt: 67,
            serviceRate: 99
        },
        {
            name: "成都",
            transAmt: 82,
            serviceRate: 99
        },
        {
            name: "宁波",
            transAmt: 123,
            serviceRate: 99
        },
        {
            name: "上海",
            transAmt: 24,
            serviceRate: 99
        },
        {
            name: "深圳",
            transAmt: 92,
            serviceRate: 99
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
                    value: geoCoord.concat(data[i].transAmt)
                });
            }
        }
        return res;
    };



    option = {
        backgroundColor: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: '#0f378f' // 0% 处的颜色
            }, {
                offset: 1,
                color: '#00091a' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
        },
        title: {
            top: 20,
            text: '机具交易量',
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
        /*   legend: {
               orient: 'vertical',
               y: 'bottom',
               x: 'right',
                data:['pm2.5'],
               textStyle: {
                   color: '#fff'
               }
           },*/
        legend: {
            orient: 'vertical',
            y: 'bottom',
            x: 'right',
            data: ['pm2.5'],
            textStyle: {
                color: '#fff'
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

            }
        },
        geo: {
            map: 'china',
            show: true,
            roam: true,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false,
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#3a7fd5',
                    borderColor: '#0a53e9', //线
                    shadowColor: '#092f8f', //外发光
                    shadowBlur: 20
                },
                emphasis: {
                    areaColor: '#0a2dae', //悬浮区背景
                }
            }
        },
        series: [{

                symbolSize: 5,
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
                        color: '#fff'
                    }
                },
                name: 'light',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(data),

            },
            {
                type: 'map',
                map: 'china',
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
                        borderColor: '#FFFFFF',
                    },
                    emphasis: {
                        areaColor: '#2B91B7'
                    }
                },
                animation: false,
                data: data
            },
            {
                name: 'Top 5',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbol: 'pin',
                symbolSize: [50, 50],
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            color: '#fff',
                            fontSize: 9,
                        },
                        formatter(value) {
                            return value.data.value[2]
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#D8BC37', //标志颜色
                    }
                },
                data: convertData(data),
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                zlevel: 1
            },

        ]
    };
    myChart.setOption(option);
});