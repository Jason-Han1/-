option = {
    tooltip: {},
    series: {
        type: 'pie',
        hoverAnimation: false,
        radius: ['70%', '90%'],
        data: [{
            value: 80,
            label: {
                position: 'center',
                color: '#60acfc',
                formatter: '{c}%',
                fontSize: 60
            },
            itemStyle: {
                color: '#60acfc'
            }
        }, {
            value: 20,
            tooltip: {
                show: false
            },
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            itemStyle: {
                color: '#E6E6E6'
            },
            emphasis: {
                itemStyle: {
                    color: '#E6E6E6'
                }
            }
        }]
    }
};