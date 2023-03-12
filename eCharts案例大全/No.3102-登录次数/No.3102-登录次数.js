var option = {
    title: {
        text: '登录次数',
        x: '50%',
        y: '35%',
        textAlign: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 24,
        },
    },
    series: [
        {
            name: ' ',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            startAngle: 225,
            color: ['transparent', '#26cdbe', 'transparent'],
            hoverAnimation: false,
            legendHoverLink: false,

            labelLine: {
                normal: {
                    show: false,
                },
            },
            data: [
                {
                    value: 25,
                    name: '1',
                },
                {
                    label: {
                        normal: {
                            show: true,
                            fontSize: '30',
                            position: 'inside',
                            fontWeight: 'bold',
                        },
                        emphasis: {
                            show: false,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold',
                            },
                        },
                    },
                    value: 25,
                    name: '12345',
                },
                {
                    value: 50,
                    name: '3',
                },
            ],
        },
    ],
};
