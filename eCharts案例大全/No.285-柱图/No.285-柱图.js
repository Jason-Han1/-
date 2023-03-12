option = {
  tooltip: {
    show: true,
    trigger: 'item'
  },
  legend:{
    icon: 'circle',
    orient: 'horizontal',
    align: 'left',
    left:"left",
    textStyle: {
        color: '#000',
        lineHeight:30
    },
    itemGap: 10,
    itemHeight:10
  },
  color: [
    {
      colorStops: [
        {
          offset: 0,
          color: '#0176ff'
        },
        {
          offset: 1,
          color: '#0093ff'
        }
      ],
      x: 0,
      y: 0,
      x2: 1,
      y2: 0,
      type: 'linear',
      global: false
    },
    {
      colorStops: [
        {
          offset: 0,
          color: '#9700ff'
        },
        {
          offset: 1,
          color: '#9700ff'
        }
      ],
      x: 0,
      y: 0,
      x2: 1,
      y2: 0,
      type: 'linear',
      global: false
    }
  ],
  progresscomplex: [
    {
      colorStops: [
        {
          offset: 0,
          color: '#0176ff'
        },
        {
          offset: 1,
          color: '#0093ff'
        }
      ],
      x: 0,
      y: 0,
      x2: 1,
      y2: 0,
      type: 'linear',
      global: false
    },
    {
      colorStops: [
        {
          offset: 0,
          color: '#9700ff'
        },
        {
          offset: 1,
          color: '#9700ff'
        }
      ],
      x: 0,
      y: 0,
      x2: 1,
      y2: 0,
      type: 'linear',
      global: false
    }
  ],
  series: [
    {
      barWidth: 8,
      name: '发送量',
      type: 'bar',
      silent: true,
      yAxisIndex: 0,
      zlevel: 1,
      itemStyle: {
        borderRadius: 0
      },
      data: [20],
      color: "#d0cd06"
    },
    {
      type: 'bar',
      name:"到达量",
      barWidth: 8,
      silent: true,
      itemStyle: {
        borderRadius: 0
      },
      barGap: '-100%',
      data: [120],
      color: "#10d36a"
    }
  ],
  grid: {
    left: '2%',
    right: '2%'
  },
  xAxis: [
    {
      show: false
    }
  ],
  yAxis: [
    {
      show: false,
      data: []
    }
  ]
};
