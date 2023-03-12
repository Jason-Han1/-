var fontColor = '#9a9a9a';
option = {
    backgroundColor: '#ffffff',
    grid: {
        left: '5%',
        right: '10%',
        top: '20%',
        bottom: '15%',
        containLabel: true,
    },
    tooltip: {
        show: true,
        trigger: 'item',
    },
    legend: {
        show: true,
        left: 'center',
        bottom: '30',
        // itemWidth: 10,
        itemHeight: 10,
        textStyle: {
            color: '#1bb4f6',
        },
        data: ['已采纳', '已发布'],
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                color: fontColor,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#397cbc',
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#f4f4f4',
                },
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        },
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            max: 1000,
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: '#9a9a9a',
                },
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#dfdfdf',
                },

            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: '#f4f4f4',
                },
            },
        },
    ],
    series: [
        {
            name: '已采纳',
            type: 'line',
            stack: '总量',
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
                normal: {
                    color: '#00a0a6',
                    lineStyle: {
                        color: '#00a0a6',
                        width: 1,
                    },
                              areaStyle: {
                    			color: '#b2e2e4'
                    // 			color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    // 				offset: 0,
                    // 				color: 'rgba(7,44,90,0.3)'
                    // 			}, {
                    // 				offset: 1,
                    // 				color: 'rgba(0,146,246,0.9)'
                    // 			}]),
                              }
                },
            },
            markPoint: {
                itemStyle: {
                    normal: {
                        color: 'red',
                    },
                },
            },
            data: [900, 632, 701, 734, 590, 630, 510, 582, 591, 534, 590, 530],
        }
    ],
};
