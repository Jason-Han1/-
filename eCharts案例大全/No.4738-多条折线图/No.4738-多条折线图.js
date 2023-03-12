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
      color: ['#FFF100', '#F97F3B', '#22EBCE'],
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
          data: ['市民反馈', '主动发现', '智能发现']
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
          name: '',
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
              name: '市民反馈',
              type: 'line',
              smooth: true, //平滑曲线显示
              symbol: 'none', //拐点样式
              itemStyle: {
                  normal: {
                      lineStyle: {
                          color: '#FFF100',
                      },
                      areaStyle: {
                          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                              offset: 0,
                              color: 'rgba(240,210,84,.1)'
                          }, {
                              offset: 1,
                              color: 'rgba(240,210,84,.5)'
                          }]),
                      }
                  }
              },
              data: [6000, 5600, 4400, 3000, 3400, 4200, 4600, 7000, 6800, 5400, 4200, 3600, 2800, 2600],
          },
          {
              name: '主动发现',
              type: 'line',
              smooth: true, //平滑曲线显示
              symbol: 'none', //拐点样式
              itemStyle: {
                  normal: {
                      lineStyle: {
                          color: '#F97F3B',
                      },
                      areaStyle: {
                          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                              offset: 0,
                              color: 'rgba(247,113,56,.1)'
                          }, {
                              offset: 1,
                              color: 'rgba(247,113,56,.5)'
                          }]),
                      }
                  }
              },
              data: [4100, 4000, 2400, 2300, 1800, 5100, 4100, 2400, 2300, 2100, 4000, 4200]
          },
          {
              name: '智能发现',
              type: 'line',
              smooth: true, //平滑曲线显示
              symbol: 'none', //拐点样式
              itemStyle: {
                  normal: {
                      lineStyle: {
                          color: '#22EBCE',
                      },
                      areaStyle: {
                          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                              offset: 0,
                              color: 'rgba(33,221,202,.1)'
                          }, {
                              offset: 1,
                              color: 'rgba(33,221,202,.6)'
                          }]),
                      }
                  }
              },
              data: [3300, 4000, 6000, 4500, 2900, 6300, 4200, 3800, 3500, 2900, 6300, 4200, 3800]
          },

      ]
  };