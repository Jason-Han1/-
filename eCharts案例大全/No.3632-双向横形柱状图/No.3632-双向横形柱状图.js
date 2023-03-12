option = {
  backgroundColor: '#102950',
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    left: 'center',
    bottom: '2%',
    show: true,
    type: 'scroll',
  },
  grid: [{
    left: '5%',
    width: '41%',
    containLabel: true,
    bottom: 60
  },
  {
    right: '5%',
    width: '48%',
    containLabel: true,
    bottom: 60
  },
  ],
  xAxis: [
    {
      type: 'value',
      gridIndex: 0,
      name: '万',
      nameTextStyle: {
        color: 'rgba(255,255,255,0.8)',
      },
      inverse: true,
      splitLine: {
        show: false,
      },
    },
    {
      type: 'value',
      name: '万',
      nameTextStyle: {
        color: 'rgba(255,255,255,0.8)',
      },
      gridIndex: 1,
      inverse: false,
      splitLine: {
        show: false,
      },
    },
  ],
  yAxis: [
    {
      type: 'category',
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false
      },
      axisLabel: { show: false },
      gridIndex: 0,
      position: 'right',
    },
    {
      type: 'category',
      gridIndex: 1,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false
      },
    },
  ],
  series: [{
    type: 'bar',
    seriesLayoutBy: 'row',
    barWidth: 8,
    itemStyle: {
      color: new echarts.graphic.LinearGradient(
        0,
        0,
        1,
        0,
        [
          {
            offset: 0,
            color: '#FEB01E', // 0% 处的颜色
          },
          {
            offset: 1,
            color: '#EC6725', // 100% 处的颜色
          },
        ],
        false,
      ),
      barBorderRadius: 5,
    },
    xAxisIndex: 0,
    yAxisIndex: 0,
  }, {
    type: 'bar',
    seriesLayoutBy: 'row',
    barWidth: 8,
    itemStyle: {
      color: new echarts.graphic.LinearGradient(
        1,
        0,
        0,
        0,
        [
          {
            offset: 0,
            color: '#00D2FF', // 0% 处的颜色
          },
          {
            offset: 1,
            color: '#1889F3', // 100% 处的颜色
          },
        ],
        false,
      ),
      barBorderRadius: 5
    },
    xAxisIndex: 1,
    yAxisIndex: 1,
  }],
  dataset: {
    source: [
      ['product', '社区', '互联网', '万特尔', '配方颗粒', '健康'],
      ['投入', 19.3, 29.3, 59.3, 79.3, 29.3],
      ['产出', 19.3, 29.3, 59.3, 79.3, 29.3],
    ]
  }
};
