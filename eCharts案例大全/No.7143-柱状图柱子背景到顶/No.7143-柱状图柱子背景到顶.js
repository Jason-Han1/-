  var xAxisData = ['1级', '二级', '三级', '四级', '五级', '六级', '其他'];
            var seriesData = [900, 1100, 500, 800, 700, 800, 500];
             option = {
                tooltip: {
                    trigger: 'item'
                },
                grid: {
                    borderWidth: 0,
                    top: '10%',
                    left: '15%',
                    right: '10%',
                    bottom: '15%'
                },
                xAxis: {
                    type: 'category',
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(6, 40, 53, 1)',
                            width: 2,
                        },
                    },
                    splitLine: { show: false },
                    axisLabel: {
                        show: true,
                        inside: false,
                        textStyle: {
                            color: '#49c3f6',
                            fontSize: '16',
                            fontFamily: 'Noto Sans CJK SC'
                        },
                        formatter: function (val) {
                            return `${val}`
                        }
                    },
                    data: xAxisData
                },
                yAxis: {
                    type: 'value',
                    max: 2000,
                    axisTick: {
                        show: true,
                        lineStyle: {
                            color: '#20384a',
                            width: 2,
                        },
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(6, 40, 53, 1)',
                            width: 2,
                        },
                    },
                    axisLabel: {
                        show: true,
                        inside: false,
                        textStyle: {
                            color: '#49c3f6',
                            fontSize: '16',
                            fontFamily: 'Noto Sans CJK SC'
                        },
                        formatter: function (val) {
                            return `${val}`
                        }
                    },
                    splitLine: {
                        show: false
                    },
                },
                series: [{
                    data: seriesData,
                    type: 'bar',
                    barWidth: '10px',
                    showBackground: true,//设置柱子默认背景到顶
                    backgroundStyle: {
                        color: 'rgba(6, 40, 53, 1)'
                    },
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#0285ba' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#053541' // 100% 处的颜色
                            }], false)
                        }
                    }
                }]
            };