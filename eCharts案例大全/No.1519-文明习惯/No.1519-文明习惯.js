option = {
    tooltip: {
        trigger: 'axis',
    },
    legend: {},
    title: {
        text: '文明习惯',
    },
    xAxis: {
        type: 'category',
    },
    yAxis: {},
    dataset: {
        source: [
            ['className', '文明课间', '文明用语', '文明用餐'],
            ['六（1）', 220, 182, 191],
            ['六（2）', 120, 282, 191],
            ['六（3）', 200, 182, 198],
            ['六（4）', 220, 192, 191],
            ['六（5）', 220, 182, 181],
        ],
    },
    series: [
        {
            type: 'bar',
            stack: 'a',
        },
        {
            type: 'bar',
            stack: 'a',
        },
        {
            type: 'bar',
            stack: 'a',
        },
    ],
};
