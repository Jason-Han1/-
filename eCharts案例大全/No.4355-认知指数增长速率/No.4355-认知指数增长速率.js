
 let total = [0,10, 30,58, 60, 60, 60,58, 45,30,10]
 option = {
     backgroundColor:'#fff',
     title: {
         text: '认知指数增长速率',
         left: 'center',
         top:35,
         textStyle:{
             fontSize:24
         }
     },
     grid: {
         top: '15%',
         left: '8%',
         right: '8%',
         bottom: '15%',
     },
     xAxis: [{
         name:'时间',
         type: 'category',
         axisTick: {
             show: false,
         },
        
         splitLine: {
             show: true,
             lineStyle: {
                 type: 'dashed',
             },
         },
         data: ['','','复习初期','','','复习中期','','','复习后期','',''],
         axisLabel:{
             interval:0,
            fontSize:24
         }
     }, ],

     yAxis: [{
         type: 'value',
         min: 0,
        max:80,

         axisLine: {
             show: false,
         },
         axisTick: {
             show: false,
         },
         splitLine: {
             show: true,
             lineStyle: {
                 type: 'dashed',
             },
         },
     }, ],
     series: [{
         type: 'line',
         showAllSymbol: true,
         symbol: 'circle',
         symbolSize: 10,
         lineStyle: {
             normal: {
                 color: '#ea6f21',
                 width: 5,
             },
         },
         tooltip: {
             show: false,
         },
         areaStyle: {
             normal: {
                 color: new echarts.graphic.LinearGradient(
                     0,
                     0,
                     0,
                     1,
                     [{
                             offset: 0,
                             color: 'rgba(236, 169, 44, 1)',
                         },
                         {
                             offset: 1,
                             color: 'rgba(236, 169, 44,0)',
                         },
                     ],
                     false
                 ),
             },
         },
         data: total,
     }, ],
 };