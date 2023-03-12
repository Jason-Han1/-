option = {
    title: {
        text: '对数轴示例',
        left: 'center'
    },
    tooltip: {
        trigger: 'axis',
        formatter: '{a} <br/>{b} : {c}'
    },
    legend: {
        left: '10'
    },
    xAxis: {
        type: 'category',
        name: 'x',
        splitLine: {show: false},
        data: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: {
        type: 'log',
        name: 'y'
    },
    series: [
        {
            name: '测试数据',
            type: 'line',
            data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669, 223],
            itemStyle: {
                normal: {
                    lineStyle: {
                        type: 'dashed',
                        color: 'red'
                    }
                }
            }
        },
        {
            name: '测试数据',
            type: 'line',
            data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669],
            itemStyle: {
                normal: {
                    lineStyle: {
                        color: 'red'
                    }
                }
            }
        },
    ]
};