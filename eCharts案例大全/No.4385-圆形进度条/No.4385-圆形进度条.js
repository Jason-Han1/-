let chartData = 60;
let gradient = new echarts.graphic.LinearGradient(
    0, 0, 1, 0, [{
            offset: 0,
            color: "#0075FF",
        },
        {
            offset: 1,
            color: "#0075FF",
        }
    ]
);

option = {
    backgroundColor: '#fff',
    legend: {
        show: false
    },
    title: {
        text: `{value|${chartData}}{unit|%}`,
        top: 'center',
        left: 'center',
        textStyle: {
            rich: {
                value: {
                    fontSize: 28,
                    color: '#333',
                    fontWeight: 700
                },
                unit: {
                    fontSize: 14,
                    color: '#333',
                    padding: [0, 0, 6, 1],
                    fontWeight: 700

                }
            }
        }
    },
    series: [{
            type: 'pie',
            clockwise: false,
            radius: ['66%', '70%'],
            zlevel: 3,
            hoverAnimation: false,
            label: {
                show: false,
            },
            data: [{
                value: 100 - chartData,
                itemStyle: {
                    color: 'transparent',
                }
            }, {
                value: chartData,
                itemStyle: {
                    normal: {
                        borderWidth: 16,
                        borderColor: gradient,
                        color: gradient
                    }
                },
            }, ]
        },
        {
            type: 'pie',
            clockwise: false,
            radius: ['66%', '70%'],
            hoverAnimation: false,
            zlevel: 2,
            label: {
                show: false,
            },
            itemStyle: {
                color: '#ECEFF4',
                borderWidth: 16,
                borderColor: '#ECEFF4'
            },
            emphasis: {
                itemStyle: {
                    color: '#ECEFF4',
                    borderWidth: 16,
                    borderColor: '#ECEFF4'
                }
            },
            data: [100]
        }
    ]

};