var value = 80;
var color = new echarts.graphic.LinearGradient(
    0, 0, 1, 0, [{
            offset: 0,
            color: "#41D7F3",
        },
        {
            offset: 1,
            color: "#3D9FFF",
        }
    ]
);
option = {
    backgroundColor: '#fff',
    series: [{
            name: '信用分',
            type: 'gauge',
            startAngle: 225,
            endAngle: -45,
            min: 0,
            max: 100,
            radius: '60%',
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [1, '#999']
                    ],
                    width: 1,
                    opacity: 1
                }
            },
            title: {
                show: false
            },
            detail: {
                show: true,
                offsetCenter: [0, '70%'],
                formatter: function(value) {
                    return '{value|' + value.toFixed(0) + '}{unit|%}\n\n{line|}';
                },
                rich: {
                    value: {
                        fontSize: 28,
                        fontWeight: 700,
                        color: '#239CFB'
                    },
                    unit: {
                        fontSize: 14,
                        color: '#239CFB',
                        padding: [0, 0, 6, 2]
                    },
                    line: {
                        width: 100,
                        height:3,
                        shadowColor: 'rgba(229,242,252,0.90)',
                        shadowBlur: 10,
                        backgroundColor: 'rgba(229,242,252,0.90)',
                        borderRadius: 43
                    }
                }
            },
            axisTick: {
                length: 0,
                lineStyle: {
                    color: '#999'
                }
            },
            splitLine: {
                length: 15,
                lineStyle: {
                    color: '#999'
                }
            },
            axisLabel: {
                color: '#999'
            },
            pointer: {
                // show:false,
                width: 28.5,
                length: 60
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
                    symbolSize: 56,
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
            radius: '70%',
            startAngle: 225,
            endAngle: -45,
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
                    width: 16,
                    color: [
                        [
                            value / 100, color
                        ],
                        [
                            1, 'rgba(225,225,225,0.4)'
                        ]
                    ],
                    // shadowColor: 'rgba(0,138,255,0.35)',
                    // shadowBlur: 5,
                }
            },
            axisTick: {
                show: false,
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
                    color: '#54F200',
                }
            },
            data: [{
                value: value,
                name: '年售电量情况'
            }]
        }
    ]

}