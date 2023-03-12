option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999',
            },
        },
    },
    toolbox: {
        feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true },
        },
    },
    legend: {
        data: ['专业技术职务人员人数', '（聘任）专业技术职务人员人数', '专业技术职务人员比例','（聘任）专业技术职务人员人数比例'],
    },
    xAxis: [
        {
            type: 'category',
            data: ['初级', '中级', '副高级', '正高级'],
             axisLabel: {
                margin: 10,
                color: '#979797',
                textStyle: {
                    fontSize: 18,
                },
            },
            axisPointer: {
                type: 'shadow',
            },
            axisTick: {
                show: false, // 隐藏x轴的分割点
            },
        },
    ],
    yAxis: [
        {
            type: 'value',
            name: '人',
            min: 0,
            max: 100,
            interval: 20,
            axisLabel: {
                formatter: '{value}',
            },
            axisLine: {},
            axisTick: {
                show: false,
            },
             splitLine: {
                lineStyle: {
                    color: '#cedbe9',
                    type: 'dashed', // 坐标线使用点线
                },
            },
            
        },
        {
            type: 'value',
            name: '%',
            min: 0,
            max: 100,
            interval: 20,
            axisLabel: {
                formatter: '{value}',
            },
        },
    ],
    series: [
        {
            name: '专业技术职务人员人数',
            type: 'bar',
            data: [38, 56, 35, 48],
            barWidth: '20%',
            // barGap:'20', 调整柱状图每根柱子之间的间距
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
        {
            name: '（聘任）专业技术职务人员人数',
            type: 'bar',
            data: [61, 79, 58, 70],
            barWidth: '20%',
            // barGap:'20',
            itemStyle: {
                normal: {
                    // 颜色上下渐变
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#feb96a' },
                        { offset: 0.5, color: '#fec075' },
                        { offset: 1, color: '#feb86a' },
                    ]),
                    barBorderRadius: [10, 10, 0, 0],
                },
            },
        },
        {
            name: '专业技术职务人员比例',
            type: 'line',
            yAxisIndex: 1,
            data: [55, 62, 60, 61],
            smooth: true,
            // 数值点默认为空心点
            // symbol: 'circle', //数值点设定为实心点
            // symbol:'rect', // 数值点设定为正方形
            symbolSize: 10, // 折线的点的大小
            itemStyle: {
                normal: {
                    color: '#1b92ff', //点的颜色
                    lineStyle: {
                        color: '#1b92ff', //线的颜色
                        width: 5, // 折线图线条粗细设置
                    },
                },
            },
        },
        {
            name: '（聘任）专业技术职务人员人数比例',
            type: 'line',
            yAxisIndex: 1,
            data: [79, 78, 80, 81],
            smooth: true,
            // symbol: 'circle', //数值点设定为实心点
            symbolSize: 10, // 折线的点的大小
            itemStyle: {
                normal: {
                    color: '#f7af5c', //点的颜色
                    lineStyle: {
                        color: '#f7af5c', //线的颜色
                        width: 5, // 折线图线条粗细设置
                    },
                },
            },
        },
    ],
};
