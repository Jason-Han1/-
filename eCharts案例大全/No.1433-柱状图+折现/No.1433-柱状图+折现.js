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
        data: ["用工人数", "同比", "环比"],
        top: "15%",
        textStyle: {
            color: "#ffffff"
        }
    },
    xAxis: {
        data: [
           '1月', '2月', '3月', '4月', '5月', '6月','7月', '8月', '9月', '10月', '11月', '12月'
      
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
            name: "万元",
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
            name: "单位",
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
            splitNumber: 10,
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
    series: [{
            name: "同比",
            type: "line",
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: true, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 10, //标记的大小
            itemStyle: {
                //折线拐点标志的样式
                color: "#7DF8FF"
            },
            lineStyle: {
                color: "#7DF8FF"
            },
            areaStyle:{
                color: "rgba(5,140,255, 0.2)"
            },
            data: [4, 3, 4, 5, 3, 2, 3, 14, 3, 4, 5, 3, 5, 3]
        },{
            name: "环比",
            type: "line",
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: true, //平滑曲线显示
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
            data: [2, 3, 4, 3.5, 2, 1, 3, 5, 3, 4, 5, 3, 2, 3, 1]
        },
        {
            name: "用工人数",
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
            data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 4, 3, 4, 5, 3, 2, 3, 1]
        }
    ]
};