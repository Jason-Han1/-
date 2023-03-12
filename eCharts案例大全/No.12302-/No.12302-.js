  var option = {
      tooltip: {},
      radar: {
          radius: '60%',
          splitNumber: 6,
          axisLine: {
              lineStyle: {
                  color: '#006c87',
                  opacity: .2
              }
          },
          name: {
                formatter:'【{value}】',
                textStyle: {
                    color:'#fff'
                }
            },
          splitLine: {
              lineStyle: {
                  color: '#007250',
                  opacity: .2
              }
          },
          indicator: [{
              name: '1',
              max: 110
          }, {
              name: '2',
              max: 110
          }, {
              name: '3',
              max: 110
          }, {
              name: '4',
              max: 110
          }, {
              name: '5',
              max: 110
          }, {
              name: '6',
              max: 110
          }]
      },
      series: [{
          type: 'radar',
          symbolSize: 0,
          areaStyle: {
              normal: {
                color: 'rgba(196,171,42,0.6)'
              }
          },
          data: [{
              value: [103.5, 35.6, 96.6, 82.6, 93.8, 5.9],
              name: '实际开销（Actual Spending）',
              symbolSize: 6
          }]
      }],
      color: ['#ffbe0a'],
      backgroundColor: '#131f56'
  };