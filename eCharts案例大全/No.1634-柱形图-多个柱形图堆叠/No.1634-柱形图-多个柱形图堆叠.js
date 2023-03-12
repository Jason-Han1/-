const fontColor = '#000';
const seriesData = [30, 50, 60, 80]
option = {
  title: {
    text: '(年份)',
    textStyle: {
      color: fontColor,
      fontSize: 14,
    },
  },
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
    containLabel: true,
  },
  xAxis: {
    type: 'value',
    show: false,
  },
  yAxis: {
    axisLine: { show: false },
    splitLine: { show: false },
    axisTick: { show: false },
    axisLabel: {
      color: fontColor,
    },
    data: [2016, 2017, 2018, 2019],
  },
  series: [
    {
      name: '2011',
      type: 'bar',
      zlevel: 10,
      barWidth: 8,
      itemStyle: {
        borderRadius: 10,
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
          { offset: 0, color: 'rgba(1, 85, 255, 0)' },
          { offset: 0.5, color: '#005ea0' },
          { offset: 1, color: 'rgba(0, 193, 255, 1)' },
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
      label:{
        show: true,
        position: 'right',
        formatter:(params)=> {
          console.log(params)
          const { dataIndex } = params
          return seriesData[dataIndex]
        }
      },
      data: [100, 100, 100, 100],
    },
  ],
};
