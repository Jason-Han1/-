option = {
    legend: {
        top: '6%',
        left: '6%',
    },
    grid: {
        left: '3%',
        top: '15%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: {
        type: 'value',
        splitNumber: 10,
        splitLine: { show: false },
        axisTick: { show: false },
        axisLine: { show: true },
        axisLabel: {
            fontSize: 16,
            color: '#000',
        },
    },
    yAxis: {
        type: 'category',
        data: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
        splitLine: { show: false },
        axisTick: { show: false },
        axisLine: { show: true },
        axisLabel: {
            fontSize: 16,
            color: '#000',
        },
    },
    color: ['#0f0', '#edb120', '#f00'],
    series: [
        {
            name: '无损概率',
            type: 'bar',
            stack: 'prob',
            barWidth: 25,
            itemStyle: {
                borderColor: '#000',
                borderWidth: 0.5,
            },
            data: [0.29, 0.19, 0.26, 0.44, 0.20, 0.29, 0.19, 0.26, 0.44, 0.20],
        },
        {
            name: '屈服概率',
            type: 'bar',
            stack: 'prob',
            barWidth: 25,
            itemStyle: {
                borderColor: '#000',
                borderWidth: 0.5,
            },
            data: [0.38, 0.36, 0.44, 0.33, 0.20, 0.38, 0.36, 0.44, 0.33, 0.20],
        },
        {
            name: '破坏概率',
            type: 'bar',
            stack: 'prob',
            barWidth: 25,
            itemStyle: {
                borderColor: '#000',
                borderWidth: 0.5,
            },
            data: [0.33, 0.45, 0.30, 0.23, 0.60, 0.33, 0.45, 0.30, 0.23, 0.60],
        },
    ],
};
