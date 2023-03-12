option = {
    backgroundColor: '#222',
  title: {
    text: `{a|${33}}{b|%}`,
    x: 'center',
    y: 'center',
    subtext: '增长',
    subtextStyle: {
      color: '#fff',
      fontSize: 14,
    },
    itemGap: 2,
    textStyle: {
      rich: {
        a: {
          color: '#fff',
          fontSize: 20,
          fontWeight: 'bold',
        },
        b: {
          color: '#fff',
          fontSize: 14,
        },
      },
    },
  },
  series: [{
    type: 'liquidFill',
    waveAnimation: 10,
    radius: '100%',
    data: [0.35, 0.3],
    color: ['rgba(83, 211, 228, 0.79)', 'rgba(83, 211, 228, 1)'],
    amplitude: 5,
    backgroundStyle: {
      color: {
        type: 'radial',
        x: 0.5,
        y: 0.5,
        r: 0.55,
        colorStops: [{
          offset: 0,
          color: 'rgba(7, 112, 135, 0.01)', // 100% 处的颜色
        },  {
          offset: 1,
          color: 'rgba(7, 112, 135, 0.69)',
        }],
        globalCoord: false, // 缺省为 false
      },
    },
    outline: {
      show: false,
    },
    label: {
      show: false,
    },
  }],
};
