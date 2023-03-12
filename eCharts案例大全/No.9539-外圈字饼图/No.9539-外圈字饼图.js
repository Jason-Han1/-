var dataStyle = {
    normal: {
        shadowColor: 'rgba(0, 0, 0, 0.8)',
        shadowBlur: 10,
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    }
};
option = {
    title: {
        text: '你的名字\n\n2018',
        left: 'center',
        top: 'center',
        textStyle: {
            fontSize: '14',
            fontWeight: 'normal',
            color: '#fff'
        }
    },
    backgroundColor: "#20263f",
    series: [{
        type: 'pie',
        clockWise: false,
        radius: [60, 80],
        itemStyle: dataStyle,
        hoverAnimation: false,
        center: ['50%', '50%'],
        data: [{
                value: 50,
                name: '泷',
                label: {
                    normal: {
                        position: 'outside',
                        show: true,
                        textStyle: {
                            fontSize: '14',
                            fontWeight: 'normal',
                            color: '#fff'
                        }
                    }
                },
                labelLine: {
                    length: 8,
                    length2: 0
                },
                itemStyle: {
                    normal: {
                        color: {
                            x: 1,
                            y: 1,
                            x2: 0,
                            y2: 0,
                            type: 'linear',
                            global: false,
                            colorStops: [{
                                    offset: 0,
                                    color: '#fdc502'
                                },
                                {
                                    offset: 1,
                                    color: '#fcfa02'
                                }
                            ]
                        },
                        shadowColor: '#2c6cc4',
                        shadowBlur: 0
                    }
                }
            },
            {
                value: 75,
                name: '三叶',
                label: {
                    normal: {
                        position: 'outside',
                        show: true,
                        textStyle: {
                            fontSize: '14',
                            fontWeight: 'normal',
                            color: '#fff'
                        }
                    }
                },
                labelLine: {
                    length: 8,
                    length2: 0
                },
                itemStyle: {
                    normal: {
                        color: {
                            x: 1,
                            y: 1,
                            x2: 0,
                            y2: 0,
                            type: 'linear',
                            global: false,
                            colorStops: [{
                                    offset: 0,
                                    color: '#058aee'
                                },
                                {
                                    offset: 1,
                                    color: '#0ed2f9'
                                }
                            ]
                        }
                    },
                    emphasis: {
                        color: '#24375c'
                    }

                }
            }
        ]
    }, ]
}