option = {
    backgroundColor: '#031245',
    legend: {
        textStyle: {
            color: "#fff"
        }
    },
    tooltip: {
        trigger: "axis",
    },
    color: ["#63caff", "#49beff", "#03387a", "#03387a", "#03387a", "#6c93ee", "#a9abff", "#f7a23f", "#27bae7", "#ff6d9d", "#cb79ff", "#f95b5a", "#ccaf27", "#38b99c", "#93d0ff", "#bd74e0", "#fd77da", "#dea700"],
    grid: {},
    xAxis: {
        axisLabel: {
            color: "#c2c3c6",
            fontSize: 14,
            interval: 0
        },

        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: "#c2c3c6",
            },
            show: true
        },
        data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        type: "category"
    },
    yAxis: [{
            nameTextStyle: {
                color: "#27719F",
                padding: [0, 0, -10, 0],
                fontSize: 14
            },
            axisLabel: {
                color: "#c2c3c6",
                fontSize: 14
            },

            splitLine: {
                show: true,
                lineStyle: {
                    color: "#27719F"
                }
            },
            axisLine: {
                lineStyle: {
                    color: "#c2c3c6"

                },
                show: true
            },
        },
        {
            "type": "value",
            "name": "合格率 (%)",
            "position": "right",
            "axisLabel": {
                "formatter": "{value} %",
                color: '#c2c3c6'
            },
            "max": 100,
            "splitLine": {
                "show": false
            },

            "axisTick": {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#c2c3c6',
                }
            },

        }
    ],
    series: [{
            name: "收入",
            data: [200, 85, 112, 275, 305, 415, 441, 405, 275, 305, 415, 441],
            type: "bar",
            barMaxWidth: "auto",
            barWidth: 30,
            itemStyle: {
                barBorderRadius: [30, 30, 0, 0],
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

        },
        {
            name: "占比",
            data: [20, 85, 12, 25, 30, 45, 44, 45, 25, 30, 15, 41],
            type: "line",
            barWidth: 30,
            yAxisIndex: 1,
            itemStyle: {
                color: "#ffe763"
            },

        }
    ]

}