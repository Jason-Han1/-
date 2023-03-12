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
        name: '动销率(%)',
        type: 'bar',
        data: [36.9, 36.4, 35.9, 30.1, 28.6, 28.3, 17.6, 15.5, 15.3, 12.4]
    }]
};



myChart.setOption(option);

function randomData() {
    return Math.round(Math.random() * 1000);
}