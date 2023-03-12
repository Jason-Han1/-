 option = {
     tooltip: {
         trigger: 'axis',
     },
     legend: {
         data: ['成交转化率', '复购率']
     },
     grid: {
         left: '4%',
         right: '4%',
         bottom: '3%',
         containLabel: true
     },
     xAxis: {
         boundaryGap: false,
         data: ['12月01', '12月02', '12月03', '12月04', '12月05', '12月06', '12月07']
     },
     yAxis: {
         name: '百分比（%）',
         type: 'value'
     },
     series: [{
             name: '成交转化率',
             type: 'line',
             data: [13, 12, 11, 14, 19, 13, 17]
         },
         {
             name: '复购率',
             type: 'line',
             data: [3, 2, 1, 4, 9, 3, 7]
         }
     ]
 };



 myChart.setOption(option);

 function randomData() {
     return Math.round(Math.random() * 1000);
 }