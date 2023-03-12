option = {
  title: {
    text: '孙老汉信息管理',
    padding: [400, 20, 0, 470], //可改标题位置
    textStyle: {
      fontWeight: 'normal',
      color: 'rgba(255,255,255,0.91)',
      fontSize: 25,
    },
  },
  backgroundColor: '#031d33',
  tooltip: {
    show: true,
  },
  series: [
    {
      type: 'pie',
      radius: ['30%', '45%'],
      center: ['50%', '50%'],
      hoverAnimation: true,
      z: 10,
      itemStyle: {
        normal: {
          borderWidth: 5,
          borderColor: '#003359',
        },
      },
      label: {
        show: true,
      },
      data: [
        //名字一致会导致颜色一致
        { name: '老鹅', value: 52 },
        { name: '海豹', value: 54 },
        { name: '狗鸡', value: 54 },
        { name: 'B哥', value: 54 },
        { name: '鸟哥', value: 54 },
      ],
      labelLine: {
        show: true,
        normal: {
          length: 20,
          length2: 30,
          lineStyle: {
            width: 1,
          },
        },
      },
    },
  ],
};
