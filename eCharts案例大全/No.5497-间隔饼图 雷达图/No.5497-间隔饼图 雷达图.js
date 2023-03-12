var areaData = [{ max: 110, min: -10 }, { max: 110, min: -10 }, { max: 110, min: -10 }, { max: 110, min: -10 }, { max: 110, min: -10 }]
option = {
    backgroundColor: '#0B3886',
    radar: {
        zlevel: 11,
        shape: 'circle',
        scale: true,
        indicator: areaData,
        center: ['50%', '50%'],
        radius: '68%',
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(32,126,255, .5)',
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(32,126,255, .5)',
            }
        },
        splitArea: {
            areaStyle: {
                color: 'rgba(32,126,255, 0.1)',
            }
        },

    },
    series: [
        {
        name: "",
        type: "radar",
        symbol: "circle",
        symbolSize: 15,
            areaStyle: {
                normal: {
                    color: '#1D313F'
                }
            },
            itemStyle:{
                color:'#55D7F9',
            },
            lineStyle: {
                normal: {
                    width: 2
                }
            },
            data: [
                [0, 40, 90, 66, 44]
            ],
        },
        {
            type: 'gauge',
            radius: '80%',
            clockwise: false,
            startAngle: 0,
            endAngle: 359.999,
            splitNumber: 200,
            detail: {
                offsetCenter: [0, -20],
                formatter: ' '
            },
            pointer: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [0, '#2CFAFC'],
                        [10 / 100, '#55D7F9'],
                        [20 / 100, '#FDE600'],
                        [60 / 100, '#01F0F8'],
                        [80 / 100, '#FA8E01'],
                        [100 / 100, '#F58384'],
                    ],
                    width: 50
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 50,
                lineStyle: {
                    color: '#0B3886',
                    width: 4
                }
            },
            axisLabel: {
                show: false
            }
        },
    ]
};