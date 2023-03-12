option = {
    backgroundColor: '#fff',
    legend: {
        show: false,
    },

    tooltip: {
        trigger: 'axis',
    },
    xAxis: [
        {
            type: 'category',
            data: ['06:41', '07:12', '08:34', '08:13', '09:25', '10:14', '11:35', '12:01'],
            axisLine: {
                lineStyle: {
                    color: '#999',
                },
            },
            splitLine: {
                show: true,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                interval: 0,
                rotate: 40,
                textStyle: {
                    color: '#000000de',
                },
                margin: 15,
            },
            boundaryGap: false,
        },
    ],
    yAxis: [
        {
            type: 'value',
            name: '电导率us/cm',
            nameLocation: 'center',
            nameGap: 30, //与轴线间距
            axisTick: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: '#999',
                },
            },
            axisLabel: {
                textStyle: {
                    color: '#000000de',
                },
            },
            splitLine: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: 'S',
            type: 'line',
            data: ['15', '16', '13', '15', '13', '14', '12', '14'],
            symbolSize: 0,
            symbol: 'circle',
            smooth: true,
            lineStyle: {
                color: '#36d376',
                width: 0,
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: '#0ece5d',
                    },

                    {
                        offset: 1,
                        color: '#5edc92',
                    },
                ]),
            },
        },
    ],
};
