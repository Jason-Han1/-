 option = {
     grid: {
         top: 40,
         left: 30,
         right: 80,
         bottom: 0,
         containLabel: true
     },
     tooltip: {
         formatter(params) {
             return '数量：' + params.data[0]
         }
     },
     xAxis: {
         type: 'value',
         name: '数量',
         nameGap: 10,
         nameTextStyle: {
             color: '#858fa6',
             fontFamily: 'Microsoft YAHei',
             padding: [30, 0, 0, 15]
         },
         max: 100,
         axisLabel: {
             color: '#858fa6'
         },
         axisTick: {
             show: false
         },
         splitLine: {
             lineStyle: {
                 width: 0,
                 color: '#E2E2E2'
             }
         },
         axisLine: {
             lineStyle: {
                 width: 1,
                 color: '#E2E2E2'
             }
         }
     },
     yAxis: {
         type: 'value',
         name: 'HR',
         nameGap: 10,
         nameTextStyle: {
             color: '#858fa6',
             fontFamily: 'Microsoft YAHei',
             padding: [0, 50, 15, 0]
         },
         max: 100,
         axisTick: {
             show: false
         },
         axisLabel: {
             color: '#858fa6'
         },
         splitLine: {
             lineStyle: {
                 width: 1,
                 color: '#E2E2E2'
             }
         },
         axisLine: {
             lineStyle: {
                 width: 0,
                 color: '#E2E2E2',
                 show: false
             }
         },
         scale: true
     },
     series: [{
         name: '',
         type: 'scatter',
         symbolSize(res) {
             return res[0] / 5 + 10
         },
         data: [
             ['13.50', 5],
             ['11.50', 5],
             ['51.50', 5],
             ['11.50', 5],
             ['20.50', 5],
             ['12.50', 5],
             ['41.50', 5],
             ['16.50', 5],
             ['32.50', 5],
             ['14.50', 5]
         ],
         itemStyle: {
             color: {
                 type: 'radial',
                 x: 0.4,
                 y: 0.3,
                 r: 1,
                 colorStops: [{
                         offset: 0,
                         color: 'rgb(193,217,241)'
                     },
                     {
                         offset: 1,
                         color: 'rgb(170,203,236)'
                     }
                 ],
                 global: false
             }
         }
     }]
 }