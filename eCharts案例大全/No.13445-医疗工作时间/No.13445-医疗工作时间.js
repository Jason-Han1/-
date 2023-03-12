option = {
  backgroundColor: '#12233E',
  title: {
    text: '总收入',
    left: 'center',
    top: 'center',
    textStyle: {
      color: '#B3BFD2',
      fontSize: 60,
    },
  },
  color: ['#00E883', '#384AFF', '#7A8AFF', '#FFE77D'], // 设置饼图的颜色
  series: [
    {
      type: 'pie',
      center: ['50%', '50%'], //圆心坐标
      radius: ['50%', '75%'], //设置内外环半径
      label: {
        show: false, //不显示指引线
      },
      emphasis: {
        scale: !1, //鼠标放上去是否放大
      },
      data: [
        {
          value: 8,
        },
        {
          value: 4,
        },
        {
          value: 4,
        },
        {
          value: 4,
        },
      ],
    },
  ],
};
