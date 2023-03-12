option = {
     title: {
	        text: '漏斗图',
	        textStyle: {
	        	 align: 'center',
	            color: '#fff',
	            fontSize: 20,
	        },
	        top: '3%',
	        left: '10%',
	    },
    backgroundColor: '#fff',
    grid: {
        top: "25%",
        bottom: "10%"
    },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
            label: {
                show: true
            }
        }
    },
    legend: {
        data: ["进入数", "淘汰数"],
        top: "15%",
        textStyle: {
            color: "#111"
        }
    },
    xAxis: {
        data: [
            "接收简历数",
            "初筛",
            "测评",
            "小组面",
            "HR面",
            "专业面",
            "offer",
            "录用"
        ],
        splitLine: {
                show: true
            },
        axisLine: {
            show: true //隐藏X轴轴线
        },
        axisTick: {
            show: true //隐藏X轴刻度
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#111" //X轴文字颜色
            }
        },
         axisLine: {
                    lineStyle: {
                        color: '#666'
                        }
                },
    },
    yAxis: [{
            type: "value",
            name: "简历数",
            nameTextStyle: {
                color: "#111"
            },
            splitLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: true
            },
            axisLine: {
                show: true
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#111"
                }
            },
             axisLine: {
                        lineStyle: {
                            color: '#666'
                            }
                    },
        },
        {
            show: false,
            type: "value",
            name: "同比",
            nameTextStyle: {
                color: "#111"
            },
            position: "right",
            splitLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: true,
                formatter: "{value} %", //右侧Y轴文字显示
                textStyle: {
                    color: "#111"
                }
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"]
                }
            }
        },
    ],
    series: [{
            name: "销售水量",
            type: "line",
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: false, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 10, //标记的大小
            itemStyle: {
                //折线拐点标志的样式
                color: "#058cff"
            },
            lineStyle: {
                color: "#058cff"
            },
            areaStyle:{
                color: "rgba(5,140,255, 0.2)"
            },
            data: [420, 380, 280, 250, 190, 180, 130, 50]
        },
        {
            name: "主营业务",
            type: "bar",
            barWidth: 15,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "#00FFE3"
                        },
                        {
                            offset: 1,
                            color: "#4693EC"
                        }
                    ])
                }
            },
            data: [420, 380, 280, 250, 190, 180, 130, 50]
        }
    ]
};