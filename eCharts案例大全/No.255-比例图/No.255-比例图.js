
var value=80
option = {
    title: {
        text: '{a|' + value + '%}',
        x: 'center',
        y: 'center',
        textStyle: {
          rich: {
            a: {
              fontSize:32,
              color: 'rgb(0,0,0)'
            }
          }
        }
      },
      series:[
        //圆环底色
        {
          type: 'pie',
          zlevel: 0,
          silent: true,
          radius: ['80%', '55%'],
          label: {
            normal: {
              show: false
            }
          },

          itemStyle: {
            normal: {
              color: 'rgb(	128,0,0)'
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [1]
        },
        //比例圆环
        {
          name: '',
          type: 'pie',
          radius: ['80%', '66%'],
          silent: true,
          clockwise: true,
          startAngle: 90,
          z: 0,
          zlevel: 2,
          label: {
            normal: {
              position: 'center'
            }
          },
          data: [
            {
              value: 100 - value,
              name: '',
              label: {
                normal: {
                  show: false
                }
              },
              itemStyle: {
                normal: {
                  color: '#48e9f7',
                  opacity: 0
                }
              }
            },
            {
              value: value,
              name: '',
              itemStyle: {
                normal: {
                  color: {
                    // 完成的圆环的颜色
                    colorStops: [
                      {
                        offset: 0,
                        color:'rgb(210,105,30,0.7)'
                        // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: 'rgb(210,105,30)'// 100% 处的颜色
                      }
                    ]
                  }
                }
              }
            }
          ]
        },

        //中间圆形
        {
          type: 'pie',
          zlevel: 1,
          silent: true,
          radius: ['55%', '0%'],
          label: {
            normal: {
              show: false
            }
          },
          color: 'rgba(255,255,255,0)',
          itemStyle: {
            normal: {
              color: {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 0.5,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(0,0,0 ,0)' // 0% 处的颜色
                  },
                  {
                    offset: 0.5,
                    color: 'rgba(0,0,0 ,0)' // 50% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(255,99,71,0.3)' // 100% 处的颜色
                  }
                ],
                globalCoord: false // 缺省为 false
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [1]
        },
        //分割线
        {
          zlevel: 3,
          name: '',
          type: 'gauge',
          radius: '88%',
          center: ['50%', '50%'],
          startAngle: 90,
          endAngle: 450,
          splitNumber: 6,
          hoverAnimation: true,
          axisTick: {
            show: false
          },
          splitLine: {
            length: '17%',
            lineStyle: {
              width: 5,
              borderRadius: 3,
              color: 'rgb(	128,0,0)'
            }
          },
          axisLabel: {
            show: false
          },
          pointer: {
            show: false
          },
          axisLine: {
            lineStyle: {
              opacity: 0
            }
          },
          detail: {
            show: false
          },
          data: [
            {
              value: 0,
              name: ''
            }
          ]
        }
    ]
};
