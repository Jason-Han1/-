option = {
    title: {
        text: '',
        subtext: '',
    },
    legend: {
        data: ['日平衡量', '连续平衡量'],
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['3.1', '3.2', '3.3', '3.4', '3.5', '3.6', '3.7'],
    },
    yAxis: {
        type: 'value',
        max: 15000,
        min: -15000,
        interval: 5000,
        axisLabel: {
            formatter: '{value}',
        },
    },
    series: [
        {
            name: '日平衡量',
            smooth: true,
            type: 'line',
            data: [1000, 11100, 1800, 1001, 12000, 1200, 1500],
            markPoint: {
                data: [{ name: '报警', value: 11100, xAxis: 1, yAxis: 11100 }],
            },
            markLine: {
                data: [
                    {
                        name: '最大值',
                        yAxis: 11000,
                    },
                    {
                        name: '最小值',
                        yAxis: -11000,
                    },
                ],
            },
        },
        {
            name: '连续平衡量',
            smooth: true,
            type: 'line',
            data: [-1000, -12000, 5000, -5000, 3000, 2000, -6000],
            markPoint: {
                data: [{ name: '报警', value: -12000, xAxis: 1, yAxis: -12000 }],
            },
            markLine: {
              data: [
                    {
                        name: '最大值',
                        yAxis: 5000,
                    },
                    {
                        name: '最小值',
                        yAxis: -5000,
                    },
                ],
            },
        },
    ],
};
