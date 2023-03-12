option = {
    title: {
        left: 'center',
        text: '对水航程/对地航程'
    },
    xAxis: {
        type: 'category',
        data: ['2020-03-01 00:00:00', '2020-03-01 00:00:10', '2020-03-01 00:00:16', '2020-03-01 00:00:22', '2020-03-01 00:00:28', '2020-03-01 00:00:30', '2020-03-01 00:00:39']
    },
    yAxis: {
        name: '航程(nm)',
        scale: true,
        type: 'value'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        },
        backgroundColor: 'rgba(245, 245, 245, 0.8)',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        textStyle: {
            color: '#000'
        },
    },
    axisPointer: {
        link: {
            xAxisIndex: 'all'
        },
        label: {
            backgroundColor: '#777'
        }
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: false
            },
            brush: {
                type: ['lineX', 'clear']
            }
        }
    },
    dataZoom: [{
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            top: '85%',
            start: 0,
            end: 100
        },
        {
            type: 'slider',
            show: true,
            yAxisIndex: [0],
            left: '92%',
            start: 0,
            end: 100
        },
        {
            type: 'inside',
            xAxisIndex: [0],
            start: 0,
            end: 100
        },
        {
            type: 'inside',
            yAxisIndex: [0],
            start: 0,
            end: 100
        }
    ],

    legend: {
        top: 30,
        data: ['对水航程', '对地航程']
    },
    grid: {
        left: '10%',
        right: '10%',
        bottom: '15%',
        containLabel: true
    },
    series: [{
            name: '对水航程',
            symbol: 'none',
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
        },
        {
            name: '对地航程',
            symbol: 'none',
            data: [182, 193, 191, 194, 190, 130, 120],
            type: 'line',
        }
    ]
};
console.log(JSON.stringify(option))