option = {
   legend: {},
   tooltip: {},
   dataset: {
       source: [
           ['姓名', '年龄', '身高', '体重'],
           ['小明', 22, 180, 75],
           ['小红', 21, 165, 45],
           ['老王', 48, 170, 82]
       ]
   },
   xAxis: {},
   yAxis: {},
   series: [
       {    
           type: 'scatter',
            encode: {
               x: '年龄',
               y: '身高'
            },
            label: {
                show: true,
                formatter: '{c}',
                position: 'bottom'
            }
       }
   ],
   visualMap: {
       type: 'continuous',
       encode: '体重',
       max: 100,
       min: 0,
       inRange: {
           symbolSize: [10, 100],
           color: ['green', 'yellow', 'red']
       }
   }
};