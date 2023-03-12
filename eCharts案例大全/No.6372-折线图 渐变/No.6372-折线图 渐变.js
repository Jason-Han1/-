 option = {
     color: ['#03c38a'],
     grid: {
         top: 30,
         left: 20,
         right: 20,
         bottom: 10,
         containLabel: true
     },
     tooltip: {
         show: true,
         trigger: 'axis'
     },
     xAxis: {
         type: 'category',
         data: [
             '2020-07-23',
             '2020-07-24',
             '2020-07-25',
             '2020-07-26',
             '2020-07-27',
             '2020-07-28',
             '2020-07-29',
             '2020-07-30',
             '2020-07-31',
             '2020-08-01',
             '2020-08-02',
             '2020-08-03',
             '2020-08-04',
             '2020-08-05',
             '2020-08-06',
             '2020-08-07',
             '2020-08-08',
             '2020-08-09',
             '2020-08-10',
             '2020-08-11',
             '2020-08-12',
             '2020-08-13',
             '2020-08-14',
             '2020-08-15',
             '2020-08-16',
             '2020-08-17',
             '2020-08-18',
             '2020-08-19',
             '2020-08-20',
             '2020-08-21'
         ],
         axisTick: {
             show: false
         },
         boundaryGap: false,
         axisLabel: {
             show: true,
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
                 width: 1,
                 color: '#E2E2E2'
             }
         }
     },
     yAxis: {
         type: 'value',
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
         max: 100
     },
     series: [{
         name: '数量',
         type: 'line',
         smooth: true,
         symbolSize: 3,
         showSymbol: false,
         areaStyle: {
             color: {
                 type: 'linear',
                 x: 0,
                 y: 0,
                 x2: 0,
                 y2: 1,
                 colorStops: [{
                         offset: 1,
                         color: '#d8f5ed1a'
                     },
                     {
                         offset: 0.5,
                         color: '#D8F5ED'
                     },
                     {
                         offset: 0,
                         color: '#C7F1E5'
                     }
                 ]
             }
         },
         data: [
             37,
             37,
             37,
             37,
             37,
             48,
             74,
             74,
             75,
             76,
             76,
             76,
             75,
             72,
             72,
             72,
             72,
             72,
             72,
             72,
             72,
             68,
             57,
             57,
             57,
             57,
             57,
             57,
             57,
             57
         ]
     }]
 }