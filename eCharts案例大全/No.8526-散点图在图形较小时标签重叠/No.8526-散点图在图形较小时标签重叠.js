option = {
    xAxis: {type: 'value'},
    yAxis: {type: 'value'},
    dataset: {
        dimensions: ['xVal', 'yVal'],
        source: [
            { xVal: 1, yVal: 11.5, label: 'qwrqwrqwrqwr' },
            { xVal: 3, yVal: 12, label: 'asdfafasfasf' },
            { xVal: 5, yVal: 23, label: 'qrqwrqwr' },
            { xVal: 6, yVal: 34, label: 'asdasdasd' },
            { xVal: 2, yVal: 12, label: 'asdasdasdasd' },
            { xVal: 3, yVal: 32, label: 'asdasdasd' },
            { xVal: 2, yVal: 23, label: 'sadasdasd' },
            { xVal: 6, yVal: 21, label: 'asdawqer' }
        ]    
    },
    series: [{
        symbolSize: 15,
        dimensions: ['xVal', 'yVal'],
        type: 'scatter',
        label: {
            formatter: (params) => {
                return params.value.label;
            },
            position: 'bottom',
            show: true
          }
    }]
}