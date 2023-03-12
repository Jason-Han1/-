option = {
         backgroundColor: '#000737',
    series: [
        {
            // 进度条
            type: 'gauge',
            splitNumber: 10,
            radius: '65%',
            min: 0,
            max: 10,
            pointer: {
                show: true,
                width: 7,
                length: '80%',
                itemStyle: {
                    color: 'auto',
                },
            },
            axisLine: {
                show: true,
                lineStyle: {
                    width: 25,
                    color: [
                        [0.3, '#FF6061'],
                        [0.7, '#32eef7'],
                        [1, '#007bff'],
                    ],
                    borderColor: '#000',
                    borderWidth: '10',
                    shadowColor: 'rgba(0,138,255,0.8)',
                    shadowBlur: 20,
                    shadowOffsetX: 4,
                    shadowOffsetY: 4
                },
            },
            axisLabel: {
                show: true,
                color: '#D4FDFF',
                // 刻度显示位置
                distance: -22,
                fontSize: 12,
            }, //刻度标签
            axisTick: {
                show: false,
            }, //刻度样式
            splitLine: {
                show: false,
                length: '20%',
                lineStyle: {
                    color: '#3699FF',
                    width: 2,
                },
            }, //分隔线样式
            detail: {
                show: false,
            },
            title: {
                show: true,
                textStyle: {
                    fontSize: 16,
                },
            },
            data: [
                {
                    value: 2,
                    name: '当前数量预警',
                },
            ],
        },
        {
            // 彩色部分
            type: 'gauge',
            splitNumber: 10,
            radius: '55%',
            min: 0,
            max: 45,
            pointer: {
                show: false,
                width: 7,
                length: '80%',
                color: 'auto',
            },
            axisLine: {
                show: true,
                lineStyle: {
                    width: 25,
                    color: [
                        [0.3, 'transparent'],
                        [0.7, 'transparent'],
                        [1, 'transparent'],
                    ],
                    borderColor: 'transparent',
                    borderWidth: '1',
                    shadowColor: 'rgba(0,138,255,0.8)',
                    shadowBlur: 20,
                    shadowOffsetX: 4,
                    shadowOffsetY: 4
                },
            },
            axisLabel: {
                show: false,
            }, //刻度标签。
            axisTick: {
                show: true,
                splitNumber: 5,
                lineStyle: {
                    color: '#EBF3FE',
                    width: 1,
                },
            }, //刻度样式
            splitLine: {
                show: true,
                length: '-6%',
                lineStyle: {
                    color: '#4b95f3',
                    width: 2,
                    shadowColor: 'rgba(0,138,255,0.8)',
                    shadowBlur: 20,
                    shadowOffsetX: 4,
                    shadowOffsetY: 4
                },
            },
            detail: {
                show: false,
            },
            title: {
                show: false,
            },
            data: [
                {
                    value: 60,
                    name: '占比',
                },
            ],
        },
        {
            // 背景大圆环
            name: '',
            type: 'pie',
            radius: ['60%', '68%'],
            silent: true,
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false,
                },
            },
            z: -1,
            data: [
                {
                    value: 75,
                    itemStyle: {
                        color: 'rgba(19, 55, 169,0.3)',
                        borderWidth: 2,
                        borderColor: 'rgba(19, 55, 169,0.3)',
                    },
                },
                {
                    value: 25,
                    itemStyle: {
                        color: 'transparent',
                    },
                },
            ],
        },
        {
            // 背景小圆环
            name: '',
            type: 'pie',
            radius: ['45%', '50%'],
            silent: true,
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false,
                },
            },
            z: -1,
            data: [
                {
                    value: 75,
                    itemStyle: {
                        color: 'rgba(19, 55, 169,0.3)',
                        borderWidth: 2,
                        borderColor: 'rgba(19, 55, 169,0.3)',
                        shadowColor: 'rgba(0,138,255,0.8)',
                    shadowBlur: 20,
                    shadowOffsetX: 4,
                    shadowOffsetY: 4
                    },
                },
                {
                    value: 25,
                    itemStyle: {
                        color: 'transparent',
                    },
                },
            ],
        },
    ],
};

return option;
