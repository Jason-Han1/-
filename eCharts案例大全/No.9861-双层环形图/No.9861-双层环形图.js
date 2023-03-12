var score = 78;
var name = '名称';

option = {
          series: [
            {
              type: 'gauge',
              min: 0,
              max: 100,
              radius: '100%',
              startAngle: 198,
              endAngle: -18,
              axisLine: {
                  show: false,
                  lineStyle: {
                      opacity: 0,
                      width: 12
                  }
              },
              splitLine: {
                  show: false
              },
              axisLabel: {
                  show: false
              },
              pointer: {
                  show: false
              },
              axisTick: {
                splitNumber: 10,
                length: 12,
                lineStyle: {
                    color: '#004fb0'
                }
              },
              title: {
                  show: true,
                  fontSize: 34,
                  color: '#5faeff',
                  offsetCenter: [0, '-45%']
              },
              detail: {
                  formatter: function (value) {
                      return '{a|' + value + '} {b|分}'
                  },
                  offsetCenter: [0, 0],
                  rich: {
                      a: {
                          fontSize: 86,
                          color: '#15e198'
                      },
                      b: {
                          fontSize: 34,
                          color: '#15e198',
                          verticalAlign: 'bottom',
                          padding: [10, 0, 0, 0]
                      }
                  }
              },
              data: [{value: [score], name: name}]
            },
            {
              name: 'score',
              type: 'pie',
              startAngle: 198,
              hoverAnimation: false,
              radius: [135, 145],
              label: {
                normal: {
                  show: false
                }
              },
              data: [
                {
                  value: 0.6,
                  name: 0.6,
                  itemStyle: {
                    normal: {
                      color: '#113459'
                    }
                  }
                },
                {
                  value: 0.4,
                  itemStyle: {
                    normal: {
                      color: 'transparent'
                    }
                  }
                }
              ]
            },
            {
              name: 'score',
              type: 'pie',
              startAngle: 198,
              hoverAnimation: false,
              radius: [135, 145],
              label: {
                normal: {
                  show: false
                }
              },
              data: [
                {
                  value: [(score * 0.6 /100).toFixed(2)],
                  name: [(score * 0.6 /100).toFixed(2)],
                  itemStyle: {
                    normal: {
                      color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#15e198'
                        }, {
                            offset: 1, color: '#409eff'
                        }]
                      }
                    }
                  }
                },
                {
                  value: [1- (score * 0.6 /100).toFixed(2)],
                  itemStyle: {
                    normal: {
                      color: 'transparent'
                    }
                  }
                }
              ]
            }
          ]
        }