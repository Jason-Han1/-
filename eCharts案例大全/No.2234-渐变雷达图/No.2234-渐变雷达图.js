option = {
  backgroundColor: '#000928',
  title: {
    text: '12',

    textAlign: 'center',
    x: 'center',
    y: 'center',
    textStyle: {
      color: '#fff',
      fontSize: 22,
      fontWeight: '400',
    },
  },
  color: ['#3D91F7', '#61BE67'],
  tooltip: {},
  legend: {
    show: true,
    icon: 'circle',
    bottom: 30,
    center: 0,
    itemWidth: 14,
    itemHeight: 14,
    itemGap: 21,
    orient: 'horizontal',
    data: ['a', 'b'],
    textStyle: {
      fontSize: '70%',
      color: '#8C8C8C',
    },
  },

  radar: {
    // shape: 'circle',
    radius: ['30%', '80%'], //数组的第一项是内半径，第二项是外半径
    triggerEvent: true,
    name: {
      textStyle: {
        color: '#fff',
        fontSize: '20',
        borderRadius: 3,
        padding: [3, 5],
      },
    },
    nameGap: '40', //指示器名称和指示器轴的距离
    splitNumber: 4, //指示器轴的分割段数
    indicator: [
      { name: '项目1', max: 100 },
      { name: '项目2', max: 100 },
      { name: '项目3', max: 100 },
      { name: '项目4', max: 100 },
      { name: '项目5', max: 100 },
      { name: '项目6', max: 100 },
      { name: '项目7', max: 100 },
      { name: '项目8', max: 100 },
    ],
    splitArea: {
      areaStyle: {
        color: [
          'rgba(222,134,85, 0)', // 格子背景
        ].reverse(),
      },
    },
    axisLine: {
      //指向外圈文本的分隔线样式
      lineStyle: {
        color: '#76838f45',
        cap: 'butt', //指定线段末端的绘制方式,中间空心部分
      },
    },
    splitLine: {
      lineStyle: {
        width: 2,
        color: ['#76838f45'].reverse(),
        // color: [
        //     'rgba(224,134,82, 0.1)', 'rgba(224,134,82, 0.2)',
        //     'rgba(224,134,82, 0.4)', 'rgba(224,134,82, 0.6)',
        //     'rgba(224,134,82, 0.8)', 'rgba(224,134,82, 1)'
        // ].reverse()
      },
    },
  },

  series: [
    {
      name: '项目信息',
      type: 'radar',
      //areaStyle: {normal: {}},
      areaStyle: {
        normal: {
          opacity: 0.9,
          color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
            {
              color: '#00000000',
              offset: 0,
            },
            {
              color: '#62a9eb17',
              offset: 0.2,
            },
            {
              color: '#21E9E9',
              offset: 0.9,
            },
          ]),
        },
      },
      symbolSize: 0,
      lineStyle: {
        normal: {
          color: '#4BFFFC',
          width: 1,
        },
      },
      data: [
        {
          value: [42, 91, 80, 56, 79, 89, 76, 56, 87],
          name: '项目信息',
        },
      ],
    },
  ],
};
