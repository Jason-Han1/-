const item = {
    value: 0.75,
    status: '这是我的标签',
    name: '这是我的名称'
}

option = {
    angleAxis: {
      max: 100,
      clockwise: false,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      splitLine: {
        show: false
      }
    },
    radiusAxis: {
      type: 'category',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      splitLine: {
        show: false
      }
    },
    polar: {
      center: ['50%', '50%'],
      radius: '188%'
    },
    series: [
      { // 绘制最外侧灰色的圆弧
        z: 1,
        type: 'pie',
        radius: ['98%', '90%'],
        center: ['50%', '50%'],
        data: [{
          value: 0,
          itemStyle: {
            normal: {
              color: '#eee'
            }
          },
          label: {
            show: false
          },
          labelLine: {
            normal: {
              smooth: true,
              lineStyle: {
                width: 0
              }
            }
          },
          hoverAnimation: false
        },
        {
          label: {
            show: false
          },
          labelLine: {
            normal: {
              smooth: true,
              lineStyle: {
                width: 0
              }
            }
          },
          value: 100 - Math.floor((Math.abs(item.value) * 100)),
          hoverAnimation: false,
          itemStyle: {
            color: '#eee',
            emphasis: { // 鼠标移入不高亮
              color: '#eee'
            }
          }
        }
        ]
      },
      { // 绘制最外侧白色的圆
        type: 'pie',
        z: 3,
        center: ['50%', '50%'],
        radius: ['90%', '0%'],
        data: [{
          label: {
            show: false
          },
          labelLine: {
            normal: {
              smooth: true,
              lineStyle: {
                width: 0
              }
            }
          },
          value: 0,
          hoverAnimation: false,
          itemStyle: {
            color: '#fff',
            shadowOffsetY: 3,
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10,
            emphasis: { // 鼠标移入不高亮
              color: '#fff'
            }
          }
        }]
      },
      { // 绘制最里侧白色的圆
        type: 'pie',
        z: 4,
        center: ['50%', '50%'],
        radius: ['50%', '0%'],
        data: [{
          label: {
            show: true,
            formatter: [`{b|${item.name}}`, `{d|}`, `{a|${item.value !== '--' ? (Math.abs(item.value) * 100).toFixed(2) + '%' : '--'}}`,  `{c|${item.status}}`].join('\n'),
            position: 'center',
            rich: {
              a: {
                fontSize: 72,
                color: '#ee011c',
                textAlign: 'center',
                padding: [0, 0, 12, 0]
              },
              b: {
                fontSize: 36,
                color: '#999',
                padding: [0, 0, 12, 0]
              },
              c: {
                padding: [8, 6, 6, 6],
                backgroundColor: 'rgba(74,144,226,0.5)',
                fontSize: 20,
                color: '#fff'
              }
            }
          },
          labelLine: {
            normal: {
              smooth: true,
              lineStyle: {
                width: 0
              }
            }
          },
          value: 0,
          hoverAnimation: false,
          itemStyle: {
            color: '#fff',
            shadowOffsetY: 3,
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10,
            emphasis: { // 鼠标移入不高亮
              color: '#fff'
            }
          }
        }]
      },
      { // 绘制最外侧带颜色的圆弧
        z: 2,
        type: 'bar',
        roundCap: true,
        data: [{
          value: (Math.abs(item.value) * 100),
          itemStyle: {
            normal: {
              shadowOffsetY: 2,
              shadowColor: 'rgba(0, 0, 0, 0.39)',
              shadowBlur: 10,
              color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: '#ee011c' // color at 0% position
                    }, {
                        offset: 1, color: '#4a90e2' // color at 100% position
                    }],
                    global: false // false by default
                }
            }
          }
        }],
        coordinateSystem: 'polar',
        barWidth: 30
      }
    ]
  }
