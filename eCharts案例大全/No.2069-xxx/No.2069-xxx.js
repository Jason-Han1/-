option = {
  // backgroundColor: "#FFF0F5",
  title: {
    text: `xxx`,
    // subtext: "模拟数据",
    x: "center",
    y: "4%",
    textStyle: {
      color: "#fff",
      fontSize: 16,
      padding: [15],
    },
  },
  color: ["#fff", "#ff0"],
  legend: {
    // orient 设置布局方式，默认水平布局，可选值：'horizontal'（水平） | 'vertical'（垂直）
    orient: "vertical",
    // x 设置水平安放位置，默认全图居中，可选值：'center' | 'left' | 'right' | {number}（x坐标，单位px）
    x: "5%",
    // y 设置垂直安放位置，默认全图顶端，可选值：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
    y: "6%",
    // data: [1, 2, 3, 4, 5, 6, 7],
    textStyle: {
      color: "#00ffff",
      fontSize: 14,
      fontWeight: 300,
      padding: [0, 0, 0, 15],
    },
    // 点的联动
    selectedMode: false,
  },
  //  图表距边框的距离,可选值：'百分比'| {number}（单位px）
  grid: {
    top: "18%", // 等价于 y: '16%'
    left: "16%",
    right: "10%",
    bottom: "4%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    name: "日期",
    data: [1, 2, 3, 4, 5, 6, 7],
    //  改变x轴颜色
    axisLine: {
      lineStyle: {
        color: "#2A5D75",
      },
    },
    //  改变x轴字体颜色和大小
    axisLabel: {
      textStyle: {
        color: "#62B4BB",
        fontSize: "12",
      },
    },
  },
  yAxis: [
    {
      type: "value",
      name: "人数",
      // min: 0,
      // max: 45,
      // interval: 5, //间隔
      minInterval: 1, //设置成1保证坐标轴分割刻度显示成整数。
      axisLine: {
        lineStyle: {
          color: "#2A5D75",
        },
      },
      //  改变y轴字体颜色和大小
      axisLabel: {
        formatter: "{value}", //  给y轴添加单位
        textStyle: {
          color: "#8ACDF3",
          fontSize: "12",
        },
      },
      splitLine: {
        lineStyle: {
          color: "#2A5D75",
        },
      },
    },
    {
      type: "value",
      name: "人数",
      minInterval: 1, //设置成1保证坐标轴分割刻度显示成整数。
      axisLine: {
        lineStyle: {
          color: "#2A5D75",
        },
      },
      //  改变y轴字体颜色和大小
      axisLabel: {
        formatter: "{value}", //  给y轴添加单位
        textStyle: {
          color: "#8ACDF3",
          fontSize: "12",
        },
      },
    },
  ],
  series: [
    {
      data: [2, 3, 4, 5, 6, 7, 8],
      name: 'ss',
      type: "line",
      lineStyle: {
        //设置折线色颜色
        color: "#00ffff",
      },
      itemStyle: {
        //设置折线折点的颜色
        normal: {
          color: "#00ffff",
          // label: { show: true }
        },
      },
    },
    {
      data: [1, 2, 3, 4, 5, 6, 7],
      name: 'ss1',
      type: "line",
      lineStyle: {
        //设置折线色颜色
        color: "#c0c246",
      },
      itemStyle: {
        //设置折线折点的颜色
        normal: {
          color: "#c0c246",
        },
      },
    },
  ],
  tooltip: {
    //鼠标悬停提示内容
    trigger: "axis", // 触发类型，默认数据触发，可选为：'axis' item
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: "line", // 默认为直线，可选为：'line' | 'shadow'
      // label: "cross",
      // show: true,
    },
  },
};