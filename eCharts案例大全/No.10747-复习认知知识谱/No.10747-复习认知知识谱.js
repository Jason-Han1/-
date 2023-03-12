option = {
    tooltip: [{
                show: true,
                trigger: 'axis',
                axisPointer: {       // 坐标轴指示器，坐标轴触发有效
                    type: 'line'  // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter:'{b}:{c}<br>{b1}:{c1}',
            }],
     grid: [{
             x: '10%',
             y: '12%',
             width: '30%',
             height: '76%'
         },
         {
             x: '40%',
             y: '12%',
             width: '30%',
             height: '76%',
         },
         {
             x: '70%',
             y: '12%',
             width: '20%',
             height: '76%'
         }
     ],
     xAxis: [{
             gridIndex: 0,
             type: 'category',
             data:['a','1','2','4'],
             name:'常考知识点',
             nameLocation:'center',
             axisTick: {
                 show: false
             },
             axisLine: {
                 lineStyle: {
                     color: 'rgb(153, 153, 153)'
                 }
             },
             boundaryGap:false,
             triggerEvent: true,
             axisLabel:{
                 color:'transparent',
             }
         },
         {
             gridIndex: 1,
             type: 'category',
             data: ['b','2','3'],
             name:'次常考知识点',
             nameLocation:'center',
             axisTick: {
                 show: false
             },
             axisLine: {
                 lineStyle: {
                     color: 'rgb(153, 153, 153)'
                 }
             },
             boundaryGap:false,
             triggerEvent: true,
             axisLabel:{
                 color:'transparent',
             }
         },
         {
             gridIndex: 2,
             type: 'category',
             data: ['c','2','4','1'],
             name:'不常考知识点',
             nameLocation:'center',
             axisTick: {
                 show: false
             },
             axisLine: {
                 lineStyle: {
                     color: 'rgb(153, 153, 153)'
                 }
             },
             boundaryGap:false,
             triggerEvent: true,
             axisLabel:{
                 color:'transparent',
             },
         }
     ],
     yAxis: [{
             gridIndex: 0,
             type: 'value',
             axisLine: {
                 lineStyle: {
                     color: 'rgb(153, 153, 153)'
                 }
             },
             name: '认知得分',
             splitLine: {
                 lineStyle: {
                     type: 'dotted',
                     color: 'rgb(153, 153, 153)'
                 }
             },
             axisLabel: {
                 fontSize: 14,
                 color: '#999'
             },
             nameTextStyle: {
                 fontSize: 14,
                 color: '#666'
             },
             min: 0,
             max: 100
         },
         {
             gridIndex: 1,
             type: 'value',
             axisLine: {
                 show: true,
                 lineStyle: {
                     color: 'rgb(153, 153, 153)'
                 }
             },
             axisTick: {
                 show: false
             },
             axisLabel: {
                 show: false
             },
             splitLine: {
                 lineStyle: {
                     type: 'dotted',
                     color: 'rgb(153, 153, 153)'
                 }
             },
             min: 0,
             max: 100
         },
         {
             gridIndex: 2,
             type: 'value',
             axisLine: {
                 show: true,
                 lineStyle: {
                     color: 'rgb(153, 153, 153)'
                 }
             },
             axisTick: {
                 show: false
             },
             axisLabel: {
                 show: false
             },
             splitLine: {
                 lineStyle: {
                     type: 'dotted',
                     color: 'rgb(153, 153, 153)'
                 }
             },
             min: 0,
             max: 100
         }
     ],
     series: [
         // ...virtualLines,
         {
             xAxisIndex: 0,
             yAxisIndex: 0,
             data: [30,20,10,5],
             type: 'line',
             symbol: 'none',
             lineStyle: {
                 color: 'rgb(255, 104, 8)'
             },
             areaStyle: {
                 color: {
                     type: 'linear',
                     x: 0,
                     y: 0,
                     x2: 1,
                     y2: 0,
                     colorStops: [{
                         offset: 0,
                         color: '#fff'
                     }, {
                         offset: 1,
                         color: 'rgb(255, 104, 8)'
                     }],
                 }
             },
             smooth: true
         }, {
             xAxisIndex: 1,
             yAxisIndex: 1,
             data: [40,22,33],
             type: 'line',
             symbol: 'none',
             lineStyle: {
                 color: 'rgb(255, 162, 9)'
             },
             areaStyle: {
                 color: {
                     type: 'linear',
                     x: 0,
                     y: 0,
                     x2: 1,
                     y2: 0,
                     colorStops: [{
                         offset: 0,
                         color: '#fff'
                     }, {
                         offset: 1,
                         color: 'rgb(255, 162, 9)'
                     }],
                 }
             },
             smooth: true
         },
          {
             xAxisIndex: 1,
             yAxisIndex: 1,
             data: [60,44,66],
             type: 'line',
             symbol: 'none',
             lineStyle: {
                 color: 'rgb(255, 162, 9)'
             },
             areaStyle: {
                 color: {
                     type: 'linear',
                     x: 0,
                     y: 0,
                     x2: 1,
                     y2: 0,
                     colorStops: [{
                         offset: 0,
                         color: '#fff'
                     }, {
                         offset: 1,
                         color: 'rgb(255, 162, 9)'
                     }],
                 }
             },
             smooth: true
         },
         {
             xAxisIndex: 2,
             yAxisIndex: 2,
             data: [50,33,55,66],
             type: 'line',
             symbol: 'none',
             lineStyle: {
                 color: 'rgb(21, 120, 232)'
             },
             areaStyle: {
                 color: {
                     type: 'linear',
                     x: 0,
                     y: 0,
                     x2: 1,
                     y2: 0,
                     colorStops: [{
                         offset: 0,
                         color: '#fff'
                     }, {
                         offset: 1,
                         color: 'rgb(21, 120, 232)'
                     }],
                 }
             },
             smooth: true
         }
     ]
 };