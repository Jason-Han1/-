option = {
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        data: ['笔单价']
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
        name: '单位（元）',
        type: 'value'
    },
    series: [{
        name: '笔单价',
        type: 'line',
        data: [103, 107, 101, 95, 93, 88, 102]
    }]
};



myChart.setOption(option);

function randomData() {
    return Math.round(Math.random() * 1000);
}