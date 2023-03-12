datatime=["04-01", "04-02", "04-04"]
datadata= [1200, 1500, 2000]
option={
    tooltip: {
        "trigger": "axis",
        // "axisPointer": {
        //     "type": "cross",
        //     "crossStyle": {
        //         "color": "#999"
        //     }
        // }
    },
     backgroundColor: '#0f375f',
       dataZoom: [{
  	        type: 'slider',
  	        realtime: true,
  	        //移动端展示方式
  	        handleSize: '100%', //滑动条两侧的大小
  	         start: 0,
             end: 50,
  	    }],
    // grid: {
    //     "left": "20%",
    //     "right": "15%"
    // },

    xAxis: [{
        // "type": "category",
        data: datatime,
        axisPointer: {
            "type": "shadow"
        },
        axisLine: {
            "lineStyle": {
                "color": "#fff"
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
            "show": false
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
        
    },],
    series: [{
        name: "累计热量(GJ)",
        type: "bar",
        barWidth: 20,
         itemStyle: {
                normal: {
                    barBorderRadius: 30,
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
                }
            },
        data: datadata
    }]
}