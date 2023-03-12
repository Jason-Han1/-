option = {
    backgroundColor: '#1a2026',
  legend:{
    data:['制氢厂1','制氢厂2','制氢厂3']  ,
     textStyle:{
        fontSize:20,
         color: '#b8cff0',
    }
  },
    grid: {
        top: '8%',
        left: '5%',
        right: '5%',
        bottom: '15%',
        // containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            axisLine: {
                show: true,
            },
            splitArea: {
                // show: true,
                color: '#f00',
                lineStyle: {
                    color: '#f00',
                },
            },
            axisLabel: {
                color: '#b8cff0',
                textStyle:{
                    fontSize:20
                }
            },
            axisTick:false,
            splitLine: {
                show: false,
            },
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月'],
        },
    ],

    yAxis: [
        {
            type: 'value',
            min: 15,
            // max: 140,
            splitNumber: 4,
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.1)',
                },
            },
            axisLine: {
                show: true,
            },
            axisLabel: {
                show: true,
                textStyle: {
                    fontSize:24,
                    color: '#b8cff0',
                },
            },
            axisTick: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: '制氢厂1',
            type: 'line',
            smooth: true, //是否平滑
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 8,
            lineStyle: {
                normal: {
                    color: '#3A44FB',
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 0,
                    shadowOffsetY: 5,
                    shadowOffsetX: 5,
                },
            },
            itemStyle: {
                color: '#3A44FB',
            },
            tooltip: {
                show: false,
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: 'rgba(7,46,101,0.3)'
							}, {
								offset: 1,
								color: 'rgba(0,166,246,0.9)'
							}]),
                }
            },
            data: [17, 17.2, 17.4, 17.5, 17.8, 18, 18, 19, 20],
        },
        {
            name: '制氢厂2',
            type: 'line',
            smooth: true, //是否平滑
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 8,
            lineStyle: {
                normal: {
                    color: '#aecb56',
                    shadowColor: 'rgba(0, 0, 0, .3)',
                },
            },
            itemStyle: {
                color: '#aecb56',
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                        {
                            offset: 0,
                            color: 'rgba(7,44,90,0.3)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(114,144,89,0.9)',
                        },
                    ]),
                },
            },
            data: [16, 17, 17, 18, 18, 19, 19, 19, 19],
        },
        {
            name: '制氢厂3',
            type: 'line',
            smooth: true, //是否平滑
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 8,
            lineStyle: {
                normal: {
                    color: '#6FE81A',
                },
            },
            itemStyle: {
                color: '#6FE81A',
            },
            tooltip: {
                show: false,
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                        {
                            offset: 0,
                            color: 'rgba(7,44,90,0.3)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(0,212,199,0.9)',
                        },
                    ]),
                },
            },
            data: [16, 16, 17, 17, 18, 18, 18, 19, 20],
        },
    ],
};
