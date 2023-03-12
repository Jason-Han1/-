xAxisData = [];
yAxisDataBItool = [];
yAxisDataECharts = [];

for (var i = 0; i < 100; i++) {
    xAxisData.push(i);
    yAxisDataBItool.push(300 * Math.sqrt(i));
    yAxisDataECharts.push((i + 20) * (i + 20) - 400);
}

option = {
    title: {
        text: 'ECharts 与市面多数 BI 工具学习价值对比'
    },
    legend:{},
    //tooltip: {},
    xAxis: {
        name: '学习成本',
        axisLabel: {
            show: false
        },
        data: xAxisData
    },
    yAxis: {
        name: '应用效果',
        axisLabel: {
            show: false
        }
    },
    series: [{
        name:'市面上多数BI工具',
        type: 'line',
        symbol:'none',
        data: yAxisDataBItool
    }, {
        name:'ECharts',
        type: 'line',
        symbol:'none',
        data: yAxisDataECharts
    }]
};