 option = {
     legend: {
         orient: 'vertical',
         x: '80%',
         y: '60%',
         icon: 'rect',
         data: ['中国', '巴西', '印尼', '美国', '印度']
     },
     tooltip: {},
     dataset: {
         source: [
             ['巴西', 85.8],
             ['印尼', 43.3],
             ['美国', 83.1],
             ['印度', 86.4],
             ['中国', 72.4]
         ]
     },
     xAxis: {
         type: 'value',
         show:false,
         boundaryGap: [0, 0.01],
         axisTick: {
             show: false
         },
         axisLine: {
             show: false,
             lineStyle: {
                 color: '#fff',
             }
         },
         splitLine: {
             show: false
         },
     },
     yAxis: {
         type: 'category',
         axisTick: {
             show: false
         },
         "splitLine": { //网格线
             "show": false
         },
         inverse: 'true', //排序
         axisLine: {
             show: false,
             lineStyle: {
                 color: '#fff',
             }
         },
     },
     grid: {
         top: '0%',
         bottom: '70%'
     },
     series: [{
             type: 'bar',
             smooth: true,
             seriesLayoutBy: 'column',
             label: {
                 normal: {
                     show: true,
                     position: 'right'
                 }
             },
             itemStyle: {
                 normal: {
                     show: true,
                     color: function(params) {
                         return {
                             type: 'linear',
                             colorStops: [{
                                     offset: 0,
                                     color: '#2378f7'
                                 },
                                 {
                                     offset: 1,
                                     color: '#83bff6'
                                 }
                             ]
                         }
                     },
                 },
                 emphasis: {
                     color: function(params) {
                         return {
                             type: 'linear',
                             colorStops: [{
                                     offset: 0,
                                     color: '#83bff6'
                                 },
                                 {
                                     offset: 1,
                                     color: '#2378f7'
                                 },
                             ]
                         }
                     },
                 }
             },
         },
         {
             type: 'pie',
             id: 'pie',
             selectedMode: 'multiple',
             center: ['40%', '75%'],
             radius: ['20%', '30%'],
             label: {
                 formatter: '{@2012} ({d}%)',
             },
         }
     ]
 };


 myChart.setOption(option);