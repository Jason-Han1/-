let points = [
    {
        name: '校园大数据',
        symbolSize: 80,
        category: 0,
    },
    {
        name: '舆情大数据',
        symbolSize: 80,
        category: 1,
    },
    {
        name: '用户分析',
        symbolSize: 80,
        category: 1,
    },
    {
        name: '话题分析',
        symbolSize: 80,
        category: 1,
    },
    {
        name: '评论分析',
        symbolSize: 80,
        category: 1,
    },
    {
        name: '图书馆分析',
        symbolSize: 80,
        category: 2,
    },
    {
        name: '借阅分析',
        symbolSize: 80,
        category: 2,
    },
    {
        name: '借阅排行',
        symbolSize: 80,
        category: 2,
    },
    {
        name: '图书收录',
        symbolSize: 80,
        category: 2,
    },
    {
        name: '图书分析',
        symbolSize: 80,
        category: 2,
    },
];
let links = [
    {
        source: '校园大数据',
        target: '舆情大数据',
    },
    {
        source: '校园大数据',
        target: '图书馆分析',
    },
    {
        source: '舆情大数据',
        target: '用户分析',
    },
    {
        source: '舆情大数据',
        target: '话题分析',
    },
    {
        source: '舆情大数据',
        target: '评论分析',
    },
    {
        source: '校园大数据',
        target: '图书馆分析',
    },
    {
        source: '图书馆分析',
        target: '图书分析',
    },
    {
        source: '图书馆分析',
        target: '借阅分析',
    },
    {
        source: '图书馆分析',
        target: '借阅排行',
        value: 'DNA',
    },
    {
        source: '图书馆分析',
        target: '图书收录',
    },
    {
        source: '借阅排行',
        target: '图书收录',
    },
];
option = {
    backgroundColor: '#1a4377',
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    color: ['#83e0ff', '#45f5ce', '#b158ff'],
    series: [
        {
            type: 'graph',
            layout: 'force',
            force: {
                repulsion: 1500,
                edgeLength: 30,
            },
            roam: true,
            label: {
                normal: {
                    show: true,
                },
            },
            data: points,
            links: links,
            lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 5,
                    curveness: 0,
                },
            },
            categories: [{ name: '0' }, { name: '1' }, { name: '2' }],
        },
    ],
};
