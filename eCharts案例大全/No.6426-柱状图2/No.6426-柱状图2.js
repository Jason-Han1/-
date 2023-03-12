option = {
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: [
          "旅游行业",
          "教育培训",
          "游戏行业",
          "医疗行业",
          "电商行业",
          "社交行业",
          "金融行业"
        ],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          textStyle: {
            color: "rgba(0,0,0,.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          textStyle: {
            color: "rgba(0,0,0,.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(0,0,0,.1)"
            // width: 1,
            // type: "solid"
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(0,0,0,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "直接访问",
        type: "bar",
        barWidth: "35%",
        data: [200, 300, 300, 900, 1500, 1200, 600],
        itemStyle: {
          barBorderRadius: 5
        }
      }
    ]
  };