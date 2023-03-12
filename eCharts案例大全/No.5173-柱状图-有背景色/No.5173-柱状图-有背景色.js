option = {
     title: {
	       // text: '热源实时流量',
	        textStyle: {
	        	 align: 'center',
	            color: '#000',
	            fontSize: 20,
	        },
	        top: '3%',
	        left: '10%',
	    },
    backgroundColor: '#ebeef0',
    grid: {
        top: "25%",
        bottom: "10%"//也可设置left和right设置距离来控制图表的大小
    },
    // tooltip: {
    //     trigger: "axis",
    //     axisPointer: {
    //         type: "shadow",
    //         label: {
    //             show: true
    //         }
    //     }
    // },
    // legend: {
    //     data: ["供水", "回水"],
    //     top: "15%",
    //     textStyle: {
    //         color: "#ffffff"
    //     }
    // },
    xAxis: {
        data: [
            "A1",
            "A2",
             "A3",
            
        ],
        axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
                color: '#1890FF'
            }
        },
        axisTick: {
            show: false //隐藏X轴刻度
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#000" //X轴文字颜色
            }
        },
         
    },
    yAxis: [{
            type: "value",
            name: "",
            nameTextStyle: {
                color: "#000"
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#1890FF'
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#000"
                }
            },
             
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
                    color: ["rgba(250,250,250,0)", "rgba(250,250,250,0.5)"]
                }
            }
        }
    ],
    series: [{
        name: "供水",
        type: "bar",
        // yAxisIndex: 1,
        // barGap:'100%',
         barWidth: 25,//使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
        smooth: true, //平滑曲线显示
        showAllSymbol: true, //显示所有图形。
        symbol: "circle", //标记的图形为实心圆
        //  color: '#FF8247',
          itemStyle: {
               normal: {
                    color: "#1890FF",
                     barBorderRadius: [4, 4, 0, 0]
               }
          },
        data: [4, 10,5]
        },
    ]
};