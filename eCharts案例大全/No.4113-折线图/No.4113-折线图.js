 var base = +new Date(2000, 9, 3)
 var oneDay = 24 * 3600 * 1000
 var date = []
 var successData = [Math.random() * 200]
 var errorData = [Math.random() * 100]

 for (var i = 1; i < 1000; i++) {
     var now = new Date((base += oneDay))
     date.push(
         [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/')
     )
     const s = Math.abs(
         Math.round((Math.random() - 0.5) * 20 + successData[i - 1])
     )
     successData.push(s)
     const e = Math.abs(
         Math.round((Math.random() - 0.5) * 20 + errorData[i - 1])
     )
     errorData.push(e)
 }

 option = {
     dataZoom: {
         type: 'slider',
         xAxisIndex: [0],
         filterMode: 'filter',
         start: 50,
         end: 100
     },
     legend: {
         show: true,
         x: 'right',
         data: ['成功', '失败']
     },
     tooltip: {
         trigger: 'axis'
     },
     grid: {
         width: '85%',
         top: 40,
         left: '7%'
     },
     color: ['rgb(175, 227, 155)',
         'rgb(96, 172, 252)',
     ],
     xAxis: {
         name: '时间',
         type: 'category',
         data: date,
         boundaryGap: false
     },
     yAxis: {
         name: '测试',
         type: 'value',
         boundaryGap: [0, '100%'],
         splitLine: {
             show: false
         }
     },
     series: [{
             name: '成功',
             data: successData,
             type: 'line'
         },
         {
             name: '失败',
             data: errorData,
             type: 'line'
         }
     ]
 };