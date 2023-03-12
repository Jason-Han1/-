option = {
            backgroundColor: '#333',
            tooltip: {
                trigger: 'axis',
                formatter: '{b}<br/>{a}: {c}人',
                textStyle: {
                    fontSize: 16
                },
                backgroundColor: 'rgba(9,35,56,.9)',
                axisPointer: {
                    animation: false,
                    type: 'shadow'
                }
            },
            legend: {
                data: ['男（万人）', '女（万人）'],
                top: 11,
                left: 'center',
                itemGap: 80,
                itemHeight: 13,
                itemWidth: 13,
                icon: 'rect',
                textStyle: {
                    fontSize: 16,
                    color: '#fff',
                },
            },
            grid: [{
                show: false,
                left: 50,
                top: 46,
                bottom: 50,
                containLabel: true,
                width: 142,
            }, {
                show: false,
                left: '52%',
                top: 46,
                bottom: '14%',
                width: '0%',
            }, {
                show: false,
                right: 50,
                top: 46,
                bottom: 50,
                containLabel: true,
                width: 142,
            }],
            xAxis: [{
                type: 'value',
                inverse: true,
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                axisTick: {
                    show: false,
                    inside: true
                }
            }, {
                gridIndex: 1
            }, {
                gridIndex: 2,
                type: 'value',
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                axisTick: {
                    show: false
                }
            }],
            yAxis: [{
                type: 'category',
                inverse: true,
                position: 'right',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            }, {
                gridIndex: 1,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: 16
                    },

                },
                data: ['15周岁以下', '15-24周岁', '25-34周岁', '35-44周岁', '45-54周岁', '55-64周岁', '64周岁以上']
            }, {
                gridIndex: 2,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            }],
            series: [{
                name: '男（万人）',
                type: 'bar',
                barWidth: 14,
                label: {
                    show: true,
                    position: 'left',
                    textStyle: {
                        color: '#fff',
                        fontSize: 16,
                        fontFamily: 'Microsoft YaHei'
                    }
                },
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            1, 0, 0, 0, [{
                                offset: 1,
                                color: '#419fd5'
                            }, {
                                offset: 0,
                                color: 'rgba(0,255,210,.01)'
                            }]
                        )
                    }
                },
                data: [69.75, 21.71, 50.11, 46.94, 50.31, 32.85, 38.91]
            }, {
                name: '女（万人）',
                type: 'bar',
                barWidth: 14,
                xAxisIndex: 2,
                yAxisIndex: 2,
                label: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: '#fff',
                        fontSize: 16,
                        fontFamily: 'Microsoft YaHei'
                    }
                },
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            1, 0, 0, 0, [{
                                offset: 1,
                                color: 'rgba(158,82,172,0)'
                            }, {
                                offset: 0,
                                color: '#419fd5'
                            }]
                        )
                    }
                },
                data: [56.43, 16.84, 49.27, 48.49, 48.60, 31.71, 37.60]
            }]
        };
