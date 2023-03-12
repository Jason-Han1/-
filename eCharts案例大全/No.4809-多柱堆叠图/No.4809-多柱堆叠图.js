option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['一分局', '二分局', '三分局', '四分局', '五分局', '六分局', '七分局']
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
            name: '在用',
            type: 'bar',
            stack: '台式电脑',
            barWidth: 15,
            data: [300, 32, 100, 300, 90, 300, 30]
        },
        {
            name: '报废在用',
            type: 'bar',
            stack: '台式电脑',
            data: [20, 300, 300, 34, 300, 30, 290]
        },
        {
            name: '在用',
            type: 'bar',
            stack: '笔记本电脑',
            barWidth: 15,
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '报废在用',
            type: 'bar',
            stack: '笔记本电脑',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '报废待处置',
            type: 'bar',
            stack: '笔记本电脑',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '在用',
            type: 'bar',
            barWidth: 15,
            stack: '打印机',
            data: [620, 732, 701, 734, 1090, 1130, 1120]
        },
        {
            name: '报废在用',
            type: 'bar',
            stack: '搜索引擎',
            data: [120, 132, 101, 134, 290, 230, 220]
        },
        {
            name: '报废待处置',
            type: 'bar',
            stack: '打印机',
            data: [60, 72, 71, 74, 190, 130, 110]
        },
        {
            name: '未分配',
            type: 'bar',
            stack: '打印机',
            data: [62, 82, 91, 84, 109, 110, 120]
        },
        
    ]
};