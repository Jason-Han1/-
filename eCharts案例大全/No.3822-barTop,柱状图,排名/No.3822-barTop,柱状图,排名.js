option = {
    animation: false,
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "line",
      },
    },
    grid: {
      left: "10px",
      right: "20%",
      top: "20px",
      bottom: "10px",
      containLabel: true,
    },
    xAxis: {
      name: "μg/m3",
      type: "value",
      boundaryGap: [0, 0.01],
      show: true,
      axisLabel: false,
      axisTick: false,
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      type: "category",
      data: ['A','B','C','D'], // category
      inverse: true,
    },
    series: [
      {
        type: "bar",
        data: [5,4,3,2,1], // 值
        itemStyle: {
          color: "#1890ff",
        },
        label: {
          show: true,
          position: "right",
          color: "#333333",
        },
      },
    ],
  };
  