var topName = ['告警类型1', '告警类型2', '告警类型3', '告警类型4', '告警类型5']
            var topValue = [13, 23, 31, 45, 33]
             option = {
                backgroundColor:'#fff',
              title: {
                  show:false,
                text: '告警数TOP5',
                textStyle: {
                    fontSize:14,
                    color: '#333',
                },
                left: 0,
                top:'0%',
              },
              grid: {
                  top: 0,
                  bottom: '5%',
                  right: 4,
                  left: -30,
                  containLabel: true
              },
              xAxis: {
                  show: false
              },
              yAxis: [{
                  triggerEvent: true,
                  show: true,
                  inverse: true,
                  data: topName,
                  axisLine: {
                      show: false
                  },
                  splitLine: {
                      show: false
                  },
                  axisTick: {
                      show: false
                  },
                  axisLabel: {
                      interval: 0,
                      align: 'left',
                      margin: 100,
                      fontSize: 13,
                      formatter: (value, index) => {
                        
                          if (topName[index] === 0 && index < 5) {
                              return '{idx0|' + (1 + index ) + '} {title|' + value + '}'
                          } else {
                              return '{idx|' + (1 + index ) + '} {title|' + value + '}'
                          }
                      },
                      rich: {
                          idx0: {
                              color: '#fff',
                      backgroundColor: '#f15364',
                              borderRadius: 5,
                    fontSize: 12,
                              padding: 4,
                              align: 'center',
                              width: 15,
                              height: 15
                          },
                          idx: {
                              color: '#fff',
                      backgroundColor: '#F15364',
                              borderRadius: 5,
                    fontSize: 12,
                              padding: 4,
                              align: 'center',
                              width: 15,
                              height: 15
                          },
                          title: {
                              fontSize: 14,
                              color: '#999',
                    fontSize: 12,
                              padding: [4,4,4,16],
                              align: 'center',
                              
                          },
                          value: {
                              color: '#999',
                              backgroundColor: '#e8f0eb',
                              borderRadius: 5,
                    fontSize: 12,
                              padding: 4,
                              align: 'center',
                              width: 15,
                              height: 15
                              
                          }
                      }
                  },
              }, {
                  triggerEvent: true,
                  show: true,
                  inverse: true,
                  data: topName,
                  axisLine: {
                      show: false
                  },
                  splitLine: {
                      show: false
                  },
                  axisTick: {
                      show: false
                  },
                  axisLabel: {
                      interval: 0,
                      color: '#c2c4c8',
                      align: 'right',
                margin:70,
                      formatter: (value, index) => {
                          return '{value|' + topValue[index] + '}'
                      },
                rich: {
          
                          value: {
                              color: '#2c94e6',
                      backgroundColor: '#f3f4f8',
                              borderRadius: 12,
                    fontSize: 12,
                              padding: 4,
                    
                              align: 'center',
                              width: 30,
                              height: 10
                              
                          }
                      }
                  }
              }],
              series: [{
                      name: '条',
                      type: 'bar',
                      yAxisIndex: 0,
                      data: topValue,
                      barWidth: 10,
                      itemStyle: {
                  normal: {
                              color: "#2c94e6",
                              
                              barBorderRadius: 30
                          }
                
                      }
                  },
                  {
                      type: "bar",
                      barWidth: 10,
                      xAxisIndex: 0,
                      barGap: "-100%",
                      data: this.overviewAccountRiskDataMaxItemValue,
                      itemStyle: {
                          normal: {
                              color: "#f3f4f8",
                              barBorderRadius: 30
                          }
                      },
                      zlevel: -1
                  }
              ]
          };