option = {
    backgroundColor: '#000033',
    tooltip: {
        show: false,
        trigger: "item"
    },
    series: [{
            name: "",
            type: "gauge",
            radius: "68%",
            startAngle: 0,
            endAngle: 359.9,
            splitNumber: 20,
            axisTick: {
                show: false
            },
            splitLine: {
                length: 35,
                lineStyle: {
                    width: 10,
                    color: "#fff",
                    type: 'solid',
                    shadowBlur: 8,
                    shadowColor: '#fff',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    opacity: 0.9
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
            radius: ["38%", "60%"],
            center: ['50%', '50%'],
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
            z: 1,
            zlevel: 1,
            data: [{
                    value: 86,
                    name: '合格率',
                    label: {
                        show: true,
                        color: '#fff',
                        fontSize: 15,
                        position: 'inner',
                        align: 'center',
                        verticalAlign: 'middle',
                        backgroundColor: 'transparent',
                        borderColor: '#fff',
                        borderWidth: 0,
                        borderRadius: 0,
                        width: '',
                        height: '',
                        padding: 0,
                        shadowColor: 'transparent',
                        shadowBlur: 0,
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        textBorderColor: 'transparent',
                        formatter: '{b}',
                    },
                    itemStyle: {
                        normal: {
                            color: "#203864"
                        }
                    }
                },
                {
                    value: 100 - 86,
                    name: "",
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: "#000033"
                        }
                    }
                }
            ]
        },
        {
            name: '合格率',
            type: 'pie',
            radius: ['20%', '38%'],
            center: ['50%', '50%'],
            clockwise: true,
            hoverOffset: 0,
            z: 2,
            zlevel: 2,
            selectedMode: 'single',
            selectedOffset: 5,
            label: {
                normal: {
                    show: false,
                    fontSize: 26,
                    color: '#fff',
                    backgroundColor: 'transparent',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    padding: [10, 10, 5, 3],
                    shadowColor: 'transparent',
                    shadowBlur: 0,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    width: '',
                    height: '',
                    textBorderColor: 'transparent'
                }
            },
            data: [{
                    value: 86,
                    name: '合格率',
                    selected: true,
                    itemStyle: {
                        color: ['#BCD7EE'],
                        borderColor: '#ff0',
                        borderWidth: 2,
                        borderType: 'solid',
                        shadowBlur: 4,
                        shadowColor: '#fff',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        opacity: .8
                    },
                    emphasis: {
                        itemStyle: {
                            color: '#0ff',
                            borderColor: '#fff',
                            borderWidth: 0,
                            borderType: 'solid',
                            shadowBlur: 3,
                            shadowColor: '#fff',
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            opacity: 1
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    label: {
                        show: true,
                        color: '#fff',
                        fontSize: 17,
                        position: 'center',
                        align: 'center',
                        verticalAlign: 'middle',
                        backgroundColor: 'transparent',
                        borderColor: '#fff',
                        borderWidth: 0,
                        borderRadius: 0,
                        width: '',
                        height: '',
                        padding: 0,
                        shadowColor: 'transparent',
                        shadowBlur: 0,
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        textBorderColor: 'transparent',
                        formatter: '{c}%'
                    }
                },
                {
                    value: 100 - 86,
                    itemStyle: {
                        color: 'transparent',
                        borderColor: '#ff0',
                        borderWidth: 2,
                        borderType: 'solid'
                    },
                    selected: false
                }
            ]
        },
    ]
};