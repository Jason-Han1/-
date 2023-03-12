option = {
    title: {
        left: 'center',
        text: '散点图'
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
    grid: {
        left: '10%',
        right: '10%',
        bottom: '15%',
        containLabel: true
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
    xAxis: {
        type: 'value',
        name: '航速',
        nameLocation: 'middle',
        nameGap: 30,
        scale: true,
    },
    yAxis: {
        type: 'value',
        name: '功率',
        scale: true,
    },
    series: [{
        symbolSize: 20,
        data: [
            [10.0, 8.04],
            [8.0, 6.95],
            [13.0, 7.58],
            [9.0, 8.81],
            [11.0, 8.33],
            [14.0, 9.96],
            [6.0, 7.24],
            [4.0, 4.26],
            [12.0, 10.84],
            [7.0, 4.82],
            [5.0, 5.68]
        ],
        type: 'scatter'
    }]
};
