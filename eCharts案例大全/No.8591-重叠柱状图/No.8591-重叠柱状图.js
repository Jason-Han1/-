option = {
          backgroundColor: '#000',
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            // 上下左右边距
            left: 0,
            right: 0,
            top: 85,
            bottom: 25
          },
          xAxis: [{
            type: 'category',
            axisLabel: {
              interval: 0, // 强制显示所有标签
              show: true,
              color: '#B2D4E7',
              fontSize: '14'
            },
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: '#B2D4E7',
                fontSize: 14
              }
            },
            data: ['英德', '佛冈', '清城', '清新', '阳山', '连南', '连山']
          }, {
            type: 'category',
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            splitArea: {
              show: false
            },
            splitLine: {
              show: false
            },
            data: []
          }],
          yAxis: {
            show: false,
            type: 'value'
          },
          series: [
            {
              name: '今日总量',
              xAxisIndex: 1,
              type: 'bar',
              data: [50, 80, 70, 100, 100, 100, 100],
              barWidth: '36',
              label: {
                normal: {
                  show: true,
                  fontSize: 14,
                  color: 'rgba(248,250,251,0.6)',
                  formatter: '{c}M',
                  position: 'top'
                }
              },
              itemStyle: {
                normal: {
                  color: 'rgba(255,255,255,0.2)'
                }
              }
            },
            {
              name: '今日',
              type: 'bar',
              data: [20, 40, 60, 80, 90, 80, 80],
              barWidth: '32',
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1, // 右/下/左/上
                    [
                      {offset: 0, color: '#67D8D4'},
                      {offset: 1, color: '#40B8D6'}
                    ]
                  )
                }
              }
            },
            {
              name: '昨日总量',
              xAxisIndex: 1,
              barGap: 0.15,
              type: 'bar',
              data: [80, 80, 70, 110, 100, 100, 100],
              barWidth: '36',
              label: {
                normal: {
                  show: true,
                  fontSize: 14,
                  color: 'rgba(248,250,251,0.6)',
                  formatter: '{c}M',
                  position: 'top'
                }
              },
              itemStyle: {
                normal: {
                  color: 'rgba(255,255,255,0.2)'
                }
              }
            },
            {
              name: '昨日',
              type: 'bar',
              data: [20, 40, 60, 80, 90, 80, 80],
              barWidth: '32',
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1, // 右/下/左/上
                    [
                      {offset: 0, color: '#AA65FF'},
                      {offset: 1, color: '#705FF2'}
                    ]
                  )
                }
              }
            }
          ]
        }