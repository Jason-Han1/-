option = {
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
        type: 'category'
    },
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{
            type: 'bar'
        },
        {
            type: 'bar'
        },
        {
            type: 'bar'
        },
        {
            type: 'treemap',
            left: 'center',
            top: 0,
            color: ['#fff'],
            width: '100%',
            roam: false,
            height: 50,
            itemStyle: {
                borderWidth: 1,
                borderColor: '#ccc',
                colorAlpha: 0.001
            },
            label: {
                fontSize: 18,
                show: true,
                color: '#f90'
            },
            breadcrumb: {
                show: false
            },
            nodeClick: false,
            tooltip: {
                show: false
            },
            data: [{
                name: '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试',
                value: ''
            }]
        }
    ]
};