// #34a4f2；#c2f234,  #73c45a
option = {
    backgroundColor: '#171f29',
    grid: {
        top: '20%',
        right: '10%',
        left: '10%',
        bottom: '20%',
        containLabel: true,
    },
    yAxis: {
        type: 'category',
        data: ['燃料电池发动机系统', '电堆', '双极板', '膜电极', '空压机', '氢气循环系统','质子交换膜','催化剂','碳纸'],
        axisTick: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: '#363d45',
            },
        },
        axisLabel: {
            color: '#fff',
            fontSize: 14,
            margin: 20,
        },
    },
    xAxis: {
        type: 'value',
        nameTextStyle: {
            color: '#fff',
            fontSize: 14,
        },
        nameGap: 20,
        splitLine: {
            show: false,
        },
        axisLine:false,
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
            data: [120, 200, 150, 80, 70, 110, 130, 150,160],
            type: 'bar',
            barGap: '20%',
            barWidth: 15,
            itemStyle: {
                color: new echarts.graphic.LinearGradient(1, 0, 0,0 , [
                    {
                        offset: 0,
                        color: '#34a4f2',
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
            data: [135, 186, 140, 90, 88, 125, 130, 140, 180],
            type: 'bar',
            barWidth: 15,
            itemStyle: {
                color: new echarts.graphic.LinearGradient(1, 0, 0,0, [
                    {
                        offset: 0,
                        color: '#73c45a',
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
