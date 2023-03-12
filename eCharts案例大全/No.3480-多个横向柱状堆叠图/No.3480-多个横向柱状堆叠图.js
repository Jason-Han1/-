option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend:{},
    grid: [
        {left: '50%'},
        {right:'55%'}
    ],
     xAxis: [
        {type: 'value', gridIndex: 0},
        {type: 'value', gridIndex: 1,}
    ],
    yAxis: [
        {gridIndex: 0,data:['周一','周二'],type: 'category'},
        {gridIndex: 1,data:['周一','周二'],type: 'category'}
    ],
    series: [
        {
            name: '头部',
            type: 'bar',
            stack: '总量1',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [320, 302],
            xAxisIndex: 0, yAxisIndex: 0
        },
        {
            name: '肩部',
            type: 'bar',
            stack: '总量1',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [120, 132],xAxisIndex: 0, yAxisIndex: 0
        },
        {
            name: '腰',
            type: 'bar',
            stack: '总量1',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [220, 182],xAxisIndex: 0, yAxisIndex: 0
        },
        {
            name: '尾',
            type: 'bar',
            stack: '总量1',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [150, 212],xAxisIndex: 0, yAxisIndex: 0
        },
        {
            name: '头部',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [120, 388],
            xAxisIndex: 1, yAxisIndex: 1
        },
        {
            name: '肩部',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [3434, 343],xAxisIndex: 1, yAxisIndex: 1
        },
        {
            name: '腰',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [220, 182],xAxisIndex: 1, yAxisIndex: 1
        },
        {
            name: '尾',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [150, 212],xAxisIndex: 1, yAxisIndex: 1
        }
    ]
};