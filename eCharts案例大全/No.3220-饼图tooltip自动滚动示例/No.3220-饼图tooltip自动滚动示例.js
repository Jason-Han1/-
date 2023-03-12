//具体数据调用api获取
              var pieData = [
                  {value: 335, name: '美食'},
                  {value: 310, name: '汽车服务'},
                  {value: 234, name: '酒店'},
                  {value: 135, name: '公司企业'},
                  {value: 1548, name: '休闲娱乐'},
                  {value: 335, name: '生活服务'},
                  {value: 310, name: '丽人'},
                  {value: 234, name: '医疗'},
                  {value: 135, name: '教育培训'},
                  {value: 1548, name: '其他'},
              ];


              option = {
                  title: {
                      show: false,
                      text: '饼图程序调用高亮示例',
                      left: 'center'
                  },
                  width: '45%',

                  color:['#24a0ff','#0964ad','#dfebff','#8dc9fd','#0e4270','#24a0ff','#0964ad','#dfebff','#8dc9fd','#0e4270'],
                  tooltip: {
                      trigger: 'item',
                      formatter: '{b} : {c} ({d}%)'
                  },
                  legend: [{
                      id: "stock-model1",
                      icon: 'circle',
                      itemGap: 15,
                      itemWidth: 9,
                      type: 'scroll',
                      orient: 'vertical',
                      top: 'center',
                      // right: '130px',
                      left: '43%',
                      data: ['美食', '汽车服务', '酒店', '公司企业', '休闲娱乐'
                      ],
                      formatter: function (name) {
                          // pieData是饼图的数组数据
                          let data = pieData;
                          let total = 0;
                          let tarValue = 0;
                          for (let i = 0, l = data.length; i < l; i++) {
                              total += parseInt(data[i].value);
                              if (data[i].name == name) {
                                  tarValue = data[i].value;
                              }
                          }
                          var arr = [
                              '{name|'+name+'}','{value|'+((tarValue/total)*100).toFixed(0)+'%}'
                          ]
                          return arr.join('');
                      },
                      itemStyle:{
                          borderRadius: 20,

                      },
                      textStyle:{
                          rich:{
                              name:{
                                  fontSize:14,
                                  fontFamily: 'Alibaba PuHuiTi Regular',
                                  color: '#FFFFFF',
                                  fontWeight: 400,
                                  // verticalAlign:'top',
                                  // align:'center',
                                  // padding:[0,0,28,0]
                                  width: 66
                              },
                              value:{
                                  fontSize:14,
                                  fontFamily: 'Alibaba PuHuiTi Regular',
                                  color: '#FFFFFF',
                                  fontWeight: 400,
                                  // align:'center',
                                  // padding:[0,10,0,0],
                                  // lineHeight:25
                                  align: "right",
                                  width: 26
                              }
                          }
                      }
                  },{
                      id: "stock-model2",
                      icon: 'circle',
                      itemGap: 15,
                      itemWidth: 9,
                      type: 'scroll',
                      orient: 'vertical',
                      top: 'center',
                      // right: 'right',
                      left: '75%',
                      data: ['生活服务', '丽人', '医疗', '教育培训', '其他'
                      ],
                      formatter: function (name) {
                          // pieData是饼图的数组数据
                          let data = pieData;
                          let total = 0;
                          let tarValue = 0;
                          for (let i = 0, l = data.length; i < l; i++) {
                              total += parseInt(data[i].value);
                              if (data[i].name == name) {
                                  tarValue = data[i].value;
                              }
                          }
                          var arr = [
                              '{name|'+name+'}','{value|'+((tarValue/total)*100).toFixed(0)+'%}'
                          ]
                          return arr.join('');
                      },
                      textStyle:{
                          rich:{
                              name:{
                                  fontSize:14,
                                  fontFamily: 'Alibaba PuHuiTi Regular',
                                  color: '#FFFFFF',
                                  fontWeight: 400,
                                  // verticalAlign:'top',
                                  // align:'center',
                                  // padding:[0,0,28,0]
                                  width: 66
                              },
                              value:{
                                  fontSize:14,
                                  fontFamily: 'Alibaba PuHuiTi Regular',
                                  color: '#FFFFFF',
                                  fontWeight: 400,
                                  // align:'center',
                                  // padding:[0,10,0,0],
                                  // lineHeight:25
                                  align: "right",
                                  width: 26
                              }
                          }
                      }
                  }],
                  series: [
                      {
                          name: '访问来源',
                          type: 'pie',
                          radius: ['40%', '70%'],
                          // radius: '55%',
                          center: ['50%', '50%'],
                          label: {
                              normal: {
                                  position: 'inner',
                                  show : false
                              }
                          },
                          selectedMode: true,
                          selectedOffset: 10,
                          data: pieData,
                          emphasis: {
                              // scaleSize: 15,//放大效果
                              itemStyle: {
                                  // borderColor: 'rgb(255,255,255)',
                                  // borderWidth: 3,
                              }
                          }
                      }
                  ]
              };

              app.currentIndex = -1;

              setInterval(function () {
                  var dataLen = option.series[0].data.length;
                  // 取消之前高亮的图形
                  myChart.dispatchAction({
                      type: 'downplay',
                      seriesIndex: 0,
                      dataIndex: app.currentIndex
                  });
                  app.currentIndex = (app.currentIndex + 1) % dataLen;

                  // 高亮当前图形
                  myChart.dispatchAction({
                      type: 'select',
                      seriesIndex: 0,
                      dataIndex: app.currentIndex
                  });

                  // 显示 tooltip
                  myChart.dispatchAction({
                      type: 'showTip',
                      seriesIndex: 0,
                      dataIndex: app.currentIndex
                  });

                  myChart.dispatchAction({
                      type: 'legendScroll',
                      scrollDataIndex: app.currentIndex,
                      legendId: 'stock-model',
                  });
              }, 1000);

            //   option && myChart.setOption(option);