option = {
  backgroundColor: '#031245',
  title: {
    text: '性能(ms)',
    textStyle: {
      color: '#fff',
    },
  },
  grid: {
    left: '10%',
    top: '10%',
    bottom: '10%',
    right: '10%',
  },
  xAxis: {
    data: ['驯鹿', '火箭', '飞机', '高铁', '轮船'],
    axisTick: {
      show: false,
    },
    axisLine: {
      lineStyle: {
        color: 'rgba(255, 129, 109,.1)',
        width: 1, //这里是为了突出显示加上的
      },
    },
    axisLabel: {
      textStyle: {
        color: '#999',
        fontSize: 12,
      },
    },
  },
  yAxis: [
    {
      axisTick: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(255, 129, 109, 0.1)',
          width: 1, //这里是为了突出显示加上的
        },
      },
      axisLabel: {
        textStyle: {
          color: '#999',
        },
      },
      splitArea: {
        areaStyle: {
          color: 'rgba(255,255,255,.5)',
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255, 129, 109, 0.1)',
          width: 0.5,
          type: 'dashed',
        },
      },
    },
  ],
  series: [
    {
      type: 'pictorialBar',
      barCategoryGap: '0%',
      symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
      label: {
        show: true,
        position: 'top',
        distance: 15,
        color: '#08DFFE',
        fontWeight: 'bolder',
        fontSize: 15,
      },
      itemStyle: {
        normal: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#9A11FF',
              },
              {
                offset: 1,
                color: '#08DFFE',
              },
            ],
            global: false, //  缺省为  false
          },
        },
        emphasis: {
          opacity: 1,
        },
      },
      data: [123, 60, 25, 18, 12],
    },
  ],
};
