option = {
    backgroundColor: '#0F2A5C',
    series: [{
            name: 'pie1',
            type: 'pie',
            clockWise: true,
            radius: ['52%', '50%'],
            center: ['50%', '50%'],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            hoverAnimation: false,
            data: [{
                    value: 40,
                    name: 'completed',
                    itemStyle: {
                        normal: {
                            borderWidth: 4,
                            borderColor: {
                                colorStops: [{
                                    offset: 0,
                                    color: '#00f7fb' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#00b3f2' // 100% 处的颜色
                                }]
                            },
                            color: { // 完成的圆环的颜色
                                colorStops: [{
                                    offset: 0,
                                    color: '#00f7fb' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#00b3f2' // 100% 处的颜色
                                }]
                            },
                            shadowColor: '#3dd4de',
                            shadowBlur: 10,
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
                    name: 'gap',
                    value: 100 - 20,
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            color: 'rgba(0, 0, 0, 0)',
                            borderColor: 'rgba(255,255,255,0.5)',
                            borderWidth: 0
                        }
                    }
                },
            ]
        },
        {
            name: '外边框',
            type: 'pie',
            hoverAnimation: false, //鼠标移入变大
            center: ['50%', '50%'],
            radius: ['52%', '52%'],
            label: {
                normal: {
                    show: false
                }
            },
            data: [{
                    value: 40,
                    name: 'completed',
                    itemStyle: {
                        normal: {
                            borderWidth: 1,
                            borderColor: {
                                colorStops: [{
                                    offset: 0,
                                    color: '#00f7fb' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#00b3f2' // 100% 处的颜色
                                }]
                            },
                            color: { // 完成的圆环的颜色
                                colorStops: [{
                                    offset: 0,
                                    color: '#00f7fb' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#00b3f2' // 100% 处的颜色
                                }]
                            },
                            shadowColor: '#3dd4de',
                            shadowBlur: 10,
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
                    name: 'gap',
                    value: 100 - 20,
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            color: 'rgba(0, 0, 0, 0)',
                            borderColor: 'rgba(255,255,255,0.5)',
                            borderWidth: 1
                        }
                    }
                },
            ]
        },
    ]
};