let titleNum = 10 // 数量
let titleState = "进行中" //状态
let titleDw = "个" //单位
let outCircleBg = "rgba(49,95,138,1)" //外圈背景
let inCircleBg = "rgba(49,95,138,1)" //内圈背景
let progressBg = "#d81e06" //进度条背景
let progressPercent = 0.6 //进度条百分比
option = {
    title: [{
            text: titleNum,
            y: "46%",
            x: "center",
            textAlign: "left",
            textStyle: {
                fontSize: 24,
                color: "#45C4FF",
            },
        },
        {
            text: titleState,
            y: "50%",
            x: "center",
            textStyle: {
                fontWeight: "normal",
                fontSize: 12,
                color: "#45C4FF",
            },
        },
        {
            text: titleDw,
            y: "47%",
            x: "52%",
            textAlign: "left",
            textStyle: {
                fontSize: 10,
                color: "#679FC0",
            },
        },
    ],
    series: [{
            type: "gauge",
            name: "外圈",
            radius: "96%",
            startAngle: "225",
            endAngle: "-45",
            splitNumber: "100",
            pointer: {
                show: false,
            },
            detail: {
                show: false,
            },
            data: [{
                value: 1,
            }, ],
            axisLine: {
                show: true,
                lineStyle: {
                    //-----------------外圈的颜色
                    color: [
                        [1, outCircleBg]
                    ],
                    width: 2,
                    opacity: 1,
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                length: 20,
                lineStyle: {
                    color: "#051932",
                    width: 0,
                    type: "solid",
                },
            },
            axisLabel: {
                show: false,
            },
        },
        {
            name: "内层数据刻度",
            type: "gauge",
            radius: "85%",
            center: ["50%", "50%"],
            pointer: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    width: 5,
                    color: [
                        [
                            // ---------------进度条所占用的百分比
                            progressPercent,
                            new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                // ---------------进度条颜色
                                color: progressBg,
                            }, ]),
                        ],
                        // ---------------内圈背景色
                        [1, inCircleBg],
                    ],
                },
            },
            splitLine: {
                length: 10,
                lineStyle: {
                    width: 2,
                    color: "none",
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    width: 1,
                    color: "#ffffff",
                },
            },
            axisLabel: {
                show: false,
                color: "rgb(0,191,255)",
                distance: 5,
                fontSize: 10,
            },
            detail: {
                show: false,
            },
            itemStyle: {
                normal: {
                    color: "#FFFFFF",
                },
            },
            data: [{
                value: 50,
            }, ],
            silent: false,
        },
    ],
}