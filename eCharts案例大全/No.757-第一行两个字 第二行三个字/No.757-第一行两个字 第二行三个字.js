var CubeLeft = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function (ctx, shape) {
    const xAxisPoint = shape.xAxisPoint;
    const c0 = [shape.x, shape.y];
    const c1 = [shape.x - 4, shape.y - 4];
    const c2 = [xAxisPoint[0] - 4, xAxisPoint[1] - 4];
    const c3 = [xAxisPoint[0], xAxisPoint[1]];
    ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath();
  },
});
let CubeRight = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function (ctx, shape) {
    const xAxisPoint = shape.xAxisPoint;
    const c1 = [shape.x, shape.y];
    const c2 = [xAxisPoint[0], xAxisPoint[1]];
    const c3 = [xAxisPoint[0] + 13, xAxisPoint[1] - 4];
    const c4 = [shape.x + 13, shape.y - 4];
    ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
  },
});
let CubeTop = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function (ctx, shape) {
    const c1 = [shape.x, shape.y];
    const c2 = [shape.x + 13, shape.y - 4];
    const c3 = [shape.x + 9, shape.y - 9];
    const c4 = [shape.x - 4, shape.y - 4];
    ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
  },
});
echarts.graphic.registerShape('CubeLeft', CubeLeft);
echarts.graphic.registerShape('CubeRight', CubeRight);
echarts.graphic.registerShape('CubeTop', CubeTop);
var seriesData1 = [18, 29, 45, 66, 20, 29, 45, 66, 20];
var xAxisData = [
    '联防协议',
    '安防责任书',
    '小组活动',
    '教育培训',
    '预案演练',
    '排班',
    '要害岗位',
    '安全信息员',
    '信息员',
  ],
  option = {
    backgroundColor: '#012366',
    title: {
      text: '',
      top: 32,
      left: 18,
      textStyle: {
        color: '#00F6FF',
        fontSize: 24,
      },
    },
    grid: {
      left: 20,
      right: 40,
      bottom: '19%',
      top: 50,
      containLabel: true,
    },
    xAxis: {
      // type: 'category',
      data: xAxisData,
      axisLine: {
        show: false,
        lineStyle: {
          color: 'white',
        },
      },
      offset: 20,
      axisTick: {
        show: false,
        length: 9,
        alignWithLabel: true,
        lineStyle: {
          color: '#7DFFFD',
        },
      },
      axisLabel: {
        show: true,
        interval: 0,
        align: 'center',
        formatter: function (params, index) {
          var arr = [];
          arr.push(params);

          for (var i = 0; i < arr.length; i++) {
            if (arr[i].length == 4 || arr[i].length > 4) {
              var tem = arr[i].substring(0, 2) + '\n' + arr[i].substring(2);
              return '{a|' + seriesData1[index] + '}' + '\n' + '{b|' + tem + '}';
            } else {
              return '{a|' + seriesData1[index] + '}' + '\n' + '{b|' + arr[i] + '}';
            }
          }
        },
        textStyle: {
          fontSize: 14,
          color: '#ffffff',
          rich: {
            a: {
              fontSize: 18,
              color: '#ffffff',
            },
            b: {
              height: 25,
              fontSize: 14,
              color: '#ffffff',
            },
          },
        },
      },
    },
    yAxis: {
      type: 'value',
      axisLine: {
        show: false,
        lineStyle: {
          color: 'white',
        },
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
        fontSize: 16,
      },
      boundaryGap: ['20%', '20%'],
    },
    series: [
      {
        type: 'custom',
        renderItem: (params, api) => {
          const location = api.coord([api.value(0), api.value(1)]);
          let maxColor = [
            {
              start: 'rgba(22, 199, 134, .2)',
              end: 'rgba(0, 255, 60, .2)',
            },
            {
              start: 'rgba(19, 200, 155, .2)',
              end: 'rgba(40, 252, 160, .2)',
            },
            {
              start: 'rgba(36, 243, 206, .2)',
              end: 'rgba(13, 188, 174, .2)',
            },
            {
              start: 'rgba(42, 252, 240, .2)',
              end: 'rgba(10, 172, 187, .2)',
            },
            {
              start: 'rgba(5, 166, 217, .2)',
              end: 'rgba(54, 209, 234, .2)',
            },
            {
              start: 'rgba(11, 60, 250, .2)',
              end: 'rgba(55, 100, 253, .2)',
            },
            {
              start: 'rgba(88, 31, 214, .2)',
              end: 'rgba(141, 71, 255, .2)',
            },
            {
              start: 'rgba(99, 72, 213, .2)',
              end: 'rgba(198, 98, 250, .2)',
            },
            {
              start: 'rgba(153, 30, 204, .2)',
              end: 'rgba(246, 7, 247, .2)',
            },
          ];

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
                  fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: maxColor[params.dataIndex].end,
                    },
                    {
                      offset: 1,
                      color: maxColor[params.dataIndex].start,
                    },
                  ]),
                },
              },
              {
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
                  fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: maxColor[params.dataIndex].end,
                    },
                    {
                      offset: 1,
                      color: maxColor[params.dataIndex].start,
                    },
                  ]),
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
                  fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: maxColor[params.dataIndex].end,
                    },
                    {
                      offset: 1,
                      color: maxColor[params.dataIndex].start,
                    },
                  ]),
                },
              },
            ],
          };
        },
        data: [100, 100, 100, 100, 100, 100, 100, 100, 100],
      },
      {
        type: 'custom',
        renderItem: (params, api) => {
          const location = api.coord([api.value(0), api.value(1)]);
          let valueColor = [
            {
              start: 'rgba(22, 199, 134, 1)',
              end: 'rgba(0, 255, 60, 1)',
            },
            {
              start: 'rgba(19, 200, 155, 1)',
              end: 'rgba(40, 252, 160, 1)',
            },
            {
              start: 'rgba(36, 243, 206, 1)',
              end: 'rgba(13, 188, 174, 1)',
            },
            {
              start: 'rgba(42, 252, 240, 1)',
              end: 'rgba(10, 172, 187, 1)',
            },
            {
              start: 'rgba(5, 166, 217, 1)',
              end: 'rgba(54, 209, 234, 1)',
            },
            {
              start: 'rgba(11, 60, 250, 1)',
              end: 'rgba(55, 100, 253, 1)',
            },
            {
              start: 'rgba(88, 31, 214, 1)',
              end: 'rgba(141, 71, 255, 1)',
            },
            {
              start: 'rgba(99, 72, 213, 1)',
              end: 'rgba(198, 98, 250, 1)',
            },
            {
              start: 'rgba(153, 30, 204, 1)',
              end: 'rgba(246, 7, 247, 1)',
            },
          ];
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
                  fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: valueColor[params.dataIndex].end,
                    },
                    {
                      offset: 1,
                      color: valueColor[params.dataIndex].start,
                    },
                  ]),
                },
              },
              {
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
                  fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: valueColor[params.dataIndex].end,
                    },
                    {
                      offset: 1,
                      color: valueColor[params.dataIndex].start,
                    },
                  ]),
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
                  fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: valueColor[params.dataIndex].end,
                    },
                    {
                      offset: 1,
                      color: valueColor[params.dataIndex].start,
                    },
                  ]),
                },
              },
            ],
          };
        },
        data: [18, 29, 45, 66, 20, 29, 45, 66, 20],
      },
    ],
  };
