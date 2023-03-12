 var option = {
     backgroundColor: 'black',
     title:{
         text:'综合风险指数排名',
         x: '2%', 
         y: '8%',
         textStyle:{color:"#fff",fontSize:"20"}},
     tooltip: {
         trigger: 'axis'
     },
     textStyle: {
         color: '#32cbd7',
         fontSize: '10px'
     },
     grid: {
         left: '3%',
         right: '8%',
         bottom: '3%',
         top: '15%',
         containLabel: true
     },
     calculable: true,
     yAxis: [{
         data: [
             "市住建委",
             "市市市国规委",
             "市环保局",
             "市城管委",
             "市市场监督管理局",
             "市发改委",
             "市农业局",
             "市民政局",
             "市检察院",
             "市司法局",
             "市法院",
             "市公安局",
             "市水务局",
             "市人社局",
             "市交委",
             "市文广新局"
         ],
         axisLine: {
             lineStyle: {
                 color: 'rgb(20,203,215,0.2)'
             }
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
             show: false,
             lineStyle: {
                 // 使用深浅的间隔色
                 color: 'rgb(20,203,215,0.2)'
             }
         }
     }],
     xAxis: [{
         type: 'value',
         name: '',
         axisLine: {
             show: false,
             symbolOffset: [0, 10],
             lineStyle: {
                 color: 'rgb(20,203,215,0.2)'
             }
         },
         axisTick: {
             show: false,
         },
         splitLine: {
             show: true,
             lineStyle: {
                 color: 'rgb(20,203,215,0.2)'
             }
         }
     }],
     series: [{
         name: '综合风险指数',
         barWidth: '10px',
         type: 'bar',
         barGap: '10%',
         barCategoryGap: '60%',
         itemStyle: {
             normal: {
                 barBorderRadius: [0, 30, 30, 0],
                 //每个柱子的颜色即为colorList数组里的每一项,如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                 color: new echarts.graphic.LinearGradient(
                     0, 0, 0, 1,
                     [{
                             offset: 0,
                             color: 'red'
                         },
                         {
                             offset: 0.5,
                             color: 'blue'
                         },
                         {
                             offset: 1,
                             color: 'yellow'
                         }
                     ]
                 )
             }
         },
         data: [
             99,
             95,
             85,
             79,
             73,
             68,
             61,
             57,
             50,
             47,
             41,
             34,
             30,
             22,
             19,
             10
         ],
         zlevel: 11
     }]

 }