option = {
    backgroundColor: "#2c343c",
    grid: {
        left: "0",
        top: "0",
        bottom: "0",
        right: "0"
    },
    tooltip: {
        show: false
    },
    xAxis: {
        show: false
    },
    yAxis: [{
            show: false,
            type: "category",
            inverse: false,
            data: ["城区A"],
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
                lineStyle: {
                    type: "dashed",
                    color: "#3e86dd"
                }
            },
            axisLabel: {
                margin: 35,
                textStyle: {
                    color: "#fff",
                    fontSize: 14,
                }

            }
        }

    ],
    series: [

        {
            z: 4,
            type: "pictorialBar",
            symbolSize: ['30', '30'],
            symbolRepeat: "fixed",
            data: [{
                    value: 1,
                    symbol: 'rect'
                },

            ],
            itemStyle: {
                color: 'rgba(0,0,0,.1)'
            }
        },
        {
            z: 6,
            type: "pictorialBar",


            symbolSize: ['30', '30'],

            animation: true,
            symbolRepeat: "fixed",
            symbolClip: true,
            symbolPosition: "start",
            symbolOffset: [0, 0],
            data: [{
                    value: .6,
                    symbol: 'rect',
                },

            ],
            label: {
                show: false
            },
            itemStyle: {
                color: '#53A9FF'
            }
        }

    ]
}