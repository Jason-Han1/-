let datas = {
    yData1: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02, ],
    yData2: [501.84, 105.97, 132.79, 281.55, 298.35, 114.02, ],
    xData: ['A', 'B', 'C', 'D', 'E', 'F'],
    legend: ["今年", "去年"]
}
let xData = datas.xData;
let yData1 = datas.yData1;
let yData2 = datas.yData2;
let legend = datas.legend;
let color = ["#00B795", "#4aa3f0"];
let textColor = "#0172E4";
let axisLineColor = "#0172E4";
let legendTextColor = "#003A76";
let fontSize = 16;
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {

        },
    },
    legend: {
        icon: "rect",
        itemWidth: 50,
        itemHeight: 2,
        itemGap: 250,
        bottom: "3%",
        textStyle: {
            color: legendTextColor,
            fontSize,
            padding: [50, 10, 10, -45]

        },
        data: legend
    },
    xAxis: [{
        show: true,
        type: 'category',
        axisLine: {
            show: true,
            lineStyle: {
                color: axisLineColor,
            }
        },
        splitArea: {
            show: false,

        },
        axisLabel: {
            color: textColor
        },
        splitLine: {
            show: false,

        },
        axisTick: {
            show: false
        },
        boundaryGap: false,
        data: xData,

    }],
    grid: {
        x: '5%',
        y: '5%',
        x2: '5%',
        y2: '15%',
        borderWidth: 1
    },
    yAxis: [{
        type: 'value',
        splitLine: {
            show: true,
            lineStyle: {
                color,
                type: "dashed"
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: axisLineColor,
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: textColor,
            },
        },
        axisTick: {
            show: false,
        },
    }, {
        type: 'value',
        splitLine: {
            show: true,
            lineStyle: {
                color,
                type: "dashed"
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                type: "dashed",
                color: axisLineColor,
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: textColor,
            },
        },
        axisTick: {
            show: false,
        },
    }],
    series: [{
            name: legend[0],
            type: 'line',
            smooth: false, //是否平滑
            showAllSymbol: false,
            symbol: 'circle',
            symbolSize: 2,
            lineStyle: {
                normal: {
                    color: color[0]
                },
            },
            itemStyle: {
                color: color[0],
            },
            data: yData1
        }, {
            name: legend[1],
            type: 'line',
            yAxisIndex: 1,
            smooth: false, //是否平滑
            showAllSymbol: false,
            symbol: 'circle',
            symbolSize: 2,
            lineStyle: {
                normal: {
                    color: color[1]
                },
            },
            itemStyle: {
                color: color[1],
            },
            data: yData2
        },

    ]
};