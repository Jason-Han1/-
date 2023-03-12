        const value = [50, 60, 70, 80, 90]
        const max = [100, 100, 100, 100, 100]
        option = {
            backgroundColor:"#07061c",
            tooltip: {
                show: false
            },
            grid: {
                top: 0,
                left: '45%',
                right: '4%',
                bottom: 0,
                // borderColor: '#000',
                // borderWidth: 1,
            },
            xAxis: {
                type: 'value',
                axisLabel: {
                    show: false,
                },
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitArea: {
                    show: false
                }
            },
            yAxis: {
                type: 'category',
                offset: '100',
                axisLabel: {
                    textStyle: {
                        color: '#b7c1d7',
                        fontSize: '14',
                    }
                },
                data: ['共享交换ESB 节点1', '共享交换ESB 节点2', '住保局', '文旅广电局前置机', '工作流引擎'],
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                }
            },
            series: [{
                    //For shadow, 解决最大值接近整数时label被截断的问题
                    type: 'pictorialBar',
                    symbol: 'roundRect',
                    symbolRepeat: 'fixed',
                    // symbolClip: true,
                    symbolSize: [6, 12],
                    symbolMargin: 3,
                    symbolBoundingData: max,
                    barWidth: '50%',
                    itemStyle: {
                        normal: {
                            color: '#262642'
                        }
                    },
                    label: {
                        show: false,
                    },
                    data: max,
                    animation: false,
                    z: 1
                },
                {
                    name: "lalal",
                    type: 'pictorialBar',
                    symbol: 'roundRect',
                    symbolRepeat: true,
                    symbolSize: [6, 12],
                    symbolMargin: 3,
                    symbolBoundingData: max,
                    barWidth: '50%',
                    label: {
                        show: false,
                    },
                    data: value,
                    "itemStyle": {

                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: '#D9B9BC'
                            },
                            {
                                offset: 1,
                                color: '#EB3B48'
                            }
                        ])

                    },
                    z: 2
                }
            ]
        }