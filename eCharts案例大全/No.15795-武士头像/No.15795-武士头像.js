option = {

    title: {
        text: '武士头像',
        left: '6%'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        left: '20%',
        data: ['x', 'y']
    },
    xAxis: {
        type: 'category',

        boundaryGap: false,
        splitLine: {
            show: false
        },
        axisLabel: {
            interval: 0
        },
        data: ['1', '2', '3', '4', '5']
    },
    grid: {
        left: '6%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: {

    },
    series: [{
            name: 'x',
            type: 'line',
            smooth: true,
            lineStyle: {
                normal: {
                    width: 0
                }
            },
            areaStyle: {
                normal: {
                    opacity: "0.6",
                }
            },
            data: [-7, 0, 10, 0, -7]
        },

        {
            name: 'y',
            type: 'line',
            smooth: true,
            lineStyle: {
                normal: {
                    width: 0
                }
            },
            areaStyle: {
                normal: {
                    opacity: "0.6",
                }
            },
            data: [0, -10, 10, -10, 0]
        }
    ]
};