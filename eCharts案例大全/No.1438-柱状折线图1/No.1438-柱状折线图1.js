option = {
     title: {
	        text: '2019年销售水量和主营业务收入对比',
	        textStyle: {
	        	 align: 'center',
	            color: '#fff',
	            fontSize: 20,
	        },
	        top: '3%',
	        left: '10%',
	    },
    backgroundColor: '#013A54',
    grid: {
        top: "25%",
        bottom: "10%"//也可设置left和right设置距离来控制图表的大小
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
        data: ["销售水量", "各集团项目数量"],
        top: "15%",
        textStyle: {
            color: "#ffffff"
        }
    },
    xAxis: {
        data: [
            "集团1",
            "集团1",
            "集团1",
            "集团1",
            "集团1",
            "集团1",
            "集团1",
            "集团1",
            "集团1",
            "集团1",
            "集团1",
            "集团1",
            
        ],
        axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
                        color: '#ffffff'
                        }
        },
        axisTick: {
            show: true //隐藏X轴刻度
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#ffffff" //X轴文字颜色
            }
        },
         
    },
    yAxis: [{
            type: "value",
            name: "数量",
            nameTextStyle: {
                color: "#ffffff"
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: true
            },
            axisLine: {
                show: true,
                lineStyle: {
                            color: '#FFFFFF'
                            }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#ffffff"
                }
            },
             
        },
        {
            type: "value",
            name: "",
            nameTextStyle: {
                color: "#ffffff"
            },
            position: "right",
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
                    color: "#ffffff"
                }
            }
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
    series: [
        {
            name: "各集团项目数量",
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
            data: [2020, 2500, 2000, 1655, 1999, 1222, 2222, 1212, 1555, 2222, 900,800]
        }
    ]
};