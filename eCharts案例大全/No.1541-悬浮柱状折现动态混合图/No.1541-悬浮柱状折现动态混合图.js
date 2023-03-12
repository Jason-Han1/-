const dataX = [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ];
const dataBar = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149];
const dataNowY = [23, 58, 40, 30, 20, 33, 44, 66, 22, 23, 43, 33];
var option = {
    tooltip: {
      trigger: "axis",
      backgroundColor: "rgba(33,56,77,1)",
      borderColor: "rgba(33,56,77,1)",
      textStyle: {
        color: "#fff",
        fontSize: 14,
      },
      axisPointer: {
        lineStyle: {
          color: "rgba(0,133,255,0)",
        },
      },
    },
    legend: {
      right: "4%",
      data: ["增长率", "合同金额"],
      itemGap: 20,
      itemWidth: 20,
      itemHeight: 10,
      textStyle: {
        color: "#000",
        fontSize: 14,
      },
    },
    grid: {
      top: "12%",
      right: "4%",
      bottom: "10%",
      left: "4%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: ["0", "20%"],
      data: dataX,
      axisLabel: {
        // interval: 0,
        textStyle: {
          color: "rgba(0,0,0, .7)",
          fontSize: 14,
        },
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false, // 去除刻度线
      },
    },
    yAxis: [
      {
        type: "value",
        // boundaryGap: ['0', '20%'],
        axisLabel: {
          textStyle: {
            color: "rgba(0,0,0, .7)",
            fontSize: 14,
          },
        },
        axisTick: { show: false },
        axisLine: { show: false },
        splitLine: { show: false },
      },
      {
        type: "value",
        axisLabel: {
          formatter: "{value} °C",
          textStyle: {
            color: "rgba(0,0,0, .7)",
            fontSize: 14,
          },
        },
        boundaryGap: ["0", "20%"],
        axisTick: { show: false },
        axisLine: { show: false },
        splitLine: { show: false },
      },
    ],
    series: [
      {
        name: "Max",
        type: "bar",
        barGap: "-76.5%",
        barWidth: "70%",
        silent: true,
        symbol:
          "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
        itemStyle: {
          normal: {
            color: "rgba(11,47,68,.2)",
            borderWidth: 2,
            borderColor: "rgba(255,255,255,0.20)",
          },
        },
        emphasis: {
          itemStyle: {
            borderWidth: 2,
            borderColor: "rgba(19,255,241,1)",
          },
        },
        data: [600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600],
        z: 9,
        tooltip: {
          show: false,
        },
      },
      {
        name: "",
        type: "bar",
        barWidth: "40%",
        stack: "one",
        labelLine: {
          show: false,
          lineStyle: {
            color: "transparent",
          },
        },
        itemStyle: {
          color: "transparent",
        },
        tooltip: {
          show: false,
        },
        data: [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
      },
      {
        name: "合同金额",
        type: "bar",
        barWidth: "40%",
        stack: "one",
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "rgba(0,133,255, 0.8)" },
            { offset: 1, color: "rgba(0,133,255, 0.2)" },
          ]),
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgba(19,255,241, 0.8)" },
              { offset: 1, color: "rgba(19,255,241, 0.2)" },
            ]),
          },
        },
        data: dataBar,
      },
      {
        name: "",
        type: "bar",
        barWidth: "40%",
        stack: "one",
        itemStyle: {
          normal: {
            color: "rgba(172,215,255,1)",
          },
        },
        data: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        tooltip: {
          show: false,
        },
      },
      {
        name: "增长率",
        type: "line",
        yAxisIndex: 1,
        symbolSize: 8,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "rgba(0,133,255,1)",
        },
        data: dataNowY,
      },
    ],
}

let currentIndex = -1;
  this.timer = setInterval(() => {
    const dataLen = 12;
    // 取消之前高亮的图形
    myChart.dispatchAction({
      type: "downplay",
      seriesIndex: 0,
      dataIndex: currentIndex,
    });
    currentIndex = (currentIndex + 1) % dataLen;
    // 高亮当前图形
    myChart.dispatchAction({
      type: "highlight",
      seriesIndex: 0,
      dataIndex: currentIndex,
    });
    // 显示 tooltip
    myChart.dispatchAction({
      type: "showTip",
      seriesIndex: 0,
      dataIndex: currentIndex,
    });
}, 3000);
