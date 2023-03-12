let val=63
let dataVal=val/100
option = {
    backgroundColor: '#0d1e1a',
    series: [
        {
            name: '最外层',
            type: 'gauge',
            radius: '106%',
            center: ['50%', '70%'],
            splitNumber: 0, //刻度数量
            startAngle: 180,
            endAngle: 0,
            min: 0, //最小刻度
            max: 100, //最大刻度
            z: 0,
            zlevel: 0,
            axisLine: {
                show: true,
                lineStyle: {
                    // 轴线样式
                    width: 6, // 宽度
                    color: [[1, 'rgba(2, 56, 57, 1)']],
                },
            },
            //分隔线样式
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            pointer: {
                show: true,
                length: '80%',
                width: '2%',
            },
        },
        {
            name: '数据显示',
            type: 'gauge',
            radius: '100%',
            center: ['50%', '70%'],
            splitNumber: 2, //刻度数量
            startAngle: 180,
            endAngle: 0,
            min:0, //最小刻度
            max: 100, //最大刻度
            z: 2,
            zlevel: 2,
            axisLine: {
                show: true,
                lineStyle: {
                    // 轴线样式
                    width: 80, // 宽度
                    color: [
                        [
                            dataVal,
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                {
                                    offset: 0,
                                    color: 'rgba(1, 54, 55, 1)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(254, 210, 69, 1)',
                                },
                            ]),
                        ],
                        [1, 'rgba(1, 54, 55, 0)'],
                    ],
                },
            },
            //分隔线样式。
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: true,
                color: '#4b695e',
                fontSize: 15,
                distance:0,
                formatter: function (v) {
                    return v;
                },
            },
            axisTick: {
                show: true,
                splitNumber: 20,
                distance: -15,
                lineStyle: {
                    color: 'rgba(21, 136, 138, 1)',
                    width: 2,
                },
                length: -10,
            },
            pointer: {
                show: true,
                length: '80%',
                width: '2%',
                itemStyle: {
                    color: 'rgba(254, 210, 69, 1)',
                },
            },
            //仪表盘详情，用于显示数据。
            detail: {
                show: true,
                offsetCenter: [0, '13%'],
                color: '#ffffff',
                textStyle: {
                    fontSize: 60,
                    color: '#4aca96',
                },
            },
            data: [val],
        },
        {
            name: '背景内',
            type: 'gauge',
            radius: '93%',
            center: ['50%', '70%'],
            splitNumber: 0, //刻度数量
            startAngle: 180,
            endAngle: 0,
            min: 0, //最小刻度
            max: 100, //最大刻度
            z: 1,
            zlevel: 1,
            axisLine: {
                show: true,
                lineStyle: {
                    // 轴线样式
                    width: 52, // 宽度
                    color: [
                        [
                            dataVal,
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                {
                                    offset: 0,
                                    color: 'rgba(1, 54, 55, 1)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(254, 210, 69, 1)',
                                },
                            ]),
                        ],
                        [1, 'rgba(1, 54, 55, 1)'],
                    ],
                },
            },
            //分隔线样式。
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            pointer: {
                show: true,
                length: '80%',
                width: '2%',
            },
        },
        {
            name: '背景-外',
            type: 'gauge',
            radius: '100%',
            center: ['50%', '70%'],
            splitNumber: 0, //刻度数量
            startAngle: 180,
            endAngle: 0,
            min: 0, //最小刻度
            max: 100, //最大刻度
            z: 0,
            zlevel: 0,
            axisLine: {
                show: true,
                lineStyle: {
                    // 轴线样式
                    width: 30, // 宽度
                    color: [
                        [
                            dataVal,
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                {
                                    offset: 0,
                                    color: 'rgba(1, 54, 55, 1)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(254, 210, 69, 1)',
                                },
                            ]),
                        ],
                        [1, 'rgba(0, 64, 65, 1)'],
                    ],
                },
            },
            //分隔线样式。
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            pointer: {
                show: true,
                length: '80%',
                width: '2%',
            },
        },
    ],
};
