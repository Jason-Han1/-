option = {
  grid: {
    left: '20px',
    right: '20px',
    top: '50px',
    bottom: '30px',
    containLabel: true,
  },

  xAxis: [
    {
      offset: -150,
      type: 'category',
      boundaryGap: true,
      axisTick: {
        show: false,
      },
      data: ['西城区', '顺义区', '朝阳区', '大兴区', '海淀区', '昌平区', '西城区', '东城区', '丰台区'],
      axisLine: {
        lineStyle: {
          color: 'rgba(51, 176, 255, 1)',
        },
      },
      axisLabel: {
        interval: 0,
        color: 'rgba(207, 227, 252, 1)',
        fontSize: 20,
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      axisTick: {
        show: true,
      },

      axisLine: {
        show: true,
      },
      axisLabel: {
        interval: 0,
        color: 'rgba(207, 227, 252, 1)',
        formatter: function (value, index) {
          return Number(value) - 400;
        },
      },
    },
    {
      type: 'value',
      axisTick: {
        show: true,
      },

      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(207, 227, 252, 1)t',
        },
        symbol: ['none', 'arrow'],
        symbolSize: [5, 12],
        symbolOffset: [0, 10],
      },

      axisLabel: {
        interval: 0,
        color: 'rgba(207, 227, 252, 1)',
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: 'rgba(39, 57, 75, 1)',
          width: 1,
          type: 'solid',
        },
      },
    },
  ],
  series: [
    {
      name: '累加销售额',
      yAxisIndex: 1,
      type: 'line',
      smooth: true,

      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(98, 227, 255, 1)',
          },
          {
            offset: 1,
            color: 'rgba(98, 227, 255, 0)',
          },
        ]),
      },
      data: [300, 1500, 530, 420, 660, 710, 200, 800, 200],
      symbol: 'circle',
      symbolSize: 8,
    },
    {
      type: 'bar',
      stack: 'one',
      yAxisIndex: 0,
      name: '8/1-8/3',

      barWidth: 24,
      data: [12, 23, 21, 32, 24, 35, 33, 22, 32].map(function (a) {
        return a + 150;
      }),
    },

    {
      type: 'bar',
      stack: 'one',
      yAxisIndex: 0,
      name: '9/1-9/3',
      itemStyle: {
        normal: {
          color: 'transparent',
          label: {
            show: false,
          },
        },
      },
      barWidth: 24,
      data: [22, 33, 11, 12, 14, 15, 23, 42, 12].map(function (a) {
        return a - 150;
      }),
    },
    {
      type: 'bar',
      stack: '',
      yAxisIndex: 0,
      name: '9/1-9/3',

      barWidth: 24,
      data: [12, 23, 21, 22, 14, 25, 23, 32, 22].map(function (a) {
        return a + 150;
      }),
    },

    {
      type: 'bar',
      stack: '',
      yAxisIndex: 0,
      name: '9/1-9/3',
      itemStyle: {
        normal: {
          color: 'transparent',
          label: {
            show: false,
          },
        },
      },
      barWidth: 24,
      data: [12, 23, 21, 22, 14, 25, 23, 32, 22].map(function (a) {
        return a - 150;
      }),
    },

    {
      type: 'line',
      yAxisIndex: 0,
      name: '9月与8月差值',

      barWidth: 24,
      data: [22, 33, 11, 12, 14, 15, 23, 42, 12].map(function (a) {
        return a + 150;
      }),
    },
  ],
};
