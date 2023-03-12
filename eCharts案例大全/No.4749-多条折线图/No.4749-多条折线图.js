  option = {
      backgroundColor: '#11183c',
      grid: {
          left: '5%',
          right: '5%',
          top: '20%',
          bottom: '5%',
          containLabel: true
      },
      tooltip: {
          show: true, //去除面板显示
          trigger: 'axis',
      },
      color: ['#D4920A', '#B5C637', '#2C8F87', '#5589D7', '#A303C0'],
      legend: {
          show: true,
          top: '5%',
          icon: 'bar',
          itemWidth: 20,
          itemHeight: 3,
          itemGap: 35, //图例间隔距离
          textStyle: {
              color: '#fff',
              fontSize: '16'
          },
          data: ['春节', '清明', '五一', '中秋', '十一']
      },
      xAxis: [{
          type: 'category',
          boundaryGap: false, //图形距离y轴线的距离
          axisLabel: {
              interval: 0,
              color: '#fff',
              fontSize: 16
          },
          axisLine: {
              show: true,
              lineStyle: {
                  color: '#1B2937',
                  width: 1.5
              }
          },
          axisTick: {
              show: false,
          },
          splitLine: { //x轴分割线
              show: false,
              lineStyle: {
                  color: '#074069'
              }
          },
          data: ['0:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '20:00', '18:00', '22:00', '24:00'],
      }],
      yAxis: [{
          type: 'value',
          max: 8000,
          name: '(人次)     ',
          nameTextStyle: {
              fontSize: 16,
              color: '#fff'
          },
          axisLabel: {
              formatter: '{value}',
              textStyle: {
                  color: '#fff',
                  fontSize: 18
              },
          },
          splitLine: { //y轴分割线
              show: true,
              lineStyle: {
                  color: '#1B2937',
                  width: 2,
                  type: 'solid'
              }
          },
          axisLine: {
              show: false,
              lineStyle: {
                  color: '#074069',
                  width: 1.5
              }
          },
          axisTick: {
              show: false,
          },
      }],
      series: [{
              name: '春节',
              type: 'line',
              smooth: true, //平滑曲线显示
              symbol: 'none', //拐点样式
              itemStyle: {
                  normal: {
                      lineStyle: {
                          color: '#D4920A',
                      },
                      areaStyle: {
                          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                              offset: 0,
                              color: 'rgba(211,147,12,.1)'
                          }, {
                              offset: 1,
                              color: 'rgba(211,147,12,.6)'
                          }]),
                      }
                  }
              },
              data: [6000, 5600, 4400, 3000, 3400, 4200, 4600, 7000, 6800, 5400, 4200, 3600, 2800, 2600],
          },
          {
              name: '清明',
              type: 'line',
              smooth: true, //平滑曲线显示
              symbol: 'none', //拐点样式
              itemStyle: {
                  normal: {
                      lineStyle: {
                          color: '#B5C637',
                      },
                      areaStyle: {
                          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                              offset: 0,
                              color: 'rgba(181,200,57,.1)'
                          }, {
                              offset: 1,
                              color: 'rgba(181,200,57,.6)'
                          }]),
                      }
                  }
              },
              data: [4100, 4000, 2400, 2300, 1800, 5100, 4100, 2400, 2300, 2100, 4000, 4200]
          },
          {
              name: '五一',
              type: 'line',
              smooth: true, //平滑曲线显示
              symbol: 'none', //拐点样式
              itemStyle: {
                  normal: {
                      lineStyle: {
                          color: '#2C8F87',
                      },
                      areaStyle: {
                          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                              offset: 0,
                              color: 'rgba(44,143,135,.1)'
                          }, {
                              offset: 1,
                              color: 'rgba(44,143,135,.6)'
                          }]),
                      }
                  }
              },
              data: [3300, 4000, 6000, 4500, 2900, 6300, 4200, 3800, 3500, 2900, 6300, 4200, 3800]
          },
          {
              name: '中秋',
              type: 'line',
              smooth: true, //平滑曲线显示
              symbol: 'none', //拐点样式
              itemStyle: {
                  normal: {
                      lineStyle: {
                          color: '#5589D7',
                      },
                      areaStyle: {
                          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                              offset: 0,
                              color: 'rgba(41,92,165,.1)'
                          }, {
                              offset: 1,
                              color: 'rgba(41,92,165,.6)'
                          }]),
                      }
                  }
              },
              data: [2500, 2600, 4300, 3100, 3300, 6500, 4600, 4300, 3900, 3300, 6500, 4006, 4300]
          },
          {
              name: '十一',
              type: 'line',
              smooth: true, //平滑曲线显示
              symbol: 'none', //拐点样式
              itemStyle: {
                  normal: {
                      lineStyle: {
                          color: '#A303C0',
                      },
                      areaStyle: {
                          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                              offset: 0,
                              color: 'rgba(163,4,194,.1)'
                          }, {
                              offset: 1,
                              color: 'rgba(163,4,194,.6)'
                          }]),
                      }
                  }
              },
              data: [4800, 3800, 3400, 3000, 2700, 5800, 3800, 3400, 3000, 2700, 5800, 3800, 3004]
          }
      ]
  };