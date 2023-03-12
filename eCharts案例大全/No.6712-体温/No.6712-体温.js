   var value = '4.3';
   var subtext = `样本量：2233`;
   var max = 5;
   option = {
       title: {
           show: true,
           text: value || "仪表盘",
           subtext,
           subtextStyle: {
               align: "center",
           },
           left: 400,
           bottom: 10,
           textStyle: {
               color: '#414957',
               fontSize: 24,
               align: 'center',
               fontFamily: '"Microsoft Yahei","微软雅黑"',
           },
       },
       angleAxis: {
           axisLine: {
               show: false
           },
           axisLabel: {
               show: false
           },
           splitLine: {
               show: false
           },
           axisTick: {
               show: false
           },
           min: 0,
           max: 6.666,
           // boundaryGap: ['0', '10'],
           startAngle: 225
       },
       radiusAxis: {
           type: 'category',
           axisLine: {
               show: false
           },
           axisTick: {
               show: false
           },
           axisLabel: {
               show: false
           },
           data: ['a', 'b', 'c'],
           z: 10
       },
       polar: {
           radius: '105%'
       },
       series: [
           {
               type: 'gauge',
               radius: '75%',
               max: 50,
               detail: {
                   show: false,
               },
               axisLine: {
                   // 坐标轴线
                   lineStyle: {
                       // 属性lineStyle控制线条样式
                       color: [
                            [1,new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                              {
                                offset: 0.1,
                                color: "#64d8fd"
                              },
                              {
                                offset: 0.6,
                                color: "#89c2db"
                              },
                              {
                                offset: 1,
                                color: "#fb4770"
                              }
                            ])
                          ]
                        ],
                       width: 22,
                       opacity: 1 //刻度背景宽度
                   }
               },
               "data": [{
                   "value": 50,
               }],
               splitLine: {
                   length: 22, //长刻度节点线长度
                   lineStyle: {
                       width: 4,
                       color: "#fff"
                   } //刻度节点线
               },
               axisTick: {
                   show: false
               },
               axisLabel: {
                   show: false,
                   color: '#333',
                   fontSize: 18,
               },
               pointer: {
                   show: false
               }
           },
           {
               "type": "pie",
               radius: ['60%', '82%'],
               "hoverAnimation": false,
               startAngle: 225,
               endAngle: 0,
               "data": [{
                       "name": "",
                       "value": value / 5,
                       "label": {
                           show: false
                       },
                       "labelLine": {
                           show: false
                       },
                       itemStyle: {
                           color: 'rgba(0,0,0,0)'
                       }
                   },
                   {//画中间的图标
                        name: "",
                        value: 0,
                        label: {
                            position:'inside',
                            backgroundColor: '#53adf4',
                            width: 16,
                            height: 16,
                            borderRadius: 20,
                            borderColor: '#fff',
                            borderWidth: 4,
                            padding: 8
                        }
                    }, {
                       "name": "",
                       value: 1.33 - value / 5,
                       "label": {
                           show: false
                       },
                       "labelLine": {
                           show: false
                       },
                       itemStyle: {
                           color: 'rgba(255,255,255,0)'
                       }
                   }
               ]
           }
       ],
       tooltip: {
           show: false
       },

   }
 setInterval(function () {
    let num = (Math.random() * 50).toFixed(2) - 0;
    option.title.text = num;
    option.series[0].data[0].value = num;
    option.series[1].data[0].value = num / 5;
    option.series[1].data[2].value = 1.33 - num / 5;
    myChart.setOption(option, true);
},2000);