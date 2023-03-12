 var option = {
     backgroundColor: '#323a5e',
     title: {
         text: '当月开锁次数',
         textStyle: {
             color: "#ccc"
         }
     },
     tooltip: {
         trigger: 'axis',
         axisPointer: { // 坐标轴指示器，坐标轴触发有效
             type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
         }
     },
     grid: {
         left: '2%',
         right: '4%',
         bottom: '14%',
         top: '26%',
         containLabel: true
     },
     toolbox: {
         show: true,
         feature: {
             mark: {
                 show: true
             },
             dataView: {
                 show: true,
                 readOnly: false
             },
             magicType: {
                 show: true,
                 type: ['line', 'bar']
             },
             restore: {
                 show: true
             },
             saveAsImage: {
                 show: true
             }
         }
     },
     calculable: true,
     legend: {
         data: ['正常开锁数', '远程开锁', '非法开锁'],
         top: 12,
         textStyle: {
             color: "#fff"
         },
         itemWidth: 12,
         itemHeight: 10,
         // itemGap: 35
     },
     xAxis: {
         type: 'category',
         data: ['2019-08-01', '2019-08-02', '2019-08-03', '2019-08-04', '2019-08-05', '2019-08-06', '2019-08-07', '2019-08-08', '2019-08-09', '2019-08-10', '2019-08-11', '2019-08-12'],
         axisLine: {
             lineStyle: {
                 color: 'white'

             }
         },
         axisLabel: {
             // interval: 0,
             // rotate: 40,
             textStyle: {
                 fontFamily: 'Microsoft YaHei'
             }
         },
     },

     yAxis: {
         type: 'value',
         max: '1200',
         axisLine: {
             show: true,
             lineStyle: {
                 color: 'white'
             }
         },
         splitLine: {
             show: true,
             lineStyle: {
                 color: 'rgba(255,255,255,0.3)'
             }
         },
         axisLabel: {}
     },
     dataZoom: [{
         show: true,
         height: 12,
         xAxisIndex: [
             0
         ],
         bottom: '8%',
         start: 10,
         end: 90,
         handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
         handleSize: '110%',
         handleStyle: {
             color: "#d3dee5",

         },
         textStyle: {
             color: '#fff'
         },
         borderColor: '#90979c'
     }, {
         type: 'inside',
         show: true,
         height: 15,
         start: 1,
         end: 35
     }],
     series: [{
             name: '正常开锁数',
             type: 'bar',
             barWidth: '15%',
             label: {
                 normal: {
                     show: true,
                     lineHeight: 30,
                     width: 80,
                     height: 30,
                     backgroundColor: '#252453',
                     borderRadius: 200,
                     position: ['-8', '-60'],
                     distance: 1,
                     formatter: [
                         '    {d|●}',
                         ' {a|{c}次}     \n',
                         '    {b|}'
                     ].join(','),
                     rich: {
                         d: {
                             color: '#3CDDCF',
                         },
                         a: {
                             color: '#fff',
                             align: 'center',
                         },
                         b: {
                             width: 1,
                             height: 30,
                             borderWidth: 1,
                             borderColor: '#234e6c',
                             align: 'left'
                         },
                     }
                 }
             },
             itemStyle: {
                 normal: {
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: '#248ff7'
                     }, {
                         offset: 1,
                         color: '#6851f1'
                     }]),
                     barBorderRadius: 11,
                 }
             },
             data: [400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500]
         },
         {
             name: '远程开锁',
             type: 'bar',
             barWidth: '15%',
             label: {
                 normal: {
                     show: true,
                     lineHeight: 30,
                     width: 80,
                     height: 30,
                     backgroundColor: '#252453',
                     borderRadius: 200,
                     position: ['-8', '-60'],
                     distance: 1,
                     formatter: [
                         '    {d|●}',
                         ' {a|{c}次}     \n',
                         '    {b|}'
                     ].join(','),
                     rich: {
                         d: {
                             color: '#3CDDCF',
                         },
                         a: {
                             color: '#fff',
                             align: 'center',
                         },
                         b: {
                             width: 1,
                             height: 30,
                             borderWidth: 1,
                             borderColor: '#234e6c',
                             align: 'left'
                         },
                     }
                 }
             },
             itemStyle: {
                 normal: {
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: '#8bd46e'
                     }, {
                         offset: 1,
                         color: '#09bcb7'
                     }]),
                     barBorderRadius: 11,
                 }

             },
             data: [200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300]
         },
         {
             name: '非法开锁',
             type: 'bar',
             barWidth: '15%',
             itemStyle: {
                 normal: {
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: '#fccb05'
                     }, {
                         offset: 1,
                         color: '#f5804d'
                     }]),
                     barBorderRadius: 12,
                 },
             },
             label: {
                 normal: {
                     show: true,
                     lineHeight: 30,
                     width: 80,
                     height: 30,
                     backgroundColor: '#252453',
                     borderRadius: 200,
                     position: ['-8', '-60'],
                     distance: 1,
                     formatter: [
                         '    {d|●}',
                         ' {a|{c}次}     \n',
                         '    {b|}'
                     ].join(','),
                     rich: {
                         d: {
                             color: '#3CDDCF',
                         },
                         a: {
                             color: '#fff',
                             align: 'center',
                         },
                         b: {
                             width: 1,
                             height: 30,
                             borderWidth: 1,
                             borderColor: '#234e6c',
                             align: 'left'
                         },
                     }
                 }
             },
             data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]
         }
     ]
 };