option = {
    backgroundColor: '#000',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            textStyle: {
                color: '#fff',
            },
        },
    },
    grid: {
        left: '2%',
        right: '2%',
        bottom: '4%',
        top: '5%',
        containLabel: true,
    },
    xAxis: {
        data: [
            '00:00',
            '00:15',
            '00:30',
            '00:45',
            '01:00',
            '01:15',
            '01:30',
            '01:45',
            '02:00',
            '02:15',
            '02:30',
            '02:45',
            '03:00',
        ],
        axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
                color: '#11417a',
            },
        },
        axisTick: {
            show: false, //隐藏X轴刻度
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#89C3DD', //X轴文字颜色
            },
        },
    },
    yAxis: [
        {
            type: 'value',
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#11417a',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: [5, 10],
                    dashOffset: 10,
                    color: '#0f68a0',
                },
            },
            axisLabel: {
                color: '#89C3DD',
            },

            axisTick: {
                show: false,
            },
        },
    ],
    series: [
        {
            type: 'bar',
            barMaxWidth: 20,
            itemStyle: {
                color: '#86dfbb',
            },
            data: [120, 200, 150, 80, 70, 110, 130, 240, 80, 100, 12, 40, 120],
        },
        {
            type: 'line',
            min: 0,
            symbol: 'circle',
            symbolSize: 0,
            lineStyle: {
                normal: {
                    color: '#00D6FA',
                    width: 3,
                    shadowColor: 'rgba(28, 224, 163, 0.35)',
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 10,
                },
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgba(28, 224, 163, 0.9)', // 0% 处的颜色
                        },
                        {
                            offset: 0.5,
                            color: 'rgba(0, 214, 250, 0.3)', // 100% 处的颜色
                        },
                        {
                            offset: 1,
                            color: 'transparent', //0% 处的颜色
                        },
                    ],
                    global: false, // 缺省为 false
                },
            },
            data: [50, 50, 50, 100, 120, 80, 40, 200, 210, 230, 60, 160, 150],
        },
    ],
};
