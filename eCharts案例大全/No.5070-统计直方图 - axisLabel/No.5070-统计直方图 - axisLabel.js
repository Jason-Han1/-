option = {
    title: {
        left: 'center',
        text: '统计直方图'
    },
    xAxis: {
        type: 'category',
        name: '航速',
        nameLocation: 'middle',
        nameGap: 35,
        axisLabel: {
            interval: 0
        },
        data:['[8.256, 9.256)',
            '[9.256, 10.256)',
            '[10.256, 11.256)',
            '[11.256, 12.256)',
            '[12.256, 13.256)',
            '[13.256, 14.256)'],
    },
    yAxis: {
        name: '频数',
        nameLocation: 'middle',
        nameGap: 50,
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
            top: '90%',
            start: 0,
            end: 100
        },
        {
            type: 'slider',
            show: true,
            yAxisIndex: [0],
            left: '93%',
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
        data: ['实测']
    },
    grid: {
        left: '10%',
        right: '10%',
        bottom: '15%',
        containLabel: true
    },
    series: [{
            name: '实测',
            symbol: 'none',
            data: [5, 22, 18, 28, 3, 62],
            type: 'bar',
        },
    ]
};            