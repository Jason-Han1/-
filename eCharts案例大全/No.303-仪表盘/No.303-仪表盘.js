      var colorLeft = '#00FCF7';
      var colorRight = '#5098ed';
      var colorLeftAlpha = ['#00FCF788', '#00FCF70c'];
      var colorRightAlpha = ['#5098ed88', '#5098ed08'];
      var value = 88
      var data = {
          value: value,
          percent: (value / 100).toFixed(2)
      };

 
      // 指定图表的配置项和数据
      var option = {
          backgroundColor: '#040d2e',
          series: [
              // 外侧灰色轴线
              {
                  type: "gauge",
                  radius: "98%", // 位置
                  center: ["50%", "70%"],
                  min: 0,
                  max: 100,
                  startAngle: 180,
                  endAngle: 0,
                  axisLine: {
                      show: true,
                      lineStyle: {
                          // 轴线样式
                          width: 4, // 宽度
                          color: [
                              [1, "rgba(229,229,229,0.3)"]
                          ] // 颜色
                      }
                  },
                  axisTick: {
                      // 刻度
                      show: false
                  },
                  splitLine: {
                      // 分割线
                      show: false
                  },
                  axisLabel: {
                      // 刻度标签
                      show: false
                  },
                  pointer: {
                      // 仪表盘指针
                      show: false
                  },
                  detail: {
                      // 仪表盘详情
                      show: false
                  }
              },
              // 内侧刻度
              {
                  type: "gauge",
                  radius: "85%", // 位置
                  center: ["50%", "70%"],
                  min: 0,
                  max: 100,
                  startAngle: 180,
                  endAngle: 0,
                  axisLine: {
                      show: true,
                      lineStyle: {
                          // 轴线样式
                          width: 120, // 宽度
                          color: [
                              [
                                  data.percent,
                                  new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                          offset: 0,
                                          color: colorLeftAlpha[0]
                                      },
                                      {
                                          offset: 1,
                                          color: colorLeftAlpha[1]
                                      }
                                  ])
                                  // new echarts.graphic.RadialGradient(.5, 1, 2, [
                                  //   {
                                  //     offset: 1,
                                  //     color: "rgba(80, 152, 237,0.9)"
                                  //   },
                                  //   {
                                  //     offset: 0.6,
                                  //     color: "rgba(80, 152, 237,0.7)"
                                  //   },
                                  //   {
                                  //     offset: 0.4,
                                  //     color: "rgba(80, 152, 237,0.1)"
                                  //   },
                                  //   {
                                  //     offset: 0,
                                  //     color: "rgba(80, 152, 237,0.01)"
                                  //   }
                                  // ])
                              ],
                              [
                                  1,
                                  new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                          offset: 0,
                                          color: colorRightAlpha[0]
                                      },
                                      {
                                          offset: 1,
                                          color: colorRightAlpha[1]
                                      }
                                  ])
                              ]
                          ] // 颜色
                      }
                  },
                  axisTick: {
                      // 刻度
                      show: true,
                      splitNumber: 2,
                      length: 10
                  },
                  splitLine: {
                      // 分割线
                      show: false
                  },
                  axisLabel: {
                      // 刻度标签
                      show: false
                  },
                  pointer: {
                      // 仪表盘指针
                      show: false
                  },
                  detail: {
                      // 仪表盘详情
                      show: false
                  }
              },
              // 中间白色半圆
              {
                  type: "gauge",
                  radius: "40%", // 位置
                  center: ["50%", "70%"],
                  min: 0,
                  max: 100,
                  startAngle: 180,
                  endAngle: 0,
                  axisLine: {
                      show: true,
                      lineStyle: {
                          // 轴线样式
                          width: 120, // 宽度
                          color: [
                              [
                                  1,
                                  new echarts.graphic.RadialGradient(.5, 1, 1, [{
                                          offset: 1,
                                          color: "rgba(229, 229, 229,0.15)"
                                      },
                                      {
                                          offset: 0.72,
                                          color: "rgba(229, 229, 229,0.05)"
                                      },
                                      {
                                          offset: 0.7,
                                          color: "rgba(229, 229, 229,0.4)"
                                      },
                                      {
                                          offset: 0.401,
                                          color: "rgba(229, 229, 229,0.05)"
                                      },
                                      {
                                          offset: 0.4,
                                          color: "rgba(229, 229, 229,0.8)"
                                      },
                                      {
                                          offset: 0,
                                          color: "rgba(229, 229, 229,0.8)"
                                      }
                                  ])
                              ]
                          ], // 颜色
                      }
                  },
                  axisTick: {
                      // 刻度
                      show: false
                  },
                  splitLine: {
                      // 分割线
                      show: false
                  },
                  axisLabel: {
                      // 刻度标签
                      show: false
                  },
                  pointer: {
                      // 仪表盘指针
                      show: false
                  },
                  detail: {
                      // 仪表盘详情
                      show: false
                  }
              },
              // 内侧轴线
              {
                  type: "gauge",
                  radius: "90%", // 位置
                  center: ["50%", "70%"],
                  min: 0,
                  max: 100,
                  startAngle: 180,
                  endAngle: 0,
                  axisLine: {
                      show: true,
                      lineStyle: {
                          // 轴线样式
                          width: 20, // 宽度
                          color: [
                              [data.percent, colorLeft],
                              [1, colorRight]
                          ], // 颜色

                      }
                  },
                  pointer: {
                      // 仪表盘指针
                      show: false,
                  },
                  axisTick: {
                      // 刻度
                      show: false
                  },
                  splitLine: {
                      // 分割线
                      show: false
                  },
                  axisLabel: {
                      // 刻度标签
                      show: false
                  },
                  detail: {
                      // 仪表盘详情
                      show: false
                  }
              },
              // 指针
              {
                  type: "gauge",
                  radius: "80%", // 位置
                  center: ["50%", "70%"],
                  min: 0,
                  max: 100,
                  startAngle: 180,
                  endAngle: 0,
                  axisLine: {
                      show: false,
                  },
                  data: [{
                      value: data.value,
                      name: '项目数'
                  }],
                  pointer: {
                      // 仪表盘指针
                      show: true,
                  },
                  itemStyle: {
                      color: "rgba(255,255,255,0)",
                      borderColor: "#f3f5f6",
                      borderWidth: "4",
                      borderType: "solid"
                  },
                  axisTick: {
                      // 刻度
                      show: false
                  },
                  splitLine: {
                      // 分割线
                      show: false
                  },
                  axisLabel: {
                      // 刻度标签
                      show: false
                  },
                  detail: {
                      // 仪表盘详情
                      show: true,
                      formatter: function(value) {
                          return value + '%'
                      },
                      offsetCenter: ['0%', '30%'],
                      fontSize: '18px',
                      color: '#08b5d6'
                  },
                  title: {
                      show: true,
                      offsetCenter: [0, '50%'],
                      color: '#08b5d6'
                  }
              },
          ]
      };