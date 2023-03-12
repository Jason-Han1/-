 let data1 = [1]
 let data2 = [3]
 let max = (data1[0] + data2[0]) * 1.05
option = {
              grid: {
                left: '0',
                bottom: '10%',
                top: '0'
              },
              xAxis: {
                data: ['周一'],
                show: false
              },
              yAxis: {
                show: false,
                max: max
              },
              series: [
                {
                  name: '柱顶部',
                  type: 'pictorialBar',
                  symbolSize: [26, 10],
                  symbolOffset: [0, -5],
                  z: 12,
                  itemStyle: {
                    normal: {
                      color: function(params) {
                        return '#01BEC7'
                      }
                    }
                  },
                  symbolPosition: 'end',
                  data: data1
                },
                {
                  name: '柱底部',
                  type: 'pictorialBar',
                  symbolSize: [26, 10],
                  symbolOffset: [0, 5],
                  z: 12,
                  itemStyle: {
                    normal: {
                      color: function(params) {
                        return '#01BEC7'
                      }
                    }
                  },
                  data: [0.5]
                },
                {
                  type: 'bar',
                  stack: '总量',
                  itemStyle: {
                    normal: {
                      color: function(params) {
                        return new echarts.graphic.LinearGradient(
                          0, 0, 0, 1,
                          [{
                            offset: 1,
                            color: '#01BEC7'
                          },
                            {
                              offset: 0,
                              color: 'rgba(161, 84, 233, 0.2)'
                            }
                          ]
                        )
                      },
                      opacity: 1
                    }
                  },
                  z: 16,
                  silent: true,
                  barWidth: 26,
                  barGap: '-100%', // Make series be overlap
                  data: data1
                },

                {
                  name: 'name3',
                  type: 'bar',
                  stack: '总量',
                  itemStyle: {
                    color: 'transparent'
                  },
                  z: 16,
                  silent: true,
                  barWidth: 26,
                  barGap: '-100%', // Make series be overlap
                  data: [0.08]
                },

                {
                  name: '柱顶部',
                  type: 'pictorialBar',
                  symbolSize: [26, 10],
                  symbolOffset: [0, -15],
                  z: 12,
                  itemStyle: {
                    color: '#D1862C'
                  },
                  symbolPosition: 'end',
                  data: [data2[0] == 0 ? 0 : (data1[0] + data2[0])]
                },
                {
                  name: '柱底部',
                  type: 'pictorialBar',
                  symbolSize: [26, 10],
                  symbolOffset: [0, 0],
                  z: 12,
                  symbolPosition: 'end',
                  itemStyle: {
                    normal: {
                      color: function(params) {
                        return '#D1862C'
                      }
                    }
                  },
                  data: [data2[0] == 0 ? 0 : (data1[0] + 0.13)]
                },
                {
                  type: 'bar',
                  stack: '总量',
                  itemStyle: {
                    normal: {
                      color: function(params) {
                        return new echarts.graphic.LinearGradient(
                          0, 0, 0, 1,
                          [{
                            offset: 1,
                            color: '#D1862C'
                          },
                            {
                              offset: 0,
                              color: 'rgba(161, 84, 233, 0.2)'
                            }
                          ]
                        )
                      },
                      opacity: 1
                    }
                  },
                  z: 16,
                  silent: true,
                  barWidth: 26,
                  barGap: '-100%', // Make series be overlap
                  data: data2
                }
              ]
            };