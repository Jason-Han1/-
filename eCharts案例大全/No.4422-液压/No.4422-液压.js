var value = 2.03,
    max = 14,
    min = 0,
    warnMin = 0.9,
    warnMax = 4
option = {

        grid: {
          top: '5%',
          right: '5%',
          left: '5%',
          bottom: '5%'
        },
        tooltip: {
          show: false,
        },
        xAxis: [{
          type: 'category',
          axisLabel: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(107,107,107,0.37)',
            }
          },
          axisTick: {
            show: false
          },
        }],
        yAxis: [{
            name:'m',
          type: 'value',
          min: min,
          max: max,
          splitNumber: 5,
          axisLabel: {
            formatter: '{value}',
            color: '#999',
            textStyle: {
              fontSize: 18
            },
          },
          // this.chartData.max ? this.chartData.max : this.chartData.value
          axisLine: {
            lineStyle: {
              color: 'rgba(107,107,107,0.37)',
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(131,101,101,0.2)',
              type: 'dashed',
            }
          }
        }],
        series: [{
          type: 'bar',
          tooltip: {
            confine: true,
          },
          data: [value],
          barCategoryGap: '0',
          itemStyle: {
            normal: {
              color: function (param) {
                console.log(param.value)
                if (param.value <= warnMax && param.value >= warnMin) {
                  return 'rgba(135, 206, 250, 0.8)'
                } else {
                  return 'rgba(255, 0, 0, 0.5)'
                }
              }
            },
          },
          markLine: {
            silent: true,
            symbol: 'none',
            lineStyle: {
              normal: {
                color: '#0f77e9',
              },
            },
            data: [{
              name: '下限',
              yAxis:warnMin
            }, {
              name: '上限',
              yAxis: warnMax,
            }
            ]
          },
        },
        ]
      }