const total = 1200;
const count = 750;

option = {
  backgroundColor: '#0C2131',
  graphic: {
    // 展示的数字
    elements: [
      {
        type: 'text',
        left: 'center',
        top: '2%',
        style: {
          text: '0',
          fill: 'rgba(218, 230, 255, 0.54)',
          font: '20px sans-serif',
        },
      },
      {
        type: 'text',
        top: 'middle',
        right: '15%',
        style: {
          text: '25',
          fill: 'rgba(218, 230, 255, 0.54)',
          font: '20px',
        },
      },
      {
        type: 'text',
        left: 'center',
        bottom: 10,
        style: {
          text: '50',
          fill: 'rgba(218, 230, 255, 0.54)',
          font: '20px',
        },
      },
      {
        type: 'text',
        left: '15%',
        top: 'middle',
        style: {
          text: '75',
          fill: 'rgba(218, 230, 255, 0.54)',
          font: '20px',
        },
      },
    ],
  },
  series: [
    {
      type: 'pie',
      radius: ['99%', '100%'],
      startAngle: 208,
      emphasis: {
        scale: false,
      },
      label: {
        show: false,
      },
      itemStyle: {
        color: ({ dataIndex }) => {
          return dataIndex === 0 || dataIndex === 2 ? 'transparent' : '#3BB9BA';
        },
      },
      data: [{ value: 65 }, { value: 15 }, { value: 5 }, { value: 15 }],
    },
    {
      type: 'pie',
      radius: ['86%', '86.5%'],
      emptyCircleStyle: {
        color: '#285D73',
      },
      label: {
        show: false,
      },
    },
    {
      type: 'pie',
      radius: ['86.5%', '87.5%'],
      startAngle: 60,
      emphasis: {
        scale: false,
      },
      label: {
        show: false,
      },
      itemStyle: {
        color: ({ dataIndex }) => {
          return dataIndex % 2 === 0 ? '#56B4D9' : 'transparent';
        },
      },
      data: [{ value: 100 }, { value: 100 }, { value: 100 }, { value: 100 }, { value: 100 }, { value: 100 }],
    },
    {
      type: 'pie',
      radius: ['72.5%', '80.5%'],
      emptyCircleStyle: {
        color: '#1D303F',
      },
    },
    // 使用仪表盘展示数据
    {
      type: 'gauge',
      radius: '80%',
      startAngle: '90',
      endAngle: '-269.9999',
      splitNumber: (count / total) * 100,
      pointer: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          // 在这里可以控制占比
          color: [[count / total, '#FFB55B']],
          width: 25,
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        distance: -26,
        length: 27,
        lineStyle: {
          color: '#1D303F',
          width: 13,
        },
      },
      axisLabel: {
        show: false,
      },
    },
    {
      type: 'pie',
      radius: ['68%'],
      animation: false,
      itemStyle: {
        color: '#142B34',
      },
      label: {
        show: true,
        position: 'center',
        formatter: `{count|${count}}\n{desc|当前在线用户线}\n{totalDesc|总数 }{total|${total}}`,
        rich: {
          count: {
            color: '#FFB55B',
            fontSize: 180,
            fontWeight: 'bold',
          },
          desc: {
            color: '#FFFFFF',
            fontSize: 50,
            padding: [0, 0, 30, 0],
          },
          totalDesc: {
            color: 'rgba(255, 255, 255, 0.68)',
            fontSize: 50,
          },
          total: {
            fontSize: 50,
            color: '#AACBFF',
          },
        },
      },
      data: [100],
    },
  ],
};
