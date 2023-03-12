option = {
    tooltip: {
        trigger: 'axis',
        show: true,
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    legend: {
        selectedMode: false,
    },
    grid: {
        top: '3%',
        left: '3%',
        right: '4%',
        bottom: '0%',
        width: '93%',
        height: '99%',
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
        data: ['工业固废单位', '生活垃圾焚烧厂', '机动车维修单位', '实验室单位', '小微企业', '医疗机构', '工业企业'],
        axisLabel: {
            color: "#fff",
            fontSize: 16
        }
    }],
    series: [{
        type: 'bar',
        barWidth: 12, // 柱子宽度
        label: {
            show: true,
            position: 'right', // 位置
            color: '#8EB1FF',
            fontSize: 16,
            distance: 5 // 距离
        }, // 柱子上方的数值
        itemStyle: {
            barBorderRadius: [0, 20, 20, 0], // 圆角（左上、右上、右下、左下）
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                '#52EDFF', '#295BFF'
            ].map((color, offset) => ({
                color,
                offset
            }))), // 渐变
        },
        data: [9800, 568, 10700, 3600, 4130, 621, 20080]
    }, ]
};