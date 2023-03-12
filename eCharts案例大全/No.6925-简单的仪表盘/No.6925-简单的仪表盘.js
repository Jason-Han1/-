option = {
    backgroundColor: '#000',
    tooltip: {
        formatter: "{b} : {c}%"
    },
    series: [{
        name: "",
        type: "gauge",
        startAngle: 180,
        endAngle: 0,
        center: ["50%", "50%"],
        radius: '50%',
        axisLine: {
            // 坐标轴线
            lineStyle: {
                // 属性lineStyle控制线条样式
                width: '100',
                color: [
                    [0.2, "#86B379"],
                    [0.8, "#68A54A"],
                    [1, "#408829"]
                ]
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            // 坐标轴文本标签，详见axis.axisLabel
            formatter: function(v) {
                switch (v + "") {
                    case "10":
                        return "低";
                    case "50":
                        return "中";
                    case "90":
                        return "高";
                    default:
                        return "";
                }
            },
            textStyle: {
                color: "#fff",
                fontSize: 10,
                fontWeight: "bolder"
            }
        },
        pointer: {
            width: 18,
            length: "60%"
        },
        itemStyle: {
            normal: {
                color: "rgba(255, 255, 255, 0.5)"
            }
        },
        title: {
            show: true,
            offsetCenter: [0, "-80%"], // x, y，单位px
            textStyle: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                color: "#fff",
                fontSize: 13
            }
        },
        detail: {
            show: true,
            offsetCenter: [0, -10], // x, y，单位px
            formatter: "{value}%",
            textStyle: {
                fontSize: 20,
                color: "#fff"
            }
        },
        data: [{
            value: 50,
            name: ""
        }]
    }]
}