option = {
    color:['#ffb90f','#ff9080','#00bfb7','#058cff'],
     title: {
	        text: '湾区新推货量及认购率走势图',
	        textStyle: {
	        	 align: 'center',
	            color: '#fff',
	            fontSize: 20,
	        },
	        top: '3%',
	        x: 'center',
	    },
    backgroundColor: '#0f375f',
    grid: {
        top: "15%",
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
        data: ['2019.03','2019.04','2019.05','认购率'],
        top: "10%",
        textStyle: {
            color: "#ffffff"
        }
    },
    xAxis: {
        data: ['广州','惠州','深圳','中山','珠海','东莞','佛山','肇庆','汕头'],
        axisTick: {
            show: true //隐藏X轴刻度
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#ebf8ac" //X轴文字颜色
            }
        },
         axisLine: {
                    lineStyle: {
                        color: '#01FCE3'
                        }
                },
    },
    yAxis: [{
            type: "value",
            name: "亿元",
            nameTextStyle: {
                color: "#ebf8ac"
            },
            splitLine: {
                show: false
            },
          
            axisTick: {
                show: true
            },
           
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#ebf8ac"
                }
            },
             axisLine: {
                        lineStyle: {
                            color: '#FFFFFF'
                            }
                    },
        },
        {
            type: "value",
            name: "认购率",
            nameTextStyle: {
                color: "#ebf8ac"
            },
            position: "right",
            splitLine: {
                show: false
            },
            axisTick: {
                show: true
            },
            axisLine: {
                        lineStyle: {
                            color: '#FFFFFF'
                            }
                    },
            axisLabel: {
                show: true,
                formatter: "{value} %", //右侧Y轴文字显示
                textStyle: {
                    color: "#ebf8ac"
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
            name: "2019.03",
            type: "bar",
            barWidth: 15,
            
            data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5,6]
        },
        {
            name: "2019.04",
            type: "bar",
            barWidth: 15,
            
            data: [ 2.9, 2.8, 3, 5,4.2, 3.8, 4.8, 3.5,8]
        },
         {
            name: "2019.05",
            type: "bar",
            barWidth: 15,
            
            data: [  4.8, 3.5,2.9, 2.8, 3, 5,4.2, 3.8,6]
        },
        {
            name: "认购率",
            type: "line",
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: true, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 10, //标记的大小
             lineStyle:{
                        width:0
                    },
            label: {
                    show: true,
                    position: 'bottom',
                     formatter: [
                        '{c} %',
                    ].join(','),
                    textStyle: {
                        color: '#da5350',
                        fontSize: 14,
                    }
                },
            itemStyle: {
                color: "FFFFFF",
                borderColor: "red",
                borderWidth: 2
            },
           
            data: [46.2, 38.8, 84.8, 93.5, 42.9, 82.8, 63, 75]
        },
    ]
};