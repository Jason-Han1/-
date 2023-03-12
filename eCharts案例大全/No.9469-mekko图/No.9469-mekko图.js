option = {
    legend: {
        data: ['西门子', '三星', '美的', '格力']
    },

    xAxis: [{
        type: 'category',
        data: ['冰箱 331', '洗衣机 213', '空调 451', '彩电 213', '热水器 433']
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
            name: '西门子',
            type: 'bar',
            stack: '搜索引擎',
            barGap: '0',
            barCategoryGap: '0',
            label: {
                show: true,
                formatter: '{a} {c} %'
            },
            data: [20, 32, 11, 24, 10]
        },
        {
            name: '三星',
            type: 'bar',
            stack: '搜索引擎',
            barGap: '0',
            barCategoryGap: '0',
            label: {
                show: true,
                formatter: '{a} {c} %'
            },
            data: [30, 12, 11, 14, 20]
        },
        {
            name: '美的',
            type: 'bar',
            stack: '搜索引擎',
            barGap: '0',
            barCategoryGap: '0',
            label: {
                show: true,
                formatter: '{a} {c} %'
            },
            data: [40, 12, 21, 14, 19]
        },
        {
            name: '格力',
            type: 'bar',
            stack: '搜索引擎',
            barGap: '0',
            barCategoryGap: '0',
            label: {
                show: true,
                formatter: '{a} {c} %'
            },
            data: [10, 44, 57, 48, 51]
        }
    ]
};