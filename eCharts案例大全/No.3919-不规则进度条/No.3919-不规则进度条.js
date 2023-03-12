option = {
  tooltip: {},
  xAxis: {
    max: 2000,
    show: false,
    splitLine: {
      show: false
    },
    offset: 10,
    axisLine: {
      lineStyle: {
        color: "#999"
      }
    },
    axisLabel: {
      margin: 10
    }
  },
  yAxis: {
    data: ["2013", "2014", "2015", "2016"],
    inverse: true,
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      margin: 10,
      color: "#999",
      fontSize: 16
    }
  },
  grid: {
    top: "center",
    height: 200,
    left: 70,
    right: 100
  },
  series: [{
    type: "pictorialBar",
    symbol: "roundRect",
    symbolRepeat: "fixed",
    symbolMargin: "5%",
    symbolClip: true,
    symbolSize: "70%",
    data: [891, 1220, 660, 1670],
    symbolRepeatDirection: "start",
    symbolPatternSize: 780,
    symbolRotate: 80
  }]
}