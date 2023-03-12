const set1 = [
    ['价格', '海尔', '格力', '美的', '华帝', '小狗电器'],
    [120, 62, 145, 46, 40, 76],
    [200, 74, 69, 129, 68, 44],
    [198, 52, 119, 48, 54, 50],
    [234, 66, 169, 114, 55, 47],
    [290, 52, 173, 110, 77, 44],
    [340, 79, 194, 46, 61, 45],
    [502, 46, 77, 71, 57, 78],
    [980, 64, 103, 60, 55, 80],
    [1230, 44, 135, 57, 67, 67]
];

option = {
    dataset: {
        source: set1
    },
    grid: {
        right: 64,
        left: 40,
        bottom: 24,
        top: 64
    },
    legend: {
        left: 16,
    },
    tooltip: {
        show: true
    },
    xAxis: {
        type: 'category',
        name: '最低\n到手价'
    },
    yAxis: {
        name: '价格数量'
    },
    // series: [{
    //         type: 'bar',
    //         barWidth: '60%',
    //         stack: true
    //     },
    //     {
    //         type: 'bar',
    //         barWidth: '60%',
    //         stack: true
    //     },
    //     {
    //         type: 'bar',
    //         barWidth: '60%',
    //         stack: true
    //     },
    //     {
    //         type: 'bar',
    //         barWidth: '60%',
    //         stack: true
    //     },
    //     {
    //         type: 'bar',
    //         barWidth: '60%',
    //         stack: true
    //     }
    // ]
    series: [{
            type: 'line',
            smooth: true
        },
        {
            type: 'line',
            smooth: true
        },
        {
            type: 'line',
            smooth: true
        },
        {
            type: 'line',
            smooth: true
        },
        {
            type: 'line',
            smooth: true
        },
    ],
};
myChart.resize({
    width: 488,
    height: 320
})