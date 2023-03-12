 option = {
     tooltip: {
         trigger: 'axis',
     },
     grid: {
         left: '4%',
         right: '4%',
         bottom: '3%',
         containLabel: true
     },
     xAxis: {
         type: 'category',
         boundaryGap: false,
         data: ['0-2时', '2-4时', '4-6时', '6-8时', '8-10时', '10-12时', '12-14时', '14-16时', '16-18时', '18-20时', '20-22时', '22-24时'],
         axisLabel: {
             interval: 0,
             rotate: 40
         }
     },
     yAxis: {
         type: 'value',
     },
     series: [{
         name: '总订单（笔）',
         type: 'bar',
         areaStyle: {},
         data: [113, 23, 13, 32, 301, 734, 1390, 1330, 1244, 1490, 1546, 1246]
     }]
 };



 myChart.setOption(option);

 function randomData() {
     return Math.round(Math.random() * 1000);
 }