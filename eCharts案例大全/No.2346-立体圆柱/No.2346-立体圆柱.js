option = {
  backgroundColor: '#05193a33',
  tooltip: {
    trigger: 'item',
  },
  legend: {
    data: ['总量', '排污企业'],
    right: 100,
    textStyle: {
      color: '#fff',
      fontSize: 9,
    },
  },
  title: {
    text: '水数据值单位（㎥)',
    textStyle: {
      color: '#fff',
      fontSize: 9,
      fontStyle: 'italic',
    },
    x: 'center',
    y: 'bottom',
  },
  grid: {
    left: '4%',
    right: '4%',
    bottom: '35px',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      axisLine: {
        color: 'rgba(10, 62, 99, 1)',
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        textStyle: {
          color: '#fff',
          fontSize: 9,
        },
        margin: 6, //刻度标签与轴线之间的距离。
      },

      data: ['8.11', '8.12', '8.13', '8.14', '8.15', '8.16', '8.17', '8.18', '8.19', '8.20'],
    },
    {
      type: 'category',
    },
  ],
  yAxis: [
    {
      type: 'value',
      name: '',
      max: 240,
      min: 0,
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        textStyle: {
          color: '#fff',
          fontSize: 9,
        },
      },
    },
    {
      type: 'value',
      name: '',
      max: 60,
      min: 0,
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        textStyle: {
          color: '#fff',
          fontSize: 9,
        },
      },
    },
  ],

  series: [
    {
      name: '总量',
      type: 'bar',
      barWidth: 16,
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(11, 23, 44, 0.55)',
      },
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
            {
              offset: 0,
              color: '#52FFFF',
            },
            {
              offset: 1,
              color: '#6A93DB',
            },
          ]),
        },
        emphasis: {
          opacity: 1,
        },
      },
      data: [90, 160, 130, 170, 90, 165, 190, 190, 90, 100],
    },
    {
      name: '排污企业',
      type: 'line',
      // smooth: true,
      lineStyle: {
        color: ' #FFEB94',
        width: 2,
      },
      symbol: 'circle',
      symbolSize: 6,
      itemStyle: {
        color: '#FFEB94',
      },
      z: 13,
      data: [60, 130, 110, 130, 70, 135, 160, 170, 70, 90],
    },
    {
      name: '', //头部
      type: 'pictorialBar',
      symbolSize: [16, 6],
      symbolOffset: [0, -4],
      barWidth: 16,
      z: 12,
      symbolPosition: 'end',
      itemStyle: {
        normal: {
          color: '#54F6FB',
        },
      },
      data: [90, 160, 130, 170, 90, 165, 190, 190, 90, 100],
    },
  ],
};
