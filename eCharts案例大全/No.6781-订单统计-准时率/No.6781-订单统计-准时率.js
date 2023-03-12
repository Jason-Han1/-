option = {
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        data: ['准时率']
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
        name: '准时率',
        type: 'line',
        data: [89, 62, 71, 84, 80, 67, 73]
    }]
};



myChart.setOption(option);

function randomData() {
    return Math.round(Math.random() * 1000);
}