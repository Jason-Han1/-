var data = [
    [123, 3],
    [256, 6],
    [389, 12],
    [465, 10],
]

option = {
    title: {
        text: '折线与散点图'
    },

    xAxis: [{
        type: 'value',
    }],
    yAxis: {
        type: 'value',
    },
    series: [

        {
            type: 'line',
            xAxisIndex: 0,
            data: data
        },
        {
            type: 'scatter',
            xAxisIndex: 0,
            data: [
                [263, 9]
            ]
        }

    ]
};