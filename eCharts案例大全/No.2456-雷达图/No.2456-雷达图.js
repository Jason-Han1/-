option = {
  backgroundColor: '#031d33',
  tooltip: {
    show: false,
  },

  radar: {
    radius: '80%', //大小
    nameGap: 10, // 图中工艺等字距离图的距离
    center: ['50%', '50%'], // 图的位置
    name: {
      textStyle: {
        color: '#8c9096',
        fontSize: 14,
      },
      formatter: function (name) {
        return name;
      },
    },
    shape: 'circle',
    indicator: [
      { name: '购房提取', max: '100' },
      { name: '其他', max: '100' },
      { name: '租房提取', max: '100' },
      { name: '还款提取', max: '100' },
    ],
    axisLine: {
      show: false,
      lineStyle: {
        color: 'rgba(153, 209, 246, 0.2)',
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: 'rgba(255,0,0,0)', // 图表背景的颜色
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
        width: 1,
        color: '#8c9096', // 设置网格的颜色
      },
    },
  },
  series: [
    {
      name: '年住房消费占比',
      type: 'radar',
      symbol: 'none',
      itemStyle: {
        normal: {
          areaStyle: { type: 'default' },
        },
      },
      data: [
        {
          symbol: 'none',
          symbolSize: 5,
          value: [70, 42, 63, 84],
          areaStyle: { color: 'rgba(243, 189, 78, 0.5)' },
          itemStyle: {
            normal: {
              borderWidth: 0,
              color: 'RGBA(243, 189, 78, 1)',
              borderColor: 'rgba(243, 189, 78, 1)',
            },
          },
          lineStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: '#de8220', // 0% 处的颜色
                },
                {
                  offset: 0.8,
                  color: '#de8220', // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: '#f6c756', // 100% 处的颜色
                },
              ],
              globalCoord: false, // 缺省为 false
            },
            width: 2,
          },
        },
      ],
    },
    {
      name: ' ',
      type: 'radar',
      symbol: 'circle',
      symbolSize: 10,
      tooltip: {
        show: false,
      },
      data: [
        {
          value: [100, 100, 100, 100],
          name: '',
          lineStyle: {
            normal: {
              color: 'transparent',
            },
          },
          itemStyle: {
            normal: {
              color: '#666d75',
            },
          },
        },
      ],
    },
  ],
};
