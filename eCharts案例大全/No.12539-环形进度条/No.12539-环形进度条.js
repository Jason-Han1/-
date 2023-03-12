option = {
    backgroundColor: '#000',
    tooltip: {
        trigger: "item"
    },
    graphic:[{
        type:'text',
        left:'18%',
        top:'38%',
        style:{
            text:'111',
            fill:'#00D6CE',
            fontSize:65
        }
    },{
        type:'text',
        left:'22%',
        top:'53%',
        style:{
            text:'指标',
            fill:'#fff',
             font: 'normal 1.8em "Microsoft YaHei", sans-serif'
        }
    },{
        type:'text',
        left:'68%',
        top:'38%',
        style:{
            text:'111',
            fill:'#FDA12E',
            fontSize:65
        }
    },{
        type:'text',
        left:'72%',
        top:'53%',
        style:{
            text:'指标',
            fill:'#fff',
            font: 'normal 1.8em "Microsoft YaHei", sans-serif'
        }
    }],
    series: [
        {
            name: "",
            type: "gauge",
            radius: "60%",
            center:['25%','50%'],
            startAngle: 0,
            endAngle: 359.9,
            splitNumber: 90,
            hoverAnimation: true,
            axisTick: {
                show: false
            },
            splitLine: {
                length: 50,
                lineStyle: {
                    width: 5,
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
        {
            name: "",
            type: "pie",
            radius: ["45%","51%"],
            center:['25%','50%'],
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
                            color: "#08A0E2"
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
                            color: "#05D3CB"
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
                            color: "#4A4C54"
                        }
                    }
                }
            ]
        }, {
            name: "",
            type: "gauge",
            radius: "60%",
            center:['75%','50%'],
            startAngle: 0,
            endAngle: 359.9,
            splitNumber: 90,
            hoverAnimation: true,
            axisTick: {
                show: false
            },
            splitLine: {
                length: 50,
                lineStyle: {
                    width: 5,
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
        {
            name: "",
            type: "pie",
            radius: ["45%","51%"],
            center:['75%','50%'],
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
                            color: "#38D742"
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
                            color: "#C0A23A"
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
                            color: "#4A4C54"
                        }
                    }
                }
            ]
        }
        
        
        
        
        
    ]
}