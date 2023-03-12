var option = {
    backgroundColor: '#000F1D',
    title: {
        show: false
    },
    graphic: [{
        type: 'text',
        left: 'center',
        top: '52%',
        style: {
            text: ' (人）',
            fill: '#65C6E7',
            font: 'normal 12px "Microsoft YaHei", sans-serif'
        }
    }],
    series: [{
            type: "gauge",
            min: 0,
            max: 100,
            radius: "15%",
            splitNumber: 15, //刻度数量
            center: ["50%", "50%"],
            startAngle: 90,
            endAngle: -269.9999,
            axisLine: {
                show: false,
                lineStyle: {
                    width: 0,
                    color: [
                        [1, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [{
                                offset: 0,
                                color: '#011744'
                            }, {
                                offset: 1,
                                color: '#156ad4'
                            }]
                        )]
                    ]
                }
            },
            axisTick: {
                show: true,
                length: -10,
                lineStyle: {
                    width: 2,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0,
                        [{
                            offset: 0,
                            color: '#9955FF'
                        }, {
                            offset: 1,
                            color: '#0D96FF'
                        }]
                    )
                }

            },
            axisLabel: {
                show: false,
            },
            splitLine: {
                show: true,
                length: -12,
                lineStyle: {

                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0,
                        [{
                            offset: 0,
                            color: '#9955FF'
                        }, {
                            offset: 1,
                            color: '#0D96FF'
                        }]
                    )
                }
            },
            pointer: {
                show: false,
            },
            title: {
                show: true
            },
            detail: {
                formatter: '{value}',
                offsetCenter: ['0', '1%'],
                textStyle: {
                    fontSize: 24,
                    color: "#C1F3FF"
                }
            },
            data: [{
                value: 75
            }, ]
        },
        {
            name: 'pie',
            type: 'pie',
            clockWise: true,
            startAngle: -270,
            radius: ['19%', '15%'],
            hoverAnimation: false,
            center: ['50%', '50%'],
            data: ['100'],
            z: 1,
            labelLine: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: 'rgba(3,37,68,.2)',
                }
            }
        },

    ]
};