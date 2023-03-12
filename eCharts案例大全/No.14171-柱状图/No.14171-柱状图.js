    option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['追溯码', '采收量', '包装量', '储藏量', '运销量']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['市南区', '市北区', '黄岛区', '崂山区', '李沧区', '城阳区', '胶州市', '即墨市', '平度市', '莱西市'],
                    splitLine: {
                        show: true,
                        lineStyle: {
                            // 使用深浅的间隔色
                            color: ['#aaa', '#ddd']
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#3f7fb2'
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#000'
                        }
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '个',
                    nameTextStyle: {

                        color: '#5db5b7'
                    },
                    max: 4000,
                    min: 0,
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#3f7fb2'
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#000'
                        }
                    }
                },
                {
                    type: 'value',
                    name: 'kg',
                    nameTextStyle: {
                        color: '#5db5b7'
                    },
                    max: 7500,
                    min: 0,
                    splitLine: {
                        show: true,
                        lineStyle: {
                            // 使用深浅的间隔色
                            color: ['#aaa', '#ddd']
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#3f7fb2'
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#000'
                        }
                    }
                }
            ],
            series: [
                {
                    name: '追溯码',
                    type: 'bar',
                    data: [1320, 2332, 1301, 1334, 1390, 2330, 1320, 2390, 1330, 2320],
                    itemStyle: {
                        normal: {
                            color: '#17b8b7',
                        }
                    }
                },
                {
                    name: '采收量',
                    type: 'bar',
                    stack: '数量',
                    data: [213, 456, 456, 45, 455, 312, 211, 456, 645, 787],
                    itemStyle: {
                        normal: {
                            color: '#fd744e',
                        }
                    }
                },
                {
                    name: '包装量',
                    type: 'bar',
                    stack: '数量',
                    data: [741, 978, 456, 456, 456, 456, 456, 978, 786, 654],
                    itemStyle: {
                        normal: {
                            color: '#50a3fc',
                        }
                    }
                },
                {
                    name: '储藏量',
                    type: 'bar',
                    stack: '数量',
                    data: [562, 477, 456, 744, 785, 756, 654, 654, 354, 524],
                    itemStyle: {
                        normal: {
                            color: '#0f7675',
                        }
                    }
                },
                {
                    name: '运销量',
                    type: 'bar',
                    stack: '数量',
                    data: [745, 654, 258, 854, 745, 657, 354, 854, 786, 654],
                    itemStyle: {
                        normal: {
                            color: '#15b85a',
                        }
                    }
                },

            ]
        };