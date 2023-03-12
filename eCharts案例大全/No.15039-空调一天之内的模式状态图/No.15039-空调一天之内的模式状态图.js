var option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: 'black',
            },
            lineStyle: {
                color: '#666',
            },
        },
    },
    grid: {
        top: '10%',
        bottom: '10%',
        borderWidth: 0,
    },
    xAxis: [{
        type: 'category',
        boundaryGap: 0,
        data: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00', ],
        splitLine: {
            show: false,
        },
    }, {
        type: 'value',
        gridIndex: 0,
        axisLabel: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
    }],
    yAxis: [{
        interval: 15,
        show: false,
        min: 0,
        max: 50,
        position: 'right',
        splitLine: {
            show: false,
        },
        axisLabel: {
            show: true,
        },
    }, {
        type: 'category',
        position: 'left',
        axisLabel: {
            show: true,
        },
        splitLine: {
            show: false,
        },
        data: ['待机模式', '制冷模式', '制热模式', '干燥模式', '送风模式'],
    }],
    series: [{
        type: 'scatter',
        smooth: false,
        xAxisIndex: 1,
        yAxisIndex: 0,
    }, {
        type: 'line',
        name: '待机模式',
        symbol: 'none',
        z: 5,
        lineStyle: {
            normal: {
                width: 0,
                opacity: 0,
            },
        },
        areaStyle: {
            normal: {
                color: '#dc77dc',
            },
        },
        data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    }, {
        type: 'line',
        name: '制冷模式',
        symbol: 'none',
        z: 4,
        lineStyle: {
            normal: {
                width: 0,
                opacity: 0,
            },
        },
        areaStyle: {
            normal: {
                color: '#7b9ce1',
            },
        },
        data: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    }, {
        type: 'line',
        name: '制热模式',
        symbol: 'none',
        z: 3,
        lineStyle: {
            normal: {
                width: 0,
                opacity: 0,
            },
        },
        areaStyle: {
            normal: {
                color: '#e0bc78',
            },
        },
        data: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    }, {
        type: 'line',
        name: '干燥模式',
        symbol: 'none',
        z: 2,
        lineStyle: {
            normal: {
                width: 0,
                opacity: 0,
            },
        },
        areaStyle: {
            normal: {
                color: '#7b9ce1',
            },
        },
        data: [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40],
    }, {
        type: 'line',
        name: '送风模式',
        symbol: 'none',
        z: 1,
        lineStyle: {
            normal: {
                width: 0,
                opacity: 0,
            },
        },
        areaStyle: {
            normal: {
                color: '#75d874',
            },
        },
        data: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
    }, {
        name: '空调状态',
        type: 'line',
        symbol: 'none',
        step: 'start',
        z: 10,
        itemStyle: {
            normal: {
                color: '#000',
            },
        },
        lineStyle: {
            normal: {
                width: 3,
            },
        },
        label: {
            normal: {
                show: true,
            },
        },
        data: [5, 5, 5, 5, 5, 5, 5, 15, 15, 15, 15, 45, 45, 45, 45, 25, 25, 25, 25, 15, 15, 15, 5, 5],
    }],
};