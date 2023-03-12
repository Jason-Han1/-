 option= {
     backgroundColor:'rgba(37, 62, 38, .5)',
        tooltip: {
          trigger: 'axis',
          backgroundColor: '#ccc',
        //   formatter(params) {
        //     var htmlst = `
        //     <div class="echTooltip-bg3">
        //           <p class="echTooltip-text3"  style='color:#fff'>${params[0].name}年综合指数:${params[0].value}</p>
        //     </div>
        //     `
        //     return htmlst
        //   },
          axisPointer: {
            lineStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(0, 255, 233,0)'
                  },
                  {
                    offset: 0.5,
                    color: 'rgba(255, 255, 255,1)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(0, 255, 233,0)'
                  }
                ],
                global: false
              }
            }
          }
        },
        grid: {
          top: '17%',
          left: '5%',
          right: '3%',
          bottom: '15%'
        },
        xAxis: [
          {
            type: 'category',
            name: '',
            nameTextStyle: {
              fontSize: 16,
              padding: [0, 0, 0, -10],
              color: '#fff'
            },
            axisLine: {
              show: true
            },
            axisLabel: {
              color: '#fff',
              fontSize: '100%'
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            },
            boundaryGap: true,
            data: ['重大事件', '特大事件', '较大事件', '一般事件']
          }
        ],

        yAxis: [
          {
            type: 'value',
            name: '个',
            nameTextStyle: {
              fontSize: 16,
              color: '#fff'
            },
            min: 0,
            max: 100,
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(255,255,255,0.1)'
              }
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#fff',
                fontSize: '100%'
              }
            },
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          {
            name: '',
            type: 'bar',
            barWidth: 20,
            lineStyle: {
              normal: {
                color: '#00b3f4'
              }
            },
            itemStyle: {
              normal: {
                show: true,
                color: function(params) {
                  var colorLists = [
                    {
                      type: 'linear',
                      x: 0,
                      y: 1,
                      x2: 0,
                      y2: 0,
                      colorStops: [
                        {
                          offset: 0,
                          color: 'rgba(255, 255, 255, 0)'
                        },
                        {
                          offset: 1,
                          color: 'rgba(255, 255, 255, .7)'
                        }
                      ],
                      global: false
                    }, {
                      type: 'linear',
                      x: 0,
                      y: 1,
                      x2: 0,
                      y2: 0,
                      colorStops: [
                        {
                          offset: 0,
                          color: 'rgba(3, 252, 150, 0)'
                        },
                        {
                          offset: 1,
                          color: 'rgba(3, 252, 150, 1)'
                        }
                      ],
                      global: false
                    }, {
                      type: 'linear',
                      x: 0,
                      y: 1,
                      x2: 0,
                      y2: 0,
                      colorStops: [
                        {
                          offset: 0,
                          color: 'rgba(116, 152, 255, 0)'
                        },
                        {
                          offset: 1,
                          color: 'rgba(116, 152, 255, 1)'
                        }
                      ],
                      global: false
                    }, {
                      type: 'linear',
                      x: 0,
                      y: 1,
                      x2: 0,
                      y2: 0,
                      colorStops: [
                        {
                          offset: 0,
                          color: 'rgba(187, 133, 234, 0)'
                        },
                        {
                          offset: 1,
                          color: 'rgba(187, 133, 234, 1)'
                        }
                      ],
                      global: false
                    }]
                  return colorLists[params.dataIndex]
                },
                label: {
                  show: true,
                  position: 'top',
                  formatter: function() {
                    return ''
                  },
                  textStyle: {
                    fontSize: 0,
                    color: 'transparent',
                    backgroundColor: 'inherit',
                    padding: [3, 10, 3, 11]
                  }
                }
              }
            },
            data: [50, 40, 20, 30, 70, 80, 60, 78]
          }
        ]
      }