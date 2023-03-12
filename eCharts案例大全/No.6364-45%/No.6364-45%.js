var num1 = 45;
var num2 = 70;
var num3 = 15;
var option = {
    backgroundColor: '#292c33',
    title: [
        {
            text: '45%',
            left: '19%',
            top: '44%',
            textAlign: 'center',
            textStyle: {
                fontSize: '8',
                fontWeight: '600',
                color: '#0091C8',
                textAlign: 'center',
            },
        }, {
            text: '70%',
            left: '49%',
            top: '44%',
            textAlign: 'center',
            textStyle: {
                fontSize: '8',
                fontWeight: '600',
                color: '#0091C8',
                textAlign: 'center',
            },
        }, {
            text: '15%',
            left: '79%',
            top: '44%',
            textAlign: 'center',
            textStyle: {
                fontSize: '8',
                fontWeight: '600',
                color: '#0091C8',
                textAlign: 'center',
            },
        }, {
            text: '电梯',
            left: '19%',
            top: '75%',
            textAlign: 'center',
            textStyle: {
                fontSize: '12',
                fontWeight: '600',
                color: '#ABADB5',
                textAlign: 'center',
            },
        }, {
            text: '照明',
            left: '49%',
            top: '75%',
            textAlign: 'center',
            textStyle: {
                fontSize: '12',
                fontWeight: '600',
                color: '#ABADB5',
                textAlign: 'center',
            },
        }, {
            text: '其他',
            left: '79%',
            top: '75%',
            textAlign: 'center',
            textStyle: {
                fontSize: '12',
                fontWeight: '600',
                color: '#ABADB5',
                textAlign: 'center',
            },
        }],
    series: [
        {
            type: 'pie',
            radius: ['29%', '34%'],
            center: ['20%', '50%'],
            data: [{
                hoverOffset: 1,
                value: num1,
                name: '电梯',
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgb(0,113,200,1)',
                            },
                            {
                                offset: 1,
                                color: 'rgb(3,221,255,1)',
                            },
                        ],
                        false
                    ),
                },
                label: {
                    show: false
                },
                labelLine: {
                    normal: {
                        smooth: true,
                        lineStyle: {
                            width: 0
                        }
                    }
                },
                hoverAnimation: false,
            },
            {
                label: {
                    show: false
                },
                labelLine: {
                    normal: {
                        smooth: true,
                        lineStyle: {
                            width: 0
                        }
                    }
                },
                value: 100 - num1,
                hoverAnimation: false,
                itemStyle: {
                    color: '#30333a',
                },
            }
            ]
        },
        {
            type: 'pie',
            radius: ['35%', '38%'],
            center: ['20%', '50%'],
            data: [{
                label: {
                    show: false
                },
                labelLine: {
                    normal: {
                        smooth: true,
                        lineStyle: {
                            width: 0
                        }
                    }
                },
                value: 100 - num1,
                hoverAnimation: false,
                itemStyle: {
                    color: '#30333a',
                },
            }]
        },
        {
            type: 'pie',
            radius: ['28%', '25%'],
            center: ['20%', '50%'],
            data: [{
                label: {
                    show: false
                },
                labelLine: {
                    normal: {
                        smooth: true,
                        lineStyle: {
                            width: 0
                        }
                    }
                },
                value: 100 - num1,
                hoverAnimation: false,
                itemStyle: {
                    color: '#30333a',
                },
            }]
        },

        {
            type: 'pie',
            radius: ['29%', '34%'],
            center: ['50%', '50%'],
            data: [{
                hoverOffset: 1,
                value: num2,
                name: '照明',
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgb(0,113,200,1)',
                            },
                            {
                                offset: 1,
                                color: 'rgb(3,221,255,1)',
                            },
                        ],
                        false
                    ),
                },
                label: {
                    show: false
                },
                labelLine: {
                    normal: {
                        smooth: true,
                        lineStyle: {
                            width: 0
                        }
                    }
                },
                hoverAnimation: false,
            },
            {
                label: {
                    show: false
                },
                labelLine: {
                    normal: {
                        smooth: true,
                        lineStyle: {
                            width: 0
                        }
                    }
                },
                value: 100 - num2,
                hoverAnimation: false,
                itemStyle: {
                    color: '#30333a',
                },
            }
            ]
        },
        {
            type: 'pie',
            radius: ['35%', '38%'],
            center: ['50%', '50%'],
            data: [{
                label: {
                    show: false
                },
                labelLine: {
                    normal: {
                        smooth: true,
                        lineStyle: {
                            width: 0
                        }
                    }
                },
                value: 100 - num2,
                hoverAnimation: false,
                itemStyle: {
                    color: '#30333a',
                },
            }]
        },
        {
            type: 'pie',
            radius: ['28%', '25%'],
            center: ['50%', '50%'],
            data: [{
                label: {
                    show: false
                },
                labelLine: {
                    normal: {
                        smooth: true,
                        lineStyle: {
                            width: 0
                        }
                    }
                },
                value: 100 - num3,
                hoverAnimation: false,
                itemStyle: {
                    color: '#30333a',
                },
            }]
        },

        {
            type: 'pie',
            radius: ['29%', '34%'],
            center: ['80%', '50%'],
            data: [{
                hoverOffset: 1,
                value: num3,
                name: '其他',
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgb(0,113,200,1)',
                            },
                            {
                                offset: 1,
                                color: 'rgb(3,221,255,1)',
                            },
                        ],
                        false
                    ),
                },
                label: {
                    show: false
                },
                labelLine: {
                    normal: {
                        smooth: true,
                        lineStyle: {
                            width: 0
                        }
                    }
                },
                hoverAnimation: false,
            },
            {
                label: {
                    show: false
                },
                labelLine: {
                    normal: {
                        smooth: true,
                        lineStyle: {
                            width: 0
                        }
                    }
                },
                value: 100 - num3,
                hoverAnimation: false,
                itemStyle: {
                    color: '#30333a',
                },
            }
            ]
        },
        {
            type: 'pie',
            radius: ['35%', '38%'],
            center: ['80%', '50%'],
            data: [{
                label: {
                    show: false
                },
                labelLine: {
                    normal: {
                        smooth: true,
                        lineStyle: {
                            width: 0
                        }
                    }
                },
                value: 100 - num3,
                hoverAnimation: false,
                itemStyle: {
                    color: '#30333a',
                },
            }]
        },
        {
            type: 'pie',
            radius: ['28%', '25%'],
            center: ['80%', '50%'],
            data: [{
                label: {
                    show: false
                },
                labelLine: {
                    normal: {
                        smooth: true,
                        lineStyle: {
                            width: 0
                        }
                    }
                },
                value: 100 - num3,
                hoverAnimation: false,
                itemStyle: {
                    color: '#30333a',
                },
            }]
        },



    ]
};