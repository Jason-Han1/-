var data1dim = [];

for (var i = 0; i < 2000; i++) {
    data1dim.push([i * Math.cos(i / 100), i * Math.sin(i / 100)]);
}

option = {
    animation: false,
    legend: {
        data: ['line', 'line2', 'line3']
    },
    tooltip: {

    },
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: 'line2',
            type: 'line',
            stack: 'all',
            symbol: 'none',
            data: data1dim
        }
    ],
    dataZoom: [
        {
            xAxisIndex: 0,
            filterMode: 'empty'
        },
        {
            yAxisIndex: 0,
            filterMode: 'empty'
        },
        {
            type: 'inside',
            xAxisIndex: 0,
            filterMode: 'empty'
        },
        {
            type: 'inside',
            yAxisIndex: 0,
            filterMode: 'empty'
        }
    ]
}