option = {
    backgroundColor: '#000',
    tooltip: {
        trigger: "axis"
    },
    grid: {
        top: "2%",
        bottom: "18%",
        left: "6%",
        right: "2%"
    },
    xAxis: {
        type: "category",
        boundaryGap: false,
        axisLabel: {
            color: "#cfcfdc"
            // fontSize: 10
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "#253a4e"
            }
        },
        axisLine: {
            // symbol: ["arrow"],
            symbolSize: [6, 6],
            symbolOffset: [0, 10],
            lineStyle: {
                color: "rgb(18,44,73)"
            }
        },
        axisTick: {
            color: "rgb(18,44,73)",
            inside: true
        },
        z: 2,
        data: ["06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00"]
    },
    yAxis: {
        type: "value",
        // interval: 50,
        // min: 0,
        // max: 400,
        // splitNumber: 7,
        axisLine: {
            // symbol: ["none", "arrow"],
            symbolSize: [6, 6],
            lineStyle: {
                color: "rgb(18,44,73)"
            }
        },
        axisLabel: {
            color: "#cfcfdc",
            showMaxLabel: false
            // formatter: function(value) {
            //   if (value == 350) {
            //     value = "(个)";
            //   }
            //   return value;
            // }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "#253a4e"
            }
        }
    },

    series: [{
        name: "火灾发生情况",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 10,
        data: [15, 14, 18, 16, 17, 18, 19],
        lineStyle: {
            width: 1,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: "rgba(160,57,236,1)" // 0% 处的颜色
                },
                {
                    offset: 0.4,
                    color: "rgba(160,57,236,1)" // 0% 处的颜色
                },
                {
                    offset: 1,
                    color: "rgba(160,57,236,1)" // 100% 处的颜色
                }
            ]) //背景渐变色
        },
        label: {
            show: false,
            position: "top",
            textStyle: {
                color: "rgba(160,57,236,1)"
            }
        },
        itemStyle: {
            color: "#6c50f3",
            borderColor: "#7dadfd",
            borderWidth: 3,
            shadowColor: "rgba(0, 0, 0, .3)",
            shadowBlur: 0,
            shadowOffsetY: 2,
            shadowOffsetX: 2
        },
        areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: "rgba(162,31,253,1)" // 0% 处的颜色
                },
                {
                    offset: 0.5,
                    color: "rgba(99,75,138,1)" // 0% 处的颜色
                },
                {
                    offset: 1,
                    color: "rgba(99,75,138,0)" // 100% 处的颜色
                }
            ]), //背景渐变色
            origin: "start"
        }
    }]
}