

var category = ["12-1", "12-2", "12-3", "12-4", "12-5", "12-6", "12-7", "12-8", "12-9", "12-10"]; //当前前12个月每月月份
var lineData = [700, 750, 850, 1020, 850, 840, 790, 830, 1000, 980]; //总产能
var barData1 = [200, 300, 400, 500, 600, 400, 300, 230, 400, 280]; //正常产能
var barData2 = [300, 200, 100, 400, 200, 200, 240, 180, 200, 400]; //加班产能
var barData3 = [200, 250, 350, 120, 50, 240, 250, 420, 400, 300]; //外发产能

var YlineData = [1200, 1200, 1300, 1540, 1100, 1280, 1280, 1430, 1600, 1680]; //总产能
var YbarData1 = [200, 300, 400, 500, 600, 400, 300, 230, 400, 280]; //正常产能
var YbarData2 = [300, 200, 100, 400, 200, 200, 240, 180, 200, 400]; //加班产能
var YbarData3 = [200, 250, 350, 120, 50, 240, 250, 420, 400, 300]; //外发产能
var YbarData4 = [300, 200, 100, 400, 200, 200, 240, 180, 200, 400]; //加班产能
var YbarData5 = [200, 250, 350, 120, 50, 240, 250, 420, 400, 300]; //外发产能


// option
options = [{
        backgroundColor: '#fff',
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
                label: {
                    show: true,
                    backgroundColor: '#333'
                }
            },
            formatter: '{a0}: {c0}<br />{a1}: {c1}<br />{a2}: {c2}<br />{a3}: {c3}'
        },
        legend: {
            data: ['红灯时间', '故障', '缺料', '停机'],

        },
        xAxis: {
            data: category,
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            }
        },
        yAxis: {
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            }
        },
        series: [{
                name: '红灯时间',
                type: 'line',
                smooth: true,
                showAllSymbol: true,
                symbol: 'emptyCircle',
                symbolSize: 10,
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                data: lineData
            },
            {
                name: '故障',
                type: 'bar',
                barWidth: 20,
                stack: '类型',
                itemStyle: {
                    normal: {
                        barBorderRadius: 5,
                        color: new echarts.graphic.LinearGradient(0,
                            0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(255,99,71,0.8)'
                            }, {
                                offset: 1,
                                color: 'red'
                            }])
                    }
                },
                data: barData1
            },
            {
                name: '缺料',
                type: 'bar',
                barWidth: 20,
                stack: '类型',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0,
                            0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(238,238,0,0.8)'
                                },
                                // {
                                //     offset: 0.5,
                                //     color: '#FFCC00'
                                // },
                                {
                                    offset: 1,
                                    color: 'rgba(238,238,0,0.3)'
                                }
                            ])
                    }
                },
                data: barData2
            },
            {
                name: '停机',
                type: 'bar',
                barWidth: 20,
                stack: '类型',
                itemStyle: {
                    normal: {
                        barBorderRadius: 5,
                        color: new echarts.graphic.LinearGradient(0,
                            0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(190,190,190,0.8)'
                            }, {
                                offset: 1,
                                color: 'rgba(190,190,190,0.3)'
                            }])
                    }
                },
                data: barData3
            },
            {
                name: 'dotted',
                type: 'pictorialBar',
                symbol: 'rect',
                itemStyle: {
                    normal: {
                        color: '#EE2C2C'
                    }
                },
                symbolRepeat: true,
                symbolSize: [12, 4],
                symbolMargin: 1,
                z: -10,
                data: lineData
            }
        ]
    },
    {
        backgroundColor: '#fff',
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
                label: {
                    show: true,
                    backgroundColor: '#333'
                }
            },
            formatter: '{a0}: {c0}<br />{a1}: {c1}<br />{a2}: {c2}<br />{a3}: {c3}'
        },
        legend: {
            data: ['黄灯时间', '休息', '上料', '换模', '等待', '其他'],

        },
        xAxis: {
            data: category,
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            }
        },
        yAxis: {
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            }
        },
        series: [{
                name: '黄灯时间',
                type: 'line',
                smooth: true,
                showAllSymbol: true,
                symbol: 'emptyCircle',
                symbolSize: 10,
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                "itemStyle": {
                    "normal": {
                        "color": "rgba(255,215,0,1)",
                        "barBorderRadius": 0,
                    }
                },
                data: YlineData
            },
            {
                name: '休息',
                type: 'bar',
                barWidth: 20,
                stack: '类型',
                itemStyle: {
                    normal: {
                        barBorderRadius: 5,
                        color: new echarts.graphic.LinearGradient(0,
                            0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(173, 216, 230,0.8)'
                            }, {
                                offset: 1,
                                color: 'rgba(175, 238, 238,0.5)'
                            }])
                    }
                },
                data: YbarData1
            },
            {
                name: '上料',
                type: 'bar',
                barWidth: 20,
                stack: '类型',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0,
                            0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(205, 149, 12,0.8)'
                                },
                                // {
                                //     offset: 0.5,
                                //     color: '#FFCC00'
                                // },
                                {
                                    offset: 1,
                                    color: 'rgba(205, 149, 12,0.3)'
                                }
                            ])
                    }
                },
                data: YbarData2
            },
            {
                name: '换模',
                type: 'bar',
                barWidth: 20,
                stack: '类型',
                itemStyle: {
                    normal: {
                        barBorderRadius: 5,
                        color: new echarts.graphic.LinearGradient(0,
                            0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(70, 130, 180,0.8)'
                            }, {
                                offset: 1,
                                color: 'rgba(70, 130, 180,0.3)'
                            }])
                    }
                },
                data: YbarData3
            },
            {
                name: '等待',
                type: 'bar',
                barWidth: 20,
                stack: '类型',
                itemStyle: {
                    normal: {
                        barBorderRadius: 5,
                        color: new echarts.graphic.LinearGradient(0,
                            0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(255, 235, 0,0.8)'
                            }, {
                                offset: 1,
                                color: 'rgba(255, 235, 0,0.3)'
                            }])
                    }
                },
                data: YbarData4
            },
            {
                name: '其他',
                type: 'bar',
                barWidth: 20,
                stack: '类型',
                itemStyle: {
                    normal: {
                        barBorderRadius: 5,
                        color: new echarts.graphic.LinearGradient(0,
                            0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(139, 134, 130,0.8)'
                            }, {
                                offset: 1,
                                color: 'rgba(139, 134, 130,0.3)'
                            }])
                    }
                },
                data: YbarData5
            },
            {
                name: 'dotted',
                type: 'pictorialBar',
                symbol: 'rect',
                itemStyle: {
                    normal: {
                        color: '#FFC125'
                    }
                },
                symbolRepeat: true,
                symbolSize: [12, 4],
                symbolMargin: 1,
                z: -10,
                data: YlineData
            }
        ]
    }
];