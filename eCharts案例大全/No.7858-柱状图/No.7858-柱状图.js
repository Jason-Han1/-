option = {
    legend: {},
    tooltip: {},
    dataset: {
        source: [
            ['product', '2015', '2016', '2017'],
            ['Matcha Latte', 43.3, 85.8, 93.7],
            ['Milk Tea', 83.1, 73.4, 55.1],
            ['Cheese Cocoa', 86.4, 65.2, 82.5],
            ['Walnut Brownie', 72.4, 53.9, 39.1]
        ]
    },
    xAxis: {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true
        }
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
    },
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{
            type: 'bar',
            stack: 'a',
            name: '2015',
            itemStyle: {
                barBorderRadius: 8,
                color: '#4c84d2'
            }
        },
        {
            type: 'bar',
            stack: 'a',
            name: 'product',
            itemStyle: {
                color: '#cfe2fc'
            }
        },
        {
            type: 'bar',
            stack: 'b',
            name: '2016',
            itemStyle: {
                color: '#29c3c1'
            }
        },
        {
            type: 'bar',
            stack: 'b',
            name: 'product',
            itemStyle: {
                color: '#def2f2'
            }
        },
        {
            type: 'bar',
            stack: 'c',
            name: '2017',
            itemStyle: {
                color: '#8084d9'
            }
        },
        {
            type: 'bar',
            stack: 'c',
            name: 'product',
            itemStyle: {
                color: '#e6e7fc'
            }
        },
    ]
};