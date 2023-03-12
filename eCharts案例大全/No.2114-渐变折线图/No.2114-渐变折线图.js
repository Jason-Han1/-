option = {
    backgroundColor: '#222',
    grid: {
        top: 40,
        right: 20,
        left: 0,
        bottom: 0,
        containLabel: true,
    },
    tooltip: {
        axisPointer: {
            crossStyle: {
                color: '#999',
            },
        },
    },
    xAxis: {
        boundaryGap: false,
        type: 'category',
        axisTick: {
            show: false,
        },
        data: ['桥墩', '桥梁', '桥上', '桥下', '桥底', '桥旁边'],
        axisLine: {
            lineStyle: {
                color: '#243E77',
            },
        },
        axisLabel: {
            color: '#fff',
            fontSize: 14,
            margin: 15,
        },
    },
    yAxis: {
        name: '单位（万辆）',
        nameTextStyle: {
            color: '#fff',
            fontSize: 14,
            align: 'left',
        },
        nameGap: 20,
        type: 'value',
        splitLine: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#243E77',
            },
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            color: '#fff',
            fontSize: 14,
            margin: 15,
        },
    },
    series: [
        {
            name: '今日',
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'line',
            lineStyle: {
                color: '#256AC1',
            },
            symbol: 'circle',
            color: '#0566E8',
            symbolSize: 11,
            itemStyle: {
                borderWidth: 6,
                borderColor: 'rgba(5, 102, 232, .2)',
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgba(38, 148, 222, 0.2)',
                    },
                    {
                        offset: 1,
                        color: 'rgba(37, 97, 187, 0.01)',
                    },
                ]),
            },
        },
        {
            name: '昨日',
            data: [135, 186, 140, 90, 88, 125, 130],
            type: 'line',
            lineStyle: {
                color: '#4FCFE3',
            },
            symbol: 'circle',
            color: 'rgba(79, 207, 227, 1)',
            symbolSize: 11,
            itemStyle: {
                borderWidth: 6,
                borderColor: 'rgba(79, 207, 227, .2)',
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgba(83, 211, 228, 0.2)',
                    },
                    {
                        offset: 1,
                        color: 'rgba(47, 188, 210, 0.01)',
                    },
                ]),
            },
        },
    ],
};
