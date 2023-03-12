var min = [0, 0, 0];
var max = [100, 150, 300];
var splitNumber = [10, 5, 5] ;
option = {
    tooltip: {},
    toolbox: {
        show: false
    },
    series: [{
        name: '药占比',
        type: 'gauge',
        z: 3,
        min: min[0],
        max: max[0],
        splitNumber: splitNumber[0],
        radius: '60%',
        axisLine: {
            lineStyle: {
                width: 3
            }
        },
        axisTick: {
            length: 1,
            lineStyle: {
                color: 'auto'
            }
        },
        splitLine: {
            length: 10,
            lineStyle: {
                color: 'auto'
            }
        },
        axisLabel: {},
        title: {
            fontWeight: 'bolder',
            fontSize: 15,
            offsetCenter: [0, '80%']
        },
        pointer: {
            width: 3
        },
        detail: {
            fontSize: 15,
            offsetCenter: [0, '65%']
        },
        data: [{
            value: 40,
            name: '药占比'
        }]
    }, {
        name: '基药占比',
        type: 'gauge',
        center: ['20%', '55%'],
        radius: '45%',
        min: min[1],
        max: max[1],
        endAngle: 45,
        splitNumber: splitNumber[1],
        axisLine: {
            lineStyle: {
                width: 2
            }
        },
        axisTick: {
            length: 1,
            lineStyle: {
                color: 'auto'
            }
        },
        splitLine: {
            length: 8,
            lineStyle: {
                color: 'auto'
            }
        },
        pointer: {
            width: 2
        },
        title: {
            fontSize: 15,
            offsetCenter: [0, '80%']
        },
        detail: {
            fontSize: 15,
            offsetCenter: [0, '65%']
        },
        data: [{
            value: 12,
            name: '基药占比',

        }]
    },  {
        name: '处方占比',
        type: 'gauge',
        center: ['80%', '55%'],
        radius: '45%',
        min: min[2],
        max: max[2],
        startAngle: 135,
        endAngle: -45,
        splitNumber: splitNumber[2],
        axisLine: {
            lineStyle: {
                width: 2
            }
        },
        axisTick: {
            splitNumber: 1,
            length: 2,
            lineStyle: {
                color: 'auto'
            }
        },
        axisLabel: {},
        splitLine: {
            length: 8,
            lineStyle: {
                color: 'auto'
            }
        },
        pointer: {
            width: 2
        },
        title: {
            fontSize: 15,
            offsetCenter: [0, '80%']
        },
        detail: {
            fontSize: 15,
            offsetCenter: [0, '65%']
        },
        data: [{
            value: 30,
            name: '处方占比',
        }]    
    }]
};