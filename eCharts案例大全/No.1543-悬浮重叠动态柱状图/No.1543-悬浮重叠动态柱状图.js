const dataX = ["09.01", "09.02", "09.03", "09.04", "09.05", "09.06", "09.07"];
const dataBar = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149];
const bar = [223, 258, 240, 230, 220, 133, 144, 166, 222, 223, 143, 133];
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
      top: "top",
      right: "6%",
      data: ["已处理", "未处理"],
      itemGap: 14,
      itemWidth: 14,
      itemHeight: 14,
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
        axisLabel: {
          textStyle: {
            color: "rgba(0,0,0, .7)",
            fontSize: 14,
          },
        },
        axisTick: { show: false },
        axisLine: { show: false },
        // y轴分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(0,0,0, .1)",
            type: "dashed",
          },
        },
      },
    ],
    series: [
      {
        name: "Max",
        type: "bar",
        barGap: "-75%",
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
        z: -1,
        tooltip: {
          show: false,
        },
      },
      {
        name: "",
        type: "bar",
        barWidth: "35%",
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
        name: "已处理",
        type: "bar",
        stack: "one",
        barWidth: "35%",
        itemStyle: {
          color: "rgba(0,133,255,0.5)",
        },
        emphasis: {
          itemStyle: {
            color: "rgba(0,133,255,1)",
          },
        },
        data: dataBar,
      },
      {
        name: "",
        type: "bar",
        barWidth: "35%",
        stack: "one",
        itemStyle: {
          normal: {
            color: "rgba(111,186,255,1)",
          },
        },
        data: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        tooltip: {
          show: false,
        },
      },
      {
        name: "未处理",
        type: "bar",
        stack: "one",
        barWidth: "35%",
        itemStyle: {
          color: "rgba(241,162,42,0.5)",
        },
        emphasis: {
          itemStyle: {
            color: "rgba(241,162,42,1)",
          },
        },
        data: bar,
      },
      {
        name: "",
        type: "bar",
        barWidth: "35%",
        stack: "one",
        itemStyle: {
          normal: {
            color: "rgba(255,195,40,1)",
          },
        },
        data: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        tooltip: {
          show: false,
        },
      },
    ],
 }
 
let currentIndex = -1;
setInterval(() => {
    const dataLen1 = 7;
    myChart.dispatchAction({
      type: "downplay",
      seriesIndex: 0,
      dataIndex: currentIndex,
    });
    currentIndex = (currentIndex + 1) % dataLen1;
    myChart.dispatchAction({
      type: "highlight",
      seriesIndex: 0,
      dataIndex: currentIndex,
    });
    myChart.dispatchAction({
      type: "showTip",
      seriesIndex: 0,
      dataIndex: currentIndex,
    });
}, 3000);