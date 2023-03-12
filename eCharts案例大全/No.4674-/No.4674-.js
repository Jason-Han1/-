option = {
    color: ['red', '#f8b929', '#f3df4c', '#23a1ea'],
    tooltip: {
        trigger: 'axis',
        //formatter: "{b} <br> 合格率: {c}%"
    },
    legend: {
        data: ['A级', 'B级', 'C级', 'D级']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        name: '日期',
        boundaryGap: false,
        data: ['6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
            name: 'A级',
            type: 'line',
            stack: '总量',
            data: [10, 12, 11, 14, 9, 20, 20]
        },
        {
            name: 'B级',
            type: 'line',
            stack: '总量',
            data: [20, 12, 11, 24, 20, 30, 10]
        },
        {
            name: 'C级',
            type: 'line',
            stack: '总量',
            data: [15, 23, 20, 14, 10, 30, 20]
        },
        {
            name: 'D级',
            type: 'line',
            stack: '总量',
            data: [32, 32, 31, 34, 39, 33, 32]
        },
    ]
};