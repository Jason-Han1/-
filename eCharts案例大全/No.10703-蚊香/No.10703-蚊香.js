var dataStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        shadowBlur: 10,
        shadowColor: 'rgba(40, 40, 40, 1)',
    }
};
var placeHolderStyle = {
    normal: {
        color: 'rgba(0,0,0,0.1)',

        // label: {show:false},
        // labelLine: {show:false},
        shadowBlur: 1,
        shadowColor: 'rgba(33, 33, 33, 1)',
        borderWidth: 1,
        borderColor: '#000',
    },
    emphasis: {
        color: 'rgba(0,0,0,0)'
    }
};
option = {
    backgroundColor: '#212121',
    color: ["#333"],
    tooltip: {
        show: true,
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    // legend: {
    //     itemGap: 12,
    //     textStyle: {
    //         color: "#fff",
    //     },
    //     data: ['A', 'B', 'C', 'D', 'E', 'F']
    // },

    series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: false,
            radius: [180, 200],
            itemStyle: dataStyle,
            hoverAnimation: false,
            data: [{
                    value: 300,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: { // 完成的圆环的颜色
                                colorStops: [{
                                    offset: 0,
                                    color: '#00cefc' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#367bec' // 100% 处的颜色
                                }]
                            },
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    }
                },
                {
                    value: 3000,
                    name: 'A'
                }

            ]
        },
        {
            name: 'Line 2',
            type: 'pie',
            clockWise: false,
            radius: [160, 180],
            itemStyle: dataStyle,
            hoverAnimation: false,

            data: [{
                    value: 270,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: { // 完成的圆环的颜色
                                colorStops: [{
                                    offset: 0,
                                    color: '#00cefc' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#367bec' // 100% 处的颜色
                                }]
                            },
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    },
                },
                {
                    value: 2000,
                    name: 'B'
                }
            ]
        },
        {
            name: 'Line 3',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: [140, 160],
            itemStyle: dataStyle,

            data: [{
                    value: 240,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: { // 完成的圆环的颜色
                                colorStops: [{
                                    offset: 0,
                                    color: '#00cefc' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#367bec' // 100% 处的颜色
                                }]
                            },
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    },
                },
                {
                    value: 1000,
                    name: 'C'
                }
            ]
        },
        {
            name: 'Line 4',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: [120, 140],
            itemStyle: dataStyle,

            data: [{
                    value: 210,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: { // 完成的圆环的颜色
                                colorStops: [{
                                    offset: 0,
                                    color: '#00cefc' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#367bec' // 100% 处的颜色
                                }]
                            },
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    },
                },
                {
                    value: 500,
                    name: 'D'
                }
            ]
        },
        {
            name: 'Line 5',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: [100, 120],
            itemStyle: dataStyle,

            data: [{
                    value: 180,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: { // 完成的圆环的颜色
                                colorStops: [{
                                    offset: 0,
                                    color: '#00cefc' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#367bec' // 100% 处的颜色
                                }]
                            },
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    },
                },
                {
                    value: 300,
                    name: 'E'
                }
            ]
        },

    ]
};