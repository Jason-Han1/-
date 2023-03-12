option = {
    grid: {
        bottom: 20,
        containLabel: false,
        right: 0,
        show: false,
        top: -10,
        width: "50%",
    },
    series: [{
            barGap: "100%",
            barWidth: 6,
            data: [23786, 11460, 4243, 3942, 3787],
            itemStyle: {
                normal: {
                    color: "#607FC3"
                }
            },
            label: {
                fontFamily: "PingFangSC-Regular, Microsoft YaHei",
                color: "#333",
                normal: {
                    color: "#333"
                },
                distance: 15,
                padding: [0, 0, 0, 30],
                position: "left",
                show: true
            },
            name: "num",
            type: "bar"
        },
        {
            itemStyle: {
                normal: {
                    color: "#EAEAEA"
                }
            },
            name: "",
            silent: true,
            type: "bar",
            barWidth: 6,
            data: [23786, 23786, 23786, 23786, 23786],
            yAxisIndex: 1,
            z: 1
        }
    ],
    tooltip: {
        backgroundColor: "#fff",
        extraCssText: "box-shadow: 0 0 8px 0 rgba(0,0,0,0.12)",
        padding: 0,
        textStyle: {
            color: "#333",
            fontSize: 12,
            align: "left"
        },
        trigger: "axis",
    },
    xAxis: {
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        max: 23786,
        splitLine: {
            show: false
        },
        type: "value"
    },
    yAxis: [{
        axisLabel: {
            interval: 0,
            fontFamily: "PingFangSC-Regular, Microsoft YaHei",
            margin: 200,
            align: "left",
            rich: {
                first: {
                    color: '#fff',
                    backgroundColor: '#E5B64A',
                    width: 24,
                    height: 20,
                    align: 'center',
                },
                second: {
                    color: '#fff',
                    backgroundColor: '#9EB2D4',
                    width: 24,
                    height: 20,
                    align: 'center',
                },
                third: {
                    color: '#fff',
                    backgroundColor: '#CA9FA9',
                    width: 24,
                    height: 20,
                    align: 'center',
                },
                normal: {
                    color: '#666',
                    backgroundColor: '#DDD',
                    width: 24,
                    height: 20,
                    align: 'center',
                },
                value: {
                    padding: [0, 0, 0, 15],
                    align: 'left',
                    // width: 100
                }
            },
            formatter: function(value, index) {
                if (index === 0) {
                    return '{first|' + (index + 1) + '}{value|' + value + '}';
                } else if (index === 1) {
                    return '{second|' + (index + 1) + '}{value|' + value + '}';
                } else if (index === 2) {
                    return '{third|' + (index + 1) + '}{value|' + value + '}';
                } else {
                    return '{normal|' + (index + 1) + '}{value|' + value + '}';
                }
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            length: 510,
            interval: 0,
            lineStyle: {
                color: '#EAEAEA'
            }
        },
        data: ["搜索问题", "个人中心", "待定", "其他业务", "Feed流"],
        interval: 40,
        inverse: true,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#EAEAEA'
            }
        },
        type: "category"
    }, {
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        data: ["搜索问题", "个人中心", "待定", "其他业务", "Feed流"],
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        },
        type: "category"
    }]
}