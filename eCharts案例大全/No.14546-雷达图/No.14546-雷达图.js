var text = [ { text: '新房成交量' },
                { text: '经理指数' },
                { text: '来访指数' },
                { text: '库存消化速度' },
                { text: '新房成交均价' }]
var lineStyle = {
            lineStyle: {
                color: ['#111', '#111', '#111', '#111', '#111', '#fff']
            }
        }
var textStyle={color:"#be0712",fontSize:"18",
    fontWeight:'1000'
}
option = {
    backgroundColor:'#111',
    title:[
	        {text:"广州",x: '2%', y: '1%',textStyle:textStyle},
	        {text:"深圳",x: '40%', y: '1%',textStyle:textStyle},
	        {text:"东莞",x: '75%', y: '1%',textStyle:textStyle},
	        {text:"中山",x: '2%', y: '30%',textStyle:textStyle},
	        {text:"佛山",x: '40%', y: '30%',textStyle:textStyle},
	        {text:"惠州",x: '75%', y: '30%',textStyle:textStyle},
	        {text:"珠海",x: '2%', y: '60%',textStyle:textStyle},
	    ],
    legend: {
        bottom:'10%',
        right:'5%',
        orient:'vertical',
        itemWidth: 50,
        itemHeight: 5,
        data: ['图一','图二', '图三',]
    },
    color:['#be0712','#fdbf2d','#7f7f7f'],
    radar: [
        {
            indicator:text,
            center: ['15%', '15%'],
            radius: 60,
            splitArea: {
                show: false
            },
            splitLine: lineStyle,
            
        },
        {
            indicator: text,
            center: ['50%', '15%'],
            radius: 60,
            splitArea: {
                show: false
            },
            splitLine: lineStyle,
            
        },
        {
            indicator: text,
            center: ['85%', '15%'],
            radius: 60,
            splitArea: {
                show: false
            },
            splitLine: lineStyle,
            
        },
         {
            indicator:text,
            center: ['15%', '45%'],
            radius: 60,
            splitArea: {
                show: false
            },
            splitLine: lineStyle,
            
        },
        {
            indicator: text,
            center: ['50%', '45%'],
            radius: 60,
            splitArea: {
                show: false
            },
            splitLine: lineStyle,
            
        },
        {
            indicator: text,
            center: ['85%', '45%'],
            radius: 60,
            splitArea: {
                show: false
            },
            splitLine: lineStyle,
            
        },
        {
            indicator: text,
            center: ['15%', '75%'],
            radius: 60,
            splitArea: {
                show: false
            },
            splitLine: lineStyle,
            
        }
    ],
    series: [
        {
            name: '广州',
            type: 'radar',
            itemStyle: {
                emphasis: {
                    // color: 各异,
                    lineStyle: {
                        width: 1
                    }
                }
            },
            data: [
                {
                    value: [100, 8, 0.40, -80, 200],
                    name: '图一',
                    symbol: 'rect',
                    symbolSize: 5,
                    lineStyle: {
                        normal: {
                            type: 'solid'
                        }
                    }
                },
                {
                    value: [60, 5, 0.30, -100, 150],
                    name: '图二',
                   symbolSize: 5,
                    lineStyle: {
                        normal: {
                            type: 'solid'
                        }
                    }
                },
                {
                    value: [20, 35, 1.30, 100, 50],
                    name: '图三',
                    symbol: 'rect',
                    symbolSize: 5,
                    lineStyle: {
                        normal: {
                            type: 'solid'
                        }
                    }
                }
            ]
        },
        {
            name: '深圳',
            type: 'radar',
            itemStyle: {
                emphasis: {
                    // color: 各异,
                    lineStyle: {
                        width: 1
                    }
                }
            },
            radarIndex: 1,
            data: [
                {
                    value: [10, 8, 0.40, -80, 300],
                    name: '图一',
                    symbol: 'rect',
                    symbolSize: 5,
                    lineStyle: {
                        normal: {
                            type: 'solid'
                        }
                    }
                },
                {
                    value: [60, 5, 0.30, -100, 250],
                    name: '图二',
                   symbolSize: 5,
                    lineStyle: {
                        normal: {
                            type: 'solid'
                        }
                    }
                },
                {
                    value: [220, 35, 1.30, 100, 450],
                    name: '图三',
                    symbol: 'rect',
                    symbolSize: 5,
                    lineStyle: {
                        normal: {
                            type: 'solid'
                        }
                    }
                }
            ]
        },
        {
            name: '东莞',
            type: 'radar',
            itemStyle: {
                emphasis: {
                    // color: 各异,
                    lineStyle: {
                        width: 1
                    }
                }
            },
            radarIndex: 2,
            data: [
                {
                    value: [10, 8, 0.40, -30, 30],
                    name: '图一',
                    symbol: 'rect',
                    symbolSize: 5,
                    lineStyle: {
                        normal: {
                            type: 'solid'
                        }
                    }
                },
                {
                    value: [60, 5, 0.30, -150, 250],
                    name: '图二',
                   symbolSize: 5,
                    lineStyle: {
                        normal: {
                            type: 'solid'
                        }
                    }
                },
                {
                    value: [20, 35, 1.30, 200, 450],
                    name: '图三',
                    symbol: 'rect',
                    symbolSize: 5,
                    lineStyle: {
                        normal: {
                            type: 'solid'
                        }
                    }
                }
            ]
        },
        {
            name: '中山',
            type: 'radar',
            itemStyle: {
                emphasis: {
                    // color: 各异,
                    lineStyle: {
                        width: 1
                    }
                }
            },
            radarIndex: 3,
            data: [
                {
                    value: [100, 8, 0.40, -80, 200],
                    name: '图一',
                    symbol: 'rect',
                    symbolSize: 5,
                    lineStyle: {
                        normal: {
                            type: 'solid'
                        }
                    }
                },
                {
                    value: [60, 5, 0.30, -100, 150],
                    name: '图二',
                   symbolSize: 5,
                    lineStyle: {
                        normal: {
                            type: 'solid'
                        }
                    }
                },
                {
                    value: [20, 35, 1.30, 100, 50],
                    name: '图三',
                    symbol: 'rect',
                    symbolSize: 5,
                    lineStyle: {
                        normal: {
                            type: 'solid'
                        }
                    }
                }
            ]
        },
        {
            name: '佛山',
            type: 'radar',
            itemStyle: {
                emphasis: {
                    // color: 各异,
                    lineStyle: {
                        width: 1
                    }
                }
            },
            radarIndex:4,
            data: [
                {
                    value: [10, 8, 0.40, -80, 300],
                    name: '图一',
                    symbol: 'rect',
                    symbolSize: 5,
                    lineStyle: {
                        normal: {
                            type: 'solid'
                        }
                    }
                },
                {
                    value: [60, 5, 0.30, -100, 250],
                    name: '图二',
                   symbolSize: 5,
                    lineStyle: {
                        normal: {
                            type: 'solid'
                        }
                    }
                },
                {
                    value: [220, 35, 1.30, 100, 450],
                    name: '图三',
                    symbol: 'rect',
                    symbolSize: 5,
                    lineStyle: {
                        normal: {
                            type: 'solid'
                        }
                    }
                }
            ]
        },
        {
            name: '惠州',
            type: 'radar',
            itemStyle: {
                emphasis: {
                    // color: 各异,
                    lineStyle: {
                        width: 1
                    }
                }
            },
            radarIndex:5,
            data: [
                {
                    value: [10, 8, 0.40, -30, 30],
                    name: '图一',
                    symbol: 'rect',
                    symbolSize: 5,
                    lineStyle: {
                        normal: {
                            type: 'solid'
                        }
                    }
                },
                {
                    value: [60, 5, 0.30, -150, 250],
                    name: '图二',
                   symbolSize: 5,
                    lineStyle: {
                        normal: {
                            type: 'solid'
                        }
                    }
                },
                {
                    value: [20, 35, 1.30, 200, 450],
                    name: '图三',
                    symbol: 'rect',
                    symbolSize: 5,
                    lineStyle: {
                        normal: {
                            type: 'solid'
                        }
                    }
                }
            ]
        },
        {
            name: '珠海',
            type: 'radar',
            itemStyle: {
                emphasis: {
                    // color: 各异,
                    lineStyle: {
                        width: 1
                    }
                }
            },
            radarIndex:6,
            data: [
                {
                    value: [10, 8, 0.40, -30, 30],
                    name: '图一',
                    symbol: 'rect',
                    symbolSize: 5,
                    lineStyle: {
                        normal: {
                            type: 'solid'
                        }
                    }
                },
                {
                    value: [60, 5, 0.30, -150, 250],
                    name: '图二',
                   symbolSize: 5,
                    lineStyle: {
                        normal: {
                            type: 'solid'
                        }
                    }
                },
                {
                    value: [20, 35, 1.30, 200, 450],
                    name: '图三',
                    symbol: 'rect',
                    symbolSize: 5,
                    lineStyle: {
                        normal: {
                            type: 'solid'
                        }
                    }
                }
            ]
        }
    ]
}