var fontColor = '#30eee9';
option = {
     backgroundColor: 'rgba(0,0,0,0)',
    
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
        x: 'right',
        y: '80',
        icon: 'stack',
        itemWidth: 50,
        itemHeight: 20,
        textStyle: {
            color: '#1bb4f6',
            fontSize:30
        },
        data: ['列车管', '总风管']
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            color: "#fff",
            fontSize:16
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
                color: '#1B32CA'
            }
        },
        data: ['17:18:22', '17:18:28', '17:18:29', '17:18:32', '17:18:33', '17:18:35', '17:18:37', '17:18:40', '17:18:41', '17:18:42', '17:18:43', '17:18:46']
    }],
    yAxis: [{
            type: 'value',
            name: '',
            min: 0,
            max: 1000,
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: '#fff',
                    fontSize:16
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#1B32CA'
                }
            }
        },

    ],
    series: [{
            name: '列车管',
            type: 'line',
            symbol: 'none',
            symbolSize: 8,
             smooth: 0.6,
            itemStyle: {
                normal: {
                    color: '#0092f6',
                    lineStyle: {
                        color: "#",
                        width: 4
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
            data: [0, 132,  200, 210, 280, 291, 334, 390, 430,650,650,650]
        },
        {
            name: '总风管',
            type: 'line',
           
              symbol: 'none',
            symbolSize: 8,
            smooth: 0.6,
            itemStyle: {
                normal: {
                    color: '#00d4c7',
                    lineStyle: {
                        color: "#00d4c7",
                        width: 4
                    },
                }
            },
            data: [0, 132, 191, 234, 290, 330, 370, 401, 454, 580, 650, 650]
        },

    ]
};