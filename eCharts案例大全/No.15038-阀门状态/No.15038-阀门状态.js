      var dataAll = [
          [
              [23.5, 83]
          ]
      ];
      var option = {
          tooltip: {
              trigger: 'item',
              axisPointer: {
                  type: 'cross',
                  crossStyle: {
                      color: 'black'
                  },
                  lineStyle: {
                      color: '#666'
                  }
              }
          },
          grid: {
              top: '10%',
              bottom: '10%',
              borderWidth: 0
          },
          xAxis: [{
              splitNumber: 25,
              type: 'category',
              //   boundaryGap: 0,
              axisLabel: {
                  show: true,
                  rotate: 0,
                  textStyle: {
                      color: '#682d19'
                  }
              },
              axisTick: {
                  show: true
              },
              splitLine: {
                  lineStyle: {
                      type: 'solid',
                      color: '#cfc3bd'
                  }
              },
              data: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00']
          }, {
              type: 'value',
              gridIndex: 0,
              min: 20,
              max: 80,
              axisLabel: {
                  show: false
              },
              splitLine: {
                  show: false
              },
              axisTick: {
                  show: false
              }
          }],
          yAxis: [{
              interval: 15,
              show: false,
              min: -10,
              max: 10,
              position: 'right',
              splitLine: {
                  show: false
              },
              axisLabel: {
                  show: true,
              },
          }, {
              type: 'category',
              position: 'left',
              axisLabel: {
                  show: true,
              },
              splitLine: {
                  show: false
              },
              data: ['关闭', '打开'],
          }, ],
          series: [{
                  type: 'scatter',
                  symbol: 'path://path://M 26.458333,55.095237 141.36309,171.5119 77.107142,113.30357 131.53571,54.339286 30.238094,176.04762 74.839284,111.79167 Z',
                  symbolSize: 25,
                  smooth: false,
                  xAxisIndex: 1,
                  yAxisIndex: 0,
                  data: dataAll[0],
              }, {
                  type: 'line',
                  name: '关闭',
                  symbol: 'none',
                  z: 2,
                  lineStyle: {
                      normal: {
                          width: 0,
                          opacity: 0,
                      },
                  },
                  areaStyle: {
                      normal: {
                          color: 'red',
                      }
                  },
                  data: [0, 0, 0, 0, 0, 0, 0, 0, 0]
              }, {
                  type: 'line',
                  name: '打开',
                  symbol: 'none',
                  z: 0,
                  lineStyle: {
                      normal: {
                          width: 0,
                          opacity: 0,
                      },
                  },
                  areaStyle: {
                      normal: {
                          color: 'green',
                      }
                  },
                  data: [10, 10, 10, 10, 10, 10, 10, 10, 10]
              },
              {
                  name: '阀门状态',
                  type: 'bar',
                  stack: '阀门状态',
                  label: {
                      normal: {
                          textStyle: {
                              color: '#682d19'
                          },
                          position: 'left',
                          show: false,
                          formatter: '{b}'
                      }
                  },
                  barCategoryGap: 0,
                  itemStyle: {
                      normal: {
                          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                              offset: 0,
                              color: 'transparent'
                          }, {
                              offset: 0.5,
                              color: 'transparent'
                          }, {
                              offset: 0.8,
                              color: 'rgba(0, 0, 0, 0)'
                          }, {
                              offset: 0.92,
                              color: 'rgba(0, 0, 0, 0)'
                          }, {
                              offset: 1,
                              color: 'rgba(0, 0, 0, 0)'
                          }])
                      }
                  },
                  data: [5, 5, -5, -5, -5, 5, 5, -5, 5]
              }, {
                  type: 'bar',
                  stack: '阀门状态',
                  silent: true,
                  data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                  itemStyle: {
                      normal: {
                          color: '#000',
                          shadowColor: 'rgba(0, 0, 0, 1)',
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                      }
                  },
                  barMinHeight: 4
              }

          ]
      };