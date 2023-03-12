option = option = {
        backgroundColor: '',
        color: ['#C7515A', '#EA8B00', '#CFAF4F', '#42C781', '#4F82CF', '#BDD4E9', '#9DC64E'],
        legend: {
          top: '25%',
          right: '13%',
          icon: 'circle',
          orient: 'vertical',
          itemGap: 12,
          textStyle: {
            color: '#8AD2FF',
            fontSize: 16,
            padding: 6
          },
          data: ['消防事件', '市容环卫', '公共卫生', '治安防范', '应急管理', '公共交通', '其他事件']
        },
        series: [
          //环形
          {
            name: '基础饼图',
            type: 'pie',
            radius: ['55%', '70%'],
            center: ['30%', '50%'],
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            zlevel: 1,
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: 312,
                name: '消防事件'
              },
              {
                value: 210,
                name: '市容环卫'
              },
              {
                value: 334,
                name: '公共卫生'
              },
              {
                value: 225,
                name: '治安防范'
              },
              {
                value: 210,
                name: '应急管理'
              },
              {
                value: 334,
                name: '公共交通'
              },
              {
                value: 225,
                name: '其他事件'
              }
            ].concat({
              name: '',
              value: 0,
              label: {
                normal: {
                  show: true,
                  position: 'center',
                  length: 100,
                  fontSize: 68,
                  formatter: '{aa| 12 }{bb|' + '%' + '}\n{cc|' + '消防事件}',
                  rich: {
                    aa: {
                      color: '#42C781',
                      fontSize: '70'
                    },
                    bb: {
                      color: '#00A2FF',
                      fontSize: '28'
                    },
                    cc: {
                      color: '#8AD2FF',
                      fontSize: '50'
                    }
                  }
                }
              }
            })
          },
          //环形分割线
          {
            name: '分割线',
            type: 'gauge',
            radius: '80%',
            clockwise: true,
            startAngle: '90',
            center: ['30%', '50%'],
            endAngle: '-269.9999',
            splitNumber: 22,
            zlevel: 2,
            detail: {
              offsetCenter: [10, 20],
              formatter: ' '
            },
            pointer: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              length:80,
              lineStyle: {
                color: '#fff',
                width: 4
              }
            },
            axisLabel: {
              show: false
            }
          }
        ]
      }