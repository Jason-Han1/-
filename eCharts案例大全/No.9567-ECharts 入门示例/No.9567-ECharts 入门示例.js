const count = 20
var time = []
var s1 = []
var s2 = []
var s3 = []

function getRandom() {
    return Math.round(Math.random() * 100)
}

for (let i = 8; i < count; i++) {
    time.push(i+'时')
    s1.push(getRandom())
    s2.push(getRandom())
    s3.push(getRandom())
}

option = {
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['Asp','Av', 'We']
    },
    grid: [
        {bottom: '67%'},
        {top:'36%', bottom: '36%'},
        {top: '67%'}
    ],
    // xAxis: [{
    //     data: time,
    //     name: '小时'
    // }],
    // yAxis: {
        
    // },
    xAxis: [
        {type: 'category', gridIndex: 0, data:time},
        {type: 'category', gridIndex: 1, data:time},
        {type: 'category', gridIndex: 2, data:time}
        // {type: 'category', gridIndex: 2}
    ],
    yAxis: [
        {gridIndex: 0},
        {gridIndex: 1},
        {gridIndex: 2}
    ],
    series: [
    {
        //  color: ['#dd6b66'],
        name: 'Asp',
        type: 'bar',
        data: s1,
        seriesLayoutBy: 'row'
    }, 
    {
        //  color: ['#759aa0'],
        name: 'Av',
        type: 'bar',
        data: s2,
        xAxisIndex: 1, yAxisIndex: 1
    },
    {
        //  color: ['#892492'],
        name: 'We',
        type: 'bar',
        data: s3,
        xAxisIndex: 2, yAxisIndex: 2
    }]
};