option = {
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        data: ['退货率']
    },
    grid: {
        left: '4%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        boundaryGap: false,
        data: ['12月01', '12月02', '12月03', '12月04', '12月05', '12月06', '12月07']
    },
    yAxis: {
        name: '百分比（%）',
        type: 'value'
    },
    series: [{
        name: '退货率',
        type: 'line',
        data: [5, 4, 5, 8, 6, 7, 8, 6]
    }]
};



myChart.setOption(option);

function randomData() {
    return Math.round(Math.random() * 1000);
}