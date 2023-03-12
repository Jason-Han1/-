var data2 = [25000, 22100, 32130, 43000, 12432];
  var data1 = [];
  for (var i = 0; i < data2.length; i++) {
    data1.push({
      value: 50000,
      label: data2[i],
    });
  }
 var barWidth = 21;
option = {
    xAxis: {
      type: "category",
      axisLabel: {
        color: "#cad8fd",
        fontSize: 14,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      offset: 30,
      data: ["2017", "2018", "2019", "2020", "2021"],
    },
    yAxis: {
      type: "value",
      name: "家",
      nameTextStyle: {
        fontSize: 14,
        align: "right",
        color: "#cad8fd",
      },
      axisLabel: {
        color: "#cad8fd",
        fontSize: 14,
      },
      offset: 20,
      splitLine: {
        show: false,
      },
    },
    grid: {
      left: 40,
      right: 50,
      top: 30,
      bottom: 30,
      containLabel: true,
    },
    series: [
      {
        // 上半截柱子
        name: "2019",
        type: "bar",
        barWidth: barWidth,
        barGap: "-100%",
        z: 0,
        itemStyle: {
          color: "#061978",
          opacity: 0.7,
        },
        data: data1,
      },
      {
        //下半截柱子
        name: "2020",
        type: "bar",
        barWidth: barWidth,
        barGap: "-100%",
        itemStyle: {
          opacity: 1,
          color: function (params) {
            return new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "#9948ff", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#1d5eff", // 100% 处的颜色
                },
              ],
              false
            );
          },
        },
        data: data2,
      },
      {
        type: "bar",
        barWidth: barWidth,
        barGap: "-100%",
        itemStyle: {
          color: "transparent",
        },
        data: data2,
      },
      {
        //上半截柱子顶部圆片
        name: "",
        type: "pictorialBar",
        symbolSize: [barWidth, 15],
        symbolOffset: [0, -5],
        z: 12,
        symbolPosition: "end",
        itemStyle: {
          color: "#0F2699",
          opacity: 1,
        },
        label: {
          show: true,
          position: "top",
          fontSize: 14,
          fontWeight: "bold",
          color: "#ffcc00",
          formatter: function (params) {
            return params.data.label;
          },
        },
        data: data1,
      },
      {
        //下半截柱子顶部圆片
        name: "",
        type: "pictorialBar",
        symbolSize: [barWidth, 15],
        symbolOffset: [0, -10],
        z: 12,
        itemStyle: {
          opacity: 1,
          color: "#d869ff",
        },
        label: {
          show: false,
          position: "top",
          fontSize: 16,
          color: "#fff",
        },
        symbolPosition: "end",
        data: data2,
      },
      {
        //下半截柱子底部圆片
        name: "",
        type: "pictorialBar",
        symbolSize: [barWidth, 15],
        symbolOffset: [0, 5],
        z: 12,
        itemStyle: {
          opacity: 1,
          color: "#7536ff",
        },
        data: [1, 1, 1, 1, 1],
      },
    ],
  };