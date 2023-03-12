option = {
  legend: {
    data: ['煤电', '油', '气', '电','其他'],
    left: 'center',
    bottom: 3,
    itemWidth: 16.7,
    itemHeight: 7.6,
    type: 'plain',
    textStyle: {
      color: 'RGBA(204, 228, 237, 1)',
    },
  },
  backgroundColor: '#000',
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
      textStyle: {
        color: '#fff',
      },
    },
  },
  grid: {
    left: '2%',
    right: '2%',
    bottom: '4%',
    top: '5%',
    containLabel: true,
  },
  xAxis: {
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    axisLine: {
      show: true, //隐藏X轴轴线
      lineStyle: {
        color: '#11417a',
      },
    },
    axisTick: {
      show: false, //隐藏X轴刻度
    },
    axisLabel: {
      show: true,
      textStyle: {
        color: '#89C3DD', //X轴文字颜色
      },
    },
  },
  yAxis: [
    {
      type: 'value',
      axisLine: {
        show: false,
        lineStyle: {
          color: '#11417a',
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: [5, 10],
          dashOffset: 10,
          color: '#0f68a0',
        },
      },
      axisLabel: {
        color: '#89C3DD',
      },

      axisTick: {
        show: false,
      },
    },
  ],
  series: [
    {
      name: '煤电',
      type: 'bar',
      stack: '1',
      barMaxWidth: 15,
      barGap: '10%',
      itemStyle: {
        color: '#00d3b8',
        barBorderRadius: [30, 30, 0, 0],
      },
      data: [1160, 1541, 458, 1445, 1447, 1586, 1641, 854, 1747, 1887, 1200, 1300],
    },

    {
      name: '油',
      type: 'bar',
      stack: '1',
      itemStyle: {
        color: '#fdcd66',
         barBorderRadius: [30, 30, 0, 0],
      },
      data: [1160, 1541, 458, 1445, 1447, 1586, 1641, 854, 1747, 1887, 1500, 1600],
    },
    {
      name: '气',
      type: 'bar',
      stack: '1',
      barMaxWidth: 15,
      barGap: '10%',
      itemStyle: {
        color: '#00afb6',
         barBorderRadius: [30, 30, 0, 0],
      },
      data: [1160, 1541, 1458, 1445, 1447, 1586, 1641, 854, 1747, 1887, 1900, 3000],
    },
    {
      name: '电',
      type: 'bar',
      stack: '1',
      barMaxWidth: 15,
      barGap: '10%',
      itemStyle: {
        color: '#9de79f',
         barBorderRadius: [30, 30, 0, 0],
      },
      data: [1160, 1541, 1458, 1445, 1447, 1586, 1641, 854, 1747, 1887, 1900, 3000],
    },
    {
      name: '其他',
      type: 'bar',
      stack: '1',
      barMaxWidth: 15,
      barGap: '10%',
      itemStyle: {
        color: '#5682ea',
         barBorderRadius: [30, 30, 0, 0],
      },
      data: [1160, 1541, 1458, 1445, 1447, 1586, 1641, 854, 1747, 1887, 1900, 3000],
    },
  ],
};
