option = {
      backgroundColor:"#003366",
  tooltip: {
    trigger: "axis",
    textStyle: {
      fontSize: 10,
    },
  },
  legend: {
    data: ["女性", "男性"],
    left: "center",
    itemWidth: 15, // 设置宽度
    itemHeight: 10, // 设置高度
    top: 0,
    textStyle: {
      color: "#fff",
      fontSize: 10,
      padding: [2, 0, 0, 0],
    },
  },
  grid: {
    left: "2%",
    right: "2%",
    bottom: "5%",
    top: 30,
    containLabel: true,
  },

  xAxis: [
    {
      type: "category",

      axisLine: {
        show: false,
        lineStyle: {
          color: "#68d8fe",
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        textStyle: {
          fontSize: 8,
        },
      },
      data: ["2016", "2017", "2018", "2019", "2020"],
    },
  ],
  yAxis: [
    {
      type: "value",
      min:24,
      splitLine: {
        lineStyle: {
          color: "#194386",
        },
      },
      axisLabel: {
        showMinLabel:false,
        color: "#68d8fe",
        interval: "auto",
        textStyle: {
          fontSize: 8,
        },
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
    },
  ],
  series: [
    {
      name: "女性",
      color: "#eda45a",
       type: "bar",
      barWidth: "20%",
      data: [
        {
          name: 2016,
          value: 26.9,
        },
        {
          name: 2017,
          value: 27.2,
        },
        {
          name: 2018,
          value: 27.4,
        },
        {
          name: 2019,
          value: 27.6,
        },
        {
          name: 2020,
          value: 27.8,
        },
      ],
    },
    {
      name: "男性",
      color: "#54d6b4",
      type: "bar",
      barWidth: "20%",
      data: [
        {
          name: 2016,
          value: 28.8,
        },
        {
          name: 2017,
          value: 29,
        },
        {
          name: 2018,
          value: 29.1,
        },
        {
          name: 2019,
          value: 29.1,
        },
        {
          name: 2020,
          value: 29.1,
        },
      ],
    },
  ],
};