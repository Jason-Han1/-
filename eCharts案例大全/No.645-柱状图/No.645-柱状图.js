option = {
    tooltip: {
        trigger: 'axis',
        show: false,
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    legend: {
        selectedMode: false,
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        splitLine: {
            show: false
        },
        type: 'value',
        show: false,
    }],
    yAxis: [{
        splitLine: {
            show: false
        },
        axisLine: { //y轴
            show: false
        },
        type: 'category',
        axisTick: {
            show: false
        },
        data: ['0~5岁', '5~10岁', '10-30岁', '30-50岁', '50-70岁', '70-100', '100以上'],
        axisLabel: {

        }
    }],
    series: [{
        name: '标准化',
        type: 'bar',
        barWidth: 30, // 柱子宽度
        label: {
            show: true,
            position: 'right', // 位置
            color: '#1CD8A8',
            fontSize: 14,
            fontWeight: 'bold', // 加粗
            distance: 5 // 距离
        }, // 柱子上方的数值
        itemStyle: {
            barBorderRadius: [0, 20, 20, 0], // 圆角（左上、右上、右下、左下）
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                '#2FAEF2', '#1CD8A8'
            ].map((color, offset) => ({
                color,
                offset
            }))), // 渐变
        },
        data: [320, 302, 341, 374, 390, 650, 420]
    }, ]
};