 let colors = [
     '#4150d8',
     '#28bf7e',
     '#ed7c2f',
     '#f2a93b',
     '#f9cf36',
     '#4a5bdc',
     '#4cd698',
     '#f4914e',
     '#fcb75b',
     '#ffe180',
     '#b6c2ff',
     '#96edc1'
 ];
 var option = {
     backgroundColor: '#fff',
     title: {
         text: '受害省份排行TOP3情况',
         left: 'center',
         textStyle: {
             color: '#707070'
         }
     },
     tooltip: {
         trigger: 'axis',
         axisPointer: {
             type: 'shadow'
         }
     },
     grid: {
         left: '10%',
         right: '10%',
         bottom: '10%',
         top: '10%',
         containLabel: true
     },
     legend: {
         data: ['3月', '4月', '5月', '6月'],
         right: 10,
         top: 12,
         textStyle: {
             color: '#333'
         },
         itemWidth: 12,
         itemHeight: 10
     },
     xAxis: {
         type: 'category',
         axisLabel: {
             rotate: 25,
         },
         data: ['江苏省', '辽宁省', '上海市']
     },
     yAxis: {
         type: 'value',
         axisLine: {
             show: false,
             lineStyle: {
                 color: '#333'
             }
         },
         axisTick: {
             show: false
         },
         splitLine: {
             show: true,
             lineStyle: {
                 color: '#EFEFEF',
                 type: 'dashed'
             }
         }
     },
     series: [{
             name: '3月',
             type: 'bar',
             barWidth: '15%',
             itemStyle: {
                 normal: {
                     color: '#4150d8',
                     barBorderRadius: 12,
                     label: {
                         show: true,
                         position: 'top',
                         textStyle: {
                             color: 'black',
                             fontSize: 16
                         }
                     }
                 }
             },
             data: [400, 410, 300]
         },
         {
             name: '4月',
             type: 'bar',
             barWidth: '15%',
             itemStyle: {
                 normal: {
                     color: '#28bf7e',
                     barBorderRadius: 12,
                     label: {
                         show: true,
                         position: 'top',
                         textStyle: {
                             color: 'black',
                             fontSize: 16
                         }
                     }
                 }
             },
             data: [480, 560, 500]
         },

         {
             name: '5月',
             type: 'bar',
             barWidth: '15%',
             itemStyle: {
                 normal: {
                     color: '#ed7c2f',
                     barBorderRadius: 12,
                     label: {
                         show: true,
                         position: 'top',
                         textStyle: {
                             color: 'black',
                             fontSize: 16
                         }
                     }
                 }
             },
             data: [440, 550, 560]
         },

         {
             name: '6月',
             type: 'bar',
             barWidth: '15%',
             itemStyle: {
                 normal: {
                     color: '#f2a93b',
                     barBorderRadius: 12,
                     label: {
                         show: true,
                         position: 'top',
                         textStyle: {
                             color: 'black',
                             fontSize: 16
                         }
                     }
                 }
             },
             data: [470, 550, 550]
         }
     ]
 };