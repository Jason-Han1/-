data = 50;
option = {
  xAxis: {
    data: ['百分比'],
    axisTick: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    axisLabel: {
      show: false,
      textStyle: {
        color: '#e54035',
      },
    },
  },
  yAxis: {
    splitLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    axisLabel: {
      show: false,
    },
  },
  grid: {
    top: '20%',
    bottom: '20%'
  },
  series: [
    {
      name: '最上层立体圆邊框',
      type: 'pictorialBar',
      symbolSize: [300, 100],
      symbolOffset: [0, -51],
      z: 12,
      itemStyle: {
        normal: {
          color: '#cccccc',
        },
      },
      data: [
        {
          value: 100,
          symbolPosition: 'end',
        },
      ],
    },
    {
      name: '最上层立体圆',
      type: 'pictorialBar',
      symbolSize: [298, 98],
      symbolOffset: [0, -50],
      z: 12,
      itemStyle: {
        normal: {
          color: '#ffffff',
        },
      },
      data: [
        {
          value: 100,
          symbolPosition: 'end',
        },
      ],
    },
    {
      name: '最底部立体圆邊框',
      type: 'pictorialBar',
      symbolSize: [300, 100],
      symbolOffset: [0, 50],
      z: 12,
      itemStyle: {
        normal: {
          color: data ? 'rgba(0, 192, 255, 1)' : '#cccccc',
        },
      },
      data: [100],
    },
    {
      name: '最底部立体圆',
      type: 'pictorialBar',
      symbolSize: [298, 98],
      symbolOffset: [0, 49],
      z: 12,
      itemStyle: {
        normal: {
          color: data ? 'transparent' : '#ffffff',
        },
      },
      data: [100],
    },
    {
      name: '中间立体圆',
      type: 'pictorialBar',
      symbolSize: [300, 100],
      symbolOffset: [0, -50],
      z: 12,
      itemStyle: {
        normal: {
          color: 'rgba(41, 121, 255, 1)',
        },
      },
      data: [
        {
          value: data,
          symbolPosition: 'end',
        },
      ],
    },
    {
      //底部立体柱
      stack: '1',
      type: 'bar',
      itemStyle: {
        normal: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(41, 121, 255, 0.95)',
              },
              {
                offset: 1,
                color: 'rgba(0, 192, 255, 1)',
              },
            ],
            globalCoord: false, // 缺省为 false
          },
        },
      },
      label: {
        show: true,
        position: 'inside',
        distance: 15,
        color: '#ffffff',
        fontSize: 18,
        formatter: '售賣率：{c}' + '%',
      },

      silent: true,
      barWidth: 300,
      barGap: '-100%',
      data: [data],
    },
    {
      //上部立体柱
      stack: '1',
      type: 'bar',
      itemStyle: {
        normal: {
          color: '#ffffff',
          barBorderWidth: 1,
          barBorderColor: '#cccccc',
        },
      },
      label: {
        show: true,
        position: 'inside',
        color: '#000000',
        fontSize: 18,
        formatter: '空置率：{c}' + '%',
      },
      silent: true,
      barWidth: 300,
      barGap: '-100%',
      data: [100 - data],
    },
  ],
};