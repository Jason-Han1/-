option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            // type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true, // 防止标签溢出
    },
    xAxis: [
        {
            type: 'category',
            data: ['高级', '中级', '初级', '其他'],
            axisLabel: {
                margin: 20,
                color: '#979797',
                textStyle: {
                    fontSize: 18,
                },
            },
            axisLine: {
                lineStyle: {
                    color: '#cedbe9',
                },
            },
            axisTick: {
                show: false,
            },
        },
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel: {
                color: '#999',
                textStyle: {
                    fontSize: 18,
                },
            },
            axisLine: {},
            axisTick: {
                show: false,
            },
            splitLine: {
                lineStyle: {
                    color: '#cedbe9',
                    type: 'dashed',
                },
            },
        },
    ],
    series: [
        {
            name: '级别',
            type: 'bar',
            barWidth: '20%',
            data: [62, 88, 76, 42],
            itemStyle: {
                normal: {
                    // 颜色上下渐变
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#83bff6' },
                        { offset: 0.5, color: '#188df0' },
                        { offset: 1, color: '#188df0' },
                    ]),
                    // color: {
                    // 颜色左右渐变

                    //     colorStops: [
                    //         {
                    //             offset: 0,
                    //             color: '#0095e3', // 0% 处的颜色
                    //         },
                    //         {
                    //             offset: 1,
                    //             color: '#28E8FA', // 100% 处的颜色
                    //         },
                    //     ],
                    // },
                    barBorderRadius: [10, 10, 0, 0],
                },
            },

            // 在每个柱上显示数值
            // label: {
            //     normal: {
            //         show: true,
            //         fontSize: 18,
            //         fontWeight: 'bold',
            //         color: '#333',
            //         position: 'top',
            //     },
            // },
        },
    ],
};
