option = {
  title: {
    text: '20',
    subtext: '通行效率',
    x: '49%',
    y: '20%',
    textAlign: 'center',
    textStyle: {
      fontWeight: '700',
      color: '#29B3FF',
      fontSize: 24,
    },
    subtextStyle: {
      fontSize: 18,
      lineHeight: 36,
      color: '#29B3FF'
    }
  },
  series: [
    {
      type: 'gauge',
      startAngle: 180,
      endAngle: 0,
      min: 0,
      max: 50,
      z: 9,
      radius: '85%',
      axisLine: {
        show: false,
        lineStyle: {
          color: [
            [0, 'rgba(0, 204, 183, 1)'],
            [0.25, '#0BC4BE'],
            [0.5, '#20B5CC'],
            [0.75, '#38A4DC'],
            [1, 'rgba(71, 155, 230, 1)'],
          ],
        },
      },
      // echart版本过低 无法改图标
      pointer: {
        show: false,
        icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
        length: '90%',
        width: 8,
        itemStyle: {
          color: '#429FE3',
        },
      },
      axisTick: {
        show: true,
        length: 4,
        splitNumber: 3,
        lineStyle: {
          color: 'auto',
          opacity: 1,
          width: 2,
          type: 'solid',
        },
      },
      //       rgba(0, 204, 183, 1)
      // rgba(71, 155, 230, 1)
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      title: {
        show: false,
      },
      detail: {
        show: false,
      },
      data: [
        {
          value: 0,
        },
      ],
    },
    {
      name: '通行效率',
      type: 'pie',
      radius: ['90%', '94%'],
      startAngle: 180,
      color: [
        {
          type: 'linear',
          x: 1,
          y: 0,
          x2: 0,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(255, 255, 255, 1)', // 0% 处的颜色
            },
            {
              offset: 1,
              color: 'rgba(0, 204, 183, 1)', // 100% 处的颜色
            },
          ],
        },
        'transparent',
      ],
      hoverAnimation: false,
      legendHoverLink: false,
      z: 10,
      labelLine: {
        normal: {
          show: false,
        },
      },
      data: [
        {
          value: 20,
        },
        {
          value: 20,
        },
        {
          value: 100,
          itemStyle: {
            normal: {
              color: 'rgba(0, 204, 183, 0)',
            },
          },
        },
      ],
    },
    {
      // 背景圆环
      name: '',
      type: 'pie',
      radius: ['90%', '92%'],
      silent: true,
      startAngle: 180,
      labelLine: {
        normal: {
          show: false,
        },
      },
      z: 5,
      data: [
        {
          value: 100,
          itemStyle: {
            color: 'rgba(71, 155, 230, 1)',
          },
        },
        {
          value: 100,
          itemStyle: {
            color: 'transparent',
          },
        },
      ],
    },
  ],
};
