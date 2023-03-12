option = {
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    top: '15%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    data: ['0-10', '10-30', '30-50', '50-100', '>100'],
    axisLabel: {
      textStyle: {
        color: 'rgba(255, 255, 255, .8)',
        fontSize: 12,
      },
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: 'rgba(102, 102, 102, 1)', // 定义坐标轴颜色及线类型
        type: 'dashed',
      },
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      show: false,
    },
  },
  yAxis: {
    gridIndex: 0,
    min: 0,
    max: 100,
    nameLocation: 'middle',
    nameGap: 30,
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      show: false,
    },
    axisLabel: {
      textStyle: {
        color: 'rgba(255, 255, 255, .8)',
        fontSize: 12,
      },
    },
  },
  visualMap: [
    {
      show: false,
      left: 'right',
      top: '10%',
      dimension: 2,
      min: 0,
      max: 250,
      inRange: {
        symbolSize: [10, 70],
      },
      outOfRange: {
        symbolSize: [10, 70],
        color: ['rgba(255,255,255,0.4)'],
      },
    },
  ],
  series: [
    {
      type: 'scatter',
      symbol: 'circle',
      symbolSize: 120,
      label: {
        normal: {
          color: '#fff',
          textStyle: {
            fontSize: 10,
          },
        },
      },
      itemStyle: {
        normal: {
          color: 'rgba(131, 138, 238, 0.2)',
          borderColor: '#838AEE',
        },
      },
      data: [
        [5, 30, 100],
        [4, 25, 100],
        [3, 60, 300],
        [2, 30, 100],
        [1, 25, 200],
        [0, 90, 100]
      ],
    },
  ],
};
