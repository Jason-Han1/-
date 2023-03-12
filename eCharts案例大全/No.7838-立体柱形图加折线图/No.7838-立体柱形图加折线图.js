var barWidth = 40;
var symbolSize = [barWidth, 20];
var symbolOffsetT = [0, -10]; //修改绿色柱子头部椭圆位置

var normalColor = "#94a1a9";
var fontSize = 20;
var datas = {
    xdata: ['2016', '2017', '2018', '2019'],
    yData1: [4200, 2220, 3910, 5340],
    yData2: [-10, 20, -36, 51],
    legendData: ['增长电量', '经济效益'],
}
option = {
    animation: false, //去除加载时缓动动画
    legend: {
        show: true,
        selectedMode: false, //取消图例上的点击事件
        data: datas.legendData
    },
    xAxis: {
        axisLine: {
            lineStyle: {
                color: normalColor
            }
        },
        axisTick: {
            "show": false
        },
        axisLabel: {
            textStyle: {
                color: normalColor,
                fontSize: fontSize
            },
            margin: 20
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: "dashed",
                color: normalColor
            }
        },
        data: datas.xdata,
    },
    yAxis: [{
            type: 'value',
            name: "万元",
            nameTextStyle: {
                fontSize: fontSize
            },
            color: normalColor,
            axisTick: {
                "show": false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: "dashed",
                    color: normalColor
                }
            },
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: normalColor,
                    fontSize: fontSize
                }
            },
            axisLine: {
                lineStyle: {
                    color: normalColor
                }
            },

        },
        {
            type: 'value',
            name: "%",
            nameTextStyle: {
                fontSize: fontSize
            },
            color: normalColor,
            axisTick: {
                "show": false
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: normalColor,
                    fontSize: fontSize
                }
            },
            axisLine: {
                lineStyle: {
                    color: normalColor
                }
            },

        }
    ],
    series: [{ // 绿色柱子
            name: datas.legendData[0],
            tooltip: {
                show: true
            },
            type: 'bar',
            barWidth: barWidth, //柱子宽度
            barGap: 0.5, //柱子之间间距
            emphasis: {
                itemStyle: { //填充部分鼠标移上去颜色
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(72, 238, 106,0.8)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(11, 151, 138,0.8)'
                            }
                        ]),
                }
            },
            label:{
              show:true ,
              position:"top",
              padding:10,
              textStyle:{
                  fontSize:fontSize
              }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: '#5DE6FF'
                            },
                            {
                                offset: 1,
                                color: '#00AEFF'
                            }
                        ]),
                    borderWidth: '1',
                    borderColor: '#00AEFF',
                }
            },
            data: datas.yData1,
            barGap: 0,
            legendHoverLink: false,
        }, 
        {
            // 绿色柱子头部椭圆
            name: datas.legendData[0],
            tooltip: {
                show: false
            },
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: '#5DE6FF',
                    borderWidth: 1,
                    borderColor: '#94EFFF'
                }
            },
            symbolRotate: 0,
            symbolSize: symbolSize,
            symbolOffset: symbolOffsetT,
            symbolPosition: 'end',
            data: datas.yData1,
            z: 3
        },{
                    name:  datas.legendData[1],
                    type: 'line',
                    yAxisIndex:1,
                    z:22,
                    symbol:"roundRect",
                    symbolSize:8,
                    itemStyle:{
                      normal:{
                          color:"#D68627"
                      }  
                    },
                    label: {
                        normal: {
                            show: false,
                            position: 'top',
                            formatter: 'C',
                            textStyle: {
                                color: '#fff',
                                fontSize: 16
                            }
                        }
                    },
                    lineStyle:{
                        width:2,
                        color:"#FFCE59"
                    },
                    data:  datas.yData2,
                } 
    ]
};