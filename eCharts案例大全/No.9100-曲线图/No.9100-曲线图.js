      var option = {
          tooltip: {
              trigger: 'axis',
              backgroundColor: "rgba(255,255,255,0.1)",
              axisPointer: {
                  type: 'line',
                  lineStyle: {
                      color: 'rgba(255,255,255,0.05)'
                  }
              },
              textStyle: {
                  fontSize: '10',
              },
              padding: [8, 8, 8, 8],
              // formatter:'{b}<br/>{a0}：{c0}万<br/>{a1}：{c1}万'
              formatter: function(params) {
                  var result = ""
                  var respon = ""
                  for (var key in params) {
                      respon = params[key].seriesName + "：" + params[key].value
                      result = result + respon + "万" + "<br/>"
                  }
                  return params[0].name + "<br/>" + result
              }
          },
          legend: {
              icon: 'stack',
              itemWidth: 20,
              itemHeight: 5,
              textStyle: {
                  color: '#999999'
              },
              data: ['在网链接总数', 'IPv6活跃链接总数'],
          },
          grid: {
              top: '20%',
              left: '5%',
              right: '4%',
              bottom: '3%',
              height: '75%',
              containLabel: true
          },
          xAxis: {
              type: 'category',
              data: ['2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06', '2019-07', '2019-08', '2019-09', '2019-10', '2019-11'],
              axisLine: {
                  lineStyle: {
                      color: "#50556b"
                  }
              },
              axisLabel: {
                  textStyle: {
                      color: '#999999',
                      fontSize: '10',
                      fontFamily: 'Microsoft YaHei'
                  }
              },
              // axisTick:{length:0},

          },
          yAxis: {
              type: 'value',
              name: '万',
              min: '0',
              max: '1500',
              axisLabel: {
                  textStyle: {
                      color: '#8c99a8',
                      fontSize: '10',
                      fontFamily: 'Microsoft YaHei'
                  },
                  formatter: '{value}'
              },
              axisTick: {
                  show: false,
                  length: 15,
                  lineStyle: {
                      color: "#e4e4e4",
                  }
              },
              splitLine: {
                  // show:true,
                  lineStyle: {
                      type: 'bolid',
                      color: '#50556b'
                  }
              },
              axisLine: {
                  show: true,
                  lineStyle: {
                      color: "#50556b"
                  },
              },
              nameTextStyle: {
                  color: "#999"
              },
              splitArea: {
                  show: false
              }
          },
          series: [{
                  name: '在网链接总数',
                  type: 'line',
                  //   里面小圆点
                  symbol: 'circle',
                  symbolSize: '2',
                  data: [1093.15, 1094.50, 1095.74, 1110.98, 1125.21, 1120.08, 1119.32, 1354.89, 1167.90, 1151.34],
                  //   color: "#9173f8",
                  lineStyle: {
                      normal: {
                          width: 3,
                          color: {
                              type: 'linear',

                              colorStops: [{
                                      offset: 0,
                                      color: '#7a5cff' // 0% 紫色
                                  },
                                  {
                                      offset: 1,
                                      color: '#00c9b6' // 100% 青色
                                  }
                              ],
                              globalCoord: false // 缺省为 false
                          },
                      }
                  },
                  itemStyle: {
                      normal: {
                          borderWidth: 2,
                          borderColor: "#fff",
                          color: {
                              type: 'stack',
                              colorStops: [{
                                      offset: 0,
                                      color: '#7a5cff' // 0% 紫色
                                  },
                                  {
                                      offset: 1,
                                      color: '#00c9b6' // 100% 青色
                                  }
                              ],
                              globalCoord: false // 缺省为 false
                          },
                      }
                  },
                  smooth: true
              },

              {
                  name: 'IPv6活跃链接总数',
                  type: 'line',
                  symbol: 'circle',
                  symbolSize: '2',
                  data: [132.37, 154.53, 176.47, 204.96, 360.58, 575.62, 593.30, 660.76, 827.45, 791.12],
                  lineStyle: {
                      normal: {
                          width: 3,
                          color: {
                              type: 'linear',

                              colorStops: [{
                                      offset: 0,
                                      color: '#f47129' // 0% 处的颜色
                                  },
                                  {
                                      offset: 1,
                                      color: '#f49c29' // 100% 处的颜色
                                  }
                              ],
                              globalCoord: false // 缺省为 false
                          },
                          //   shadowColor: 'rgba(41,238,244, 0.5)',
                          //   shadowBlur: 10,
                          //   shadowOffsetY: 3
                      }
                  },

                  itemStyle: {
                      normal: {
                          borderWidth: 2,
                          borderColor: "#fff",
                          color: {
                              type: 'stack',
                              colorStops: [{
                                      offset: 0,
                                      color: '#f47129' // 0% 紫色
                                  },
                                  {
                                      offset: 1,
                                      color: '#f49c29' // 100% 青色
                                  }
                              ],
                              globalCoord: false // 缺省为 false
                          },
                      }
                  },
                  smooth: true
              },
          ],
      };