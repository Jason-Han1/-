 option = {
     backgroundColor: "#a7d692",
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
             color: '#fdfefc',
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
             symbol: 'path://M35,0L35,70L0,70z M35,0L35,70L70,70z',
             data: [320, 302, 341, 374, 300],
             barWidth: '50%',
             symbolOffset: [0, -15],
             z: 1,
             label: {
                 show: true,
                 position: 'top',
                 color: '#fdfefc',
             },
             itemStyle: {
                 normal: {
                     color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                         offset: 0,
                         color: '#f7f3c6'
                     }, {
                         offset: 0.5,
                         color: '#f7f3c6'
                     }, {
                         offset: 0.5,
                         color: '#c0c192'
                     }, {
                         offset: 1,
                         color: '#c0c192'
                     }]),
                     opacity: 1,
                     shadowColor: '#669c75',
                     shadowBlur: 0,
                     shadowOffsetX:1,
                     shadowOffsetY:0,
                 }
             }
         },
         {
             name: '年报上报率2',
             type: 'pictorialBar',
             symbol: 'diamond',
             barWidth: '50%',
             symbolSize: ['100%', 30],
             z: 2,
             itemStyle: {
                 normal: {
                     color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                         offset: 0,
                         color: '#e2deaa'
                     }, {
                         offset: 0.5,
                         color: '#e2deaa'
                     }, {
                         offset: 0.5,
                         color: '#b2b380'
                     }, {
                         offset: 1,
                         color: '#b2b380'
                     }]),
                     opacity: 1,
                     shadowColor: '#669c75',
                     shadowBlur: 0,
                     shadowOffsetX:0,
                     shadowOffsetY:5,
                 }
             },
             data: [320, 302, 341, 374, 300],
         },

     ]
 };