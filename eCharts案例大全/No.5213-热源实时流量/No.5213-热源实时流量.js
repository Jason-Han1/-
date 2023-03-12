option = {
     title: {
	       // text: '热源实时流量',
	        textStyle: {
	        	 align: 'center',
	            color: '#fff',
	            fontSize: 20,
	        },
	        top: '3%',
	        left: '10%',
	    },
    backgroundColor: '#0f375f',
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
    // legend: {
    //     data: ["供水", "回水"],
    //     top: "15%",
    //     textStyle: {
    //         color: "#ffffff"
    //     }
    // },
    xAxis: {
        data: [
            "国投热源1#",
            "国投热源2#",
             "城西热源",
            
        ],
        axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
                        color: '#01FCE3'
                        }
        },
        axisTick: {
            show: true //隐藏X轴刻度
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#ebf8ac" //X轴文字颜色
            }
        },
         
    },
    yAxis: [{
            type: "value",
            name: "T/h",
            nameTextStyle: {
                color: "#ebf8ac"
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
                    color: "#ebf8ac"
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
                    color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"]
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
                        color: "#FF8247",
                         barBorderRadius: [50, 50, 0, 0]
                   }
              },
           
        //   itemStyle: {
        //         normal: {
        //             color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
        //                     offset: 0,
        //                     color: "#FFA54F",
        //                 },
        //                  {
        //                     offset: 0.5,
        //                     color: "#FF8247"
        //                 },
        //                 {
        //                     offset: 1,
        //                     color: "#FFA07A"
        //                 }
        //             ]),
        //              barBorderRadius: [50, 50, 0, 0] //柱状图圆角
        //         },
        //     },          
            data: [4, 5.8,5]
        },
        {
            name: "回水",
            type: "bar",
            barWidth: 25,
             itemStyle: {
                   normal: {
                        color: "#4693EC",
                         barBorderRadius: [50, 50, 0, 0]
                   }
              },
            //  itemStyle: {
            //     normal: {
            //         color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            //                 offset: 0,
            //                 color: "#63B8FF",
            //             },
            //              {
            //                 offset: 0.5,
            //                 color: "#6495ED"
            //             },
            //             {
            //                 offset: 1,
            //                 color: "#63B8FF"
            //             }
            //         ]),
            //          barBorderRadius: [50, 50, 0, 0] //柱状图圆角
            //     },
            // },  
            data: [4.2, 3.8,5.3]
        }
    ]
};