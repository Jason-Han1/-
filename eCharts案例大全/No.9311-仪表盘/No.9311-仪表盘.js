let highlight = new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
        offset: 0,
        color: '#fe1440' // 0% 处的颜色
      }, {
        offset: 0.17,
        color: '#fd9d35' // 100% 处的颜色
      }, {
        offset: 0.9,
        color: '#b6fd62' // 100% 处的颜色
      }, {
        offset: 1,
        color: '#09fe44' // 100% 处的颜色
      }]);
      
option = {
        series: [
          {
            type: 'gauge',
            // center: item.pos,
            radius: '75%',
            splitNumber: 10,
            min: 0,
            max: 100,
            startAngle: 225,
            endAngle: -45,
            axisLine: {
              show: true,
              lineStyle: {
                width: 5,
                shadowBlur: 0,
                color: [
                  [1, highlight]
                ]
              }
            },
            axisTick: {
              show: true,
              lineStyle: {
                color: highlight,
                width: 1
              },
              length: -5,
              splitNumber: 10
            },
            splitLine: {
              show: true,
              length: -14,
              lineStyle: {
                color: highlight
              }
            },
            axisLabel: {
              distance: -20,
              textStyle: {
                color: highlight,
                fontSize: '14',
                fontWeight: 'bold'
              }
            },
            pointer: {
              show: 0
            },
            detail: {
              show: 0
            }
          },

          // 内侧指针、数值显示
          {
            name: '完成率',
            type: 'gauge',
            // center: item.pos,
            radius: '70%',
            startAngle: 225,
            endAngle: -45,
            min: 0,
            max: 100,
            axisLine: {
              show: true,
              lineStyle: {
                width: 16,
                color: [
                  [1, 'rgba(0,0,0,0.1)']
                ]
              }
            },
            axisTick: {
              show: 0
            },
            splitLine: {
              show: 0
            },
            axisLabel: {
              show: 0
            },
            pointer: {
              show: true,
              length: '105%'
            },
            detail: {
              show: true,
              offsetCenter: [0, '100%'],
              textStyle: {
                fontSize: 26,
                fontWeight: 'bold',
                color: '#243037'
              },
              formatter: [
                '{value}%',
                '{name| 完成率}'
              ].join('\n'),
              rich: {
                name: {
                  fontSize: 14,
                  lineHeight: 30,
                  color: '#B3B3B3'
                }
              }
            },
            itemStyle: {
              normal: {
                color: '#FE7C49'
              }
            },
            data: [{
              value: 98
            }]
          }
        ]
      };