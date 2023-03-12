app.title = '日报、预算条形图';

option = {
    title: {
        text: '日报、预算',
        subtext: '数据来自BEST'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['日报', '预算']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['总净利','总成本','总收入','总出件量']
    },
    series: [
        {
            name: '日报',
            type: 'bar',
            data: [18203, 23489, 29034,  131744]
        },
        {
            name: '预算',
            type: 'bar',
            data: [19325, 23438, 31000,  50000]
        }
    ]
};