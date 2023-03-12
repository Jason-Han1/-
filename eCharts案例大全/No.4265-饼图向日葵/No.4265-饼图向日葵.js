var data = [];

var r = 150; //最低角度
var rAmplitude = 50;


var pieData = [20, 30, 25, 25, 20, 35, 30, 40, 35, 44]; //饼图数据
var pieDataSum = 304; //饼图数据和
var _angle = (360 / 304); //每一个饼图数据对应角度
var sumange = 0;

for (var i = 0; i < pieData.length; i++) {

    for (var j = 0; j < pieData[i]; j++) {
        var _mid = Math.ceil(pieData[i] / 2);
        var _midArr = [0, _mid, pieData[i]];
    }
    for (var m = 0; m < 3; m++) {
        var r2 = r + (pieData[i] + rAmplitude) * Math.sin(Math.PI * (0 + _midArr[m] / pieData[i])); //数据高度
        var a1 = (Number(_angle * _midArr[m]) + Number(sumange)); //数据角度
        data.push([r2, a1]);
    }
    sumange = _angle * pieData[i] + sumange;
}

option = {

    title: {
        text: ''
    },

    polar: {},
    tooltip: {
        trigger: 'item'
    },
    angleAxis: {
        type: 'value',
        show: false
    },
    radiusAxis: {
        show: false,
        max: 275
    },
    series: [{
            coordinateSystem: 'polar',
            name: 'line',
            type: 'line',

            data: data,
            symbolSize: 0,
            symbol: 'circle',
            areaStyle: {
                normal: {
                    color: "yellow"
                }
            },
            lineStyle: {
                normal: {
                    color: '#C25353',
                    width: 1
                }
            }
        },
        {
            name: 'A',
            type: 'pie',
            radius: '44%',
            center: ["50%", "50%"],
            itemStyle: {
                normal: {
                    borderColor: 'rgba(0,0,0,0)',
                    borderWidth: 0
                },
                emphasis: {
                    borderColor: 'rgba(0,0,0,0)',
                    borderWidth: 0
                }
            },
            label: {
                normal: {
                    show: true,
                    position: "outside",
                    color: 'transparent',
                    formatter(d) {
                        return ''
                    }
                },
                emphasis: {
                    show: true,
                    position: 'outside',
                    fontSize: 20,
                    color: "blue",
                    formatter(d) {
                        return d.name + d.value
                    }
                }
            },
            labelLine: {

                normal: {
                    show: false,
                    smooth: true,
                    length2: 0
                },
                emphasis: {
                    show: false,
                    smooth: true,
                    length2: 0
                }
            },

            data: [{
                    value: 20,
                    name: 'A1',
                    labelLine: {
                        normal: {
                            length: 42,
                            lineStyle: {
                                width: 4
                            }
                        }
                    }
                },
                {
                    value: 30,
                    name: 'A2',
                    labelLine: {
                        normal: {
                            length: 12,
                            lineStyle: {
                                width: 2
                            }
                        }
                    }
                },
                {
                    value: 25,
                    name: 'A3',
                    labelLine: {
                        normal: {
                            length: 22,
                            lineStyle: {
                                width: 2
                            }
                        }
                    }
                },
                {
                    value: 25,
                    name: 'A4',
                    labelLine: {
                        normal: {
                            length: 8,
                            lineStyle: {
                                width: 2
                            }
                        }
                    }
                },
                {
                    value: 20,
                    name: 'A5',
                    labelLine: {
                        normal: {
                            length: 16,
                            lineStyle: {
                                width: 2
                            }
                        }
                    }
                },
                {
                    value: 35,
                    name: 'A6',
                    labelLine: {
                        normal: {
                            length: 12,
                            lineStyle: {
                                width: 2
                            }
                        }
                    }
                },
                {
                    value: 30,
                    name: 'A7',
                    labelLine: {
                        normal: {
                            length: 5,
                            lineStyle: {
                                width: 2
                            }
                        }
                    }
                },
                {
                    value: 40,
                    name: 'A8',
                    labelLine: {
                        normal: {
                            length: 71,
                            lineStyle: {
                                width: 7
                            }
                        }
                    }
                },
                {
                    value: 35,
                    name: 'A9',
                    labelLine: {
                        normal: {
                            length: 25,
                            lineStyle: {
                                width: 2
                            }
                        }
                    }
                },
                {
                    value: 44,
                    name: 'A10',
                    labelLine: {
                        normal: {
                            length: 41,
                            lineStyle: {
                                width: 4
                            }
                        }
                    }
                }
            ]
        }
    ],
    animation: false
};