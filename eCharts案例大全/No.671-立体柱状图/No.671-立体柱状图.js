 var colors = [{
     type: 'linear',
     x: 0,
     x2: 0,
     y: 0,
     y2: 1,
     colorStops: [{
         offset: 0,
         color: '#28f0f5'
     }, {
         offset: 0.5,
         color: '#16abaf'
     }, {
         offset: 0.5,
         color: '#16abaf'
     }, {
         offset: 1,
         color: '#077175'
     }]
 }, {
     type: 'linear',
     x: 0,
     x2: 0,
     y: 0,
     y2: 1,
     colorStops: [{
         offset: 0,
         color: '#0172e2'
     }, {
         offset: 0.5,
         color: '#0656c6'
     }, {
         offset: 0.5,
         color: '#0656c6'
     }, {
         offset: 1,
         color: '#0f299a'
     }]
 }];
 var barWidth = 25;
 option = {
     tooltip: {
         trigger: 'item',
     },
     legend: {
         right: 30,
         textStyle: {
             color: '#A9DDEE',
         },
     },
     xAxis: [{
         type: 'category',
         axisLine: {
             lineStyle: {
                 color: '#65C6E7'
             }
         },
         axisLabel: {
             fontSize: 14
         },
         data: ['项目1', '项目2', '项目3', '项目4', '项目5', '项目6'],
     }],
     yAxis: [{
         type: 'value',
         min: 0,
         splitLine: {
             lineStyle: {
                 color: '#65C6E7'
             }
         },
         splitNumber: 5,
         axisLine: {
             show: false
         },
         axisTick: {
             show: false
         },
         axisLabel: {
             fontSize: 14,
             color: '#65C6E7'
         },

     }, {
         type: 'value',
         splitLine: {
             show: false
         },
         axisLine: {
             show: false
         },
         axisTick: {
             show: false
         },
         axisLabel: {
             fontSize: 14,
             color: '#65C6E7'
         }
     }],
     series: [{
             z: 1,
             name: '实验频次',
             type: 'bar',
             barWidth: barWidth,
             data: [20, 9, 37, 23, 25, 67],
             itemStyle: {
                 normal: {
                     color: colors[0]
                 },
             }
         }, {
             z: 3,
             type: 'pictorialBar',
             symbolPosition: 'end',
             data: [20, 9, 37, 23, 25, 67],
             symbol: 'diamond',
             symbolOffset: [-12.5, '-50%'],
             symbolSize: [barWidth - 4, (10 * (barWidth - 4)) / barWidth],
             itemStyle: {
                 normal: {
                     borderColor: '#12bac1',
                     borderWidth: 2,
                     color: '#12bac1'
                 }
             },
         },
         {
             z: 1,
             name: '动物数',
             type: 'bar',
             barGap: 0,
             barWidth: barWidth,
             data: [16, 59, 40, 24, 27, 77],
             itemStyle: {
                 normal: {
                     color: colors[1]
                 }
             }
         },
         {
             z: 3,
             type: 'pictorialBar',
             symbolPosition: 'end',
             data: [16, 59, 40, 24, 27, 77],
             symbol: 'diamond',
             symbolOffset: [12.5, '-50%'],
             symbolSize: [barWidth - 4, (10 * (barWidth - 4)) / barWidth],
             itemStyle: {
                 normal: {
                     borderColor: '#319cf1',
                     borderWidth: 2,
                     color: '#319cf1'
                 }
             },
         },
         {
             name: '总费用',
             type: 'line',
             yAxisIndex: 1,
             symbol: 'circle',
             itemStyle: {
                 color: '#a45cc9',
             },
             lineStyle: {
                 color: '#a45cc9',
                 width: 3,
             },
             data: [30, 42, 63, 75, 63, 120]
         }
     ]
 }