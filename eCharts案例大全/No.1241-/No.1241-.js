const title = ['水稻', '小麦', '油菜'],
  v1s1 = [110, 156, 223],
  v1s2 = [89, 112, 223],
  v1s3 = [100, 136, 200],
  v1s4 = [100, 136, 200],
  v1s5 = [100, 136, 200],
  v1s6 = [100, 136, 200],
  v1s7 = [100, 136, 200],
  v2s1 = [120, 190, 234],
  v4s = [123, 256, 234],
  v5s = [100, 239, 112],
  v6s = [78, 188, 248];
option = {
  tooltip: {
    trigger: 'item',
    axisPointer: {
      type: 'shadow',
    },
  },
  legend: {
    data: ['2019', '2020', '2021'],
    bottom: 10,
    itemHeight: 7,
    itemWidth: 7,
    icon: 'rect',
    itemStyle: {
      color: 'inherit',
    },
    textStyle: {
      color: '#333333',
      fontSize: 10,
    },
  },
  grid: {
    top: 40,
    left: 60,
    bottom: 85,
    right: 10,
  },
  xAxis: [
    {
      axisTick: {
        length: 40,
        lineStyle: { color: '#ccc' },
      },
      axisLine: {
        lineStyle: { color: 'transparent' },
      },
      data: title,
    },
    {
      name: '',
      position: 'bottom',
      offset: 20,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: '#535252',
        fontSize: 11,
      },
      data: title,
    },
  ],
  yAxis: {
    axisLine: {
      lineStyle: { color: '#ccc' },
    },
    axisLabel: {
      textStyle: {
        color: '#333',
        fontSize: 10,
      },
    },
  },
  series: [
    {
      type: 'bar',
      name: '2019',
      stack: 'SS',
      data: v1s1,
      barGap: '15%',
      itemStyle: {
        color: 'rgba(48,103,131,0.4)',
      },
    },
    {
      type: 'bar',
      name: '2019',
      stack: 'SS',
      barGap: '15%',
      itemStyle: {
        color: 'rgba(235,125,49,.4)',
      },
      data: v1s2,
    },
    {
      type: 'bar',
      name: '2019',
      stack: 'SS',
      data: v1s3,
      barGap: '15%',
      itemStyle: {
        color: 'red',
      },
    },
    {
      type: 'bar',
      name: '2019',
      stack: 'SS',
      barGap: '15%',
      itemStyle: {
        color: 'rgba(235,0,49,.4)',
      },
      data: v1s4,
    },
    {
      type: 'bar',
      name: '2019',
      stack: 'SS',
      barGap: '15%',
      itemStyle: {
        color: 'rgba(0,125,49,.4)',
      },
      data: v1s5,
    },
    {
      type: 'bar',
      name: '2019',
      stack: 'SS',
      barGap: '15%',
      itemStyle: {
        color: 'rgba(200,125,0,.4)',
      },
      data: v1s6,
    },
    {
      type: 'bar',
      name: '2019',
      stack: 'SS',
      barGap: '15%',
      itemStyle: {
        color: 'rgba(235,0,0,.4)',
      },
      data: v1s7,
    },
    {
      type: 'bar',
      stack: 'AA',
      barGap: '15%',
      name: '2020',
      itemStyle: {
        color: 'rgba(48,103,131,.7)',
      },
      data: v2s1,
    },
    {
      type: 'bar',
      stack: 'AA',
      barGap: '15%',
      name: '2020',
      itemStyle: {
        color: 'rgba(235,125,49,.7)',
      },
      data: v4s,
    },
    {
      type: 'bar',
      stack: 'NN',
      barGap: '15%',
      name: '2021',
      itemStyle: {
        color: 'rgba(48,103,131,1)',
      },
      data: v5s,
    },
    {
      type: 'bar',
      stack: 'NN',
      barGap: '15%',
      name: '2021',
      itemStyle: {
        color: '#eb7d31',
      },
      data: v6s,
    },
  ],
};
