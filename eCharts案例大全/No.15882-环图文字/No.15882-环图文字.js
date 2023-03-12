option = {
    backgroundColor: '#101f4c',
    title: {
        text: '33分',
        x: 'center',
        y: 'center',
        textStyle: {
            color: '#FE0401',
            fontWeight: 'bolder',
            fontSize: 64,
        }
    },
    series: [{
        name: '信用分',
        hoverAnimation: false,
        legendHoverLink: false,
        type: 'pie',
        radius: ['35%', '38%'],
        label: {
            normal: {
                show: false,
            }
        },
        data: [{
            itemStyle: {
                normal: {
                    color: '#30d61c',
                }
            }
        }]
    }, {
        type: 'pie',
        radius: ['30%', '31%'],
        label: {
            normal: {
                show: false,
            }
        },
        data: [{
            itemStyle: {
                normal: {
                    color: '#999'
                }
            }
        }]
    }]
};