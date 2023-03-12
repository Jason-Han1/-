var xData = (function () {
  var data = ['11.29', '11.30', '12.01', '12.02', '12.03','12.04','12.05','12.06','12.07'];
  return data;
})();

option = {
  backgroundColor: '#0c1f50',
  legend: {
    // data: ['部署失败', '成功', '测试失败', '发布数'],
    data: ['待解决', '已解决', '已关闭', '累计task数'],
    left: 'center',
    top: 30,
    itemWidth: 16.7,
    itemHeight: 7.6,
    type: 'plain',
    textStyle: {
      color: 'RGBA(154, 209, 253, 1)',
    },
  },
  tooltip: {
    trigger: 'axis',
  },
  grid: {
    borderWidth: 0,
    top: 100,
    bottom: 80,
    left: 55,
    right: 25,
    textStyle: {
      color: '#fff',
    },
  },
  calculable: true,
  xAxis: [
    {
      type: 'category',
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.1)',
        },
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitArea: {
        show: false,
      },
      axisLabel: {
        interval: 0,
        color: 'rgba(255,255,255,0.7)',
        fontSize: 10,
      },
      data: xData,
    },
  ],
  yAxis: [
    {
      name: '个',
      nameTextStyle: {
        color: '#FDFDFD',
        padding: [0, 0, 0, -50],
      },
      nameGap: 15,
      type: 'value',
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
          color: 'RGBA(3, 75, 97, 0.4)',
        },
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        interval: 0,
        color: 'rgba(255,255,255,0.5)',
        fontSize: 10,
        formatter: (value) => {
          return Math.abs(value);
        },
      },
      splitArea: {
        show: false,
      },
    },
  ],
  series: [
    {
      name: '待解决',
      type: 'bar',
      stack: '1',
      barMaxWidth: 15,
      barGap: '10%',
      itemStyle: {
        normal: {
          barBorderRadius: 5,
          // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          //         {
          //             offset: 1,
          //             color: '#baf1a4',
          //         },
          //         {
          //             offset: 0,
          //             color: '#1ad430',
          //         },
          //     ]),
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#956FD4' },
            { offset: 1, color: '#3EACE5' },
          ]),
        },
      },
      label: {
        show: true,
        position: 'inside',
        distance: 10,
        color: '#fff',
        fontSize: '10px',
      },
      data: [110, 154, 45, 144, 144,23,90,75,56],
    },

    // {
    //   name: '成功',
    //   type: 'bar',
    //   stack: '1',
    //   itemStyle: {
    //     normal: {
    //       color: {
    //         type: 'linear',
    //         x: 0,
    //         y: 0,
    //         x2: 0,
    //         y2: 1,
    //         colorStops: [
    //           {
    //             offset: 0,
    //             color: '#FF8B77', // 0% 处的颜色
    //           },
    //           {
    //             offset: 1,
    //             color: '#FE6AAC', // 100% 处的颜色
    //           },
    //         ],
    //         global: false, // 缺省为 false
    //       },
    //       opacity: 0.9,
    //       barBorderRadius: 0,
    //     },
    //   },
    //   data: [110, 151, 48, 145, 147, 186, 141],
    // },
    {
      name: '已解决',
      type: 'bar',
      stack: '1',
      barMaxWidth: 20,
      barGap: '10%',
      itemStyle: {
        normal: {
          barBorderRadius: 5,
          // color: new echarts.graphic.LinearGradient(
          //     0, 0, 0, 1,
          //     [
          //         {offset: 0.5, color: 'rgba(186,241,164,0.5)'},
          //         {offset: 0., color: 'rgba(186,241,164,0.3)'},
          //         {offset: 1, color: 'rgba(186,241,164,0)'}
          //     ]
          // )
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0.5, color: 'rgba(149,111,211,0.5)' },
            { offset: 0, color: 'rgba(149,111,211,0.3)' },
            { offset: 1, color: 'rgba(149,111,211,0)' },
          ]),
        },
      },
      label: {
        show: true,
        position: 'inside',
        distance: 10,
        color: '#fff',
        fontSize: '10px',
      },
      data: [160, 341, 458, 145, 147,132,200,154,190],
    },
    {
      name: '已关闭',
      type: 'bar',
      stack: '1',
      barMaxWidth: 20,
      barGap: '10%',
      itemStyle: {
        normal: {
          barBorderRadius: 5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0.3, color: 'rgba(62,172,229,0.6)' },
            { offset: 0.5, color: 'rgba(62,172,229,0.3)' },
            { offset: 1, color: 'rgba(62,172,229,0.1)' },
          ]),
        },
      },
      label: {
        show: true,
        position: 'inside',
        distance: 10,
        color: '#fff',
        fontSize: '10px',
        formatter: (value) => {
          return Math.abs(value.data);
        },
      },
      data: [-100, -141, -88, -145, -67,-90,-50,-30,-45],
    },
    {
      name: '累计task数',
      type: 'line',
      symbolSize: 3,
      symbol: 'emptyCircle',
      itemStyle: {
        normal: {
          color: '#FFC130',
          barBorderRadius: '100%',
        },
        borderWidth: 0,
      },
      smooth: true,
      lineStyle: {
        normal: {
          width: 2,
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#FF8B77', // 0% 处的颜色
              },
              {
                offset: 1,
                color: '#FE6AAC', // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        },
      },
      data: [350, 600, 650, 1100, 1150, 1200,1230,1500,1530,1540],
    },
  ],
};
