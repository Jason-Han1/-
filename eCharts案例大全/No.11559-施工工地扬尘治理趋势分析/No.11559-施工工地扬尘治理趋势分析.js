option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    legend: {
        data: ['房屋建筑工程', '房屋拆除工程', '建筑工程落实率', '拆除工程落实率'],
    },
    xAxis: [{
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisPointer: {
            type: 'shadow'
        }
    }, ],
    yAxis: [{
            type: 'value',
            // min: 0,
            interval : 1500,
            axisLabel: {
                formatter: '{value}'
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed'
                }
            }

        },
        {
            type: 'value',
            position: 'right',
            min: 0,
            // max: 100,
            interval: 25,
            axisLabel: {
                formatter: '{value}%'
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed'
                }
            }
        }
    ],
    series: [{
            name: '房屋建筑工程',
            type: 'bar',
            color: '#388BFF',
            data: [3800, 3000, 3600, 1200, 3420, 2479, 3800, 2700, 5841, 4200, 3200, 3300],
            // z: 3
        },
        {
            name: '房屋拆除工程',
            type: 'bar',
            color: '#05C3FA',
            data: [3000, 2500, 2600, 3600, 1200, 3420, 2479, 3800, 2700, 5841, 4200, 3200],
            // z: 3

        },
        {
            xAxisIndex: 1,
            name: '建筑工程落实率',
            type: 'line',
            yAxisIndex: 1,
            color: '#41CC5B',
            data: [70, 80, 33, 45, 63, 92, 23, 24, 23, 75, 92, 62]
        },
        {
            xAxisIndex: 1,
            name: '拆除工程落实率',
            type: 'line',
            yAxisIndex: 1,
            color: '#F6931C',
            data: [20, 92, 83, 75, 63, 12, 63, 34, 13, 15, 12, 92]
        }
    ]
};

// 增加了一个隐藏的x轴，用来控制线图的点的位置
option.xAxis[1] = {
    type: 'value',
    max: option.xAxis[0].data.length * 100,
    show: false
}
option.series[2].data = option.series[2].data.map((x, i) => [27 + i * 100, x])
option.series[3].data = option.series[3].data.map((x, i) => [27 + i * 100, x])