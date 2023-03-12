 let vale = 20
let splitNumber = 10
let startAngle = 225
let endAngle = -45

let endAngle2 = startAngle -(startAngle-endAngle)*(vale/100)
let splitNumber2 = (startAngle-endAngle2)/27

option = {
      backgroundColor: "#062a44",
      series: [  {
        center: ['50%', '60%'], // 仪表的位置
        name: '刻度', // 仪表的名字
        type: 'gauge', // 统计图类型为仪表
        radius: '70%', // 统计图的半径大小
        min: 0, // 最小刻度
        max: 100, // 最大刻度
        z: 2,
        splitNumber: splitNumber, // 刻度数量
        startAngle: startAngle, // 开始刻度的角度
        endAngle: endAngle, // 结束刻度的角度
        axisLine: { // 设置默认刻度盘上的刻度不显示，重新定义刻度盘
          show: false,
          lineStyle: {
            width: 1,
            color: [[1, 'rgba(255,255,255,0)']]
          }
        }, // 仪表盘轴线
  
        axisTick: {
          show: true,
          splitNumber: 6, // 刻度的段落数
          lineStyle: {
            color: '#FF1D35',
            width: 3 // 刻度的宽度
          },
          length: -12 // 刻度的长度
        }, // 刻度样式
        splitLine: { // 文字和刻度的偏移量
          show: true,
          length: 20, // 便宜的长度
          lineStyle: {
            color: '#FF1D35',
            width: 3
          }
        } // 分隔线样式
      },
      {
        center: ['50%', '60%'], // 仪表的位置
        name: '刻度', // 仪表的名字
        type: 'gauge', // 统计图类型为仪表
        radius: '70%', // 统计图的半径大小
        min: 0, // 最小刻度
        max: 100, // 最大刻度
        z: 4,
        splitNumber: splitNumber2, // 刻度数量
        startAngle: startAngle, // 开始刻度的角度
        endAngle: endAngle2 , // 结束刻度的角度
        axisLine: { // 设置默认刻度盘上的刻度不显示，重新定义刻度盘
          show: false,
          lineStyle: {
            width: 1,
            color: [[1, 'rgba(255,255,255,0)']]
          }
        }, // 仪表盘轴线
        axisLabel: { // 仪表盘上的数据
          show: false
        }, // 刻度标签。
        axisTick: {
          show: true,
          splitNumber: 6, // 刻度的段落数
          lineStyle: {
            color: '#54EDFF',
            width: 3 // 刻度的宽度
          },
          length: -12 // 刻度的长度
        }, // 刻度样式
        splitLine: { // 文字和刻度的偏移量
          show: true,
          length: 20, // 便宜的长度
          lineStyle: {
            color: '#54EDFF',
            width: 3
          }
        } // 分隔线样式
      },
      
    //   {
    //     type: 'gauge', // 刻度轴表盘
    //     radius: '88%', // 刻度盘的大小
    //     center: ['50%', '60%'], // 刻度盘的位置
    //     splitNumber: 10, // 刻度数量
    //     startAngle: 225, // 开始刻度的角度
    //     endAngle: -45, // 结束刻度的角度
    //     axisLine: { // 刻度的线条
    //       show: true,
    //       lineStyle: {
    //         width: 1, // 定义一个宽15的数轴
    //         color: [ // 颜色为渐变色
    //           [1, '#00A1EA']
    //         ]
    //       }
    //     },
    //     // 分隔线样式。
    //     splitLine: { // 表盘上的轴线
    //       show: false
    //     },
    //     axisLabel: { // 表盘上的刻度数值文字
    //       show: false
    //     },
    //     axisTick: { // 表盘上的刻度线
    //       show: false
    //     },
    //     pointer: { // 表盘上的指针
    //       show: 0
    //     },
    //     itemStyle: { // 表盘指针的颜色
    //       color: '#18c8ff'
    //     },
    //     detail: {
    //       show: 0
    //     }
    //   },
      {
        type: 'gauge', // 刻度轴表盘
        radius: '91%', // 刻度盘的大小
        center: ['50%', '60%'], // 刻度盘的位置
        splitNumber: 10, // 刻度数量
        // startAngle: 225, // 开始刻度的角度
        // endAngle: -45, // 结束刻度的角度
        startAngle: startAngle, // 开始刻度的角度
        endAngle: endAngle ,
        z: 5,
        axisLine: { // 刻度的线条
          show: true,
          lineStyle: {
            width: 1, // 定义一个宽15的数轴
            color: [ // 颜色为渐变色
              [1, '#00A1EA']
            ]
          }
        },
        // 分隔线样式。
        splitLine: { // 表盘上的轴线
          show: false
        },
        axisLabel: { // 表盘上的刻度数值文字
          show: false
        },
        axisTick: { // 表盘上的刻度线
          show: false
        },
        pointer: { // 表盘上的指针
          show: true,
          length: '60%'
        },
        itemStyle: { // 表盘指针的颜色
          color: '#FF2246',
          borderWidth: 1,
          borderColor: '#00E9B5'
        },
        title: {
          show: true,
          offsetCenter: [0, '70%'],
          color: '#2AFFFC',
          fontSize: 16,
          borderRadius: 21,
          padding: 5
        },
        detail: {
          show: true,
          offsetCenter: [0, '44%'],
          color: '#FF2222',
          formatter: function (params) {
            return params + '%'
          },
          textStyle: {
            fontSize: 30,
            fontWeight: 'bold'
          }
        },
        data: [{name: '查获率', value: vale}]
      },
      {
        name: '小圆形1',
        type: 'pie',
        center: ['50%', '60%'],
        hoverAnimation: false,
        legendHoverLink: false,
        radius: ['0%', '6%'],
        z: 10,
        label: {
          normal: {
            show: false,
            position: 'center'
          },
          emphasis: {
            show: false
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [{
          value: 0,
          name: '1',
          itemStyle: {
            normal: {
              color: '#00A0E9'
            }
          }
        }, {
          value: 100,
          name: '2',
          itemStyle: {
            normal: {
              color: '#00A0E9'
            },
            emphasis: {
              color: '#00A0E9'
            }
          }
        }]
      },
      {
        name: '小圆形2',
        type: 'pie',
        center: ['50%', '60%'],
        hoverAnimation: false,
        legendHoverLink: false,
        radius: ['6%', '10%'],
        z: 10,
        label: {
          normal: {
            show: false,
            position: 'center'
          },
          emphasis: {
            show: false
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [{
          value: 0,
          name: '1',
          itemStyle: {
            normal: {
              color: '#fff'
            }
          }
        }, {
          value: 100,
          name: '2',
          itemStyle: {
            normal: {
              color: '#fff'
            },
            emphasis: {
              color: '#fff'
            }
          }
        }]
      },
      {
        name: '小圆形3',
        type: 'pie',
        center: ['50%', '60%'],
        hoverAnimation: false,
        legendHoverLink: false,
        radius: ['10%', '12%'],
        z: 10,
        label: {
          normal: {
            show: false,
            position: 'center'
          },
          emphasis: {
            show: false
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [{
          value: 0,
          name: '1',
          itemStyle: {
            normal: {
              color: '#3F6CA1'
            }
          }
        }, {
          value: 100,
          name: '2',
          itemStyle: {
            normal: {
              color: '#3F6CA1'
            },
            emphasis: {
              color: '#3F6CA1'
            }
          }
        }]
      },
      {
        name: '小圆形4',
        type: 'pie',
        center: ['50%', '60%'],
        hoverAnimation: false,
        legendHoverLink: false,
        radius: ['14%', '12%'],
        z: 10,
        label: {
          normal: {
            show: false,
            position: 'center'
          },
          emphasis: {
            show: false
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [{
          value: 0,
          name: '1',
          itemStyle: {
            normal: {
              color: '#00A0E9'
            }
          }
        }, {
          value: 100,
          name: '2',
          itemStyle: {
            normal: {
              color: '#00A0E9'
            },
            emphasis: {
              color: '#00A0E9'
            }
          }
        }]
      }
      ]
    }