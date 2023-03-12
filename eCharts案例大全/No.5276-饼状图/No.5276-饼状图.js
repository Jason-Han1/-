      const colorList = [
          ['#00F0FF', '#0C9BFF', '#6DEDFC'],
          ['#E7AD51', '#EDFF21', '#E1EC56'],
      ]
      const scaleData = [{
              'name': '办理',
              'value': 4487,
          },
          {
              'name': '未办理',
              'value': 2456,
          },

      ]
      const data = []
      for (let i = 0; i < scaleData.length; i++) {
          data.push({
              value: scaleData[i].value,
              name: scaleData[i].name,
              itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: colorList[i][0],
                  }, {
                      offset: 1,
                      color: colorList[i][1],
                  }]),
              },
          }, )
      }
      const total = scaleData.reduce((a, b) => {
          return a.value + b.value
      })

      option = {
          legend: [{
              orient: 'vertical',
              right: '6%',
              top: 'center',
              itemGap: 8,
              icon: 'none',
              textStyle: {
                  rich: {
                      name: {
                          width: 60,
                          lineHeight: 50,
                          color: '#bed3f8',
                          fontSize: 16,
                      },
                      percent1: {
                          color: colorList[0][2],
                          fontSize: 22,
                      },
                      percent2: {
                          color: colorList[1][2],
                          fontSize: 22,
                      },
                  },
              },
              formatter: (name) => {
                  const idx = scaleData.findIndex(v => v.name === name)
                  if (idx < 0) {
                      return ''
                  }
                  return (
                      `\r{name|${scaleData[idx].name}}\r\r{percent${idx + 1}|${scaleData[idx].value}}`
                  )
              },
          }],
          color: colorList,
          series: [{
              name: '居住证办理',
              type: 'pie',
              radius: ['55%', '73%'],
              center: ['35%', '50%'],
              label: {
                  normal: {
                      show: true,
                      position: 'center',
                      color: '#c2eaff',
                      fontSize: 28,
                      fontFamily: 'HYZongYiJ regular',
                      formatter: () => {
                          return total
                      },
                  },
              },
              labelLine: {
                  show: false,
              },
              data: data,
          }, ]
      };