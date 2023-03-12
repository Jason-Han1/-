option = {
    backgroundColor: '#072542',
    title: {
        text: '',
        x: 'center',
        y: 'center',
        textStyle: {
            fontSize: 14,
            color: '#27dbdd',
        },
    },
    series: [
        {
            type: 'pie',
            radius: [0, '75%'],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                        {
                            offset: 1,
                            color: '#99c5e1',
                        },
                        {
                            offset: 0.7,
                            color: '#141d4677',
                        },
                        {
                            offset: 0,
                            color: '#15638d',
                        },
                    ]),
                },
            },
            label: {
                show: false,
            },
            data: [1],
        },
    ],
};
