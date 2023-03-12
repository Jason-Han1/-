let xData = ['西部生态城', '科技城', '通安镇', '浒墅关经济开发区', '枫桥街道', '狮山横塘街道'];
option = {
  tooltip: {},
  backgroundColor: '#0f375f',
  animation: false,
  grid: {
    containLabel: true,
    left: 30,
    right: 50,
    bottom: 50,
    top: 20,
  },
  xAxis: {
    axisLabel: {
      color: '#ffff',
      fontSize: 14,
      interval: 0,
      lineHeight: 8,
      align: 'center',
      // rotate: 20,
      margin: 30,
      formatter: function (name, index) {
        switch (index) {
          case 5:
            return name.substring(0, 9) + '\n' + '\n' + name.substring(9);
          default:
            return name;
        }
      },
    },
    splitLine: {
      show: false,
    },
    axisLine: {
      lineStyle: {
        color: '#384267',
        width: 1,
        type: 'dashed',
      },
      show: true,
    },
    data: xData,
    type: 'category',
  },
  yAxis: {
    axisLabel: {
      color: '#ffff',
      fontSize: 14,
    },

    splitLine: {
      show: true,
      lineStyle: {
        color: '#384267',
        type: 'dashed',
      },
    },
    axisLine: {
      lineStyle: {
        color: '#384267',
        type: 'dashed',
      },
      show: false,
    },
    name: '',
  },
  series: [
    {
      name: '主营业务',
      type: 'bar',
      barWidth: 30,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#07e764',
            },
            {
              offset: 1,
              color: '#028479',
            },
          ]),
        },
      },
      data: [277, 423, 203, 300, 387, 580],
      z: 10,
      zlevel: 0,
      label: {
        show: true,
        position: 'top',
        distance: 10,
        fontSize: 20,
        color: '#07e764',
      },
    },
    {
      // 分隔
      type: 'pictorialBar',
      itemStyle: {
        normal: {
          color: '#0F375F',
        },
      },
      symbolRepeat: 'fixed',
      symbolMargin: 6,
      symbol: 'rect',
      symbolClip: true,
      symbolSize: [30, 2],
      symbolPosition: 'start',
      symbolOffset: [0, -1],
      // symbolBoundingData: this.total,
      data: [277, 423, 203, 300, 387, 580],
      width: 25,
      z: 0,
      zlevel: 1,
    },
  ],
};
