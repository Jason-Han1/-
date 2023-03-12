 option = {
        grid: {
          top: "20%",
          left: "3%",
          right: "3%",
          bottom: "0",
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          data: [2016, 2017, 2018, 2019, 2020],
          axisLine: {
            show: true,
            lineStyle: {
              color: '#293486'
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            color: '#CCCCCC',
          },
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#293587'
            }
          },
          axisLabel: {
            color: '#2A93B5',
          },
        },
        legend: {
          data: [{
            name: '第一产业',
            textStyle: {
              color: '#FFFFFF'
            },
          },
            {
              name: '第二产业',
              textStyle: {
                color: '#FFFFFF'
              }
            },
            {
              name: '第三产业',
              textStyle: {
                color: '#FFFFFF'
              },
            }]
        },
        series: [
          {
            name: '第一产业',
            type: 'line',
            stack: 'Total',
            itemStyle: {
              opacity: 0
            },
            lineStyle: {
              color: '#E16B53'
            },
            data: [23, 41, 12, 51, 21, 23, 32],
          },
          {
            name: '第二产业',
            type: 'line',
            stack: 'Total',
            itemStyle: {
              opacity: 0
            },
            lineStyle: {
              color: '#00F769'
            },
            data: [25, 12, 51, 23, 31, 42, 43],
          }, {
            name: '第三产业',
            type: 'line',
            stack: 'Total',
            itemStyle: {
              opacity: 0
            },
            lineStyle: {
              color: '#1AACFF'
            },
            data: [41, 21, 51, 22, 31, 25, 32],
          }
        ]
      }