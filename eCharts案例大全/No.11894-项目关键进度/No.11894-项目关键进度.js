 var option = {
     backgroundColor: 'black',
     color: ['#2adecf'],
     textStyle: {
         color: 'rgb(222,222,222)',
     },
     tooltip: {
         trigger: 'axis',
         axisPointer: {
             type: 'shadow'
         }
     },
     legend: {
         show: false,
         data: ['计划完成日期', '实际完成'],
         textStyle: {
             color: '#FFFFFF'
         }
     },
     grid: {
         left: '3%',
         right: '3%',
         bottom: '3%',
         top: '15%',
         containLabel: true
     },
     xAxis: [{
         data: [
             "1#码头",
             "2#码头",
             "3#泊位",
             "4#泊位",
             "7#码头"
         ],
         axisLine: {
             show: true
         },
         splitLine: {
             show: false
         },
         axisTick: {
             show: false
         },
         axisLabel: {
             interval: 0,
             rotate: 0
         }
     }],
     yAxis: [{
             type: 'value',
             name: '',
             axisLine: {
                 show: false
             },
             axisTick: {
                 show: false
             },
             splitLine: {
                 show: false
             },
             min: '2',
             max: '12',
             interval: 2,
             axisLabel: {
                 formatter: '{value}月'
             },
         },
         {
             type: 'value',
             name: '',
             show: false,
             axisLine: {
                 show: false
             },
             axisTick: {
                 show: false
             },
             splitLine: {
                 show: false
             },
             min: '0',
             max: '100',
             interval: 10,
             axisLabel: {}
         }
     ],
     series: [{
         name: '计划完成日期',
         type: 'bar',
         barWidth: '20%',
         label: { //图形上的文本标签
             normal: {
                 show: true,
                 position: 'top',
                 textStyle: {
                     color: '#fff',
                     fontStyle: 'normal'
                 },
                 formatter: '{c}月'
             },
         },
         itemStyle: {
             normal: {
                 color: new echarts.graphic.LinearGradient(
                     0, 1, 0, 0, [{
                         offset: 0,
                         color: '#719aff'
                     }, {
                         offset: 1,
                         color: '#51c3ff'
                     }]
                 )
             }
         },
         data: [
             9,
             11,
             10,
             9,
             8
         ]
     }, {
         name: '实际完成',
         type: 'bar',
         yAxisIndex: 1,
         barWidth: '20%',
         label: { //图形上的文本标签
             normal: {
                 show: true,
                 position: 'top',
                 textStyle: {
                     color: '#fff',
                     fontStyle: 'normal'
                 },
                 formatter: '{c}%'
             },
         },
         itemStyle: {
             normal: {
                 color: new echarts.graphic.LinearGradient(
                     0, 1, 0, 0, [{
                         offset: 0,
                         color: '#ffbf37'
                     }, {
                         offset: 1,
                         color: '#ffbf37'
                     }]
                 )
             }
         },
         data: [
             30,
             40,
             30,
             60,
             30
         ],

     }]
 }