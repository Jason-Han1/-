let seriesLabel = {
    normal: {
        textStyle: {
            fontSize: 18,
            color: '#235894'
        }
    }
}
option = {
    title: {
        text: '信息成功率',
        left: 'center',
        top: 10,
        textStyle: {
            color: '#ccc'
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: 100
    },
    xAxis: {
        type: 'value',
        name: '数量',
        minInterval: 1,
        axisLabel: {
            formatter: '{value}'
        }
    },
    yAxis: {
        type: 'category',
        name: '成功率(%)',
        data: ['语音短信(100%)', '彩信(100%)', '短信(100%)']
    },
    series: [{
            name: '发送成功数量(条)',
            type: 'bar',
            data: [33, 19, 28],
            label: seriesLabel,
            color: ['#bae8ff'],
        },
        {
            name: '发送总数量(条)',
            type: 'bar',
            label: seriesLabel,
            color: ['#aad0e2'],
            data: [33, 19, 28]
        }
    ]
};