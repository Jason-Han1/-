option = {
    backgroundColor: 'black',
    angleAxis: {
      type: "value",
      min: 0,
      max: 200,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        show: false
      }
    },
    radiusAxis: {
      type: "category",
      data: ["第一人民", "第二人民", "第三人民", "第四人民"],
      z: 100,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      }
    },
    polar: {
      center: ["51%", "40%"]
    },
    tooltip: {
      show: true
    },
    series: [
      {
        type: "bar",
        barWidth: "30%",
        data: [12],
        coordinateSystem: "polar",
        name: "第一人民",
        stack: "a",
        roundCap: true,
        itemStyle: {
          color: "rgb(252,152,12)",
          barBorderRadius: 5
        },
        showBackground: true,
        backgroundStyle: {
          color: "#27333F",
          barBorderRadius: 50
        }
      },
      {
        type: "bar",
        data: [0, 25, 0, 0],
        coordinateSystem: "polar",
        name: "第二人民",
        stack: "a",
        roundCap: true,
        itemStyle: {
          color: "rgb(253,218,23)"
        },
        showBackground: true,
        backgroundStyle: {
          color: "#27333F"
        }
      },
      {
        type: "bar",
        data: [0, 0, 40, 0],
        coordinateSystem: "polar",
        name: "第三人民",
        stack: "a",
        roundCap: true,
        itemStyle: {
          color: "rgb(184,254,165)",
          barBorderRadius: 5
        },
        showBackground: true,
        backgroundStyle: {
          color: "#27333F"
        }
      },
      {
        type: "bar",
        data: [0, 0, 0, 60],
        coordinateSystem: "polar",
        name: "第四人民",
        stack: "a",
        roundCap: true,
        itemStyle: {
          color: "rgb(9,187,247)",
          barBorderRadius: 5
        },
        showBackground: true,
        backgroundStyle: {
          color: "#27333F"
        }
      }
    ],
    legend: {
      bottom: 6,
      icon: "circle",
      itemHeight: 10,
      show: true,
      data: ["第一人民", "第二人民", "第三人民", "第四人民"],
      selectedMode: false,
      textStyle: {
        color: "#96F5F6",
        fontSize: 8
      }
    }
  }