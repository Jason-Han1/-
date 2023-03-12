option = {
    color: ['#3398DB', '#D53A35', '#77A8AD'],
    title: {
        text: '公司部门人员分布'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },

    },
    legend: {
        data: ['人事部', '财务一部', '财务二部']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        name: '月份'
    }],
    yAxis: [{
        type: 'value',
        name: '数值'
    }],
    series: [{
            name: '人事部',
            type: 'bar',
            stack: '人事', //此属性代表大部门 
            data: [2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 11, 12]
        },
        {
            name: '财务一部',
            type: 'bar',
            stack: '财务', //此属性代表大部门  部门二部门三都属于财务
            data: [3, 3, 3, 3, 4, 5, 5, 5, 5, 6, 7, 7]
        },
        {
            name: '财务二部',
            type: 'bar',
            stack: '财务',
            data: [3, 3, 3, 3, 4, 5, 5, 5, 5, 6, 7, 7]
        }
    ]
};
