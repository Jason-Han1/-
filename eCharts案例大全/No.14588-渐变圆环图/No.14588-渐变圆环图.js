option = {
    series: [{
        name: '进度',
        type: 'pie',
        radius: ['70%', '85%'],
        avoidLabelOverlap: false,
        hoverAnimation: false,
        startAngle: 120,
        label: {
            normal: {
                show: true,
                position: 'center',
                textStyle: {
                    fontSize: 80,
                    color: '#fff',
                    fontFamily: 'DINCond-Bold, serif'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 67,
            name: '67%',
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#d315ad' // 0% 处的颜色
                        }, {
                            offset: 0.5,
                            color: '#8731ea'
                        }, {
                            offset: 1,
                            color: '#4173f9' // 100% 处的颜色
                        }],
                    }
                }
            }
        }, {
            value: 100 - 67,
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#4173f9' // 0% 处的颜色
                        }, {
                            offset: 0.5,
                            color: '#8731ea'
                        }, {
                            offset: 1,
                            color: '#d315ad' // 100% 处的颜色
                        }],
                    },
                    opacity: 0.1
                }
            }
        } ]
    }]
};