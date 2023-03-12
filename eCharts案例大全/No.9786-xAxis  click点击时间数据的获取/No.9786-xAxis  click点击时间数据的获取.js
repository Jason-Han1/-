 var option = {
     color: ['#eeb620', '#018ce0', '#7049f0'],
     tooltip: {
         trigger: 'axis',
         axisPointer: {
             type: 'cross',
             crossStyle: {
                 color: '#999'
             }
         }
     },
     grid: {
         left: 70,
         right: 0,
         bottom: 60,
         top: 20
     },
     toolbox: {
         show: false,
     },
     legend: {
         bottom: "2%",
         textStyle: {
             color: "rgba(255,255,255,.6)",
         },
     },
     xAxis: [{
         type: 'category',
         data: ['2019-10-01', '2019-10-02'],
         triggerEvent: true,
         axisPointer: {
             type: 'shadow'
         },

     }],
     yAxis: [{
         splitLine: {
             show: false
         }, //去除网格线
         type: 'value',

         name: '合格率（%）',
         nameLocation: "middle",
         nameGap: 40,
         min: 0,
         max: 100,
         nameTextStyle: {
             color: '#0ce6eb',
         },

     }],
     series: [{
         name: 'test1',
         type: 'line',
         data: [20, 50],
         symbolSize: 9, //拐点圆的大小  
         itemStyle: {
             normal: {
                 label: {
                     show: false
                 }
             }
         }
     }]
 };
 
 