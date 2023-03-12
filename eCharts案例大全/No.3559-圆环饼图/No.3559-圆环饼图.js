var handred = 100
var point = 66

option = {
    // title: {
    //     text: point + '%',
    //     x: 'center',
    //     y: 'center',
    //     textStyle: {
    //         fontWeight: 'normal',
    //         color: '#29EEF3',
    //         fontSize: '75'
    //     }
    // },
    // tooltip: {
    //     formatter: function(params) {
    //         return params.name + '：' + params.percent + ' %'
    //     }
    // },
    // legend: {
    //     show: true,
    //     itemGap: 12,
    //     data: ['占比', '剩余']
    // },

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
                    color: { // 颜色渐变
                        colorStops: [{
                                    offset: 0,
                                    color: '#0095e3' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#28E8FA' // 100% 处的颜色
                                }]
                    },
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
                    color: '#cceaf9'
                }
            }
        }]
    }]
}
