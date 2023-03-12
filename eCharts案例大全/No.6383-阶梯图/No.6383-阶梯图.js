//  阶梯图

// 默认显示tooltip
// showTooltip() {
//     let myEcharts = echarts.init(this.$refs.chartBox);
//     myEcharts.dispatchAction({
//         type: 'showTip',
//         seriesIndex: 0,  // 显示第几个series
//         dataIndex: 2     // 显示第几个数据
//     });
// }

const xAxisData = ["1月", "2月", "3月", "4月", "5月", "6月"]
const legendData = ['益湛线', '湘桂线', '广深线']
option = {
    backgroundColor: '#09102D',
    legend: {
        show: true,
        icon: "rect",
        itemWidth: 7,
        itemHeight: 7,
        right: "10%",
        bottom: "1%",
        textStyle: {
            color: "#fff"
        },
        data: legendData
    },
    tooltip: {
        trigger: "axis",
        backgroundColor: '#19224D',
        padding: 15,
        axisPointer: {
            type: 'none'
        }
    },
    xAxis: {
        type: "category",
        data: xAxisData,
        splitLine: {
            show: false
        },
        axisLabel: {
            color: '#7B818E',
        },
    },
    yAxis: {
        color: '#7B818E',
        splitLine: {
            show: true,
            lineStyle: {
                color: "#383E56",
                width: 1
            },
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            color: '#7B818E',
        }
    },
    series: [
      {
        name: '益湛线',
        data: [10, 15, 20, 10, 15, 15, 15],
        type: "line",
        step: "start",
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 12,
        itemStyle: {
            color: "#FFFA58",
            borderColor: "#fff",
            borderWidth: 3,
            shadowColor: 'rgba(0, 0, 0, .3)',
            shadowBlur: 0,
            shadowOffsetY: 2,
            shadowOffsetX: 2,
        },
      },
      {
        name: '湘桂线',
        data: [30, 35, 30, 30, 30, 30, 30],
        type: "line",
        step: "start",
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 12,
        itemStyle: {
            color: "#F85CC1",
            borderColor: "#fff",
            borderWidth: 3,
            shadowColor: 'rgba(0, 0, 0, .3)',
            shadowBlur: 0,
            shadowOffsetY: 2,
            shadowOffsetX: 2,
        },
      },
      {
        name: '广深线',
        data: [20, 25, 25, 25, 20, 20, 25],
        type: "line",
        step: "start",
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 12,
        itemStyle: {
            color: "#7E42FF",
            borderColor: "#fff",
            borderWidth: 3,
            shadowColor: 'rgba(0, 0, 0, .3)',
            shadowBlur: 0,
            shadowOffsetY: 2,
            shadowOffsetX: 2,
        },
      },
  ]
}