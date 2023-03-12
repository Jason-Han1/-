var index = 0;
var colorList = ["#f36c6c", "#e6cf4e", "#20d180", "#0093ff"];
option = {
    legend: {
        show: false
    },
    tooltip: {
        trigger: "axis"
    },
    grid: {
        left: 140
    },
    xAxis: {
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }
    },

    yAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisPointer: {
            label: {
                show: true,
                margin: 30
            }
        },
        axisLabel: {
            margin: 140,
            fontSize: 14,
            align: "left",
            color: "#333",
            rich: {
                a1: {
                    color: "#fff",
                    backgroundColor: colorList[0],
                    width: 30,
                    height: 30,
                    align: "center",
                    borderRadius: 2
                },
                a2: {
                    color: "#fff",
                    backgroundColor: colorList[1],
                    width: 30,
                    height: 30,
                    align: "center",
                    borderRadius: 2
                },
                a3: {
                    color: "#fff",
                    backgroundColor: colorList[2],
                    width: 30,
                    height: 30,
                    align: "center",
                    borderRadius: 2
                },
                b: {
                    color: "#fff",
                    backgroundColor: colorList[3],
                    width: 30,
                    height: 30,
                    align: "center",
                    borderRadius: 2
                }
            },
            formatter: function(params) {
                if (index == 11) {
                    index = 0;
                }
                index++;
                if (index - 1 < 3) {
                    return [
                        "{a" + index + "|" + index + "}" + "  " + params
                    ].join("\n")
                } else {
                    return [
                        "{b|" + index + "}" + "  " + params
                    ].join("\n")
                }
            }
        },
        data: ["非国有企业", "事业单位", "自愿暂时不就业", "未就业", "联系不上", "党政机关", "灵活就业", "升学", "国有企业", "自主创业", "其他"],
        inverse: true,
    },

    series: [{
            z: 1,
            tooltip: {
                show: false
            },
            type: "pictorialBar",
            symbolSize: ["30", "30"],
            symbolRepeat: "fixed",
            symbol: "rect",
            barGap: 0,
            symbolMargin: 0,
            itemStyle: {
                color: "#010544"
            },
            data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        },
        {
            z: 2,
            name: "值",
            type: "pictorialBar",
            symbolRepeat: "fixed",
            symbolSize: ["30", "30"],
            symbol: "rect",
            barCategoryGap: "100%",
            symbolOffset: [0, 0],
            symbolPosition: "start",
            symbolClip: true,
            barGap: 0,
            symbolMargin: 0,
            data: [21123, 5087, 3836, 3064, 3033, 1907, 1860, 1855, 817, 486, 247].map((item, i) => {
                return {
                    value: item,
                    itemStyle: {
                        color: i > 3 ? colorList[3] : colorList[i]
                    }
                }
            }),
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: "#333",
                        fontSize: 14,
                    },
                    position: "right",
                    offset: [15, 0]
                }
            }
        }

    ]
}