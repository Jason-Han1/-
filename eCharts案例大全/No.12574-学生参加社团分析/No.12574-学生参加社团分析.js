option = {
    backgroundColor: '#141845',
    color: ['#4BB9F4'],
    title: {
        text: '学生参加社团分析',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['武术', '计算机', '手工', '舞蹈', '文学', '数学', '书法'],
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        }

    },
    yAxis: {
        type: 'value',
        scale: true,
        name: '时间/小时',
        min: 0,
        max: 12,
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        }
    },
    series: [{
        data: [10, 9, 4, 5, 4, 8, 9],
        type: 'line',
        areaStyle: {}
    }]
};