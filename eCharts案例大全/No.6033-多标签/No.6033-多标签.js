 let data = {
    xData: ["石岐区", "东区", "五桂山", "西区", "南区", "沙溪镇", "大涌镇", "港口镇", "横栏镇", "古镇镇", "东升镇", "小榄镇", "阜沙镇", "东凤镇", "民众镇", "三角镇", "南头镇", "黄圃镇", "坦洲镇", "神湾镇", "板芙镇", "三乡镇", "南朗镇", "火炬开发区"],
    yData1: [696.6, 758.46, 115.39, 468.92, 402.24, 499.84, 146.06, 500.33, 300.11, 280.7, 395.91, 539.76, 83.54, 410.16, 278.81, 214.21, 188.76, 307.1, 711.54, 161.86, 110.53, 713.55, 443.24, 1175.31],
    yData2: [161.87, 119.4, 135.76, 62.22, 119.29, 418.48, 146.68, 255.66, 331.55, 357.35, 500.7, 1026.25, 303.84, 488.05, 516.32, 522.61, 352.91, 488.93, 621.1, 92.51, 295.22, 660.91, 424.23, 157.95]
}

    
/**
    双X轴标签对应，伪实现思路：
    底部的标签也是柱状图，对应包含的区域为上方X轴条数占总数的比例，设为宽度即可
*/
   var option = {
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow"
        }
    },
    grid: [{
            top:40,
            bottom: 80,
			width:'auto' ,
			left:55,
			right:20
			
        },
        {
            height: 70,
            bottom: 10,
			left:55,
			right:20
        }
    ],
    legend: { //图例组件，颜色和名字
        itemGap: 16,
        itemWidth: 18,
        itemHeight: 10,
        data: [{
                name: "已登记",
            },
            {
                name: "未登记",
            }
        ],
        textStyle: {
            color: "#a8aab0",
            fontStyle: "normal",
            fontFamily: "微软雅黑",
            fontSize: 12,
        }
    },
    xAxis: [{
        type: "category",
        data: data.xData,
        gridIndex: 0,
        axisLabel: {
            color: '#333',
            textStyle: {
                color: '#000000',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
            },
            rotate: 50,
        },
        axisLine: {
            lineStyle: {
                color: "#e7e7e7"
            }
        },
        axisTick: {
            lineStyle: {
                color: "#e7e7e7"
            }
        },
        zlevel: 1
    }, {
        type: "category",
        gridIndex: 1,
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#270157',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 14,
            }
        },
        zlevel: 2
    }],
    yAxis: [{
        type: 'value',
        gridIndex: 0,
        axisLabel: {
            color: '#333'
        },
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        },
        axisTick: {
            lineStyle: {
                color: '#ccc'
            }
        }
    }, {
        type: 'value',
        gridIndex: 1,
        axisLabel: {
            show: false

        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    }],
    series: [{
            name: '已登记',
            data: data.yData1,
            type: 'bar',
            barWidth: 14,
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#555'
                }
            },
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#209f84'
                    }, {
                        offset: 1,
                        color: '#209f84'
                    }]),
                    borderWidth: 0,
                }
            },
            xAxisIndex: 0,
            yAxisIndex: 0
        }, {
            name: '未登记',
            data: data.yData2,
            type: 'bar',
            barWidth: 14,
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#555'
                }
            },
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#FBBE54'
                    }, {
                        offset: 1,
                        color: '#FBBE54'
                    }]),
                    borderWidth: 0,
                }
            },
            xAxisIndex: 0,
            yAxisIndex: 0
        },
        {
            data: [{
                name: '第一分局',
                value: 1
            }],
            label: {
                show: true,
                position: 'insideBottom',
                formatter: '{b}',
                offset: [0, 0],
                textStyle: {
                    color: '#209F84',
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 14,
                    fontWeight: 'bold',
                }
            },
            type: 'bar',
            barGap: 0,
            barWidth: '33.3334%',
            itemStyle: {
                normal: {
                    color: 'rgba(32,159,132,0.14)'
                }
            },
            xAxisIndex: 1,
            yAxisIndex: 1
        }, {
            data: [{
                name: "第二分局",
                value: 1
            }],
            label: {
                show: true,
                position: "insideBottom",
                formatter: "{b}",
                offset: [0, 0],
                textStyle: {
                    color: "#209F84"
                },
                fontWeight: "bold",
                fontSize: 14,
            },
            type: "bar",
            barGap: 0,
            barWidth: "25%",
            itemStyle: {
                normal: {
                    color: "rgba(40,177,191,0.14)"
                }
            },
            xAxisIndex: 1,
            yAxisIndex: 1
        }, {
            data: [{
                name: "第三分局",
                value: 1
            }],
            label: {
                show: true,
                position: "insideBottom",
                formatter: "{b}",
                offset: [0, 0],
                textStyle: {
                    color: "#209F84"
                },
                fontWeight: "bold",
                fontSize: 14,
            },
            type: "bar",
            barGap: 0,
            barWidth: "16.6667%",
            itemStyle: {
                normal: {
                    color: "rgba(32,159,132,0.14)"
                }
            },
            xAxisIndex: 1,
            yAxisIndex: 1
        }, {
            data: [{
                name: "第四分局",
                value: 1
            }],
            label: {
                show: true,
                position: "insideBottom",
                formatter: "{b}",
                offset: [0, 0],
                textStyle: {
                    color: "#209F84"
                },
                fontWeight: "bold",
                fontSize: 14,
            },
            type: "bar",
            barGap: 0,
            barWidth: "16.6667%",
            itemStyle: {
                normal: {
                    color: "rgba(40,177,191,0.14)"
                }
            },
            xAxisIndex: 1,
            yAxisIndex: 1
        }, {
            data: [{
                name: "第五分局",
                value: 1
            }],
            label: {
                show: true,
                position: "insideBottom",
                formatter: "{b}",
                offset: [0, 0],
                textStyle: {
                    color: "#209F84"
                },
                fontWeight: "bold",
                fontSize: 14,
            },
            type: "bar",
            barCategoryGap: 0,
            barGap: 0,
            barWidth: "4.1667%",
            itemStyle: {
                normal: {
                    color: "rgba(32,159,132,0.14)"
                }
            },
            xAxisIndex: 1,
            yAxisIndex: 1
        }, {
            data: [{
                name: "火炬分局",
                value: 1
            }],
            label: {
                show: true,
                position: "insideBottom",
                formatter: "{b}",
                offset: [0, 0],
                textStyle: {
                    color: "#209F84"
                },
                fontWeight: "bold",
                fontSize: 14,
            },
            type: "bar",
            barCategoryGap: 0,
            barGap: 0,
            barWidth: "4.1667%",
            itemStyle: {
                normal: {
                    color: "rgba(40,177,191,0.14)"
                }
            },
            xAxisIndex: 1,
            yAxisIndex: 1
        }
    ]
};