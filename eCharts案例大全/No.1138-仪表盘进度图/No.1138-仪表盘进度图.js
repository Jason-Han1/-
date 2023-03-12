const pointerData =5; // 仪表指针数据

var option = {
    backgroundColor: "#fff",
    title: {
        text: "仪表盘进度图",
        top: "10%",
        left: '2%',
        textStyle: {
            color: "#013f72",
            fontSize: 24,
            fontWeight: 300,
        },
        borderType: 'solid',
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth: 1,
        borderRadius: 2,
        backgroundColor: 'rgba(0,0,0,0.03)',
        padding: 5,
    },
    series: [{
              name: '', // 最外层的线
              type: 'gauge',
              radius: 190,
              startAngle: 180,
              endAngle: 0,
              data: [100],
            //   center: ['50%', '80%'],
              splitNumber: 1, //刻度数量
              splitLine: {
                  show: true,
                  length: 2,
                  distance: -1,
                  lineStyle: {
                      width: 2,
                      color:  'rgba(84, 108, 198, 0.65)',
                      cap: 'round'
                  }
              }, 
              axisLine: {
                  lineStyle: {
                      width:1,
                      shadowBlur: 0,
                      color: [
                          [1,  'rgba(84, 108, 198, 0.65)']
                      ]
                  }
              },
              axisLabel: {show: false},
              axisTick: {show: false},
              detail: {show: false},
              pointer: {
                    show: false,
                }
          },{
              name: '',  // 第二层的线
              type: 'gauge',
              radius: 185,
              startAngle: 180,
              endAngle: 0,
              data: [100],
            //   center: ['50%', '80%'],
              splitNumber: 1, //刻度数量
              splitLine: {
                  show: true,
                  length: 2,
                  distance: -1,
                  lineStyle: {
                      width: 2,
                      color:  'rgba(84, 108, 198, 0.65)',
                      cap: 'round'
                  }
              }, 
              axisLine: {
                  lineStyle: {
                      width:1,
                      shadowBlur: 0,
                      color: [
                          [1,  'rgba(84, 108, 198, 0.65)']
                      ]
                  }
              },
              axisLabel: {show: false},
              axisTick: {show: false},
              detail: {show: false},
              pointer: {
                    show: false,
                }
          },{
            name: '', // 第3层的刻度
            type: 'gauge',
            splitNumber: 8, //刻度数量
            startAngle: 180, //开始角度 左侧角度
            endAngle: 0, //结束角度 右侧
            min: 0,
            max: 100,
            radius: 170, //图表尺寸
            // center: ['50%', '80%'],
            axisLine: {
              show: false,
            },
            progress: {
                show: false,
                width: 20
            },
            axisTick: {
                distance: 5,
                show: true,
                splitNumber: 5,
                length: 8,
                lineStyle: {
                  width: 0.5,
                  color:'#000000'
                }
            },
            detail: {
                formatter: function() {
                    // var num = Math.round(value);
                    // return `{title|${_this.info.title}:}{title1|${_this.info.status}}`;
                },
                offsetCenter: ['0%', "30%"],
            },
            axisLabel: {
                show: false  
            },
            pointer: {
                show: false
            },
            splitLine: {
              show: false
            },
            data: [100],
          }, { 
            type: "gauge",
            //   center: ['50%', '80%'],
            radius: 150,
            z: 1,
              startAngle: 180,
              endAngle: 0,
            splitNumber: 50,
            title: {
                color: 'red',
            },
            splitLine: {
                show: true,
                length: 15,
                distance: -10,
                lineStyle: {
                    color: "#fff",
                    width: 4
                }
            },
            pointer: {
                show: false  
            },
            detail: {
                show: true,
                offsetCenter: [0, 60],
                fontSize: 22,
                formatter: val => [`{a|${val}}`, `{b|%}`].join(''),
                rich: {
                    a: {
                        fontSize: 20,
                        color: 'rgba(84, 108, 198, 0.65)',
                    },
                    b: {
                        fontSize: 24,
                        color: 'rgba(84, 108, 198, 0.65)',
                    }
                },
            },
            // 仪表盘的线，颜色值为一个数组
            axisLine: {
                show: true,
                // 两端是否设置为圆角；在5.0之后的版本有效
                roundCap: false,
                lineStyle: {
                    width: 15, 
                    shadowColor: '#0093ee', //默认透明
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 20,
                    opacity: 1,
                    color: [
                        [pointerData / 100, {
                            x: 0,
                            y: 0,
                            x1: 1,
                            y1: 0,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(0, 255, 255, 0.6)'
                            }, {
                                offset: 1,
                                color: 'rgba(0, 0, 255, .6)'
                            }]
                        }],
                        [1, "rgba(0,0,0,0.15)"]
                    ]
                }
            },
            // 仪表盘刻度标签
            axisLabel: {
                show: false,
                color: "rgba(84, 108, 198, 0.65)",
                fontSize: 14,
                distance: 20,
                formatter: val => {
                    const num = Math.floor(val);
                    return num % 20 === 0 ? num : "";
                }
            },
            // 刻度
            axisTick: {
                show: false
            },
            // 指针，此设置仅对5.0以上的版本生效
            anchor: {
                show: false,
                icon: "circle",
                showAbove: true,
                size: 20,
                itemStyle: {
                    borderWidth: 6,
                    borderColor: "rgba(84, 108, 198, 0.85)"
                }
            },
            data: [pointerData]
        },
        // {
        //     // 背景渐变色
        //     type: "pie",
        //     radius: "80%",
        //     // 不响应及触发鼠标事件
        //     silent: true,
        //     // 关闭背景动画
        //     animation: false,
        //     z: 0,
        //     itemStyle: {
        //         color: {
        //             type: "radial", // 径向渐变
        //             x: 0.5,
        //             y: 0.5,
        //             r: 0.25,
        //             colorStops: [{
        //                     offset: 0,
        //                     color: "rgba(84, 103, 198, 0.6)"
        //                 },
        //                 {
        //                     offset: 0.1,
        //                     color: "rgba(84, 103, 198, 0.35)"
        //                 },
        //                 {
        //                     offset: 1,
        //                     color: "rgba(84, 103, 198, 0)"
        //                 }
        //             ]
        //         }
        //     },
        //     data: [pointerData]
        // }
    ]
};