    var data = [{
        "product": "宿州市",
        "总占用面积": 73,
        "临时占用面积": 592.57
    }, {
        "product": "六安市",
        "总占用面积": 78.75,
        "临时占用面积": 427.69
    }, {
        "product": "滁州市",
        "总占用面积": 365.39,
        "临时占用面积": 407.61
    }, {
        "product": "亳州市",
        "总占用面积": 13.3,
        "临时占用面积": 368.53
    }, {
        "product": "黄山市",
        "总占用面积": 28.5,
        "临时占用面积": 361.97
    }, {
        "product": "宿松县",
        "总占用面积": 34.77,
        "临时占用面积": 332.93
    }];
    var data1 = [];
    var data2 = [];
    for (var i = 0; i < data.length; i++) {
        data1.push(data[i].总占用面积);
        data2.push(data[i].临时占用面积)
    }
    console.log(data1)
    var imgUrl1 = 'img/ditu-bg.png'
    var option = {
        backgroundColor: '#000',
        tooltip: {
            trigger: 'item',
            // formatter: "{b}:<br/> {c} 亩)"
        },
        legend: {
            x: 'center',
            y: '15',
            textStyle: {
                color: '#fff'
            }
        },
        dataset: {
            dimensions: ['product', '总占用面积', '临时占用面积'],
            source: data
        },
        xAxis: {
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: '#fff',
                    show: false
                }
            },
            axisTick: {
                alignWithLabel: true
            },
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: true,
                color: '#fff'
            },
        },
        grid: {
            top: '50px',
            bottom: '25px',
            left: '80px',
        },
        yAxis: [{
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    color: '#fff'
                },
            },
            {
                type: "value",
                gridIndex: 0,
                min: 50,
                max: 100,
                splitNumber: 8,
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"]
                    }
                }
            }
        ],
        barWidth: 10,
        series: [{
                type: 'bar',
                data: data1,
                animation: true,
                // data: data,
                itemStyle: {



                    normal: {

                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: "rgba(23,102,249,0)" // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: "rgba(23,102,249,1)" // 100% 处的颜色
                        }], false)
                    },

                }
            },
            {
                type: 'effectScatter',
                // data: data1,
                animation: true,
                symbolSize: 6,
                symbolOffset: [-7, 0],
                animation: true,
                itemStyle: {
                    borderWidth: 0,
                    opacity: 1,
                    color: "#1868ff",
                    shadowColor: 'rgba(24,104,255, 1)',
                    shadowBlur: 14
                },
                rippleEffect: {
                    period: 2,
                    scale: 4,
                    brushType: 'stroke'
                }
            },
            {
                type: 'bar',
                data: data2,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: "rgba(36,240,243,0)" // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: "rgba(36,240,243,1)" // 100% 处的颜色
                        }], false)
                    },

                }
            },
            {
                type: 'effectScatter',
                // data: data2,

                animation: true,
                symbolSize: 6,
                symbolOffset: [6, 0],
                animation: true,

                itemStyle: {
                    borderWidth: 0,
                    opacity: 1,
                    color: "#24f0f3",
                    shadowColor: 'rgba(36,240,243, 1)',
                    shadowBlur: 24
                },

                rippleEffect: {
                    period: 2,
                    scale: 4,
                    brushType: 'stroke'
                }
            },
        ]
    };