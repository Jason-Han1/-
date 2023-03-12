var total = 100;
var value = 87;
var rich = {
    white: {
        color: '#fff',
        fontSize: 25,
        padding:5
    },
    bule: {
        fontSize: 100,
        color: '#00A2FF',
        fontWeight: '700'
    },
    score: {
        fontSize: 40,
        color:'#00A2FF',
        padding:5,
        fontWeight: '500'
    }
};
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
            font: 'normal 24px "Microsoft YaHei", sans-serif',
        },
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
                    width: 11,
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
                    value: value,
                    name: "",

                    label: {
                        normal: {
                            formatter: function(param) {
                                return '{bule|' + param.data.value + '}{score|' + '分}' +  '\n}{white|' + '综合健康评分' + '}'
                            },
                            rich: rich,
                        }
                    },
                    itemStyle: {
                        normal: {
                            // color: "#63EBFF"
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: '#6657F2'
                            }, {
                                offset: 1,
                                color: '#4297F4'
                            }]),
                        }
                    }
                },
                {
                    value: total - value,
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