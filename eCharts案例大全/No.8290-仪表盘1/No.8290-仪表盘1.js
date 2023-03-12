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
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 100,
            radius: '83%',
            axisLine: {
                show: false
            },
            title: {
                show: false
            },
            detail: {
                show: false
            },
            axisTick: {
                length: 10,
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
                width: 28,
                length: '30%'
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
                    symbolSize: 55,
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
            radius: '90%',
            startAngle: 180.5,
            endAngle: -0.5,
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
                    ]
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