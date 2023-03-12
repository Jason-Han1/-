option = {
    backgroundColor: '#00043A',
    tooltip: {
        trigger: 'axis',
        show: false,
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    legend: {
        show:false
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
        data: ['湖南', '贵州', '黑龙江', '河南', '山东'],
        axisLabel: {
            color: '#fff'
        }
    }],
    series: [{
        name: '标准化',
        type: 'bar',
        barWidth: 30, // 柱子宽度
        label: {
            show: true,
            position: 'right', // 位置
            color: '#00FFFF',
            fontSize: 14,
            fontWeight: 'bold', // 加粗
            distance: 5 // 距离
        }, // 柱子上方的数值
        itemStyle: {
            barBorderRadius: [20, 20, 20, 20], // 圆角（左上、右上、右下、左下）
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                '#00043C', '#58ABFA'
            ].map((color, offset) => ({
                color,
                offset
            }))), // 渐变
        },
        data: [320, 302, 341, 374, 390]
    }, ]
};