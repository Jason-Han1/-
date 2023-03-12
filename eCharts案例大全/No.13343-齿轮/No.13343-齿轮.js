option = {
    tooltip: {
        trigger: "item"
    },
    series: [{
            name: "",
            type: "gauge",
            radius: "70%",
            startAngle: 0,
            endAngle: 359.9,
            splitNumber: 60,
            axisTick: {
                show: false
            },
            splitLine: {
                length: 139,
                lineStyle: {
                    width: 4,
                    color: "#efefef"
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
            radius: ["36%","70%"],
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
                value: 0,
                name: "",
                itemStyle: {
                    normal: {
                        color: "#02edff"
                    }
                }
            }]
        },
        {
            name: "",
            type: "pie",
            radius: ["38%","70%"],
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
                            color: "#02edff"
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
                            color: "#22808a"
                        }
                    }
                }
            ]
        }
    ]
}