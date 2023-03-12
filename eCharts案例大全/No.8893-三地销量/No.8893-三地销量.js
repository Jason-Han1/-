option = {
    backgroundColor: "#1A1835",
    color: ["#C257F6", "#79C2BC", "#6F7DE3"],
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        x: "40%",
        y: "2%",
        textStyle: {
            color: "rgba(204,187,225,0.6)",
        },
        data: ['北京', '上海', '深圳']
    },
    grid: {
        y: "6%",
        left: "4%",
        right: "4%",
        containLabel: true
    },

    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: "rgba(204,187,225,0.6)",
            }
        },
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: true,
            lineStyle: {
                color: "rgba(204,187,225,0.6)",
            }
        },
        axisLine: {
            lineStyle: {
                color: "rgba(204,187,225,0.6)",
            }
        },
    },
    series: [{
            name: '北京',
            type: 'line',
            smooth: true,
            symbolSize: 10,
            symbol: 'circle',
            data: [120, 82, 101, 134, 90, 230, 210]
        }, {
            name: '上海',
            type: 'line',
            smooth: true,
            symbolSize: 10,
            symbol: 'circle',
            data: [220, 182, 191, 234, 290, 310, 270]
        }, {
            name: '深圳',
            type: 'line',
            smooth: true,
            symbolSize: 10,
            symbol: 'circle',
            data: [150, 232, 201, 154, 190, 330, 310]
        },

    ]
};