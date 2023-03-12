var icon = 'image://data:image/png;base64,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'

option = {
      backgroundColor: '#000',
      textStyle: {
        color: '#40E7F4',
        fontSize: 16,
        fontWeight: 'normal'
      },
      title: {
        text: '累计认证个人用户',
        left: '9%',
        top: '6%',
        textStyle: {
          color: '#40E7F4',
          fontSize: 20,
          fontWeight: 'normal'
        }
      },
      radar: {
        shape: 'circle',
        radius: 124,
        center: ['50%', '66%'],
        startAngle: 45,
        splitNumber: 4,
        name: {
          color: '#fff',
          padding: [0, 20, 0, 20],
          formatter: function (value, indicator) {
            return '{a|' + value + '}\n{b|' + indicator.num + '}'

          },
          lineHeight: 20,
          rich: {
            a: {
              color: '#27C2E1',
              fontSize: 14,
              align: 'center'
            },
            b: {
              color: '#ddd',
              fontSize: 16,
              align: 'center'
            }
          }
        },
        axisLine: {
          lineStyle: {
            width: 2,
            color: 'rgba(2, 159, 254, 0.4)',
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            width: 1,
            type: 'dotted',
            color: 'rgba(2, 159, 254, .5)'
          },
        },
        splitArea: {
          show: false
        },
        indicator: [
          { name: '发货人', max: 6500, num: 4536 },
          { name: '收货人', max: 16000, num: 5334 },
          { name: '客户经理', max: 30000, num: 13733 },
          { name: '司机', max: 38000, num: 312234 },
        ],

      },
      series: [{
        name: '认证用户',
        type: 'radar',
        data: [
          {
            symbol: icon,
            symbolSize: 24,
            value: [4300, 12000, 18000, 35000],
            lineStyle: {
              width: 3,
              color: 'rgba(0, 255, 255, .9)'
            },
            areaStyle: {
              normal: {
                color: 'rgba(2, 159, 254, 0.3)'
              },
            }
          }
        ],
      }]

    }