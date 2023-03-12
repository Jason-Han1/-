option = {
    backgroundColor: '#010219',
    tooltip: {
        trigger: "item"
    },
    graphic: [{
        type: 'text',
        left: 'center',
        top: '52%',
        style: {

            fill: '#797979',
            font: 'normal 24px "Microsoft YaHei", sans-serif'
        }
    }],
    series: [{
            name: "",
            type: "gauge",
            radius: "50%",
            center: ['50%', '50%'],
            startAngle: 0,
            endAngle: 359.9,
            splitNumber: 90,
            hoverAnimation: true,
            axisTick: {
                show: false
            },
            splitLine: {
                length: 70,
                lineStyle: {
                    width: 5,
                    color: "#010219"
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
            radius: ["45%", "50%"],
            center: ['50%', '50%'],
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
                    value: 98.5,
                    name: "",

                    label: {
                        normal: {
                            formatter: function(param) {
                                return param.data.value + '%'
                            },
                            fontSize: 24,
                            color: '#fff',
                            fontFamily: 'Microsoft YaHei'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: "#63EBFF"
                        }
                    }
                },
                {
                    value: 1.5,
                    name: "",
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: "#113044"
                        }
                    }
                }
            ]
        }

    ]
}