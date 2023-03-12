option = {
    tooltip: {
        type: "cross",
        trigger: "axis",
        formatter: function(params) {
            let res = "";
            for (let i = 0; i < params.length - 1; i++) {
                let series = params[i];
                res +=
                    series.marker + series.seriesName + ":" + series.data + "<br/>";
            }
            return res;
        },
    },
    legend: {
        top: 10,
        itemWidth: 15,
        itemHeight: 8,
        itemGap: 20,
        right: "10%",
        textStyle: {
            color: " #333333",
            fontSize: 16,
        },
        data: ["实际", "计划", "对比"],
    },
    grid: {
        left: "3%",
        right: "4%",
        bottom: "12%",
        containLabel: true,
    },
    xAxis: {
        type: "category",
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: "#ccc",
            },
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#333",
                fontSize: 16
            },
        },
        data: [
            "03/01",
            "03/02",
            "03/03",
            "03/04",
            "03/05",
            "03/06",
            "03/07",
            "03/08",
            "03/09",
            "03/10",
            "03/11",
            "03/12",
        ],
    },
    yAxis: {
        type: "value",
        name: "（吨）",
        nameTextStyle: {
            color: "#333333",
            fontSize: 16,
            padding: [0, 0, 0, -30],
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: "#ccc",
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "#C0C0C0",
            },
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            formatter: "{value}",
            color: "#333333",
            fontSize: 16,
        },
        boundaryGap: ["20%", "20%"],
    },
    series: [{
            name: "实际",
            type: "line",
            symbol: "none",
            itemStyle: {
                normal: {
                    color: "#ffd4c7", //图例的颜色
                    lineStyle: {
                        color: "#ffd4c7", //线的颜色
                    },
                },
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
                                color: "rgba(255,212,199,0.3)",
                            },
                            {
                                offset: 1,
                                color: "rgba(255,212,199,0)",
                            },
                        ],
                        false
                    ),
                    shadowColor: "rgba(255,212,199, 0.9)",
                    shadowBlur: 20,
                },
            },
            markLine: {
                symbol: "none",
                label: {
                    show: true,
                },
                data: [{
                    xAxis: "03/07",
                    name: "今日",
                }, ],
            },
            data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
            name: "计划",
            type: "line",
            symbol: "none",
            itemStyle: {
                normal: {
                    color: "#89d8fe", //图例的颜色
                    lineStyle: {
                        color: "#89d8fe", //线的颜色
                    },
                },
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
                                color: "rgba(137,216,254,0.3)",
                            },
                            {
                                offset: 1,
                                color: "rgba(137,216,254,0)",
                            },
                        ],
                        false
                    ),
                    shadowColor: "rgba(137,216,254, 0.9)",
                    shadowBlur: 20,
                },
            },
            data: [128, 132, 109, 124, 120, 132, 123, 118, 132, 109, 104, 120],
        },
        {
            name: "对比",
            type: "line",
            symbol: "none",
            itemStyle: {
                normal: {
                    color: "#77f0c4", //图例的颜色
                    lineStyle: {
                        type: "dotted", //'dotted'虚线 'solid'实线
                        width: 2,
                        color: "#77f0c4", //线的颜色
                    },
                },
            },
            data: [180, 152, 161, 154, 190, 172, 121, 154, 160, 132, 181, 174],
        },
    ],
}