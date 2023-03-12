option = {
    legend: {},
    tooltip: {},
    dataset: {
        source: [
            ["province", "18-25岁", "26-35岁", "36-59岁", "60岁以上"],
            ["安徽", 3159, 11648, 23324, 783],
            ["浙江", 1957, 3349, 6975, 1542],
            ["上海", 7, 10, 93, 40],
            ["北京", 0, 0, 26, 8]
        ]
    },
    yAxis: {
        type: 'category'
    },
    xAxis: {
        position: 'top'
    },
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{
            type: 'bar',
            stack: '总量'
        },
        {
            type: 'bar',
            stack: '总量'
        },
        {
            type: 'bar',
            stack: '总量'
        },
        {
            type: 'bar',
            stack: '总量'
        },
    ]
};