const CubeLeft = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0,
    },
    buildPath(ctx, shape) {
      const { xAxisPoint } = shape;
      const c0 = [shape.x, shape.y];
      const c1 = [shape.x - 9, shape.y - 9];
      const c2 = [xAxisPoint[0] - 9, xAxisPoint[1] - 9];
      const c3 = [xAxisPoint[0], xAxisPoint[1]];
      ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1])
        .closePath();
    },
  });
  const CubeRight = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0,
    },
    buildPath(ctx, shape) {
      const { xAxisPoint } = shape;
      const c1 = [shape.x, shape.y];
      const c2 = [xAxisPoint[0], xAxisPoint[1]];
      const c3 = [xAxisPoint[0] + 18, xAxisPoint[1] - 9];
      const c4 = [shape.x + 18, shape.y - 9];
      ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1])
        .closePath();
    },
  });
  const CubeTop = echarts.graphic.extendShape({
    shape: {
      x: 0,
      y: 0,
    },
    buildPath(ctx, shape) {
      const c1 = [shape.x, shape.y];
      const c2 = [shape.x + 18, shape.y - 9];
      const c3 = [shape.x + 9, shape.y - 18];
      const c4 = [shape.x - 9, shape.y - 9];
      ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1])
        .closePath();
    },
  });
  echarts.graphic.registerShape('CubeLeft', CubeLeft);
  echarts.graphic.registerShape('CubeRight', CubeRight);
  echarts.graphic.registerShape('CubeTop', CubeTop);
  const MAX = [200, 200, 200, 200, 200]
  const VALUE = [112, 30, 170,112,32]
  const catedata = ['党建办公室', '城管执法中队', '公共办公室','党建办公室', '城管执法中队']
  option = {
    // title: {
    //   text: '',
    //   // top: 32,
    //   // left: 18,
    //   textStyle: {
    //     color: '#ffffff',
    //     fontSize: '0.25rem',
    //   },
    // },
    grid: {
      left: 300 / 16 + 'rem',
      right: 300 / 16 + 'rem',
      bottom: 400 / 16 + 'rem',
      top: 4500 / 16 + 'rem',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: catedata,
      axisLine: {
        show: true,
        lineStyle: {
          color: '#11366e',
        },
      },
      offset: 1,
      axisTick: {
        show: false,
        length: 6,
        alignWithLabel: true,
        lineStyle: {
          color: '#7DFFFD',
        },
      },
      axisLabel: {
        fontSize: 12 / 16 + 'rem',
        color: '#ffffff',
      },
    },
    yAxis: {
      type: 'value',
      name: '（%）',
      nameTextStyle: {
        color: '#ffffff',
        fontSize: 12 / 16 + 'rem',
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#11366e',
        },
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        fontSize: 12 / 16 + 'rem',
        color: '#ffffff',
      },
      boundaryGap: ['0%', '20%'],
    },
    series: [{
      type: 'custom',
      renderItem(params, api) {
        const location = api.coord([api.value(0), api.value(1)]);
        return {
          type: 'group',
          children: [{
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
              fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#EE9572',
              },
              {
                offset: 1,
                color: 'rgba(7,29,97,.6)',
              },
              ]),
            },
          }, {
            type: 'CubeRight',
            shape: {
              api,
              xValue: api.value(0),
              yValue: api.value(1),
              x: location[0],
              y: location[1],
              xAxisPoint: api.coord([api.value(0), 0]),
            },
            style: {
              fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#EE9572',
              },
              {
                offset: 1,
                color: 'rgba(10,35,108,.7)',
              },
              ]),
            },
          }, {
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
              fill: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#EE9572',
              },
              {
                offset: 1,
                color: 'rgba(11,42,106,.8)',
              },
              ]),
            },
          }],
        };
      },
      data: MAX,
    }, {
      type: 'custom',
      renderItem: (params, api) => {
        const location = api.coord([api.value(0), api.value(1)]);
        return {
          type: 'group',
          children: [{
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
              fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#F72C5B',
              },
              {
                offset: 1,
                color: '#49BEE5',
              },
              ]),
            },
          }, {
            type: 'CubeRight',
            shape: {
              api,
              xValue: api.value(0),
              yValue: api.value(1),
              x: location[0],
              y: location[1],
              xAxisPoint: api.coord([api.value(0), 0]),
            },
            style: {
              fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#F72C5B',
              },
              {
                offset: 1,
                color: '#49BEE5',
              },
              ]),
            },
          }, {
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
              fill: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#F72C5B',
              },
              {
                offset: 1,
                color: '#49BEE5',
              },
              ]),
            },
          }],
        };
      },
      data: VALUE,
    },
    ],
  };