var dataStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        shadowBlur: 40,
        shadowColor: 'rgba(40, 40, 40, 0.5)',
    }
};

var placeHolderStyle = {
    normal: {
        color: '#014589', // 未完成的圆环的颜色
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: '#014589' // 未完成的圆环的颜色
    }
};

option = {
    backgroundColor: 'black',
    title: {
        text: '50%',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: '#fff',
            fontSize: 35
        }
    },
    tooltip: {
        show: false,
    },
    toolbox: {
        show: false,
    },
    series: [{
        name: 'Pie1',
        type: 'pie',
        clockWise: false,
        radius: [70, 85],
        itemStyle: dataStyle,
        hoverAnimation: false,
        center: ['25%', '50%'],
        data: [{
            value: 33,
            label: {
                normal: {
                    formatter: '{d}%',
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '35',
                        fontWeight: 'normal',
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#12CFB2',
                   
                    shadowBlur: 10
                }
            }
        }, {
            value: 67,
            name: 'invisible',
            itemStyle: placeHolderStyle,
        }]
    }, {
        name: 'Pie2',
        type: 'pie',
        clockWise: false,
        radius: [70, 85],
        itemStyle: dataStyle,
        hoverAnimation: false,
        center: ['50%', '50%'],
        data: [{
            value: 40,
            itemStyle: {
                normal: {
                    color: '#603CF9',
                    shadowColor: '#b697cd',
                    shadowBlur: 10
                }
            }
        }, {
            value: 60,
            name: 'invisible',
            itemStyle: placeHolderStyle,
        }]
    }, {
        name: 'Pie3',
        type: 'pie',
        clockWise: false,
        radius: [70, 85],
        itemStyle: dataStyle,
        hoverAnimation: false,
        center: ['75%', '50%'],
        data: [{
            value: 75,
            label: {
                normal: {
                    formatter: '{d}%',
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '35',
                        fontWeight: 'normal',
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#A01EA2',
                    shadowColor: '#a6f08f',
                    shadowBlur: 10
                }
            }
        }, {
            value: 25,
            name: 'invisible',
            itemStyle: placeHolderStyle,
        }]
    }, ]
}
