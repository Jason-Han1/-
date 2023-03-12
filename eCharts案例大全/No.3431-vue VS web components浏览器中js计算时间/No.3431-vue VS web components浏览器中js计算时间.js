option = {
    title: {
        text: '浏览器中js计算时间'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['web components', 'vue']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1', '10', '100', '1000', '10000']
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            name: 'web components',
            type: 'line',
            stack: 'Scripting1',
            smooth: true,
            data: [2, 8, 31, 200, 2136]
        },
        {
            name: 'vue',
            type: 'line',
            stack: 'Scripting2',
            smooth: true,
            data: [20, 25, 32, 112, 581]
        },
    ]
};