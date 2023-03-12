   var unitVH = document.body.clientHeight / 100;
   option = {
       title: {
           subtext: '单位(万)',
           subtextStyle: {
               color: '#eff6fb',
               fontSize: 1.6 * unitVH,
               fontWeight: 'normal'
           },
           padding: [0, 10]
       },
       backgroundColor: 'rgb(128,128,128,0)',
       tooltip: {
           trigger: 'axis',
           axisPointer: {
               type: 'shadow',
               label: {
                   show: true,
                   backgroundColor: '#333'
               }
           }
       },
       grid: {
           containLabel: true
       },
       legend: {
           data: ['邮件营销', '邮件营销1', '视频广告'],
           textStyle: {
               color: '#badafc',
               fontSize: 1.6 * unitVH,
           },
           itemWidth: 1.8 * unitVH,
           itemHeight: 1.2 * unitVH,
           //            icon: 'null',
           padding: 10
       },
       xAxis: {
           data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
           axisTick: {
               show: false
           },
           axisLine: {
               lineStyle: {
                   color: '#6c96b7',
                   width: 0.1 * unitVH
               },
           },
           axisLabel: { //坐标轴刻度标签的相关设置。
               interval: 0,
               rotate: "45",
               fontSize: 1.4 * unitVH
           },

       },
       yAxis: [{
               type: 'value',
               axisLabel: {
                   formatter: '{value}',
                   fontSize: 1.6 * unitVH
               },
               axisTick: {
                   show: false
               },
               axisLine: {
                   show: false,
                   lineStyle: {
                       color: '#6c96b7',

                   }
               },
               splitLine: {
                   lineStyle: {
                       color: '#25609d',
                       width: 0.2 * unitVH
                   }
               }
           },
           {
               type: 'value',
               min: 0,
               max: 1,
               interval: 0.25,
               axisLabel: {
                   formatter: '{value}',
                   fontSize: 1.6 * unitVH
               },
               axisTick: {
                   show: false
               },
               axisLine: {
                   show: false,
                   lineStyle: {
                       color: '#6c96b7'
                   }
               },
               splitLine: {
                   lineStyle: {
                       color: '#25609d'
                   }
               }
           },
       ],
       series: [{
               name: '邮件营销1',
               type: 'line',
               symbol: 'circle',
               yAxisIndex: 1,
               itemStyle: {
                   normal: {
                       color: "#35d396",
                       borderColor: '#35d396',
                       borderWidth: 1 * unitVH,
                   }
               },
               lineStyle: {
                   width: 0.2 * unitVH
               },
               symbolSize: 0.2 * unitVH,
               data: [0.1, 0.4, 0.5, 0.8, 0.3, 0.6, 0.5],
           }, {
               name: '视频广告',
               type: 'bar',
               barWidth: 1 * unitVH,
               itemStyle: {
                   normal: {
                       color: new echarts.graphic.LinearGradient(
                           0, 0, 0, 1,
                           [{
                                   offset: 0,
                                   color: '#6a8ffd'
                               },
                               {
                                   offset: 1,
                                   color: '#56cbfe'
                               }
                           ]
                       )
                   }
               },
               data: [700, 300, 500, 800, 300, 600, 500],
           },
           {
               name: '营销',
               type: 'bar',
               barWidth: 1 * unitVH,
               itemStyle: {
                   normal: {
                       color: '#4a6c8d'
                   }
               },
               data: [700, 300, 500, 800, 300, 600, 500],
           }
       ]
   };