option = {
    color: ['#BFEBBF', '#44BE45'],
    series: [{
        name: '中间环形',
        type: 'pie',
        radius: ['80%', '75%'],
        center: ['50%', '50%'],
        hoverAnimation: false,
        label: {
            show: false,
            position: 'center',
            textStyle: {
                fontSize: 22,
                fontWeight: 'bold',
                color: '#30B883'
            },
            formatter: '{b}\n{c}%',
            lineHeight: 3
        },
        data: [{
                value: 54.03,
                name: '',
                label: {
                    normal: {
                        show: true
                    }
                }
            },
            {
                value: 100 - 54.03,
                name: ''
            }
        ]
    }]
};