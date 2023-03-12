option = {
    tooltip: {},
    // backgroundColor: "#ff0",//背景色
    color:["#0ff","#fd6d00","green"],
    legend: {
        data: ["总人数", "应到人数", "未到人数"],
        orient: "horizontal", //垂直显示
        right: 100, //右邊距
        top: 5 // 上邊距
    },
    xAxis: {
        axisLine: {
            lineStyle: {
                color: '#00a2ff'
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#323232",
                fontSize: 12
            },
        },
        data: ["aa", "bb", "cc", "dd"]
    },
    yAxis: {
        axisLine: {
            lineStyle: {
                color: '#00a2ff'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "rgba(0,162,255,0.2)",
                width: 1,
            }
        }
    },
    series: [{
            label: {
                normal: {
                    show: true,
                    // formatter:"{c}%",
                    position: "top",
                    textStyle: {
                        color: 'black'
                    }
                }
            },
            name: "总人数",
            barWidth: '35%',
            type: "bar",
            barGap: '-100%',//重疊
            data: [50, 90, 200, 30]
        },
        {
            label: {
                normal: {
                    show: true,
                    position: "insideTop",
                    textStyle: {
                        color: 'black',
                    }
                }
            },
            name: "应到人数",
            barWidth: '35%',
            type: "bar",
            stack: "1", // 如果stack一樣就會堆疊
            data: [45, 50, 100, 25]
        },
        {
            label: {
                normal: {
                    show: true,
                    position: "insideTop",
                    textStyle: {
                        color: 'black',
                    }
                }
            },
            name: "未到人数",
            barWidth: '35%',
            type: "bar",
            stack: "1", // 如果stack一樣就會堆疊
            data: [5, 40, 100, 5]
        }
    ]
};