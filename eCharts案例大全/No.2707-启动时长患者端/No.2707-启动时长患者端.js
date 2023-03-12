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
            data: [1465, 1671,  1630, 1779, 1521,  1592,  1495, 2057, 1562, 1746 ]
        },
        {
            name: '联盟广告',
            type: 'line',
            data: [1400,1211,1593,1611,1537,1500,1280,1190,1430, 1210 ]
        }
    ]
};