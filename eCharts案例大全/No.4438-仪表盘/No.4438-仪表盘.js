let level = 20

option = {
    backgroundColor: '#060400',
    series: [
        // 第一层圆环 -- 最外层圆环
        {
            type: "gauge",
            name: "外层辅助",
            radius: "65%",
            startAngle: 90,
            endAngle: -269.9999,
            pointer: {
                show: false
            },
            detail: {
                show: false
            },
            data: [{
                value: 1
            }],
            // 最外层圆环颜色
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [1, "#f5f5f5"]
                    ],
                    width: 40,
                    opacity: 1
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 12,
                lineStyle: {
                    color: "#051932",
                    width: 0,
                    type: "solid"
                }
            },
            axisLabel: {
                show: false
            }
        },
        // 第二层圆底色  -- 第二层层圆环
        {
            type: "gauge",
            name: "外层辅助",
            radius: "57.8%",
            startAngle: 90,
            endAngle: -269.9999,
            pointer: {
                show: false
            },
            detail: {
                show: false
            },
            data: [{
                value: 1
            }],
            // data: [{value: 1, name: 90}],
            title: {
                show: true,
                offsetCenter: [0, 30],
                textStyle: {
                    color: "#fff",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontFamily: "微软雅黑",
                    fontSize: 12
                }
            },
            // 最外层圆环颜色
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [1, "#fff"]
                    ],
                    width: 400,
                    opacity: 1
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 12,
                lineStyle: {
                    color: "#051932",
                    width: 0,
                    type: "solid"
                }
            },
            axisLabel: {
                show: false
            }
        },
        // 第三层圆环 -- 最外层圆环带色的外部圆环 -- 贴边的圆环
        {
            type: "gauge",
            name: "中间辅助",
            radius: "50%",
            startAngle: 90,
            endAngle: -269.9999,
            pointer: {
                show: false
            },
            detail: {
                show: false
            },
            data: [{
                value: 1
            }],
            // 最外层圆环颜色
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [1, "#999"]
                    ],
                    width: 1,
                    opacity: 1
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 1,
                lineStyle: {
                    color: "#051932",
                    width: 0,
                    type: "solid"
                }
            },
            axisLabel: {
                show: false
            }
        },
        // 内层圆环带色
        {
            type: "gauge",
            radius: "17%",
            center: ["50%", "50%"],
            axisLine: {
                lineStyle: {
                    width: 20, //02ca77
                    color: [
                        [0.29, "#02ca77"],
                        [0.6, "#1e91f9"],
                        [1, "#ff5a56"]
                    ]
                }
            },
            pointer: {
                show: false
            },
            detail: {
                show: false
            },
            data: [{
                value: 0
            }],

            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 12,
                lineStyle: {
                    color: "#051932",
                    width: 0,
                    type: "solid"
                }
            },
            axisLabel: {
                show: false
            }
        },
        // 第三层圆环带色 -- 最外层带色圆环
        {
            name: "内层数据刻度",
            type: "gauge",
            radius: "50%",
            center: ["50%", "50%"],
            axisLine: {
                lineStyle: {
                    width: 25, // 圆环宽度
                    color: [ // 不同范围不同的颜色
                        [0.29, "#02ca77"],
                        [0.6, "#1e91f9"],
                        [1, "#ff5a56"]
                    ]
                }
            },
            //第二层
            splitLine: {
                length: 30, // 数字与圆环距离
                lineStyle: {
                    width: 0,
                    color: "#ffffff"
                }
            },
            //第二层
            axisTick: {
                lineStyle: {
                    width: 0,
                    color: "#ffffff"
                }
            },
            //刻度数字
            axisLabel: {
                color: "#000",
                fontWeight: "bold",
                distance: 1,
                fontSize: 20
            },
            // 中间数字 -- 变量数字
            detail: {
                show: true,
                offsetCenter: ["0", "80%"],
                fontSize: 28,
                fontWeight: "bold"
            },
            itemStyle: {
                normal: {
                    color: "red"
                }
            },
            //指针
            pointer: {
                width: 5,
                length: "75%"
            },
            data: [{
                value: level
            }],
            silent: false
        },
        // 内层圆环 -- 内层带色外面第一层
        {
            type: "gauge",
            name: "中间辅助",
            radius: "20%",
            startAngle: 90,
            endAngle: -269.9999,
            pointer: {
                show: false
            },
            detail: {
                show: false
            },
            data: [{
                value: 1
            }],
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [1, "#999"]
                    ],
                    width: 1,
                    opacity: 1
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 12,
                lineStyle: {
                    color: "#051932",
                    width: 0,
                    type: "solid"
                }
            },
            axisLabel: {
                show: false
            }
        },

        // 最里层圆心部分
        {
            name: "最内层线",
            type: "gauge",
            radius: "0%",
            center: ["50%", "50%"],
            startAngle: 360,
            endAngle: 0,
            axisLine: {
                show: false,
                lineStyle: {
                    opacity: 0
                }
            },
            splitLine: {
                show: false,
                lineStyle: {
                    opacity: 0
                }
            },
            axisLabel: {
                show: false
            },
            // 最里面圆心
            axisTick: {
                length: 2,
                lineStyle: {
                    color: "#333",
                    width: 25,
                    type: "normal"
                }
            },
            detail: {
                show: false
            },
            pointer: {
                show: false
            }
        }
    ]
};