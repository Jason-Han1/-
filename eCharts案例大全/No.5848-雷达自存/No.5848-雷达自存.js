option = {
        backgroundColor: '#333',
        color: ['#3BB8FF', '#7460EE'],
        tooltip: {
          show: false
        },
        radar: {
          name: {
            textStyle: {
              fontSize: 12,
              color: '#fff'
              // borderRadius: 3,
              // padding: [3, 5]
            }
          },
          indicator: [

            { name: '30岁以下', max: '100%' },
            { name: '60岁及以上', max: 16000 },
            { name: '50-59岁', max: 30000 },
            { name: '40-49岁', max: 38000 },
            { name: '30-39岁', max: 52000 }
          ],
          axisLine: {
            lineStyle: {
              color: 'transparent'
            }
          },
          splitLine: {
            lineStyle: {
              color: '#0885a0',
              width: 1,
              type: 'solid'
            }
          },
          splitArea: {
            areaStyle: {
              color: 'rgba(249, 208, 0, 0)'
            }
          }
        },
        series: [{
          type: 'radar',
          symbol: 'none',
          data: [
            {
              value: [4300, 10000, 28000, 35000, 50000, 19000],
              // name : '时间1',
              lineStyle: {
                width: 2,
                color: '#f9d000'
              },
              areaStyle: {
                color: 'rgba(249, 208, 0, 0.502)'
              }
            }
          ]
        }]
      };