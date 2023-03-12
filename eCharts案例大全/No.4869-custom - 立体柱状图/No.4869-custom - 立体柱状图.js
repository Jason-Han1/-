
const xData = ['一月', '二月', '三月', '四月', '五月']
const colors = ['rgba(0,137,255,1.0)', 'rgba(0,25,255,1.0)', 'rgba(115,5,255,1.0)']
const yData = [70, 90, 100, 30, 150]
const yDataWidthStyle = []
const yDataMaxWithStyle = []
const max = Math.max(...yData)
const itemMax = {
  value: max,
  itemStyle: {
    color: 'rgba(0,137,255,.1)'
  }
}
yData.forEach((value, i) => {
  const color = colors[i % colors.length]
  const item = {
    value,
    itemStyle: { color }
  }
  yDataWidthStyle.push(item)
  yDataMaxWithStyle.push(itemMax)
})


// 绘制左侧面
const CubeLeft = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0
  },
  buildPath: function (ctx, shape) { // shape是从custom传入的
    const xAxisPoint = shape.xAxisPoint
    const c0 = [shape.x, shape.y]
    const c1 = [shape.x - 13, shape.y - 13]
    const c2 = [xAxisPoint[0] - 13, xAxisPoint[1] - 13]
    const c3 = [xAxisPoint[0], xAxisPoint[1]]
    ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath()
  }
})
// 绘制右侧面
const CubeRight = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0
  },
  buildPath: function (ctx, shape) {
    const xAxisPoint = shape.xAxisPoint
    const c1 = [shape.x, shape.y]
    const c2 = [xAxisPoint[0], xAxisPoint[1]]
    const c3 = [xAxisPoint[0] + 18, xAxisPoint[1] - 9]
    const c4 = [shape.x + 18, shape.y - 9]
    ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
  }
})
// 绘制顶面
const CubeTop = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0
  },
  buildPath: function (ctx, shape) {
    const c1 = [shape.x, shape.y]
    const c2 = [shape.x + 18, shape.y - 9]
    const c3 = [shape.x + 5, shape.y - 22]
    const c4 = [shape.x - 13, shape.y - 13]
    ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
  }
})
// 注册三个面图形
echarts.graphic.registerShape('CubeLeft', CubeLeft)
echarts.graphic.registerShape('CubeRight', CubeRight)
echarts.graphic.registerShape('CubeTop', CubeTop)
const MAX = [300, 300, 300, 300, 300]
option = {
          backgroundColor: "transparent",
          tooltip: {
            textStyle: {
              color: '#fff',
              fontStyle: 'normal',
              fontFamily: '微软雅黑',
              fontSize: 12,
            },
            trigger: 'axis',
            axisPointer: {
              lineStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: 'rgba(0, 255, 233,0)'
                  }, {
                    offset: 0.5,
                    color: 'rgba(255, 255, 255,1)',
                  }, {
                    offset: 1,
                    color: 'rgba(0, 255, 233,0)'
                  }],
                  global: false
                }
              },
            },
            formatter: function (params, ticket, callback) {
              const item = params[1]
              return item.name + ' : ' + item.value + '人';
            }
          },
          grid: {  //图表的上下左右的距离
            left: '1%',
            right: '4%',
            bottom: '10%',
            top: '20%',
            padding: '0 0 0 0',
            containLabel: true,
          },
          xAxis: {  //x轴的样式设置
            type: 'category',
            data: xData,
            axisLine: {
              show: false,
              lineStyle: {
                color: 'rgba(255, 168, 1,1.0)'
              }
            },
            offset: 20,
            axisTick: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              margin: 0,
              textStyle: {
                color: '#7B4D9F',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
              }
            }
          },
          yAxis: {  //y轴的样式设置
            type: 'value',
            name: "人数",
            nameTextStyle: {
              color: '#7B4D9F',
              fontSize: 15,
              offset: [2, -25]
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#7B4D9F'
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              fontSize: 16
            },
            boundaryGap: false
          },
          series: [
            { // 每个柱的颜色设置
              type: 'custom',
              renderItem: (params, api) => {
                const location = api.coord([api.value(0), api.value(1)])
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
                      xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                      fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: api.style().fill
                      },
                        {
                          offset: 1,
                          color: 'rgba(210, 218, 226,1.0)'
                        }
                      ])
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
                        fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0,
                          color: api.style().fill
                        },
                          {
                            offset: 1,
                            color: 'rgba(210, 218, 226,1.0)'
                          }
                        ])
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
                        fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0,
                          color: api.style().fill
                        },
                          {
                            offset: 1,
                            color: api.style().fill
                          }
                        ])
                      }
                    }
                  ]
                }
              },
              data: yDataMaxWithStyle
            },
            {
              type: 'custom',
              renderItem: (params, api) => {
                const location = api.coord([api.value(0), api.value(1)])
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
                      xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                      fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: api.style().fill
                      },
                        {
                          offset: 1,
                          color: 'rgba(210, 218, 226,1.0)'
                        }
                      ])
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
                        fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0,
                          color: api.style().fill
                        },
                          {
                            offset: 1,
                            color: 'rgba(210, 218, 226,1.0)'
                          }
                        ])
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
                        fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0,
                          color: api.style().fill
                        },
                          {
                            offset: 1,
                            color: api.style().fill
                          }
                        ])
                      }
                    }
                  ]
                }
              },
              data: yDataWidthStyle
            },
            {
              type: 'bar',
              label: {
                normal: {
                  show: true,
                  position: 'top',
                  fontSize: 14,
                  color: '#fff',
                  offset: [2, -25]
                }
              },
              itemStyle: {
                color: 'transparent'
              },
              tooltip: {},
              data: yData
            }
          ]
        }