// 纹理
var piePane = 'data:image/jpeg;base64,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'
var piePatternImg = new Image()
piePatternImg.src = piePane
var tipLine = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAADCAYAAAAQnhYVAAAAAXNSR0IArs4c6QAAAGNJREFUGBlj/P//vxIDAwMTEN9nZGT8C+QrANksQExv8Bxo/1eg/RJAi3mA+AUDkPMOiEFAFOQaIP0czKM/4Q+1fw3U6nBQCJ0CYj4g/g2SBILTQCwCZtGXeAe17iaQPg7EbwAOmKTp8gqpPgAAAABJRU5ErkJggg=='
var tipLineImg = new Image()
tipLineImg.src = tipLine
option = {
           backgroundColor: '#021622',
          tooltip: {
              trigger: 'axis',
              formatter: '{b}<br />{a0}: {c0}<br />{a1}: {c1}',
              axisPointer: {
                  type: 'shadow',
                  label: {
                      backgroundColor: '#6a7985'
                  }
              },
              textStyle: {
                  color: '#fff',
                  fontStyle: 'normal',
                  fontFamily: '微软雅黑',
                  fontSize: 14
              }
          },
          calculable: true,
          grid: {
              left: '2%',
              right: '2%',
              bottom: '0%',
              top: '5%',
              containLabel: true
          },
          xAxis: [{
              type: 'category',
              data:  [1, 2, 3, 4, 5, 6, 7],
              axisLabel: {
                  interval: 0,
                  textStyle: {
                      color: '#fff',
                      fontStyle: 'normal',
                      fontFamily: '微软雅黑',
                      fontSize: 14
                  }
              },
              axisTick: {
                  show: false
              },
              axisLine: {
                  lineStyle: {
                      color: '#fff',
                      opacity: 0.2,
                      show: false
                  }
              },
              splitLine: {
                  show: false
              }
          }],
          yAxis: [{
              type: 'value',
              splitNumber: 5,
              axisLabel: {
                  textStyle: {
                      show: false,
                      color: '#a8aab0',
                      fontStyle: 'normal',
                      fontFamily: '微软雅黑',
                      fontSize: 16
                  }
              },
              axisLine: {
                  show: false
              },
              axisTick: {
                  show: false
              },
              splitLine: {
                  show: true,
                  lineStyle: {
                      color: ['#fff'],
                      opacity: 0.06
                  }
              }
          }],
          series: [{
                  name: '今日空车',
                  type: 'bar',
                  data: [1, 2, 3, 4, 5, 6, 7],
                  barWidth: 20,
                  barGap: 0.5, // 柱间距离
                  showBackground: true,
                  backgroundStyle: {
                      // color: 'rgba(15,106,223, 0.2)'
                      color: {
                          image: piePatternImg,
                          repeat: 'repeat'
                      },
                      opacity: 0.2
                  },
                  itemStyle: {
                      normal: {
                          show: true,
                          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                  offset: 0,
                                  color: 'rgba(38,171,255,0.86)'
                              },
                              {
                                  offset: 1,
                                  color: 'rgba(38,171,255,0.39)'
                              }
                          ])
                      }
                  },
                  label: {
                      show: true,
                      position: 'insideTop',
                      distance: -10,
                      rich: {
                          a: {
                              color: '#fff',
                              fontSize: 14,
                              align: 'left',
                              padding: [0, 0, -5, 0],
                              width: 25,
                              height: 3,
                              lineHeight: 16,
                              backgroundColor: {
                                  image: tipLineImg
                              }
                          }
                      },
                      formatter: params => {
                          return '{a|' + '' + '}'
                      }
                  }
              },
              {
                  name: '今日重车',
                  type: 'bar',
                  data: [4, 1, 2, 1, 2, 6, 7],
                  barWidth: 20,
                  barGap: 0.5, // 柱间距离
                  showBackground: true,
                  backgroundStyle: {
                      // color: 'rgba(15,106,223, 0.2)'
                      color: {
                          image: piePatternImg,
                          repeat: 'repeat'
                      },
                      opacity: 0.2
                  },
                  itemStyle: {
                      normal: {
                          show: true,
                          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                  offset: 0,
                                  color: 'rgba(237,111,81,0.88) '
                              },
                              {
                                  offset: 1,
                                  color: 'rgba(255,140,5,0.49)'
                              }
                          ]),
                          borderWidth: 0
                      }
                  },
                  label: {
                      show: true,
                      position: 'insideTop',
                      distance: -10,
                      rich: {
                          a: {
                              color: '#fff',
                              fontSize: 14,
                              align: 'left',
                              padding: [0, 0, -5, 0],
                              width: 25,
                              height: 3,
                              lineHeight: 16,
                              backgroundColor: {
                                  image: tipLineImg
                              }
                          }
                      },
                      formatter: params => {
                          return '{a|' + '' + '}'
                      }
                  }
              }
          ]
      }