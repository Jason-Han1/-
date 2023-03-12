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
        data: ['A槽', 'B槽', 'C槽', 'D槽'],
    },
    xAxis: [{
        type: 'category',
        axisLabel:{
            interval:0
        },
        axisTick: {
            alignWithLabel: true,
            interval:0
        },
        data: ['08:30', '10:30', '12:30', '14:30', '16:30', '18:30', '20:30', '22:30', '00:30', '02:30', '04:30', '06:30','08:30'],
        axisPointer: {
            type: 'shadow'
        }
    }, ],
    yAxis: [{
        type: 'value',
        axisLabel: {
            formatter: '{value} kg'
        }
    }],
    series: [
        {
        xAxisIndex: 1,
        name: 'A槽',
        type: 'line',
        yAxisIndex: 0,
        connectNulls: true,//没数据的断点补齐,平滑连接
        data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0,10]
    },
    {
        xAxisIndex: 1,
        name: 'B槽',
        type: 'line',
        yAxisIndex: 0,
        connectNulls: true,
        data: [2, 3, 2, 2.2, 3.4, 1.5, 7.8, 14, 12, 3.8, 12.5, 8]
    },
    {
        xAxisIndex: 1,
        name: 'C槽',
        type: 'line',
        yAxisIndex: 0,
        connectNulls: true,
        data: [2.8, 3.2, 4.3, 3.5, 7.3, 6.2, 14.3, 32.4, 11.0, 12.5, 9.0]
    },
    {
        xAxisIndex: 1,
        name: 'D槽',
        type: 'line',
        yAxisIndex: 0,
        connectNulls: true,
        data: [4.0, 5.2, 6.3, 5.5, 7.3, 8.2, 18.3, 15.4, 16.0, 22.5, 16.0,24]
    },
    ]
};

// 增加了一个隐藏的x轴，用来控制线图的点的位置
option.xAxis[1] = {
    type: 'value',
    max: option.xAxis[0].data.length * 100,
    show: false
}
option.series[0].data = option.series[0].data.map((x, i) => [100 + i * 100, x])
option.series[1].data = option.series[1].data.map((x, i) => [100 + i * 100, x])
option.series[2].data = option.series[2].data.map((x, i) => [100 + i * 100, x])
option.series[3].data = option.series[3].data.map((x, i) => [100 + i * 100, x])