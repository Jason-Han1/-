 var dataAll = [
     [3200, 3200, 2200, 3800, 3000, 3800, 3700],
     [3600, 3200, 2800, 2100, 2800, 2900, 2980]
 ];
 var legendData = ['出馆客流', '入馆客流']; //图列
 var xdata = ['07.01', '07.02', '07.03', '07.04', '07.05', '07.06', '07.07'];
 option = {
     backgroundColor: 'rgba(0,0,0,.2)',
     color: ['#3398DB'],
     tooltip: {
         trigger: 'axis',
         axisPointer: { // 坐标轴指示器，坐标轴触发有效
             type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
         }
     },
     legend: {
         data: legendData,
         align: 'left',
         x: 730,
         y: 15,
         textStyle: {
             color: '#fff'
         },
     },
     grid: [{
             x: '7%',
             y: '5.5%',
             width: '78%',
             height: '38%'
         },

         {
             x: '7%',
             y2: '15%',
             width: '78%',
             height: '38%'
         },

     ],
     xAxis: [{
             gridIndex: 0,
             data: xdata,
             axisTick: {
                 show: false
             },
             nameGap: '50',
             axisLine: {
                 lineStyle: {
                     color: 'rgba(255,255,255,0)',
                 }
             },
             axisLabel: {
                 textStyle: {
                     fontSize: 14,
                     color: '#fff'
                 }
             },
         },
         {
             gridIndex: 1,
             data: xdata,
             axisLabel: {
                 show: false
             },
             axisTick: {
                 show: true
             },
             axisLine: {
                 lineStyle: {
                     color: 'rgba(255,255,255,0)',
                 }
             },
         },
     ],
     yAxis: [{
             gridIndex: 0,
             min: 0,
             //  max: 4000,
             splitLine: {
                 lineStyle: {
                     //  type: 'dashed'
                 }
             },
             axisLine: {
                 lineStyle: {
                     color: 'rgba(255,255,255,0)'
                     // color:'65F5FD'
                 }
             },
             axisLabel: {
                 formatter: '{value}',
                 color: '#65F5FD',
                 fontSize: 14
             },
         },
         {
             gridIndex: 1,
             min: 0,
             //  max: 4000,
             inverse: true,
             splitLine: {
                 lineStyle: {
                     //  type: 'dashed'
                 }
             },
             axisLine: {
                 lineStyle: {
                     color: 'rgba(255,255,255,0)'
                     // color:'65F5FD'
                 }
             },
             axisLabel: {
                 //  formatter: '{value}',
                 color: '#65F5FD',
                 fontSize: 14
             },
         },

     ],
     series: [{
             name: legendData[0],
             type: 'bar',
             xAxisIndex: 0,
             yAxisIndex: 0,
             data: dataAll[0],
             itemStyle: {
                 normal: {
                     color: new echarts.graphic.LinearGradient(
                         0, 1, 0, 0,
                         [{
                                 offset: 1,
                                 color: 'rgba(103,86,254,.9)'
                             },
                             {
                                 offset: 0,
                                 color: 'rgba(13,47,119,.7)'
                             }
                         ]
                     ),
                     barBorderRadius: [5, 5, 5, 5]
                 },
                 emphasis: {
                     barBorderRadius: [5, 5, 5, 5]
                 },
             },
             barWidth: 20,
             //  Radius:[10,10,0,0],
             label: {
                 normal: {
                     show: false,
                     position: 'top'
                 }
             },
         },
         {
             name: legendData[1],
             type: 'bar',
             xAxisIndex: 1,
             yAxisIndex: 1,
             data: dataAll[1],
             itemStyle: {
                 normal: {
                     color: new echarts.graphic.LinearGradient(
                         0, 1, 0, 0,
                         [{
                                 offset: 1,
                                 color: 'rgba(7,36,116,.7)'
                             },
                             {
                                 offset: 0,
                                 color: 'rgba(17,179,202,.9)'
                             }
                         ]
                     ),
                     barBorderRadius: [5, 5, 5, 5]
                 },
                 emphasis: {
                     barBorderRadius: [5, 5, 5, 5]
                 },
             },
             barWidth: 20,
             label: {
                 normal: {
                     show: false,
                     position: 'bottom'
                 }
             },
         },
     ]
 };