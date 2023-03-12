option = {
    backgroundColor: '#333333',
    tooltip: {
        formatter: function(params) {
            return params.name+'：'+Math.abs(params.data)
        }
    },
    xAxis: [{
        type: "value",
        splitNumber: 9,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: "rgba(110,241,246,0.09)",
                width: 0.5
            }
        },
        axisLabel: {
            color: "#96F5F6",
            fontSize: 8,
            // 将X轴上的负数取绝对值变正数
            formatter(value) {
                return Math.abs(value)
            }
        }
    }],
    yAxis: [{
        type: "category",
        data: ["活跃", "上云", "离线", "增长"],
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            color: "#96F5F6",
            fontSize: 8
        }
    }],
    series: [{
            type: "bar",
            data: [-65, -75, -55, -70],
            stack: "总量",
            barWidth: "20%",
            itemStyle: {
                color: "#6EF1F6"
            }
        },
        {
            type: "bar",
            barWidth: "40%",
            data: [25, 65, 80, 50],
            stack: "总量",
            itemStyle: {
                color: "#ED714F"
            }
        }
    ]
}