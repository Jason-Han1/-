option =  {
    backgroundColor:'#222222',
  grid: {
    top: "15%",
    bottom: "10%",
    left: "18%",
    right: "20%",
  },
  legend: {
    type: "scroll",

    itemGap: 30,
    selectedMode: false,
    icon: "pin",
    data: ["发动机转速(rpm)", "发动机荷载率(%)"],
    textStyle: {
      color: "#FFFFFF",
      rich: {
        uname: {
          width: 50,
        },
        unum: {
          show: false,
          color: "#4ed139",
        },
      },
    },
 
  },

  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  xAxis: {
    type: "category",
    data: [
      "2/18",
      "2/19",
      "2/20",
      "2/21",
      "2/22",
      "2/23",
      "2/24",
      "2/25",
      "2/26",
      "2/27",
      "2/28",
      "2/29",
    ],
    axisLabel: {
      //坐标轴刻度标签的相关设置。
      textStyle: {
        color: "#fff",
        fontStyle: "normal",
        fontSize: 10,
      },
    },
    axisTick: {
      //坐标轴刻度相关设置。
      show: false,
    },
    axisLine: {
      //坐标轴轴线相关设置
      lineStyle: {
        color: "#1ED2FF",
        opacity: 1
      },
    },

    splitLine: {
      lineStyle: { type: "dashed", color: "rgba(30, 210, 255,0.4)", width: 1 },
      show: true,
    },
  },
  yAxis: [
    {
      type: "value",
      name: "发\n动\n机\n转\n速\n(rpm)",
      axisTick: {
        show: false,
      },
      axisLine: {
        //  改变y轴颜色
        lineStyle: {
          color: "#1ED2FF",
        },
      },
      axisLabel: {
        //  改变y轴字体颜色和大小
        // formatter: '{value} m³ ', //  给y轴添加单位
        textStyle: {
          color: "#fff",
          fontSize: 10,
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
          color: "rgba(30, 210, 255,0.4)", //内容线
        },
      },
      nameLocation: "left",
      nameTextStyle: {
        color: "#FFFFFF",
        fontSize: 12,
        padding: [200, 70, -30, 0],
      },
    },
    {
      type: "value",
      name: "发\n动\n机\n荷\n载\n率\n(%)",
      nameLocation: "right",
      nameTextStyle: {
        color: "#FFFFFF",
        fontSize: 12,
        padding: [20, 70, -30, 150],
      },
      position: "right",

      axisTick: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#1ED2FF",
          width: 1,
        },
      },
      axisLabel: {
        show: true,
        formatter: "{value} %", //右侧Y轴文字显示
        textStyle: {
          color: "#fff",
          fontSize: 10,
        },
      },
      splitLine: {
        show: false,
        lineStyle: {
          type: "dashed",
          color: "#1ED2FF", //内容线
        },
      },
    },
  ],
  color: ["#EAE018", " #13E2E1"],
  series: [
    {
      name: "发动机转速(rpm)",
      type: "line",
      data: [1000, 2000, 3000, 4000, 5000, 5000, 3000, 2000, 1000, 2000, 3000, 4000],
      smooth: true,
      symbol: "circle",
      symbolSize: 5,
      showSymbol: false,
      lineStyle: {
        normal: {
          width: 2,
          color: "#EAE018",
          shadowColor: " rgba(234, 224, 24, 0.7) ",

          shadowBlur: 10,
          shadowOffsetY: 0,
        },
      },
      yAxisIndex: 0,
      itemStyle: {
        normal: {
          color: "#EAE018",
          borderWidth: 0,
          /*shadowColor: 'rgba(72,216,191, 0.3)',
              shadowBlur: 100,*/
          borderColor: "#A9F387",
        },
      },
    },
    {
      name: "发动机荷载率(%)",
      type: "line",

      data: [10, 20, 30, 40, 50, 40, 40, 30, 40, 50, 50, 20],
      smooth: true,
      symbol: "circle",
      symbolSize: 5,
      showSymbol: false,
      yAxisIndex: 1,
      lineStyle: {
        normal: {
          width: 3,
          color: "#13E2E1",
          shadowColor: " rgba(19, 226, 225, 0.6) ",
          shadowBlur: 10,
          shadowOffsetY: 0,
        },
      },
      itemStyle: {
        normal: {
          color: "#13E2E1",
          borderWidth: 0,
          /*shadowColor: 'rgba(72,216,191, 0.3)',
              shadowBlur: 100,*/
          borderColor: "#A9F387",
        },
      },
    },
  ],
};