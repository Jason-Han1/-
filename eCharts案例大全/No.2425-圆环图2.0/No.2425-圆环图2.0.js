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
      radius: '192%'
    },
    series: [
      { // 绘制最外侧灰色的圆弧
        z: 1,
        type: 'pie',
        radius: ['98%', '96%'],
        center: ['50%', '50%'],
        data: [{
          value: 0,
          itemStyle: {
            normal: {
              color: '#eee'
            }
          },
          label: {
            show: true,
            formatter: [`{a|${item.value !== '--' ? (Math.abs(item.value) * 100).toFixed(2) + '%' : '--'}}`, `{b|${item.name}}`, `{d|}`, `{c|${item.status}}`].join('\n'),
            position: 'center',
            rich: {
              a: {
                fontSize: 72,
                color: '#d0021b',
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
                backgroundColor: 'rgba(208,2,27,0.5)',
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
      { // 绘制最里侧灰色的圆弧
        type: 'pie',
        center: ['50%', '50%'],
        radius: ['84%', '82%'],
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
            color: '#eee',
            emphasis: { // 鼠标移入不高亮
              color: '#eee'
            }
          }
        }]
      },
      { // 绘制最外侧带颜色的圆弧
        z: 3,
        type: 'bar',
        data: [{
          value: (Math.abs(item.value) * 100),
          itemStyle: {
            normal: {
              color: '#d0021b'
            }
          }
        }],
        coordinateSystem: 'polar',
        barWidth: 4
      }
    ]
  }
