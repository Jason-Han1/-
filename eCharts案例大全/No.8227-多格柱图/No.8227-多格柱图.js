 option= {
      backgroundColor: '#080b30',
        tooltip: {
          show: false
        },
        grid: {
          top: '8%',
          right: '1%',
          bottom: '28%',
          left: '9%'
        },
        xAxis: {
          data: [
            '微信',
            '微博',
            'QQ',
            '网易',
            '头条号',
            '搜狐号',
            '趣头条'
          ], // 横坐标
          axisTick: {
            show: false
          },
          axisLabel: {
            interval: 0,
            rotate: 25,
            textStyle: {
              color: '#fff',
              fontSize: 16
            },
            formatter: function (params) {
              return params.length >= 12 ? params.slice(0, 12) + '...' : params
            }
          },
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: '#fff',
              width: '1  ' // 坐标线的宽度
            }
          }
        },
        yAxis: {
          splitLine: {
            show: false
          },
          axisTick: {
            show: true,
            lineStyle: {
              color: '#fff'
            }
          },
          axisLabel: {
            textStyle: {
              color: '#fff',
              fontSize: 12 // 坐标值得具体的颜色
            }
          },
          axisLine: {
            show: false
          }
        },
        series: [
          {
            name: '正常',
            type: 'pictorialBar',
            symbol: 'roundRect',
            symbolRepeat: true,
            symbolSize: [22, 3],
            symbolMargin: 2,
            itemStyle: {
              normal: {
                color: 'rgba(75,227,248,1)'
              }
            },
            label: {
              show: true,
              position: 'top',
              color: '#fff',
              formatter: '{c}'
            },
            data: [50,42,26,25,32,12,45]
          },
          {
            name: '异常',
            type: 'pictorialBar',
            symbol: 'roundRect',
            symbolRepeat: true,
            symbolSize: [22, 3],
            symbolMargin: 2,
            color: '#6E7B7E',
            barGap: '-100%',
            z: 1,
            data: [100,100,100,100,100,100,100]
          }
        ]
      }