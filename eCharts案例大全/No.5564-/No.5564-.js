var value = 64.8;
var color = new echarts.graphic.LinearGradient(
    0, 0, 1, 0, [{
            offset: 0,
            color: "#D8FD36",
        },
        {
            offset: 1,
            color: "#2AFD85",
        }
    ]
);
option = {
    backgroundColor: '#051668',
    series: [{
            name: '信用分',
            type: 'gauge',
            startAngle: 200,
            endAngle: -20,
            min: 0,
            max: 100,
            radius: '60%',
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [
                            100, new echarts.graphic.LinearGradient(
                        0, 0, 1, 0, [{
                                offset: 0,
                                color: "#FB3F52",
                            },
                            {
                                offset: 1,
                                color: "#3BF37A",
                            }
                        ]
                    )
                        ],
                        [
                            1, 'rgba(225,225,225,0.4)'
                        ]
                    ],
                    width: 3,
                    opacity: 1
                }
            },
            title: {
                show: false
            },
            detail: {
                show: true,
                offsetCenter: [0, '80%'],
                color:'#D6F1FF',
                fontSize:30,
                formatter: function(value) {
                    return '{value|' + value.toFixed(0) + '}{unit|%}\n\n月度发电量完成率';
                },
                rich: {
                    value: {
                        fontSize: 50,
                        color: '#FFDE00'
                    },
                    unit: {
                        fontSize: 40,
                        color: '#FFDE00',
                    },
                }
            },
            axisTick: {
                length: 0,
                splitNumber: 2,
                lineStyle: {
                    color: '#999'
                }
            },
            splitLine: {
                length: 15,
                lineStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0, [{
                                offset: 0,
                                color: "#FB3F52",
                            },
                            {
                                offset: 1,
                                color: "#3BF37A",
                            }
                        ]
                    )
                }
            },
            axisLabel: {
                color: '#D6F1FF',
                fontSize:20
            },
            pointer: {
                // show:false,
                width: 12,
                length: 120
            },
            itemStyle: {
                color: color,
                shadowColor: 'rgba(0,138,255,0.45)',
                shadowBlur: 10,
                shadowOffsetX: 2,
                shadowOffsetY: 2
            },
            markPoint: {
                // symbol:'circle',
                // symbolSize:15,
                // itemStyle: {
                //     color: "#fff"
                // },
                data: [{
                    x: "50%",
                    y: "50%",
                    symbol: 'circle',
                    symbolSize: 40,
                    itemStyle: {
                        color: color
                    },
                }, {
                    x: "50%",
                    y: "50%",
                    symbol: 'circle',
                    symbolSize: 15,
                    itemStyle: {
                        color: "#fff"
                    },
                }]
            },
            data: [{
                value: value,
                name: '年售电量情况'
            }]

        },
        {
            name: "已到人数",
            type: 'gauge',
            radius: '75%',
            startAngle: 200,
            endAngle: -20,
            min: 0,
            max: 100,
            title: {
                show: false
            },
            detail: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    width: 22,
                    color: [
                        [
                            value / 100, color
                        ],
                        [
                            1, '#35375C'
                        ]
                    ],
                    // shadowColor: 'rgba(0,138,255,0.35)',
                    // shadowBlur: 5,
                }
            },
            axisTick: {
                show: true,
                length: 22,
                splitNumber: 2,
                lineStyle: {
                    color: '#192568',
                    width: 3
                }
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false
            },
            pointer: {
                show: false,
            },
            itemStyle: {
                normal: {
                    color: '#35375C',
                }
            },
            data: [{
                value: value,
                name: '年售电量情况'
            }]
        }
    ]

}