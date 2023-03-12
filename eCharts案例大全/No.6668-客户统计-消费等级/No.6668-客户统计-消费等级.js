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
        data: ['<100元', '100-500元', '500-1000元', '1000-5000元', '5000-10000元', '>10000元'],
        axisLabel: {
            interval: 0,
        },
    }],
    yAxis: [{
        name: '百分比（%）',
        type: 'value'
    }],
    series: [{
        name: '消费等级划分',
        type: 'bar',
        barWidth: '60%',
        data: [10, 15, 20, 25, 20, 5]
    }]
};




myChart.setOption(option);

function randomData() {
    return Math.round(Math.random() * 1000);
}