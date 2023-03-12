var dataStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        shadowBlur: 15,
        shadowColor: 'white',
    }
};
var placeHolderStyle = {
    normal: {
        color: 'rgba(0,0,0,0)',
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: 'rgba(0,0,0,0)'
    }
};
option = {
    backgroundColor: 'black',
    color: ['#85b6b2', '#6d4f8d', '#cd5e7e', '#e38980', '#f7db88'],
    legend: {
        top: "0%",
        left: "36%",
        itemHeight: 25,
        itemWidth: 35,
        data: ['01', '02', '03', '04', '05'],
        textStyle: {
            color: '#fff'
        },

        selectedMode: true,
        orient: "vertical",

    },
    series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['92%', '100%'],
            itemStyle: dataStyle,
            hoverAnimation: false,

            data: [{
                    value: 150,
                    name: '01'
                }, {
                    value: 50,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                }

            ]
        }, {
            name: 'Line 2',
            type: 'pie',
            clockWise: true,
            radius: ['83.8%', '91.8%'],
            itemStyle: dataStyle,
            hoverAnimation: false,

            data: [{
                value: 150,
                name: '02'
            }, {
                value: 60,
                name: 'invisible',
                itemStyle: placeHolderStyle
            }]
        }, {
            name: 'Line 3',
            type: 'pie',
            clockWise: true,
            hoverAnimation: false,
            radius: ['75.6%', '83.6%'],
            itemStyle: dataStyle,

            data: [{
                value: 80,
                name: '03'
            }, {
                value: 50,
                name: 'invisible',
                itemStyle: placeHolderStyle
            }]
        }, {
            name: 'Line 4',
            type: 'pie',
            clockWise: true,
            hoverAnimation: false,
            radius: ['67.4%', '75.4%'],
            itemStyle: dataStyle,

            data: [{
                value: 45,
                name: '04'
            }, {
                value: 30,
                name: 'invisible',
                itemStyle: placeHolderStyle
            }]
        }, {
            name: 'Line 5',
            type: 'pie',
            clockWise: true,
            hoverAnimation: false,
            radius: ['59.2%', '67.2%'],
            itemStyle: dataStyle,

            data: [{
                value: 30,
                name: '05'
            }, {
                value: 30,
                name: 'invisible',
                itemStyle: placeHolderStyle
            }]
        },

    ]
};
setInterval(function() {
    myChart.setOption({
        series: [{
            name: 'Line 1',
            data: [{
                    value: Math.random(),
                    name: '01'
                }, {
                    value: 1-Math.random()+0.33,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                }

            ]
        }, {
            name: 'Line 2',
            data: [{
                value: Math.random(),
                name: '02'
            }, {
                value: 1-Math.random()+0.33,
                name: 'invisible',
                itemStyle: placeHolderStyle
            }]
        }, {
            name: 'Line 3',
            data: [{
                value: Math.random(),
                name: '03'
            }, {
                value: 1-Math.random()+0.33,
                name: 'invisible',
                itemStyle: placeHolderStyle
            }]
        }, {
            name: 'Line 4',
            data: [{
                value: Math.random(),
                name: '04'
            }, {
                value: 1-Math.random()+0.33,
                name: 'invisible',
                itemStyle: placeHolderStyle
            }]
        }, {
            name: 'Line 5',
            data: [{
                value: Math.random(),
                name: '05'
            }, {
                value: 1-Math.random()+0.33,
                name: 'invisible',
                itemStyle: placeHolderStyle
            }]
        }, ]
    });
}, 1000);