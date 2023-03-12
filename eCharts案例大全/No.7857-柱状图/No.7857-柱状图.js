option = {
    dataset: {
        source: [
            ['score', 'amount', 'product'],
            [89.3, 58212, 'Matcha Latte'],
            [57.1, 78254, 'Milk Tea'],
            [74.4, 41032, 'Cheese Cocoa'],
            [50.1, 12755, 'Cheese Brownie'],
            [89.7, 20145, 'Matcha Cocoa'],
            [68.1, 79146, 'Tea'],
            [19.6, 91852, 'Orange Juice'],
            [10.6, 101852, 'Lemon Juice'],
            [32.7, 20112, 'Walnut Brownie']
        ]
    },
    grid: {
        containLabel: true
    },
    xAxis: {
        name: 'amount'
    },
    yAxis: {
        type: 'category'
    },
    series: [{
            type: 'bar',
            label: {
                show: true,
                position: 'insideBottomLeft',
                offset: [0, 30],
                color: '#8084d9',
                fontWeight: 'bold',
                fontSize: 17
            },
            itemStyle: {
                color: '#8084d9'
            },
            barWidth: 15,
            zlevel: 1,
        },
        {
            type: 'bar',
            itemStyle: {
                color: 'rgba(140,145,238,0.3)',

            },
            emphasis: {
                itemStyle: {
                    color: 'rgba(140,145,238,0.3)',

                },
            },
            barGap: '-100%',
            barWidth: '70%',
            data: [
                101852, 101852,
                101852, 101852, 101852, 101852, 101852, 101852, 101852
            ]
        }
    ]
};