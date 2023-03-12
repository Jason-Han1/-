option = {
    tooltip: {},
    color: ['#0696ff', '#ccc', 'transparent'],
        series: [{
            type: 'pie',
            radius: ['45%', '70%'],
            avoidLabelOverlap: false,
            startAngle: 140,
            center: ['50%', '50%'],
            label: {
                normal: {
                    position: 'inner',
                    textStyle: {
                        color: '#fff',
                        fontSize: 12
                    }
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '12',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                    value: 80,
                    tooltip: {
                        formatter: function(a) {
                             return `${a.marker} value: ${a.value}`
                        }
                    }
                },
                {
                    value: 20,
                    tooltip: {
                        formatter: function(a) {
                             return ''
                        }
                    }
                },
                {
                    value: 260,
                    name: '',
                    tooltip: {
                        formatter: function(a) {
                            return ''
                        }
                    }
                }
            ]
        },

    ]
};