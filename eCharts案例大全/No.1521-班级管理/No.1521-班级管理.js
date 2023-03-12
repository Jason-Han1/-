const colors = ['#3C7CE6', '#16D7A0', '#F1C808', '#EB3A67', '#BB14E4'];
option = {
    legend: {},
    title: {
        text: '班级管理',
    },
    tooltip: {
        trigger: 'axis',
    },
    xAxis: {
        type: 'category',
    },
    dataset: {
        source: [
            ['className', '班级文化', '眼保健操', '爱护公物', '手机管理', '离班离校'],
            ['六（1）', 71.1, 80.4, 65.1, 53.3, 57],
            ['六（2）', 86.5, 92.1, 85.7, 83.1, 89],
            ['六（3）', 74.1, 67.2, 79.5, 86.4, 99],
            ['六（4）', 81.1, 86.5, 92.1, 53.3, 100],
            ['六（5）', 51.1, 60.4, 75.1, 73.3, 88],
        ],
    },
    yAxis: {},
    series: colors.map((m) => {
        return {
            type: 'line',
            smooth: true,
            symbol: 'emptyCircle',
            itemStyle: {
                lineStyle: {
                    color: m,
                },
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    global: false,
                    colorStops: [
                        {
                            offset: 0,
                            color: m,
                        },
                        { offset: 1, color: 'transparent' },
                    ],
                },
            },
        };
    }),
};
