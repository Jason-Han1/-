option = {
            grid: {
                top: "25%",
                bottom: "10%"//也可设置left和right设置距离来控制图表的大小
            },
            tooltip: {
                trigger: "axis",
            },
            xAxis: {
                data: ["教育", "医疗健康", "主题公园", "酒店住宿"],
                axisLine: {
                    show: true, //隐藏X轴轴线
                    lineStyle: {
                        color: '#D7E1EA'
                    }
                },
                axisTick: {
                    show: false //隐藏X轴刻度,
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#8998AC" //X轴文字颜色
                    },
                    lineHeight:16,
                    formatter : function(params){//文字换行
                        var newParamsName = ''
                        var paramsNameNumber = params.length
                        var provideNumber = 2
                        var rowNumber = Math.ceil(paramsNameNumber / provideNumber)
                        for (let row = 0; row < rowNumber; row++) {
                            newParamsName += params.substring( row * provideNumber,(row + 1) * provideNumber) + '\n'
                        }
                        return newParamsName
                    }
                },
                
            },
            yAxis: [{
                    type: "value",
                    name: "%",
                    nameTextStyle: {
                        color: "#2C3F58",
                        padding:[0,20,0,0]
                    },
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                                    color: '#FFFFFF'
                                    }
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: "#2C3F58"
                        }
                    },
                    
                },
                {
                    type: "value",
                    name: "万元",
                    nameTextStyle: {
                        color: "#2C3F58",
                        padding:[0,0,0,20]
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
                        textStyle: {
                            color: "#2C3F58"
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
                        show: true
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
                }
            ],
            series: [
                {
                    name: "主营业务",
                    type: "bar",
                    barWidth: 15,
                    itemStyle: {
                        normal: {
                            barBorderRadius: [7,7,0,0],
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: "#1CC4E7"
                                },
                                {
                                    offset: 1,
                                    color: "#0EBBD7"
                                }
                            ])
                        }
                    },
                    data:  [ 263, 231, 311, 212]
                },
                {
                    name: "销售水量",
                    type: "line",
                    yAxisIndex: 1, //根据右侧的y轴
                    smooth: true, //平滑曲线
                    showAllSymbol: true, //显示所有图形。
                    symbol: "circle", //实心圆
                    symbolSize: 10, //标记的大小
                    itemStyle: {
                        //折线拐点标志的样式
                        color: "#FF3E1D",
                        borderColor:'#fff'
                    },
                    lineStyle: {
                        color: "#FF3E1D"
                    },
                    data: [ 163,432, 231, 211]
                }
            ]
        };