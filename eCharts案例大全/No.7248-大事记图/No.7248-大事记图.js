let xdata = ['2020-04-15', '2020-05-15', '2020-06-15', '2020-07-15', '2020-08-15', '2020-09-15', '2020-10-15', '2020-11-15'],
    data = [120, 90, 10, 80, 90, 20, 56, 150];

option = {
    backgroundColor: '#060f20',
    grid: {
        top: '15%',
        right: '3%',
        left: '8%',
        bottom: '16%'
    },
    xAxis: [{
        type: 'category',
        color: '#cef7fd',
        data: xdata,
        axisPointer: {
            type: 'line'
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#eaeae8'
            },

        },
        axisLabel: {
            margin: 20,
            color: '#cef6fe',
            textStyle: {
                color: "#cbf7ff",
                fontSize: 14,
                fontWeight: 200
            }

        },
    }],

    yAxis: [{
        type: 'value',
        color: '#cef7fd',
        axisLine: {
            lineStyle: {
                color: '#eaeae8'
            },

        },
        axisTick: {
            show: false
        },
        axisLabel: {
            formatter: function(value) {
                var texts = [];
                if (value == 30) {
                    texts.push('超低');
                } else if (value == 60) {
                    texts.push('低');
                } else if (value == 90) {
                    texts.push('中');
                } else if (value == 120) {
                    texts.push('高');
                } else if (value == 150) {
                    texts.push('超高');
                }
                return texts;
            },
            textStyle: {
                color: "#cbf7ff",
                fontSize: 14,
                fontWeight: 200
            }
        },

        splitLine: {
            lineStyle: {
                color: '#272456'
            }
        }
    }],
    dataZoom: [{
        show: true,
        height: 20,
        xAxisIndex: [0],
        bottom: 50,
        "start": 20,
        "end": 150,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '120%',
        handleStyle: {
            color: "#00b4ff",
        },
        textStyle: {
            color: "#cef6fe",
        },
        fillerColor: "rgba(40,82,106,0.8)",
        borderColor: "rgba(49,65,80,0.5)",

    }, {
        type: "inside",
        show: true,
        height: 15,
        width: 20,
        start: 1,
        end: 35
    }],
    series: [{
        type: 'bar',
        data: data,
        barWidth: 8,
        symbol: 'path://d="M150 130 L130 50 L170 50 Z"',
        itemStyle: {
            normal: {
                color: { //图形颜色
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#4fa5e2' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#c2bc1c' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                barBorderRadius: [30, 30, 0, 0],
                shadowColor: 'rgba(0,255,225,1)',
                shadowBlur: 4,
            }
        },

        label: {
            normal: {
                show: true,
                lineHeight: 20,
                width: 100,
                height: 40,
                padding: 5,
                backgroundColor: '#fff',
                borderRadius: 5,
                position: 'top',
                align: 'center',
                formatter: '{b}\n4.27屯门和你 ',
                rich: {
                    b: {
                        color: '#999',
                        lineHeight: 22,
                        align: 'center'
                    },
                }
            },

        }
    }]
}