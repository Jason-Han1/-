var firstLineData = [11, 12, 2, 14, 19, 13, 12];
var secondLineData = [13, 12, 16, 9, 12, 16, 14];
var thirdLineData = [8, 14, 12, 14, 19, 13, 15];
var fourthLineData = [8, 18, 13, 14, 9, 19, 10];
var seven_day_date = new Date();
var seven_day_data = [];
// 补零
function addZero(data) {
    if (data < 10) {
        data = "0" + data;
    }
    return data;
}
for (var i = 0; i < 7; i++) {
    var month = seven_day_date.getMonth() + 1;
    var day = seven_day_date.getDate();
    seven_day_date = new Date(
        seven_day_date.getTime() - 1000 * 60 * 60 * 24
    );
    seven_day_data.push(addZero(month) + "." + addZero(day));
}
seven_day_data.reverse();
option = {
    backgroundColor: '#031A32',
    tooltip: {
        show: true,
        trigger: "axis",
        axisPointer: {
            animation: false,
            type: "line",
            axis: "x"
        }
    },
    legend: {
        top: '10%',
        textStyle: {
            color: "#00FCF9",
            fontSize: 16
        }
    },
    grid: [{
            left: '8%',
            right: '8%',
            top: 180,
            height: 120
        },
        {
            left: '8%',
            right: '8%',
            top: 300,
            height: 120
        },
        {
            left: '8%',
            right: '8%',
            top: 420,
            height: 120
        },
        {
            left: '8%',
            right: '8%',
            top: 540,
            height: 120
        }
    ],
    xAxis: [{
            type: "category",
            name: "",
            color: "#00FCF9",
            axisLabel: {
                show: false,
                color: "transparent"
            },
            axisTick: {
                show: false, //隐藏X轴刻度
                alignWithLabel: true
            },
            axisLine: {
                show: true, //隐藏X轴轴线
                lineStyle: {
                    color: "#3d5269",
                    width: 1
                }
            },
            data: seven_day_data
        },
        {
            gridIndex: 1,
            type: "category",
            name: "",
            axisLabel: {
                show: false,
                color: "transparent"
            },
            axisTick: {
                show: false, //隐藏X轴刻度
                alignWithLabel: true
            },
            axisLine: {
                show: true, //隐藏X轴轴线
                lineStyle: {
                    color: "#3d5269",
                    width: 1
                }
            },
            data: seven_day_data
        },
        {
            gridIndex: 2,
            type: "category",
            name: "",
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false, //隐藏X轴刻度
                alignWithLabel: true
            },
            axisLine: {
                show: true, //隐藏X轴轴线
                lineStyle: {
                    color: "#3d5269",
                    width: 1
                }
            },
            data: seven_day_data
        },
        {
            gridIndex: 3,
            type: "category",
            name: "",
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#73D6FF",
                    fontSize: 14
                }
            },
            axisTick: {
                show: true, //隐藏X轴刻度
                alignWithLabel: true
            },
            axisLine: {
                show: true, //隐藏X轴轴线
                lineStyle: {
                    color: "#3d5269",
                    width: 1
                }
            },
            data: seven_day_data
        }
    ],
    yAxis: [{
            name: "次数",
            type: "value",
            gridIndex: 0,
            scale: true,
            nameTextStyle: {
                color: "#73D6FF",
                fontSize: 14,
                align: "left",
                padding: [0, 0, 0, -12]
            },
            axisLabel: {
                showMinLabel: false,
                textStyle: {
                    color: "#73D6FF",
                    fontSize: 14
                }
            },
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            minInterval: 10
        },
        {
            gridIndex: 1,
            name: "",
            type: "value",
            scale: true,
            splitLine: {
                show: false
            },
            axisLabel: {
                showMinLabel: false,
                textStyle: {
                    color: "#73D6FF",
                    fontSize: 14
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            minInterval: 10
        },
        {
            gridIndex: 2,
            name: "",
            type: "value",
            scale: true,
            splitLine: {
                show: false
            },
            axisLabel: {
                showMinLabel: false,
                textStyle: {
                    color: "#73D6FF",
                    fontSize: 14
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            minInterval: 10
        },
        {
            gridIndex: 3,
            name: "",
            type: "value",
            scale: true,
            splitLine: {
                show: false
            },
            axisLabel: {
                showMinLabel: false,
                textStyle: {
                    color: "#73D6FF",
                    fontSize: 14
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            minInterval: 10
        }
    ],
    series: [{
            name: "高兴",
            type: "line",
            symbolSize: 0,
            hoverAnimation: false,
            connectNulls: true,
            data: firstLineData,
            symbol: "circle",
            // 设置折点大小
            symbolSize: 8,
            // 设置为光滑曲线
            smooth: false,
            itemStyle: {
                //折线拐点标志的样式
                color: "#B708B7"
            }
        },
        {
            name: "愤怒",
            type: "line",
            xAxisIndex: 1,
            yAxisIndex: 1,
            symbolSize: 0,
            hoverAnimation: false,
            connectNulls: true,
            data: secondLineData,

            symbol: "circle",
            // 设置折点大小
            symbolSize: 8,
            // 设置为光滑曲线
            smooth: false,
            itemStyle: {
                //折线拐点标志的样式
                color: "#4790A3"
            }
        },
        {
            name: "悲伤",
            type: "line",
            xAxisIndex: 2,
            yAxisIndex: 2,
            symbolSize: 0,
            hoverAnimation: false,
            connectNulls: true,
            data: thirdLineData,
            symbol: "circle",
            // 设置折点大小
            symbolSize: 8,
            // 设置为光滑曲线
            smooth: false,
            itemStyle: {
                //折线拐点标志的样式
                color: "#78A747"
            }
        },
        {
            name: "平静",
            type: "line",
            xAxisIndex: 3,
            yAxisIndex: 3,
            symbolSize: 0,
            hoverAnimation: false,
            connectNulls: true,
            data: fourthLineData,
            symbol: "circle",
            // 设置折点大小
            symbolSize: 8,
            // 设置为光滑曲线
            smooth: false,
            itemStyle: {
                //折线拐点标志的样式
                color: "#FFCCCC"
            }
        }
    ]
};