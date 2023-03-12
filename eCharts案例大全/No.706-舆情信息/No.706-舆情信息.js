 let highlight = '#03b7c9'
      let demoData = [
        {
          name: '正面',
          value: 60,
          unit: '%',
          pos: ['16.6%', '50%'],
          range: [0, 100],
          colora: '#1db0d2',
          colorb: '#44ceef'
        },
        {
          name: '中性',
          value: 0,
          unit: '%',
          pos: ['49.8%', '50%'],
          range: [0, 100],
          colora: '#e6658f',
          colorb: '#f8a58b'
        },
        {
          name: '负面',
          value: 90,
          unit: '%',
          pos: ['83%', '50%'],
          range: [0, 100],
          colora: '#1ea899',
          colorb: '#29c582'
        }
      ]

      option = {
        series: (function() {
          var result = []

          demoData.forEach(function(item) {
            result.push(
              // 外围刻度
              {
                type: 'gauge',
                center: item.pos,
                radius: '40%', // 1行3个
                splitNumber: item.splitNum || 10,
                min: 0,
                max: 100,
                startAngle: 225,
                endAngle: -45,
                axisLine: {
                  show: true,
                  lineStyle: {
                    width: 1,
                    color: [[1, 'rgba(0,0,0,0)']]
                  }
                }, //仪表盘轴线
                axisTick: {
                  show: true,
                  lineStyle: {
                    color: 'rgba(97, 255, 185, 0.4)',
                    width: 1
                  },
                  length: -4
                }, //刻度样式
                splitLine: {
                  show: true,
                  length: -10,
                  lineStyle: {
                    color: 'rgba(97, 255, 185, 0.4)'
                  }
                }, //分隔线样式
                axisLabel: {
                  show: false,
                  distance: -20,
                  textStyle: {
                    color: highlight,
                    fontSize: '14',
                    fontWeight: '400'
                  }
                },
                pointer: {
                  show: 0
                },
                detail: {
                  show: 0
                }
              },

              // 内侧指针、数值显示
              {
                name: item.name,
                type: 'gauge',
                center: item.pos,
                radius: '30%',
                startAngle: 225,
                endAngle: -45,
                min: 0,
                max: 100,
                axisLine: {
                  show: true,
                  lineStyle: {
                    width: 8,
                    color: [
                      [
                        item.value / 100,
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                          {
                            offset: 0,
                            color: item.colora
                          },
                          {
                            offset: 1,
                            color: item.colorb
                          }
                        ])
                      ],
                      [1, 'rgba(97, 255, 185, 0.5)']
                    ]
                  }
                },
                axisTick: {
                  show: 0
                },
                splitLine: {
                  show: 0
                },
                axisLabel: {
                  show: 0
                },
                pointer: {
                  show: false,
                  length: '105%'
                },
                detail: {
                  show: true,
                  offsetCenter: [0, '80%'],
                  textStyle: {
                    fontSize: 14,
                    color: 'rgba(97, 255, 185, 0.4)'
                  },
                  formatter: [
                    '{value} ' + (item.unit || ''),
                    '',
                    '{name|' + item.name + '}'
                  ].join('\n'),
                  rich: {
                    name: {
                      fontSize: 14,
                      lineHeight: 30,
                      color: 'rgba(97, 255, 185, 1)'
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    color: highlight
                  }
                },
                data: [
                  {
                    value: item.value
                  }
                ]
              }
            )
          })

          return result
        })()
      }