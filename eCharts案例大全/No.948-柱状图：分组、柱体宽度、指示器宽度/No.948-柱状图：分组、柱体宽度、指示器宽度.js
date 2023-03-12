option = {
    legend: {},
    tooltip: {
        trigger: 'axis',
    },
    dataset: {
        source: [
            ['product', '2015', '2016', '2017'],
            ['Matcha Latte', 43.3, 85.8, 93.7],
            ['Milk Tea', 83.1, 73.4, 55.1],
            ['Cheese Cocoa', 86.4, 65.2, 82.5],
            ['Walnut Brownie', 72.4, 53.9, 39.1],
        ],
    },
    xAxis: {
        type: 'category',
        axisPointer: {
            type: 'line',
            lineStyle: {
                color: {
                    type: 'line',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgba(55, 66, 77, 0.2)',
                        },
                    ],
                },
                type: 'solid',
                width: 100,
            },
        },
    },
    yAxis: {},
    series: [
        { type: 'bar', barWidth: 20 },
        { type: 'bar', barWidth: 20 },
        { type: 'bar', barWidth: 20 },
    ],
};
