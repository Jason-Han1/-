        const max = 100
        const value = 30
        option = {
            tooltip: {
                show: false
            },
            grid: {
                top: 0,
                left: 0,
                right: 0,
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
                axisLabel: {
                    show: false,
                },
                data: [],
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
                    symbolSize: [4, 16],
                    symbolMargin: 3,
                    symbolBoundingData: max,
                    barWidth: '50%',
                    itemStyle: {
                        normal: {
                            color: '#2d3b46'
                        }
                    },
                    label: {
                        show: false,
                    },
                    data: [max],
                    animation: false,
                    z: 1
                },
                {
                    name: "lalal",
                    type: 'pictorialBar',
                    symbol: 'roundRect',
                    symbolRepeat: true,
                    symbolSize: [4, 16],
                    symbolMargin: 3,
                    symbolBoundingData: max,
                    barWidth: '50%',
                    label: {
                        show: false,
                    },
                    data: [value],
                    itemStyle: {
                        normal: {
                            color: "#42ecb2"
                        }
                    },
                    z: 2
                }
            ]
        }