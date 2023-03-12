
dataXName=["淑阳镇","","","",""]

option={
    tooltip: {
        trigger: "axis",
        // "axisPointer": {
        //     "type": "cross",
        //     "crossStyle": {
        //         "color": "#999"
        //     }
        // }
    },
     backgroundColor: '#0f375f',
    // grid: {
    //     left: "20%",
    //     right: "15%"
    // },
    
    toolbox: {
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ["line", "bar"]
            },
            restore: {
                "show": true
            },
            saveAsImage: {
                "show": true
            }
        }
    },
    legend: {
        data: ["累计热量(GJ)","累计流量(T)", "环比(%)"],
        // "bottom": 5,
        top: "5%",
        // icon: "circle",
        //   icon: "circle", //icon 长方形 circle 圆形 arrow箭头型 diamond菱形
        textStyle: {
            color: "#fff"
        }
    },
    xAxis: [{
        // "type": "category",
        data: ["04-01", "04-02", "04-03"],
        axisPointer: {
            type: "shadow"
        },
        axisLine: {
            lineStyle: {
                color: "#fff"
            }
        },
         axisTick: {
            show: true //隐藏X轴刻度
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#fff" //X轴文字颜色
            }
        },
        
    }],
    yAxis: [{
        type: "value",
        splitLine: {
            show: false
        },
        name: "累计热量(GJ)",
      nameTextStyle: {
                // color: "#ebf8ac"
            },
            axisTick: {
                show: true
            },
            axisLine: {
                show: true,
                lineStyle: {
                            color: '#fff'
                            }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#fff"
                }
            },
        
    }, {
        type: "value",
        splitLine: {
            show: false
        },
        name: "环比(%)",
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
         axisLabel: {
                show: true,
                textStyle: {
                    color: "#fff"
                }
            },
    }],
       dataZoom: [{
  	        type: 'slider',
  	        realtime: true,
  	        //移动端展示方式
  	        handleSize: '100%', //滑动条两侧的大小
  	         start: 0,
             end: 50,
  	    }],
    series: [{
        name: "累计热量(GJ)",
        type: "bar",
        barWidth: 20,
         itemStyle: {
                normal: {
                    barBorderRadius:  [10,10, 0, 0],
                     emphasis: {
                    barBorderRadius: [8, 8, 0, 0]
                },
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: '#00feff'
                            },
                            {
                                offset: 0.5,
                                color: '#4693EC'
                            },
                            {
                                offset: 1,
                                color: '#027eff'
                            }
                        ]
                    )
                },
                
                 
            },
        data: [1200, 1500, 2000]
    },{
        name: "累计流量(T)",
        type: "bar",
        barWidth: 20,
         itemStyle: {
                normal: {
                    barBorderRadius:  [10,10, 0, 0],
                      emphasis: {
                    barBorderRadius: [8, 8, 0, 0]
                },
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: '#f6d365'
                            },
                            {
                                offset: 0.5,
                                color: '#fee140'
                            },
                            {
                                offset: 1,
                                color: '#f9d423'
                            }
                        ]
                    )
                }
            },
        data: [1235, 1723, 1358]
    }, {
        name: "环比(%)",
        type: "line",
        yAxisIndex: 1,
        smooth:true,
        data: [50, 45, 60],
        itemStyle: {
            normal: {
                color: "#8cd5c2",
                lineStyle: {
                    color: "#8cd5c2"
                }
            }
        }
    }]
}