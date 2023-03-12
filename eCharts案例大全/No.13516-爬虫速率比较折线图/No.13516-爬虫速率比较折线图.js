option = {
     // 给echarts图设置背景色
        backgroundColor: '#FBFBFB',
                    title: {
                        text: ''
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        textStyle: {
                                fontSize: 22 // 让字体变大
                        },
                        data: ['一般爬虫', '多线程爬虫']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        name: '数量规模/条',
                        boundaryGap: false,
                        axisLabel: {
                            textStyle: {
                                fontSize: 20 // 让字体变大
                            }
                        },
                        data: ['100', '200', '400', '800', '1600', '3000'],
                    },
                    yAxis: {
                        type: 'value',
                        name: '时间/秒',
                        axisLabel: {
                            textStyle: {
                                fontSize: 25 // 让字体变大
                            }
                        }
                    },
                    series: [
                        {
                            name: '一般爬虫',
                            type: 'line',
                            color: ['blue'],
                            label: {
                                normal: {
                                    show: true,
                                    fontSize: 26,
                                    position: 'top'
                                }
                            },
                            symbol:'',
                            data: [2.53, 5.40, 11.18, 22.59, 46.08, 89.24]

                        },
                        {
                            name: '多线程爬虫',
                            type: 'line',
                            color: ['green'],
                            label: {
                                normal: {
                                    show: true,
                                    fontSize: 26,
                                    position: 'top'
                                }
                            },
                            data: [0.57, 1.57, 3.50, 7.39, 15.33, 29.32]
                        }
                    ]
                };