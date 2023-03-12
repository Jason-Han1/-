 var barWidth = 3;
option3_xdata = ['1号教学楼教学楼', '2号教学楼', '餐厅', '报告厅', '锅炉房', '1号宿舍楼', '2号宿舍楼', '行政楼', '1号教学楼教学楼', '2号教学楼', '餐厅', '报告厅', '锅炉房', '1号宿舍楼', '2号宿舍楼', '行政楼']
                option3_Ydata = [75, 62, 57, 42, 35, 32, 29, 27, 75, 62, 57, 42, 35, 32, 29, 27]

                option3_Ydatamax = []
                var yMax2 = Math.max.apply(null, option3_Ydata);
                for (var i = 0; i < option3_Ydata.length; i++) {
                    option3_Ydatamax.push(yMax2);
                }

                option = {
                    backgroundColor:"#222",
                    title: {
                        show: false
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    grid: {
                        borderWidth: 0,
                        top: '5',
                        left: '30',
                        right: '80',
                        bottom: '3%'
                    },
                    // color: color,
                    yAxis: [
                        {
                            inverse: true,
                            type: 'category',
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            },
                            axisLabel: {
                                show: false,
                                inside: false
                            },
                            data: option3_xdata
                        },

                    ],
                    xAxis: {
                        type: 'value',

                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        splitLine: {
                            show: false
                        },
                        axisLabel: {
                            show: false
                        }
                    },
                    dataZoom: [
                        {
                            type: 'slider',
                            show: true,
                            yAxisIndex: [0],
                            right: 0,
                            width: 8,
                            height: '84%',
                            top: '7%',
                            start: 0,
                            end: 50,
                            zoomLock: true,
                            // show: false,
                            showDetail: false,
                            showDataShadow: false,
                            brushSelect: false,
                            fillerColor: "rgba(200,200,200,.3)",
                            backgroundColor: "rgba(200,200,200,.05)",
                            borderColor: "transparent",
                            handleSize: '0%',
                        },

                    ],

                    series: [
                        {
                            name: '',
                            type: 'bar',
                            zlevel: 2,
                            barWidth: barWidth,
                            itemStyle: {
                                normal: {
                                    barBorderRadius: 2,
                                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                        offset: 0, color: '#248ff7'
                                    }, {
                                        offset: 1, color: '#6851f1'
                                    }]),
                                },
                                emphasis: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            { offset: 0, color: '#2378f7' },
                                            { offset: 1, color: '#83bff6' }
                                        ]
                                    )
                                }
                            },
                            data: option3_Ydata,
                            animationDuration: 1500,
                            label: {
                                normal: {
                                    color: '#555',
                                    show: true,
                                    position: [0, '-16px'],
                                    textStyle: {
                                        fontSize: 12,
                                        color: '#888',
                                    },
                                    formatter: function (a, b) {
                                        return a.name
                                    }
                                }
                            }
                        },
                        { // 背景
                            type: 'pictorialBar',
                            animationDuration: 0,
                            symbolRepeat: 'fixed',
                            symbolMargin: '20%',
                            symbol: 'roundRect',
                            symbolSize: [barWidth * 1.2, barWidth],
                            itemStyle: {
                                normal: {
                                    color: 'rgba(200,200,200,.06)',
                                }
                            },
                            label: {
                                normal: {
                                    color: '#555',
                                    show: true,
                                    position: 'right',
                                    textStyle: {
                                        fontSize: 12,
                                        color: '#888',
                                    },
                                    formatter: function (a) {
                                        console.log(a)
                                        return option3_Ydata[a.dataIndex] + "分"
                                    }
                                }
                            },
                            data: option3_Ydatamax,
                            z: 0,
                            animationEasing: 'elasticOut'
                        },
                    ],
                    animationEasing: 'cubicOut'
                }
                