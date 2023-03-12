var uploadedDataURL = "/asset/get/s/data-1578651119458-tP0jufkz.json";
var data = [{
        name: '北京',
        value: 199
    },
    {
        name: '天津',
        value: 542
    },
    {
        name: '山西',
        value: 881
    },
    {
        name: '内蒙古',
        value: 457
    },
    {
        name: '辽宁',
        value: 657
    },
    {
        name: '河北',
        value: 167
    },
    {
        name: '台湾',
        value: 490
    },
    {
        name: '黑龙江',
        value: 167
    },
    {
        name: '吉林',
        value: 267
    },
    {
        name: '陕西',
        value: 367
    },
    {
        name: '甘肃',
        value: 567
    },
    {
        name: '宁夏',
        value: 627
    },
    {
        name: '青海',
        value: 677
    },
    {
        name: '新疆',
        value: 0
    },
    {
        name: '西藏',
        value: 1
    },
    {
        name: '四川',
        value: 637
    },
    {
        name: '重庆',
        value: 647
    },
    {
        name: '山东',
        value: 617
    },
    {
        name: '河南',
        value: 607
    },
    {
        name: '江苏',
        value: 167
    },
    {
        name: '安徽',
        value: 267
    },
    {
        name: '湖北',
        value: 367
    },
    {
        name: '浙江',
        value: 567
    },
    {
        name: '福建',
        value: 867
    },
    {
        name: '江西',
        value: 967
    },
    {
        name: '湖南',
        value: 267
    },
    {
        name: '贵州',
        value: 167
    },
    {
        name: '云南',
        value: 367
    },
    {
        name: '广东',
        value: 467
    },
    {
        name: '广西',
        value: 167
    },
    {
        name: '海南',
        value: 567
    },
    {
        name: '上海',
        value: 667
    },
];
$.get(uploadedDataURL, function(chinaJson) {
    echarts.registerMap('china', chinaJson);
    var option = {
        backgroundColor:'#000',
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                if (params.data.value.length > 1) {
                    return params.data.name + "：" + params.data.value[2] + "人"
                } else {
                    return params.data.name + "：" + params.data.value + "人"
                }
            },
            extraCssText: 'font-size:18px;'
        },
        geo: {
            map: 'china',
            roam: false,
            scaleLimit: {
                min: 1,
                max: 1.2
            },
            itemStyle: {
                normal: {
                    areaColor: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(0, 252, 255, 0)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(0, 252, 255, 0)' // 100% 处的颜色
                        }],
                    },
                    borderColor: '#A39039' //描边颜色
                },
            },
            top: 130,
        },
        visualMap: {
            type: "piecewise",
            realtime: false,
            calculable: true,
            inRange: {
                color: ['#0D2434', '#00CC99', '#DCB222']
            },
            pieces: [{
                min: 0,
                max: 0.5,
                label: '未建立',
                color: new echarts.graphic.LinearGradient(
                    1, 0, 0, 0,
                    [{
                            offset: 0,
                            color: 'rgba(200,178,34,0.6)'
                        },
                        {
                            offset: 0.6,
                            color: 'rgba(115,99,43,0.5)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(16,36,52,0.4)'
                        }
                    ]
                )
            }, {
                min: 0.5,
                max: null,
                label: '已建立',
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(23, 151, 148, 0.4)' // 0% 处的颜色
                    }, {
                        offset: 0.6,
                        color: 'rgba(22,159,156,0.8)'
                    }, {
                        offset: 1,
                        color: 'rgba(22, 159, 156, 1)' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                }
            }],
            itemSymbol: '',
            itemWidth: 15,
            itemHeight: 15,
            bottom: '7%',
            right: '5%',
            show: true,
            textStyle: {
                color: '#ffffff',
                fontSize: 16,
            },
        },
        series: [{
                type: 'scatter',
                coordinateSystem: 'geo',
                rippleEffect: {
                    brushType: 'stroke'
                },
                showEffectOn: 'render',
                itemStyle: {
                    normal: {
                        color: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.5,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(193,194,195,0.1)'
                            }, {
                                offset: 0.3,
                                color: 'rgba(153,168,166,0.1)'
                            }, {
                                offset: 1,
                                color: 'rgba(0,255,204,0.6)'
                            }],
                            global: false // 缺省为 false
                        },
                        borderWidth: 0,
                        borderColor: '#b4dccd'
                    }

                },
                emphasis: {
                    itemStyle: {
                        color: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.5,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(0, 0,0, 0.3)' // 0% 处的颜色
                            }, {
                                offset: 0.3,
                                color: 'rgba(153,168,166,0.5)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(0, 255, 255, 1)' // 100% 处的颜色
                            }],
                            global: false
                        },
                        borderWidth: 0,
                        borderColor: '#b4dccd'

                    }
                },
                label: {
                    normal: {
                        show: true,
                        color: '#fff',
                        fontWeight: 'bold',
                        position: 'inside',
                        formatter: function(para) {
                            return '{cnNum|' + para.data.value[2] + '}' + '{txtFontsize|人}'
                        },
                        rich: {
                            cnNum: {
                                fontSize: 19,
                                fontWeight: 'bold',
                                color: '#fff',
                            },
                            txtFontsize: {
                                fontSize: 8,
                                color: '#fff'
                            }
                        }
                    },
                    emphasis: {
                        formatter: function(para) {
                            return '{cnNum|' + para.data.value[2] + '}' + '{txtFontsize|人}'
                        },
                        rich: {
                            cnNum: {
                                fontSize: 30,
                                fontWeight: 'bold',
                                color: '#fff',
                            },
                            txtFontsize: {
                                fontSize: 8,
                                color: '#fff'
                            }
                        }
                    }
                },
                symbol: 'circle',
                symbolSize: function(val) {
                    return (val[2] / 10);
                },
                data: [{
                        name: '北京',
                        value: [116.405285, 39.904989, 199],
                        visualMap: false
                    },
                    {
                        name: '天津',
                        value: [117.190182, 39.125596, 542],
                        visualMap: false
                    },
                    {
                        name: '山西',
                        value: [112.549248, 37.857014, 881],
                        visualMap: false
                    },
                    {
                        name: '内蒙古',
                        value: [111.670801, 40.818311, 457],
                        visualMap: false
                    },
                    {
                        name: '辽宁',
                        value: [123.429096, 41.796767, 657],
                        visualMap: false
                    },

                    {
                        name: '河北',
                        value: [114.502461, 38.045474, 167],
                        visualMap: false
                    },
                    {
                        name: '台湾',
                        value: [121.5135, 25.0308, 490],
                        visualMap: false
                    },
                    {
                        name: '黑龙江',
                        value: [127.9688, 45.368, 167],
                        visualMap: false
                    },
                    {
                        name: '吉林',
                        value: [125.8154, 44.2584, 267],
                        visualMap: false
                    },
                    {
                        name: '陕西',
                        value: [109.1162, 34.2004, 367],
                        visualMap: false
                    },
                    {
                        name: '甘肃',
                        value: [103.5901, 36.3043, 567],
                        visualMap: false
                    },
                    {
                        name: '宁夏',
                        value: [106.3586, 38.1775, 627],
                        visualMap: false
                    },
                    {
                        name: '青海',
                        value: [101.4038, 36.8207, 677],
                        visualMap: false
                    },
                    {
                        name: '新疆',
                        value: [87.9236, 43.5883, 0],
                        visualMap: false
                    },
                    {
                        name: '西藏',
                        value: [91.11, 29.97, 1],
                        visualMap: false
                    },
                    {
                        name: '四川',
                        value: [103.9526, 30.7617, 637],
                        visualMap: false
                    },
                    {
                        name: '重庆',
                        value: [108.384366, 30.439702, 647],
                        visualMap: false
                    },
                    {
                        name: '山东',
                        value: [117.1582, 36.8701, 617],
                        visualMap: false
                    },
                    {
                        name: '河南',
                        value: [113.4668, 34.6234, 607],
                        visualMap: false
                    },
                    {
                        name: '江苏',
                        value: [118.8062, 31.9208, 167],
                        visualMap: false
                    },
                    {
                        name: '安徽',
                        value: [117.29, 32.0581, 267],
                        visualMap: false
                    },
                    {
                        name: '湖北',
                        value: [114.3896, 30.6628, 367],
                        visualMap: false
                    },
                    {
                        name: '浙江',
                        value: [119.5313, 29.8773, 567],
                        visualMap: false
                    },
                    {
                        name: '福建',
                        value: [119.4543, 25.9222, 867],
                        visualMap: false
                    },
                    {
                        name: '江西',
                        value: [116.0046, 28.6633, 967],
                        visualMap: false
                    },
                    {
                        name: '湖南',
                        value: [113.0823, 28.2568, 267],
                        visualMap: false
                    },
                    {
                        name: '贵州',
                        value: [106.6992, 26.7682, 167],
                        visualMap: false
                    },
                    {
                        name: '云南',
                        value: [102.9199, 25.4663, 367],
                        visualMap: false
                    },
                    {
                        name: '广东',
                        value: [113.12244, 23.009505, 467],
                        visualMap: false
                    },
                    {
                        name: '广西',
                        value: [108.479, 23.1152, 167],
                        visualMap: false
                    },
                    {
                        name: '海南',
                        value: [110.3893, 19.8516, 567],
                        visualMap: false
                    },
                    {
                        name: '上海',
                        value: [121.4648, 31.2891, 667],
                        visualMap: false
                    },
                ],
                zlevel: 3,
            },
            {
                type: 'map',
                map: 'china',
                scaleLimit: {
                    min: 1,
                    max: 1.2
                },
                label: {
                    normal: {
                        show: true,
                        color: '#fff', //字的颜色
                        fontSize: 14,
                    },
                    emphasis: {
                        show: false,
                        color: '#fff',
                        type: 'linear',
                        x: 1,
                        y: 0,
                        x2: 0,
                        y2: 0,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(81,98,31,1)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(0,0,0,0.6)' // 100% 处的颜色
                        }],
                    }
                },
                itemStyle: {
                    normal: {
                        areaColor: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(0, 252, 255, 0.5)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(0, 252, 255, 0.3)' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        },
                        borderColor: '#A39039' //描边颜色
                    },
                },
                emphasis: {
                    normal: {
                        label: {
                            show: false,
                            color: "#53e5ce"
                        }
                    },
                    itemStyle: {
                        areaColor: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(0, 252, 255, 1)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(0, 252, 255, 0.5)' // 100% 处的颜色
                            }],
                        }
                    }
                },
                z: 2,
                top: 130,
                data: data
            }
        ]
    };
    // echarts.init(document.getElementById("chart-panel")).setOption(option);
     myChart.setOption(option);
})