option = {

    tooltip: {
        show: false
    },
    grid: {
        top: 80,
        bottom: 30
    },
    xAxis: {
        type: 'value',
        position: 'top',
        show: false,
        max: 1,
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
    },
    series: [{
        type: 'bar',
        label: {
            show: false,
        },
        barWidth: 40,
        data: [0.7],
        markLine: {
            symbol: 'none',

            data: [{
                xAxis: 0.5, 
                lineStyle: {
                    color: "#eecb5f",
                    type: 'solid'
                },
                label: {
                    formatter: '{c}',
                    position: 'start'
                }
            }, {
                xAxis: 0.6, 
                lineStyle: {
                    color: "#1e56a0",
                    type: 'solid'
                },
                label: {
                    formatter: '{c}',
                    position: 'end'
                }
            }]
        }
    }]
};