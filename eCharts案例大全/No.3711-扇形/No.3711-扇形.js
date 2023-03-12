var getNumber =[6,4];
var getType = ['男','女'];
//var xbzb = [6,4];

var rich = {
    name: {
        color: "#656565",
        fontSize: 13,
        padding: [6, 10],
        align: 'left'
    },
    percent: {
        align: 'center',
        fontSize: 13,
        padding: [5, 10]
    },
    hr: {
        borderColor: '#C8C8C8',
        width: '100%',
        borderWidth: 0.5,
        height: 0,
    }
}
//var colorList = ['#02CAB3','#4885FF', '#FEC67C', '#54C3FC', '#9991F6', '#FF78E7']

option = {
    tooltip: {
        show:false
    },
    series: [{
        name: '性别分布',
        type: "pie",
        radius: ['55%', '115%'],
        startAngle: 180,
        center: ['center', '83%'],
        roseType: "radius",
        labelLine: {
            normal: {
                show:false
            }
        },
        label: {
            normal: {
                show:false
            }
        },
        data: [{
           // value: getxb1,
            value:getNumber[0],
           // name: "女教师",
            name:getType[0],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#4C8DFA'
                    }, {
                        offset: 1,
                        color: '#5CCFFF'
                    }], false),
                }
            }
        }, {
            //value: 35 - getxb1,
            value:getNumber[1],
            //name: "男教师",
            name:getType[1],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#FFD18B'
                    }, {
                        offset: 1,
                        color: '#FDAD59'
                    }], false),
                }
            }
        }, {
            //value: 35,
            value:getNumber[0]+getNumber[1],
           // name: '',
            name:getType[2],
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderWidth: 0,
                    shadowBlur: 0,
                    borderColor: 'transparent',
                    shadowColor: 'transparent'
                }
            },
        }]
    }, {
        type: "pie",
        radius: ['55%', '130%'],
        startAngle: 180,
        hoverAnimation: false,
        center: ['center', '83%'],
        roseType: "radius",
        labelLine: {
            normal: {
                show: false,
            },
        },
        data: [{
            //value: getxb1,
            value:getNumber[0],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(76,141,250,.3)'
                    }, {
                        offset: 1,
                        color: 'rgba(92,207,255,.3)'
                    }], false),
                }
            }
        }, {
            //value: 35 - getxb1,
            value:getNumber[1],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(255,209,139,.3)'
                    }, {
                        offset: 1,
                        color: 'rgba(253,173,89,.3)'
                    }], false),
                }
            }
        }, {
            //value: 35,
            value:getNumber[0]+getNumber[1],
            //name: '',
            name:getType[2],
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderWidth: 0,
                    shadowBlur: 0,
                    borderColor: 'transparent',
                    shadowColor: 'transparent'
                }
            },
        }],
        z: -1
    },{
        name: '性别分布',
        type: "pie",
        radius: ['55%', '115%'],
        startAngle: 180,
        center: ['center', '83%'],
        roseType: "radius",
        labelLine: {
            normal: {
                length: 20,
                length2: 0,
                lineStyle: {
                    color: '#C8C8C8'
                }
            }
        },
        label: {
            normal: {
                formatter: params => {
                    return '{name|' + params.name + '}\n{hr|}\n{percent|' + getNumber[params.dataIndex] + '人} '
                },
                rich: rich,
                distanceToLabelLine: 0,
                padding: [-2, -4, 0, -4]
            }
        },
        data: [{
            //value: getxb1,
            value:getNumber[0],
            //name: "女教师",
            name:getType[0],
            itemStyle: {
                normal: {
                    color: '#4C8DFA',
                }
            }
        }, {
            //value: 35 - getxb1,
            value:getNumber[1],
            //name: "男教师",
            name:getType[1],
            itemStyle: {
                normal: {
                    color: '#FFD18B',
                }
            }
        }, {
            //value: 35,
            value:getNumber[0]+getNumber[1],
           // name: '',
            name:getType[2],
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderWidth: 0,
                    shadowBlur: 0,
                    borderColor: 'transparent',
                    shadowColor: 'transparent'
                }
            },
        }],
        z:-100
    }]
};
