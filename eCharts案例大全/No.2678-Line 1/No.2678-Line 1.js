option = {
  baseOption: {
    // 防止因高度小被压扁
    grid: {
      top: 8,
      bottom: 72,
      left: 64,
      right: 12,
    },
    xAxis: {
      // x轴颜色
      axisLine: {
        lineStyle: {
          color: "#5092c1",
        },
      },
      data: [
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
      ],
    },
    yAxis: {
      // y轴颜色
      axisLine: {
        lineStyle: {
          color: "#5092c1",
        },
      },
      // y轴分割线颜色
      splitLine: {
        lineStyle: {
          color: "rgba(101, 198, 231, 0.2)",
        },
      },
    },
    tooltip: {
      trigger: "axis",
      backgroundColor: "#0a2043",
      textStyle: {
        color: "white",
      },
      borderColor: "#00a2ff",
      // 坐标轴指示器
      axisPointer: {
        lineStyle: {
          color: "rgba(255,255,255,0.4)",
          type: "solid",
        },
      },
      formatter(params) {
        const data = params[0];
        const str = data
          ? `${params[0].axisValue}短信量：${params[0].value}条`
          : "";
        return str;
      },
    },
    timeline: {
      data: ["2018", "2019", "2020", "2021"],
      autoPlay: true,
      playInterval: 3000,
      lineStyle: {
        color: "#216fc5",
      },
      controlStyle: {
        showPrevBtn: false,
        showNextBtn: false,
        itemGap: 24,
        color: "#04cdf4",
        borderColor: "#04cdf4",
      },
      checkpointStyle: {
        color: "#04cdf4",
        borderColor: "#04cdf4",
      },
      itemStyle: {
        color: "#216fc5",
      },
      label: {
        formatter(params) {
          return `${new Date(params).getFullYear()}年`;
        },
        color: "#216fc5",
      },
      left: "3%",
      right: "3%",
    },
    series: [
      {
        type: "line",
        // 渐变区域
        // https://echarts.apache.org/examples/zh/editor.html?c=area-simple
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(67, 144, 250, 0.5)",
            },
            {
              offset: 1,
              color: "rgba(4, 205, 244, 0)",
            },
          ]),
        },
        // 折线颜色
        color: "#04cdf4",
      },
    ],
  },
  options: [
    {
      series: {
        data: [
          { name: "1月", value: 5274 },
          { name: "2月", value: 9539 },
          { name: "3月", value: 21342 },
          { name: "4月", value: 10699 },
          { name: "5月", value: 9726 },
          { name: "6月", value: 9593 },
          { name: "7月", value: 10845 },
          { name: "8月", value: 11059 },
          { name: "9月", value: 10239 },
          { name: "10月", value: 9204 },
          { name: "11月", value: 5213 },
          { name: "12月", value: 5267 },
        ],
      },
    },
    {
      series: {
        data: [
          { name: "1月", value: 10596 },
          { name: "2月", value: 7778 },
          { name: "3月", value: 9276 },
          { name: "4月", value: 8500 },
          { name: "5月", value: 7763 },
          { name: "6月", value: 7829 },
          { name: "7月", value: 86886 },
          { name: "8月", value: 5289 },
          { name: "9月", value: 6803 },
          { name: "10月", value: 5201 },
          { name: "11月", value: 3705 },
          { name: "12月", value: 9428 },
        ],
      },
    },
    {
      series: {
        data: [
          { name: "1月", value: 7875 },
          { name: "2月", value: 3566 },
          { name: "3月", value: 10469 },
          { name: "4月", value: 19417 },
          { name: "5月", value: 9189 },
          { name: "6月", value: 7163 },
          { name: "7月", value: 7846 },
          { name: "8月", value: 4261 },
          { name: "9月", value: 16019 },
          { name: "10月", value: 5935 },
          { name: "11月", value: 3314 },
          { name: "12月", value: 6364 },
        ],
      },
    },
    {
      series: {
        data: [
          { name: "1月", value: 2558 },
          { name: "2月", value: 2847 },
          { name: "3月", value: 7117 },
          { name: "4月", value: 7062 },
          { name: "5月", value: 3852 },
          { name: "6月", value: 14607 },
          { name: "7月", value: 1970 },
        ],
      },
    },
  ],
};