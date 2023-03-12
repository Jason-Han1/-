option = {
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    top: '15%',
    containLabel: true,
  },
  tooltip: {
    confine: true,
    textStyle: {
      fontSize: 12,
    },
  },
  xAxis: {
    type: 'category',
    data: ['0-3', '3-7', '7-12', '12-18', '18-25', '>25'],
    axisLabel: {
      textStyle: {
        color: '#9B9B9B',
        fontSize: 12,
      },
      formatter(params) {
        if (params.length > 10) {
          return params.substring(0, 10) + '...';
        } else {
          return params;
        }
      },
      interval: 0,
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: 'rgba(102, 102, 102, 1)', // 定义坐标轴颜色及线类型
        type: 'dashed',
      },
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      show: false,
    },
    interval: 0,
  },
  yAxis: {
    minInterval: 1, // 设置y轴最小刻度
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      show: false,
    },
    axisLabel: {
      show: true,
      textStyle: {
        color: '#9B9B9B',
        fontSize: 12,
      },
    },
  },
  series: [
    {
      type: 'bar',
      data: [100, 200, 300, 400, 500, 600],
      barWidth: 20,
      z: -10,
      label: {
        show: false,
      },
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(215, 108, 86, 1)', // 0% 处的颜色
            },
            {
              offset: 1,
              color: 'rgba(215, 108, 86, 0.15)', // 100% 处的颜色
            },
          ],
        },
        borderWidth: 2,
        padding: 0,
      },
    },
    {
      // 分隔
      type: 'pictorialBar',
      itemStyle: {
        normal: {
          color: '#010F31',
        },
      },
      symbolRepeat: 'fixed',
      symbolMargin: 2,
      symbol: 'rect',
      symbolClip: true,
      symbolSize: [20, 3],
      symbolPosition: 'start',
      data: [100, 200, 300, 400, 500, 600],
      z: 2,
      animationEasing: 'elasticOut',
    },
  ],
};
