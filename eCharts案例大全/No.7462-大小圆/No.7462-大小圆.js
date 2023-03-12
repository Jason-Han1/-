                      option = {



                          legend: {
                              
                              x:'0',
                              y:'0',
                              itemGap:2, //图例间隔
                              orient: 'vertical', //图例排列
                              formatter: function(name) {
                                  return `${name}`;
                              },
                              itemWidth: 15,
                              data: [{
                                      name: '已缴纳',
                                      // 强制设置图形为圆。

                                      // 设置文本为红色
                                      textStyle: {
                                          color: 'red'
                                      },

                                  }, {
                                      name: '未缴纳',
                                      color: 'red',
                                      // 强制设置图形为圆。


                                      // 设置文本为红色
                                      textStyle: {
                                          color: 'red'
                                      }
                                  },

                              ]

                          },
                          tooltip: {
                              trigger: 'item',

                          },
                          calculable: true,
                          series: [{
                                  name: '保证金缴纳情况1',
                                  type: 'pie',
                                  labelLine: {
                                      show: false
                                  },
                                  //  radius: [60, 90],
                                  center: ['50%', '50%'],
                                  data: [{
                                          name: '已缴纳',
                                          value: 60, // 右
                                          label: {
                                              show: false
                                          },
                                          itemStyle: {
                                              color: '#5aece3'
                                          }
                                      },
                                      {

                                          name: '未缴纳1',
                                          value: 100, // 左
                                          itemStyle: {
                                              color: 'transparent'
                                          }
                                      }
                                  ]
                              },
                              {
                                  name: '保证金缴纳情况2',
                                  type: 'pie',
                                  labelLine: {
                                      show: false
                                  },
                                  label: {
                                      show: false
                                  },
                                  radius: [0, 200],
                                  center: ['50%', '50%'],
                                  data: [{
                                          value: 60, // 右
                                          name: '已缴纳',
                                          itemStyle: {
                                              color: 'transparent'
                                          }
                                      },
                                      {
                                          name: '未缴纳',

                                          value: 100, // 左
                                          itemStyle: {
                                              color: '#ec5a68'
                                          }
                                      }
                                  ]
                              }
                          ]
                      }