data = [{
        name: "投入品",
        value: 754
    },
    {
        name: "产出品",
        value: 611
    },

];


var sum = 0
data.map(item => {
    sum += item.value;
})

var seriesData = getSeriesData(data)

function getSeriesData(data) {

    var series = [{
            name: "大环",
            type: 'gauge',
            splitNumber: 12,
            radius: '82%',
            center: ['50%', '55%'],
            startAngle: 0,
            endAngle: 359.9999,
            axisLine: {
                show: false,
                lineStyle: {
                    color: [
                        [1, '#0E8564']
                    ]
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 32,
                lineStyle: {
                    color: 'auto',
                    width: 3.5
                }
            },
            axisLabel: {
                show: false
            },
            detail: {
                show: false
            }
        },
        {
            name: '小环',
            type: 'gauge',
            splitNumber: 12,
            radius: '78%',
            center: ['50%', '55%'],
            startAngle: 0,
            endAngle: 359.9999,
            axisLine: {
                show: false
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#0E8564',
                    width: 3
                },
                length: 20,
                splitNumber: 3
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            detail: {
                show: false
            }
        },
    ]

    for (let i = 0; i < data.length; i++) {
        series.push({
            name: data[i].name,
            type: 'pie',
            clockWise: true,
            z: 2,
            hoverAnimation: false,
            radius: [71 - i * 30 + '%', 64 - i * 30 + '%'],
            center: ["50%", "55%"],
            label: {
                show: true,
                position: 'outside',
                formatter: '{a|{b}：{d}%}\n{hr|}',
                rich: {
                    // hr: {
                    //     backgroundColor: 't',
                    //     borderRadius: 3,
                    //     width: 3,
                    //     height: 3,
                    //     padding: [3, 3, 0, -12]
                    // },
                    a: {
                        color: '#fff',
                        fontSize:13,
                        padding: [10, 0, 0, -110]
                    }
                }
            },
            labelLine: {
                normal: {
                    length: 70 + i * 135,
                    length2: 100,
                    lineStyle: {
                        width: 1
                    }
                }
            },
            data: [{
                value: data[i].value,
                name: data[i].name
            }, {
                value: sum - data[i].value,
                name: '',
                itemStyle: {
                    color: "rgba(0,0,0,0)",
                    borderWidth: 0
                },
                tooltip: {
                    show: false
                },
                label: {
                    show: false
                },
                hoverAnimation: false
            }]
        });
        series.push({
            name: '背景线',
            type: 'pie',
            silent: true,
            z: 1,
            clockWise: true,
            hoverAnimation: false,
            radius: [69.5 - i * 30 + '%', 66.5 - i * 30 + '%'],
            center: ["50%", "55%"],
            label: {
                show: false
            },
            itemStyle: {
                label: {
                    show: false,
                },
                labelLine: {
                    show: false
                },
                borderWidth: 5,
                color: "RGB(14,115,92)",
            },
            data: [{
                value: 100,

                tooltip: {
                    show: false
                },
                hoverAnimation: false
            }]
        });
    }
    return series;
}

option = {
    backgroundColor: '#090F29',
    color: [{
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: 'rgba(21,215,142,1)'
        }, {
            offset: 1,
            color: 'rgba(97,252,104,1)'
        }],
        global: false
    }, {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: 'rgba(21,215,142,1)'
        }, {
            offset: 1,
            color: 'rgba(97,252,104,1)'
        }],
        global: false
    }],
    grid: {
        top: '10%',
        bottom: '0%',
        left: "0%",
        containLabel: false
    },
    xAxis: [{
        show: false
    }],
    yAxis: [{
        type: 'category',
        inverse: false,
        z: 3,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            inside: false,
            textStyle: {
                color: "RGB(78,184,252)",
                fontSize: 25,
            },
            show: false
        },
        // data: optionData.yAxis
    }],

    series: seriesData
};