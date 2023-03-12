var data1 = 2
var data2 = 1
option = {

    grid: {
        top: '10%',
        bottom: '8%'
    },
    tooltip: {},
    xAxis: {
        data: ["目标数"],
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    yAxis: {
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    series: [
        // 目标上圆
        {
        name: "",
        type: "pictorialBar",
        symbolSize: [40, 10],
        symbolOffset: [-26, -4],
        z: 12,
        data: [{
            name: "目标",
            value: data1,
            symbolPosition: "end",
            itemStyle: {
                normal: {
                    color: {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        type: "linear",
                        global: false,
                        colorStops: [{
                            offset: 0,
                            color: "#006CF1"
                        }, {
                            offset: 1,
                            color: "#0C4AC5"
                        }]
                    }
                }
            }
        }]
    }, 
        // 实际上圆
    {
        name: "",
        type: "pictorialBar",
        symbolSize: [40, 10],
        symbolOffset: [26, -4],
        z: 12,
        data: [ {
            name: "实际完成",
            value: data2,
            symbolPosition: "end",
            itemStyle: {
                normal: {
                    color: {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        type: "linear",
                        global: false,
                        colorStops: [{
                            offset: 0,
                            color: "#0FC2FE"
                        }, {
                            offset: 1,
                            color: "#28ADFF"
                        }]
                    }
                }
            }
        }]
    },
    
        // 内圆
    {
        name: "",
        type: "pictorialBar",
        z: 1,
        data: [{
            name: "",
            value: data1,
            symbolSize: [200, 30],
            symbolOffset: [0, 10],
            trueVal: "98",
            itemStyle: {
                normal: {
                    color: "transparent",
                    borderColor: "#0E40B7",
                    borderWidth: 1
                }
            }
        }]
    },
    // 外圆
    {
        name: "",
        type: "pictorialBar",
        z: 1,
        data: [{
            name: "",
            value: data1,
            symbolSize: [250, 60],
            symbolOffset: [0, 30],
            trueVal: "98",
            itemStyle: {
                normal: {
                    color: "transparent",
                    borderColor: "#1649C5",
                    borderWidth: 1
                }
            }
        }]
    }, 
    // 目标主体
    {
        type: "bar",
        z: 9,
        barWidth: 40,
        data: [{
            name: "目标",
            value: data1,
            trueVal: "98",
            label: {
                normal: {
                    show: true,
                    position: "left",
                    distance: 20,
                    textStyle: {
                        color: "#33C5FF",
                        fontSize: 14
                    },
                    formatter: function(value) {
                        return value.value + "户\n目标";
                    },
                }
            },
            itemStyle: {
                normal: {
                    color: {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        type: "linear",
                        global: false,
                        colorStops: [{
                            offset: 0,
                            color: "rgba(18,108,236,1)"
                        }, {
                            offset: 0.8,
                            color: "rgba(6,18,115,1)"
                        }, {
                            offset: 1,
                            color: "rgba(2,6,76,0.33)"
                        }]
                    }
                }
            }
        }]
    }, 
    // 实际完成主体
    {
        type: "bar",
        z: 9,
        barWidth: 40,
        data: [ {
            name: "实际完成",
            value: data2,
            z: 9,
            label: {
                normal: {
                    show: true,
                    position: "right",
                    distance: 20,
                    textStyle: {
                        color: "#33C5FF",
                        fontSize: 14
                    },
                    formatter: function(value) {
                        return value.value + "户\n实际完成";
                    },
                }
            },
            itemStyle: {
                normal: {
                    color: {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        type: "linear",
                        global: false,
                        colorStops: [{
                            offset: 0,
                            color: "rgba(40,197,255,1)"
                        }, {
                            offset: 0.8,
                            color: "rgba(6,160,255,1)"
                        }, {
                            offset: 1,
                            color: "rgba(77,122,146,0.08)"
                        }]
                    }
                }
            }
        }]
    }]
}