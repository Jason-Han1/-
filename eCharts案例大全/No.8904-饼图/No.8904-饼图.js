option = {
    title: {
        text: '80%',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: '#0580f2',
            fontSize: '90'
        }
    },
    color: ['red'], 
    series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: true,
        radius: ['50%', '66%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        },
        hoverAnimation: false, 
        data: [{
            value: 80,
            name: '01',
            itemStyle: {
                normal: {
                    color: 'blue',
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                } 
            }
        }, {
            name: '02',
            value: 20
        }]
    }]
}