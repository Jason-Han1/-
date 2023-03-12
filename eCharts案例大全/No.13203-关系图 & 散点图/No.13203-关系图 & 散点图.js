option = {
    angleAxis: {
        show: false,
        type: 'value',
        min: 0,
        max: 360
    },
    radiusAxis: {
        show: false,
        axisAngle: 0
    },
    polar: {},
    series: [{
            name: 'ss',
            type: 'pie',
            startAngle: 0,
            radius: [40, 60],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    }
                }
            },
            data: [20, 50, 30, 40, 15]
        },
        {
            name: 'ss1',
            type: 'pie',
            startAngle: 0,
            radius: [100, 105],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    }
                }
            },
            data: [20, 50, 30, 40, 15]
        }, {
            name: 'ss2',
            type: 'pie',
            startAngle: 0,
            radius: [160, 165],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    }
                }
            },
            data: [20, 50, 30, 40, 15]
        }, {
            name: 'ss3',
            type: 'pie',
            startAngle: 0,
            radius: [220, 225],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    }
                }
            },
            data: [20, 50, 30, 40, 15]
        }, {
            name: 'l',
            type: 'graph',
            layout: 'none',
            coordinateSystem: 'polar',
            angleAxisIndex: 0,
            radiusAxisIndex: 0,
            symbolSize: function(d) {
                return d[2] / 5
            },
            label: {
                normal: {
                    show: true,
                    fontSize: 18,
                    position: 'outside',
                    color: 'rgba(0,0,0,0.3)',
                    formatter: function(params) {
                        return params.data[3]
                    },
                },
                emphasis: {
                    color: 'rgba(0,0,0,1)'
                }
            },
            links: [{
                source: 0,
                target: 1
            }, {

                source: 0,
                target: 2
            }],
            data: [
                [0.15, 80, 0, '鞋子'],
                [0.58, 86, 100, '1'],
                [0.4, 70, 160, '2'],
                [1, 70, 0, '鞋子']
            ]
        },{
            name: 'x',
            type: 'scatter',
            coordinateSystem: 'polar',
            angleAxisIndex: 0,
            radiusAxisIndex: 0,
            symbolSize: function(d) {
                return d[2] / 5
            },
            label: {
                normal: {
                    show: true,
                    fontSize: 18,
                    position: 'outside',
                    color: 'rgba(0,0,0,0.3)',
                    formatter: function(params) {
                        return params.data[3]
                    },
                },
                emphasis: {
                    color: 'rgba(0,0,0,1)'
                }
            },
            data: [
                [0.15, 80, 0, 'X'],
                [0.58, 270, 100, '1'],
                [0.4, 260, 160, '2'],
                [1, 70, 0, 'X']
            ]
        }
    ]
};