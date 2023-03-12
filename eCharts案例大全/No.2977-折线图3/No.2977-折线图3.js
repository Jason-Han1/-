option = {
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    top: '15%',
    containLabel: true,
  },
  tooltip: {
    show: true,
    trigger: 'axis',
    axisPointer: {
      lineStyle: {
        color: 'rgba(255,171,93,0.5)',
        shadowColor: 'rgba(255,171,93,0.5)',
        type: 'dotted', // 设置tooltip线类型
      },
    },
    textStyle: {
      fontSize: 12,
      color: '#fff',
    },
  },
  xAxis: {
    type: 'category',
    data: ['1次', '2次', '3次', '4次', '5次'],
    axisLabel: {
      textStyle: {
        color: '#9B9B9B',
        fontSize: 12,
      },
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
    boundaryGap: false,
  },
  yAxis: {
    type: 'value',
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
      type: 'line',
      // smooth: true,
      data: [100, 200, 80, 100, 300],
      label: {
        normal: {
          show: false,
          textStyle: {
            color: '#fff',
            fontSize: 12,
          },
        },
      },
      showSymbol: false,
      symbolSize:6,
      itemStyle: {
        borderColor: '#FFF',
        borderWidth: 2,
      },
      lineStyle: {
        color: 'rgba(255, 171, 93, 0.8)',
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(255, 228, 120, 0.8)', // 0% 处的颜色
            },
            {
              offset: 1,
              color: 'rgba(255, 228, 120, 0)', // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
      },
    },
  ],
};
