option = {
    title: {
        text: '岗位需求上报人数变化趋势',
    },
    // tooltip: {
    //     trigger: 'axis'
    // },
    legend: {
        data: ['教师岗位', '管理岗位', '总数'],
    },
    // grid: {
    //     left: '3%',
    //     right: '4%',
    //     bottom: '3%',
    //     containLabel: true
    // },
    // toolbox: {
    //     feature: {
    //         saveAsImage: {}
    //     }
    // },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2016', '2017', '2018', '2019', '2020'],
        axisTick: {
            show: false, // 隐藏x轴的分割点
        },
    },
    yAxis: {
        name:'数量（人）',
        type: 'value',
        axisLine: { show: true }, //显示坐标轴线
    },
    series: [
        {
            name: '教师岗位',
            type: 'line',
            data: [420, 410, 402, 428, 411],
            symbolSize: 10, // 折线的点的大小
            itemStyle: {
                normal: {
                    color: '#5c9fff', //点的颜色
                    lineStyle: {
                        color: '#5c9fff', //线的颜色
                        width: 5, // 折线图线条粗细设置
                    },
                },
            },
        },
        {
            name: '管理岗位',
            type: 'line',
            data: [620, 605, 600, 630, 610],
            symbolSize: 10, // 折线的点的大小
            itemStyle: {
                normal: {
                    color: '#35e2af', //点的颜色
                    lineStyle: {
                        color: '#35e2af', //线的颜色
                        width: 5, // 折线图线条粗细设置
                    },
                },
            },
        },
        {
            name: '总数',
            type: 'line',
            data: [201, 205, 272, 210, 250],
            symbolSize: 10, // 折线的点的大小
            itemStyle: {
                normal: {
                    color: '#888aeb', //点的颜色
                    lineStyle: {
                        color: '#888aeb', //线的颜色
                        width: 5, // 折线图线条粗细设置
                    },
                },
            },
        },
    ]
};
