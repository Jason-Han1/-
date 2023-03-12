option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    top: '15%',
                    right: '3%',
                    left: '12%',
                    bottom: '12%'
                },
                xAxis: [{
                    type: 'category',
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,0.12)'
                        }
                    },
                    axisTick: { //y轴刻度线
                        show: false
                    },
                    axisLabel: {
                        margin: 0,
                        color: 'rgba(80, 176, 223, 1)',
                        textStyle: {
                            fontSize: 11
                        },
                    },
                }],
                yAxis: [{
                    name: '(人)',
                    nameTextStyle: {
                        color: "rgba(80, 176, 223, 1)",
                        fontSize: 11,
                        padding: [-10, 0, -10, -30]
                    },
                    axisLabel: {
                        formatter: '{value}',
                        color: 'rgba(80, 176, 223, 1)',
                        fontSize: 11
                    },
                    axisTick: { //y轴刻度线
                        show: false
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: 'rgba(255,255,255,1)'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#06263b'
                        }
                    }
                }],
                series: [{
                    type: 'bar',
                    data: [5000, 2600, 1300, 1300, 1250, 1500, 5000, 2600, 1300, 1300, 1250, 1500, 1250, 1500],
                    barWidth: '11px',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#54caf0' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#2e43ec' // 100% 处的颜色
                            }], false),
                            barBorderRadius: [30, 30, 30, 30],
                            shadowColor: 'rgba(0,160,221,1)',
                            shadowBlur: 4,
                        }
                    },
                }]
            };