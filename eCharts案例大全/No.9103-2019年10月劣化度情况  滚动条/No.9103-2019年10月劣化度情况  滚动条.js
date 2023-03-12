  var dataMap = {};
  var count = 0;

  function dataFormatter(obj) {
      console.log(obj)
      var pList = ['北京', '天津', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '上海', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '重庆', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆'];
      var temp;
      count += 1
      for (var year = 2002; year <= 2005; year++) {
          var max = 0;
          var sum = 0;
          var index = 0;
          var per = 0;
          temp = obj[year];
          for (var i = 0, l = temp.length; i < l; i++) {
              if (count == 1) {
                  if (temp[i] > 10) {
                      index += 1
                  }
              } else if (count == 2) {
                  if (temp[i] > 0 && temp[i] <= 10) {
                      index += 1
                  }
              } else if (count == 3) {
                  if (temp[i] < 0) {
                      index += 1
                  }
              }
              if (temp[i] != undefined) {
                  per += 1
              }
              max = Math.max(max, temp[i]);
              sum += temp[i];
              obj[year][i] = {
                  name: pList[i],
                  value: temp[i]
              }
          }
          obj[year + 'max'] = per;
          obj[year + 'sum'] = (index * 100 / per).toFixed(2);
      }
      return obj;
  }
  dataMap.dataPI = dataFormatter({
      2005: [, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0],
      2004: [0, 0, 0, 0, 0, 0, , 0, 0, 0, 0, 0, 0, 0, 0, 23.14, 14.86, 0, 0, 0, 0, 0, 0, , 11.09, 0, 0, 0, 0, 0, 0],
      2003: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, , 0, , , 0, 0, 0],
      2002: [15.4, 12.6, 0, 15.4, 13.8, 0, 18.7, 0, 0, 18, 32.9, 0, 17.7, 0, 0, 0, 34.5, 14, 11.3, 11.2, 11.8, 42.5, 12.3, 19.4, 32.2, 13.6, 28.9, 26, 0, 16.5, 28.2]
  });

  dataMap.dataSI = dataFormatter({
      2005: [, 5.2, 0, 0, 1.3, 0.7, 0.7, 0.9, 0, 3.8, 7.7, , 3.78, 0, 4.7, 0.6, 5.7, 7.9, 3.2, 0.1, 3, 1.7, 0.3, 0.3, 5.6, 0, 2.3, 0, 0, 5.4, 3.2],
      2004: [3.72, 7.24, 3.16, 0.45, 2.76, 0, , 0.77, 0, 3.44, 6.66, 0, 4.41, 0, 4.97, 0, 0, 9.41, 0, 0, 0, 9.68, 5.39, , 0, 0, 4.11, 0.27, 1.53, 2.13, 6.31],
      2003: [1.49, 1.54, 1.85, 0, 1.11, 0.98, 2.54, 0.4, 2.21, 4.22, 3.29, 0.78, 8.1, 5.41, 6.63, 0.13, 8.09, 7.84, 0.41, 4.57, 3.95, 4.23, 3.4, , 1.47, 2, , , 1.08, 0, 1.17],
      2002: [0, 0, 9.6, 0, 0, 9.7, 0, 6.6, 7.1, 0, 0, 2, 0, 7, 6.2, 5.4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0]
  });

  dataMap.dataTI = dataFormatter({
      2005: [, 0, -0.4, -5, 0, 0, 0, 0, -1.3, 0, 0, , 0, -2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1.8, 0, -4.9, 0, 0, 0],
      2004: [0, 0, 0, 0, 0, -0.61, , 0, -0.84, 0, 0, -4.1, 0, -3.28, 0, 0, 0, 0, -0.19, -0.47, -3.44, 0, 0, , 0, -1, 0, 0, 0, 0, 0],
      2003: [0, 0, 0, -1.16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, , 0, 0, , , 0, -0.58, 0],
      2002: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  });
  var option = {
      baseOption: {
          timeline: {
               tooltip: {
              trigger: 'item',
              formatter: '{b}',
              textStyle: {
                  fontSize: '28',
              }
               },
              // y: 0,
              axisType: 'category',
              // realtime: false,
              // loop: false,
              autoPlay: true,
              // currentIndex: 2,
              playInterval: 2000,
              // symbol:'roundRect',
              // controlStyle: {
              //     position: 'left'
              // },
              data: [
                  '2019-5', '2019-6', '2019-9', '2019-10',
              ],
          },
          legend: {
              x: 'center',
              data: ['劣化度高于10%', '劣化度0~10%', '劣化度高于IPv4'],
          },
          calculable: true,
          grid: {
              top: 80,
              bottom: 100
          },
          tooltip: {
              trigger: 'item',
              formatter: "{b}:{c}%",
              textStyle: {
                  fontSize: '28',
              },
              //  formatter:function(parms){
              //     console.log(parms)
              //     var str="："+parms[0].name+"</br>"
              //     +parms[0].marker+"劣化度高于10%业"+parms[0].seriesName+"："+ Math.abs(parms[0].data)+"%"+"</br>"
              //     +parms[1].marker+"劣化度0~10%"+parms[1].seriesName+"："+ Math.abs(parms[1].data)+"%"+"</br>"
              //     +parms[2].marker+"劣化度高于IPv4"+parms[2].seriesName+"："+ Math.abs(parms[ 2].data)+"%"+"</br>"
              //     return str;
              // }
          },
          xAxis: [

              {

                  'type': 'category',
                  'axisLabel': {
                      'interval': 0
                  },
                  'data': [
                      '北京', '\n天津', '河北', '\n山西', '内蒙古', '\n辽宁', '吉林', '\n黑龙江',
                      '上海', '\n江苏', '浙江', '\n安徽', '福建', '\n江西', '山东', '\n河南',
                      '湖北', '\n湖南', '广东', '\n广西', '海南', '\n重庆', '四川', '\n贵州',
                      '云南', '\n西藏', '陕西', '\n甘肃', '青海', '\n宁夏', '新疆'
                  ],
                  splitLine: {
                      show: false
                  }
              }
          ],
          yAxis: [{
              type: 'value',
              name: '劣化度',
              // inverse:'false',
              axisLabel: {
                  textStyle: {
                      fontFamily: 'Microsoft?YaHei'
                  },
                  formatter: '{value} %',
                  //          formatter: function(value, index) {
                  //     var val = Math.abs(value)
                  //     return val;
                  // } 
              },
              min: -7,
              max: 50
          }],
          series: [{
                  name: '劣化度高于10%',
                  type: 'bar',
                  itemStyle: {
                      normal: {
                          color: 'rgb(133,109,188)',
                      }
                  },
                  barWidth: 8,
              },
              {
                  name: '劣化度0~10%',
                  type: 'bar',
                  itemStyle: {
                      normal: {
                          color: 'rgb(65,58,153)',
                      }
                  },
                  barWidth: 8,
              },
              {
                  name: '劣化度高于IPv4',
                  type: 'bar',
                  itemStyle: {
                      normal: {
                          color: "#f37229",
                      }
                  },
                  barWidth: 8,
              },
              {
                  type: 'pie',
                  center: ['78%', '25%'],
                  color: ['rgb(133,109,188)', 'rgb(65,58,153)', '#f37229'],
                  radius: '22%',
                  label: {
                      normal: {
                          formatter: '{b|{b}}\n{x|{c}%}',
                          rich: {

                              b: {
                                  fontSize: 15,
                                  lineHeight: 10,
                                  color: '#000',
                              },
                              x: {
                                  fontSize: 23,
                                  lineHeight: 35,
                                  color: '#000',
                                  align:'center',

                              },
                          }
                      }
                  },
                  labelLine: {
                      normal: {
                          smooth: 0.2,
                          length: 30,
                          length2: 30
                      }
                  },
              }
          ]
      },
      options: [{
              title: {
                  text: '2019年5月劣化度情况'
              },
              series: [{
                      data: dataMap.dataPI['2002']
                  },
                  {
                      data: dataMap.dataSI['2002']
                  },
                  {
                      data: dataMap.dataTI['2002']
                  },
                  {
                      data: [{
                              name: '劣化度高于10%',
                              value: dataMap.dataPI['2002sum']
                          },
                          {
                              name: '劣化度0~10%',
                              value: dataMap.dataSI['2002sum']
                          },
                          {
                              name: '劣化度高于IPv4',
                              value: dataMap.dataTI['2002sum']
                          }
                      ]
                  }
              ]
          },
          {
              title: {
                  text: '2019年6月劣化度情况'
              },
              series: [{
                      data: dataMap.dataPI['2003']
                  },
                  {
                      data: dataMap.dataSI['2003']
                  },
                  {
                      data: dataMap.dataTI['2003']
                  },
                  {
                      data: [{
                              name: '劣化度高于10%',
                              value: dataMap.dataPI['2003sum']
                          },
                          {
                              name: '劣化度0~10%',
                              value: dataMap.dataSI['2003sum']
                          },
                          {
                              name: '劣化度高于IPv4',
                              value: dataMap.dataTI['2003sum']
                          }
                      ]
                  }
              ]
          },
          {
              title: {
                  text: '2019年9月劣化度情况'
              },
              series: [{
                      data: dataMap.dataPI['2004']
                  },
                  {
                      data: dataMap.dataSI['2004']
                  },
                  {
                      data: dataMap.dataTI['2004']
                  },
                  {
                      data: [{
                              name: '劣化度高于10%',
                              value: dataMap.dataPI['2004sum']
                          },
                          {
                              name: '劣化度0~10%',
                              value: dataMap.dataSI['2004sum']
                          },
                          {
                              name: '劣化度高于IPv4',
                              value: dataMap.dataTI['2004sum']
                          }
                      ]
                  }
              ]
          },
          {
              title: {
                  text: '2019年10月劣化度情况'
              },
              series: [{
                      data: dataMap.dataPI['2005']
                  },
                  {
                      data: dataMap.dataSI['2005']
                  },
                  {
                      data: dataMap.dataTI['2005']
                  },
                  {
                      data: [{
                              name: '劣化度高于10%',
                              value: dataMap.dataPI['2005sum']
                          },
                          {
                              name: '劣化度0~10%',
                              value: dataMap.dataSI['2005sum']
                          },
                          {
                              name: '劣化度高于IPv4',
                              value: dataMap.dataTI['2005sum']
                          }
                      ]
                  }
              ]
          },
      ]
  };