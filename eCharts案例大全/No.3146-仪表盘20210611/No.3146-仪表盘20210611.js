var dataArr = 60;

option = {
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%',
    },
    series: [
        {
            type: 'gauge',
            center: ['50%', '47%'],
            radius: '60%',
            z: 4,
            splitNumber: 10,
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            detail: {
                show: false,
            },
            title: {
                //标题
                show: false,
            },
            data: [
                {
                    name: '',
                    value: dataArr,
                },
            ],
            itemStyle: {
                normal: {
                    color: '#1492ff',
                },
            },
            pointer: {
                show: true,
                length: '110%',
                radius: '20%',
                width: 10, //指针粗细
            },
            animationDuration: 4000,
        },
        {
            type: 'gauge',
            startAngle: 225,
            endAngle: -45,
            radius: '50%',
            center: ['50%', '47%'],
            axisLine: {
                lineStyle: {
                    width: 40,
                    color: [[1, '#cef0ff']],
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            itemStyle: {
                color: '#fff',
            },
            detail: {
                show: false,
                color: '#fff',
            },
            data: [
                {
                    value: dataArr,
                },
            ],
        },
        {
            name: '外部刻度',
            type: 'gauge',
            center: ['50%', '47%'],
            radius: '70%',
            min: 0, //最小刻度
            max: 100, //最大刻度
            splitNumber: 10, //刻度数量
            startAngle: 225,
            endAngle: -45,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 40,
                    color: [
                        [
                            1,
                            new echarts.graphic.LinearGradient(
                                0,
                                0,
                                1,
                                0,
                                [
                                    {
                                        offset: 0.1,
                                        color: '#FF8116', // 50% 处的颜色
                                    },
                                    {
                                        offset: 0.35,
                                        color: '#FFE200', // 50% 处的颜色
                                    },
                                    {
                                        offset: 0.7,
                                        color: '#2ED568', // 40% 处的颜色
                                    },
                                    {
                                        offset: 0.9,
                                        color: '#14B7FF', // 50% 处的颜色
                                    },
                                ],
                                false
                            ),
                        ],
                    ],
                },
            }, //仪表盘轴线
            axisLabel: {
                show: false,
            }, //刻度标签。
            axisTick: {
                show: false,
                splitNumber: 5,
                lineStyle: {
                    color: '#42E5FB', //用颜色渐变函数不起作用
                    width: 2,
                },
                length: 8,
            },
            splitLine: {
                distance: 58,
                show: true,
                length: 44,
                lineStyle: {
                    color: '#fff', //用颜色渐变函数不起作用
                },
            },
            detail: {
                show: false,
            },
            pointer: {
                show: true,
            },
        },
    ],
};
