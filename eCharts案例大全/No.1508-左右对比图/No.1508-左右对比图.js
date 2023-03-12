option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['Profit', 'Expenses', 'Income']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'value',
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
          width: 2.5
        }
      },
      axisLine: {
        show: true,
        lineStyle: {
          width: 2.5
        }
      }
    }
  ],
  yAxis: [
    {
      type: 'category',
      axisTick: {
        show: false,
        lineStyle: {
          type: 'dashed'
        }
      },
      axisLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
          width: 2.5
        }
      },
      data: ['局领导', '办公室']
    }
  ],
  series: [
    {
      name: '调整前人数',
      type: 'bar',
      stack: 'Total',

      data: [320, 302, 341, 374, 390, 450, 420]
    },
    {
      name: '调整后人数',
      type: 'bar',
      stack: 'Total',
      data: [-120, -132, -101, -134, -190, -230, -210]
    }
  ]
};
