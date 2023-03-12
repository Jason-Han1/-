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
        data: ['<1', '1-3', '3-5', '5-7', '7-10', '>10'],
        axisTick: {
            alignWithLabel: true
        }
    }],
    yAxis: [{
        name: '百分比（%）',
        type: 'value'
    }],
    series: [{
        name: '用户占比',
        type: 'bar',
        barWidth: '60%',
        data: [100, 37, 15, 3, 2, 1]
    }]
};

myChart.setOption(option);

function randomData() {
    return Math.round(Math.random() * 1000);
}