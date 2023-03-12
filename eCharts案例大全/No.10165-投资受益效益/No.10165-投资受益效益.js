option = {
                    title: {
                        text: "投资受益效益",
                        left: "center",
                        top: "5%",
                        textStyle: {
                            color: "#fff",
                            fontSize: 16
                        }
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: [{
                        type: 'category',
                        data: ['2015','2016','2017','2018','2019'],
                        axisLine: {
                            lineStyle: {
                                color: "#999"
                            }
                        }
                    }],
                    yAxis: [{
                        type: 'value',
                        splitNumber: 4,
                        splitLine: {
                            show: true,
                            lineStyle: {
                                type: 'dashed',
                                // color: 'rgba(33,148,246,0.2)'
                            }
                        },
                        splitArea: {
                            show: true,
                            areaStyle: {
                                // color: 'rgb(245,250,254)'
                            }
                        },
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: "#333"
                            },
                        },
                        nameTextStyle: {
                            color: "#999"
                        }
                    }],
                    series: [{
                        name: '数量',
                        data: [710, 312, 321,754, 500],
                        type: 'line',
                        symbol: 'circle',
                        symbolSize: 7,
                        lineStyle: {
                            color: 'rgb(33,148,246)',
                            shadowBlur: 12,
                            shadowColor: 'rgb(33,148,246,0.9)',
                            shadowOffsetX: 1,
                            shadowOffsetY: 1
                        },
                        itemStyle: {
                            color: 'rgb(33,148,246)',
                            borderWidth: 1,
                            borderColor: '#FFF'
                        },
                        smooth: true
                    }]
                }