 option = {
     backgroundColor: '#021262',
     color: ['#2a74d5', '#f2e953'],
     legend: {
         orient: 'horizontal',
         right: 100,
         top: 10,
         textStyle: {
             color: '#ebce4d'
         },
         // borderRadius:100, // 统一设置四个角的圆角大小
         data: [{
             name: '数量（个）',
             icon: 'circle',
         }, {
             name: '金额（万元）',
             icon: 'circle',
         }],
     },
     tooltip: {
         trigger: 'axis',
         axisPointer: {
             lineStyle: {
                 color: {
                     type: 'linear',
                     x: 0,
                     y: 0,
                     x2: 0,
                     y2: 1,
                     colorStops: [{
                         offset: 0,
                         color: 'rgba(0, 255, 233,0)'
                     }, {
                         offset: 0.5,
                         color: 'rgba(255, 255, 255,1)',
                     }, {
                         offset: 1,
                         color: 'rgba(0, 255, 233,0)'
                     }],
                     global: false
                 }
             },
         },

     },
     grid: {
         right: '10%',
         left: '10%',
         top: '10%',
     },
     xAxis: [{
         type: 'category',
         color: '#59588D',
         data: ['4月', '5月', '6月', '7月', '8月', '9月'],
         axisLabel: {
             margin: 20,
             color: '#6e81bd',
             textStyle: {
                 fontSize: 18
             },
         },
         axisLine: {
             lineStyle: {
                 color: 'rgba(20,61,135,0.8)',
             }
         },
         axisTick: {
             show: false
         },
     }],
     yAxis: [{
         axisLabel: {
             formatter: '{value}',
             color: '#2a74d5',
             textStyle: {
                 fontSize: 18
             },
         },
         axisLine: {
             lineStyle: {
                 color: 'rgba(20,61,135,0.8)',
             }
         },
         axisTick: {
             show: false
         },
         splitLine: {
             lineStyle: {
                 color: 'rgba(131,101,101,0.2)',
                 type: 'dashed',
             }
         }
     }, {
         name: 'test',
         type: 'value',
         max: 1000,
         axisLabel: {
             show: true,
             formatter: '{value}',
             color: '#f2e953',
             textStyle: {
                 fontSize: 18
             },
         },
         splitArea: {
             show: true,
             areaStyle: {
                 color: ["rgba(2,27,90,0.0)", "rgba(2,27,90,0.5)"]
             }
         },
         axisLine: {
             lineStyle: {
                 color: 'rgba(20,61,135,0.8)',
             }
         },
     }],
     series: [{
         type: 'bar',
         name: '数量（个）',
         data: [40, 80, 20, 50, 30, 50],
         barWidth: '25px',
         itemStyle: {
             normal: {
                 color: function(params) { //展示正值的柱子，负数设为透明
                     let colorArr = params.value > 0 ? ['#2a74d5', '#063280'] : ['rgba(0,0,0,0)', 'rgba(0,0,0,0)']
                     return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: colorArr[0] // 0% 处的颜色
                     }, {
                         offset: 1,
                         color: colorArr[1] // 100% 处的颜色
                     }], false)
                 },
                 // barBorderRadius: [30,30,0,0]
             },
         },
     }, {
         data: [500, 720, 450, 670, 355, 220],
         type: 'line',
         yAxisIndex: 1,
         smooth: false,
         name: '金额（万元）',
         symbol: 'none',
         lineStyle: {
             color: '#f2e953',
             width: 4,
             shadowColor: 'rgba(0, 0, 0, 0.3)', //设置折线阴影
             shadowBlur: 15,
             shadowOffsetY: 20,
         }
     }]
 };