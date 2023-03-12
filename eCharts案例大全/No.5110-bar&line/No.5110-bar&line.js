option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#f3f3f3'
            }
        }
    },
    legend: {
        type: 'scroll',
        bottom: '5',
        data: ['攻击总次数', '攻击成功次数', '攻击资产总数', '攻击成功资产数量']
    },
    xAxis: [{
        type: 'category',
        data: ['南通', '常州', '南京', '徐州', '苏州', '无锡'],
        axisPointer: {
            type: 'shadow'
        },
        axisTick: {
            lineStyle: {
                color: '#bfbfbf'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#bfbfbf'
            }
        },
        axisLabel: {
            color: '#333'
        }
    }],
    yAxis: [{
            type: 'value',
            name: '攻击',
            // min: 0,
            // max: 250,
            // interval: 50,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        },
        {
            type: 'value',
            name: '资产',
            // min: 0,
            // max: 25,
            // interval: 5,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        }
    ],
    series: [{
            name: '攻击总次数',
            type: 'bar',
            color: '#5b90f9',
            data: [2.0, 4.9, 7.0, 6.4, 5.4, 3.3]
        },
        {
            name: '攻击成功次数',
            type: 'bar',
            color: '#5d7093',
            data: [2.6, 5.9, 9.0, 18.8, 6.0, 2.3]
        },
        {
            name: '攻击资产总数',
            type: 'line',
            yAxisIndex: 1,
            color: '#5ad8a6',
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 6.2]
        },
        {
            name: '攻击成功资产数量',
            type: 'line',
            yAxisIndex: 1,
            color: '#f5bd16',
            data: [3.0, 3.3, 3.4, 6.1, 5.0, 2.2]
        }
    ]
};