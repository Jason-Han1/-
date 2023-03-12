  var option = {
      title: {
          text: '雷达图'
      },
      tooltip: {
          trigger: 'axis'
      },
      legend: {
          data: ['肌肉综合评价']
      },
      backgroundColor: '#FBFBFB',
      radar: {
          indicator: [{
              text: '躯干部',
              max: 100
          }, {
              text: '左上肢',
              max: 100
          }, {
              text: '左下肢\n(含臀)',
              max: 100
          }, {
              text: '右下肢\n(含臀)',
              max: 100
          }, {
              text: '右上肢',
              max: 100
          }],
          splitNumber: 4,
          name: {
              textStyle: {
                  color: '#201E1F'
              }
          },
          axisLine: {
              lineStyle: {
                  color: '#2D91BD',
                  width: 2,
                  type: 'dotted'
              },
          },
          splitLine: {
              lineStyle: {
                  color: ['#2D91BD', 'transparent', 'transparent', 'transparent'],
                  width: 2
              }
          },
          splitArea: {
              areaStyle: {
                  color: ['#B3DBF5', '#FAFAFA']
              }
          }
      },
      series: [{
          type: 'radar',
          tooltip: {
              trigger: 'item'
          },
          symbol: 'circle',
          symbolSize: 5,
          itemStyle: {
              normal: {
                  color: '#2D91BD',
                  borderColor: '#2D91BD'
              }
          },
          data: [{
              value: [60, 33, 15, 50, 100],
              name:'肌肉综合评价'
          }]
      }, ]
  };