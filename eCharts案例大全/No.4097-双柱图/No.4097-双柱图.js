

        var myData = ['党委办公室', '党委办公室1', '党委办公室2', '党委办公室3', '党委办公室4', '党委办公室5', '党委办公室6', '党委办公室7', '党委办公室8']//中间各数据 类似柱图的x轴文字 

        var legendData=['举行活动次数','参与部门', '部门内参与人数']//顶部三个标题

        var leftData = [23, 20, 62, 34, 55, 65, 33,61,50]//举行活动次数 数据
        var rightData =  [121, 138, 123, 139, 166, 166, 179,148,65]//部门内参与人数 数据

        var areaColor='rgba(11,45,134,0.5)'//中间部门文字背景块
        var areaText={//中间部门文字颜色字体大小
            color:'#fff',
            fontSize:16
        }
        var leftColors=['#fba61b',"#eebb45", 'rgba(158,254,26,0)']//左边柱状图渐变颜色
        var rightColors=['rgba(12,221,211,0)',"#3aefd9", '#3aefd9']//右边柱状图渐变颜色
        var lineColor='#2f6392' //中间两轴线颜色

        var barWidth=20//柱状图宽度
        var barText={
            color:'#ffffff',
            fontSize:16
        }

        var background = "#0e2147" //整个页面背景

        var legendText={//顶部三个标题
            color:'#0bbaca',
            fontSize:20
        }

        var option = {
            baseOption: {
                backgroundColor: background,
                timeline: {
                    show: false,
                    top: 0,
                    data: []
                },
                legend: {
                    top: '5%',
                    bottom:'5%',
                    itemWidth: 12,
                    itemHeight: 22,
                    itemGap: 90,
                    icon: 'none',
                    textStyle: {
                        color:legendText.color,//'#0bbaca',
                        fontSize:legendText.fontSize// 20,
                    },
                    data: legendData,
                    selectedMode:false
                },
                grid: [{
                    show: false,
                    left: '5%',
                    top: '10%',
                    bottom: '8%',
                    containLabel: true,
                    width: '37%',
                }, {
                    show: false,
                    left: '50%',
                    top: '10%',
                    bottom: '8%',
                    width: '20%',
                }, {
                    show: false,
                    right: '5%',
                    top: '10%',
                    bottom: '8%',
                    containLabel: true,
                    width: '37%'
                }],
                xAxis: [{
                    type: 'value',
                    inverse: true,
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    position: 'bottom',
                    axisLabel: {
                        show: false,
                        textStyle: {
                            color: 'white'
                        }
                    },
                    splitLine: {
                        show: false
                    }
                }, {
                    gridIndex: 1,
                    show: false,
                }, {
                    gridIndex: 2,
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    position: 'bottom',
                    axisLabel: {
                        show: false,
                    },
                    splitLine: {
                        show: false
                    }
                }],
                yAxis: [{
                    type: 'category',
                    inverse: true,
                    position: 'right',
                    axisLine: {
                        show: true,
                        lineStyle:{
                            width:2,
                            color:lineColor
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    data: myData
                },
                 {
                    gridIndex: 1,
                    type: 'category',
                    inverse: true,
                    inside:true,
                    position: 'left',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        margin:0,
                        textStyle: {
                            color: areaText.color,
                            fontSize:areaText.fontSize,
                            align:'center'
                        },
                        align:'right',
                        lineHeight:50,
                        width:window.innerWidth*0.16,
                        height:(window.innerHeight*0.8)/(myData.length),
                    },
                    data: myData.map(function (value,index) {
                        return {
                            value: value,
                            textStyle: {
                                align: 'center',
                                backgroundColor:index%2==0?areaColor:''
                            }
                        }
                    })
                }, 
                {   gridIndex:2,
                    type: 'category',
                    inverse: true,
                    position: 'left',
                    axisLine: {
                        show: true,
                        lineStyle:{
                            width:2,
                            color:lineColor//'#2f6392'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    data: myData
                },
            ],
                series: []

            },
            options: []
        }
        option.options.push({
            series: [
                {
                    name:legendData[1],
                    type: 'pictorialBar',
                    data:[],
                    xAxisIndex:1,
                    yAxisIndex:1,
                },
                {
                    name: legendData[0],
                    type: 'bar',
                    xAxisIndex: 0,
                    yAxisIndex: 0,
                    //  symbol: 'rect',
                    barWidth: barWidth,
                    itemStyle: {
                        normal: {
                            color:new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                        offset: 0,
                                        // color: "#f7cd6f" // 0% 处的颜色
                                        color:leftColors[0]
                                    }, {
                                        offset: 0.4,
                                        color: leftColors[1] // 60% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: leftColors[2],// 100% 处的颜色
                                    }
                                    ])
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'left',
                            textStyle: {
                                color: barText.color,
                                fontSize: barText.fontSize
                            }
                        }
                    },
                    data: leftData,
                }, {
                    name:legendData[2],
                    type: 'bar',
                    xAxisIndex: 2,
                    yAxisIndex: 2,
                    //   symbol: 'rect',
                    barWidth:barWidth,
                    itemStyle: {
                        normal: {
                            // barBorderRadius: 5,
                            color:new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                        offset: 0,
                                        // color: "#f7cd6f" // 0% 处的颜色
                                        color:rightColors[0]
                                    }, {
                                        offset: 0.6,
                                        color:rightColors[1]// 60% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: rightColors[2] ,// 100% 处的颜色
                                    }
                                    ])
                            }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            textStyle: {
                                color:barText.color,
                                fontSize:barText.fontSize
                            }
                        }
                    },
                    data: rightData,
                }
            ]
        });
        