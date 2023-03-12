option = {
    color: ['#4150d8', '#28bf7e', '#ed7c2f'],
    grid: [
        {
            z: 1
        },{
            z: 2
        }
    ],
    xAxis: [{
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },{
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLabel: {
            show: false
        }
    }],
    yAxis: [{
        type: 'value'
    },{
        type: 'value',
        max: 100, // 需要对应网格一柱图的最大值，比例才能相等
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick:{
            show: false
        }
    }],
    dataZoom: {
        xAxisIndex: [0, 1]
    },
    series: [
        {
            type: 'bar',
            stack: 'A',
            barWidth: 30,
            xAxisIndex: 0,
            yAxisIndex: 0,
            silent: true,
            data: [35, 20, 18, 42, 62, 23, 40]
        },
        {
            type: 'bar',
            stack: 'A',
            barWidth: 40,
            xAxisIndex: 0,
            yAxisIndex: 0,
            silent: true,
            data: [35, 45, 32, 15, 26, 52, 22]
        },
        {
            type: 'bar',
            stack: 'A',
            barWidth: 40,
            xAxisIndex: 0,
            yAxisIndex: 0,
            silent: true,
            data: [30, 35, 50, 43, 12, 25, 38]
        },
        {
            name: '辅助透明层', // 借助透明层把覆盖层顶上去
            type: 'bar',
            stack: 'B',
            barWidth: 60,
            xAxisIndex: 1,
            yAxisIndex: 1,
            itemStyle: {
                barBorderColor: 'rgba(0, 0, 0, 0)',
                color: 'rgba(0, 0, 0, 0)'
            },
            emphasis: {
                itemStyle: {
                    barBorderColor: 'rgba(0, 0, 0, 0)',
                    color: 'rgba(0, 0, 0, 0)'
                }
            },
            data: [12, 35, 4, 14, 21, 6, 30]
        },
        {
            name: '覆盖层',
            type: 'bar',
            stack: 'B',
            barWidth: 60,
            xAxisIndex: 1,
            yAxisIndex: 1,
            itemStyle: {
                barBorderColor: 'rgba(0, 110, 84, .5)',
                color: 'rgba(0, 110, 84,.2)',
                barBorderRadius: 5
            },
            data: [45, 55, 50, 55, 48, 46, 58]
        },
    ]
};
