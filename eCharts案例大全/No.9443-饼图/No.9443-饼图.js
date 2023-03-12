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
                        color: '#00F5FF'
                    }, {
                        offset: 0.5,
                        color: '#00F5FF'
                    }, {
                        offset: 0.3,
                        color: '#2c83ed'
                    }, {
                        offset: 1,
                        color: '#2c83ed'
                    }],
                    globalCoord: false
                },
                shadowColor: '#222437',
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
    backgroundColor: '#222437',
    tooltip: {},
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
            radius: ['39%', '50%'],
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
                        color: '#efd7b1',
                        opacity: 1,
                        shadowColor: 'rgba(0, 0, 0, 0.3)',
                    }
                }
            }],

            animation: false
        },
        {
            type: 'pie',
            radius: ['42%', '47%'],
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
                        color: 'rgba(0, 0, 0, 0.4)',
                    }
                }
            }],

            animation: false
        },
        {
            name: '使用率',
            type: 'pie',
            radius: ['42%', '47%'],
            hoverAnimation: false,
            label: {
                normal: {
                    show: false,

                }
            },
            data: getData(),
        }
    ]
};