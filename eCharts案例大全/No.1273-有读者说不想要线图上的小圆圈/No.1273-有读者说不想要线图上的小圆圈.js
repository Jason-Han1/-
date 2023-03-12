option = {
    title: {
        text: '有读者说不想要线图上的小圆圈',
        subtext: '尤其是坐标轴指示器（axisPointer）选中高亮（放大）的时候',
    },
    legend: {
        right: '10%',
        top: '5%',
        orient: 'vertical',
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    },
    yAxis: {},
    tooltip: {
        trigger: 'axis',
    },
    series: [
        {
            name: '原始状态（图形标记稍微放大一点，方便对比）',
            type: 'line',
            symbolSize: 5,
            data: [334, 320, 430, 410, 282, 291, 390],
        },
        {
            name: '标记为实心圆',
            type: 'line',
            // ECharts 提供的标记类型包括
            // 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
            // https://echarts.apache.org/zh/option.html#series-line.symbol
            symbol: 'circle',
            data: [234, 220, 330, 310, 182, 191, 290],
        },
        {
            name: '无标记',
            type: 'line',
            symbol: 'none',
            data: [184, 170, 280, 260, 132, 141, 240],
        },
        {
            name: '关闭放大',
            type: 'line',
            emphasis: {
                scale: false,
            },
            data: [134, 120, 230, 210, 82, 91, 190],
        },
        {
            name: '关闭放大+标记为实心圆',
            type: 'line',
            symbol: 'none',
            emphasis: {
                scale: false,
            },
            data: [84, 70, 180, 160, 32, 41, 140],
        },
    ],
};
