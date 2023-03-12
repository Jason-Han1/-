var percent = 0.7;

function getData() {
    return [{
        value: percent,
        itemStyle: {
            normal: {
                color: '#fb358a',
                shadowBlur: 10,
                shadowColor: '#fb358a'
            }
        }
    }, {
        value: 1 - percent,
        itemStyle: {
            normal: {
                color: 'transparent'
            }
        }
    }];
}

option = {
    backgroundColor: '#333645',

    title: {
        text: (percent * 100) + '%',
        x: 'center',
        y: 'center',
        textStyle: {
            color: '#98a0c4',
            fontWeight: 'bolder',
            fontSize: 64,
        }
    },
    series: [{
            type: 'pie',
            radius: ['39%', '49%'],
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
                        color: '#313443',
                        shadowBlur: 10,
                        shadowColor: '#1b1e25',


                    }
                }
            }],

            animation: false
        },

        {
            type: 'pie',
            radius: ['39%', '49%'],
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
                        color: '#313443',
                        shadowBlur: 50,
                        shadowColor: '#1b1e25'
                    }
                }
            }],
        
            animation: false
        },

        {
            name: 'main',
            type: 'pie',
            radius: ['50%', '51%'],
            label: {
                normal: {
                    show: false,
                }
            },
            data: getData(),
            
            animationEasingUpdate: 'cubicInOut',
            animationDurationUpdate: 500
        }
    ]
};

setInterval(function () {
    percent = +Math.random();
    
    
    myChart.setOption({
        title: {
            text: (percent * 100).toFixed(0) + '%'
        },
        series: [{
            name: 'main',
            data: getData()
        }]
    }) 
}, 1000);