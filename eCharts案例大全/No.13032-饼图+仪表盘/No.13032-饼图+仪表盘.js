option = {
    backgroundColor: '#0D1627',
    tooltip: {
        trigger: "item"
    },
    series: [
        {
            name: "",
            type: "gauge",
            radius: "72%",
            startAngle: 0,
            endAngle: 359.9,
            splitNumber: 100,
            hoverAnimation: true,
            axisTick: {
                show: false
            },
            splitLine: {
                length: 40,
                lineStyle: {
                    width: 5,
                    color: "#0D1627"
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
        {
            name: "",
            type: "pie",
            radius: ["75%","80%"],
            hoverAnimation: true,
            z: 0,
            zlevel: 0,
            label: {
                normal: {
                    show: false,
                    position: "center"
                }
            },  
            data: [{
                    value: 60.5,
                    name: "",
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: "rgba(0,170,255,.9)"
                        }
                    }
                },
                {
                    value: 90.6,
                    name: "",
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: "rgba(255,103,103,.9)"
                        }
                    }
                },
                {
                    value: 40.6,
                    name: "",
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: "rgba(239,157,51,.9)"
                        }
                    }
                }
            ]
        }, 
        {
            name: "",
            type: "pie",
            radius: ["62%","72%"],
            silent: true,
            label: {
                normal: {
                    show: false,
                    position: "center"
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            z: 0,
            zlevel: 0,
            data: [{
                    value: 60.5,
                    name: "",
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: "rgba(0,170,255,.9)"
                        }
                    }
                },
                {
                    value: 90.6,
                    name: "",
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: "rgba(255,103,103,.9)"
                        }
                    }
                },
                {
                    value: 40.6,
                    name: "",
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: "rgba(239,157,51,.9)"
                        }
                    }
                }
            ]
        },
        {
            name: "",
            type: "pie",
            radius: ["60%","61%"],
            silent: true,
            z: 0,
            zlevel: 0,
            label: {
                normal: {
                    show: false,
                    position: "center"
                }
            },
            data: [{
                    value: 60.5,
                    name: "",
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: "rgba(0,170,255,.9)"
                        }
                    }
                },
                {
                    value: 90.6,
                    name: "",
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: "rgba(255,103,103,.9)"
                        }
                    }
                },
                {
                    value: 40.6,
                    name: "",
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: "rgba(239,157,51,.9)"
                        }
                    }
                }
            ]
        }
    ]
}