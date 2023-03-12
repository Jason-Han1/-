option = {
    backgroundColor:'rgba(0,0,0,0)',
    title: {
        textStyle: {
            color: '#fff',
            fontWeight: 'normal',
            fontSize: 30,
            fontFamily: 'MittelNeu',
            rich: {
                a: {
                    color: '#fff',
                    fontWeight: 'normal',
                    fontSize: 10,
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
        clockWise: true, // 顺时针
        radius: '120%', // 大小
        hoverAnimation: false,
        silent: true,
        center: ['50%', '55%'], // 位置
        itemStyle: {
            normal: {
                labelLine: {
                    show: false,
                },
            }
        },
        z: 3,
        data: [{
            value: 30, // 数据
            label: {
                normal: {
                    show: true,
                    position: "center",
                    formatter: "{c}{a|%}",
                    fontSize: 20,
                    fontFamily: 'MittelNeu',
                    fontWeight: 'normal',
                    color: "white",
                    rich: {
                        a: {
                            fontFamily: 'din',
                            fontSize: 5,
                            color: 'white'
                        }
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#04A9EC',
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
        clockWise: true,
        radius: '80%', // 大小
        hoverAnimation: false,
        silent: true,
        center: ['50%', '55%'], // 位置
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
                    color: 'rgba(44, 76, 193, 0.5)', // 底部颜色
                }
            }
        }]
    }]
}