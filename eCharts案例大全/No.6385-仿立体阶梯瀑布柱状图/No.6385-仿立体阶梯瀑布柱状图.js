/**
 * 柱状阶梯瀑布图
 */

const dataTotal = [0, 200, 85, 112, 275, 305, 415, 741]
const data = [200, 85, 112, 275, 305, 415, 741, 405];
const tops = [1, 1, 1, 1, 1, 1, 1, 1]
const xAxisData = [0, 1, 2, 3, 4, 5, 6]

option = {
    backgroundColor: '#031245',
    textStyle: {
        color: "#c0c3cd",
        fontSize: 14
    },
    color: ["#63caff", "#49beff"],
    grid: {
        containLabel: true,
        left: 20,
        right: 20,
        bottom: 10,
        top: 40
    },
    tooltip: {
        show: false
    },
    xAxis: {
        nameTextStyle: {
            color: "#c0c3cd",
            padding: [0, 0, -10, 0],
            fontSize: 14
        },
        axisLabel: {
            color: "#c0c3cd",
            fontSize: 14,
            interval: 0
        },
        axisTick: {
            lineStyle: {
                color: "#384267",
                width: 1
            },
            show: true
        },
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: "#384267",
                width: 1,
                type: "dashed"
            },
            show: true
        },
        data: xAxisData,
        type: "category"
    },
    yAxis: {
        nameTextStyle: {
            color: "#c0c3cd",
            padding: [0, 0, -10, 0],
            fontSize: 14
        },
        axisLabel: {
            color: "#c0c3cd",
            fontSize: 14
        },
        axisTick: {
            lineStyle: {
                color: "#384267",
                width: 1
            },
            show: true
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "#384267",
                type: "dashed"
            }
        },
        axisLine: {
            lineStyle: {
                color: "#384267",
                width: 1,
                type: "dashed"
            },
            show: true
        },
    },
    series: [
        {
            name: '辅助',
            type: 'bar',
            stack: '总量',  // 重点
            itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: dataTotal,
            barGap: 0
        },
        {
            data: data,
            type: "bar",
            stack: '总量',
            barMaxWidth: "auto",
            barWidth: 30,
            itemStyle: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: "linear",
                    global: false,
                    colorStops: [
                        {
                            offset: 0,
                            color: "#0b9eff"
                        }, {
                            offset: 1,
                            color: "#63caff"
                        }
                    ]
                }
            },
            label: {
                show: true,
                position: "top",
                distance: 10,
                color: "#fff"
            }
        },
        {
            name: '底部',
            data: tops.map((item, i) => item + dataTotal[i] + 10),
            stack: '总量',
            type: "pictorialBar",
            barMaxWidth: "20",
            symbol: "diamond",
            symbolPosition: "end",
            symbolOffset: [0, 0],
            symbolSize: [30, 12]
        }, 
        {
            name: '顶部',
            data: dataTotal.map((item, i) => item + data[i] + 10),
            stack: '总量',
            type: "pictorialBar",
            barMaxWidth: "20",
            symbolPosition: "end",
            symbol: "diamond",
            symbolOffset: [0, 0],
            symbolSize: [30, 12],
            zlevel: 2
        }, 
    ],
}