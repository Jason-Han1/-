option = {
    backgroundColor: '#031245',
    color: ["#63caff", "#3608FE"],
    grid: {
        containLabel: true,
        left: 20,
        right: 20,
        bottom: 10,
        top: 40
    },
    xAxis: {
        axisLabel: {
            color: "#c0c3cd",
            fontSize: 14,
            interval: 0
        },
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: "#384267",
                width: 1,
                type: "dashed"
            },
            show: true
        },
        data: ["0点~2点", "3点~5点", "6点~8点", "0点~2点", "3点~5点", "6点~8点", "0点~2点", "3点~5点"],
        type: "category"
    },
    yAxis: {
        axisLabel: {
            color: "#c0c3cd",
            fontSize: 14
        },

        splitLine: {
            show: true,
            lineStyle: {
                color: "#384267",
                type: "dashed"
            }
        },
        axisLine: {
            lineStyle: {
                color: "#384267",
                width: 1,
                type: "dashed"
            },
            show: true
        },
        name: ""
    },
    series: [{
        data: [200, 85, 112, 275, 305, 415, 741, 405],
        type: "bar",
        barWidth: 30,
        itemStyle: {
            color: {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                type: "linear",
                global: false,
                colorStops: [{
                    offset: 0,
                    color: "#3A1BFD"
                }, {
                    offset: 1,
                    color: "#3BEFFD"
                }]
            }
        },
        label: {
            show: true,
            position: "top",
            distance: 10,
            color: "#fff"
        }
    }, {
        data: [1, 1, 1, 1, 1, 1, 1, 1],
        type: "pictorialBar",
        barMaxWidth: "20",
        symbol: "diamond",
        symbolOffset: [0, "50%"],
        symbolSize: [30, 15]
    }, {
        data: [200, 85, 112, 275, 305, 415, 741, 405],
        type: "pictorialBar",
        barMaxWidth: "20",
        symbolPosition: "end",
        symbol: "diamond",
        symbolOffset: [0, "-50%"],
        symbolSize: [30, 12],
        zlevel: 2
    }],
    tooltip: {
        trigger: "item",
        show: true
    }
}