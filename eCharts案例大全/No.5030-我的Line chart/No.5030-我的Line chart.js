/*
    最近本人发现了配置更简单，更容易理解，更容易修改，bug更少的写法
    
    所以更新了原图表，这里分享给大家
    
    不知道用以前写法的小伙伴有没有发现
    
    1.项目中如果数据为0的话，hover的时候用以前的写法文字会将圆点盖住...
    
    2.鼠标放上的时候，x轴Pointer文字可能会有些轻微的向上或向下的移动...
    
    3.文字下划线和文字见的距离过小，有的时候不是很符合需求...
    
    以下旧写法我都注释了哈，现在生效的是新写法，新写法我也解释说明了哦

*/


/*

    这个注释建议看完代码再看哦
    
    1.如果axisLabel和axisPointer的margin相同，则padding[0]必须等于0
    
    2.实现效果axisLabel和AxisPointer的字体大小必须相同
    
    3.此配置实现效果axisLabel和axisPointer的margin必须相同
    
    其他配置同样可以实现效果，如lineHeight等
    
    这是我整理、删除多余相同配置项后总结出的，使用方便，便于封装复用
    
    适用于大多数图表的配置

    更复杂的样式还是要参考配置文档的哦???

*/
const colorList = ["#9E87FF", '#73DDFF', '#fe9a8b', '#F56948', '#9E87FF']
option = {
    backgroundColor: '#080b30',
    title: {
        text: '全国6月销售统计',
        textStyle: {
            fontSize: 12,
            fontWeight: 400
        },
        left: 'center',
        top: '5%'
    },
    legend: {
        icon: 'circle',
        top: '5%',
        right: '5%',
        itemWidth: 6,
        itemGap: 20,
        textStyle: {
            color: '#556677'
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(0, 255, 233,0)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(255, 255, 255,1)',
                    }, {
                        offset: 1,
                        color: 'rgba(0, 255, 233,0)'
                    }],
                    global: false
                }
            },
        },
        backgroundColor: '#fff',
        textStyle: {
            color: '#5c6c7c'
        },
        padding: [10, 10],
        extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)'
    },
    grid: {
        top: '15%'
    },
    xAxis: [{
        type: 'category',
        data: ['北京', '上海', '广州', '深圳', '香港', '澳门', '台湾'],
        axisLine: {
            show: true
        },
        splitArea: {
            // show: true,
            color: '#f00',
            lineStyle: {
                color: '#f00'
            },
        },
        axisLabel: {
            color: '#fff'
        },
        splitLine: {
            show: false
        },
        boundaryGap: false
    }],
    yAxis: [{
        type: 'value',
        min: 0,
        // max: 140,
        splitNumber: 6,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.1)'
            }
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
            margin: 20,
            textStyle: {
                color: '#d1e6eb',

            },
        },
        axisTick: {
            show: false,
        },
    }, {
        type: 'value',
        position: 'right',
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false,
            textStyle: {
                color: '#556677'
            },
            formatter: '{value}'
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#DCE2E8'
            }
        },
        splitLine: {
            show: false
        }
    }],
    series: [
        {
            name: 'Nike',
            type: 'line',
            data: [5, 12, 11, 14, 12, 16, 10],
            symbolSize: 10,
            symbol: 'circle',
            smooth: true,
            yAxisIndex: 0,
            showSymbol: false,
            lineStyle: {
                width: 3,
                color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
                        offset: 0,
                        color: '#73DD39'
                    },
                    {
                        offset: 1,
                        color: '#00ca95'
                    }
                ]),
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 5,
                shadowOffsetX: 5, 
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#00ca95',
                }
            },
            itemStyle: {
                normal: {
                    color: "#00ca95",
                    borderColor: "#fff",
                    borderWidth: 1,
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 0,
                    shadowOffsetY: 2,
                    shadowOffsetX: 2
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(0,202,149,0.3)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(0,202,149,0)'
                        }
                    ], false),
                    shadowColor: 'rgba(0,202,149, 0.9)',
                    shadowBlur: 20
                }
            }
        },
        {
            name: '老北京布鞋',
            type: 'line',
            data: [150, 120, 170, 140, 500, 160, 110],
            symbolSize: 10,
            yAxisIndex: 1,
            symbol: 'circle',
            smooth: true,
            showSymbol: false,
            lineStyle: {
                width: 3,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#6c50f3'
                    },
                    {
                        offset: 1,
                        color: '#6c50f3'
                    }
                ]),
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 5,
                shadowOffsetX: 5, 
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#6c50f3',
                }
            },
            itemStyle: {
                normal: {
                    color: "#6c50f3",
                    borderColor: "#fff",
                    borderWidth: 1,
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 0,
                    shadowOffsetY: 2,
                    shadowOffsetX: 2
                }
            },areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(108,80,243,0.3)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(108,80,243,0)'
                        }
                    ], false),
                    shadowColor: 'rgba(108,80,243, 0.9)',
                    shadowBlur: 20
                }
            }
        }
    ]
};