var num1 = 75;
var num2 = 55;
var num3 = 35;
var num4 = 20;
option = {
    backgroundColor: '#24262e',
    series: [
        {
            type: 'pie',
            radius: ['31%', '83%'],
            center: ['50%', '50%'],
            startAngle: 50,
            data: [{
                    hoverOffset: 1,
                    value: num4,
                    name: '',
                    itemStyle: {
                        color: 'rgba(60, 100, 183, .5)',
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
                    value: 100 - num4,
                    hoverAnimation: false,
                    itemStyle: {
                        color: 'rgba(251, 200, 79, 0)',
                    },
                }
            ]
        },
        {
            type: 'pie',
            radius: ['37%', '77%'],
            center: ['50%', '50%'],
            startAngle: 50,
            data: [{
                    hoverOffset: 1,
                    value: num3,
                    name: '',
                    itemStyle: {
                        color: 'rgba(0, 161, 162, .5)',
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
                        color: 'rgba(251, 200, 79, 0)',
                    },
                }
            ]
        },
        {
            type: 'pie',
            radius: ['43%', '71%'],
            center: ['50%', '50%'],
            startAngle: 50,
            data: [{
                    hoverOffset: 1,
                    value: num2,
                    name: '',
                    itemStyle: {
                        color: 'rgba(95, 227, 130, .5)',
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
                        color: 'rgba(251, 200, 79, 0)',
                    },
                }
            ]
        },
        {
            type: 'pie',
            radius: ['49%', '65%'],
            center: ['50%', '50%'],
            startAngle: 50,
            data: [{
                    hoverOffset: 1,
                    value: num1,
                    name: '',
                    itemStyle: {
                        color: 'rgba(255, 205, 38, .5)',
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
                        color: 'rgba(251, 200, 79, 0)',
                    },
                }
            ]
        },
        {
            type: 'pie',
            z:1,
            radius: ['54%', '60%'],
            center: ['50%', '50%'],
            data: [
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
                        color: 'rgba(255, 255, 255, 1)',
                    },
                }
            ]
        },
    ]
};