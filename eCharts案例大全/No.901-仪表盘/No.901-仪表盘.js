let value = 256;
/*let value = -(100 + (256-100)/2);
let dataVal=value/600;*/
let min = -600;
let max = 600;
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
            min: min, //最小刻度
            max: max, //最大刻度
            z: 0,
            zlevel: 0,
            axisLine: {
                show: true,
                lineStyle: {
                    // 轴线样式
                    width: 6, // 宽度
                    color: [[1, 
                    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                {
                                    offset: 0,
                                    color: '#FEAD54',
                                },
                                {
                                    offset: 0.5,
                                    color: '#30C989',
                                },
                                {
                                    offset: 1,
                                    color: '#FEAD54',
                                },
                            ])
                    ]],
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
            splitNumber: 6, //刻度数量
            startAngle: 180,
            endAngle: 0,
            min: min, //最小刻度
            max: max, //最大刻度
            z: 2,
            zlevel: 2,
            axisLine: {
                show: true,
                lineStyle: {
                    // 轴线样式
                    width: 80, // 宽度
                    color: [
                        [
                            1,
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                {
                                    offset: 0,
                                    color: '#FEAD54',
                                },
                                {
                                    offset: 0.5,
                                    color: '#30C989',
                                },
                                {
                                    offset: 1,
                                    color: '#FEAD54',
                                },
                            ]),
                        ],
                        [1, 'rgba(1, 54, 55, 0)'],
                    ],
                },
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: true,
                color: '#4b695e',
                fontSize: 15,
                distance: 0,
                /*formatter: function (v) {
                    return v;
                },*/
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
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                        {
                            offset: 0,
                            color: '#FEAD54',
                        },
                        {
                            offset: 1,
                            color: '#30C989',
                        },
                    ]),
                },
            },
            //仪表盘详情，用于显示数据。
            detail: {
                show: true,
                offsetCenter: [0, '13%'],
                textStyle: {
                    fontSize: 60,
                    color: '#4aca96',
                },
            },
            data: [value],
        },
    ],
};
