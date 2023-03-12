option = {
    title: {
        text: '对各主体的情感倾向'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['积极', '消极', '中立'],
        align: 'right',
        right: 10
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['医院', '婆婆', '丈夫', '产妇', '卫计委']
    }],
    yAxis: [{
        type: 'value',
        name: '人数',
        axisLabel: {
            formatter: '{value}'
        }
    }],
    series: [{
        name: '积极',
        type: 'bar',
        data: [62, 19, 23, 42, 4]
    }, {
        name: '消极',
        type: 'bar',
        data: [106, 69, 78, 21, 4]
    }, {
        name: '中立',
        type: 'bar',
        data: [14, 7, 6, 2, 3]
    }, {
        name: '中立',
        type: 'bar',
       
    }]
};