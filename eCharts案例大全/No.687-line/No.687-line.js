var fontColor = '#30eee9';
option = {
    backgroundColor: '#11183c',
    grid: {
        left: '5%',
        right: '10%',
        top: '20%',
        bottom: '15%',
        containLabel: true
    },
    tooltip: {
        show: true,
        trigger: 'item'
    },
    legend: {
        show: true,
        x: 'center',
        y: '35',
        icon: 'stack',
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
            color: '#1bb4f6'
        },
        data: ['已采纳', '已发布']
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            color: fontColor
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#397cbc'
            }
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#195384'
            }
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    }],
    yAxis: [{
            type: 'value',
            name: '',
            min: 0,
            max: 1000,
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: '#2ad1d2'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#27b4c2'
                }
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#11366e'
                }
            }
        },

    ],
    series: [{
            name: '已采纳',
            type: 'line',
            stack: '总量',
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
                normal: {
                    color: '#0092f6',
                    lineStyle: {
                        color: "#0092f6",
                        width: 1
                    },
                    //           areaStyle: { 
                    // 			//color: '#94C9EC'
                    // 			color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    // 				offset: 0,
                    // 				color: 'rgba(7,44,90,0.3)'
                    // 			}, {
                    // 				offset: 1,
                    // 				color: 'rgba(0,146,246,0.9)'
                    // 			}]),
                    //           }
                }
            },
            markPoint: {
                itemStyle: {
                    normal: {
                        color: 'red'
                    }
                }
            },
            data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330]
        },
        {
            name: '已发布',
            type: 'line',
            stack: '总量',
            symbol: 'circle',
            symbolSize: 8,

            itemStyle: {
                normal: {
                    color: '#00d4c7',
                    lineStyle: {
                        color: "#00d4c7",
                        width: 1
                    },
                }
            },
            data: [220, 182, 191, 234, 290, 330, 310, 201, 154, 190, 330, 410]
        },

    ]
};