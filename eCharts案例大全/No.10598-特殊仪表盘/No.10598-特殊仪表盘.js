option = {
    backgroundColor: '#011864',
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
      },
      series: [{
        name: '外围刻度',
        type: 'gauge',
        radius: '90%',
        center: ['50%', '55%'],
        axisLine: {
          lineStyle: {
            width: 4,
            color: [[1, '#00b3ff']],
            shadowColor: '#fff',
            shadowBlur: 10
          },
        },
        axisLabel: {
          show: false
        },
        axisTick: {
          show: false,
        },
        detail: {
          show: false
        },
        pointer: {
          show: false
        }

      }, {
        name: '内层数据刻度',
        type: 'gauge',
        radius: '89%',
        center: ['50%', '55%'],
        axisLine: {
          lineStyle: {
            width: 40,
            color: [[0, new echarts.graphic.LinearGradient(
              0, 0, 1, 0,
              [{ offset: 0, color: '#011744' }, { offset: 1, color: '#156ad4' }]
            )], [1, new echarts.graphic.LinearGradient(
              0, 0, 1, 0,
              [{ offset: 0, color: '#011744' }, { offset: 1, color: '#156ad4' }]
            )]],
          }
        },
        splitLine: {
          length: 15,
          lineStyle: {
            width: 3,
            color: '#00baff'
          }
        },
        axisTick: {
          lineStyle: {
            color: '#00baff'
          }
        },
        axisLabel: {
          color: '#cbfff6',
          fontSize: 11,
        },
        detail: {
          show: false
        },
        itemStyle: {
          normal: {
            color: 'cyan'
          }
        },
        pointer: {
          width: 5,
          length: '90%'
        },
        data: [{ value: 10 }]
      },
      {
        name: '最内层线',
        type: 'gauge',
        radius: '35%',
        center: ['50%', '55%'],
        startAngle: 359.9999999999999,
        endAngle: 0,
        axisLine: {
          show: false,
          lineStyle: {
            opacity: 0,
          }
        },
        splitLine: {
          show: false,
          lineStyle: {
            opacity: 0
          }
        },
        axisLabel: {
          show: false
        },
        axisTick: {
          length: 2,
          lineStyle: {
            color: '#00b3ff',
            width: 3,
            type: 'solid'
          }
        },
        detail: {
          show: false
        },
        pointer: {
          show: false
        }
      },
      {
        name: '饼图',
        tooltip: {
          show: false
        },
        type: 'pie',
        radius: ['0%', '34%'],
        center: ['50%', '55%'],
        hoverAnimation: false,
        itemStyle: {
          normal: {
            color: '#000939'
          },
          emphasis: {
            color: '#000939'
          }
        },
        label: {
          normal: {
            show: true,
            position: 'center',
            formatter: function (params) {
              return '{value|' + params.value + '}{unit|%}\n{name|' + params.name + '}';
            },
            rich: {
              value: {
                fontFamily: 'SFUDINEngschrift',
                fontSize: 34,
                color: '#fff',
                verticalAlign: 'bottom'
              },
              unit: {
                fontFamily: 'SFUDINEngschrift',
                fontSize: 20,
                color: '#fff',
                lineHeight: 34,
                verticalAlign: 'bottom'
              },
              name: {
                fontFamily: 'Microsoft YaHei',
                fontSize: 16,
                color: '#2dcbff',
                lineHeight: 23,
              }
            }
          },
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        animation: false,
        data: [
          { value: 0, name: '满意' },
        ]
      }]
};