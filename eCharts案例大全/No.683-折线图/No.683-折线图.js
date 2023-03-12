option = {
  grid: {
    top: '20%',
    left: '10%',
    right: '5%',
    bottom: '14%',
  },
  xAxis: {
    type: 'category',
    name: '/h',
    nameTextStyle: {
      color: '#6A7474',
    },
    nameGap: 0,
    nameLocaltion: 'end',
    data: Array.from({ length: 24 }, (i, idx) => idx),
    interval: 22,
    axisLine: {
      lineStyle: {
        color: '#F4F8FA',
      },
    },

    axisLabel: {
      color: '#A4A9A9',
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      color: '#A4A9A9',
    },
  },
  yAxis: {
    name: 'mg/L',
    nameTextStyle: {
      color: '#6A7474',
      padding: [0, 20, 0, 0],
    },
    nameGap: 15,
    nameLocaltion: 'top',
    type: 'value',
    axisLine: {
      show: false,
    },
    splitLine: {
      color: '#fff',
    },
  },
  legend: {
    data: ['滨河', '福田'],
    left: 'right',
    itemWidth: 8,
    itemHeight: 8,
    icon: 'roundRect',
    itemGap: 20,
    top: '5%',
  },
  series: [
    {
      name: '滨河',
      type: 'line',
      data: Array.from({ length: 24 }, () =>
        Math.trunc(Math.random() * 100 + 1)),
      itemStyle: {
        color: '#01AEBA',
        lineStyle: {
          color: '#01AEBA',
        },
      },
    },
    {
      name: '福田',
      type: 'line',
      data: Array.from({ length: 24 }, () =>
        Math.trunc(Math.random() * 100 + 1)),
      itemStyle: {
        color: '#0151BA',
        lineStyle: {
          color: '#0151BA',
        },
      },
    },
  ],
};
