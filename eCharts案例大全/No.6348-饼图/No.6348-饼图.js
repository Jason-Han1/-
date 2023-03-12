option = {
    backgroundColor: '#0E0E40',
    title: {
        text: '{a|换届完成率}',
        textStyle: {
            color: '#fff',
            fontWeight: 'normal',
            fontSize: 40,
            fontFamily: 'MittelNeu',
            rich: {
                a: {
                    color: '#fff',
                    fontWeight: 'normal',
                    fontSize: 40,
                    fontFamily: 'MittelNeu',
                    lineHeight: 50
                }
            }
        },
        x: 'center',
        y: '70%'
    },
    series: [{
        type: 'pie',
        clockWise: false,
        radius: ['38%', '62%'],
        hoverAnimation: false,
        silent: true,
        startAngle: 55,
        center: ['50%', '40%'],
        itemStyle: {
            normal: {
                labelLine: {
                    show: false,
                },
            }
        },
        z: 3,
        data: [{
            value: 20,
            label: {
                normal: {
                    show: true,
                    position: "center",
                    formatter: "{c}{a|%}",
                    fontSize: 78,
                    fontFamily: 'MittelNeu',
                    fontWeight: 'normal',
                    color: "white",
                    rich: {
                        a: {
                            fontFamily: 'din',
                            fontSize: 50,
                            color: 'white'
                        }
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#FFDE00',
                    shadowColor: '#0E0E40',
                    shadowBlur: 30
                }
            }
        }, {
            value: 100 - 20,
            itemStyle: {
                normal: {
                    color: 'transparent',
                }
            }
        }]
    }, {
        type: 'pie',
        clockWise: false,
        radius: ['45%', '54%'],
        hoverAnimation: false,
        silent: true,
        center: ['50%', '40%'],
        itemStyle: {
            normal: {
                labelLine: {
                    show: false,
                },
            }
        },
        data: [{
            value: 0,
        }, {
            value: 100,
            itemStyle: {
                normal: {
                    color: '#877620',
                }
            }
        }]
    }]
}