// 初始化数据
const dataArr = 95.85
const dataX = 100
option = {
    backgroundColor:'#061530',
    backgroundStyle: {
      borderWidth: 1,
      color: 'transparent'
    },
    title: [
      {
        text: `${dataArr} %`,
        bottom: '8%',
        left: 'center',
        textStyle: {
          fontSize: '74',
          color: '#ffff',
          fontWeight: 800,
        },
        triggerEvent: true
      }
    ],

    legend: {
      show: false
    },
    series: [
      {
        name: '最外部进度条',
        type: 'gauge',
        radius: '99%',
        splitNumber: 10,
        axisLine: {
          lineStyle: {
            color: [
              [
                dataArr / dataX,
                {
                  type: 'linear',
                  x: 0,
                  y: 1,
                  x2: 0.5,
                  y2: 0.5,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgba(0,0,0,0)' // 0% 处的颜色
                    },
                    {
                      offset: 0.8,
                      color: '#195b9d' // 100% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#0a2256' // 100% 处的颜色
                    }
                  ],
                  global: false // 缺省为 false
                }
              ],
              [1, '#083158']
            ],
            width: 10
          }
        },
        axisLabel: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        itemStyle: {
          show: false
        },
        detail: {
          show: false
        },
        title: {
          // 标题
          show: false
        },
        data: [
          {
            name: 'title',
            value: dataArr
          }
        ],
        pointer: {
          show: false
        },
        animationDuration: 4000
      },

      {
        name: '刻度尺',
        type: 'gauge',
        radius: '88%',
        splitNumber: 10, // 刻度数量
        min: 0, // 最小刻度
        max: dataX, // 最大刻度
        // 仪表盘轴线相关配置
        axisLine: {
          lineStyle: {
            color: [
              [
                1,
                {
                  type: 'radial',
                  x: 0.5,
                  y: 0.6,
                  r: 0.6,
                  colorStops: [
                    {
                      offset: 0.85,
                      color: '#031F46' // 0% 处的颜色
                    },
                    {
                      offset: 0.93,
                      color: '#060d25' // 100% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#12D7EF' // 100% 处的颜色
                    }
                  ]
                }
              ]
            ],
            width: 700
          }
        },
        // 分隔线
        splitLine: {
          show: true,
          length: 34,
          lineStyle: {
            width: 3,
            color: '#12E5FE'
          }
        },
        // 刻度线
        axisTick: {
          show: true,
          splitNumber: 20,
          length: 10,
          lineStyle: {
            color: '#12E5FE',
            width: 2,
          },
        },
        // 刻度标签
        axisLabel: {
          distance: 2,
          color: '#CEF3FE',
          fontSize: '16',
          fontWeight: 600,
        },
        detail: {
          show: false
        }
      },
      {
        name: '外部指针',
        type: 'gauge',
        radius: '90%',
        axisLine: {
          lineStyle: {
            color: [
              [dataArr / dataX - 0.001, 'rgba(0,0,0,0)'],
              [dataArr / dataX + 0.003, '#e43c59'],
              [1, 'rgba(0,0,0,0)']
            ],
            width: 33
          }
        },
        axisLabel: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        itemStyle: {
          show: false
        },
        detail: {
          show: false
        },
        title: {
          // 标题
          show: false
        },
        data: [
          {
            name: 'title',
            value: dataArr
          }
        ],
        pointer: {
          show: false
        }
      },
      {
        name: '内层带指针',
        type: 'gauge',
        radius: '60%',
        splitNumber: 10, // 刻度数量
        min: 0, // 最小刻度
        max: dataX, // 最大刻度
        // 仪表盘轴线相关配置
        axisLine: {
          lineStyle: {
            color: [
              [
                1,
                {
                  type: 'radial',
                  x: 0.5,
                  y: 0.59,
                  r: 0.6,
                  colorStops: [
                    {
                      offset: 0.72,
                      color: '#032046'
                    },
                    {
                      offset: 0.94,
                      color: '#086989'
                    },
                    {
                      offset: 0.98,
                      color: '#0FAFCB'
                    },
                    {
                      offset: 1,
                      color: '#0EA4C1'
                    }
                  ]
                }
              ]
            ],
            width: 1000
          }
        },
        // 分隔线
        splitLine: {
          show: false
        },
        // 刻度线
        axisTick: {
          show: false
        },
        // 刻度标签
        axisLabel: {
          show: false
        },
        // 仪表盘指针
        pointer: {
          show: true,
          length: '95%',
          width: 5 // 指针粗细
        },
        // 仪表盘指针样式
        itemStyle: {
          color: '#01eaf8'
        },
        data: [
          {
            value: dataArr
          }
        ],
        detail: {
          show: false
        }
      },

      // 中间半圆装饰
      {
        type: 'gauge',
        radius: '110%', // 大小
        center: ['50%', '127%'],
        axisLine: {
          show: true,
          lineStyle: {
            // 轴线样式
            width: 4, // 宽度
            color: [
              [
                1,
                {
                  type: 'radial',
                  x: 0.5,
                  y: 0,
                  r: 0.6,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#00f3f9' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#000' // 100% 处的颜色
                    }
                  ]
                }
              ]
            ]
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
      }
    ]
};
