var pushArrOrder = [{
    "name": "2月工单数",
    "data": [{
        name: "2月工单数",
        value: 20
    }, {
        value: 493
    }]
}, {
    "name": "2月新建工单数",
    "data": [{
        "name": "2月新建工单数",
        value: 18
    }, {
        value: 406
    }]
}, {
    "name": "2月扩容工单数",
    "data": [{
        "name": "2月扩容工单数",
        value: 1
    }, {
        value: 78
    }]
}, {
    "name": "2月回收工单数",
    "data": [{
        "name": "2月回收工单数",
        value: 1
    }, {
        value: 9
    }]
}]
var pieOrderSeries = []; //工单数

var circleRadius = ['12%', '18%'];
var center = [
    ['17%', '30%'],
    ['57%', '30%'],
    ['17%', '60%'],
    ['57%', '60%']
];
var labelTextObjectNoColor = {
    normal: {
        show: false,
        formatter: function(params, i) {
            return parseInt(params.value / (params.percent / 100));
        },
        position: 'center',
        textStyle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#fff'
        }
    }
}
var labelTextObjectColor = {
    normal: {
        formatter: function(params, i) {
            return '{c|' + params.data.name + '}\n{hr|}\n{d|' + params.value + '}';
        },
        rich: {
            b: {
                fontSize: 18,
                color: '#f5f08a',
                align: 'left',
                padding: 4
            },
            hr: {
                borderColor: '#00e9e2',
                width: '100%',
                borderWidth: 2,
                height: 0
            },
            d: {
                fontSize: 18,
                color: '#f5f08a',
                align: 'left',
                padding: 4
            },
            c: {
                fontSize: 18,
                color: '#f5f08a',
                align: 'left',
                padding: 4
            },
            bigwhite: {
                color: "#fff",
                fontSize: 20
            }
        },
        position: 'outside',
        show: true,
    }
}

for (let j = 0; j < pushArrOrder.length; j++) {
    pieOrderSeries.push({
        name: pushArrOrder[j].name,
        center: center[j],
        radius: circleRadius,
        type: 'pie',
        startAngle: 45,
        hoverAnimation: false,
        color: ["#f9f48e", "#14a7ae"],
        data: [{
            name: pushArrOrder[j].data[0].name,
            value: pushArrOrder[j].data[0].value,
            label: labelTextObjectColor
        }, {
            value: pushArrOrder[j].data[1].value,
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: labelTextObjectNoColor
        }]
    })
}
option = {
    baseOption: {
        timeline: {
            show: false,
            axisType: 'category',
            autoPlay: true,
            symbolSize: 15,
            playInterval: 2000,
            label: {
                normal: {
                    color: '#fff',
                    fontSize: 16
                }
            },
            lineStyle: {
                color: "#0b4e86"
            },
            itemStyle: {
                normal: {
                    color: '#f00',
                    borderColor: "#00aeff"
                }

            },
            controlStyle: {
                showPlayBtn: false,
                normal: {
                    color: "#f00",
                    borderColor: "#0b4e86"
                }
            },
            data: ['1月', '2月', '3月'],
        },
        backgroundColor:"#013d5a",
        title: [{
            text: '100',
            left: '15.5%',
            top: '28.5%',
            textAlign: 'left',
            textStyle: {
                color: "#fff",
                fontSize: 20
            }
        }, {
            text: '100',
            left: '55.5%',
            top: '28.5%',
            textAlign: 'left',
            textStyle: {
                color: "#fff",
                fontSize: 20
            }
        }, {
            text: '100',
            left: '15.5%',
            top: '58.5%',
            textAlign: 'left',
            textStyle: {
                color: "#fff",
                fontSize: 20
            }
        }, {
            text: '100',
            left: '55.5%',
           top: '58.5%',
            textAlign: 'left',
            textStyle: {
                color: "#fff",
                fontSize: 20
            }
        }, {
            text: '工单总数',
            left: '14%',
            top: '42%',
            textAlign: 'left',
            textStyle: {
                color: "#fff",
                fontSize: 16
            }
        }, {
            text: '新建工单总数',
            left: '52%',
            top: '42%',
            textAlign: 'left',
            textStyle: {
                color: "#fff",
                fontSize: 16
            }
        }, {
            text: '扩容工单总数',
            left: '12%',
            top: '72%',
            textAlign: 'left',
            textStyle: {
                color: "#fff",
                fontSize: 16
            }
        }, {
            text: '回收工单总数',
            left: '52%',
            top: '72%',
            textAlign: 'left',
            textStyle: {
                color: "#fff",
                fontSize: 16
            }
        }],
        series: pieOrderSeries,
    },

    options: [{
            title: [{
                text: '94',
            }, {
                text: '90',
            }, {
                text: '60'
            }, {
                text: '70'
            }],
            series: [{
                    data: [{
                        name: "1月",
                        value: 21,
                        label: labelTextObjectColor
                    }, {
                        value: 73,
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        label: labelTextObjectNoColor
                    }]
                },
                {
                    data: [{
                        name: "1月",
                        value: 40,
                        label: labelTextObjectColor
                    }, {
                        value: 50,
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        label: labelTextObjectNoColor
                    }]
                },
                {
                    data: [{
                        name: "1月",
                        value: 50,
                        label: labelTextObjectColor
                    }, {
                        value: 10,
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        label: labelTextObjectNoColor
                    }]
                },
                {
                    data: [{
                        name: "1月",
                        value: 10,
                        label: labelTextObjectColor
                    }, {
                        value: 60,
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        label: labelTextObjectNoColor
                    }]
                },
            ]
        },
        {
            title: [{
                text: '60',
            }, {
                text: '97',
            }, {
                text: '24'
            }, {
                text: '92'
            }],
            series: [{
                    data: [{
                        name: "2月",
                        value: 13,
                        label: labelTextObjectColor
                    }, {
                        value: 47,
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        label: labelTextObjectNoColor
                    }]
                },
                {
                    data: [{
                        name: "2月",
                        value: 10,
                        label: labelTextObjectColor
                    }, {
                        value: 87,
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        label: labelTextObjectNoColor
                    }]
                },
                {
                    data: [{
                        name: "2月",
                        value: 1,
                        label: labelTextObjectColor
                    }, {
                        value: 23,
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        label: labelTextObjectNoColor
                    }]
                },
                {
                    data: [{
                        name: "2月",
                        value: 12,
                        label: labelTextObjectColor
                    }, {
                        value: 80,
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        label: labelTextObjectNoColor
                    }]
                },
            ]
        },
        {
            title: [{
                text: '50',
            }, {
                text: '56',
            }, {
                text: '26'
            }, {
                text: '54'
            }],
            series: [{
                    data: [{
                        name: "3月",
                        value: 3,
                        label: labelTextObjectColor
                    }, {
                        value: 47,
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        label: labelTextObjectNoColor
                    }]
                },
                {
                    data: [{
                        name: "3月",
                        value: 9,
                        label: labelTextObjectColor
                    }, {
                        value: 47,
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        label: labelTextObjectNoColor
                    }]
                },
                {
                    data: [{
                        name: "3月",
                        value: 3,
                        label: labelTextObjectColor
                    }, {
                        value: 23,
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        label: labelTextObjectNoColor
                    }]
                },
                {
                    data: [{
                        name: "3月",
                        value: 4,
                        label: labelTextObjectColor
                    }, {
                        value: 50,
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        label: labelTextObjectNoColor
                    }]
                },
            ]
        },
    ]
};