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
      data: ["PM2.5", "PM10", "CO", "NO2", "O3", "SO2"],
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
        name: "PM2.5",
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
        name: "PM10",
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
        name: "CO",
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
        name: "NO2",
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
      },
      {
        type: "bar",
        data: [0, 0, 0, 0, 80],
        coordinateSystem: "polar",
        name: "O3",
        stack: "a",
        roundCap: true,
        itemStyle: {
          color: "#255CB9",
          barBorderRadius: 5
        },
        showBackground: true,
        backgroundStyle: {
          color: "#27333F"
        }
      },
      {
        type: "bar",
        data: [0, 0, 0, 0, 0, 80],
        coordinateSystem: "polar",
        name: "SO2",
        stack: "a",
        roundCap: true,
        itemStyle: {
          color: "#213AF9",
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
      data: ["PM2.5", "PM10", "CO", "NO2", "O3", "SO2"],
      selectedMode: false,
      textStyle: {
        color: "#96F5F6",
        fontSize: 8
      }
    }
  }