	option = {
	    grid: {
	        top: "10%",
	        bottom: "50%"
	    },
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'shadow'
	        }
	    },
	    title: {
	        text: "物料不良批次分布",
	        top: '3%',
	        left: '10%'
	        },
	    backgroundColor: "#fff",
	     yAxis: [{
	        //name: '不良批次数',
	        type: 'value',
	        axisLabel: {
	            show: true,
	            // formatter: "{value} %", //右侧Y轴文字显示
	            textStyle: {
	                color: "#000",
	                fontSize: 16
	            }
	        },
	        axisLine: {
	            show: true,
	            lineStyle: {
	                color: '#26D9FF',
	                width: 2
	            }
	        },
	        splitLine: false,
	        boundaryGap: [0, 0.01]

	    }, {
	        //name: '累计百分比',
	        type: 'value',
	        splitLine: false,
	        max: 100,
	        axisLabel: {
	            show: true,
	            formatter: "{value} %", //右侧Y轴文字显示
	            textStyle: {
	                color: "#000",
	                fontSize: 16
	            }
	        },
	        axisLine: {
	            show: true,
	            lineStyle: {
	                color: '#26D9FF',
	                width: 2
	            }
	        },
	        position: "right",
	        boundaryGap: [0, 0.01]

	    }],
	    xAxis: {
	        type: 'category',
	         axisLabel: {
	            show: true,
	            interval: 0,
	            rotate: 40,
	            //formatter: "{value} %", //右侧Y轴文字显示
	            textStyle: {
	                color: "#000",
	                fontSize: 16
	            }
	        },
	        axisLine: {
	            show: true,
	            lineStyle: {
	                color: '#26D9FF',
	                width: 2
	            }
	        },
	        data: ['A商品', 'B商品', 'C商品', 'D商品', 'E商品', 'F商品', 'G商品', 'H商品', 'I商品', 'J商品'],
	      
	    },
	    itemStyle: {
	        //折线拐点标志的样式
	        color: "#3D7EEB",
	        borderColor: "#3D7EEB",
	        width: 2,
	        shadowColor: "#3D7EEB",
	        shadowBlur: 4
	    },
	    lineStyle: {
	        color: "#26D9FF",
	        width: 2,
	        shadowColor: "#26D9FF",
	        shadowBlur: 4
	    },
	    areaStyle: {
	        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                offset: 0,
	                color: "rgba(61,126,235, 0.5)"
	            },
	            {
	                offset: 1,
	                color: "rgba(61,126,235, 0)"
	            }
	        ])
	    },
	    series: [{
	            name: '不良批次数',
	            type: 'bar',
	            //color: "#3D7EEB",
	            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "rgba(61,126,235, 1)"
                        },
                        {
                            offset: 1,
                            color: "rgba(61,126,235, 0)"
                        }
                    ]),
                    borderColor: 'rgba(102,120,148,0.2)',
                    /*borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "rgba(160,196,225, 1)"
                        },
                        {
                            offset: 1,
                            color: "rgba(61,126,235, 1)"
                        }
                    ]),*/
                    borderWidth: 2
                }
            },
	            data: [269, 264, 259, 201, 186, 183, 176, 155, 153, 124]
	        },
	        {
	            name: '累计百分比',
	            type: 'line',
	            yAxisIndex: 1,
	            smooth: true, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 8, //标记的大小
            itemStyle: {
                //折线拐点标志的样式
                color: "#AFEEEE",
                borderColor: "#AFEEEE",
                width: 2,
                shadowColor: "#AFEEEE",
                shadowBlur: 4
            },
            lineStyle: {
                color: "#AFEEEE",
                width: 2,
                shadowColor: "#AFEEEE",
                shadowBlur: 4
            },
	           // smooth: 0.5,
	            //color: "#26D9FF",
	            data: [20, 40, 60, 75, 80, 85, 90, 96, 98, 100]
	        }
	    ]
	};



	myChart.setOption(option);

	function randomData() {
	    return Math.round(Math.random() * 1000);
	}