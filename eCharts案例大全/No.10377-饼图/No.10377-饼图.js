 option = {
              series: {
                  type: 'pie',
                  radius: [50, 65],
                  //hoverAnimation: false,
                  silent: true,
                  center: ['50%', '50%'],
                  data: [{
                    label:{
                        position: 'center',
                        show: false,
                    },
                    value: 11,
                    itemStyle: {
                        normal: {
                            color: '#e1e7f0',
                            //borderWidth:1,
                            //borderColor: '#073A66'
                        }
                    }
                  },{
                      value: 89,
                      label: {
                          normal: {
                              rich: {
                                  a: {
                                      color: '#515974',
                                      align: 'center',
                                      fontSize: 18,
                                      fontWeight: "bold",
                                  },
                                  b: {
                                      color: '#3a3a3a',
                                      align: 'center',
                                      fontSize: 14
                                  },
                              },
                              formatter: function(params){
                                  return "{b|平均CPU}"+"\n\n{a|"+params.value+"%}";
                              },
                              position: 'center',
                              show: true,
                              textStyle: {
                                  fontSize: '14',
                                  fontWeight: 'normal',
                                  color: '#fff'
                              }
                          }
                      },
                      itemStyle: {
                          normal: {
                              color: {
                                  type: 'linear',
                                  x: 0,
                                  y: 0,
                                  x2: 0,
                                  y2: 1,
                                  colorStops: [{
                                      offset: 0, color: '#56bb60' // 0% 处的颜色
                                  }, {
                                      offset: 1, color: '#5387ad' // 100% 处的颜色
                                  }],
                                  global: false // 缺省为 false
                              },

                          }
                      }
                  }]
              }
            }