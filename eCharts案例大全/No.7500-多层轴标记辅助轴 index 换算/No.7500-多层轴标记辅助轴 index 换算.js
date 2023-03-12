option = {
    title: {
        text: '多层轴标记辅助轴 index 换算'
    },
    grid: {
        top: '30%',
        right: '15%',
        bottom: '40%'
    },
    xAxis: [{
        name: '数据轴\nindex',
        data: ['0', '1', '2', '3', '4', '5', '6']
    }, {
        name: '轴刻度\nindex',
        data: ['0', '1', '2', '3', '4', '5', '6', '7'],
        boundaryGap: false
    }, {
        name: '辅助轴index\n刻度/标签',
        data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],
        splitLine: {
            show: true
        },
        boundaryGap: false,
        offset: 50
    }],
    yAxis: {
        splitLine: {
            show: false
        }
    },
    series: [{
        type: 'bar',
        xAxisIndex: 0,
        data: [220, 182, 191, 234, 290, 330, 310]
    }]
};