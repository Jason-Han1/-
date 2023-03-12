option = {
    backgroundColor: '#00265f',
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow"
        }
    },
    grid: {
        left: "3%",
        right: "10%",
        bottom: "3%",
        containLabel: true
    },
    yAxis: [{
        type: "category",
        data: ["路由器", "交换机", "存储设备", "数据库系统", "服务器", "中间件"],
        axisLine: {
            show: true,
            lineStyle: {
                "color": "#063374",
            },
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                color: "#00c7ff",
            }
        }
    }],
    xAxis: [{
        type: "value",
        axisLine: {
            show: true,
            lineStyle: {
                "color": "#063374",//底部坐标颜色
            },
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#00c7ff",
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "#063374",
            },
        }
    }],

    series: [{
        type: "bar",
        name:"设备故障",
        data: [800, 752, 684, 620, 588, 420],
        itemStyle: {
            normal: {
                barBorderRadius: [0, 5, 5, 0],
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: "#19486c"
                }, {
                    offset: 1,
                    color: "#c1e001"
                }], false)
            }
        }
    }]
};