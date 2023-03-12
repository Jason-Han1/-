var value = 40

option = {
    backgroundColor: '#0A2E5D',
    tooltip: {
        show: false
    },
    legend: {
        show: false
    },
    toolbox: {
        show: false
    },
    title: [{
        text: value,
        top: '48%',
        textAlign: "center",
        left: "49%",
        textStyle: {
            color: '#fff',
            fontSize: 22,
            fontWeight: '400'
        }
    }, {
        text: value,
        top: '48%',
        textAlign: "center",
        left: "49%",
        textStyle: {
            color: '#fff',
            fontSize: 22,
            fontWeight: '400'
        }
    }],
    series: [{
        name: '',
        type: 'pie',
        startAngle: 232,
        radius: [105, 109],
        hoverAnimation: false,
        itemStyle: {
            normal: {
                label: {
                    show: false,
                },
            }
        },
        data: [{
                value: value,
                name: 'A',
                itemStyle: {
                    normal: {
                        borderWidth: 5,
                        shadowBlur: 20,
                        borderColor: '#00ffff',
                        shadowColor: '#00ffff'
                    }
                }
            }, {
                value: 100 - value,
                name: 'B',
                itemStyle: {
                    normal: {
                        borderWidth: 5,
                        shadowBlur: 20,
                        borderColor: '#00ff00',
                        shadowColor: '#00ff00'
                    }
                }
            },
            {
                value: 25,
                name: 'C',
                itemStyle: {
                    normal: {
                        color: 'rgba(0, 0, 0, 0)',
                        borderColor: 'rgba(0, 0, 0, 0)',
                        borderWidth: 0
                    }
                }
            }
        ]
    }]
}