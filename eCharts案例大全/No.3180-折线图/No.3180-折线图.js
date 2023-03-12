var uploadedDataURL = '/asset/get/s/data-1623143140716-mdWdPe72i.png';

var uploadedDataURL1 = '/asset/get/s/data-1623143145940-asUoF0ILV.png';

option = {
  backgroundColor: 'transparent',
  grid: {
    top: '12%',
    left: '3%',
    right: '3%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: [
    {
      data: ['洪绪镇', '级索镇', '柴胡店镇', '姜屯镇', '鲍沟镇', '张汪镇', '木石镇', '东郭镇'],
      axisLabel: {
        color: 'rgba(164, 186, 206, 1)',
        textStyle: {
          fontSize: 16,
        },
        interval: 0,
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(164, 186, 206, 0.15)',
        },
      },
      axisTick: {
        show: false,
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        color: '#A1D5FF',
        textStyle: {
          fontSize: 12,
        },
      },
      axisLine: {
        show: false,
        lineStyle: {
          type: 'dashed',
          color: 'rgba(164, 186, 206, 0.15)',
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(164, 186, 206, 0.15)',
        },
      },
    },
    {
      type: 'value',
      axisLabel: {
        color: '#A1D5FF',
        textStyle: {
          fontSize: 12,
        },
        formatter: '{value}%',
      },
      min: '0',
      max: '100',
      position: 'right',
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: 'rgba(164, 186, 206, 0.15)',
        },
      },
    },
  ],
  series: [
    {
      name: '公众投诉次数',
      type: 'bar',
      data: [80, 68, 90, 88, 78, 65, 77, 69],
      barWidth: '12px',
      yAxisIndex: 0,
      borderRadius: [3, 3, 0, 0],
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(59, 163, 255, 1)', // 0% 处的颜色
            },
            {
              offset: 1,
              color: 'rgba(4, 7, 23, 0)',
            },
          ]),
        },
      },
    },
    {
      name: '巡河上报次数',
      type: 'bar',
      data: [72, 59, 70, 76, 62, 50, 68, 50],
      barWidth: '12px',
      yAxisIndex: 0,
      itemStyle: {
        borderRadius: [3, 3, 0, 0],
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(60, 232, 155, 1)', // 0% 处的颜色
            },
            {
              offset: 1,
              color: 'rgba(4, 7, 23, 0)',
            },
          ]),
        },
      },
    },
    {
      name: '办结率',
      type: 'line',
      yAxisIndex: 1,
      // smooth: true, //是否平滑
      showAllSymbol: true,
      symbol: uploadedDataURL,
      symbolSize: 15,
      lineStyle: {
        normal: {
          color: 'rgba(255, 204, 119, 1)',
          shadowColor: 'rgba(0, 0, 0, .3)',
          shadowBlur: 0,
          shadowOffsetY: 5,
          shadowOffsetX: 5,
        },
      },
      itemStyle: {
        color: '#6c50f3',
        borderColor: '#fff',
        borderWidth: 3,
        shadowColor: 'rgba(0, 0, 0, .3)',
        shadowBlur: 0,
        shadowOffsetY: 2,
        shadowOffsetX: 2,
      },
      tooltip: {
        show: false,
      },
      data: ['35', '25', '45', '55', '60', '76', '55', '60'],
    },
    {
      name: '满意率',
      type: 'line',
      yAxisIndex: 1,
      // smooth: true, //是否平滑
      showAllSymbol: true,
      symbol: uploadedDataURL1,
      symbolSize: 15,
      lineStyle: {
        normal: {
          color: '#00ca95',
          shadowColor: 'rgba(0, 0, 0, .3)',
          shadowBlur: 0,
          shadowOffsetY: 5,
          shadowOffsetX: 5,
        },
      },
      itemStyle: {
        color: '#00ca95',
        borderColor: '#fff',
        borderWidth: 3,
        shadowColor: 'rgba(0, 0, 0, .3)',
        shadowBlur: 0,
        shadowOffsetY: 2,
        shadowOffsetX: 2,
      },
      tooltip: {
        show: false,
      },
      data: ['45', '35', '60', '76', '55', '25', '45', '61'],
    },
  ],
};
