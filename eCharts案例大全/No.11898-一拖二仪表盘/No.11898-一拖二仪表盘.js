var min = [0, 0, 0];
var max = [220, 100, 10];
var splitNumber = [11, 5, 5] ;
option = {
    tooltip: {},
    toolbox: {
        show: false
    },
    series: [{
        name: '速度',
        type: 'gauge',
        center: ['35%', '50%'],
        z: 3,
        min: min[0],
        max: max[0],
        splitNumber: splitNumber[0],
        radius: '60%',
        axisLine: {
            lineStyle: {
                width: 5
            }
        },
        axisTick: {
            length: 1,
            lineStyle: {
                color: 'auto'
            }
        },
        splitLine: {
            length: 20,
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
            name: '速度'
        }]
    }, {
        name: '通行效率',
        type: 'gauge',
        center: ['70%', '50%'],
        radius: '45%',
        startAngle: -25,
        endAngle: -145,
        min: min[1],
        max: max[1],
        //endAngle: 45,
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
            offsetCenter: [0, '130%']
        },
        detail: {
            fontSize: 15,
            offsetCenter: [0, '65%']
        },
        data: [{
            value: 32,
            name: '通行效率',

        }]
    },  {
        name: '拥堵指数',
        type: 'gauge',
        center: ['70%', '50%'],
        radius: '45%',
        min: min[2],
        max: max[2],
        startAngle: 145,
        endAngle: 25,
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
            color:'#8EC6FA',
            fontSize: 15,
            offsetCenter: [0, '-120%']
        },
        detail: {
            show:false,
            color:'#8EC6FA',
            fontSize: 15,
            offsetCenter: [0, '65%']
        },
        data: [{
            value: 6,
            name: '拥堵指数',
        }]    
    }]
};