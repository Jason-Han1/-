let xAxisData = [
    "2020-01",
    "2020-02",
    "2020-03",
    "2020-04",
    "2020-05",
    "2020-06",
    "2020-07",
    "2020-08",
    "2020-09",
    "2020-10",
    "2020-11",
    "2020-12",
]
let seriesData1 = [
    "13",
    "0",
    "0",
    "0",
    "0",
    "0",
    "1",
    "0",
    "0",
    "0",
    "0",
    "0",
]

let seriesData2 = [
    "0",
    "0",
    "0",
    "10",
    "3",
    "338",
    "407",
    "0",
    "0",
    "0",
    "0",
    "0",
]
let seriesData = [{
        name: "采集数量",
        type: "line",
        showAllSymbol: true,
        symbol: "circle",
        symbolSize: 5,
        lineStyle: {
            color: "#61a5e8",
        },
        data: seriesData1,
        itemStyle: {
            color: "#61a5e8",
        },
    },
    {
        name: "巡查路程",
        type: "bar",
        barWidth: 10,
        yAxisIndex: 1,
        itemStyle: {
            color: "#7ece51",
        },
        data: seriesData2,
    },
]
option = {
    backgroundColor: "#333",
    tooltip: {
        trigger: "axis",
        axisPointer: {
            lineStyle: {
                color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                            offset: 0,
                            color: "rgba(0, 255, 233,0)",
                        },
                        {
                            offset: 0.5,
                            color: "rgba(255, 255, 255,1)",
                        },
                        {
                            offset: 1,
                            color: "rgba(0, 255, 233,0)",
                        },
                    ],
                    global: false,
                },
            },
        },
    },
    legend: {
        data: ["采集数量", "巡查路程"],
        top: -5,
        textStyle: {
            color: "#fff",
        },
    },
    grid: {
        left: 10,
        right: 10,
        top: 50,
        bottom: 4,
        containLabel: true,
    },
    xAxis: [{
        type: "category",
        data: xAxisData,
        axisPointer: {
            type: "shadow",
        },
        axisLine: {
            lineStyle: {
                color: "rgba(255,255,255,0.12)",
            },
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: "rgba(255,255,255,0.1)",
            },
        },
        axisLabel: {
            color: "#fff",
            fontSize: 14,
            interval: 0,
            rotate: 40,
        },
    }, ],
    yAxis: [{
            type: "value",
            minInterval: 6,
            name: "数量（个）",
            nameTextStyle: {
                color: "#fff",
            },
            axisTick: {
                //y轴刻度线
                show: false,
            },
            axisLabel: {
                margin: 20,
                fontSize: 14,
                textStyle: {
                    color: "#e2e9ff",
                },
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: "rgba(255,255,255,0.1)",
                },
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: "rgba(255,255,255,0.12)",
                    width: 2,
                },
            },
        },
        {
            type: "value",
            minInterval: 200,
            name: "路程（公里）",
            nameTextStyle: {
                color: "#fff",
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                margin: 20,
                fontSize: 14,
                textStyle: {
                    color: "#e2e9ff",
                },
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: "rgba(255,255,255,0.1)",
                },
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: "rgba(255,255,255,0.12)",
                    width: 2,
                },
            },
        },
    ],
    series: seriesData,
}