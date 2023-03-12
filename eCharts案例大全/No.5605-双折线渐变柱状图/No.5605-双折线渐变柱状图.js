let xData = [];
let barData = [];
let lineData = [];
let lineData2 = [];
for (let i = 1; i < 13; i++) {
    xData.push(i + "月");
    barData.push(parseInt(i * Math.random() * 100))
    lineData.push(parseInt(i * Math.random() * 100))
    lineData2.push(parseInt(i * Math.random() * 100))
}
option = {
    backgroundColor: "#344b58",
    legend: {
        data: ['养护', '告警', '病害'],
        icon: "rect",
        itemGap: 24,
        itemWidth: 12,
        itemHeight: 12,
        right: '38%',
        orient: "horizontal",
        textStyle: {
            color: "rgba(255,255,255,0.7)",
            fontSize: 22,
            padding: [0, 0, 0, 3],
            fontFamily: "SourceHanSansCN-Regular"
            // lineHeight: 30
        }
    },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
            textStyle: {
                color: "#fff"
            }

        },
    },
    grid: {
        left: "10%",
        // "top":0,
        bottom: "16%",
        right: "2%",
        textStyle: {
            color: "#fff"
        }
    },
    barWidth: 20,
    calculable: true,
    xAxis: [{
        type: "category",
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.2)',
                width: 2
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitArea: {
            show: false
        },
        axisLabel: {
            interval: 0,
            color: 'rgba(255,255,255,0.7)',
            fontSize: 18
        },
        data: xData,
    }],
    yAxis: [{
        nameTextStyle: {
            color: 'rgba(255,255,255,0.7)',
            fontSize: 16,
            align: 'right',
            padding: [3, 6, 5, 3]
        },
        type: "value",
        splitLine: {
            show: true,
            lineStyle:{
                type:'dashed',
                color:'rgba(110, 136, 146, 0.65)'
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.2)',
                width: 2
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            color: 'rgba(255,255,255,0.5)',
            fontSize: 20

        },
        splitArea: {
            show: false
        },

    }],
    series: [{
        name: "养护",
        type: "bar",
        stack: "总量",
        barMaxWidth: 35,
        barGap: "10%",
        itemStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(12, 190, 255, 1)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(12, 190, 255, 0)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        },
        data: barData,
    }, {
        name: "告警",
        type: "line",
        symbolSize: 8,
        symbol: 'rect',
        itemStyle: {
            normal: {
                color: 'rgba(255, 251, 5, 1)',
                barBorderRadius: 0,
            }
        },
        lineStyle: {
            normal: {
                width: 4,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(255, 251, 5, 0.5)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(255, 251, 5, 0.5)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        },
        data: lineData
    }, {
        name: "病害",
        type: "line",
        symbolSize: 8,
        symbol: 'rect',
        itemStyle: {
            normal: {
                color: 'rgba(255, 127, 12, 1)',
                barBorderRadius: 0,
            }
        },
        lineStyle: {
            normal: {
                width: 4,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(255, 127, 12, 0.5)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(255, 127, 12, 0.5)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        },
        data: lineData2
    }]
}