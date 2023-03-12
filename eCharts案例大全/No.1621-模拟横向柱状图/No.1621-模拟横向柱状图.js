option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'axis',
        show: false,
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    legend: {
        show: false,
    },
    grid: {
        left: '3%',
        right: '10%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: [
        {
            splitLine: {
                show: false,
            },
            type: 'value',
            show: false,
        },
    ],
    yAxis: [
        {
            splitLine: {
                show: false,
            },
            axisLine: {
                //y轴
                show: false,
            },
            type: 'category',
            axisTick: {
                show: false,
            },
            inverse: true,
            data: ['赛核1', '赛核2', '赛核3', '赛核4', '赛核5', '赛核6', '赛核7', '赛核8', '赛核9'],
            axisLabel: {
                color: '#8C8C8C',
                fontSize: 14,
            },
        },
    ],
    series: [
        {
            name: '标准化',
            type: 'bar',
            barWidth: 20, // 柱子宽度
            label: {
                show: true,
                position: 'center', // 位置
                color: '#fff',
                fontSize: 12,
                lineHeight: 20,
                distance: 15, // 距离
                formatter: '    {c}', // 这里是数据展示的时候显示的数据
            }, // 柱子上方的数值
            itemStyle: {
                barBorderRadius: [0, 20, 20, 0], // 圆角（左上、右上、右下、左下）
                color: new echarts.graphic.LinearGradient(
                    1,
                    0,
                    0,
                    0,
                    [
                        {
                            offset: 0,
                            color: '#A167FC',
                        },
                        {
                            offset: 1,
                            color: '#7486FA',
                        },
                    ],
                    false
                ), // 渐变
            },
            data: [20, 30, 40, 50, 60, 50, 40, 30, 20],
        },
    ],
};
