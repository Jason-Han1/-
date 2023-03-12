option = {
    series: [
        {
            // 进度条
            type: 'gauge',
            splitNumber: 10,
            radius: '80%',
            min: 0,
            max: 100,
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
                        [0.3, '#4B95F3'],
                        [0.7, '#05C397'],
                        [1, '#FF6061'],
                    ],
                    borderColor: '#000',
                    borderWidth: '10',
                },
            },
            axisLabel: {
                show: true,
                color: '#D4FDFF',
                // 刻度显示位置
                distance: 5,
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
                        offsetCenter: [0,'60%'],
                textStyle: {
                    fontSize: 14,
                    color: 'white',
                },
            },
            data: [
                {
                    value: 90,
         
                },
            ],
        },
        {
            // 彩色部分
            type: 'gauge',
            splitNumber: 10,
            radius: '50%',
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
            radius: ['35%', '40%'],
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
    ],
};

return option;

