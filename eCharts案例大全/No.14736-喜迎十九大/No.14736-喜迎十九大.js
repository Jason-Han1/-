option = {
    title: {
        text: '喜迎十九大',
        textStyle:{
            fontWeight:'bolder',
            fontFamily:'Arial',
            textShadowColor:'yellow',
            textShadowBlur:1,
            color:'yellow',
            fontSize:30
        },
        top:230,
        left:670
    },
     backgroundColor: new echarts.graphic.RadialGradient(0.62, 0.45, 1, [{
            offset: 0,
            color: '#fe9e80'
        }, {
            offset: 1,
            color: '#9bc9f1'
        }], false),
    xAxis: {
        boundaryGap: false,
        splitLine: {
            show: false
        },
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15']
    },
    yAxis: {
        min: 0,
        max: 11,
        type: 'value',
        splitLine: {
            show: false
        }
    },
    series: [{
        //mountain background
        type: 'line',
        smooth: true,
        areaStyle: {
            normal: {
                color: '#fff',
                opacity: 0.8
            }
        },
        data: [0, 0.5, 1, 1.5, 2, 2.5, 2, 1.5, 1, 0.5, 0, 0.5, 1, 1.5, 1.9],
        symbolSize: 0,
        lineStyle: {
            normal: {
                width: 0
            }
        },
        z:4
    },
    {
        //红旗
        type: 'line',
        smooth: true,
        areaStyle: {
            normal: {
                color: 'red',
                opacity:0.9
            }
        },
        data: [8.5, 9, 9.5, 10, 10.5, 11, 10.5, 10, 9.5, 9, 8.5, 9, 9.5, 10, 10.9],
        symbolSize: 0,
        lineStyle: {
            normal: {
                width: 0
            }
        },
        z:3
    }],
    graphic: [{
        type: 'group',
        id: 'textGroup1',
        left: 10,
        top: 28,
        bounding: 'raw',
        children: [{
            z:5,
                type: 'circle',
                shape: {
                    cx: 500,
                    cy: 300,
                    r: 50
                },
                style: {
                    fill: '#fff',
                    stroke: '#000',
                    lineWidth: '3'
                }

            }, {
                z:6,
                type: 'line',
                shape: {
                    x1: 510,
                    y1: 300,
                    x2: 540,
                    y2: 300,
                },
                style: {
                    fill: '#000',
                    stroke: '#000',
                    lineWidth: '3'
                }

            }, {
                type: 'line',
                shape: {
                    x1: 470,
                    y1: 300,
                    x2: 500,
                    y2: 300,
                },
                style: {
                    fill: '#000',
                    stroke: '#000',
                    lineWidth: '3'
                }

            }, {//右耳
                z:6,
                type: 'bezierCurve',
                shape: {
                    x1: 372,
                    y1: 268,
                    x2: 381,
                    y2: 269,
                    cpx1: 362,
                    cpy1: 201,
                    cpx2: 395,
                    cpy2: 204,
                },
                top: 200,
                left: 505,
                style: {
                    fill: '#fff',
                    stroke: '#000',
                    lineWidth: '3'
                }
            }, {//左耳
                z:6,
                type: 'bezierCurve',
                shape: {
                    x1: 372,
                    y1: 268,
                    x2: 381,
                    y2: 269,
                    cpx1: 333,
                    cpy1: 199,
                    cpx2: 380,
                    cpy2: 197,
                },
                top: 205,
                left: 455,
                style: {
                    fill: '#fff',
                    stroke: '#000',
                    lineWidth: '3'
                }
            }, {
                z:6,
                type: 'bezierCurve',
                shape: {
                    x1: 391,
                    y1: 230,
                    x2: 403,
                    y2: 166,
                    cpx1: 333,
                    cpy1: 199,
                    cpx2: 380,
                    cpy2: 197,
                },
                top: 335,
                left: 422,
                style: {
                    fill: '#fff',
                    stroke: '#000',
                    lineWidth: '3'
                }
            }, {
                z:6,
                type: 'bezierCurve',
                shape: {
                    x1: 382,
                    y1: 229,
                    x2: 408,
                    y2: 171,
                    cpx1: 333,
                    cpy1: 199,
                    cpx2: 380,
                    cpy2: 197,
                },
                top: 343,
                left: 432,
                style: {
                    fill: '#fff',
                    stroke: '#000',
                    lineWidth: '3'
                }
            }, {
                z:6,
                type: 'bezierCurve',
                shape: {
                    x1: 474,
                    y1: 211,
                    x2: 472,
                    y2: 119,
                    cpx1: 327,
                    cpy1: 203,
                    cpx2: 413,
                    cpy2: 198,
                },
                top: 347,
                left: 402,
                style: {
                    fill: '#fff',
                    stroke: '#000',
                    lineWidth: '3'
                }
            }, {
                z:6,
                type: 'bezierCurve',
                shape: {
                    x1: 430,
                    y1: 313,
                    x2: 460,
                    y2: 214,
                    cpx1: 465,
                    cpy1: 311,
                    cpx2: 490,
                    cpy2: 335,
                },
                top: 342,
                left: 490,
                style: {
                    fill: '#fff',
                    stroke: '#000',
                    lineWidth: '3'
                }
            }, {
                z:6,
                type: 'bezierCurve',
                shape: {
                    x1: 341,
                    y1: 244,
                    x2: 345,
                    y2: 232,
                    cpx1: 453,
                    cpy1: 193,
                    cpx2: 438,
                    cpy2: 154,
                },
                top: 302,
                left: 515,
                style: {
                    fill: '#fff',
                    stroke: '#000',
                    lineWidth: '3'
                }
            }, {
                z:6,
                type: 'bezierCurve',
                shape: {
                    x1: 443,
                    y1: 151,
                    x2: 428,
                    y2: 151,
                    cpx1: 300,
                    cpy1: 307,
                    cpx2: 374,
                    cpy2: 194,
                },
                top: 438,
                left: 385,
                style: {
                    fill: '#fff',
                    stroke: '#000',
                    lineWidth: '3'
                }
            }, {
                z:6,
                type: 'bezierCurve',
                shape: {
                    x1: 410,
                    y1: 275,
                    x2: 450,
                    y2: 190,
                    cpx1: 504,
                    cpy1: 232,
                    cpx2: 469,
                    cpy2: 212,
                },
                top: 438,
                left: 455,
                style: {
                    fill: '#fff',
                    stroke: '#000',
                    lineWidth: '3'
                }
            }, {
                z:6,
                type: 'bezierCurve',
                shape: {
                    x1: 410,
                    y1: 275,
                    x2: 452,
                    y2: 189,
                    cpx1: 482,
                    cpy1: 235,
                    cpx2: 469,
                    cpy2: 212,
                },
                top: 439,
                left: 445,
                style: {
                    fill: '#fff',
                    stroke: '#000',
                    lineWidth: '3'
                }
            }

        ]
    }]
};