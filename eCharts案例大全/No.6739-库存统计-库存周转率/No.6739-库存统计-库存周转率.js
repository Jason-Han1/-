option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '4%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: {
        name: '百分比(%)',
        type: 'value',
        boundaryGap: [0, 0.01]

    },
    xAxis: {
        type: 'category',
        data: ['A商品', 'B商品', 'C商品', 'D商品', 'E商品', 'F商品', 'G商品', 'H商品', 'I商品', 'J商品'],
        axisLabel: {
            interval: 0,
            rotate: 40
        }
    },
    series: [{
        name: '周转率(%)',
        type: 'bar',
        data: [26.9, 26.4, 25.9, 20.1, 18.6, 18.3, 17.6, 15.5, 15.3, 12.4]
    }]
};



myChart.setOption(option);

function randomData() {
    return Math.round(Math.random() * 1000);
}