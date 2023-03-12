var value = 0.65;
var data = [value, value, value, ];

function Pie() {
    let dataArr = [];
    for (var i = 0; i < 150; i++) {
        if (i % 2 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 25,
                itemStyle: {
                    normal: {
                        color: "#fff",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            })
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: 10,
                itemStyle: {
                    normal: {
                        color: "rgba(0,0,0,0)",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            })
        }
    }
    return dataArr
}
var option = {
    backgroundColor: '#462f9b',
    title: [{
            text: 'MARGINAL COST✍',
            x: '50%',
            y: 30,
            textAlign: 'center',
            textStyle: {
                fontSize: '30',
                fontWeight: '100',
                color: '#fff',
                textAlign: 'center',
            },
        },
        {
            text: (value * 100).toFixed(0) + '%',
            left: '50%',
            top: '30%',
            textAlign: 'center',
            textStyle: {
                fontSize: '40',
                fontWeight: '400',
                color: '#fff',
                textAlign: 'center',
                textBorderColor: 'rgba(0, 0, 0, 0)',
                textShadowColor: '#000',
                textShadowBlur: '0',
                textShadowOffsetX: 0,
                textShadowOffsetY: 1,
            },
        },
    ],
    series: [{
            type: 'liquidFill',
            radius: '70%',
            z: 6,
            center: ['50%', '50%'],
            amplitude: 20,
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 1,
                    color: 'rgba(2, 159, 200, 1)'
                }, {
                    offset: 0.5,
                    color: 'rgba(0, 186, 211, .5)'
                }, {
                    offset: 0,
                    color: 'rgba(0, 230, 220, 1)'
                }],
                globalCoord: false
            },
            data: [0.6,
                {
                    value: 0.5,
                    direction: 'left',
                },
                0.4, 0.3,
            ],
            backgroundStyle: {
                borderWidth: 1,
                color: 'transparent',
            },
            label: {
                normal: {
                    formatter: '',
                }
            },
            outline: {
                show: true,
                itemStyle: {
                    borderWidth: 0,
                },
                borderDistance: 0,
            }
        },
        {
            name: '4',
            type: 'pie',
            z: 1,
            radius: '70.5%',
            center: ["50%", "50%"],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                }
            },
            data: [{
                value: 100,
                itemStyle: {
                    normal: {
                        color: '#ac9ed1',
                    }
                }
            }]
        },
        {
            name: '5',
            type: 'pie',
            z: 1,
            radius: '70%',
            center: ["50%", "50%"],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                }
            },
            data: [{
                value: 100,
                itemStyle: {
                    normal: {
                        color: '#462f9b',
                    }
                }
            }]
        },
        {
            type: 'pie',
            zlevel: 0,
            silent: true,
            radius: ['60%', '61%'],
            z: 10,
            itemStyle: {
                normal: {
                    areaColor: 'rgba(137, 137, 137, .3)',
                    borderColor: '#888',
                },
                emphasis: {
                    label: {
                        show: false
                    },
                    areaColor: 'rgba(255, 255, 255, .1)',
                }
            },
            label: {
                normal: {
                    show: false
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: Pie()
        },
    ]
}