option = {
    backgroundColor:'#000',
    color: ["#3aa1ff"],
    grid: {
        top: "10%",
        left: "20%",
        right: "20%",
        bottom: "10%"
    },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow"
        },
        formatter: "{b}：{c}"
    },
    xAxis: [{
        type: "category",
        data: ["订单总数", "已完成", "审批中"],
        boundaryGap: false,
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#fff"
            }
        },
        axisLabel: {
            color: "#fff"
        }
    }],
    yAxis: [{
        type: "value",
        show: false
    }],
    series: [{
        name: "直接访问",
        type: "bar",
        barWidth: "60%",
        label: {
            show: true,
            position: "top",
            color: "#fff"
        },
        itemStyle: {
            normal: {
                color: params => {
                    let totalColor = new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [{
                                offset: 0,
                                color: "#AEE71B"
                            },
                            {
                                offset: 1,
                                color: "#DBEC28"
                            }
                        ]
                    );
                    let completeColor = new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [{
                                offset: 0,
                                color: "#699DFD"
                            },
                            {
                                offset: 1,
                                color: "#6374FE"
                            }
                        ]
                    );
                    let applyColor = new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [{
                                offset: 0,
                                color: "#F2C51E"
                            },
                            {
                                offset: 1,
                                color: "#EC7A1C"
                            }
                        ]
                    );
                    var colorList = [totalColor, completeColor, applyColor];
                    return colorList[params.dataIndex];
                }
            }
        },
        data: [
            300,
            100,
            200
        ]
    }]
};