option = {
    animation: false,
    grid: {
        top: 50,
        bottom: 50,
        height: 40
    },
    xAxis: [{
        show: false,
        type: 'category',
        data: ['过低', '稍低', '普通', '良好', '过高']
    }, {
        show: false,
        type: 'value',
        min: -100,
        max: 100
    }],
    yAxis: {
        show: false,
        type: 'value'
    },
    series: [{
        type: 'bar',
        barWidth: '100%',
        silent: true,
        data: [
            {value: 1, itemStyle: {color: '#e83d38'}, label: {show: true, formatter: '{b}', fontSize: 16}},
            {value: 1, itemStyle: {color: '#ed7527'}, label: {show: true, formatter: '{b}', fontSize: 16}},
            {value: 1, itemStyle: {color: '#e8c22a'}, label: {show: true, formatter: '{b}', fontSize: 16}},
            {value: 1, itemStyle: {color: '#86c23d'}, label: {show: true, formatter: '{b}', fontSize: 16}},
            {value: 1, itemStyle: {color: '#209d3b'}, label: {show: true, formatter: '{b}', fontSize: 16}}
        ],
    }, {
        type: 'scatter',
        symbol: 'rect',
        symbolSize: [2, 40],
        silent: true,
        xAxisIndex: 1,
        markPoint: {
            symbol: 'triangle',
            symbolSize: 10,
            symbolRotate: 180,
            symbolOffset: [0, '-50%'],
            itemStyle: {color: '#000'},
            label: {
                position: 'top',
                backgroundColor: '#000',
                color: '#fff',
                padding: [6, 10],
                distance: 0,
                borderRadius: 5
            },
            data: [
                {value: 1.09, coord: [1.09, 1]}
            ]
        }
    }]
};
