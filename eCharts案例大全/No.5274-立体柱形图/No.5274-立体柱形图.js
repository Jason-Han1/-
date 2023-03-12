var dataUitName1 = ["党委办公室", "党委组织部", "党委宣传部", "党委干部部"]
var departmentdata1_1 = [10, 20, 30, 40]
var departmentdata2_1 = [5, 10, 15, 20]
var departmentdata3_1 = [1, 1, 1, 1]
var departmentdata4_1 = [4, 9, 14, 19]
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    grid: {
        left: '3%',
        right: '3%',
        top: '12%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: "category",
        /*data: dataUit,*/
        data: dataUitName1,
        axisTick: {
            alignWithLabel: true
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(27,63,129,.4)'
            }
        },
        axisLabel: { //坐标轴刻度标签的相关设置。
            interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
            margin: 15,
            textStyle: {
                color: '#6B9DD7',
                fontStyle: 'normal',
                fontSize: 16,
            }
        },
    }],
    yAxis: [{
        type: "value",
        axisLabel: { //坐标轴刻度标签的相关设置。
            interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
            margin: 15,
            textStyle: {
                color: '#6B9DD7',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 16,
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(27,63,129,.4)'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(27,63,129,.4)'
            },
        },
    }],
    barGap: "100%",
    series: [
        // 总数
        {
            name: "总数",
            type: "pictorialBar",
            symbolSize: [12, 6],
            symbolOffset: [-36, -4],
            symbolPosition: "end",
            z: 12,
            label: {
                normal: {
                    show: false,
                }
            },
            data: departmentdata1_1,
            color: '#1B57E2',
            tooltip: {
                show: false
            },
        }, {
            name: "总数",
            type: "pictorialBar",
            symbolSize: [12, 6],
            symbolOffset: [-36, 4],

            z: 12,
            data: departmentdata1_1,
            color: '#1B57E2',
            tooltip: {
                show: false
            },
        }, {
            type: "bar",
            name: '总数',
            itemStyle: {
                normal: {
                    opacity: 0.7,
                    label: {
                        show: true, //开启显示
                        position: 'top', //在上方显示
                        textStyle: { //数值样式
                            color: '#a2c7f3',
                            fontSize: 18
                        }
                    }
                }
            },
            barWidth: "12",
            data: departmentdata1_1,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: "rgba(40,105,255,.4)"
                },
                {
                    offset: 1,
                    color: "rgba(59,95,255,.4)"
                }
            ]),
        },

        // 已完成

        {
            name: "",
            type: "pictorialBar",
            symbolSize: [12, 6],
            symbolOffset: [-12, -4],
            symbolPosition: "end",
            z: 12,
            label: {
                show: false
            },
            data: departmentdata2_1,
            color: '#28ADFF',
            tooltip: {
                show: false
            },
        }, {
            name: "",
            type: "pictorialBar",
            symbolSize: [12, 6],
            symbolOffset: [-12, 4],
            z: 12,
            data: departmentdata2_1,
            color: '#28ADFF',
            tooltip: {
                show: false
            },
        }, {
            type: "bar",
            name: '已完成',
            itemStyle: {
                normal: {
                    opacity: 0.7,
                    label: {
                        show: true, //开启显示
                        position: 'top', //在上方显示
                        textStyle: { //数值样式
                            color: '#a2c7f3',
                            fontSize: 18
                        }
                    }
                }
            },
            barWidth: "12",
            data: departmentdata2_1,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: "rgba(38,170,255,.6)"
                },
                {
                    offset: 1,
                    color: "rgba(59,199,255,.6)"
                }
            ]),
        },

        // 正在进行


        {
            name: "",
            type: "pictorialBar",
            symbolSize: [12, 6],
            symbolOffset: [12, -4],
            symbolPosition: "end",
            z: 12,
            label: {
                show: false
            },
            data: departmentdata3_1,
            color: '#F97B0F',
            tooltip: {
                show: false
            },
        }, {
            name: "",
            type: "pictorialBar",
            symbolSize: [12, 6],
            symbolOffset: [12, 4],
            z: 12,
            data: departmentdata3_1,
            color: '#F97B0F',
            tooltip: {
                show: false
            },
        }, {
            type: "bar",
            name: '正在进行',
            itemStyle: {
                normal: {
                    opacity: 0.7,
                    label: {
                        show: true, //开启显示
                        position: 'top', //在上方显示
                        textStyle: { //数值样式
                            color: '#a2c7f3',
                            fontSize: 18
                        }
                    }
                }
            },
            barWidth: "12",
            data: departmentdata3_1,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: "rgba(249,120,17,.6)"
                },
                {
                    offset: 1,
                    color: "rgba(247,137,7,.6)"
                }
            ]),
        },

        // 未完成


        {
            name: "",
            type: "pictorialBar",
            symbolSize: [12, 6],
            symbolOffset: [36, -4],
            symbolPosition: "end",
            z: 12,
            label: {
                show: false
            },
            data: departmentdata4_1,
            color: '#BA2453',
            tooltip: {
                show: false
            },
        }, {
            name: "",
            type: "pictorialBar",
            symbolSize: [12, 6],
            symbolOffset: [36, 4],
            z: 12,
            data: departmentdata4_1,
            color: '#BA2453',
            tooltip: {
                show: false
            },
        }, {
            type: "bar",
            name: '逾期未完成',
            itemStyle: {
                normal: {
                    opacity: 0.7,
                    label: {
                        show: true, //开启显示
                        position: 'top', //在上方显示
                        textStyle: { //数值样式
                            color: '#a2c7f3',
                            fontSize: 18
                        }
                    }
                }
            },
            barWidth: "12",
            data: departmentdata4_1,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: "rgba(233,61,96,.6)"
                },
                {
                    offset: 1,
                    color: "rgba(201,44,101,.6)"
                }
            ]),
        },

    ]
}