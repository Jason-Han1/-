 var charts = { // 按顺序排列从大到小
                cityList: ['60-69岁', '70-79岁', '80-89岁', '90-99岁', '100岁以上'],
                cityData: [680, 328, 165, 33, 6]
            }
            var color = ['rgba(90,185,224', 'rgba(115,97,145', 'rgba(90,185,224', 'rgba(115,97,145', 'rgba(90,185,224', 'rgba(115,97,145',]
            let lineY = []
            for (var i = 0; i < charts.cityList.length; i++) {
                var x = i
                if (x > color.length - 1) {
                    x = color.length - 1
                }
                var data = {
                    name: charts.cityList[i],
                    color: color[x] + ')',
                    value: charts.cityData[i],
                    itemStyle: {
                        normal: {
                            show: true,
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{//渐变
                                offset: 0,
                                color: color[x] + ', 0.1)'
                            }, {
                                offset: 1,
                                color: color[x] + ', 0.8)'
                            }], false),
                            barBorderRadius: 10
                        },
                        emphasis: {
                            shadowBlur: 15,
                            shadowColor: 'rgba(0, 0, 0, 0.1)'//圆角
                        }
                    }
                }
                lineY.push(data)
            }
             option = {
                title: {
                    show: false
                },
                tooltip: {
                    trigger: 'item'
                },
                grid: {
                    borderWidth: 0,
                    top: '10%',
                    left: '15%',
                    right: '10%',
                    bottom: '10%'
                },
                color: color,
                yAxis: [{
                    type: 'category',
                    inverse: true,
                    axisTick: {
                        show: true,
                        inside: true,
                        lineStyle: {
                            color: '#20384a',
                            width: 3,
                        },
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#20384a',
                            width: 2,
                        },
                    },
                    axisLabel: {
                        show: true,
                        inside: false,
                        textStyle: {
                            color: '#39c9ff',
                            fontSize: '16',
                            fontFamily: 'Noto Sans CJK SC'
                        }

                    },
                    data: charts.cityList
                }],
                xAxis: {
                    name: "(人)",
                    type: 'value',
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: true, lineStyle: {
                            color: '#20384a',
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
                    nameTextStyle: {//调整name所在位置
                        show: true,
                        color: '#49c3f6',
                        fontSize: '16',
                        fontFamily: 'Noto Sans CJK SC',
                        padding: [30, 0, 0, -490]
                    },
                },
                series: [{
                    name: '',
                    type: 'bar',
                    zlevel: 2,
                    barWidth: '15px',
                    data: lineY,
                    animationDuration: 1500,
                    label: {
                        normal: {
                            color: '#b3ccf8',
                            show: true,
                            position: 'right',
                            textStyle: {
                                fontSize: 16,
                                fontFamily: 'ZHSCNMT-GBK'
                            },
                            formatter: function (a, b) {
                                return a.value
                            }
                        }
                    }
                }],
                animationEasing: 'cubicOut'
            }