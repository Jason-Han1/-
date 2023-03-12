 var option = {
          grid: {
            left: '-20%',
            bottom: '25%',
            containLabel: true
          },
          xAxis: {
                 splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
            type: 'category',
            boundaryGap: false,
            data:["1","2","3","1","2","3","1","2","3","1","2","3",]
          },
          yAxis: {
            show: false,
            type: 'value'
          },
          series: [
            {
              name: '总平均',
              type: 'line',
              stack: '总量',
              data:[11,22,33,44,55,66,77,99,88,99,55,44]
            },
            {
              name: '使用平均',
              type: 'line',
              stack: '总量',
              data: [77,22,31,44,135,52,77,99,88,99,55,77]
            },
            {
              name: '交换平均',
              type: 'line',
              stack: '总量',
              data: [88,22,53,44,55,66,77,99,88,99,55,88]
            },
            {
              name: '分担平均',
              type: 'line',
              stack: '总量',
              data:[55,22,45,44,55,66,45,457,88,99,55,44]
            },

            {
              name: '缓存平均',
              type: 'line',
              stack: '总量',
              data:[66,22,4,44,55,66,77,99,88,99,55,424]
            },
            {
              name: '缓冲平均',
              type: 'line',
              stack: '总量',
              data:[22,22,33,44,55,66,77,99,88,99,55,44]
            }

          ]
        };