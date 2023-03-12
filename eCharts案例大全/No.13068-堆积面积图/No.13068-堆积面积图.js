 var option = {
     backgroundColor: 'black',
     tooltip: {
         trigger: 'axis'
     },
     textStyle: {
         color: 'rgb(222,222,222)'
     },
     calculable: true,
     xAxis: [{
         show: true,
         type: 'category',
         boundaryGap: false,
         data: [
             "周一",
             "周二",
             "周三",
             "周四",
             "周五",
             "周六",
             "周日"
         ],
         axisLine: {
             show: false
         },
         //刻度线是否显示
         axisTick: {
             show: false
         },
         axisLabel: {
             interval: 0,
             show: true
         },
         splitLine: {
             show: true,
             lineStyle: {
                 // 使用深浅的间隔色
                 color: ['#49bdff']
             }
         }
     }],
     yAxis: [{
         type: 'value',
         //刻度线是否显示
         axisLine: {
             lineStyle: {
                 // 使用深浅的间隔色
                 color: ['#49bdff']
             }
         },
         axisTick: {
             show: false
         },
         axisLabel: {
             formatter: '{value}'
         },
         splitLine: {
             show: false
         }
     }],
     series: [{
         name: '',
         type: 'line',
         stack: '总量',
         symbol: 'none',
         itemStyle: {
             normal: {
                 areaStyle: {
                     color: new echarts.graphic.LinearGradient(
                             0, 1, 0, 0,
                             [
                                 {offset: 0, color: 'rgb(73,189,255,0.01)'},
                                 {offset: 0.5, color: 'rgb(73,189,255,0.2)'},
                                 {offset: 1, color: 'rgb(73,189,255)'}
                             ]
                         )
                 },
                 lineStyle: {
                     color: '#49bdff'
                 }
             }
         },
         data: [
             120,
             132,
             101,
             134,
             90,
             230,
             210
         ],
         markLine: {
             symbol: 'none',
             itemStyle: {
                 normal: {
                     lineStyle: {
                         type: 'dashed',
                         color: '#ea3338'
                     },
                     label: {
                         show: true,
                         position: 'left'
                     }
                 }
             },
             large: true,
             effect: {
                 show: false,
                 loop: true,
                 period: 0,
                 scaleSize: 2,
                 color: null,
                 shadowColor: null,
                 shadowBlur: null
             },
             data: [
                 [{
                         name: '',
                         xAxis: "周一",
                         yAxis: '60'
                     },
                     {
                         name: '',
                         xAxis: "周日",
                         yAxis: '60'
                     }
                 ]
             ]
         }
     }]
 };