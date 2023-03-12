
option = {
  backgroundColor: '#0E1327',
  tooltip: {
    formatter: '{a} <br/>{b} : {c}%',
  },

  series: [
    {
      //内圆
      type: 'pie',
      radius: '56%',
      center: ['50%', '50%'],
      z: 1,
      itemStyle: {
        normal: {
          color: new echarts.graphic.RadialGradient(
            0.5,
            0.5,
            0.8,
            [
              {
                offset: 0,
                color: '#4978EC',
              },
              {
                offset: 0.5,
                color: '#1E2B57',
              },
              {
                offset: 1,
                color: '#141F3D',
              },
            ],
            false
          ),
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
        },
      },
      hoverAnimation: false,
      label: {
        show: false,
      },
      tooltip: {
        show: false,
      },
      data: [100],
    },
  ],
};
