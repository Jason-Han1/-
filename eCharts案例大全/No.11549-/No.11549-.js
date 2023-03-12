 var base = +new Date(1968, 9, 3);
 var oneDay = 24 * 3600 * 1000;
 var date = [];

 var data = [Math.random() * 300];

 for (var i = 1; i < 50; i++) {
     var now = new Date(base += oneDay);
     date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
     data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
 }
 option = {
     tooltip: {
         trigger: 'axis',
         position: function(pt) {
             return [pt[0], '10%'];
         }
     },
     grid: {
         top: 15,
         left: 40,
         right: 15,
         height: '80%'
     },
     xAxis: {
         type: 'category',
         boundaryGap: false,
         axisLine: {
             lineStyle: {
                 color: '#000'
             }
         },
         data: date
     },
     yAxis: {
         type: 'value',
         boundaryGap: [0, '100%'],
         axisLine: {
             lineStyle: {
                 color: '#000'
             }
         },
     },
     series: [{
         name: '模拟数据',
         type: 'line',
         stack: 'a',
         smooth: true,
         symbol: 'none',
         sampling: 'average',
         itemStyle: {
             color: '#0276a0'
         },
         areaStyle: {
             color: '#0276a0'
         },
         data: data
     }]
 };