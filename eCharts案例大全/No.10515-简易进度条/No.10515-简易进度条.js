        const max = 100
        const value = 20;
        const rich = {
            white: {
                color: '#2ad1d2',
                fontSize: 16,
            }
        };
        option = {
            backgroundColor: 'black',
            tooltip: {
                show: false
            },
            grid: {
                top: 0,
                left: '30%',
                right: '40%',
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
                    symbol: 'rect',
                    symbolRepeat: 'fixed',
                    // symbolClip: true,
                    symbolSize: [4, 35],
                    symbolMargin: 1,
                    symbolBoundingData: max,
                    barWidth: '50%',
                    itemStyle: {
                        normal: {
                            color: '#2d3b46'
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                color: '#fff',
                                fontSize: 20
                            },
                            position: 'right',
                            formatter: function(data) {
                                return '{white|' + value + '%' + '}'
                            },
                            rich: rich
                        }
                    },
                    data: [max],
                    animation: false,
                    z: 1
                },
                {
                    name: "lalal",
                    type: 'pictorialBar',
                    symbol: 'rect',
                    symbolRepeat: true,
                    symbolSize: [4, 35],
                    symbolMargin: 1,
                    symbolBoundingData: max,
                    barWidth: '50%',
                    // label: {
                    //     show: false,
                    //     normal:{
                    //          position: 'right',
                    //     }

                    // },

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