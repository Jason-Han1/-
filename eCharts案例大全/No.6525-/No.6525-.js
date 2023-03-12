option = {
            backgroundColor: '#010f1c',
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    },
                }
            },

            grid: {
                left: '0px',
                top: '30px',
                right: '15px',
                bottom: '10px',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#273f55'
                    }
                },
                axisLabel: {
                    // interval: 0, //设置x轴的标签显示可自适应
                    show: true,
                    textStyle: {
                        color: '#c1c3c6'
                    }
                },
                data: ['4H', '8H', '12H', '16H', '20H', '24H']

            }],
            yAxis: [{
                type: 'value',
                name: "",
                nameTextStyle: {
                    color: "#23b6f0",
                },
                minInterval: 1,
                interval: 1,
                axisLine: {
                    lineStyle: { //y轴网格线设置
                        color: '#032e42',
                        width: 1,

                    }
                },
                splitLine: { //保留网格线
                    show: true,
                    lineStyle: { //y轴网格线设置
                        color: '#032e42',
                        width: 1,

                    }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#c1c3c6' //字体颜色
                    },
                    formatter: function(value) {
                        return value + 'XA'
                    },
                },

            }],
            series: [{
                name: '氧气',
                type: 'line',

                smooth: false,
                symbol: 'circle',
                symbolSize: 2,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2,
                        color: '#cc1427',
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(145,21,37,0.5)'
                        },
                            {
                                offset: 0.5,
                                color: 'rgba(145,21,37,0.3)'
                            },
                            {
                                offset: 0.8,
                                color: 'rgba(145,21,37,0.1)'
                            },
                            {
                                offset: 1,
                                color: 'transparent'
                            }
                        ], false),
                        // shadowColor: 'rgba(232,246,254,0.2)',
                        shadowBlur: 30
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#cc1427',
                        borderColor: '#cc1427',
                        borderWidth: 0

                    }
                },

                data: [1.5, 2.1, 1.2, 1.6, 1.3, 2],
            },


            ]
        }