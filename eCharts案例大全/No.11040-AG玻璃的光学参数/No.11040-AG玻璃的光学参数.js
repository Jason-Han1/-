option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    toolbox: {
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    legend: {
        data: ['雾量', '清晰度']
    },
    xAxis: [{
        type: 'category',
        name: '光泽度',
        splitLine: {
            show: true,
            lineStyle: {
                color: '#CCC'
            }
        },
        data: ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100']
    }],
    yAxis: [{
            type: 'value',
            name: '雾量',
            min: 0,
            max: 50,
            interval: 5,
            axisLabel: {
                formatter: '{value}'
            },
        },
        {
            type: 'value',
            name: '清晰度',
            min: 0,
            max: 100,
            interval: 10,
            axisLabel: {
                formatter: '{value}'
            }
        }
    ],
    series: [

        {
            name: '雾量',
            type: 'line',
            data: [5, 17.5, 25, 30, 34, 36, 38, 40.8, 42.5, 44]
        },
        {
            name: '清晰度',
            type: 'line',
            yAxisIndex: 1,
            data: [93.5, 80, 63, 45, 27, 20, 15, 11, 8]
        }
    ]
};