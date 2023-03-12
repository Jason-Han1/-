option = {
    backgroundColor: '#fff',
    title: [
        {
            left: 'center',
            text: 'y轴渐变',
        },
    ],
    tooltip: {
        trigger: 'axis',
    },
    xAxis: [
        {
            type: 'value',
            position: 'top',
            name: '时',
            nameTextStyle: {
                color: '#000',
            },
            min: 0,
            max: 100,
            axisLabel: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            gridIndex: 0,
        },
        {
            // 底部x轴
            position: 'bottom',
            axisLine: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisTick: { 
                show: false,
            },
            axisLabel: {
                //刻度
                show: true,
                color: '#000',
            },
            data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
            gridIndex: 1,
        },
        {
            // 顶部x轴
            position: 'top',
            axisLine: {
                show: false,
            },
            splitLine: {
                //分割线
                show: true,
                lineStyle: {
                    color: '#535766',
                    type: 'dashed',
                },
            },
            axisLabel: {
                show: true,
                color: '#000',
            },
            axisTick: {
                show: false,
            },
            data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
            gridIndex: 2,
        },
    ],
    yAxis: [
        {
            type: 'category',
            show: true,
            data: ['目一', '目二', '目三', '目四'],
        },
        {
            min: 0,
            max: 100,
            axisLabel: {
                show: true,
                color: '#000',
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#91939d',
                    type: 'dashed',
                },
            },
            gridIndex: 1,
        },
        {
            gridIndex: 2,
        },
    ],
    grid: [
        {
            top: '10%',
            bottom: '60%',
        },
        {
            top: '50%',
        },
        {
            // show:true,
            top: '10%',
        },
    ],
    series: [
        {
            name: 'leftbar',
            type: 'bar',
            silent: true,
            stack: 'true',
            selectedMode: false,
            data: [0, 20, 50, 100],
            legendHoverLink: false,
            barWidth: '12',
            z: 1,
            itemStyle: {
                barBorderRadius: [0],
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                        {
                            offset: 0,
                            color: 'red', // 0% 处的颜色
                        },
                        {
                            offset: 0.5,
                            color: '#f9e903', // 50% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#00ff1d', // 100% 处的颜色
                        },
                    ],
                },
            },
        },
        {
            name: 'rightbar',
            type: 'bar',
            silent: true,
            stack: 'true',
            selectedMode: false,
            data: [100, 100, 100, 100],
            legendHoverLink: false,
            barWidth: 12,
            itemStyle: {
                barBorderRadius: [0],
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#00ff1d', // 0% 处的颜色
                        },
                        {
                            offset: 0.5,
                            color: '#f9e903', // 50% 处的颜色
                        },
                        {
                            offset: 1,
                            color: 'red', // 100% 处的颜色
                        },
                    ],
                },
            },
            z: 1,
        },
        {
            //分隔块
            name: 'pictorialBar',
            xAxisIndex: 0,
            type: 'pictorialBar',
            itemStyle: {
                color: '#fff',
            },
            silent: true,
            legendHoverLink: false,
            selectedMode: false,
            symbolRepeat: 'fixed',
            symbolMargin: 4,
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [3, 12],
            symbolPosition: 'start',
            symbolOffset: [0, 0],
            symbolBoundingData: 2000,
            data: [100, 100, 100, 100],
            z: 2,
            animationEasing: 'elasticOut',
        },
        {
            type: 'line',
            showSymbol: false,
            smooth: true,
            lineStyle: {
                color: '#42fffd',
            },
            areaStyle: {
                color: '#42fffd30',
            },
            data: [0, 2, 2, 3, 14, 5, 16, 7, 11, 9, 10, 13, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
            xAxisIndex: 1,
            yAxisIndex: 1,
        },
        {
            type: 'line',
            showSymbol: false,
            xAxisIndex: 2,
            yAxisIndex: 2,
            z: 9,
        },
    ],
};
