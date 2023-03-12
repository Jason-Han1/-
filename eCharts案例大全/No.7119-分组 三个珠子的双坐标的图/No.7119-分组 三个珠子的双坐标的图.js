   var data1 =  [60, 60, 60, 60, 60, 60, 60]
                  var data2 = [20, 20, 20, 20, 20, 20, 20 ]
                  var data3 = [10, 10, 10, 10, 10, 10, 10  ]
                  
                  var data4 = [20, 30, 40, 20, 30, 56, 60,  ]
                   var data5 = [40, 50, 60, 70, 80, 85, 90,  100]
                var Xdata =  ['1月', '2月', '3月', '4月', '5月', '6月', '7月']
                 option = {
                    color: ['#2546C1', '#0098FB','#1DCACF', '#6E7FDD','#6E7FDD'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: { // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                        },
                    },
                    legend: {
                        show:false
                    },
                    grid: { //图表的位置
                        left: '3%',
                        right: '10%',
                        top:'10%',
                        bottom: '5%',
                        containLabel: true
                    },
                    yAxis: [{
                        name: '单位：万元',
                        nameTextStyle:{//y轴上方单位的颜色
                            color:'red'
                        },
                        type: 'value',
                        axisLabel: { //坐标轴刻度标签的相关设置。
                            interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
                            margin: 15,
                            textStyle: {
                                color: '#6B9DD7',
                                fontStyle: 'normal',
                                fontFamily: '微软雅黑',
                                fontSize: 16,
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(27,63,129,.4)'
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: 'rgba(27,63,129,.4)'
                            },
                        },
                        show: true

                    }
                        ,
                        {
                            name: '比率(%)',
                            // 单位 显示位置
                            // nameLocation: 'start',

                            type: 'value',
                            axisLabel: { //坐标轴刻度标签的相关设置。
                                interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
                                margin:15,
                                formatter: '{value}%',
                                textStyle: {
                                    color: '#6B9DD7',
                                    fontStyle: 'normal',
                                    fontFamily: '微软雅黑',
                                    fontSize: 14,
                                }
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#1B3F81'
                                }
                            },
                            splitLine: {
                                lineStyle: {
                                    color: "#1B3F81",
                                },
                            },
                        }],
                    xAxis: [{
                        type: 'category',
                        axisLabel: { //坐标轴刻度标签的相关设置。
                            interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
                            margin: 15,
                            textStyle: {
                                color: '#6B9DD7',
                                fontStyle: 'normal',
                                fontFamily: '微软雅黑',
                                fontSize: 16,
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(27,63,129,.4)'
                            }
                        },
                        data: Xdata,
                    }],
                    series: [
                        {
                        name: '年度预算',
                        type: 'bar',
                        barWidth: '18',
                        data: data1

                    },{
                        name: '季度预算',
                        type: 'bar',
                        barWidth: '18',
                        data: data2

                    },
                        {
                            name: '完成量',
                            type: 'bar',
                            barWidth: '18',
                            stack: 'sum1',
                            data: data3,

                        },
                        {
                            name: '年度完成率',
                            type: 'line',
                            data: data4,
                            yAxisIndex: 1,
                            z:99,
                            symbol: 'none',
                            color: '#D13163',
                            lineStyle: {
                                width: 4,
                                shadowColor: 'rgba(65,11,11,.6)', //设置折线阴影
                                shadowBlur: 2,
                                shadowOffsetY: 8,
                            }
                        },
                        {
                            name: '季度完成率',
                            type: 'line',
                            data: data5,
                            yAxisIndex: 1,
                            z:99,
                            symbol: 'none',
                            color: '#ccff33',
                            lineStyle: {
                                width: 4,
                                shadowColor: '#FFFF66', //设置折线阴影
                                shadowBlur: 2,
                                shadowOffsetY: 8,
                            }
                        }
                    ]
                };