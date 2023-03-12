option = {
        grid: {
          left: '8%',
          top: '10%',
          right: '5%',
          bottom: '15%'
        },
        yAxis: {
          type: 'category',
          data: ['未下发', '已下发'],
          axisLine: {
            lineStyle: {
              color: '#D2E6F9'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#000'
          }
        },
        xAxis: {
          type: 'value',
          max: 100,
          splitLine: {
            show: true,
            lineStyle: {
              color: '#D2E6F9',
              type: 'dashed'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#D2E6F9'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#000'
          }
        },
        series: [{
          data: [{
            name: '未下发',
            value: 40,
            itemStyle: {
              barBorderRadius: [0, 0, 12, 0],
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                  offset: 0, color: '#FFB2B2' // 0% 处的颜色
                }, {
                  offset: 1, color: '#F45353' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              }
            }
          }, {
            name: '已下发',
            value: 80,
            itemStyle: {
              barBorderRadius: [0, 0, 12, 0],
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                  offset: 0, color: '#59FFB7' // 0% 处的颜色
                }, {
                  offset: 1, color: '#37BDFF' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              }
            }
          }],
          barWidth: 12,
          type: 'bar'
        }]
      };
