option = {
    backgroundColor: '#031245',
    legend: {  },
    color: ["#63caff", "#49beff", "#03387a", "#03387a", "#03387a", "#6c93ee", "#a9abff", "#f7a23f", "#27bae7", "#ff6d9d", "#cb79ff", "#f95b5a", "#ccaf27", "#38b99c", "#93d0ff", "#bd74e0", "#fd77da", "#dea700"],
    grid: {  },
    xAxis: {
        axisLabel: {
            color: "#c0c3cd",
            fontSize: 14,
            interval: 0
        },
        axisTick: {
            lineStyle: {
                color: "#384267"
            },
            show: true
        },
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: "#384267",
            },
            show: true
        },
        data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        type: "category"
    },
    yAxis: {
        nameTextStyle: {
            color: "#c0c3cd",
            padding: [0, 0, -10, 0],
            fontSize: 14
        },
        axisLabel: {
            color: "#c0c3cd",
            fontSize: 14
        },
        axisTick: {
            lineStyle: {
                color: "#384267"
            },
            show: true
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "#384267"
            }
        },
        axisLine: {
            lineStyle: {
                color: "#384267"

            },
            show: true
        },
    },
    series: [{
        data: [200, 85, 112, 275, 305, 415, 441, 405, 275, 305, 415, 441],
        type: "bar",
        barMaxWidth: "auto",
        barWidth: 30,
        itemStyle: {
            color: {
                x: 0,
                "y": 0,
                "x2": 0,
                "y2": 1,
                type: "linear",
                "global": false,
                "colorStops": [{
                        "offset": 0,
                        color: "#0b9eff"
                    },
                    {
                        "offset": 1,
                        color: "#63caff"
                    }
                ]
            }
        },
        label: {
            show: true,
            position: "top",
            distance: 10,
            color: "#fff"
        }
    }],
    tooltip: {
        trigger: "axis",
        show: false
    }
}