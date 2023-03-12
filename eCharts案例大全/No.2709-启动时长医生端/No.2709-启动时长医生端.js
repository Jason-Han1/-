option = {
    title: {
        text: '折线图堆叠'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['邮件营销', '联盟广告']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        data: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十']
    },
    yAxis: {
        type: 'value',
        min: 1000
    },
    series: [
        {
            name: '邮件营销',
            type: 'line',
            data: [1585, 2740, 1906, 2833, 1958, 2209, 1596, 2007, 2200, 1608]
        },
        {
            name: '联盟广告',
            type: 'line',
            data: [1373,  1624, 1279, 1904, 1899,  1610, 1261, 1584, 1724, 1521]
        }
    ]
};