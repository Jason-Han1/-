app.title = '迷宫';

function random(lower, upper) {
    return Math.floor(Math.random() * (upper - lower)) + lower;
}

var black = '#000';
var white = '#FFF';
var gray = '#EFEFEF';
var sAngle1 = random(0, 360);
var sAngle2 = random(0, 360);
var sAngle3 = random(0, 360);
var sAngle4 = random(0, 360);
var sAngle5 = random(0, 360);
var sAngle6 = random(0, 360);
var sAngle7 = random(0, 360);
var sAngle8 = random(0, 360);
var sAngle9 = random(0, 360);

option = {
    series: [
        //
        {
            type: 'pie',
            z: 1,
            //silent:true,
            startAngle: sAngle1,
            hoverAnimation: false,
            hoverOffset: 0,
            legendHoverLink: false,
            emphasis: {
                itemStyle: {
                    color: gray
                }
            },
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            radius: [280, 250],
            data: [
                //
                {
                    name: 'one',
                    itemStyle: {
                        borderColor: black,
                        borderWidth: 1,
                        color: gray
                    },
                    value: 1
                },
                {
                    name: 'two',
                    itemStyle: {
                        borderColor: black,
                        borderWidth: 1,
                        color: gray
                    },
                    value: 1
                },
                {
                    name: 'three',
                    itemStyle: {
                        borderColor: gray,
                        borderWidth: 3,
                        color: gray
                    },
                    emphasis: {
                        itemStyle: {
                            borderColor: gray,
                            borderWidth: 4,
                            color: gray
                        }
                    },
                    value: 0.05
                },
            ]
        },
        {
            type: 'pie',
            z: 2,
            startAngle: sAngle2,
            hoverAnimation: false,
            hoverOffset: 0,
            legendHoverLink: false,
            emphasis: {
                itemStyle: {
                    color: gray
                }
            },
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            radius: [250, 220],
            data: [
                //
                {
                    name: 'one',
                    itemStyle: {
                        borderColor: black,
                        borderWidth: 1,
                        color: gray
                    },
                    value: 1
                },
                {
                    name: 'two',
                    itemStyle: {
                        borderColor: black,
                        borderWidth: 1,
                        color: gray
                    },
                    value: 1
                },
                {
                    name: 'three',
                    itemStyle: {
                        borderColor: gray,
                        borderWidth: 3,
                        color: gray
                    },
                    emphasis: {
                        itemStyle: {
                            borderColor: gray,
                            borderWidth: 4,
                            color: gray
                        }
                    },
                    value: 0.05
                }
            ]
        },
        {
            type: 'pie',
            z: 3,
            startAngle: sAngle3,
            hoverAnimation: false,
            hoverOffset: 0,
            legendHoverLink: false,
            emphasis: {
                itemStyle: {
                    color: gray
                }
            },
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            radius: [220, 190],
            data: [
                //
                {
                    name: 'one',
                    itemStyle: {
                        borderColor: black,
                        borderWidth: 1,
                        color: gray
                    },
                    value: 1
                },
                {
                    name: 'two',
                    itemStyle: {
                        borderColor: black,
                        borderWidth: 1,
                        color: gray
                    },
                    value: 1
                },
                {
                    name: 'three',
                    itemStyle: {
                        borderColor: gray,
                        borderWidth: 3,
                        color: gray
                    },
                    emphasis: {
                        itemStyle: {
                            borderColor: gray,
                            borderWidth: 4,
                            color: gray
                        }
                    },
                    value: 0.05
                }
            ]
        },
        {
            type: 'pie',
            z: 4,
            startAngle: sAngle4,
            hoverAnimation: false,
            hoverOffset: 0,
            legendHoverLink: false,
            emphasis: {
                itemStyle: {
                    color: gray
                }
            },
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            radius: [190, 160],
            data: [
                //
                {
                    name: 'one',
                    itemStyle: {
                        borderColor: black,
                        borderWidth: 1,
                        color: gray
                    },
                    value: 1
                },
                {
                    name: 'two',
                    itemStyle: {
                        borderColor: black,
                        borderWidth: 1,
                        color: gray
                    },
                    value: 1
                },
                {
                    name: 'three',
                    itemStyle: {
                        borderColor: gray,
                        borderWidth: 3,
                        color: gray
                    },
                    emphasis: {
                        itemStyle: {
                            borderColor: gray,
                            borderWidth: 4,
                            color: gray
                        }
                    },
                    value: 0.05
                }
            ]
        },
        {
            type: 'pie',
            z: 5,
            startAngle: sAngle5,
            hoverAnimation: false,
            hoverOffset: 0,
            legendHoverLink: false,
            emphasis: {
                itemStyle: {
                    color: gray
                }
            },
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            radius: [160, 130],
            data: [
                //
                {
                    name: 'one',
                    itemStyle: {
                        borderColor: black,
                        borderWidth: 1,
                        color: gray
                    },
                    value: 1
                },
                {
                    name: 'two',
                    itemStyle: {
                        borderColor: black,
                        borderWidth: 1,
                        color: gray
                    },
                    value: 1
                },
                {
                    name: 'three',
                    itemStyle: {
                        borderColor: gray,
                        borderWidth: 3,
                        color: gray
                    },
                    emphasis: {
                        itemStyle: {
                            borderColor: gray,
                            borderWidth: 4,
                            color: gray
                        }
                    },
                    value: 0.05
                }
            ]
        },
        {
            type: 'pie',
            z: 6,
            startAngle: sAngle6,
            hoverAnimation: false,
            hoverOffset: 0,
            legendHoverLink: false,
            emphasis: {
                itemStyle: {
                    color: gray
                }
            },
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            radius: [130, 100],
            data: [
                //
                {
                    name: 'one',
                    itemStyle: {
                        borderColor: black,
                        borderWidth: 1,
                        color: gray
                    },
                    value: 1
                },
                {
                    name: 'two',
                    itemStyle: {
                        borderColor: black,
                        borderWidth: 1,
                        color: gray
                    },
                    value: 1
                },
                {
                    name: 'three',
                    itemStyle: {
                        borderColor: gray,
                        borderWidth: 3,
                        color: gray
                    },
                    emphasis: {
                        itemStyle: {
                            borderColor: gray,
                            borderWidth: 4,
                            color: gray
                        }
                    },
                    value: 0.05
                }
            ]
        },
        {
            type: 'pie',
            z: 7,
            startAngle: sAngle7,
            hoverAnimation: false,
            hoverOffset: 0,
            legendHoverLink: false,
            emphasis: {
                itemStyle: {
                    color: gray
                }
            },
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            radius: [100, 70],
            data: [
                //
                {
                    name: 'one',
                    itemStyle: {
                        borderColor: black,
                        borderWidth: 1,
                        color: gray
                    },
                    value: 1
                },
                {
                    name: 'two',
                    itemStyle: {
                        borderColor: black,
                        borderWidth: 1,
                        color: gray
                    },
                    value: 1
                },
                {
                    name: 'three',
                    itemStyle: {
                        borderColor: gray,
                        borderWidth: 3,
                        color: gray
                    },
                    emphasis: {
                        itemStyle: {
                            borderColor: gray,
                            borderWidth: 4,
                            color: gray
                        }
                    },
                    value: 0.05
                }
            ]
        },
        {
            type: 'pie',
            z: 8,
            startAngle: sAngle8,
            hoverAnimation: false,
            hoverOffset: 0,
            legendHoverLink: false,
            emphasis: {
                itemStyle: {
                    color: gray
                }
            },
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            radius: [70, 40],
            data: [
                //
                {
                    name: 'one',
                    itemStyle: {
                        borderColor: black,
                        borderWidth: 1,
                        color: gray
                    },
                    value: 1
                },
                {
                    name: 'two',
                    itemStyle: {
                        borderColor: black,
                        borderWidth: 1,
                        color: gray
                    },
                    value: 1
                },
                {
                    name: 'three',
                    itemStyle: {
                        borderColor: gray,
                        borderWidth: 3,
                        color: gray
                    },
                    emphasis: {
                        itemStyle: {
                            borderColor: gray,
                            borderWidth: 4,
                            color: gray
                        }
                    },
                    value: 0.05
                }
            ]
        },
        {
            type: 'pie',
            z: 9,
            startAngle: sAngle9,
            hoverAnimation: false,
            hoverOffset: 0,
            legendHoverLink: false,
            emphasis: {
                itemStyle: {
                    color: gray
                }
            },
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            radius: [40, 10],
            data: [
                //
                {
                    name: 'one',
                    itemStyle: {
                        borderColor: black,
                        borderWidth: 1,
                        color: gray
                    },
                    value: 1
                },
                {
                    name: 'two',
                    itemStyle: {
                        borderColor: black,
                        borderWidth: 1,
                        color: gray
                    },
                    value: 1
                },
                {
                    name: 'three',
                    itemStyle: {
                        borderColor: gray,
                        borderWidth: 3,
                        color: gray
                    },
                    emphasis: {
                        itemStyle: {
                            borderColor: gray,
                            borderWidth: 4,
                            color: gray
                        }
                    },
                    value: 0.05
                }
            ]
        },
    ]
}