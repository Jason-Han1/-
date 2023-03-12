let max = 90;
let current = 70;
let percent = ((current / max) * 100 + '').slice(0, 5) + '%';
option = {
    backgroundColor: '#07182e',
    series: [
        //刻度
        {
            name: '刻度',
            type: 'gauge',
            radius: '85%',
            splitNumber: 10, //刻度数量
            min: 0,
            max: 100,
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 0,
                    shadowBlur: 0,
                    color: [[1, '#ffffff']],
                },
            },
            axisLabel: { show: true,color:"#fff"},
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#ffffff',
                    width: 1,
                },
                length: 10,
            },
            splitLine: {
                show: true,
                length: 20,
                lineStyle: {
                    color: '#ffffff',
                },
            },
            detail: { show: false },
            pointer: { show: false },
    
        },
        //外圈底图
        {
            name: '预计负载总量',
            type: 'gauge',
            radius: '100%',
            startAngle: 180,
            endAngle: 0,
            splitNumber: 0, //刻度数量
            axisLine: {
                lineStyle: {

                    color: [[1, '#fff']],
                },
            },
            axisLabel: { show: false },
            axisTick: { show: false },
            detail: { show: false },
            pointer: { show: false },
        },
        //外圈填充部分
        {
            name: '实际负载总量',
            type: 'gauge',
            radius: '100%',
            splitNumber: 0, //刻度数量
            startAngle: 180,
            endAngle: 180 - (180 / 100) * max,
            axisLine: {
                lineStyle: {
                    shadowBlur: 0,
                    color: [
                        [
                            0.1,
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                { offset: 0, color: '#5ff000' },
                                { offset: 1, color: '#6fe700' },
                            ]),
                        ],
                        [
                            0.2,
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                { offset: 0, color: '#6fe700' },
                                { offset: 1, color: '#86da00' },
                            ]),
                        ],
                        [
                            0.3,
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                { offset: 0, color: '#86da00' },
                                { offset: 1, color: '#bebc00' },
                            ]),
                        ],
                        [
                            0.4,
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                { offset: 0, color: '#bebc00' },
                                { offset: 1, color: '#ff9500' },
                            ]),
                        ],
                        [
                            0.5,
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                { offset: 0, color: '#ff9500' },
                                { offset: 1, color: '#ff7500' },
                            ]),
                        ],
                        [
                            0.6,
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                { offset: 0, color: '#ff7500' },
                                { offset: 1, color: '#ff5400' },
                            ]),
                        ],
                        [
                            0.7,
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                { offset: 0, color: '#ff5400' },
                                { offset: 1, color: '#ff3600' },
                            ]),
                        ],
                        [
                            0.8,
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                { offset: 0, color: '#ff3600' },
                                { offset: 1, color: '#ff1d00' },
                            ]),
                        ],
                        [
                            0.9,
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                { offset: 0, color: '#ff1d00' },
                                { offset: 1, color: '#ff0700' },
                            ]),
                        ],
                        [
                            1,
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                { offset: 0, color: '#ff1d00' },
                                { offset: 1, color: '#ff0700' },
                            ]),
                        ],
                    ],
                },
            },
            axisLabel: { show: false },
            axisTick: { show: false },
            detail: { show: false },
            pointer: { show: false },
        },
        //内圈底图
        {
            name: '实际负载总量',
            type: 'gauge',
            radius: '45%',
            startAngle: 180,
            endAngle: 0,
            splitNumber: 0, //刻度数量
            axisLine: {
                lineStyle: {

                    color: [[1, '#fff']],
                },
            },
            axisLabel: { show: false },
            axisTick: { show: false },
            detail: { show: false },
            pointer: { show: false },
        },
        //内圈填充部分
        {
            name: '当前负载量',
            title: {
                color: '#fff',
                fontWeight: 'bolder',
                fontSize: 24,
                 offsetCenter:[0,30]
            },
            type: 'gauge',
            radius: '45%',
            splitNumber: 0, //刻度数量
            startAngle: 180,
            endAngle: 180 - (180 / 100) * current,
            axisLine: {
                lineStyle: {
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10,
                    color: [
                        [
                            0.1,
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                { offset: 0, color: '#5ff000' },
                                { offset: 1, color: '#6fe700' },
                            ]),
                        ],
                        [
                            0.2,
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                { offset: 0, color: '#6fe700' },
                                { offset: 1, color: '#86da00' },
                            ]),
                        ],
                        [
                            0.3,
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                { offset: 0, color: '#86da00' },
                                { offset: 1, color: '#bebc00' },
                            ]),
                        ],
                        [
                            0.4,
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                { offset: 0, color: '#bebc00' },
                                { offset: 1, color: '#ff9500' },
                            ]),
                        ],
                        [
                            0.5,
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                { offset: 0, color: '#ff9500' },
                                { offset: 1, color: '#ff7500' },
                            ]),
                        ],
                        [
                            0.6,
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                { offset: 0, color: '#ff7500' },
                                { offset: 1, color: '#ff5400' },
                            ]),
                        ],
                        [
                            0.7,
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                { offset: 0, color: '#ff5400' },
                                { offset: 1, color: '#ff3600' },
                            ]),
                        ],
                        [
                            0.8,
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                { offset: 0, color: '#ff3600' },
                                { offset: 1, color: '#ff1d00' },
                            ]),
                        ],
                        [
                            0.9,
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                { offset: 0, color: '#ff1d00' },
                                { offset: 1, color: '#ff0700' },
                            ]),
                        ],
                        [
                            1,
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                { offset: 0, color: '#ff1d00' },
                                { offset: 1, color: '#ff0700' },
                            ]),
                        ],
                    ],
                },
            },
            axisLabel: { show: false },
            axisTick: { show: false },
            pointer: {
                show: true,
                length: '150%',
                radius: '50%',
                width: 10, //指针粗细
                itemStyle: {
                    color: '#fff',
                },
            },
            detail: {
                formatter: function(){
                    
                    return ((current / max) * 100 + '').slice(0, 5) + '%'
                }
                ,
                color: '#fff',
                fontWeight: 'bolder',
                fontSize: 32,
                offsetCenter:[6,-30]
            },
            data: [
                {
                    value: 100,
                    name: '工作负载量'
                },
            ],
        },
    ],
};
