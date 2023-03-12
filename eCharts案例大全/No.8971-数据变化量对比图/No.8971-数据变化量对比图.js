const yLabel = ["减少量", "初始值", "增加量"];
option = {
    backgroundColor: "#313446",
    grid: {
        top: "5%",
        right: "5%",
        left: "80",
        bottom: "75",

    },
    tooltip: {
        show: true,
        trigger: "axis",
        formatter(params) {
            let _tip = `${params[0].name}<br/><span class="${
        params[0].value > 0 ? "tip-up tip-dot" : "tip-down tip-dot"
      }"></span>  ${params[0].value > 0 ? "增加量 : " : "减少量 : "}${
        Math.abs(params[0].value)
      }`;
            return _tip;
        }
    },
    dataZoom: [{
            type: "slider",
            maxValueSpan: 35,
            start: 0,
            end: 100,
            dataBackground: {
                areaStyle: {
                    color: "rgba(221, 223, 225, 1)"
                }
            },
            labelFormatter: (value, valueStr) => valueStr.split(" ")[0],
            textStyle: {
                color: "#D2D2D2"
            }
        },
        {
            show: true,
            type: "inside"
        }
    ],
    xAxis: [{
            type: "category",
            color: "#D2D2D2",
            fontSize: 12,
            axisLine: {
                lineStyle: {
                    color: "#B8B7B7"
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                formatter(value) {
                    return value.split(" ").join("\n");
                }
            },
            data: ["2019-10-12", "2019-10-12", "2019-10-12", "2019-10-12", "2019-10-12", "2019-10-12", "2019-10-12","2019-10-12", "2019-10-12", "2019-10-12", "2019-10-12", "2019-10-12", "2019-10-12", "2019-10-12", "2019-10-12", "2019-10-12", "2019-10-12", "2019-10-12", "2019-10-12", "2019-10-12", "2019-10-12", "2019-10-12", "2019-10-12", "2019-10-12", "2019-10-12", "2019-10-12", "2019-10-12", "2019-10-12", "2019-10-12", "2019-10-12", "2019-10-12", "2019-10-12", "2019-10-12", "2019-10-12", "2019-10-12", "2019-10-12", "2019-10-12", "2019-10-12", "2019-10-12", "2019-10-12", "2019-10-12", "2019-10-12", "2019-10-12", "2019-10-12", "2019-10-12", "2019-10-12", "2019-10-12", "2019-10-12", ]
        },
        {
            type: "category",
            axisLine: {
                lineStyle: {
                    color: "#B8B7B7"
                }
            },
            position: "bottom",
            axisTick: {
                show: true
            }
        }
    ],
    yAxis: [{
        type: "value",
        color: "#D2D2D2",
        fontSize: 16,
        splitNumber: 2,
        axisLine: {
            lineStyle: {
                color: "#B8B7B7"
            }
        },
        splitLine: {
            lineStyle: {
                color: ["#313446"]
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            formatter: (value, index) => yLabel[index]
        },
        data: [-100, 0, 100]
    }],
    series: [{
        type: "bar",
        barWidth: "10px",
        color: "#D55F67",
        itemStyle: {
            barBorderRadius: 6,
            color: function(params) {
                var colorList;
                if (params.data >= 0) {
                    colorList = "#D55F67";
                } else {
                    colorList = "#8DD99F";
                }
                return colorList;
            }
        },
        data: [-100, 90, 34, 53, -22, -100, 90, 34, 53, -22, -100, 90, 34, 53, -22, -44, -44, -100, 90, -100, 90, 34, 7, 8, -53, -22, -44, 34, 53, -22, -44, -100, 90, 34, 53, -22, -44, -44, -100, 90, -100, 90, 34, 53, -22, -44, 34, 53, -22, -44]
    }]
};