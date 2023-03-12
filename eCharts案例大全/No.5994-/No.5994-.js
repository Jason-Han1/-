option = {
    backgroundColor: '#003366',
    tooltip: {
        show:false,
    },
    series: [{
            name: "刻度",
            type: "gauge",
            center: ["50%", "65%"],
            radius: '90%',
            min: 0, //最小刻度
            max: 100, //最大刻度
            splitNumber: 8, //刻度数量
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    color: [
                        [1, "rgba(0,0,0,0)"]
                    ],
                },
            }, //仪表盘轴线
            axisLabel: {
                show: false,
                color: "#0ab7ff",
                fontSize: 15,
                distance: -50,
            }, //刻度标签。
            axisTick: {
                show: true,
                splitNumber: 5,
                lineStyle: {
                    color: "#0ab7ff",
                    width: 1,
                },
                length: -3,
            }, //刻度样式
            splitLine: {
                show: true,
                length: -5,
                lineStyle: {
                    color: "#0ab7ff",
                },
            }, //分隔线样式
        },
        {
            type: "gauge",
            radius: '80%',
            center: ["50%", "65%"],
            splitNumber: 0, //刻度数量
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 60,
                    color: [
                        
// 			颜色渐变函数 前四个参数分别表示四个位置依次为 右上左下
                        [0, new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 1,
                            color: '#2CA70F' // 0% 处的颜色
                        }, {
                            offset: 0,
                            color: '#40CEEA' // 100% 处的颜色
                        }], false)],
                       
                        [0.6, new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                            offset: 1,
                            color: '#40CEEA' // 0% 处的颜色
                        }, {
                            offset: 0,
                            color: '#F2FA64' // 100% 处的颜色
                        }], false)],
                        
                        [1, new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0.8,
                            color: '#F2FA64' // 0% 处的颜色
                        }, {
                            offset: 0,
                            color: '#fa4e4b' // 100% 处的颜色
                        }], false)],
                    ],
                },
            },
            //分隔线样式。
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            pointer: {
                show: true,
                length: "50%",
                width: "2%",
            },
            title: {
                show: true,
                offsetCenter: [0, "24%"], // x, y，单位px
                textStyle: {
                    color: "#fff",
                    fontSize: 14,
                },
            },
            //仪表盘详情，用于显示数据。
            detail: {
                show: true,
                offsetCenter: [0, "12%"],
                color: "#ffffff",

                formatter: function(value) {
                    if (value <= 20) {
                        return "优";
                    } else if (value <= 40) {
                        return "良";
                    } else if (value <= 60) {
                        return "轻度污染";
                    } else if (value <= 80) {
                        return "中度污染";
                    } else {
                        return "重度污染"
                    }
                },
                textStyle: {
                    fontSize: 30,
                },
            },
            data: [{
                name: "当前环境质量",
                value: 55,
            }, ],
        },
        {
            // 仅显示tooltip用
            type: "pie",
            radius: "90%",
            hoverAnimation: true,
            label: {
                normal: {
                    show: false,
                    position: "center",
                },
            },
            labelLine: {
                normal: {
                    show: false,
                },
            },
            z: 3,
            zlevel: 0,
            itemStyle: {
                borderWidth: 0,
            },
            data: [{
                value: 50,
                name: "",
                label: {
                    normal: {
                        show: false,
                    },
                },
                itemStyle: {
                    normal: {
                        color: "transparent",
                    },
                },
            }, ],
        },
    ],
};