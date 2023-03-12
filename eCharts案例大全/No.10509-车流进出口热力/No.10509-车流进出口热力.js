 var dataAll = [
     [2500, 2500, 1600, 0, 0, 0, 3000, 3000, 3900, 3900, 0, 0, 3200, 3200, 2800, 0, 1900, 1900, 1900, 0, 1200, 1200, 1900, 1900],
     [2500, 0, 0, 1800, 1500, 1500, 0, 2700, 0, 0, 2800, 2800, 2800, 0, 3900, 3900, 0, 2900, 3200, 3200, 0, 2800, 0, 3700]
 ];
 var legendData = ['出馆车流', '入馆车流']; //图列
 var xdata = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8'];
 var xdata2 = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8']
 option = {
     backgroundColor: 'rgba(0,0,0,1)',
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
         //  icon:'rect',
         x: 900,
         y: 15,
         textStyle: {
             color: '#fff'
         },
     },
     grid: [{
             x: '7%',
             y: '7%',
             width: '78%',
             height: '38%'
         },

         {
             x: '7%',
             y2: '10%',
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
             //  nameGap: '50',
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
             data: xdata2,
             axisTick: {
                 show: false
             },
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
             position: 'top'
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
                 fontSize: 14,
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
                     barBorderRadius: 10
                 },
                 emphasis: {
                     barBorderRadius: 10
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
                     barBorderRadius: 10
                 },
                 emphasis: {
                     barBorderRadius: 10
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