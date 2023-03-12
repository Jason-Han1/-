option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                legend: {
                    itemGap: 8,
                    itemWidth: 8,
                    data: [
                        {name: '邮件营销', lineStyle: {width: 8}},
                        {name: '联盟广告'}
                    ]
                },
                grid: {
                    left: '5%',
                    right: '8%',
                    bottom: '3%',
                    top: '10%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: ['04-27', '04-28', '04-29', '04-30', '05-01', '05-02', '05-03'],
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: 'rgba(187, 209, 238, 1)'
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(35, 72, 124, 1.00)',
                                width: 1,//这里是为了突出显示加上的
                            }
                        },
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        splitLine: {
                            show: false,
                            lineStyle: {
                                type: 'dashed',
                                color: '#315070',
                            }
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: 'rgba(187, 209, 238, 1)'
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(35, 72, 124, 1.00)',
                                width: 1,//这里是为了突出显示加上的
                            }
                        },
                    },

                ],
                series: [
                    {
                        type: 'line',
                        stack: '总量',
                        symbol: 'circle',
                        symbolSize: 12,
                        areaStyle: {
                            color: 'rgba(9, 173, 245, 1.00)',
                            opacity: 0.2
                        },
                        lineStyle: {
                            color: 'rgba(9, 173, 245, 1.00)',
                        },
                        itemStyle: {
                            color: 'rgba(9, 173, 245, 1.00)',
                            opacity: 0
                        },
                        emphasis: {
                            focus: 'series',
                            itemStyle: {
                                opacity: 1,
                                borderWidth: 3,
                                borderColor: '#fff',
                                shadowColor: 'rgba(0, 0, 0, 0.5)',
                                shadowBlur: 10
                            }
                        },
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                ]
            };