option = {
    backgroundColor: '#000000',
    title: {
        text: '北斗七星',
        textStyle: {
            color: '#fff'
        }
    },
    grid:{
        width:'60%',
        height:'70%'
    },
    xAxis: {
        show: false,
    },
    yAxis: {
        show: false,
    },
    color: ['#000000', '#FFFFFF'],
    series: [{
            type: 'line',
            itemStyle: {
                normal: {
                    color: '#7af5e9',
                    opacity: 1,
                    borderWidth: 1,
                    shadowBlur: 8,
                    shadowColor: '#fff'
                }
            },
            lineStyle: {
                normal: {
                    opacity: 0.1,
                }
            },
            label: {
                emphasis: {
                    show: true,
                    offset: [24, -5],
                    formatter: '{b}'
                }
            },
            data: [{
                name: '摇光',
                value: [0, 6]
            }, {
                name: '开阳',
                value: [1, 6]

            }, {
                name: '玉衡',
                value: [2, 5]
            }, {
                name: '天权',
                value: [2.8, 4]
            }, {
                name: '天玑',
                value: [3, 2.4]
            }, {
                name: '天璇',
                value: [5, 2]
            }, {
                name: '天枢',
                value: [5.5, 3.6]
            }]
        }, {
            type: 'lines',
            coordinateSystem: 'cartesian2d',
            zlevel: 2,
            effect: {
                show: true,
                constantSpeed: 200,
                trailLength: 0.02,
                symbolSize: 2,
            },
            lineStyle: {
                normal: {
                    color: '#fff',
                    opacity: 0,
                    curveness: 0
                }
            },
            data: [{
                coords: [
                    [3, 7],
                    [6, 5]
                ]
            }, {
                coords: [
                    [2, 3],
                    [4, 7]
                ]
            }]
        }, {
            type: 'scatter',
            symbolSize: 2,
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    color: '#fff',
                    opacity: 1,
                    borderWidth: 1,
                    shadowBlur: 10,
                    shadowColor: '#fff'
                }
            },
            data: [
                [1.3, 6.8],
                [2.5, 2.7],
                [0.8, 1.9],
                [4.2, 1.2],
                [0.5, 3.6],
                [6.9, 1],
                [3.5, 6.2],
                [3.9, 0.2],
                [2.2, 5.9],
                [3.7, 1.1],
                [5.2, 6.4]
            ]
        },
        {
            name: '黑色圆',
            type: 'pie',
            zlevel: 2,
            radius: '12',
            center: ['701', '62'],
            data: [{
                value: 50,
                name: ''
            }, ],
            roseType: 'radius',
            hoverAnimation: false,
            label: {
                normal: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false,
                }
            }
        },
        {
            name: '白色圆',
            type: 'pie',
            radius: '12',
            center: ['704', '60'],
            data: [{
                value: 50,
                name: ''
            }],
            hoverAnimation: false,
            label: {
                normal: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false,
                }
            },
            itemStyle: {
                normal: {
                    opacity: 0.6,
                    borderWidth: 4,
                    shadowBlur: 4,
                    shadowColor: '#fff'
                }
            }
        }
    ]
};