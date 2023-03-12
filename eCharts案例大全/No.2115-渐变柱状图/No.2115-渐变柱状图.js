option = {
    backgroundColor: '#222',
    grid: {
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        data: ['桥墩', '立交桥', '平面桥', '立体桥', '桥桥', '桥桥桥'],
        axisTick: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: '#243E77',
            },
        },
        axisLabel: {
            color: '#fff',
            fontSize: 14,
            margin: 20,
        },
    },
    yAxis: {
        type: 'value',
        nameTextStyle: {
            color: '#fff',
            fontSize: 14,
        },
        nameGap: 20,
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
            margin: 20,
        },
    },
    series: [
        {
            name: '路费收入（亿元）',
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            barGap: '70%',
            barWidth: 20,
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgba(38, 148, 222, 1)',
                    },
                    {
                        offset: 1,
                        color: 'rgba(37, 97, 187, 0.05)',
                    },
                ]),
            },
        },
        {
            name: '收费车流量（亿辆）',
            data: [135, 186, 140, 90, 88, 125, 130],
            type: 'bar',
            barWidth: 20,
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgba(83, 211, 228, 1)',
                    },
                    {
                        offset: 1,
                        color: 'rgba(47, 188, 210, 0.05)',
                    },
                ]),
            },
        },
    ],
};
