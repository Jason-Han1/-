option ={
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        bottom: '15%'
    },
    legend: {
        data: ['管理人员', '劳务人员'],
        bottom: '5%'
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            min: 0,
            axisLabel: {
                formatter: '{value}'
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            }
        }
    ],
    series: [
        {
            name: '管理人员',
            type: 'bar',
            data: [20, 49, 70, 23, 25, 76]
        },
        {
            name: '劳务人员',
            type: 'bar',
            data: [26, 59, 90, 26, 28, 70]
        }
    ]
};