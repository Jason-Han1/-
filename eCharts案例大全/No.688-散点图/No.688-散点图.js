option = {
    backgroundColor: "#0f375f",
    color: ["rgba(15,179,243,0.3)", "rgba(23,216,161,0.3)"],
    xAxis: {
        axisLine: { //  改变x轴颜色
            lineStyle: {
                color: '#26D9FF',
            }
        },
        axisLabel: { //  改变x轴字体颜色和大小
            textStyle: {
                color: "rgba(250,250,250,0.6)",
                fontSize: 16
            },
        },
        splitLine: {
            lineStyle: {
                color: "rgba(255,255,255,0.2)"
            }
        },
    },
    yAxis: {
        axisLine: { //  改变y轴颜色
            lineStyle: {
                color: '#26D9FF'
            }
        },
        axisLabel: { //  改变y轴字体颜色和大小
            //formatter: '{value} m³ ', //  给y轴添加单位
            textStyle: {
                color: "rgba(250,250,250,0.6)",
                fontSize: 16
            },
        },
        splitLine: {
            lineStyle: {
                color: "rgba(255,255,255,0.2)"
            }
        },
    },
    series: [{
        itemStyle: {
            borderColor: "#0FC5F3",
            borderWidth: 2,
            shadowColor: "#0FC5F3",
            shadowBlur: 10
        },
        symbolSize: 22,
        data: [
            [10.0, 8.04],
            [8.0, 6.95],
            [13.0, 7.58],
            [9.0, 8.81],
            [11.0, 8.33],
            [14.0, 9.96],
            [6.0, 7.24],
            [4.0, 4.26],
            [12.0, 10.84],
            [7.0, 4.82],
            [5.0, 5.68]
        ],
        type: 'scatter'
    }, {
        itemStyle: {
            borderColor: "#17D8A1",
            borderWidth: 2,
            shadowColor: "#17D8A1",
            shadowBlur: 10
        },
        symbolSize: 22,
        data: [
            [9.0, 5.04],
            [11.0, 7.95],
            [12.0, 8.58],
            [5.0, 11.81],
            [7.0, 12.33],
            [11.0, 7.96],
            [7.0, 9.24],
            [6.0, 8.26],
            [10.0, 11.84],
            [7.0, 3.82],
            [6.0, 4.68]
        ],
        type: 'scatter'
    }]
}