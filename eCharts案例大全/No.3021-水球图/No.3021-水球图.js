option = {
  series: [
    {
      type: 'liquidFill',
      radius: '70%',
      center: ['50%', '50%'],
      data: [
        {
          value: 0.5,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(35,114,255,0.8)',
                },
                {
                  offset: 1,
                  color: 'rgb(20,133,255,0)',
                },
              ]),
            },
          },
        },
      ], // data个数代表波浪数
      backgroundStyle: {
        borderWidth: 4,
        color: 'transparent',
      },
      label: {
        normal: {
          formatter: (0.5 * 100).toFixed(2) + '%',
          textStyle: {
            fontSize: 16,
            // color: '#9AD7FF'
            color: '#9AD7FF'
          },
        },
      },
      outline: {
        show: false,
      },
    },
    {
      type: 'pie',
      radius: ['68%', '82%'],
      center: ['50%', '50%'],
      color: {
        colorStops: [
          {
            offset: 0,
            color: 'rgb(38,162,255,0.2)',
          },
          {
            offset: 0.8,
            color: 'rgb(29,83,250,0.5)',
          },
          {
            offset: 1,
            color: 'rgb(29,83,250,0.8)',
          },
        ],
        globalCoord: false,
      },
      labelLine: {
        show: false,
      },
      data: [2],
    },
    {
      type: 'pie',
      radius: ['70%', '82%'],
      center: ['50%', '50%'],
      color: 'rgb(255,255,255,0.2)',
      labelLine: {
        show: false,
      },
      data: [2],
    },
  ],
};
