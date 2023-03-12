  let XData = ['张浦','锦溪','巴城','陆家','千灯','淀山湖','花桥','曹安','石浦','中华园']
   let valueData = {
       jfsbs: [805,860,400,400,400,400,990,985,990,850],
       md: [300,390,290,285,290,288,790,795,795,760],
       znhbl: [95,78,50,60,85,78,76,70,65,90],
   }
   var option = {
                // tooltip: {
                //     trigger: 'item',
                //     axisPointer: { // 坐标轴指示器，坐标轴触发有效
                //         type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                //     }
                // },
                tooltip: {
                  trigger: 'axis',
                  axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                    shadowStyle: {
                        shadowColor: 'rgba(60, 161, 246, 0.43)',
                        shadowBlur: 10
                    }
                  },
                  backgroundColor: '#FFFFFF',
                  borderColor: 'rgba(60, 161, 246, 0.43)',
                  borderWidth: 1,
                  shadowColor: ' rgba(111, 193, 253, 0.35)',
                  shadowBlur: 10,
                  formatter: function (params) {
                        // return params.value;
                        let strName1 = params[0].seriesName
                        let value1 = params[0].value
                        let strName2 = params[1].seriesName
                        let value2 = params[1].value
                        let strName3 = params[2].seriesName
                        let value3 = params[2].value
                        return '<div><span style="color:rgba(36, 36, 36, 1);display: inline-block;width: 86px;">密度数</span><span style="color:#5DB6FB">'+value1+'</span></div><div><span style="color:rgba(36, 36, 36, 1);display: inline-block;width: 86px;">设备数</span><span style="color:#5DB6FB">'+value2+'</span></div><div><span style="color:rgba(36, 36, 36, 1);display: inline-block;width: 86px;">智能化比例</span><span style="color:#5DB6FB">'+value3+'%</span></div>'
                  },
                  textStyle: {
                       rich: {
                        name: {
                            color: "rgba(36, 36, 36, 1)",
                            fontSize: 13,
                            align: 'center'
                        },
                        percent: {
                            fontFamily: 'DIN',
                            fontWeight: 500,
                            fontSize: 22,
                            color: '#1D91F5',
                            align: 'center'
                        },
                    }
                  }
                },
                grid: {
                    left: '2%',
                    right: '4%',
                    bottom: '14%',
                    top:'16%',
                    containLabel: true
                },
                legend: {
                    right: '4%',
                    top:'5%',
                    textStyle: {
                        color: "#666666",
                        fontSize: 14
                    },
                    itemWidth: 12,
                    itemHeight: 12,
                    itemGap: 25,
                },
                xAxis: {
                    type: 'category',
                    data: XData,
                   axisLine: {
                        lineStyle: {
                            color: '#cdd5e2'
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: "#666666"
                        }
                    },
                },
                yAxis: [{
                        type: 'value',
                        axisLabel: {                
                            textStyle: {
                                color: "#666666"
                            }}    ,
                        axisLine: {
                            lineStyle: {
                                color: '#cdd5e2'
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: 'rgba(193, 207, 220, 1)'
                            }
                        },
                    },
                    {
                        type: "value",
                        nameTextStyle: {
                            color: "#666666"
                        },
                        position: "right",
                        axisLine: {
                            lineStyle: {
                                color: '#cdd5e2'
                            }
                        },
                        splitLine: {
                            show: false,
                        },
                        axisLabel: {
                            show: true,
                            formatter: "{value} %", //右侧Y轴文字显示
                            textStyle: {
                                color: "#666666"
                            }
                        }
                    }
                ],
                "dataZoom": [{
                    "show": true,
                    "height": 8,
                    "xAxisIndex": [
                        0
                    ],
                    bottom: 30,
                    "start": 10,
                    "end": 90,
                    handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
                    handleSize: '180%',
                    handleStyle:{
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#fff',
                            },
                            {
                                offset: 1,
                                color: '#F0F5FA',
                            },
                        ]),
                        borderColor: '#D1DCED'
                    },
                   textStyle:{
                    color:"#333",
                    fontSize: 14,
                    zlevel: 10
                   },
                   borderColor: 'RGBA(221, 233, 242, 1)',
                   backgroundColor: 'RGBA(221, 233, 242, 1)'
                }, {
                    "type": "inside",
                    "show": true,
                    "height": 5,
                    "start": 1,
                    "end": 35
                }],
                series: [{
                    name: '技防设备数',
                    type: 'bar',
                    barWidth: '12px',
                    itemStyle: {
                        normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(123, 200, 255, 1)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(53, 157, 245, 1)'
                                }]),
                                barBorderRadius: 6,
                            }
                    },
                    data: valueData.jfsbs
                },
                    {
                        name: '密度',
                        type: 'bar',
                        barWidth: '12px',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(171, 218, 83, 1)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(132, 186, 27, 1)'
                                }]),
                                barBorderRadius: 6,
                            }

                        },
                        data: valueData.md
                    },{
                        name: "智能化比例",
                        type: "line",
                        yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
                        smooth: false, //平滑曲线显示
                        symbol: "emptycircle", //标记的图形为实心圆
                        symbolSize: 9, //标记的大小
                        itemStyle: {
                            normal: {
                                color: 'rgba(255, 119, 74, 1)',
                                borderColor: 'rgba(255, 119, 74, 1)',  //圆点透明 边框
                                borderWidth: 2
                            },
                        },
                        lineStyle: {
                            color: "RGBA(255, 131, 90, 0.9)"
                        },
                        data: valueData.znhbl
                    }
                ]
            };