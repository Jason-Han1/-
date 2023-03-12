const handred = 100
let point = 65

option = {
    title: {
        text: point + '%',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: '#1890FF',
            fontSize: '26'
        }
    },
    tooltip: {
        formatter: function(params) {
            return params.name + '：' + params.percent + ' %'
        }
    },
    legend: {
        show: false,
        itemGap: 12,
        data: ['占比', '剩余']
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
                    color: { // 颜色渐变
                        colorStops: [{
                                    offset: 0,
                                    color: '#218AE6' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#69B8FF' // 100% 处的颜色1
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
                    color: '#DFEFFE'
                }
            }
        }]
    }]
}