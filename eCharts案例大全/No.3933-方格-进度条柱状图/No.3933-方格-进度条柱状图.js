option = {
    backgroundColor:'#333',
  tooltip: {},
  xAxis: {
      show: false,
  },
  yAxis: [
      {
    data: ["商品名称", "商品名称", "商品名称", "商品名称", "商品名称"],
    inverse: true,
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      margin: 10,
      color: "#F0FFFF",
      fontSize: 18
    }
  },{
    data: [891, 1220, 660, 1670,994],
    inverse: true,
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      margin: 10,
      color: "#F0FFFF",
      fontSize: 18
    }
}
  ],
  series: [{
    type: "pictorialBar",
    symbol: "rect",
    symbolRepeat: "fixed",
    symbolMargin: "35%",
    symbolClip: true,
    symbolSize: [10,20],
    symbolBoundingData: 2000,
    data: [891, 1220, 660, 1670,994],
  }]
}