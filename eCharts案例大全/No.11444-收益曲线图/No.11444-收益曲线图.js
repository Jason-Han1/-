option = {
    xAxis: {
        type: 'category',
        data: ['低于一万元', '高于一万元']
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: false
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        }
    },
    series: [{
        data: [120, 200],
        type: 'bar',
        barGap: 0,
        barCategoryGap: 0,
        itemStyle: {
            color: '#ffe9da',
            shadowColor: '#ff8b46',
            shadowOffsetX: 0,
            shadowOffsetY: -3
        }
    }]
};