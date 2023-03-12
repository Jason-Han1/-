option = {
    title: {
        text: "药占比",
        x: "center",
        top: 10
    },
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        show: !0,
        feature: {
            mark: {
                show: !0
            },
            dataView: {
                show: !0,
                readOnly: !1
            },
            restore: {
                show: !0
            },
            saveAsImage: {
                show: !0
            }
        }
    },
    series: [{
        name: "药占比",
        type: "gauge",
        startAngle: 90,
        endAngle: -90,
        center: ["30%", "55%"],
        axisLine: {
            lineStyle: {
                width: 80
            }
        },
        axisTick: {
            splitNumber: 10
        },
        axisLabel: {
            formatter: function(e) {
                switch (e + "") {
                    case "10":
                        return "低";
                    case "50":
                        return "中";
                    case "90":
                        return "高";
                    default:
                        return ""
                }
            },
            textStyle: {
                color: "#fff",
                fontSize: 15,
                fontWeight: "bolder"
            }
        },
        pointer: {
            width: "10%",
            color: "black"
        },
        itemStyle: {
            normal: {
                color: "rgba(255, 255, 255, 0.8)",
                shadowBlur: 10
            }
        },
        title: {
            show: !0,
            offsetCenter: [-20, "-40%"],
            textStyle: {
                color: "green"
            }
        },
        detail: {
            show: !0,
            backgroundColor: "rgba(0,0,0,0)",
            borderWidth: 0,
            borderColor: "#ccc",
            offsetCenter: [0, -20],
            formatter: "{value}%",
            textStyle: {}
        },
        data: [{
            value: 67,
            name: "药占比"
        }]
    }]
};