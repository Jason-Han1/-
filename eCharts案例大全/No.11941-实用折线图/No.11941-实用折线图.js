option = {
        xAxis: {
          data: [1, 2, 3, 4, 5, 6, 7],
          axisLabel: {
            color: '#48576a'
          },
          axisLine: {
            lineStyle: {
              color: '#4a4a4a'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#e5e5e5'
            }
          }
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: true,
            lineStyle: {
              color: '#e5e5e5'
            }
          },
          axisLabel: {
            show: true,
            interval: 'auto',
            formatter: '{value} %',
            color: '#48576a'
          },
          axisLine: {
            lineStyle: {
              color: '#e5e5e5',
              width: 2
            }
          },
          show: true
        },
        tooltip: {
          show: true,
          formatter: '&nbsp;&nbsp;时间：{b} 值：{c}%',
          trigger: 'axis'
        },
        series: [{
          name: '用例B',
          type: 'line',
          z: 1,
          markArea: {
            silent: true,
            itemStyle: {
              color: '#e6492d',
              opacity: 0.2
            },
            data: [
              [{
                x: '10%',
                yAxis: 100
              }, {
                x: '90%'
              }]
            ],
            animation: true
          }
        }, {
          name: '用例A',
          type: 'line',
          z: 2,
          data: [-23, 56, 200, 280, 170],
          symbol: 'emptyCircle',
          symbolSize: 8,
          label: {
            normal: {
              show: true,
              position: 'top',
              formatter: '{c}%'
            }
          },
          itemStyle: {
            normal: {
              color: ({ dataIndex }) => {
                      return dataIndex === 2 ? '#7bb741' : '#4287ea'
                    },
              lineStyle: {
                width: 1,
                color: '#4287ea'
              }
            }
          },
          markLine: {
              lineStyle: {
                color: '#e6492d'
              },
              data: [
                [{
                  symbol: 'none',
                  x: '10%',
                  yAxis: 100
                }, {
                  symbol: 'arrow',
                  x: '94%',
                  yAxis: 100,
                  label: {
                    normal: {
                      position: 'end',
                      formatter: '阈值'
                    }
                  }
                }]
              ]
            }
        }]
      }