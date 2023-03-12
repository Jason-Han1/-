function Pie() {
    let dataArr = [];
    for (var i = 0; i < 100; i++) {
        if (i % 6 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 50,
                itemStyle: {
                    normal: {
                        color: "#8d9094",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)",
                    }
                }
            })
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: 100,
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
let imgSrc = '/asset/get/s/data-1619143401609-RSv6fPZFO.png';
option = {
    backgroundColor: '#09192d',
    title: [{
        text: '75.0%',
        x: '50%',
        y: '43%',
        textAlign: 'center',
        textStyle: {
            fontSize: '40',
            fontWeight: '500',
            color: '#98b5d2',
            textAlign: 'center',
        },
    }, {
        text: 'DESIGN ELEMENTS',
        left: '50%',
        top: '52%',
        textAlign: 'center',
        textStyle: {
            fontSize: '18',
            fontWeight: '400',
            color: '#5c5a68',
            textAlign: 'center',
        },
    }, ],
    graphic: {
        elements: [{
            type: "image",
            z: 0,
            style: {
                image: imgSrc,
                width: 210,
            },
            left: 'center',
            top: "30%",
        }]
    },
    angleAxis: {
        max: 100,
        clockwise: false,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    radiusAxis: {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    polar: {
        center: ['50%', '50%'],
        radius: '110.1%'
    },
    series: [
        {
            type: 'bar',
            startAngle: 100,
            clockwise: false,
            data: [{
                name: 'Total Downloads',
                value: 65,
                itemStyle: {
                    normal: {
                        color: 'rgba(251, 46, 99, 1)',
                    }
                },
            }],
            coordinateSystem: 'polar',
            roundCap: true,
            barWidth: 15,
            barGap: '-100%',
            z: 20,
        },
        {
            type: 'bar',
            data: [{
                value: 100,
                itemStyle: {
                    color: '#223042',
                    shadowColor: 'rgba(251, 46, 99, 0.1)',
                    shadowBlur: 10,
                }
            }],
            coordinateSystem: 'polar',
            roundCap: true,
            barWidth: 15,
            barGap: '0%',
            z: 1
        },
        {
            name: '',
            z: 1,
            type: 'pie',
            cursor: 'default',
            radius: ['59.3%', '60%'],
            startAngle: 225,
            hoverAnimation: false,
            legendHoverLink: false,
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 100,
                itemStyle: {
                    color: '#405b7f',
                }
            }, ]
        },
        {
            name: '',
            z: 100,
            type: 'pie',
            cursor: 'default',
            radius: ['51.5%', '53%'],
            startAngle: 225,
            hoverAnimation: false,
            legendHoverLink: false,
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 100,
                itemStyle: {
                    color: 'rgba(121,157,209,.85)',
                }
            }, ]
        },
        {
            type: 'pie',
            zlevel: 0,
            silent: true,
            startAngle: -100,
            radius: ['60%', '61.5%'],
            z: 1,
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
};