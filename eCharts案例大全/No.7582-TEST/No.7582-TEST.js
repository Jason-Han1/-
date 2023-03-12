var val = 0;
option = {
    backgroundColor: '#000',
    tooltip: {
        backgroundColor: 'rgba(0,0,0,0.9)',
        formatter: '温度: {c} ℃',
    },

    series: [
        {
            name: '温度',
            type: 'gauge',
            radius: "80%",
            min: 0,
            max: 100,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 15,
                    shadowBlur: 1,
                    color: [
                        [0, '#09a275'],
                        [0.1, '#09a275'],
                        [0.11, 'transparent'],
                        [0.2, '#09a275'],
                        [0.21, 'transparent'],
                        [0.3, '#09a275'],
                        [0.31, 'transparent'],
                        [0.4, '#09a275'],
                        [0.41, 'transparent'],
                        [0.5, '#ffa500'],
                        [0.51, 'transparent'],
                        [0.6, '#ffa500'],
                        [0.61, 'transparent'],
                        [0.7, '#ffa500'],
                        [0.71, 'transparent'],
                        [0.8, '#dc0030'],
                        [0.81, 'transparent'],
                        [0.9, '#dc0030'],
                        [0.91, 'transparent'],
                        [1, '#dc0030']
                    ]
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                formatter: function(e) {
                    switch (e + "") {
                        case "0":
                            return "0";
                        case "20":
                            return "20";
                        case "40":
                            return "40";
                        case "60":
                            return "60";
                        case "80":
                            return "80";
                        case "100":
                            return "100";
                        default:
                            return "";
                    }
                },
                distance: 0,
                textStyle: {
                    fontSize: 14,
                    fontWeight: ""
                }
            },
            splitLine: {
                show: false
            },
            pointer: {
                width: "6%",
                length: '80%',
                color: "black"
            },
            detail: {
                offsetCenter: [0, '84%'],
                formatter: '{value} ℃',
                textStyle: {
                    fontWeight: '100',
                    fontSize: 20
                }
            },

            data: [{
                value: 66,
                name: ''
            }],
        },
        {
            name: '1212',
            type: 'gauge',
            radius: '85%',
            startAngle: 225,
            endAngle: -45,
            min: 0,
            max: 100,
            z:-1,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 40,
                    shadowBlur: 20,
                    color: [
                        [0, 'transparent'],
                        [0.1, '#fff'],
                        [0.101, 'transparent'],
                        [0.2, '#fff'],
                        [0.201, 'transparent'],
                        [0.3, '#fff'],
                        [0.301, 'transparent'],
                        [0.4, '#fff'],
                        [0.401, 'transparent'],
                        [0.5, '#fff'],
                        [0.501, 'transparent'],
                        [0.6, '#fff'],
                        [0.601, 'transparent'],
                        [0.7, '#fff'],
                        [0.701, 'transparent'],
                        [0.8, '#fff'],
                        [0.801, 'transparent'],
                        [0.9, '#fff'],
                        [0.901, 'transparent'],
                        [1, '#fff']
                    ],
                }
            },
            axisTick: {
                show: 0,
            },
            splitLine: {
                show: 0,
            },
            axisLabel: {
                show: 0
            },
            pointer: {
                show: false,
            },
            detail: {
                show: false,
            },
            data: [{
                show: false,
            }]
        },
    ]
};


setInterval(function() {
    option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
    myChart.setOption(option, true);
}, 2000);