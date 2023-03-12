const handred = 100
let point = 66

option = {
    title: {
        text: point + '%',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: '#38fb6e',
            fontSize: '75'
        }
    },
    tooltip: {
        formatter: function(params) {
            return params.name + '：' + params.percent + ' %'
        }
    },
    series: [{
        name: 'circle',
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
            value: point,
            name: '占比',
            itemStyle: {
                normal: {
                    color: '#38fb6e',
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            }
        }, {
            name: '剩余',
            value: handred - point,
            itemStyle: {
                normal: {
                    color: '#6f7cad'
                }
            }
        }]
    }]
}