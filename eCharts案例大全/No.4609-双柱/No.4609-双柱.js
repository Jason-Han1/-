 xData = ['1', '2']
 yData1 = [202, 202]
 yData2 = [182, 182]
 legendData = ['录控线', '校线']
 barWidth = '20'
 option = {
     title: {
         top: '0',
         left: 'center',
         text: '',
         textStyle: {
             align: 'center',
             color: '#043491',
             fontSize: 22
         }
     },
     tooltip: {
         show: false,
         trigger: 'axis',
         axisPointer: {
             type: 'cross'
         }
     },
     legend: {
         show: false,
     },

     xAxis: [{
         type: 'category',
         data: xData,
         name: '',
         axisLine: {
             show: false,

         },
         axisTick: {
             show: false
         },
         axisLabel: {
             show: false
         }
     }],
     yAxis: [{
         type: 'value',
         name: '',
         axisLine: {
             show: false
         },
         splitLine: {
             show: false
         },
         axisLabel: {
             show: false
         },
         axisTick: {
             show: false
         }
     }],
     series: [{
             name: legendData[0],
             type: 'scatter',
             data: [],
             itemStyle: {
                 normal: {
                     // color: themeColor
                     color: 'rgb(247, 181, 67)'
                 }
             }
         },
         {
             name: legendData[0],
             type: 'bar',
             barGap: '-85%',
             barWidth: Number(barWidth) + 10, //柱宽
             yAxisIndex: 0,
             symbolSize: 12,
             itemStyle: {
                 normal: {
                     color: 'transparent',
                     borderColor: 'rgb(247, 181, 67)',
                     borderWidth: 2,
                     barBorderRadius: [6, 6, 0, 0]
                 }
             },
             data: yData1
         },
         {
             name: legendData[1],
             type: 'bar',
             barWidth, //柱宽
             yAxisIndex: 0,
             symbolSize: 12,
             itemStyle: {
                 normal: {
                     color: {
                         type: 'linear',
                         x: 0,
                         y: 0,
                         x2: 0,
                         y2: 1,
                         colorStops: [{
                             offset: 0,
                             color: '#5CC0FF' // 0% 处的颜色
                         }, {
                             offset: 1,
                             color: '#5998FF' // 100% 处的颜色
                         }],
                         global: false // 缺省为 false
                     },

                     barBorderRadius: [6, 6, 0, 0]
                 }
             },
             data: yData2
         }
     ]
 };