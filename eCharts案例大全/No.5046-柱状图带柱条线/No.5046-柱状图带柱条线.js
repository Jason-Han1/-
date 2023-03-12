const handred = 100
let point = 66

option = {
    backgroundColor: '#180f2a',
    title: [{
        text: (handred - point) + '%',
        x: '50%',
        y: '38%',
        textAlign: 'center',
        textStyle: {
            fontSize: '28',
            fontWeight: '600',
            color: '#fff',
            textAlign: 'center',
        },
    }, {
        text: '未实名率',
        left: '50%',
        top: '52%',
        textAlign: 'center',
        textStyle: {
            fontSize: '16',
            fontWeight: '400',
            color: '#fff',
            textAlign: 'center',
        },
    }],
    tooltip: {
        trigger: 'item',
        borderColor: 'rgba(255,255,255,.3)',
        backgroundColor: 'rgba(13,5,30,.6)',
        borderWidth: 1,
        padding: 5,
        formatter: function(parms) {
            return parms.name;
        }
    },
    series: [{
        type: 'pie',
        clockWise: true,
        radius: ['56%', '70%'],
        center: ['50%', '50%'],
        itemStyle: {
            normal: {
                barBorderColor: '#fff',
                borderWidth: 5,
                label: {
                    show: true,
                    fontSize: '16',
                    color: '#fff'
                },
                labelLine: {
                    show: true,
                    length: 30,
                    lineStyle: {
                        color: '#fff',
                        width: 2,
                        type: 'solid'
                    }
                }
            }
        },
        hoverAnimation: false,
        data: [{
            value: point,
            name: '实名量：' + point,
            itemStyle: {
                normal: {
                    color: { // 颜色渐变
                        colorStops: [{
                            offset: 0,
                            color: '#0082E8' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#0CEAEB' // 100% 处的颜色1
                        }]
                    },
                    label: {
                        show: true
                    },
                    labelLine: {
                        show: true
                    }
                }
            }
        }, {
            name: '未实名量：' + (handred - point),
            value: handred - point,
            itemStyle: {
                normal: {
                    color: 'rgba(128, 128, 128, 0.2)'
                }
            }
        }]
    }]
}