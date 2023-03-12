const CubeLeft = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0
  },
  buildPath: function(ctx, shape) {
    const xAxisPoint = shape.xAxisPoint;
    const c0 = [shape.x, shape.y];
    const c1 = [shape.x - 7, shape.y - 7];
    const c2 = [xAxisPoint[0] - 7, xAxisPoint[1] - 7];
    const c3 = [xAxisPoint[0], xAxisPoint[1]];
    ctx
      .moveTo(c0[0], c0[1])
      .lineTo(c1[0], c1[1])
      .lineTo(c2[0], c2[1])
      .lineTo(c3[0], c3[1])
      .closePath();
  }
});
const CubeRight = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0
  },
  buildPath: function(ctx, shape) {
    const xAxisPoint = shape.xAxisPoint;
    const c1 = [shape.x, shape.y];
    const c2 = [xAxisPoint[0], xAxisPoint[1]];
    const c3 = [xAxisPoint[0] + 7, xAxisPoint[1] - 5];
    const c4 = [shape.x + 7, shape.y - 6];
    ctx
      .moveTo(c1[0], c1[1])
      .lineTo(c2[0], c2[1])
      .lineTo(c3[0], c3[1])
      .lineTo(c4[0], c4[1])
      .closePath();
  }
});
const CubeTop = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0
  },
  buildPath: function(ctx, shape) {
    const c1 = [shape.x, shape.y];
    const c2 = [shape.x + 7, shape.y - 6];
    const c4 = [shape.x - 7, shape.y - 7];
    ctx
      .moveTo(c1[0], c1[1])
      .lineTo(c2[0], c2[1])
      .lineTo(c4[0], c4[1])
      .closePath();
  }
});
let newData = [
        ['2016', 30],
        ['2017', 45],
        ['2018', 55],
        ['2019', 60],
        ['2020', 65]
      ]
echarts.graphic.registerShape('CubeLeft', CubeLeft);
echarts.graphic.registerShape('CubeRight', CubeRight);
echarts.graphic.registerShape('CubeTop', CubeTop);
let nameArr = newData.map(it => it[0]);
let values  = newData.map(it => it[1]);
const max = Math.max(...values);
let maxArr = Array.from({ length: newData.length }, () => Math.floor(max * 1.5));
const MAX = maxArr;
const VALUE = values;
let seriesOption = [
        {
          type: 'custom',
          zlevel: 1,
          legendHoverLink: false,
          renderItem: function(params, api) {
            const location = api.coord([api.value(0), api.value(1)]);
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
                    xAxisPoint: api.coord([api.value(0), 0])
                  },
                  style: {
                    fill: 'rgba(210, 210, 210, 1)'
                  },
                  silent: true
                },
                {
                  type: 'CubeRight',
                  shape: {
                    api,
                    xValue: api.value(0),
                    yValue: api.value(1),
                    x: location[0],
                    y: location[1],
                    xAxisPoint: api.coord([api.value(0), 0])
                  },
                  style: {
                    fill: 'rgba(174, 174, 174, 0.3)'
                  },
                  silent: true
                },
                {
                  type: 'CubeTop',
                  shape: {
                    api,
                    xValue: api.value(0),
                    yValue: api.value(1),
                    x: location[0],
                    y: location[1],
                    xAxisPoint: api.coord([api.value(0), 0])
                  },
                  style: {
                    fill: 'rgba(192, 192, 192, 0.3)'
                  },
                  silent: true
                }
              ]
            };
          },
          data: MAX
        },
        {
          type: 'custom',
          renderItem: (params, api) => {
            const location = api.coord([api.value(0), api.value(1)]);
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
                    xAxisPoint: api.coord([api.value(0), 0])
                  },
                  style: {
                    fill: 'rgba(41, 93, 173, 1)'
                  },
                  styleEmphasis: {
                    fill: 'rgba(196, 73, 48, 1)'
                  }
                },
                {
                  type: 'CubeRight',
                  shape: {
                    api,
                    xValue: api.value(0),
                    yValue: api.value(1),
                    x: location[0],
                    y: location[1],
                    xAxisPoint: api.coord([api.value(0), 0])
                  },
                  style: {
                    fill: 'rgba(123, 175, 255, 1)'
                  },
                  styleEmphasis: {
                    fill: 'rgba(244, 98, 61, 1)'
                  }
                },
                {
                  type: 'CubeTop',
                  shape: {
                    api,
                    xValue: api.value(0),
                    yValue: api.value(1),
                    x: location[0],
                    y: location[1],
                    xAxisPoint: api.coord([api.value(0), 0])
                  },
                  style: {
                    fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {
                        offset: 0,
                        color: 'rgba(123, 175, 255, 1)'
                      },
                      {
                        offset: 1,
                        color: 'rgba(255, 255, 255, 1)'
                      }
                    ])
                  },
                  styleEmphasis: {
                    fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {
                        offset: 0,
                        color: 'rgba(244, 98, 61, 1)'
                      },
                      {
                        offset: 1,
                        color: 'rgba(255, 255, 255, 1)'
                      }
                    ])
                  }
                }
              ]
            };
          },
          zlevel: 3,
          tooltip: {
            show: true
          },
          data: VALUE
        },
        {
          type: 'bar',
          zlevel: 2,
          label: {
            normal: {
              show: true,
              position: 'top',
              fontSize: 20,
              color: 'rgba(41, 93, 173, 1)',
              offset: [2, -15]
            },
            emphasis: {
              show: true,
              position: 'top',
              fontSize: 20,
              color: 'rgba(203, 37, 1, 1)',
              offset: [2, -15]
            }
          },
          stack: true,
          itemStyle: {
            color: 'transparent'
          },
          tooltip: {},
          data: VALUE
        }
      ];
      
option = {
        grid: {
          left: 50,
          right: 20,
          bottom: 50,
          top: 90
        },
        xAxis: {
          name: '',
          nameGap: 8,
          nameTextStyle: {
            color: '#666666',
            fontSize: 16,
            padding: [75, 30, 15, 0]
          },
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#777777'
            }
          },

          axisLabel: {
            fontSize: 16,
            color: '#666666',
            fontWeight: 600,
            margin: 18,
            interval: 0,
            formatter: function(params) {
              let res = '';
              if (params.length > 5) {
                res = params.substring(0, 5) + '\n' + params.substring(5);
              } else {
                res = params;
              }
              return res;
            }
          },
          axisTick: {
            show: false
          },
          data: nameArr
        },
        yAxis: [
          {
            name: this.yTitle,
            nameGap: 8,
            nameTextStyle: {
              fontSize: 14,
              padding: [0, 40, 30, 0],
              color: '#666666'
            },
            minInterval: 1,
            type: 'value',
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: '#666666',
              fontSize: 16
            },
            splitNumber: 4,
            splitLine: {
              lineStyle: {
                type: 'dashed',
                color: 'rgba(255, 255, 255, 0.15)'
              }
            }
          }
        ],
        series: seriesOption
      };


