option = {
    tooltip: {},
    toolbox: {
        show: false,
        feature: {
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    series: [{
            name: '功率',
            type: 'gauge',
            z: 3,
            min: 0,
            max: 2000,
            splitNumber: 10,
            radius: '80%',
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
            },
            pointer: {
                width: 3
            },
            detail: {
                fontSize: 15,
            },
            data: [{
                value: 40,
                name: '功率'
            }]
        },
        {
            name: '电压表',
            type: 'gauge',
            center: ['20%', '55%'],
            radius: '60%',
            min: 0,
            max: 2000,
            endAngle: 45,
            splitNumber: 5,
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
            },
            detail: {
                // fontWeight: 'bolder',
                fontSize: 15,
            },
            data: [{
                value: 1200,
                name: '电压',

            }]
        },
        {
            name: '电流表',
            type: 'gauge',
            center: ['80%', '55%'],
            radius: '60%',
            min: 0,
            max: 2000,
            startAngle: 135,
            endAngle: -45,
            splitNumber: 5,
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
                show: true,
                fontSize: 15,

            },
            detail: {
                show: true,
                fontSize: 15,
            },
            data: [{
                value: 300,
                name: '电流',
            }]
        }
    ]
};