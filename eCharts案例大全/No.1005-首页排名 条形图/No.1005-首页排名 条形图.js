option = {
    backgroundColor: '#ffffff',
    tooltip: {
        trigger: 'axis',
        show: true,
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    legend: {
        show:false
    },
    grid: {
        left: '10%',
        right: '10%',
        bottom: '10%',
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
        inverse: true,
        data: ['安全门未关', '关模低压保护', '料温过低', '马达未启动', '其他'],
        axisLabel: {
            color: '#303133',
            fontSize: 14,
        }
    }],
    series: [{
        name: '报警次数',
        type: 'bar',
        barWidth: 8, // 柱子宽度
        label: {
            show: true,
            position: 'right', // 位置
            color: '#303133',
            fontSize: 14,
            distance: 15, // 距离
			formatter: '{c} 次' // 这里是数据展示的时候显示的数据
        }, // 柱子上方的数值
        itemStyle: {
            barBorderRadius: [0, 0, 0, 0], // 圆角（左上、右上、右下、左下）
            
                color: '#419fff'
        },
        data: [28,16,12,8,3]
    }, ]
};