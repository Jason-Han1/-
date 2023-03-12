let xAxis = ['湖北', '江苏', '江西']
option = {
    xAxis: [{
        type: 'category',
        data: xAxis,
    }, {
        type: 'category',
        data: xAxis,
        show: false
    }],
    yAxis: [{
        type: 'value',
        max: 10
    }],
    series: [{
        name: '2018',
        type: 'bar',
        data: [2, 5, 7],
        zlevel: 1
    }, {
        name: '2019',
        type: 'bar',
        data: [5, 7, 9],
        zlevel: 1
    },{
        name: '三角形',
        type: 'pictorialBar',
        symbolSize: 50,
        symbolPosition: 'end',
        symbolKeepAspect: true,
        symbolOffset: ['-135%', '-100%'],
        data: [{
            value: 5,
            symbol: 'path://M855.16288 682.99776 171.14112 682.99776l342.016-341.99552L855.16288 682.99776z',
            itemStyle: {
                color: 'red'
            }
        }, {
            value: 7,
            symbol: 'path://M512 853.333333 0 170.666667l1024 0L512 853.333333z',
            itemStyle: {
                color: 'green'
            }
        }, {
            value: 9,
            symbol: 'path://M855.16288 682.99776 171.14112 682.99776l342.016-341.99552L855.16288 682.99776z'
        }],
        label: {
            show: true,
            position: ['20%', -20]
        },
    }, {
        name: '线1',
        type: 'bar',
        barGap: '-20%',
        barWidth: 1,
        xAxisIndex: 1,
        data: [5, 7, 9],
        itemStyle: {
            color: 'orange'
        }
    }, {
        name: '线2',
        type: 'bar',
        xAxisIndex: 1
    }]
};