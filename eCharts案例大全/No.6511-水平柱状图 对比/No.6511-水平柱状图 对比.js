let list = [{
        "REALNAME": "小明1",
        "YJCYCSL": "3",
        "WJCYCSL": "37",
        "CJSL": "0"
    },
    {
        "REALNAME": "小明2",
        "YJCYCSL": "19",
        "WJCYCSL": "3",
        "CJSL": "2"
    },
    {
        "REALNAME": "小明3",
        "YJCYCSL": "0",
        "WJCYCSL": "0",
        "CJSL": "0"
    }
]

let collectList = [];
let yAxisData = [];
let solvedData = [];
let unSolvedData = [];
list.map(item => {
    yAxisData.push(item.REALNAME);
    solvedData.push(-item.YJCYCSL);
    unSolvedData.push(-item.WJCYCSL);
    collectList.push(item.CJSL);
});

option = {
    backgroundColor: "#333",
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow"
        },
        formatter: params => {
            let str = `${params[0].name}<br>`;
            params.map(item => {
                str += `${item.marker}${item.seriesName}${Math.abs(
                                item.value
                            )}<br>`;
            });
            return str;
        }
    },
    legend: {
        data: ["已解除", "未解除", "采集数量"],
        top: -5,
        textStyle: {
            color: "#fff"
        }
    },
    grid: {
        left: 10,
        right: 20,
        top: 20,
        bottom: 10,
        containLabel: true
    },
    xAxis: [{
        type: "value",
        minInterval: 1,
        axisLabel: {
            formatter: value => {
                return Math.abs(value);
            },
            color: "#fff",
            fontSize: 14
        },
        axisLine: {
            lineStyle: {
                color: "rgba(255,255,255,0.12)"
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: "rgba(255,255,255,0.1)"
            }
        }
    }],
    yAxis: [{
        type: "category",
        axisTick: {
            show: false //不显示坐标轴刻度线
        },
        axisLabel: {
            margin: 20,
            fontSize: 14,
            textStyle: {
                color: "#e2e9ff"
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: "rgba(255,255,255,0.1)"
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: "rgba(255,255,255,0.12)",
                width: 0
            }
        },
        data: yAxisData
    }],
    series: [{
            name: "已解除",
            type: "bar",
            barWidth: 10,
            stack: "总量",
            itemStyle: {
                color: "#ff9933"
            },
            label: {
                normal: {
                    show: false,
                    formatter: params => {
                        return -params.value;
                    }
                }
            },
            data: solvedData
        },
        {
            name: "未解除",
            type: "bar",
            stack: "总量",
            itemStyle: {
                color: "#fd5a68"
            },
            label: {
                normal: {
                    show: false,
                    formatter: (params) => {
                        return -params.value;
                    }
                }
            },
            data: unSolvedData
        },
        {
            name: "采集数量",
            type: "bar",
            itemStyle: {
                color: "green"
            },
            stack: "总量",
            label: {
                normal: {
                    show: false
                }
            },
            data: collectList
        }
    ]
}