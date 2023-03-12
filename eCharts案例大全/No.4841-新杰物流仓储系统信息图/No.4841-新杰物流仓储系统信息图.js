  // 基于准备好的dom，初始化echarts实例
  let value = 65.23;
  let title = '可用库存';
  let int = value.toFixed(2).split('.')[0];
  let float = value.toFixed(2).split('.')[1];
  let rkdun = 2345.284;




  option = {
      backgroundColor: '#04033a',
      color: ['#f0c725', '#16f892'],
      title: [{
              left: 'center',
              text: '———新杰物流仓储系统信息图———',
              textStyle: {
                  color: '#c1cadf',
                  fontSize: '15'
              },
              top: 'top',
          }, {
              text: '{c|' + title + '}',
              x: '21.5%',
              y: '27%',
              textStyle: {
                  rich: {
                      c: {
                          fontSize: 20,
                          color: '#fff'
                      }
                  }
              }
          }, {
              text: '{a|' + int + '}{b|.' + float + '%}',
              x: '21.5%',
              y: '18%',
              textStyle: {
                  rich: {
                      a: {
                          fontSize: 40,
                          color: '#fff',
                          fontWeight: '600',
                      },
                      b: {
                          fontSize: 20,
                          color: '#fff',
                          padding: [0, 0, 14, 0]
                      }
                  }
              }
          },
          {
              text: '{a|入库吨位:}{b|' + rkdun + '}{c|入库立方:}{b|' + rkdun + '}\n{a|出库吨位:}{b|' + rkdun + '}{c|出库立方:}{b|' + rkdun + '}\n{a|在库吨位:}{b|' + rkdun + '}{c|在库立方:}{b|' + rkdun + '}',
              x: '45%',
              y: '10%',
              textStyle: {
                  rich: {
                      a: {
                          fontSize: 30,
                          color: '#f0c725',
                          fontWeight: '600',
                      },
                      b: {
                          fontSize: 20,
                          color: '#fff',
                          width: 200
                      },
                      c: {
                          fontSize: 30,
                          color: '#16f892',
                          fontWeight: 600
                      }
                  }
              }
          },
      ],

      tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
      },
      legend: {
          data: ['客户需求', '内部需求', '新系统'],
          x: 'center',
          top: '95%',
          textStyle: {
              color: '#c1cadf',
              "fontSize": 12,
          },
          selected: {
              '剩余库存': false,
          }
      },
      grid: {
          left: '6%',
          right: '4%',
          top: '50%',
          bottom: '3%',
          containLabel: true
      },
      toolbox: {
          show: true,
          orient: 'vertical',
          x: 'right',
          y: 'center'
      },
      xAxis: [{
          type: 'category',
          boundaryGap: false,
          data: ['集团项目部','集团销售部','企管部','其它','北京新杰','成都新杰','广州新杰','杭州新杰','合肥新杰','济南新杰','昆明新杰','南京新杰','上海新杰','深圳新杰','石家庄新杰','苏州新杰','太原新杰','天津新杰'],
          axisLine: {
              lineStyle: {
                  color: 'rgba(240,199,37,0.5)'
              }
          },
          axisLabel: {
              interval: 0,
              rotate: '1',
              color: '#c1cadf'
          }
      }],
      yAxis: [{
              type: 'value',
              name: '(人数)',
              nameTextStyle: {
                  color: '#c1cadf',
                  align: 'right',
                  lineHeight: -5,
              },
              axisLine: {
                  lineStyle: {
                      color: 'rgba(240,199,37,0.5)'
                  }
              },
              axisLabel: {
                  interval: 0,
                  color: '#c1cadf'
              },
              splitLine: {
                  show: false
              }
          }

      ],
      series: [{
              label: {
                  show: true,
                  position: 'inside',
                  formatter: '{c}',
                  offset: [0, 0],
                  textStyle: {
                      color: '#04033a'
                  }
              },
              name: '客户需求',
              type: 'bar',
              smooth: true,
              symbolSize: 8,
              areaStyle: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: 'rgba(240,199,37,0.5)'
                  }, {
                      offset: 1,
                      color: 'rgba(240,199,37,0.01)'
                  }])
              },
              data: [12,1,0,1,2,1,2,3,1,1,0,0,11,0,0,2,0,5],
              barWidth: '30%',
              itemStyle: {
                  normal: {
                      color: '#f0c725'
                  }
              },
              //  markLine: {
              //    silent: true,
              //     data: [{
              //          yAxis: 35
              //      }]
              //  },
              //   markPoint: {
              //      label: {
              //          normal: {
              //              show: true,
              //             align: 'center',
              //              color: 'WHITE',
              //             fontWeight: 100,
              //             formatter: '{b}'
              //     }
              //    },
              //   itemStyle: {
              //       normal: {
              //           color: {
              //               type: 'radial',
              //               x: 0.4,
              //              y: 0.4,
              //              r: 0.9,
              //             colorStops: [{
              //                  offset: 0,
              //                  color: '#51e0a2'
              //              }, {
              //                 offset: 1,
              ////                 color: 'rgb(33,150,243)'
              //             }],
              //              globalCoord: false
              //         },
              //    shadowColor: 'rgba(0, 0, 0, 0.5)',
              //        shadowBlur: 10,
              //      }
              //   }
              // }
          }, {
              label: {
                  show: true,
                  position: 'inside',
                  formatter: '{c}',
                  offset: [0, -10],
                  textStyle: {
                      color: '#04033a'
                  }
              },
              name: '内部需求',
              type: 'bar',
              smooth: true,
              symbolSize: 8,
              areaStyle: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: 'rgba(22,248,146,0.5)'
                  }, {
                      offset: 1,
                      color: 'rgba(22,248,146,0.01)'
                  }])
              },
              data: [24,3,15,22,3,2,2,9,0,1,0,1,59,9,1,2,1,10],
              barWidth: '30%',
              itemStyle: {
                  normal: {
                      color: '#16f892'
                  }
              }
          }, {
              label: {
                  show: true,
                  position: 'inside',
                  formatter: '{c}',
                  offset: [0, -10],
                  textStyle: {
                      color: '#04033a'
                  }
              },
              name: '新系统',
              type: 'bar',
              smooth: true,
              symbolSize: 8,
              areaStyle: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: 'rgba(22,248,146,0.5)'
                  }, {
                      offset: 1,
                      color: 'rgba(22,248,146,0.01)'
                  }])
              },
              data: [2,0,1,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0],
              barWidth: '30%',
              itemStyle: {
                  normal: {
                      color: '#16f892'
                  }
              }
          },


          {
              type: 'gauge',
              radius: '45%',
              clockwise: false,
              startAngle: '90',
              endAngle: '-269.9999',
              splitNumber:30,
              center: ["25%", "25%"],
              detail: {
                  offsetCenter: [0, -20],
                  formatter: ' '
              },
              pointer: {
                  show: false
              },
              axisLine: {
                  show: true,
                  lineStyle: {
                      color: [
                          [0, '#2CFAFC'],
                          [1-(value / 100), '#0ff'],
                          [1, '#0f232e']
                      ],
                      width: 20
                  }
              },
              axisTick: {
                  show: false
              },
              splitLine: {
                  show: true,
                  length: 70,
                  lineStyle: {
                      shadowBlur: 10,
                      shadowColor: 'rgba(0, 255, 255, 1)',
                      shadowOffsetY: '0',
                      color: '#020f18',
                      width: 2
                  }
              },
              axisLabel: {
                  show: false
              }
          },
          {
              type: 'pie',
              radius: ['33%', '34%'],
              hoverAnimation: false,
              clockWise: false,
              center: ["25%", "25%"],
              itemStyle: {
                  normal: {
                      color: '#0C355E'
                  }
              },
              label: {
                  show: false
              },
              data: _dashed()
          },

          {
              type: 'pie',
              radius: [0, '25%'],
              hoverAnimation: false,
              clockWise: false,
              center: ["25%", "25%"],
              itemStyle: {
                  normal: {
                      shadowBlur: 20,
                      shadowColor: '#000',
                      color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                          offset: 0,
                          color: '#0FF',
                      }, {
                          offset: 1,
                          color: '#060f20'
                      }])
                  }
              },
              label: {
                  show: false
              },
              data: [100]
          },
          {
              type: 'pie',
              radius: ['47%', '48.5%'],
              hoverAnimation: false,
              clockWise: false,
              center: ["25%", "25%"],
              itemStyle: {
                  normal: {
                      shadowBlur: 20,
                      shadowColor: 'rgba(0, 255, 255,.3)',
                      color: '#0f232e'
                  }
              },
              label: {
                  show: false
              },
              data: [100]
          },
          {
              type: 'pie',
              radius: ['50%', '53.5%'],
              hoverAnimation: false,
              center: ["25%", "25%"],
              clockWise: false,
              itemStyle: {
                  normal: {
                      shadowBlur: 20,
                      shadowColor: 'rgba(0, 255, 255,.3)',
                      color: 'rgba(15, 35, 46,.6)',
                  }
              },
              label: {
                  show: false
              },
              data: [100]
          },

      ]
  };



  function _dashed() {
      let dataArr = [];
      for (var i = 0; i < 100; i++) {
          if (i % 2 === 0) {
              dataArr.push({
                  name: (i + 1).toString(),
                  value: 20,
                  itemStyle: {
                      normal: {
                          color: 'rgb(0,255,255,.3)',
                      }
                  }
              })
          } else {
              dataArr.push({
                  name: (i + 1).toString(),
                  value: 20,
                  itemStyle: {
                      normal: {
                          color: 'rgb(0,0,0,0)',
                          borderWidth: 1,
                          borderColor: "rgba(0,255,255,1)"
                      }
                  }
              })
          }

      }
      return dataArr

  }

  function doing() {
      let option = myChart.getOption();
      option.series[4].startAngle = option.series[4].startAngle - 1;
      myChart.setOption(option);
  }

  function startTimer() {
      timer = setInterval(doing, 100);
  }
  setTimeout(startTimer, 1000);