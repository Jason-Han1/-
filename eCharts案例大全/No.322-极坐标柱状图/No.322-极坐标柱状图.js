option = {
    backgroundColor: 'black',
    angleAxis: {
      type: "value",
      min: 0,
      max: 70,
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
      data: ["其他", "资源加工工业", "轻纺工业", "机械电子制造业"],
      z: 100,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: true,
        margin: 6,
        fontSize: 10,
        formatter: function(value, index) {
          var list = [12, 25, 48, 60];
          return list[index] + "%";
        },
        textStyle: {
          color: "#96F5F6"
        },
        interval: 0
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
        name: "其他",
        stack: "a",
        roundCap: true,
        itemStyle: {
          color: "#BFA27C",
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
        name: "资源加工工业",
        stack: "a",
        roundCap: true,
        itemStyle: {
          color: "#328CD9"
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
        name: "轻纺工业",
        stack: "a",
        roundCap: true,
        itemStyle: {
          color: "#1FB4A7",
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
        name: "机械电子制造业",
        stack: "a",
        roundCap: true,
        itemStyle: {
          color: "#424CB9",
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
      data: ["机械电子制造业", "轻纺工业", "资源加工工业", "其他"],
      selectedMode: false,
      textStyle: {
        color: "#96F5F6",
        fontSize: 8
      }
    }
  }