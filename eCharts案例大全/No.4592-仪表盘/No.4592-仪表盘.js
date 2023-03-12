let colors = ['#1ac47c', '#ffb661', '#ff625e'];

option = {
  title: {
    text: 'CPU使用率',
    top: '4%',
    x: 'center',
    textStyle: { color: '#ffffff', fontSize: 24, fontWeight: 'normal'}
  },
  // grid: {
  //   top: '15%',
  //   bottom: '10%',
  //   left: '15%',
  //   right: '15%',
  // },
  // tooltip: {
  //   formatter: '{a} : {c}',
  // },
  // toolbox: {
  //   feature: {
  //     restore: {},
  //     saveAsImage: {},
  //   },
  // },
  series: [
    {
      // name: 'CPU使用率',
      type: 'gauge',
      // center: ["50%", "50%"], // 仪表位置
      // radius: "75%", //仪表大小
      min: 0,
      max: 100,
      // --- 仪表盘
      axisLine: {
        lineStyle: {
          width: 36,
          color: [
            [0.75, colors[0]],
            [0.9, colors[1]],
            [1, colors[2]]
          ]
        }
      },
      // --- 分隔线样式
      splitLine: {
        length: '12%',
      },
      // --- 刻度样式
      axisTick: { show: false },
      // --- 刻度标签
      axisLabel: { fontSize: 16, fontWeight: 'bold', distance: 10 },
      // --- 仪表盘指针
      pointer: { width: 12, length: '60%' },
      // --- 仪表盘指针圆
      markPoint: {
        animation: false,
        silent: true,
        data: [
          {
            x: '50%',
            y: '50%',
            symbol: 'circle',
            symbolSize: 50,
            // itemStyle: { color: '#1890ff' }
          },
          {
            x: '50%',
            y: '50%',
            symbol: 'circle',
            symbolSize: 30,
            itemStyle: { color: '#fff' }
          },
        ],
      },
      // --- 仪表盘 显示数据
      detail: {
        formatter: '{value}%',
        fontSize: 50,
        fontWeight: 'bold'
      },
      data: [
        {
          value: 85.66,
          // name: ""
        }
      ]
    }
  ]
};
