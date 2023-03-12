var passCount = 20;
var passRate = 0.32;
var passPercentage = passRate * 100 + '%';

var doingCount = 58;
var doingRate = 1;
var doingPercentage = doingRate * 100 + '%';

let placeHolderStyle = {
    normal: {
        label: {
            show: false
        },
        position: 'center',
        labelLine: {
            show: false
        },
        color: "rgba(0,0,0,0)",
        borderWidth: 0
    },
    emphasis: {
        color: "rgba(0,0,0,0)",
        borderWidth: 0
    }
};
let lightBlue = {
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0,
        color: '#99da69' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#01babc' // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
}

let lightBlueBoder = {
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0,
        color: '#01babc' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#99da69' // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
}

let lightYellow = {
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0,
        color: 'rgb(254,121,28)' // 0% 处的颜色
    }, {
        offset: 1,
        color: 'rgb(240,170,32)' // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
}

let lightYellowBorder = {
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0,
        color: 'rgb(240,170,32)' // 0% 处的颜色
    }, {
        offset: 1,
        color: 'rgb(254,121,28)' // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
}
option = {
    backgroundColor: 'black',
    title: [{
        text: '已完成',
        left: '25%',
        top: '80%',
        textAlign: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: '25',
            color: 'rgb(67,140,193)',
            textAlign: 'center',
        },
    }, {
        text: '未完成',
        left: '76%',
        top: '80%',
        textAlign: 'center',
        textStyle: {
            color: 'rgb(207,124,80)',
            fontWeight: 'normal',
            fontSize: '25',
            textAlign: 'center',
        },
    }],

    graphic: [{ //左
        type: 'text',
        left: '23%',
        top: '40%',
        style: {
            text: passCount + '项',
            fill: '#fff',
            width: 30,
            height: 30,
            fontSize: 23,
        }
    }, { //左
        type: 'text',
        left: '23%',
        top: '44%',
        style: {
            text: passPercentage,
            fill: '#fff',
            width: 30,
            height: 40,
            fontSize: 23,
        }
    }, { //右
        type: 'text',
        left: '73%',
        top: '40%',
        style: {
            text: doingCount + '项\n',
            fill: '#fff',
            width: 30,
            height: 30,
            fontSize: 23,
        }
    }, { //右
        type: 'text',
        left: '73%',
        top: '44%',
        style: {
            text: doingPercentage,
            fill: '#fff',
            width: 30,
            height: 40,
            fontSize: 23,
        }
    }],

    series: [{
            type: 'pie',
            hoverAnimation: false, //鼠标经过的特效
            radius: ['50%', '40%'],
            center: ['25%', '50%'],
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                    value: passRate * 100,
                    itemStyle: {
                        normal: {
                            color: lightBlue
                        }
                    },
                    //								label: passDataStyle,
                }, {
                    value: 133.3 - passRate * 100,
                    itemStyle: placeHolderStyle,
                },

            ]
        },
        {
            type: 'pie',
            hoverAnimation: false,
            radius: ['50%', '40%'],
            center: ['75%', '50%'],
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                    value: doingRate * 100,
                    itemStyle: {
                        normal: {
                            color: lightYellow
                        }
                    },
                }, {
                    value: 133.3 - doingRate * 100,
                    itemStyle: placeHolderStyle,
                },

            ]
        },

        //外圈的边框
        {
            type: 'pie',
            hoverAnimation: false, //鼠标经过的特效
            radius: ['50%', '55%'],
            center: ['25%', '50%'],
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                    value: 75,
                    itemStyle: {
                        normal: {
                            color: lightBlueBoder
                        }
                    },
                }, {
                    value: 25,
                    itemStyle: placeHolderStyle,
                },

            ]
        },
        {
            type: 'pie',
            hoverAnimation: false,
            radius: ['50%', '55%'],
            center: ['75%', '50%'],
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                    value: 75,
                    itemStyle: {
                        normal: {
                            color: lightYellowBorder
                        }
                    },
                }, {
                    value: 25,
                    itemStyle: placeHolderStyle,
                },

            ]
        },
    ]
};