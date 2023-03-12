var num1 = 45;
var num2 = 70;
var num3 = 15;
var num4 = 55;
var num5 = 65;
var num6 = 75;
option = {
    backgroundColor: '#292c33',
    title: [{
        text: 'Donut Chart',
        x: '50%',
        y: 10,
        textAlign: 'center',
        textStyle: {
            fontSize: '30',
            fontWeight:'600',
            color: '#fff',
            textAlign: 'center',
        },
    },{
        text: '45%',
        left: '19.5%',
        top: '27%',
        textAlign: 'center',
        textStyle: {
            fontSize: '30',
            fontWeight:'600',
            color: 'rgba(251, 200, 79, 1)',
            textAlign: 'center',
        },
    }, {
        text: '70%',
        left: '49.5%',
        top: '27%',
        textAlign: 'center',
        textStyle: {
            fontSize: '30',
            fontWeight:'600',
            color: 'rgba(232, 85, 63, 1)',
            textAlign: 'center',
        },
    },{
        text: '15%',
        left: '79.5%',
        top: '27%',
        textAlign: 'center',
        textStyle: {
            fontSize: '30',
            fontWeight:'600',
            color: 'rgba(89, 180, 157, 1)',
            textAlign: 'center',
        },
    },{
        text: '55%',
        left: '19.5%',
        top: '71.5%',
        textAlign: 'center',
        textStyle: {
            fontSize: '30',
            fontWeight:'600',
            color: 'rgba(251, 200, 79, 1)',
            textAlign: 'center',
        },
    }, {
        text: '65%',
        left: '49.5%',
        top: '71.5%',
        textAlign: 'center',
        textStyle: {
            fontSize: '30',
            fontWeight:'600',
            color: 'rgba(232, 85, 63, 1)',
            textAlign: 'center',
        },
    },{
        text: '75%',
        left: '79.5%',
        top: '71.5%',
        textAlign: 'center',
        textStyle: {
            fontSize: '30',
            fontWeight:'600',
            color: 'rgba(89, 180, 157, 1)',
            textAlign: 'center',
        },
    },],
    series: [
        {
            type: 'pie',
            radius: ['30%', '33%'],
            center: ['20%', '30%'],
            data: [{
                    hoverOffset: 1,
                    value: num1,
                    name: '虚拟主机',
                    itemStyle: {
                        color: 'rgba(251, 200, 79, 1)',
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
                        color: 'rgba(251, 200, 79, .2)',
                    },
                }
            ]
        },
        {
            type: 'pie',
            radius: ['35%', '38%'],
            center: ['20%', '30%'],
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
                    color: 'rgba(63, 66, 73, .3)',
                },
            }]
        },
        {
            type: 'pie',
            radius: ['28%', '25%'],
            center: ['20%', '30%'],
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
                    color: 'rgba(63, 66, 73, .3)',
                },
            }]
        },

        {
            type: 'pie',
            radius: ['30%', '33%'],
            center: ['50%', '30%'],
            data: [{
                    hoverOffset: 1,
                    value: num2,
                    name: '虚拟主机',
                    itemStyle: {
                        color: 'rgba(232, 85, 63, 1)',
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
                        color: 'rgba(232, 85, 63, .2)',
                    },
                }
            ]
        },
        {
            type: 'pie',
            radius: ['35%', '38%'],
            center: ['50%', '30%'],
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
                    color: 'rgba(63, 66, 73, .3)',
                },
            }]
        },
        {
            type: 'pie',
            radius: ['28%', '25%'],
            center: ['50%', '30%'],
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
                    color: 'rgba(63, 66, 73, .3)',
                },
            }]
        },

        {
            type: 'pie',
            radius: ['30%', '33%'],
            center: ['80%', '30%'],
            data: [{
                    hoverOffset: 1,
                    value: num3,
                    name: '虚拟主机',
                    itemStyle: {
                        color: 'rgba(89, 180, 157, 1)',
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
                        color: 'rgba(89, 180, 157, .2)',
                    },
                }
            ]
        },
        {
            type: 'pie',
            radius: ['35%', '38%'],
            center: ['80%', '30%'],
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
                    color: 'rgba(63, 66, 73, .3)',
                },
            }]
        },
        {
            type: 'pie',
            radius: ['28%', '25%'],
            center: ['80%', '30%'],
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
                    color: 'rgba(63, 66, 73, .3)',
                },
            }]
        },
        
        {
            type: 'pie',
            radius: ['39.5%', '30%'],
            center: ['20%', '75%'],
            data: [
                {
                    hoverOffset: 1,
                    value: num1,
                    name: '虚拟主机',
                    itemStyle: {
                        color: 'rgba(251, 200, 79, 1)',
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
                        color: 'rgba(251, 200, 79, .2)',
                    },
                }
            ]
        },
        {
            type: 'pie',
            radius: ['31%', '36%'],
            center: ['20%', '75%'],
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
                    color: '#3d3d3d',
                },
            }]
        },
        {
            type: 'pie',
            radius: ['35%', '33.5%'],
            center: ['20%', '75%'],
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
                    color: '#000',
                },
            }]
        },
        {
            type: 'pie',
            z:'1', 
            radius: ['36%', '27.5%'],
            center: ['20%', '75%'],
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
                    color: '#3d3d3d',
                },
            }]
        },
        {
            type: 'pie',
            z:'1', 
            radius: ['37%', '30.7%'],
            center: ['20%', '75%'],
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
                value: 100 - num5,
                hoverAnimation: false,
                itemStyle: {
                    color: '#000',
                },
            }]
        },
        
        {
            type: 'pie',
            radius: ['39.5%', '30%'],
            center: ['50%', '75%'],
            data: [
                {
                    hoverOffset: 1,
                    value: num1,
                    name: '虚拟主机',
                    itemStyle: {
                        color: 'rgba(232, 85, 63, 1)',
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
                        color: 'rgba(232, 85, 63, .2)',
                    },
                }
            ]
        },
        {
            type: 'pie',
            radius: ['31%', '36%'],
            center: ['50%', '75%'],
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
                    color: '#3d3d3d',
                },
            }]
        },
        {
            type: 'pie',
            radius: ['35%', '33.5%'],
            center: ['50%', '75%'],
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
                    color: '#000',
                },
            }]
        },
        {
            type: 'pie',
            z:'1', 
            radius: ['36%', '27.5%'],
            center: ['50%', '75%'],
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
                    color: '#3d3d3d',
                },
            }]
        },
        {
            type: 'pie',
            z:'1', 
            radius: ['37%', '30.7%'],
            center: ['50%', '75%'],
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
                value: 100 - num5,
                hoverAnimation: false,
                itemStyle: {
                    color: '#000',
                },
            }]
        },
        
        {
            type: 'pie',
            radius: ['39.5%', '30%'],
            center: ['80%', '75%'],
            data: [
                {
                    hoverOffset: 1,
                    value: num1,
                    name: '虚拟主机',
                    itemStyle: {
                        color: 'rgba(89, 180, 157, 1)',
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
                        color: 'rgba(89, 180, 157, .2)',
                    },
                }
            ]
        },
        {
            type: 'pie',
            radius: ['31%', '36%'],
            center: ['80%', '75%'],
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
                    color: '#3d3d3d',
                },
            }]
        },
        {
            type: 'pie',
            radius: ['35%', '33.5%'],
            center: ['80%', '75%'],
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
                    color: '#000',
                },
            }]
        },
        {
            type: 'pie',
            z:'1', 
            radius: ['36%', '27.5%'],
            center: ['80%', '75%'],
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
                    color: '#3d3d3d',
                },
            }]
        },
        {
            type: 'pie',
            z:'1', 
            radius: ['37%', '30.7%'],
            center: ['80%', '75%'],
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
                value: 100 - num5,
                hoverAnimation: false,
                itemStyle: {
                    color: '#000',
                },
            }]
        },

       

    ]
};