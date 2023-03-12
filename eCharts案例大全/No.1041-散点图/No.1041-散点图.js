option = {
  backgroundColor: '#12233D',
  xAxis: {
    name: 'rw',
    splitLine: false,
    axisTick: false,
    axisLine: {
      symbol: ['none', 'arrow'],
      lineStyle: {
        color: '#5F7494',
      },
    },
  },
  yAxis: {
    name: '支付',
    splitLine: false,
    axisTick: false,
    axisLine: {
      symbol: ['none', 'arrow'],
      lineStyle: {
        color: '#5F7494',
      },
    },
  },
  dataZoom: [
    {// 添加缩放 https://echarts.apache.org/zh/option.html#dataZoom-inside
      type:'inside',
      xAxisIndex: [0, 1], // 表示这个 dataZoom 组件控制 第一个 和 第二个 xAxis,这里1可以省略
    },
  ],
  series: [
    {
      type: 'scatter',
      markLine: {
        silent: true, // 是否不响应鼠标事件
        animation: false, // 关闭动画显示
        //symbol:['none','arrow'],// 如果两个子项都不要起始箭头可综合配置
        //label: { show: true, position: "insideEndTop", formatter: "市均", color: "#00FFE4" },
        data: [
          {
            name: 'a',
            xAxis: 6,
            label: {
              formatter: '医院',
            },
            symbol: 'none',
          },
          {
            type: 'average',
            name: 'b',
            label: {
              formatter: '市均',
            },
            lineStyle: {
              type: 'dashed',
              color: '#f00',
            },
            symbol: 'none',
          },
        ],
      },
      itemStyle: {
        color: '#3286B0',
      },
      symbolSize: function (value, params) {
        return value[0] * 5;
      },
      data: [
        [10.0, 8.04],
        [8.07, 6.95],
        [13.0, 7.58],
        [9.05, 8.81],
        [11.0, 8.33],
        [14.0, 7.66],
        [13.4, 6.81],
        [10.0, 6.33],
        [14.0, 8.96],
        [12.5, 6.82],
        [9.15, 7.2],
        [11.5, 7.2],
        [3.03, 4.23],
        [12.2, 7.83],
        [2.02, 4.47],
        [1.05, 3.33],
        [4.05, 4.96],
        [6.03, 7.24],
        [12.0, 6.26],
        [12.0, 8.84],
        [7.08, 5.82],
        [5.02, 5.68],
      ],
    },
  ],
};
