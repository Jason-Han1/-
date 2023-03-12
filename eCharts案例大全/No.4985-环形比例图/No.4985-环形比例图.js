var aData=[1000,648]
var value = aData[1];
        var toatl = aData[0];
        var value1 = value / toatl * 100;
        var value2 = (value / toatl + 0.05) * 100;
        var endAngle = '';
        var splitNumber = ''
        if (value === toatl) {
            endAngle = -269.9;
            splitNumber = 12
        } else {
            endAngle = (-270 + 359.9 * ((toatl - value) / toatl));
            splitNumber = Math.floor((90 - endAngle) / 30)
        }

option = {
    backgroundColor:"#000",
     title: [{
                text: '{a|' + toatl + '}',
                x: 'center',
                y: 'center',
                textStyle: {
                    rich: {
                        a: {
                            fontSize: 64,
                            color: '#FFFFFF'
                        },


                    }
                }
            },
            ],

            series: [
                {
                    type: 'pie',
                    radius: ['88%', '65%'],
                    silent: true,
                    clockwise: true,
                    startAngle: 90,
                    z: 0,
                    zlevel: 0,
                    label: {
                        normal: {
                            position: "center",

                        }
                    },
                    data: [{
                        value: value1,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: { // 完成的圆环的颜色
                                    colorStops: [{
                                        offset: 0,
                                        color: '#514CB1' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#895CC6' // 100% 处的颜色
                                    }]
                                },
                            }
                        }
                    },
                    {
                        value: 100 - value1,
                        name: "",
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        // transparent
                        itemStyle: {
                            normal: {
                                color: "transparent"
                            }
                        }
                    }
                    ]
                },
                // color: "rgba(137,92,198,0.2)"
                {
                    type: 'pie',
                    radius: ['100%', '65%'],
                    silent: true,
                    clockwise: true,
                    startAngle: 90,
                    z: -1,
                    zlevel: -1,
                    label: {
                        normal: {
                            position: "center",

                        }
                    },
                    data: [{
                        value: value2,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: "rgba(137,92,198,0.2)"

                            }
                        }
                    },
                    {
                        value: 100 - value2,
                        name: "",
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        // transparent
                        itemStyle: {
                            normal: {
                                color: "transparent"
                            }
                        }
                    }
                    ]
                },
                {
                    name: "",
                    type: "gauge",
                    radius: "100%",
                    center: ['50%', '50%'],
                    startAngle: '90',
                    endAngle: endAngle,
                    splitNumber: splitNumber,
                    hoverAnimation: true,
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        length: "35%",
                        lineStyle: {
                            width: 4,
                            color: "#000"
                        }
                    },
                    axisLabel: {
                        show: false
                    },
                    pointer: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            opacity: 0
                        }
                    },
                    detail: {
                        show: false
                    },
                    data: [{
                        value: 0,
                        name: ""
                    }]
                },

            ]
};