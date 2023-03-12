option = {
    title: {
        text: '一天用电量分布',
        subtext: '纯属虚构'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} W'
        },
        axisPointer: {
            snap: true
        }
    },
    visualMap: [
        {
            dimension: 0,
            seriesIndex: 0,
            show: false,
            type: 'piecewise',
            pieces: [{
                lte: 6,
                color: 'green'
            }, {
                gt: 14,
                lte: 17,
                color: 'red'
            }],
            outOfRange: {
                color: ['#121122'],
                symbolSize: [0]
            }
        },
        {
            dimension: 0,
            seriesIndex: 1,
            type: 'piecewise',
            show: false,
            pieces: [{
                lte: 5,
                color: 'green'
            }, {
                gt: 7,
                lte: 8,
                color: 'red'
            }],
            outOfRange: {
                color: ['blue'],
                symbolSize: [10]
            }
        }
    ],
    series: [
        {
            name: '用电量',
            type: 'line',
            smooth: true,
            areaStyle: {
                // color: 'black',
                opacity: 0.1,
            },
            data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
        },
        {
            name: '用电量',
            type: 'line',
            smooth: true,
            areaStyle: {
                // color: '#ddd',
                opacity: 0.1,
            },
            data: [-200, -280, -250, -260, -270, -300, -550, -500, -400, -390, -380, -390, -400, -500, -600, -750, -800, -700, -600, -400],
        }
    ]
};
