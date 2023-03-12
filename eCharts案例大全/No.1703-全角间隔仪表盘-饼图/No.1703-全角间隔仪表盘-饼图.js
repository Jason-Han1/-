let colors = ['#18F8EF', '#958604', '#F5FE06', '#E6EE0D']; // 字体颜色、未激活小环颜色、激活小环颜色、内层细圆环颜色
option = {
  backgroundColor: 'rgba(1, 18, 35, 0.86)',
  title: {
    text: '40%',
    textStyle: {
      color: colors[0],
      fontFamily: 'BahnschriftStaticBold',
      fontSize: 80,
    },
    itemGap: 20,
    left: 'center',
    top: 'center',
  },
  tooltip: {
    formatter: (params) => {
      return '<span style="color: #fff;">占比：' + params.value + '%</span>';
    },
  },
  angleAxis: {
    max: 100,
    clockwise: false, // 逆时针
    // 隐藏刻度线
    show: false,
  },
  radiusAxis: {
    type: 'category',
    show: true,
    axisLabel: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
  },
  polar: [
    {
      center: ['50%', '50%'], // 中心点位置
      radius: '40%', // 图形大小
    },
  ],
  series: [
    {
      name: '小环',
      type: 'gauge',
      splitNumber: 30,
      radius: '70%',
      center: ['50%', '50%'],
      startAngle: 162, // 未激活开始刻度
      endAngle: 359.9999,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: colors[1],
          width: 2,
          shadowBlur: 1,
          shadowColor: colors[1],
        },
        length: 40,
        splitNumber: 4,
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      detail: {
        show: false,
      },
    },
    {
      name: '激活小环',
      type: 'gauge',
      splitNumber: 30,
      radius: '70%',
      center: ['50%', '50%'],
      startAngle: 0, // 激活开始刻度
      endAngle: 162, // 激活结束刻度
      axisLine: {
        show: false,
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: colors[2],
          width: 2,
          shadowBlur: 1,
          shadowColor: colors[2],
        },
        length: 40,
        splitNumber: 4,
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      detail: {
        show: false,
      },
    },
    {
      type: 'pie',
      name: '内层细圆环',
      radius: ['48%', '44%'],
      hoverAnimation: false,
      clockWise: true,
      itemStyle: {
        normal: {
          color: colors[3],
        },
      },
      tooltip: {
        show: false,
      },
      label: {
        show: false,
      },
      data: [100],
    },
  ],
};
