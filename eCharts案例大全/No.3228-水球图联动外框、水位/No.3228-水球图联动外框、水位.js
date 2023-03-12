var num1 = 0.5;
option = {
    title: {
        text: (num1 * 100).toFixed(2) + '%' + '\n' + '完成审批',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#59D19C',
        },
        x: 'center',
        y: '40%',
    },
    series: [
        {
            type: 'liquidFill',
            radius: '80%',
            center: ['50%', '50%'],
            data: [num1],
            color: 'rgba(69, 229, 155, 0.3)',
            backgroundStyle: {
                borderWidth: 20,
                color: 'rgba(69, 229, 155, 0.3)',
            },
            label: {
                normal: {
                    formatter: '',
                },
            },
            outline: {
                show: false,
            },
        },
        {
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['90%', '80%'],
            hoverAnimation: false,
            data: [
                {
                    name: '',
                    value: (num1 * 100).toFixed(2),
                    labelLine: {
                        show: false,
                    },
                    itemStyle: {
                        color: '#59D19C',
                    },
                    emphasis: {
                        labelLine: {
                            show: false,
                        },
                        itemStyle: {
                            color: '#5886f0',
                        },
                    },
                },
                {
                    //画剩余的刻度圆环
                    name: '',
                    value: 100 - (num1 * 100).toFixed(2),
                    itemStyle: {
                        color: 'rgba(69, 229, 155, 0.48)',
                    },
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                    emphasis: {
                        labelLine: {
                            show: false,
                        },
                        itemStyle: {
                            color: '#ffffff',
                        },
                    },
                },
            ],
        },
    ],
};
