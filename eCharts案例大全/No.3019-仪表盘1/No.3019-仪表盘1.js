option = {
  title: {
    text: '{a|' + 20 + '}{b|%}',
    x: 'center',
    y: 'center',
    textStyle: {
      rich: {
        a: {
          fontSize: 20,
          color: '#0FD0FB',
          fontFamily: 'ABDUCTION',
          shadowBlur: 4,
          textShadowColor: '#0FD0FB'
        },
        b: {
          fontSize: 12,
          color: '#0FD0FB',
          padding: [-8, 0, 0, 2],
        },
      },
    },
  },
  series: [
    {
      type: 'gauge',
      radius: '50%',
      startAngle: '225',
      endAngle: '-45',
      // 调整间隔距离
      splitNumber: 80,
      detail: {
        formatter: ' ',
      },
      pointer: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: [
            [0, '#176BF9'],
            // 计算比例
            [20 / 100, '#0FD0FB'],
            [1, '#262A62'],
          ],
          width: 40,
          length: 10,
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        length: 40,
        lineStyle: {
          color: '#transparent',
          width: 1,
        },
      },
      axisLabel: {
        show: false,
      },
    },
  ],
};
