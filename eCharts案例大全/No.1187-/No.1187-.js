const colors = ['#5470C6', '#EE6666'];
option = {
  backgroundColor: '#fff',
  color: colors,
  tooltip: {
    trigger: 'axis',
    // formatter: function (params, ticket, callback) {
    // console.log(params)
    // return '{b0}: {c0}<br />{b1}: {c1}';
    // }
  },
  grid: {
    top: 70,
    bottom: 90,
  },
  dataZoom: [
    {
      type: 'slider',
      show: true,
      realtime: true,
      start: 0,
      end: 100,
      handleSize: '0',
      borderColor: 'rgba(255,255,255,0.20)',
      xAxisIndex: [0, 1],
      moveHandleStyle: {
        color: 'rgba(255,255,255,0.45)',
      },
      fillerColor: 'rgba(255,255,255,0.20)',
      dataBackground: {
        lineStyle: {
          color: 'rgba(255,255,255,0.30)',
          opacity: 1,
        },
        areaStyle: {
          color: 'rgba(255,255,255,0.10)',
          opacity: 1,
        },
      },
      selectedDataBackground: {
        lineStyle: {
          color: 'rgba(255,255,255,0.30)',
        },
        areaStyle: {
          color: 'rgba(255,255,255,0.20)',
        },
      },
      brushStyle: {
        color: 'rgba(255,255,255,0.20)',
      },
      //xAxisIndex: [0, 1], // 表示这个 dataZoom 组件控制 第一个 和 第2个 xAxis
    },
  ],
  xAxis: [
    {
      type: 'category',
      // xAxisIndex: 0,
      axisTick: {
        alignWithLabel: true,
        show:false
      },
      
      data: [
        '11.1',
        '11.2',
        '11.3',
        '11.4',
        '11.5',
        '11.6',
        '11.7',
        '11.8',
        '11.9',
        '11.10',
        '11.11',
        '11.12',
        '11.13',
        '11.14',
        '11.15',
        '11.16',
        '11.17',
      ],
    },
    {
      type: 'category',
      // xAxisIndex: 1,
      axisTick: {
        alignWithLabel: true,
        show:false
      },

      data: ['10.1', '10.2', '10.3', '10.4', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    },
  ],
  yAxis: [
    {
      type: 'value',
    },
  ],
  series: [
    {
      name: '数据0',
      type: 'line',
      // emphasis: {
      //   focus: 'series',
      // },
      data: [81.6, 5.9, 9.0, 26.4],
    },
    {
      name: '数据1',
      type: 'line',
      emphasis: {
        focus: 'series',
      },
      data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7],
    },
  ],
};
