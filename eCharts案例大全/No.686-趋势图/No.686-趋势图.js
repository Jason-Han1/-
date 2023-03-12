 let pointStyle = {
     borderColor: '#ea6f21',
     color: '#fff',
     borderWidth: 2,
 }
 let labelStyle = {
     show: true,
     position: 'top',
     lineHeight: 20,
     borderRadius: 5,
     backgroundColor: 'rgba(255,255,255,.9)',
     borderColor: '#ccc',
     borderWidth: '1',
     padding: [5, 15, 4],
     color: '#000000',
     fontSize: 14,
     fontWeight: 'normal',
 }
 let total = [55, 65, 68, 43, 88, 95]
 let seriesData = []
 total = total.sort(function(a, b) {
     return a - b
 })
 total.forEach((item, index) => {
     let ob = {
         value: item,
         itemStyle: pointStyle,
         label: labelStyle,
     }
     if (index === total.length - 1) {
         ob.itemStyle = {
             borderColor: '#ea6f21',
             color: '#ea6f21',
             borderWidth: 3,
         }
         ob.label = {
             show: true,
             position: 'top',
             lineHeight: 20,
             backgroundColor: '#ea6f21',
             borderRadius: 5,
             borderColor: '#ea6f21',
             borderWidth: '1',
             padding: [5, 15, 4],
             color: '#fff',
             fontSize: 14,
             fontWeight: 'normal',
         }
     }
     seriesData.push(ob)
 })

 option = {
     title: {
         text: '趋势图',
         left: 'left',
     },
     grid: {
         top: '15%',
         left: '8%',
         right: '8%',
         bottom: '15%',
     },
     xAxis: [{
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
         data: ['1/1', '1/2', '1/3', '1/4', '1/5', '1/6'],
     }, ],

     yAxis: [{
         type: 'value',
         min: 0,
         max: 100,
         splitNumber: 3,
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
         data: seriesData,
         markLine: {
             symbol: ['none', 'none'], //去掉箭头
             itemStyle: {
                 normal: {
                     lineStyle: {
                         type: 'dashed',
                         color: '#ccc',
                         width: 2
                     }
                 },
             },
             data: [{
                 name: 'Y 轴值为 80 的水平线',
                 yAxis: 80,
                 label: {
                     normal: {
                         formatter: '(标准) 80',
                     },
                 },
             }, ],
         },
     }, ],
 };