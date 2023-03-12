option = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)',
  }, //提示框，鼠标悬浮交互时的信息提示
  legend: {
    left: 'center',
    bottom: '5%',
    itemGap: 8,
    itemWidth: 12,
    itemHeight: 12,
  },
  series: [
    {
      name: '脱敏成功率', //tooltip提示框中显示内容
      type: 'pie', //图形类型，如饼状图，柱状图等
      radius: ['41%', '52%'], //第一项是内半径，第二项是外半径。
      center: ['50%', '50%'],
      color: ['#00ffff', '#dcdcdc'],
      label: {
        show: true,
        position: 'center',
        formatter: ['{a|68%}', '{b|脱敏成功率}'].join('\n'),
        width: 200,
        height: 200,
        fontWeight: 'bold',
        backgroundColor: '#ffffff',
        shadowColor: '#e3e3e3',
        shadowBlur: 10,
        borderRadius: 200,
        rich: {
          a: {
            padding: [120, 0, 0, 0],
            color: '#0f0f0f',
            fontSize: 30,
            lineHeight: 36,
          },
          b: {
            padding: [150, 10, 0, 0],
            color: '#c8c8c8',
            fontSize: 15,
            lineHeight: 16,
          },
        },
      },
      labelLine: {
        show: true,
      }, //线条颜色
      data: [
        { value: 1000, name: '调用次数' },
        { value: 680, name: '调用成功数' },
      ], //数据，数据中其他属性，查阅文档
    },
  ],
};
