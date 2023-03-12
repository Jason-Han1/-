
option = {
    backgroundColor:'#000',
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#57617B',
                }
            },
        },
        grid: {
            left: '5%',
            right: '5%',
            bottom: '15%',
            top: '18%',
            containLabel: false
        },
        xAxis: [{
            type: 'category',
            data: ['01:00', '04:00', '07:00', '10:00', '13:00', '16:00', '19:00', '22:00'],
            axisLine: {
                lineStyle: {
                    color: '#A5B0B2'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                interval: 0,
                textStyle: {
                    color: '#A5B0B2'
                },
                fontSize: '',
                margin: 20
            },
        }],
        yAxis: [{
            type: 'value',
            // name: '温度',
            nameTextStyle: {
                color: "#fff",
                fontSize: '',
                padding: [0, 55, 0, 0]
            },
            min: 0,
            max: 50,
            nameGap: 25,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff',
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    color: '#A5B0B2',
                    fontSize: '',
                },
                formatter: '{value}'
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: 'rgba(0, 83, 120, 0.5)'
                }
            }
        }],
        series: [{
            name: '进入',
            type: 'line',
            data: [40, 43, 36, 37, 46, 43, 39, 40],
            symbolSize: 5,
            symbol: 'circle',
            smooth: true,
            yAxisIndex: 0,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 3,
                    color: '#0095D8'
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0, 149, 216, 1)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(0, 149, 216, 0)'
                    }], false),

                },
            },

            itemStyle: {
                normal: {
                    color: 'rgba(0, 149, 216, 1)',
                    borderColor: 'rgba(0, 149, 216, 0.27)',
                    borderWidth: 12
                }
            },
        }, {
            name: '离开',
            type: 'line',
            data: [19, 20, 18, 25, 22, 15, 22, 18],
            symbolSize: 5,
            symbol: 'circle',
            smooth: true,
            showSymbol: false,

            lineStyle: {
                normal: {
                    width: 3,
                    color: '#00DCFF'
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0, 220, 255, 1)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(0, 220, 255, 0)'
                    }], false),

                }
            },

            itemStyle: {
                normal: {
                    color: 'rgba(0, 220, 255, 1)',
                    borderColor: 'rgba(0, 220, 255, 0.27)',
                    borderWidth: 20

                }
            }
        },
        ]
    };