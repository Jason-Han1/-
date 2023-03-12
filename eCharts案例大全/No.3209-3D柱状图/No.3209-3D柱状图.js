const CubeLeft = echarts.graphic.extendShape({
        shape: {
          x: 0,
          y: 0,
        },
        buildPath: function (ctx, shape) {
          const xAxisPoint = shape.xAxisPoint;
          const c0 = [shape.x, shape.y];
          const c1 = [shape.x - 9, shape.y - 9];
          const c2 = [xAxisPoint[0] - 9, xAxisPoint[1] - 9];
          const c3 = [xAxisPoint[0], xAxisPoint[1]];
          ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath();
        },
      });
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
      const CubeTop = echarts.graphic.extendShape({
        shape: {
          x: 0,
          y: 0,
        },
        buildPath: function (ctx, shape) {
          const c1 = [shape.x, shape.y];
          const c2 = [shape.x + 18, shape.y - 9];
          const c3 = [shape.x + 9, shape.y - 18];
          const c4 = [shape.x - 9, shape.y - 9];
          ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
        },
      });
      echarts.graphic.registerShape('CubeLeft', CubeLeft);
      echarts.graphic.registerShape('CubeRight', CubeRight);
      echarts.graphic.registerShape('CubeTop', CubeTop);
      const VALUE = [5, 11, 6, 3, 14, 12, 5];
       option = {
        backgroundColor: '#012366',
        grid: {
          left: '5%',
          right: 0,
          bottom: '3%',
          top: '10%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          axisLine: {
            show: true,
            lineStyle: {
              color: 'white',
            },
          },
          offset: 10,
          axisTick: {
            show: false,
            length: 9,
            alignWithLabel: true,
            lineStyle: {
              color: '#7DFFFD',
            },
          },
          axisLabel: {
            fontSize: 20,
            color: '#c1cadf',
          },
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: true,
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
            fontSize: 20,
            color: '#c1cadf',
          },
          boundaryGap: ['20%', '20%'],
        },
        series: [
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
                      xAxisPoint: api.coord([api.value(0), 0]),
                    },
                    style: {
                      fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                          offset: 0,
                          color: '#3a85ba',
                        },
                        {
                          offset: 1,
                          color: '#3a85ba',
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
                          color: '#4cb6fe',
                        },
                        {
                          offset: 1,
                          color: '#4cb6fe',
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
                          color: '#39e3ff',
                        },
                        {
                          offset: 1,
                          color: '#39e3ff',
                        },
                      ]),
                    },
                  },
                ],
              };
            },
            data: VALUE,
          },
          // {
          //   type: 'bar',
          //   label: {
          //     normal: {
          //       show: true,
          //       position: 'top',
          //       fontSize: 16,
          //       color: '#fff',
          //       offset: [2, -25],
          //     },
          //   },
          //   itemStyle: {
          //     color: 'transparent',
          //   },
          //   tooltip: {},
          //   data: VALUE,
          // },
        ],
      };