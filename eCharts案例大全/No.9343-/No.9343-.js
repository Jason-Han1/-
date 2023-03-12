option = {
    legend: {
        bottom: 'bottom',
        icon: 'roundRect'
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['10.23', '10.24', '10.25', '10.26', '10.27', '10.28', '10.29'],
    },
    yAxis: {
        axisLine: {
            show: false,
            lineStyle: {
                color: '#9f9191',
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: '#d0c5c5'
            },

        },
        type: 'value',
        show: true

    },
    series: [{
        name: '淘币',
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {
            color: '#e8f4ff'
        },
        lineStyle: {
            color: '#51abff'
        },
        // smooth: true,
        itemStyle: {
            normal: {
                color: '#51abff',
                borderWidth: 5,
                borderColor: "#51abff"
            }
        },
    }]
};