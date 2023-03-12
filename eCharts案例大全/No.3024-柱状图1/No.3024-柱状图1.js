option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
    },
  },
  legend: {
    show: true,
    icon: 'rect',
    bottom: 0,
    textStyle: {
      fontSize: 12,
      color: '#D6D6D6',
    },
    itemWidth: 10,
    itemHeight: 4,
  },
  grid: {
    top:'15%',
    left: '17%',
    right: '3%',
    bottom: 5,
    // containLabel: true
  },
  xAxis: {
    type: 'category',
    axisTick: false,
    axisLabel: {
      show: true,
      color: '#D6D6D6',
      interval: 0,
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: '#09507E',
        type: 'dashed',
      },
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: '#09507E',
      },
    },
    data: ['周一','周二','周三','周四','周五','周六','周日']
  },
  yAxis: {
    type: 'value',
    axisTick: false,
    axisLabel: {
      show: true,
      color: '#D6D6D6',
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: '#09507E',
        type: 'dashed',
      },
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: '#09507E',
      },
    },
  },
  series: [
    {
      type: 'bar',
      barWidth: 6,
      barGap: 1.5,
      label: {
        show: true,
        position: 'top',
        color: '#1CE4FF',
        fontSize: '12',
        fontWeight: 'bold',
      },
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#0FD0FB' },
          { offset: 1, color: '#0395FE' },
        ]),
      },
      data: [20,30,40,50,60,30,50]
      // barCategoryGap: '100%'
    },
  ],
};
