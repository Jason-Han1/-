var xData = [
  '0点',
  '1点',
  '2点',
  '3点',
  '4点',
  '5点',
  '6点',
  '7点',
  '8点',
  '9点',
  '10点',
  '11点',
  '12点',
  '13点',
  '14点',
];
option = {
 backgroundColor: '#000',
    grid: {
        left: '5%',
        right: '10%',
        top: '20%',
        bottom: '15%',
        containLabel: true,
    },
    tooltip: {
        show: true,
        trigger: 'axis',
    },
    xAxis: [
        {
      type: 'category',
      axisLine: {
        show: true,
        lineStyle: {
          color: '#85C1D9',
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: '#8BC4F2',
        margin: 6,
      },
      splitLine: {
        show: false,
      },
      boundaryGap: ['5%', '5%'],
      data: xData,
    },
    ],
     yAxis: [
    {
      type: 'value',
      axisLabel: {
        color: '#8BC4F2',
        margin: 6,
      },
      splitLine: {
        lineStyle: {
          color: '#355C84',
          type: 'dashed',
        },
      },
    },
  ],
    series: [
        {
            name: '已采纳',
            type: 'line',
            stack: '总量',
            symbolSize: 6,
             itemStyle: {
        color: '#55EFF1',
        borderColor: '#55EFF1',
        borderWidth: 2,
      },
            data: [120, 132, 101, 134, 90, 432,421,234,230, 210, 182, 191, 234, 290, 330],
        },
    ],
};
