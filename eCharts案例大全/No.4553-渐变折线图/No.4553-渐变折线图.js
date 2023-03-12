option = {
    color: ["#41FF80"],
    backgroundColor: ["#344670"],
    title: {
        show: false
    },
    grid: {
        top: '10%',
        right: '5%',
        bottom: '10%',
        left: '12%'
    },
    tooltip: {
        show: false
    },
    xAxis: {
        data: [
            "10.21",
            "10.20",
            "10.19",
            "10.18",
            "10.17",
            "10.16",
            "10.15"
        ],
        axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
                color: '#2D455A'
            }
        },
        axisTick: {
            show: false //隐藏X轴刻度
        },
        axisLabel: {
            show: true,
            margin: 14,
            fontSize: 14,
            textStyle: {
                color: '#ffffff' //X轴文字颜色
            }
        }
    },
    yAxis: [
        {
            type: 'value',
            gridIndex: 0,
            min: 0,
            max: 100,
            interval: 25,
            // splitNumber: 4,
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'solid',
                    color: '#325A9F',
                    width: 1
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: true,
                formatter: '{value}%',
                fontSize: 14,
                textStyle: {
                    color: '#ffffff' //X轴文字颜色
                }
            }
        }
    ],
    series: [
        {
            name: '主营业务',
            type: 'bar',
            barWidth: 18,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                        {
                            offset: 0,
                            color: '#41FF80'
                        },
                        {
                            offset: 0.5,
                            color: '#D5FF46'
                        },
                        {
                            offset: 1,
                            color: '#FF4A4A'
                        }
                    ])
                }
            },
            data: [20, 80, 100, 40, 34, 90, 60],
            z: 10,
            zlevel: 0
        },
        {
            // 分隔
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: '#0F375F'
                }
            },
            symbolRepeat: 'fixed',
            symbolMargin: 2,
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [18, 2],
            symbolPosition: 'start',
            symbolOffset: [0, -1],
            // symbolBoundingData: this.total,
            data: [20, 80, 100, 40, 34, 90, 60],
            width: "100%",
            z: 0,
            zlevel: 1
        }
    ]
};