var data = 80;
option = {
    tooltip: {
        trigger: 'item'
    },
    color: ['transparent'],
    series: [{
            name: '累计值',
            type: 'pie',
            radius: ['60%', '70%'],
            startAngle: 180,
            center: ['50%', '50%'],
            label: {
                show: false
            },
            data: [{
                    value: data,
                    itemStyle: {
                        color: '#0696ff'
                    }
                },
                {
                    value: 200 - data,
                    silent: true,
                    tooltip: {
                        show: false
                    }
                }
            ]
        },{
            name: '目标值',
            type: 'pie',
            radius: ['40%', '50%'],
            startAngle: 180,
            center: ['50%', '50%'],
            label: {
                show: false
            },
            data: [{
                    value: data,
                    itemStyle: {
                        color: '#ff0'
                    }
                },
                {
                    value: 200 - data,
                    silent: true,
                    tooltip: {
                        show: false
                    }
                }
            ]
        }

    ]
};