option = {
  title: {
    text: '5',
    x: 'center',
    y: '30%',
    itemGap: 5,
    textStyle: {
      color: '#000',
      fontSize: 200,
    },
    subtext: 'BBU',
    subtextStyle: {
      color: '#7a7c89',
      fontSize: 80,
    },
  },
  series: [
    // 主要展示层
    {
      radius: ['55%', '65%'],
      center: ['50%', '50%'],
      type: 'pie',
      hoverAnimation: false,
      silent: true,
      itemStyle: {
        normal: {
          color: '#305cfd',
        },
      },
      labelLine: {
        show: false,
      },
      label: {
        show: false,
      },
      data: [
        {
          value: 1,
        },
      ],
    },
    // 边框的设置
    {
      radius: ['65%', '70%'],
      center: ['50%', '50%'],
      hoverAnimation: false,
      silent: true,
      type: 'pie',
      itemStyle: {
        normal: {
          color: '#e5e9f2',
        },
      },
      labelLine: {
        show: false,
      },
      label: {
        show: false,
      },
      data: [
        {
          value: 1,
        },
      ],
    },
    // 边框虚线
    {
      center: ['50%', '50%'],
      type: 'gauge',
      startAngle: 270,
      endAngle: -89.9999,
      axisTick: {
        show: false,
        length: 20,
      },
      axisLabel: {
        show: false,
      },
      radius: '91%',
      splitNumber: '150',
      axisLine: {
        show: false,
        lineStyle: {
          color: '#e6ebfe',
          width: 60,
        },
      },
      splitLine: {
        length: 10,
        lineStyle: {
          width: 10,
          color: '#e6ebfe',
        },
      },
      detail: {
        show: false,
      },
    },
  ],
};
