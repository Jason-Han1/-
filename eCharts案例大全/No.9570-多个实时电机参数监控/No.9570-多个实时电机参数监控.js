var new1 = 0, min1 = 0, max1 = 0, avg1 = 0
            var new2 = 0, min2 = 0, max2 = 0, avg2 = 0
            var new3 = 0, min3 = 0, max3 = 0, avg3 = 0
            var new4 = 0, min4 = 0, max4 = 0, avg4 = 0
            var new5 = 0, min5 = 0, max5 = 0, avg5 = 0
            var date = [], data1 = [], data2 = [], data3 = [], data4 = [], data5 = []
            // 格式化时间
            function getTime() {
                var ts = arguments[0] || 0;
                var t, h, i, s;
                t = ts ? new Date(ts * 1000) : new Date();
                h = t.getHours();
                i = t.getMinutes();
                s = t.getSeconds();
                // 可根据需要在这里定义时间格式
                return (h < 10 ? '0' + h : h) + ':' + (i < 10 ? '0' + i : i) + ':' + (s < 10 ? '0' + s : s);
            }
            // 生成初始数据
            data1.push(Math.ceil(Math.random() * 10));
            data2.push(Math.ceil(Math.random() * 10));
            data3.push(Math.ceil(Math.random() * 10));
            data4.push(Math.ceil(Math.random() * 10));
            data5.push(Math.ceil(Math.random() * 10));
            date.push(getTime(Math.round(new Date().getTime() / 1000)))
            var option = {
                backgroundColor: '#193499',
                title: [{
                    text: '图表名称',
                    x: 15,
                    y: '20',
                    textBaseline: 'middle',
                    textStyle: {
                        fontSize: 20,
                        fontWeight: '500',
                        color: '#fff'
                    }
                }, {
                    text: '设备接口',
                    x: 15,
                    y: '45',
                    textBaseline: 'middle',
                    textStyle: {
                        color: '#fff',
                        fontSize: 16,
                        fontWeight: '100',
                    }
                }, {
                    text: '最新',
                    x2: 235,
                    y: '10',
                    textBaseline: 'middle',
                    textStyle: {
                        fontSize: 12,
                        fontWeight: '100',
                        color: '#fff'
                    }
                }, {
                    text: '最小',
                    x2: 165,
                    y: '10',
                    textBaseline: 'middle',
                    textStyle: {
                        fontSize: 12,
                        fontWeight: '100', color: '#fff'

                    }
                }, {
                    text: '最大',
                    x2: 95,
                    y: '10',
                    textBaseline: 'middle',
                    textStyle: {
                        fontSize: 12,
                        fontWeight: '100',
                        color: '#fff'
                    }
                }, {
                    text: '平均',
                    x2: 20,
                    y: '10',
                    textBaseline: 'middle',
                    textStyle: {
                        fontSize: 12,
                        fontWeight: '100',
                        color: '#fff'
                    }
                }, {
                    text: new1,
                    x2: 235,
                    y: '40',
                    textBaseline: 'middle',
                    textStyle: {
                        fontSize: 12,
                        fontWeight: '100',
                        color: '#fff'
                    }
                }, {
                    text: min1,
                    x2: 165,
                    y: '40',
                    textBaseline: 'middle',
                    textStyle: {
                        fontSize: 12,
                        fontWeight: '100',
                        color: '#fff'
                    }
                }, {
                    text: max1,
                    x2: 95,
                    y: '40',
                    textBaseline: 'middle',
                    textStyle: {
                        fontSize: 12,
                        fontWeight: '100',
                        color: '#fff'
                    }
                }, {

                    text: avg1,
                    x2: 20,
                    y: '40',
                    textBaseline: 'middle',
                    textStyle: {
                        fontSize: 12,
                        fontWeight: '100',
                        color: '#fff'
                    }
                }, {
                    text: new2,
                    x2: 235,
                    y: '55',
                    textBaseline: 'middle',
                    textStyle: {
                        fontSize: 12,
                        fontWeight: '100',
                        color: '#fff'
                    }
                }, {
                    text: min2,
                    x2: 165,
                    y: '55',
                    textBaseline: 'middle',
                    textStyle: {
                        fontSize: 12,
                        fontWeight: '100',
                        color: '#fff'
                    }
                }, {
                    text: max2,
                    x2: 95,
                    y: '55',
                    textBaseline: 'middle',
                    textStyle: {
                        fontSize: 12,
                        fontWeight: '100',
                        color: '#fff'
                    }
                }, {

                    text: avg2,
                    x2: 20,
                    y: '55',
                    textBaseline: 'middle',
                    textStyle: {
                        fontSize: 12,
                        fontWeight: '100',
                        color: '#fff'
                    }
                }, {
                    text: new3,
                    x2: 235,
                    y: '70',
                    textBaseline: 'middle',
                    textStyle: {
                        fontSize: 12,
                        fontWeight: '100',
                        color: '#fff'
                    }
                }, {
                    text: min3,
                    x2: 165,
                    y: '70',
                    textBaseline: 'middle',
                    textStyle: {
                        fontSize: 12,
                        fontWeight: '100',
                        color: '#fff'
                    }
                }, {
                    text: max3,
                    x2: 95,
                    y: '70',
                    textBaseline: 'middle',
                    textStyle: {
                        fontSize: 12,
                        fontWeight: '100',
                        color: '#fff'
                    }
                }, {

                    text: avg3,
                    x2: 20,
                    y: '70',
                    textBaseline: 'middle',
                    textStyle: {
                        fontSize: 12,
                        fontWeight: '100',
                        color: '#fff'
                    }
                }, {
                    text: new4,
                    x2: 235,
                    y: '85',
                    textBaseline: 'middle',
                    textStyle: {
                        fontSize: 12,
                        fontWeight: '100',
                        color: '#fff'
                    }
                }, {
                    text: min4,
                    x2: 165,
                    y: '85',
                    textBaseline: 'middle',
                    textStyle: {
                        fontSize: 12,
                        fontWeight: '100',
                        color: '#fff'
                    }
                }, {
                    text: max4,
                    x2: 95,
                    y: '85',
                    textBaseline: 'middle',
                    textStyle: {
                        fontSize: 12,
                        fontWeight: '100',
                        color: '#fff'
                    }
                }, {

                    text: avg4,
                    x2: 20,
                    y: '85',
                    textBaseline: 'middle',
                    textStyle: {
                        fontSize: 12,
                        fontWeight: '100',
                        color: '#fff'
                    }
                }, {
                    text: new5,
                    x2: 235,
                    y: '100',
                    textBaseline: 'middle',
                    textStyle: {
                        fontSize: 12,
                        fontWeight: '100',
                        color: '#fff'
                    }
                }, {
                    text: min5,
                    x2: 165,
                    y: '100',
                    textBaseline: 'middle',
                    textStyle: {
                        fontSize: 12,
                        fontWeight: '100',
                        color: '#fff'
                    }
                }, {
                    text: max5,
                    x2: 95,
                    y: '100',
                    textBaseline: 'middle',
                    textStyle: {
                        fontSize: 12,
                        fontWeight: '100',
                        color: '#fff'
                    }
                }, {

                    text: avg5,
                    x2: 20,
                    y: '100',
                    textBaseline: 'middle',
                    textStyle: {
                        fontSize: 12,
                        fontWeight: '100',
                        color: '#fff'
                    }
                }],
                legend: [{
                    x2: 300,
                    y: 33,
                    icon: 'rect',
                    itemGap: 3,
                    itemWidth: 11,
                    itemHeight: 11,
                    orient: 'vertical',
                    data: ['正压', '负压', '电压', '电流', '前轴温度'],
                    textStyle: {
                        color: '#fff'
                    }
                }],
                grid: [{
                    left: 20,
                    right: 30,
                    top: 150,
                    bottom: 20,
                    containLabel: true
                }],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        lineStyle: {
                            color: '#fff'
                        }
                    }
                },
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    data: date
                }],
                yAxis: [{
                    type: 'value',
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    axisLabel: {
                        formatter: '{value}m',
                        textStyle: {
                            fontSize: 12
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    }
                }],
                dataZoom: [
                  {
                      type: 'inside',
                      start: 0,
                      end: 100
                  },
                ],
                series: [{
                    name: '正压',
                    type: 'line',
                    smooth: true,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            width: 0
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(150,150,255)'
                        }
                    },
                    areaStyle: {
                        opacity: 1
                    },
                    data: data1
                }, {
                    name: '负压',
                    type: 'line',
                    smooth: true,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            width: 0
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(150,255,255)'
                        }
                    },
                    areaStyle: {
                        // normal: {
                        //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        //         offset: 0,
                        //         color: 'rgba(0,255,255, 1)'
                        //     }, {
                        //         offset: 0.8,
                        //         color: 'rgba(0,255,255, 0.5)'
                        //     }])
                        // },
                        opacity: 1
                    },
                    data: data2
                }, {
                    name: '电压',
                    type: 'line',
                    smooth: true,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            width: 0
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(150,255,150)'
                        }
                    },
                    areaStyle: {
                        opacity: 1
                    },
                    data: data3
                }, {
                    name: '电流',
                    type: 'line',
                    smooth: true,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            width: 0
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,150,255)'
                        }
                    },
                    areaStyle: {
                        opacity: 1
                    },
                    data: data4
                }, {
                    name: '前轴温度',
                    type: 'line',
                    smooth: true,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            width: 0
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,150)'
                        }
                    },
                    areaStyle: {
                        opacity: 1
                    },
                    data: data5
                }, ]
            };
            //myChart.setOption(option)
            setInterval(function () {
                data1.push(Math.ceil(Math.random() * 10));
                data2.push(Math.ceil(Math.random() * 10));
                data3.push(Math.ceil(Math.random() * 10));
                data4.push(Math.ceil(Math.random() * 10));
                data5.push(Math.ceil(Math.random() * 10));
                date.push(getTime(Math.round(new Date().getTime() / 1000)));
                if (data1.length >= 20) {
                    data1 = data1.slice(-20)
                }
                if (data2.length >= 20) {
                    data2 = data2.slice(-20)
                }
                if (data2.length >= 20) {
                    data2 = data2.slice(-20)
                }
                if (data3.length >= 20) {
                    data3 = data3.slice(-20)
                }
                if (data4.length >= 20) {
                    data4 = data4.slice(-20)
                }
                if (data5.length >= 20) {
                    data5 = data5.slice(-20)
                }

                if (date.length >= 20) {
                    date = date.slice(-20)
                }
                new1 = data1[data1.length - 1];
                min1 = Math.min.apply(null, data1);
                max1 = Math.max.apply(null, data1);
                avg1 = data1.reduce(function (tmp, item, index) {
                    if (index != data1.length - 1) {
                        return tmp + item;
                    } else {
                        return ((tmp + item) / data1.length).toFixed(2);
                    }
                });
                new2 = data2[data2.length - 1];
                min2 = Math.min.apply(null, data2);
                max2 = Math.max.apply(null, data2);
                avg2 = data2.reduce(function (tmp, item, index) {
                    if (index != data2.length - 1) {
                        return tmp + item;
                    } else {
                        return ((tmp + item) / data2.length).toFixed(2);
                    }
                });
                new3 = data3[data3.length - 1];
                min3 = Math.min.apply(null, data3);
                max3 = Math.max.apply(null, data3);
                avg3 = data3.reduce(function (tmp, item, index) {
                    if (index != data3.length - 1) {
                        return tmp + item;
                    } else {
                        return ((tmp + item) / data3.length).toFixed(2);
                    }
                });
                new4 = data1[data4.length - 1];
                min4 = Math.min.apply(null, data4);
                max4 = Math.max.apply(null, data4);
                avg4 = data4.reduce(function (tmp, item, index) {
                    if (index != data4.length - 1) {
                        return tmp + item;
                    } else {
                        return ((tmp + item) / data4.length).toFixed(2);
                    }
                });
                new5 = data5[data5.length - 1];
                min5 = Math.min.apply(null, data5);
                max5 = Math.max.apply(null, data5);
                avg5 = data5.reduce(function (tmp, item, index) {
                    if (index != data5.length - 1) {
                        return tmp + item;
                    } else {
                        return ((tmp + item) / data5.length).toFixed(2);
                    }
                });
                myChart.setOption({
                    title: [{
                        text: '实时电机参数监控'
                    }, {
                        text: '水泵'
                    }, {
                        text: '最新'
                    }, {
                        text: '最小',
                    }, {
                        text: '最大'
                    }, {
                        text: '平均'
                    }, {
                        text: new1 + 'm'
                    }, {
                        text: min1 + 'm'
                    }, {
                        text: max1 + 'm'
                    }, {
                        text: avg1 + 'm'
                    }, {
                        text: new2 + 'm'
                    }, {
                        text: min2 + 'm'
                    }, {
                        text: max2 + 'm'
                    }, {
                        text: avg2 + 'm'
                    }, {
                        text: new3 + 'm'
                    }, {
                        text: min3 + 'm'
                    }, {
                        text: max3 + 'm'
                    }, {
                        text: avg3 + 'm'
                    }, {
                        text: new4 + 'm'
                    }, {
                        text: min4 + 'm'
                    }, {
                        text: max4 + 'm'
                    }, {
                        text: avg4 + 'm'
                    }, {
                        text: new5 + 'm'
                    }, {
                        text: min5 + 'm'
                    }, {
                        text: max5 + 'm'
                    }, {
                        text: avg5 + 'm'
                    }],
                    series: [{
                        data: data1
                    }, {
                        data: data2
                    },
                     {
                         data: data3
                     },
                     {
                         data: data4
                     }, {
                         data: data5
                     },
                    ],
                    xAxis: [{
                        data: date
                    }],
                });
            }, 1000)