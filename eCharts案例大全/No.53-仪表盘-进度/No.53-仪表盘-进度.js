let value = 65.23;
let title = 'vision';
let int = value.toFixed(2).split('.')[0];
let float = value.toFixed(2).split('.')[1];
option = {
    backgroundColor: '#020f18',
    title: {
        text: '{a|' + int + '}{b|.' + float + '}\n{c|' + title + '}',
        x: 'center',
        y: 'center',
        textStyle: {
            rich: {
                a: {
                    fontSize: 48,
                    color: '#fff',
                    fontWeight:'600',
                },
                b: {
                    fontSize: 20,
                    color: '#fff',
                    padding: [0, 0, 14, 0]
                },
                c: {
                    fontSize: 20,
                    color: '#fff',
                    padding: [5, 0]
                }
            }
        }
    },
    series: [
        {
            type: 'gauge',
            radius: '60%',
            clockwise: false,
            startAngle: '90',
            endAngle: '-269.9999',
            splitNumber: 30,
            detail: {
                offsetCenter: [0, -20],
                formatter: ' '
            },
            pointer: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [0, '#2CFAFC'],
                        [36.7 / 100, '#0ff'],
                        [1, '#0f232e']
                    ],
                    width: 20
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 100,
                lineStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 255, 255, 1)',
                    shadowOffsetY:'0',
                    color: '#020f18',
                    width: 2
                }
            },
            axisLabel: {
                show: false
            }
        },
        {
            type: 'pie',
            radius: ['44%', '45%'],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
                normal: {
                    color: '#0C355E'
                }
            },
            label: {
                show: false
            },
            data: _dashed()
        },
        
        {
            type: 'pie',
            radius: [0, '30%'],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
                normal: {
                    shadowBlur: 20,
                    shadowColor: '#000',
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        offset: 0,
                        color: '#0FF',
                    }, {
                        offset: 1,
                        color: '#060f20'
                    }])
                }
            },
            label: {
                show: false
            },
            data: [100]
        },
        {
            type: 'pie',
            radius: ['64%', '65.5%'],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
                normal: {
                    shadowBlur: 20,
                    shadowColor: 'rgba(0, 255, 255,.3)',
                    color: '#0f232e'
                }
            },
            label: {
                show: false
            },
            data: [100]
        },
        {
            type: 'pie',
            radius: ['68%', '69.5%'],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
                normal: { 
                    shadowBlur: 20,
                    shadowColor: 'rgba(0, 255, 255,.3)',
                    color: 'rgba(15, 35, 46,.6)',
                }
            },
            label: {
                show: false
            },
            data: [100]
        },
    ]
};

function _dashed() {
    let dataArr = [];
    for (var i = 0; i < 100; i++) {
        if (i % 2 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 20,
                itemStyle: {
                    normal: {
                        color: 'rgb(0,255,255,.3)',
                    }
                }
            })
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: 20,
                itemStyle: {
                    normal: {
                        color: 'rgb(0,0,0,0)',
                        borderWidth: 1,
                        borderColor: "rgba(0,255,255,1)"
                    }
                }
            })
        }

    }
    return dataArr

}












