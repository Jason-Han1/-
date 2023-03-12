// 绘制左侧面
const CubeLeft = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function (ctx, shape) {
    // 会canvas的应该都能看得懂，shape是从custom传入的
    const xAxisPoint = shape.xAxisPoint;
    const c0 = [shape.x, shape.y];
    const c1 = [shape.x - 18, shape.y - 10];
    const c2 = [xAxisPoint[0] - 18, xAxisPoint[1] - 9];
    const c3 = [xAxisPoint[0], xAxisPoint[1]];
    ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath();
  },
});
// 绘制右侧面
const CubeRight = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function (ctx, shape) {
    const xAxisPoint = shape.xAxisPoint;
    const c1 = [shape.x, shape.y];
    const c2 = [xAxisPoint[0], xAxisPoint[1]];
    const c3 = [xAxisPoint[0] + 18, xAxisPoint[1] - 9];
    const c4 = [shape.x + 18, shape.y - 9];
    ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
  },
});
// 绘制顶面
const CubeTop = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function (ctx, shape) {
    const c1 = [shape.x, shape.y];
    const c2 = [shape.x + 18, shape.y - 9];
    const c3 = [shape.x, shape.y - 18];
    const c4 = [shape.x - 18, shape.y - 10];
    ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
  },
});
// 注册三个面图形
echarts.graphic.registerShape('CubeLeft', CubeLeft);
echarts.graphic.registerShape('CubeRight', CubeRight);
echarts.graphic.registerShape('CubeTop', CubeTop);

option = {
  backgroundColor: '#011c3a',
  legend: {
    show: true,
    textStyle: {
      color: '#fff',
    },
    data: [
      {
        name: '排放量',
        icon: 'rect',
      },
      {
        name: '用电量',
      },
    ],
  },
  tooltip: {
    show: true,
  },
  xAxis: {
    data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    axisLine: {
      lineStyle: {
        color: '#3d5269',
      },
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      color: '#fff',
      fontSize: 14,
    },
  },
  yAxis: [
    {
      type: 'value',
      name: '单位:次',
      nameTextStyle: {
        color: '#fff',
        fontSize: 16,
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: '#3d5269',
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: '#fff',
        fontSize: 16,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#2d3d53',
        },
      },
      max: 6000,
      interval: 1200,
      yAxisIndex: 0,
    },
    {
      type: 'value',
      name: '(千瓦时)',
      nameTextStyle: {
        color: '#fff',
        fontSize: 16,
      },
      max: 6000,
      axisLine: {
        show: false,
        lineStyle: {
          color: '#3d5269',
        },
      },
      axisLabel: {
        show: true,
        color: '#fff',
        fontSize: 16,
      },

      splitLine: {
        show: true,
        lineStyle: {
          color: '#2d3d53',
        },
      },
      interval: 1200,
    },
  ],
  series: [
    {
      name: '排放量',
      type: 'custom',
      renderItem: (params, api) => {
        const location = api.coord([api.value(0), api.value(1)]);
        var color =
          api.value(1) > 2000
            ? 'red'
            : new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#61e400',
                },
                {
                  offset: 1,
                  color: '#389500',
                },
              ]);
        var color1 =
          api.value(1) > 2000
            ? 'red'
            : new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#95fb4c',
                },
                {
                  offset: 1,
                  color: '#95fb4c',
                },
              ]);
        var color2 =
          api.value(1) > 2000
            ? 'red'
            : new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#53c400',
                },
                {
                  offset: 1,
                  color: '#2e7a00',
                },
              ]);
        return {
          type: 'group',
          children: [
            {
              type: 'CubeLeft',
              shape: {
                api,
                xValue: api.value(0),
                yValue: api.value(1),
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0]),
              },
              style: {
                fill: color,
              },
            },
            {
              type: 'CubeRight',
              shape: {
                api,
                xValue: api.value(1),
                yValue: api.value(0),
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0]),
              },
              style: {
                fill: color2,
              },
            },
            {
              type: 'CubeTop',
              shape: {
                api,
                xValue: api.value(0),
                yValue: api.value(1),
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0]),
              },
              style: {
                fill: color1,
              },
            },
          ],
        };
      },
      data: [254, 3254, 1654, 2454, 4757, 2011, 1211, 3254, 1654, 2454, 4757, 2011],
    },

    // {
    //   name: '排放量',
    //   type: 'bar',
    //   barWidth: 20,
    //   zlevel: 2,
    //   itemStyle: {
    //     normal: {
    //       color: new echarts.graphic.LinearGradient(
    //         0,
    //         0,
    //         0,
    //         1,
    //         [
    //           {
    //             offset: 0,
    //             color: '#05af79',
    //           },
    //           {
    //             offset: 1,
    //             color: '#05af792e',
    //           },
    //         ],
    //         false
    //       ),
    //     },
    //   },
    //   label: {
    //     normal: {
    //       show: false,
    //       fontSize: 18,
    //       fontWeight: 'bold',
    //       color: '#ffffff',
    //       position: 'top',
    //     },
    //   },
    //   data: [254, 3254, 1654, 2454, 4757, 2011, 1211, 3254, 1654, 2454, 4757, 2011],
    // },
    {
      name: '用电量',
      type: 'line',
      smooth: true, //是否平滑
      showAllSymbol: true,
      symbol: 'circle',
      yAxisIndex: 1,
      symbolSize: 6,
      lineStyle: {
        normal: {
          color: 'rgba(0, 96, 255, 1)',
        },
      },
      zlevel: 1,
      label: {
        show: false,
        position: 'top',
        textStyle: {
          color: '#6c50f3',
        },
      },
      itemStyle: {
        color: 'rgba(0, 96, 255, 0.8)',
        borderColor: '#fff',
        borderWidth: 2,
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: 'rgba(0, 96, 255, 0.6)',
              },
              {
                offset: 1,
                color: 'rgba(0, 96, 255, 0)',
              },
            ],
            false
          ),
          shadowColor: 'rgba(0, 96, 255, 0.9)',
          shadowBlur: 10,
        },
      },
      data: [4600, 4790, 4900, 5130, 5600, 5800, 5700, 5600, 5400, 5300, 5200, 5100],
    },
  ],
};
