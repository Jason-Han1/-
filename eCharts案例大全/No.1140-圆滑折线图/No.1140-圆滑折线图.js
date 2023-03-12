const color = ['#6080EB', 'rgba(96, 128, 235, 0.42)', 'rgba(96, 128, 235, 0.03)'];
const xData = ['2021-10-01', '2021-10-02', '2021-10-03', '2021-10-04', '2021-10-05', '2021-10-06', '2021-10-07'];
const yData = [1220, 182, 491, 234, 790, 330, 310];
option = {
  color: color[0],
  dataZoom: {
    type: 'inside',
    xAxisIndex: [0],
  },
  tooltip: {
    show: true,
    trigger: 'axis',
  },
  grid: {
    top: 10,
    bottom: 40,
    // left: 70,
    // right: 20,
  },
  xAxis: {
    boundaryGap: false,
    splitLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      lineStyle: {
        color: '#d8d8d8',
      },
    },
    axisLabel: {
      color: 'rgba(0, 0, 0, 0.65)',
    },
    data: xData,
  },
  yAxis: {
    splitNumber: 4,
    splitLine: {
      show: true,
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: '#d8d8d8',
      },
    },
    axisLabel: {
      color: 'rgba(0, 0, 0, 0.65)',
    },
  },
  series: [
    {
      type: 'line',
      showSymbol: false,
      smooth: true,
      lineStyle: {
        color: color[0],
        width: 3,
      },
      areaStyle: {
        //区域填充样式
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: color[1],
              },
              {
                offset: 1,
                color: color[2],
              },
            ],
            false
          ),
        },
      },
      data: yData,
    },
  ],
};
