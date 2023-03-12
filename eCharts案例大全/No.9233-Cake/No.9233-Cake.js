

//立体感 ✌

var percent = 66;
function getData() {
    return [{
        value: percent,
        itemStyle: {
            normal: {
                opacity: 1,
                color: {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#0ff'
                    }, {
                        offset: 1,
                        color: '#2c83ed'
                    }],
                    globalCoord: false
                },
                shadowColor: '#482e5d',
                shadowBlur: 10,
            }
        },
    }, {
        value: 100 - percent,
        itemStyle: {
            normal: {
                color: 'transparent'
            }
        }
    }];
}

option = {
    backgroundColor: '#482e5d',
    
    title: {
        text: (percent * 1) + '%',
        x: 'center',
        y: 'center',
        textStyle: {
            color: '#fff',
            fontWeight: 'bolder',
            fontSize: 24,
        }
    },
    series: [{
            type: 'pie',
            radius: ['39%', '55%'],
            silent: true,
            label: {
                normal: {
                    show: false,
                }
            },
            data: [{
                value: 1,
                itemStyle: {
                    normal: {
                        color: '#e7e7e7',
                        opacity: 1,
                        shadowColor: 'rgba(0, 0, 0, 0.3)',
                        shadowBlur: 5,
                        shadowOffsetX: 5,
                        shadowOffsetY: 1,
                    }
                }
            }],
            animation: false
        },

        {
            name: '使用率',
            type: 'pie',
            startAngle: 50,
            radius: ['39%', '55%'],
            hoverAnimation: false,
            label: {
                normal: {
                    show: false,

                }
            },
            data: getData(),
        },
        {
            type: 'pie',
            name: '',
            center: ['50%', '50%'],
            radius: ['0%', '39%'],
            silent: true,
            animation: false,
            data: [{
                value: 0,
                itemStyle: {
                    normal: {
                        color: '#482e5d',
                        shadowBlur: 30,
                        borderWidth: 0,
                        shadowColor: '#482e5d'
                    }
                }
            }]
        },{
            type: 'pie',
            name: '',
            center: ['50%', '50%'],
            radius: ['55%', '100%'],
            silent: true,
            animation: false,
            data: [{
                value: 0,
                itemStyle: {
                    normal: {
                        color: '#482e5d',
                        shadowBlur: 30,
                        borderWidth: 0,
                        shadowColor: '#482e5d'
                    }
                }
            }]
        },
    ]
};