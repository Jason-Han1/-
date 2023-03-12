//5.0以下版本
option = {
    backgroundColor:'#010A31',
        // title: {
        //     text: 'chart_3'
        // },
        xAxis: {
          data: ['智慧办公', '智慧办案', '智慧监督', '数据中心', '其他'],
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#727582',
              width: 1
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff',
              fontSize: 16
            }
          }
        },
        yAxis: {
          color: '#fff',
          splitLine: {
            show: false
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#727582',
              fontSize: 16
            }
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line'
          },
          formatter: ['{b}', '{c}'].join('\n'),
          textStyle: {
            color: '#fff'//'rgba(24,23,255,1)'
          }
        },
        series: [
          {
            type: 'line',
            symbol: 'circle',
            symbolSize: 10,
            smooth: true,
            data: [51, 30, 150, 130, 85],
            itemStyle: {
              //拐点的样式
              color: 'rgba(244,253,255,1)',
              borderWidth: 1,
              borderColor: 'rgba(87, 183, 242, 1)'
            },
            lineStyle: {
              //线条的样式
              width: 3,
              color: 'rgba(87, 183, 242, 1)'
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(87, 183, 242, 1)' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(6,37,55,0)' // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false
              }
            }
          }
        ]
      }
