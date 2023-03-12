 option = {
     backgroundColor: "#01001a",
     tooltip: {
            trigger: 'item',
            formatter: "{b}<br/>{c}%",
        },
     grid: {
            top: '10%',
            left: '5%',
            right: '5%',
            bottom: '13%',
            containLabel: true
        },
     yAxis: [{
         type: 'value',
         show: false,
     }],
     xAxis: [{
         type: 'category',
         axisTick: {
             show: false
         },
         data: ['A', 'B', 'C', 'D', 'E'],
         axisLabel: {
             interval: 0,
             color: '#ceddf1',
         },
         splitLine: {
             show: false
         },
         axisLine: {
             show: false
         },
         splitArea: {
             show: false,
         }
     }],
     series: [{
             type: 'pictorialBar',
             symbol: 'rect',
            symbolRepeat: true,
            symbolSize:['60%', '10'],
            
            data: [320, 302, 341, 374, 300],
             z: 1,
             label: {
                 show: true,
                 position: 'top',
                 color: '#66cfec',
             },
             itemStyle: {
                 normal: {
                     color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                         offset: 0,
                         color: '#2af270'
                     }, {
                         offset: 0.5,
                         color: '#d4074d'
                     }, {
                         offset: 0.5,
                         color: '#d4074d'
                     }, {
                         offset: 1,
                         color: '#2af270'
                     }]),
                     opacity: 1,
                     shadowColor: '#0085fd',
                     shadowBlur: 0,
                     shadowOffsetX:0,
                     shadowOffsetY:1.3,
                 }
             }
         },

     ]
 };