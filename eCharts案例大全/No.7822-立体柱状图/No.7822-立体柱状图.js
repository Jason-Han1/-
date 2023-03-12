option = {
    backgroundColor: '#20203e',
    grid: {
        top: "14%",
        bottom: "15%"
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
        data: ["驾驶人保有量"],
        top: "8%",
        
        textStyle: {
            color: "#ffffff"
        }
    },
    xAxis: {
        data: ['2015','2016','2017','2018','2019'],
        offset: 12,
          axisLine: {
                show: false,

            },
               axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
              axisTick: {
                show: false
            },
               splitLine: {
                show: false
            },
    },
    yAxis: [
        {
            type: 'value',
            name: '(人)',
            min: 0,
            max: 400,
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: '#fff'
                }
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff'
                }
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#262b35'
                }
            }
        },
        {
            type: "value",
            name: "同比",
            nameTextStyle: {
                color: "#fff"
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
                  formatter: '{value}%',//右侧Y轴文字显示
                textStyle: {
                    color: "#fff"
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
            type: 'bar',
            name: '驾驶人保有量',
            barWidth: 18,
            emphasis: {
                itemStyle: {
                    color: '#7fb7e9'
                }
            },
            itemStyle: {
	            normal: {
	                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                    offset: 0,
	                    color: '#00e4ec' // 0% 处的颜色
	                }, {
	                    offset: 1,
	                    color: '#0946f1' // 100% 处的颜色
	                }], false),
	              
	            }
	        },
            data: [220, 182, 191, 234, 223]
        }, {
            name: '驾驶人保有量',
            tooltip: {
                show: false
            },
            type: 'bar',
            barWidth: 18,
            emphasis: {
                itemStyle: {
                    color: '#2e9bff'
                }
            },
            itemStyle: {
	            normal: {
	                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                    offset: 0,
	                    color: '#00e4ec' // 0% 处的颜色
	                }, {
	                    offset: 1,
	                    color: '#0946f1' // 100% 处的颜色
	                }], false),
	              
	            }
	        },
            data: [220, 182, 191, 234, 223],
            barGap: 0,
            legendHoverLink: false,
        }, {
            name: '驾驶人保有量',
            tooltip: {
                show: false
            },
            type: 'pictorialBar',

            itemStyle: {
                normal: {
                    color: '#73bbff',
                    // borderWidth:1,
                    // borderColor:'#3c93fc'
                }
            },
           
            symbolRotate: 0,
            symbolSize: ['36', '9'],
            symbolOffset: ['0', '4'],
            symbolPosition: 'start',
            data: [220, 182, 191, 234, 223],
            z: 3
        },
        {
            name: '驾驶人保有量',
            tooltip: {
                show: false
            },
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: '#73bbff',
                    // borderWidth:1,
                    // borderColor:'#3c93fc'
                }
            },

            
            symbolRotate: 0,
            symbolSize: ['36', '9'],
            symbolOffset: ['0','-4'],
            symbolPosition: 'end',
            data: [220, 182, 191, 234, 223],
            z: 3
        },
        
    ]
};