option = {
        xAxis: {
            type: 'category',
            data: [
              {
                value: '数据一'
              },
               {
                value: '数据二'
              },
               {
                value: '数据三'
              },
               {
                value: '数据四'
              }
            ],
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: '#E5E9ED'
              }
            },
            axisLabel: {
              color: '#5E6E89'
            }
        },
        yAxis: {
          name: '人',
          nameLocation: 'end',
          nameTextStyle: {
            color: '#A5A8B2'
          },
          type: 'value',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#A5A8B2'
          },
          splitLine: {
            lineStyle: {
              color: '#E5E9ED'
            }
          }
        },
        series: [{
            data: [{
            value: 50,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                    { offset: 0, color: '#67DFB9' },
                    { offset: 1, color: '#50DFB2' }
                ]
              )
            },
          }, {
            value: 40,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                    { offset: 0, color: '#F7CE00' },
                    { offset: 1, color: '#F7B500' }
                ]
              )
            },
          },{
            value: 10,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                    { offset: 0, color: '#709BF9' },
                    { offset: 1, color: '#5B76F9' }
                ]
              )
            },
          },{
            value: 20,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                    { offset: 0, color: '#4CC9FC' },
                    { offset: 1, color: '#36C3FC' }
                ]
              )
            },
          }],
            type: 'bar',
            barMaxWidth: 60
        }]
};