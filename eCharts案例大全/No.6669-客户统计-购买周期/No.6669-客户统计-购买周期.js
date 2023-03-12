option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '4%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['<1天', '1-3天', '3-5天', '5-10天', '10-30天', '>30天'],
        axisTick: {
            alignWithLabel: true
        }
    }],
    yAxis: [{
        name: '百分比（%）',
        type: 'value'
    }],
    series: [{
        name: '购买周期',
        type: 'bar',
        barWidth: '60%',
        data: [5, 10, 15, 15, 20, 35]
    }]
};




myChart.setOption(option);

function randomData() {
    return Math.round(Math.random() * 1000);
}