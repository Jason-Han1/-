var data = [
    ['/', '项目总数', '工资总数'],
    ["1月", 1, 3],
    ["2月", 1, 3],
    ["3月", 1, 3],
    ["4月", 1, 3],
    ["5月", 9, 8],
    ["6月", 1, 3],
    ["7月", 1, 3],
    ["8月", 1, 3],
    ["9月", 1, 3],
    ["10月", 1, 3],
    ["11月", 1, 3],
    ["12月", 1, 3],
]

var option = {
    legend: {
        textStyle: {
            color: "#fff"
        }
    },
    backgroundColor: "#1D4160",
    color: ["#6DEFFF", '#FF78F5', '#3F7EEF', '#AA72FF'],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: "10%",
        right: "10%",
        bottom: "40",
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        axisLine: {
            lineStyle: {
                color: "#D0E4E3"
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#D0E4E3" // X轴文字颜色
            }
        },
        data: data.xAxis
    }],
    yAxis: [{
        type: "value",
        name: "项目总数(个)",
        nameTextStyle: {
            color: "#D0E4E3"
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "#2C577C"
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#D0E4E3"
            }
        },
        axisLine: {
            show: false
        },
    }, {
        type: "value",
        name: "工资总数(万)",
        nameTextStyle: {
            color: "#D0E4E3"
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "#2C577C"
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#D0E4E3"
            }
        },
        axisLine: {
            show: false
        }
    }],
    dataset: {
        source: data
    },
    series: [{
        type: "bar",
        label: {
            show: true,
            position: "inside",
            color: "#fff"
        },
    }, {
        type: "line",
        yAxisIndex: 1,
        symbol: "circle", // 标记的图形为实心圆

        label: {
            show: true,
            position: "top",
            color: "#EDA8FF"
        },
        areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: "#FF78F5"
                },
                {
                    offset: 1,
                    color: "rgba(228, 145, 255, 0)"
                }
            ])
        }
    }]
};