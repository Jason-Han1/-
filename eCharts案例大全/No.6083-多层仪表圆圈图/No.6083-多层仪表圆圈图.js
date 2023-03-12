option = {
        backgroundColor: 'rgb(17,18,40)',
        title: {
          text: '60.6%',
          subtext: '股权投资',
          x: 'center',
          y: 'center',
          textStyle: {
            fontFamily: 'PangMenZhengDao',
            fontWeight: 'normal',
            textShadowColor: '#5D85FF',
            textShadowBlur: 10,
            color: '#DAEAFF',
            fontSize: '40'
          },
          subtextStyle: {
            fontFamily: 'PingFangSC-Medium',
            fontWeight: 'normal',
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '30',
            bottom: '30%'
          }
        },
        series: [
          {
            name: '最外层圆圈',
            type: 'pie',
            clockWise: true,
            radius: ['90%', '100%'],
            labelLine: {
              show: false
            },
            label: {
              show: false
            },
            itemStyle: {
              borderWidth: 4,
              borderColor: 'rgb(17, 18, 40)',
              color: 'rgb(25, 37, 64)'
            },
            hoverAnimation: false,
            data: [20, 20, 20, 20, 20]
          },
          {
            name: '下层圆圈',
            type: 'pie',
            clockWise: true,
            z: 2,
            radius: ['70%', '85%'],
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            itemStyle: {
              borderWidth: 2,
              borderColor: 'rgb(17, 18, 40)',
              color: 'rgb(32, 64, 116)'
            },
            hoverAnimation: false,
            data: [10, 5, 5, 10, 10, 25, 5, 10, 15]
          },
          {
            name: '刻度',
            type: 'gauge',
            radius: '64%',
            startAngle: 0, // 刻度起始
            endAngle: 360, // 刻度结束
            axisLine: {
              show: false,
              lineStyle: {
                width: 5,
                color: [
                  [1, '#1087e2']
                ]
              }
            }, // 仪表盘轴线
            axisLabel: {
              show: false
            }, // 刻度标签。
            axisTick: {
              show: true,
              splitNumber: 7,
              lineStyle: {
                color: '#1C3164', // 用颜色渐变函数不起作用
                width: 1
              },
              length: 4
            }, // 刻度样式
            splitLine: {
              show: true,
              length: 8,
              lineStyle: {
                color: '#1C3164' // 用颜色渐变函数不起作用
              }
            }, // 分隔线样式
            detail: {
              show: false
            },
            pointer: {
              show: false
            },
            data: [0]
          },
          {
            name: '上层圆圈',
            type: 'pie',
            z: 3,
            clockWise: true,
            radius: ['70%', '85%'],
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            hoverAnimation: false,
            data: [
              {
                value: 69,
                name: '',
                itemStyle: {
                  color: { // 完成的圆环的颜色
                    colorStops: [
                      {
                        offset: 0,
                        color: 'rgb(0, 243, 245)' // 0% 处的颜色
                      }, {
                        offset: 1,
                        color: 'rgb(0, 158, 254)' // 100% 处的颜色
                      }
                    ]
                  },
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                }
              },
              {
                value: 100 - 69,
                itemStyle: {
                  normal: {
                    color: 'transparent'
                  }
                }
              }
            ]
          }
        ]
      };