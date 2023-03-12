option = {
    grid: {
        left: '5%',
        top: 30,
        bottom: 30,
    },
    dataZoom: [
        {
            type: 'inside',
            start: 0,
            end: 80,
            xAxisIndex: [0, 1]
        },
        {
            show: false,
            type: 'slider',
            bottom: '0',
            start: 0,
            end: 50,
        },
    ],
    tooltip: {
        show: false,
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
        },
    },
    legend: {
        data: ['漏电峰值', '漏电平均值'],
        show: false,
        textStyle: {
            color: 'white',
        },
    },
    xAxis: [
        {
            data: [1, 2, 3, 4, 5],
            axisLine: {
                show: false,
            },
           
            axisTick: {
                show: false,
            },
            boundaryGap: false,
        },
        {
            data: [1, 2, 3, 4, 5],
            axisLine: {
                show: false,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: 'rgba(112, 112, 112, 0.21)',
                },
            },
            boundaryGap: false,
            axisTick: {
                show: false,
            },
            axisLabel: {
                // color: 'white'
            },
        },
    ],
    yAxis: {
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
            formatter: '{value} mA',
            show: false,
            // color: 'white'
        },
    },
    series: [
        {
            name: '漏电峰值',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 10,
            data: [10, 20, 30, 40, 20],
            itemStyle: {
                color: 'rgba(217, 31, 44, 1)',
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: '#D91F2C',
                    },
                    {
                        offset: 1,
                        color: '#FFFFFF',
                    },
                ]),
            },
        },
    ],
};
