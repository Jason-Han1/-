option = {
    legend: {},
    tooltip: {trigger: 'axis'},
    toolbox: {
        show: true,
        feature: {
            dataView: {readOnly: true},
            magicType: {type: ['line', 'bar']},
            saveAsImage: {}
        }
    },
    dataset: {
        source: [
            ['product', '2015', '2016', '2017'],
            ['Matcha Latte', 43.3, 85.8, 93.7],
            ['Milk Tea', 83.1, 73.4, 55.1],
            ['Cheese Cocoa', 86.4, 65.2, 82.5],
            ['Walnut Brownie', 72.4, 53.9, 39.1]
        ]
    },
    
    xAxis: {type: 'category'},
    yAxis: {},

    series: [
        {type: 'line'},
        {type: 'line'},
        {type: 'line'}
    ]
};