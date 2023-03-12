 var option = {
                    backgroundColor: '#f6f6f6',
                    title: {
                        text: '短关键词',
                        subtext: '排名数量'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['百度', '360', '搜狗']
                    },
                    toolbox: {
                        show: true,
                        orient: 'vertical',
                        feature: {
                            mark: {
                                show: true
                            },
                            show: true,
                            magicType: { show: true, type: ['line', 'bar'], title: { line: "折线", bar :"柱形"} },
                            restore: { show: true, title: "还原" },
                            saveAsImage: { show: true, title: "导出" }
                        }
                    },
                    calculable: true,
                    xAxis: [{
                        type: 'category',
                        data: ['首页', '第二页', '第三页']
                    }],
                    yAxis: [{
                        type: 'value'
                    }],
                    series: [{
                        name: '百度',
                        type: 'bar',
                        itemStyle: {

                            normal: {
                                color: '#ff7f50',
                                label: {
                                    show: true,
                                    position: 'top',
                                    textStyle: {
                                        fontSize: 18
                                    }
                                }
                            }
                        },
                        data: [1, 2, 3]
                    }, {
                        name: '360',
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: '#87cefa',
                                label: {
                                    show: true,
                                    position: 'top',
                                    textStyle: {
                                        fontSize: 18
                                    }
                                }
                            }
                        },
                        data: [4, 5, 6]
                    }, {
                        name: '搜狗',
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: '#da70d6',
                                label: {
                                    show: true,
                                    position: 'top',
                                    textStyle: {
                                        fontSize: 18
                                    }
                                }
                            }
                        },
                        data: [7, 8, 9]
                    }]
                }