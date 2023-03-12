const fontColor = '#000';
const yData = [2016, 2017, 2018, 2019];
const seriesData = [30, 50, 60, 80];
option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
    formatter: (params) => {
      const { axisValueLabel, value } = params[0];
      return `<span style="display: inline-block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: rgba(0, 255, 253, 1)"></span> <span>${axisValueLabel}</span> <span>${value}</span>`;
    },
  },
  legend: {
    show: false,
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    top: '3%',
  },
  xAxis: {
    type: 'value',
    show: false,
  },
  yAxis: [
    {
      axisLine: { show: false },
      splitLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        color: fontColor,
        verticalAlign: 'bottom',
        lineHeight: 50,
        align: 'left',
        padding: [0, 0, 0, 10],
        formatter: (value, index) => {
          return `{a|TOP${yData.length - index}}`;
        },
        rich: {
          a: {
            padding: 5,
            borderRadius: 4,
            color: '#000',
            backgroundColor: '#00F1FF',
          },
        },
      },
      data: yData,
    },
    {
      axisLine: { show: false },
      splitLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        color: fontColor,
        verticalAlign: 'bottom',
        lineHeight: 50,
        align: 'right',
        formatter: (value, index) => {
          return seriesData[index] + '%';
        },
      },
      data: yData,
    },
  ],
  series: [
    {
      name: '2011',
      type: 'bar',
      zlevel: 10,
      barWidth: 8,
      itemStyle: {
        borderRadius: 10,
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
          { offset: 0, color: 'rgba(1, 140, 255, 0)' },
          { offset: 0.5, color: '#00708f' },
          { offset: 1, color: 'rgba(0, 255, 253, 1)' },
        ]),
      },
      data: seriesData,
    },
    {
      name: '2012',
      type: 'bar',
      barGap: '-100%',
      barWidth: 8,
      itemStyle: {
        color: '#000911',
        borderRadius: 10,
      },
      data: [100, 100, 100, 100],
    },
  ],
};
