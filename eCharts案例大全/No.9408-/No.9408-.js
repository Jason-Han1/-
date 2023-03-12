var ydata = [50, 55,52,56,52,53,55,50,54,56,54,52];
var xdata = ["1月", "2月", "3月", "4月", "5月", "6月","7月", "8月", "9月", "10月", "11月", "12月"];
option = {
    backgroundColor: '#fff',
    grid: {
        show: false
    },
    tooltip: {
        formatter: "{b}: {c}",
        trigger: "axis",
        axisPointer: {
            lineStyle: {
                color: "rgba(245,166,38,1)",
                type: 'dashed'
            }
        },
        backgroundColor: "rgba(245,166,38,1)",
        padding: [5, 10],
        textStyle: {
            color: "#fff",
            fontSize:28
        },

    },
    legend: {
        right: 20,
        orient: "vertical",
        data: ["出勤人数"]
    },
    xAxis: {
        type: "category",
        data: xdata,
        boundaryGap: false,
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            interval: "auto",
            lineStyle: {
                color: 'rgba(0,0,0,0.06)'
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(0,0,0,0.06)'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 30,
                color: '#666'
            }
        }
    },
    yAxis: {
        name:"出勤人数",
        nameTextStyle:{
            color:'#666'
        },
        type: "value",
        minInterval: 1, // 横坐标值为整数
        splitLine: {
            show: true,
            interval: "auto",
            lineStyle: {
                color: 'rgba(0,0,0,0.06)'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(0,0,0,0.06)'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 30,
                color: '#666'
            }
        }
    },
    series: [{
        name: "出勤人数",
        type: "line",
        smooth: true,
        showSymbol: true,
        symbol: "emptyCircle",
        symbolSize: 14,
        data: ydata,
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [{
                            offset: 0,
                            color: "rgba(0, 82, 212,0.3)"
                        },
                        {
                            offset: 1,
                            color: "rgba(111, 177, 252,0.1)"
                        }
                    ],
                    false
                )
            }
        },
        itemStyle: {
            normal: {
                borderWidth: 2,
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [{
                            offset: 0,
                            color: "rgba(0, 82, 212,0.7)"
                        },
                        {
                            offset: 1,
                            color: "rgba(0, 82, 212,0.4)"
                        }
                    ],
                    false
                )
            }
        },
        lineStyle: {
            globalCoord: false, // 缺省为 false
            normal: {
                width: 2,
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [{
                            offset: 0,
                            color: "rgba(0, 82, 212,0.7)"
                        },
                        {
                            offset: 1,
                            color: "rgba(0, 82, 212,0.4)"
                        }
                    ],
                    false
                )
            }
        },
        emphasis: {
            itemStyle: {
                borderWidth: 2,
                borderColor: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [{
                            offset: 0,
                            color: "rgba(245,166,35,1)"
                        },
                        {
                            offset: 1,
                            color: "rgba(245,166,35,0.8)"
                        }
                    ],
                    false
                )

            }
        }

    }]
}