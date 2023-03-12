let list = [{
    time: "2016",
    cjNum: "10",
    changeNum: "9"
}, {
    time: "2017",
    cjNum: "8",
    changeNum: "8"
}, {
    time: "2018",
    cjNum: "6",
    changeNum: "5"
}, {
    time: "2019",
    cjNum: "4",
    changeNum: "3"
}, {
    time: "2020",
    cjNum: "2",
    changeNum: "1"
}]


let xAxisData = []
let seriesData1 = []
let seriesData2 = []
list.map((item, index) => {
    xAxisData.push(item.time)
    seriesData1.push(item.cjNum)
    seriesData2.push(item.changeNum)
})

option = {
    backgroundColor: "#000",
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
        data: ["采集数量", "有变化数量"],
        top: 0,
        textStyle: {
            color: "#fff",
        },
    },
    grid: {
        left: 10,
        right: 10,
        top: 50,
        bottom: 10,
        containLabel: true,
    },
    xAxis: [{
        type: "category",
        data: xAxisData,
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
        },
    }, ],
    yAxis: [{
        minInterval: 5,
        type: "value",
        name: "数量（次）",
        nameTextStyle: {
            color: "#fff",
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
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,0.12)",
                width: 2,
            },
        },
    }, ],
    series: [{
            name: "采集数量",
            type: "line",
            showAllSymbol: true,
            symbol: "circle",
            symbolSize: 5,
            data: seriesData1,
            lineStyle: {
                color: "#69c4fe",
            },
            itemStyle: {
                color: "#69c4fe",
                borderColor: "#69c4fe",
                borderWidth: 2,
                shadowColor: "rgba(0, 0, 0, .3)",
                shadowBlur: 0,
                shadowOffsetY: 2,
                shadowOffsetX: 2,
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [{
                                offset: 0,
                                //渐变色----------------
                                color: "rgba(105,196,254,0.3)",
                            },
                            {
                                offset: 1,
                                color: "rgba(105,196,254,0)",
                            },
                        ],
                        false
                    ),
                    shadowColor: "rgba(105,196,254, 0.9)",
                    shadowBlur: 20,
                },
            },
        },
        {
            name: "有变化数量",
            type: "line",
            data: seriesData2,
            stack: "总量",
            showAllSymbol: true,
            symbol: "circle",
            symbolSize: 5,
            lineStyle: {
                color: "#6c50f3",
            },
            stack: "总量",
            itemStyle: {
                color: "#6c50f3",
                borderColor: "#6c50f3",
                borderWidth: 2,
                shadowColor: "rgba(0, 0, 0, .3)",
                shadowBlur: 0,
                shadowOffsetY: 2,
                shadowOffsetX: 2,
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [{
                                offset: 0,
                                //渐变色----------------
                                color: "rgba(108,80,243,0.3)",
                            },
                            {
                                offset: 1,
                                color: "rgba(108,80,243,0)",
                            },
                        ],
                        false
                    ),
                    shadowColor: "rgba(108,80,243, 0.9)",
                    shadowBlur: 20,
                },
            },
        },
    ],
}