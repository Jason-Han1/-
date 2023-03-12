option = {
    title: {
        text: ""
    },
    tooltip: {
        trigger: "axis"
    },
    grid: {
        show: true,
        top: "16%",
        bottom: "16%",
        left: "30%",
        right: "0%"
    },
    dataZoom: [],
    toolbox: {
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            dataZoom: {
                yAxisIndex: false
            },
            restore: {}
        }
    },
    legend: {
        data: ["grWindSpeed", "grGenSpeedForProcess", "grCAN_ActivePower"]
    },
    xAxis: {
        data: ["2018-07-12", "2018-07-12", "2018-07-12"],
        splitLine: {
            show: true,
            interval: 0
        }
    },
    yAxis: [{
        min: "dataMin",
        max: "dataMax",
        splitLine: {
            show: true
        },
        name: "grWindSpeed",
        nameLocation: "middle",
        nameGap: 50,
        position: "left",
        offset: 0,
        axisLine: {
            lineStyle: {
                color: "#1f77b4"
            }
        },
        axisTick: {
            lineStyle: {
                color: "#1f77b4"
            }
        },
        axisLabel: {
            textStyle: {
                color: "#1f77b4"
            }
        }
    }, {
        min: "dataMin",
        max: "dataMax",
        splitLine: {
            show: false
        },
        name: "grGenSpeedForProcess",
        nameLocation: "middle",
        nameGap: 50,
        position: "left",
        offset: 70,
        axisLine: {
            lineStyle: {
                color: "#ff7f0e"
            }
        },
        axisTick: {
            lineStyle: {
                color: "#ff7f0e"
            }
        },
        axisLabel: {
            textStyle: {
                color: "#ff7f0e"
            }
        }
    }, {
        min: "dataMin",
        max: "dataMax",
        splitLine: {
            show: false
        },
        name: "grCAN_ActivePower",
        nameLocation: "middle",
        nameGap: 50,
        position: "left",
        offset: 140,
        axisLine: {
            lineStyle: {
                color: "#2ca02c"
            }
        },
        axisTick: {
            lineStyle: {
                color: "#2ca02c"
            }
        },
        axisLabel: {
            textStyle: {
                color: "#2ca02c"
            }
        }
    }],
    series: [{
        name: "grWindSpeed",
        type: "line",
        yAxisIndex: 0,
        showSymbol: false,
        smooth: false,
        animation: false,
        animationDuration: 200,
        lineStyle: {
            normal: {
                width: 1.3
            }
        },
        data: [11.5713, 12.2306, 11.5816]
    }, {
        name: "grGenSpeedForProcess",
        type: "line",
        yAxisIndex: 1,
        showSymbol: false,
        smooth: false,
        animation: false,
        animationDuration: 200,
        lineStyle: {
            normal: {
                width: 1.3
            }
        },
        data: [1726.63, 1731.452, 1730.718]
    }, {
        name: "grCAN_ActivePower",
        type: "line",
        yAxisIndex: 2,
        showSymbol: false,
        smooth: false,
        animation: false,
        animationDuration: 200,
        lineStyle: {
            normal: {
                width: 1.3
            }
        },
        data: [1346.373, 1364.478, 1403.825]
    }]
}