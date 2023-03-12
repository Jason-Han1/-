option = {
    backgroundColor: '#001120',
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        data: ['2020', '2019'],
        textStyle: {
            color: '#999999'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['入职', '离职', '培训'],
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#f5f5f5',
            }
        },
        axisLabel: {
            color: '#666666'
        },
        axisTick:{
              show:false//不显示坐标轴刻度线
        },
    }],
    yAxis: [{
        type: 'value',
        splitLine: {
            show: true
        },
        axisLine: {
            show: false,//不显示坐标轴线
        }
    }],
    series: [
        {//三个最低下的圆片
            "name": "",
            "type": "pictorialBar",
            "symbolSize": [100, 45],
            "symbolOffset": [0, 20],
            "z": 12,
            "data": [{
                "name": "",
                "value": "100",
                "itemStyle": {
                    "normal": {
                        "color": "#25729e"
                    }
                }
            }, {
                "name": "",
                "value": "101",
                "itemStyle": {
                    "normal": {
                        "color": "#ff7800"
                    }
                }
            }, {
                "name": "",
                "value": "81",
                "itemStyle": {
                    "normal": {
                        "color": "#e9a5ff"
                    }
                }
            }]
        }, 
        
        
        
        {
            name: '2020',
            type: 'bar',
            barWidth: 100,
            barGap: '-100%',
            itemStyle: {//lenged文本
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "rgba(55,255,249,1)"
                    },
                    {
                        offset: 1,
                        color: "rgba(0,222,215,0.2)"
                    }
                ])
            },
           
            data: [{
                "name": "",
                "value": "100",
                "itemStyle": {
                    "normal": {
                        "color": {
                            "x": 0,
                            "y": 0,
                            "x2": 0,
                            "y2": 1,
                            "type": "linear",
                            "global": false,
                            "colorStops": [{//第一节下面
                                "offset": 0,
                                "color": "rgba(0,255,245,0.5)"
                            }, {
                                "offset": 1,
                                "color": "#43bafe"
                            }]
                        }
                    }
                }
            }, {
                "name": "",
                "value": "101",
                "itemStyle": {
                    "normal": {
                        "color": {
                            "x": 0,
                            "y": 0,
                            "x2": 0,
                            "y2": 1,
                            "type": "linear",
                            "global": false,
                            "colorStops": [{
                                "offset": 0,
                                "color": "rgba(255,204,0,0.5)"
                            }, {
                                "offset": 1,
                                "color": "#ff7800"
                            }]
                        }
                    }
                }
            }, {
                "name": "",
                "value": "81",
                "itemStyle": {
                    "normal": {
                        "color": {
                            "x": 0,
                            "y": 0,
                            "x2": 0,
                            "y2": 1,
                            "type": "linear",
                            "global": false,
                            "colorStops": [{
                                "offset": 0,
                                "color": "rgba(185,183,255,0.5)"
                            }, {
                                "offset": 1,
                                "color": "#e9a5ff"
                            }]
                        }
                    }
                }
            }]
        }, 
        
        { // 替代柱状图 默认不显示颜色，是最下方柱图（邮件营销）的value值 - 20 
            type: 'bar',
            barWidth: 100,
            barGap: '-100%',
            stack: '广告',
            itemStyle: {
                color: 'transparent'
            },
            data: [100, 102, 81]
        },
        
        {
            "name": "", //头部
            "type": "pictorialBar",
            "symbolSize": [100, 45],
            "symbolOffset": [0, -20],
            "z": 12,
            "data": [{
                "name": "",
                "value": "320",
                "symbolPosition": "end",
                "itemStyle": {
                    "normal": {
                        "color": "#ff0000"
                    }
                }
            }, {
                "name": "",
                "value": "283",
                "symbolPosition": "end",
                "itemStyle": {
                    "normal": {
                        "color": "#ff0000"
                    }
                }
            }, {
                "name": "",
                "value": "272",
                "symbolPosition": "end",
                "itemStyle": {
                    "normal": {
                        "color": "#ff0000"
                    }
                }
            }]
        },
        
        {
            "name": "",
            "type": "pictorialBar",
            "symbolSize": [100, 45],
            "symbolOffset": [0, -20],
            "z": 12,
            "data": [{
                "name": "",
                "value": "103",
                "symbolPosition": "end",
                "itemStyle": {
                    "normal": {
                        "color": "#ff0000"
                    }
                }
            }, {
                "name": "",
                "value": "105",
                "symbolPosition": "end",
                "itemStyle": {
                    "normal": {
                        "color": "#ff0000"
                    }
                }
            }, {
                "name": "",
                "value": "84",
                "symbolPosition": "end",
                "itemStyle": {
                    "normal": {
                        "color": "#ff0000"
                    }
                }
            }]
        },
        
        {
            name: '2019',
            type: 'bar',
            barWidth: 100,
            barGap: '-100%',
            stack: '广告',
            itemStyle: {
                // barBorderRadius: 20, 
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1,
                        color: "rgba(0,255,100,0.5)"
                    },
                    {
                        offset: 1,
                        color: "rgba(0,255,100,0.5)"
                    }
                ])
            },
            "label": {
                "normal": {
                    "show": true,
                    "position": "top",
                    "distance": -70,
                    "textStyle": {
                        "color": "#fff",
                        "fontSize": 40
                    }
                }
            },
            data: [{
                    "name": "关井数",
                    "value": "220",
                    "trueVal": "22",
                    "itemStyle": {
                        "normal": {
                            "color": {
                                "x": 0,
                                "y": 0,
                                "x2": 0,
                                "y2": 1,
                                "type": "linear",
                                "global": false,
                                "colorStops": [{
                                    "offset": 1,
                                    "color": "rgba(0,255,100,0.5)"
                                }, {
                                    "offset": 1,
                                    "color": "#43bafe"
                                }]
                            }
                        }
                    }
                }, {
                    "name": "开井数",
                    "value": "182",
                    "trueVal": "18",
                    "itemStyle": {
                        "normal": {
                            "color": {
                                "x": 0,
                                "y": 0,
                                "x2": 0,
                                "y2": 1,
                                "type": "linear",
                                "global": false,
                                "colorStops": [{
                                    "offset": 0,
                                    "color": "rgba(255,204,0,0.5)"
                                }, {
                                    "offset": 1,
                                    "color": "#ff7800"
                                }]
                            }
                        }
                    }
                }, {
                    "name": "不在线",
                    "value": "191",
                    "trueVal": "19",
                    "itemStyle": {
                        "normal": {
                            "color": {
                                "x": 0,
                                "y": 0,
                                "x2": 0,
                                "y2": 1,
                                "type": "linear",
                                "global": false,
                                "colorStops": [{
                                    "offset": 0,
                                    "color": "rgba(185,183,255,0.5)"
                                }, {
                                    "offset": 1,
                                    "color": "#e9a5ff"
                                }]
                            }
                        }
                    }
                }

            ]
        } 


    ]
};