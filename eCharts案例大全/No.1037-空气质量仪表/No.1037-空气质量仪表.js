option = {
          series: [
            {
              type: 'gauge',
              center: ['50%', '55%'],
              radius: '106', // 1行3个
              splitNumber: 10,
              min: 0,
              max: 60,
              startAngle: 200,
              endAngle: -20,
              itemStyle: {
                color: 'rgba(102, 255, 255, 1)',
                shadowColor: 'rgba(102, 255, 255,0.45)',
                shadowBlur: 10,
              },
              progress: {
                show: true,
                width: 5,
              },
              axisTick: {
                show: false,
              }, //刻度样式
              splitLine: {
                show: false,
              }, //分隔线样式
              axisLine: {
                show: false,
              },

              axisLabel: {
                show: false,
              },
              pointer: {
                show: 0,
              },
              detail: {
                show: 0,
              },
              data: [
                {
                  value: 25,
                },
              ],
            },
            {
              type: 'gauge',
              center: ['50%', '55%'],
              radius: '109', // 1行3个
              splitNumber: 10,
              min: 0,
              max: 61,
              startAngle: 200,
              endAngle: -20,

              axisTick: {
                show: false,
              }, //刻度样式
              splitLine: {
                show: false,
              }, //分隔线样式
              axisLine: {
                show: true,

                lineStyle: {
                  width: 16,
                  color: [[1, 'rgba(51, 255, 187, 0.4)']],
                },
              },

              axisLabel: {
                show: false,
              },
              pointer: {
                show: 0,
              },
              detail: {
                show: 0,
              },
            },

            {
              type: 'gauge',
              center: ['50%', '55%'],
              radius: '93', // 1行3个
              splitNumber: 10,
              min: 0,
              max: 100,
              startAngle: 200,
              endAngle: -20,
              axisLine: {
                // 坐标轴线
                lineStyle: {
                  // 属性lineStyle控制线条样式
                  color: [
                    [
                      100 / 100,
                      new echarts.graphic.RadialGradient(0.5, 0.6, 1, [
                        {
                          offset: 0,
                          color: 'rgba(0, 0, 0,0)',
                        },
                        {
                          offset: 1,
                          color: ' rgba(6, 205, 178, 1)',
                        },
                      ]),
                    ],
                    [1, 'rgba(255,255,255, 0)'],
                  ],
                  fontSize: 20,
                  width: 50,
                  opacity: 1, //刻度背景宽度
                },
              },

              splitLine: {
                show: false,
              },
              axisLabel: {
                show: false,
              },
              pointer: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              detail: {
                show: 0,
              },
            },
            {
              type: 'gauge',
              center: ['50%', '55%'],
              radius: 125, // 1行3个
              splitNumber: 6,
              min: 0,
              max: 60,
              startAngle: 200,
              endAngle: -20,
              axisTick: {
                splitNumber: 15,
                show: true,
                lineStyle: {
                  color: ' rgba(1, 247, 249, .5)',
                  width: 0.5,
                },
                length: 8,
              }, //刻度样式
              splitLine: {
                show: true,
                length: 40,

                lineStyle: {
                  color: 'rgb(0, 0, 0)',
                  width: 1,
                },
              }, //分隔线样式
              axisLine: {
                show: false,
              },

              axisLabel: {
                show: true,
                distance: 2,
                textStyle: {
                  color: '#fff',
                  fontSize: '14',
                },
              },
              pointer: {
                show: 0,
              },
              detail: {
                show: 0,
              },
            },

            {
              type: 'gauge',
              center: ['50%', '55%'],
              radius: 111,
              startAngle: 200,
              endAngle: -20,
              min: 0,
              max: 60,
              itemStyle: {
                color: [
                  [
                    100 / 100,
                    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                      { offset: 0, color: 'rgba(51, 255, 187, 0.1)' },
                      { offset: 1, color: 'rgba(51, 255, 187, 1)' },
                    ]),
                  ],
                  [1, 'rgba(255,255,255, 0)'],
                ],
              },
              progress: {
                show: true,
                width: 2,
                itemStyle: {
                  color: 'rgba(255, 255, 255, 0.6)',
                },
              },

              pointer: {
                icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
                width: 2,
                length: '99%',
                offsetCenter: [0, 0],
                itemStyle: {
                  color: {
                    type: 'line',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: 'rgba(255, 255, 255, 0.6)', // 100% 处的颜色
                      },

                      {
                        offset: 1,
                        color: 'rgba(255, 255, 255, 0)', // 0% 处的颜色  #000613','#00334f', '#77f0ff'
                      },
                    ],
                  },
                },
              },
              axisLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              splitLine: {
                show: false,
              },
              axisLabel: {
                show: false,
              },
              detail: {
                valueAnimation: true,
                width: '100%',
                offsetCenter: [0, 0],
                fontSize: 34,
                fontWeight: 'normal',
                color: 'rgba(255, 236, 140, 1)',
                formatter: '{value}\n{hr|}\n{b|一级优}',
                rich: {
                  a: {
                    fontSize: 18,
                    lineHeight: 10,
                    align: 'center',
                  },
                  hr: {
                    borderColor: 'rgba(102, 255, 255, 1)',
                    width: 60,
                    borderWidth: 1.2,
                    height: 1,
                    lineHeight: 10,
                    align: 'center',
                  },
                  b: {
                    fontSize: 19,
                    color: '#fff',
                    lineHeight: 20,
                    align: 'center',
                    fontWeight: 500,
                  },
                },
              },
              data: [
                {
                  value: 25,
                },
              ],
            },
            {
              type: 'gauge',
              center: ['50%', '55%'],
              radius: 54,
              startAngle: 0,
              endAngle: 360,
              splitLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              axisLabel: {
                show: false,
                distance: 50,
              },
              axisLine: {
                lineStyle: {
                  width: 3.24,
                  color: [[1, 'rgba(1, 247, 249, .4)']],
                },
              },
              pointer: {
                show: false,
              },
            },
            {
              type: 'gauge',
              center: ['50%', '55%'],
              radius: 46,
              startAngle: 0,
              endAngle: 360,
              splitLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              axisLabel: {
                show: false,
                distance: 50,
              },
              axisLine: {
                lineStyle: {
                  width: 1.2,
                  color: [[1, 'rgba(1, 247, 249, .4)']],
                },
              },
              pointer: {
                show: false,
              },
            },
          ],
        };
