option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      barMaxWidth: 20,
    },
    {
        name: "目标值",
        type: "scatter",
        symbol: "rect",
        symbolSize: [30, 3],
        data: [25, 30, 40, 50, 60, 70, 80],
        color: "#000000",
        hoverAnimation:false,
        z: 4
    }
  ]
};
