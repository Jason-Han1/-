option = {
    tooltip: {},
    xAxis: {
        type: 'value',
        show: false
    },
    yAxis: {
        type: 'category',
        show: false,
        data: ['进度']
    },
    series: [{
        type: 'bar',
        data: [60],
        barWidth: 30,
        z: 10,
        label: {
            show: true,
            position: 'right',
            formatter: '{c}%',
            color: '#60acfc',
            fontSize: 16,
            verticalAlign: 'middle'
        },
        itemStyle: {
            color: '#60acfc',
        }
    }, {
        type: 'bar',
        data: [100],
        tooltip: {
            show: false
        },
        silent: true,
        barWidth: 30,
        barGap: '-100%',
        itemStyle: {
            color: 'none',
            borderColor: '#60acfc',
            borderWidth: 3,
            barBorderRadius: 5
        }
    }]
};