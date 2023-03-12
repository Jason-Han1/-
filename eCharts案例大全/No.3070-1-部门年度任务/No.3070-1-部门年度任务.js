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
            data: ['临床医学', '软件工程', '力学','法学','地理信息科学','土木工程','应用化学','通讯工程','英语翻译','生物学'],
            axisLabel: {
                margin: 20,
                interval: 0,
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
            name: '单位：%',
            nameTextStyle: {
                fontSize: 13,
            },
            max:20,
            axisLabel: {
                color: '#979797',
                textStyle: {
                    fontSize: 18,
                },
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#cedbe9',
                },
            },
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
            // barWidth: '10%',
            // 设置barCategoryGap，不设置barWidth
            barCategoryGap: '90%',
            data: [18, 17, 16,14,13,12,10,10,9,8],
            itemStyle: {
                normal: {
                    // 颜色上下渐变
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#83bff6' },
                        { offset: 0.5, color: '#188df0' },
                        { offset: 1, color: '#188df0' },
                    ]),
                    barBorderRadius: [10, 10, 0, 0],
                },
            },
        },
    ],
};
