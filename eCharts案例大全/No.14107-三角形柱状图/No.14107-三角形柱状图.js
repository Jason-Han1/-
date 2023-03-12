 option = {
     tooltip: {
         trigger: 'axis',
         axisPointer: {
             type: 'none'
         },
         formatter: function(params) {
             return params[0].name + ': ' + params[0].value;
         }
     },
     xAxis: {
         data: ['驯鹿', '火箭', '飞机', '高铁', '轮船', '汽车', '跑步', '步行', ],

         axisTick: {
             show: false
         },
         axisLine: {
             show: true,
             lineStyle: {
                 color: '#4075af'
             }
         },
         axisLabel: {
             show: true,
             color: '#f63',
             rotate: 40,
             interval: 0

         },
         min: -1,
         max: 8
     },
     yAxis: {
         splitLine: {
             show: false
         },
         axisTick: {
             show: true
         },
         axisLine: {
             show: true,
             lineStyle: {
                 color: '#4075af'
             }

         },
         axisLabel: {
             show: true,
             color: '#f63'
         }
     },
     color: ['rgba(6,183,248,0.5)'],
     series: [{
         name: 'hill',
         type: 'pictorialBar',
         barCategoryGap: '-130%',
         symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
         label: {
             normal: {
                 show: true,
                 position: 'top'
             }
         },
         itemStyle: {
             normal: {
                 opacity: 0.5
             },
             emphasis: {
                 opacity: 1
             }
         },
         data: [123, 60, 25, 18, 12, 9, 2, 50],
         z: 10
     }]
 };