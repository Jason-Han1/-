option = {
    series: [
        {
            z:5,
        name: 'Pressure',
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 100,
        detail: {
            formatter: '{value}'
        },
        pointer: {show: false},
        splitLine: {show: false},
        axisLabel : {show: false},
        axisLine: {
            lineStyle: {
                color: [ 
                    [.4, '#FFC227'],
                    [1, '#92E1FF']
                ],
                width: 3
            }
        },
        axisTick: {
            distance: -10,
            length: 10,
            lineStyle: { color: 'auto' }
        },
        // progress: {
        //     show: true,
        //     width: 20,
        //     // overlap:false
        // },
        detail: {
            show: false,
        },
    },
        {
            z: 10,
        name: '外圈白色刻度',
        type: 'gauge',
        radius: '90%',
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 100,
        detail: {
            formatter: '{value}'
        },
        pointer: {show: false},
        splitLine: {
            distance: -10,
                length: 30, //刻度节点线长度
                lineStyle: {
                    width: 5,
                    color: "#fff"
                } //刻度节点线
                },
        axisLabel : {show: false},
        axisLine: {show: false
        },
        axisTick: {
            show: false,
        },
        detail: {
            show: false,
        }
    },
        {
            z:5,
        name: '外圈进度',
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 100,
        radius: '90%',
        detail: {
            formatter: '{value}'
        },
        pointer: {show: false},
        splitLine: {show: false},
        axisLabel : {show: false},
        axisLine: {
            lineStyle: {
                color: [ [1, '#92E1FF'] ],
                width: 30
            }
        },
        progress: {
            show: true,
            width: 30,
            // overlap:false
        },
        data: [{
            value: 40,
            name: '本地人口',
            itemStyle: {
                color: '#FFC227'
            }
        }],
        axisTick:{show: false},
        detail: {
            show: false,
        },
    }
    ]
};
