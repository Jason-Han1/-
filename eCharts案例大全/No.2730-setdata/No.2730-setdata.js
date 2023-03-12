option = {
    title: {
        text: '折线图堆叠'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['优化前', '优化后']
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
        data: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二','十三']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '优化前',
            type: 'line',
            data: [15, 24, 26, 29, 32, 30, 33, 34, 42, 39, 46, 49, 55]
        },
        {
            name: '优化后',
            type: 'line',
            data: [3, 4, 2, 3, 2, 3, 3, 3, 4, 1, 3, 1, 4]
        }
    ]
};