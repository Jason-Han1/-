var xData = ["1月", "2月", "3月", "4月", "5月", "6月"],
    yData1 = [104, 56, 136, 86, 98, 86]
    yData4 = [30, 56, 36, 6, -10, -70]
option = {
    backgroundColor: "#000",
    grid: {
        left: "3%",
        top: "16%",
        right: "3%",
        bottom: 0,
        containLabel: true
    },
    legend: {
        show: true,
        textStyle: {
            color: "#fff"
        }
    },
    tooltip: {
        trigger: "axis",
    },
    xAxis: [{
        type: "category",
        data: xData,
        axisPointer: {
            type: "shadow"
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: 12
            }
        },
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    }],
    yAxis: [{
            type: "value",
            axisLabel: {
                formatter: "{value}",
                textStyle: {
                    color: '#fff',
                    fontSize: 14
                }
            },
            axisLine: {
                show:false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            }
        },
        {
            type: "value",
            axisLabel: {
                formatter: "{value}%",
                textStyle: {
                    color: '#fff',
                    fontSize: 14
                }
            },
            axisLine: {
                show:false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: "solid",
                    color: "rgba(255,255,255,0.2)"
                }
            }
        }
    ],
    series: [
        {
            name: '事件上报数',
            type: "bar",
            data: yData1,
            barWidth: "15%",
            itemStyle: {
                normal: {
                    color: '#3D86E3',
                }
            }
        },
        {
            name: '办结率',
            type: "line",
            yAxisIndex: 1,
            smooth: false,
            symbol: "circle",
            lineStyle: {
                normal: {
                    width: 2
                }
            },
            itemStyle: {
                normal: {
                    color: '#FFE47A',
                    borderColor: "#fff",
                    borderWidth: 1
                }
            },
            data: yData4,
            label: {
                normal: {
                    show: false
                }
            }
        }
        ]
};