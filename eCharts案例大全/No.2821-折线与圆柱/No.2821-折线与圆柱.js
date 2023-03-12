var data1 = [4200, 5000, 4300, 6100, 3900]
      var data2 = [15, 9, 11, 16, 15]
option = {
    backgroundColor:'#08132f',
    tooltip: {
      trigger: 'item'
    },
    grid: {
      left: '10%',
      right: '10%',
      top: '15%',
      bottom: '15%'
    },
    xAxis: {
      data: ['2016', '2017', '2018', '2019', '2020'],
      show: true,
      axisTick: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          type: 'solid',
          color: 'gray',
          opacity: 1
        }
      },
      // lineStyle: {
      //     show: true,
      //     type: 'solid'
      // },
      axisLabel: {
        interval: 0,
        textStyle: {
          color: '#fff',
          fontSize: 18
        },
        margin: 20 // 刻度标签与轴线之间的距离。
      }

    },
    yAxis: [{
      name: '(万元)',
      nameTextStyle: {
        align: 'left',
        color: '#fff',
        padding: [0, 0, 0, -50],
        fontSize: 18
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
          opacity: 0.5
        }
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        textStyle: {
          color: '#fff',
          fontSize: 16
        }
      }
    }, {
      show: true,
      name: '{%}',
      splitLine: { show: false },
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        textStyle: { fontSize: 16, color: '#fff' }

      }
    }],
    legend: {
      top: '4%',
      textStyle: {
        color: '#A1D5FF',
        fontSize: 16
      },

      itemGap: 12 // 设置间距
    },
    series: [
      { // 三个最低下的圆片
        'name': '',
        'type': 'pictorialBar',
        'symbolSize': [32, 25],
        'symbolOffset': [0, 10],
        'z': 12,
        itemStyle: {
          opacity: 1,
          color: function(params) {
            var a = params.name.slice(0, 2)
            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#12B9DB' // 0% 处的颜色
            }, {
              offset: 1,
              color: '#6F8EF2' // 100% 处的颜色
            }], false)
          }
        },
        'data': [0.5, 0.5, 0.5, 0.5, 0.5, 0.5]
      },

      // 下半截柱状图
      {
        name: '税收收入',
        type: 'bar',
        barWidth: 32,
        barGap: '-100%',
        itemStyle: { // lenged文本
          opacity: 0.7,
          color: function(params) {
            var a = params.name.slice(0, 2)

            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#12B9DB' // 0% 处的颜色
            }, {
              offset: 1,
              color: '#6F8EF2' // 100% 处的颜色
            }], false)
          }
        },

        data: data1
      },

      {
        'name': '',
        'type': 'pictorialBar',
        'symbolSize': [32, 25],
        'symbolOffset': [0, -10],
        'z': 5,
        itemStyle: {
          opacity: 1,
          color: function(params) {
            var a = params.name.slice(0, 2)

            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#12B9DB' // 0% 处的颜色
            }, {
              offset: 1,
              color: '#6F8EF2' // 100% 处的颜色
            }], false)
          }
        },
        'symbolPosition': 'end',
        'data': data1
      },
      {
        name: '环比',
        'z': 9,
        yAxisIndex: 1,
        type: 'line',
        data: data2,
        symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAqklEQVQ4jWP8v5thCQMDgxEDdcA5Fqhh2VQycCoTlQyCgxFoIAsBeRkGBoZUBgYGYyj/LAMDw2wGBoYn5BgoC4o1BgYGHiQxWwYGBkNoqniMTRM+L6egGQYDPFA5rACfgcZ45EzIMZAsgM/As3jkzpDjwrkMDAxfsIh/gcqRbOAjaGweZmBg+AbFh6Fij3BpIpQOQUmjnoAaol1IFhihhcM5aJ6lHDAwnAMAl/oZ3fG0MmEAAAAASUVORK5CYII=',
        symbolSize: '20',
        lineStyle: {
          normal: {
            width: 3,
            color: '#ffbb00' // 线条颜色
          },
          borderColor: 'rgba(0,0,0,.4)'
        },
        areaStyle: { // 区域填充样式
          normal: {
            // 线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(255,187,0,.8)'

            },
            {
              offset: 1,
              color: 'rgba(25,163,223, 0)'
            }
            ], false)

          }
        }
      }
    ]
  }