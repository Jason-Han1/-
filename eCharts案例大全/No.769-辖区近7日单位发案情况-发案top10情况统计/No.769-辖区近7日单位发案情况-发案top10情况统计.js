  let XData = ['12', '13', '14', '15', '16','17','18日']
   let valueData = {
       data1: [67,87,163,78,88,98,158],
       data2: [87,117,127,87,97,65,134],
       data3: [87,88.5,89.5,78.5,83.5,81.5,94.5],
   }
   var option = {
                tooltip: {
                  trigger: 'axis',
                  axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                    shadowStyle: {
                        shadowColor: 'rgba(124, 217, 154, 0.35)',
                        shadowBlur: 10
                    }
                  },
                  backgroundColor: '#FFFFFF',
                  borderColor: 'rgba(92, 199, 140, 0.43)',
                  borderWidth: 1,
                  shadowColor: ' rgba(92, 199, 140, 0.35)',
                  shadowBlur: 10,
                  formatter: function (params) {
                        let strName1 = params[0].seriesName
                        let value1 = params[0].value
                        let strName2 = params[1].seriesName
                        let value2 = params[1].value
                        let strName3 = params[2].seriesName
                        let value3 = params[2].value
                        return '<div><span style="color:rgba(36, 36, 36, 1);display: inline-block;width: 86px;">前七天数量</span><span style="color:rgba(8, 144, 83, 1)">'+value1+'</span></div><div><span style="color:rgba(36, 36, 36, 1);display: inline-block;width: 86px;">近七天数量</span><span style="color:rgba(224, 98, 66, 1)">'+value2+'</span></div><div><span style="color:rgba(36, 36, 36, 1);display: inline-block;width: 86px;">比例</span><span style="color:rgba(115, 66, 195, 1)">'+value3+'%</span></div>'
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
                    data: ['前七天数量','近七天数量'],
                    itemWidth: 12,
                    itemHeight: 12,
                    itemGap: 25,
                },
                xAxis: {
                    type: 'category',
                    data: XData,
                   axisLine: {
                        lineStyle: {
                            color: 'rgba(193, 207, 220, 1)',
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: "rgba(0, 0, 0, 1)"
                        }
                    },
                },
                yAxis: [{
                        type: 'value',
                        axisLabel: {                
                            textStyle: {
                                color: "rgba(0, 0, 0, 1)"
                            }}    ,
                        axisLine: {
                            lineStyle: {
                                color: '#cdd5e2'
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: 'rgba(193, 207, 220, 1)',
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
                                color: "rgba(0, 0, 0, 1)"
                            }
                        }
                    }
                ],
                series: [{
                        name: '前七天数量',
                        type: 'bar',
                        barWidth: '20',
                        barGap: '50%',
                        itemStyle: {
                            normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: 'rgba(92, 199, 140, 1)'
                                    }, {
                                        offset: 1,
                                        color: 'rgba(33, 166, 115, 1)'
                                    }]),
                                }
                        },
                        label: {
                            "show": true,
                            "textStyle": {
                                fontSize: 18,
                                fontFamily: 'DIN',
                                fontWeight: 'bold',
                                color: 'rgba(8, 144, 83, 1)'
                            },
                            "position": "top",
                        },
                        data: valueData.data1
                    },
                    {
                        name: '近七天数量',
                        type: 'bar',
                        barWidth: '20',
                        barGap: '50%',
                        label: {
                            "show": true,
                            "textStyle": {
                                fontSize: 18,
                                fontFamily: 'DIN',
                                fontWeight: 'bold',
                                color: 'rgba(224, 98, 66, 1)'
                            },
                            "position": "top",
                        },
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(255, 164, 155, 1)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(255, 135, 154, 1)'
                                }]),
                            }

                        },
                        data: valueData.data2
                    },{
                        name: "智能化比例",
                        type: "line",
                        yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
                        smooth: false, //平滑曲线显示
                        symbol: "circle", //标记的图形为实心圆
                        symbolSize: 9, //标记的大小
                        label: {
                            "show": true,
                            "textStyle": {
                                fontSize: 18,
                                fontFamily: 'DIN',
                                fontWeight: 'bold',
                                color: '#7342C3'
                            },
                            "position": "top",
                            formatter: function(p) {
                                return p.value > 0 ? (p.value) + '%' : '0%';
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: 'rgba(126, 45, 255, 1)',
                                // borderColor: 'rgba(255, 119, 74, 1)',  //圆点透明 边框
                                // borderWidth: 2
                            },
                        },
                        lineStyle: {
                            color: "rgba(126, 45, 255, 1)",
                            type: 'dashed'
                        },
                        data: valueData.data3
                    }
                ]
            };