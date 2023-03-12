option = {
  tooltip: {
    trigger: 'item',
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      center: ['50%', '60%'],
      radius: '60%',
      color: ['#2fc25b', '#3196fa', '#ef4864', '#facc14'],
      label: {
        formatter: (params) => {
          return (
            '{icon' + params.color.replace('#', '') + '|●}{name|' + params.name + '}\n{value|' + params.value + ' 件}'
          );
        },
        rich: {
          icon2fc25b: {
            color: '#2fc25b',
            fontSize: 22,
          },
          icon3196fa: {
            color: '#3196fa',
            fontSize: 22,
          },
          iconef4864: {
            color: '#ef4864',
            fontSize: 22,
          },
          iconfacc14: {
            color: '#facc14',
            fontSize: 22,
          },
          name: {
            fontSize: 18,
            fontWeight: 'bold',
            padding: [0, 5, 0, 10],
            color: '#000',
          },
          percent: {
            color: '#000',
            padding: [0, 5, 0, 0],
          },
          value: {
            fontSize: 18,
            padding: [5, 5, 0, 10],
            color: '#000',
          },
        },
      },
      labelLine: {
        show: true,
        length2: 100,
      },
      data: [
        { value: 1548, name: '搜索引擎' },
        { value: 775, name: '直达' },
        { value: 679, name: '营销广告', selected: true },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
    {
      name: '访问来源',
      type: 'pie',
      center: ['50%', '60%'],
      radius: ['0%', '60%'],
      labelLine: {
        length: 30,
      },
      label: {
        position: 'inner',
        formatter: '{d}%',
        color: '#000',
        fontSize: 16,
      },
      data: [
        { value: 1548, name: '搜索引擎' },
        { value: 775, name: '直达' },
        { value: 679, name: '营销广告', selected: true },
      ],
    },
  ],
};
