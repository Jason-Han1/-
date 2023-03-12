
option = {
    color: ['#003366', '#006699', '#4cabce', '#e5323e'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['正常', '告警', '关闭']
    },
    calculable: true,
    xAxis: [
        {
            type: 'category',
            axisTick: {show: false},
            data: ['南京市', '无锡市', '徐州市', '常州市', '苏州市', '南通市', 
            '连云港市', '淮安市', '盐城市', '扬州市', '镇江市', '泰州市', '宿迁市']
        }
    ],
    yAxis: [
        { type: 'value' }
    ],
    series: [
        {
            name: '正常',
            type: 'bar',
            barGap: 0,
            data: [320, 332, 301, 334, 390, 320, 332, 301, 334, 390, 320, 332, 301]
        },
        {
            name: '告警',
            type: 'bar',
            data: [220, 182, 191, 234, 290, 220, 182, 191, 234, 290, 220, 182, 191]
        },
        {
            name: '关闭',
            type: 'bar',
            data: [150, 232, 201, 154, 190, 150, 232, 201, 154, 190, 150, 232, 201]
        }
    ]
};