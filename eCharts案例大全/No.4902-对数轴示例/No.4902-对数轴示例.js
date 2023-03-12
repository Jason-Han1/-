option = {
    title: {
        text: '对数轴示例',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
    },
    legend: {
        left: 'left',
    },
    xAxis: {
        type: 'category',
        name: 'x',
        data: ['一', '二', '三', '四', '五', '六', '七', '八', '九']
    },
    yAxis: {
        type: 'log',
        name: 'y',
    },
    series: [
        {
            type: 'line',
            data: [2, 3, null, 5, 8, null, 6, 9, null]
        }
    ]
};
