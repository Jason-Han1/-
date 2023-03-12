 colorFormatOnChart = (value, max) => {
     if (value / max < 0.1) {
         return [
             [0.1, '#17D5F7'],
             [1, '#999999']
         ]
     } else if (value / max < 0.2) {
         return [
             [0.1, '#17D5F7'],
             [0.2, 'rgba(147, 255, 203, 1)'],
             [1, '#999999']
         ]
     } else if (value / max < 0.3) {
         return [
             [0.1, '#17D5F7'],
             [0.2, '#1BF0AC'],
             [0.3, 'rgba(147, 255, 203, 1)'],
             [1, '#999999']
         ]
     } else if (value / max < 0.4) {
         return [
             [0.1, '#17D5F7'],
             [0.2, '#17D5F7'],
             [0.3, '#1BF0AC'],
             [0.4, 'rgba(147, 255, 203, 1)'],
             [1, '#999999']
         ]
     } else if (value / max < 0.5) {
         return [
             [0.1, '#17D5F7'],
             [0.2, '#17D5F7'],
             [0.3, '#1BF0AC'],
             [0.4, '#1BF0AC'],
             [0.5, 'rgba(147, 255, 203, 1)'],
             [1, '#999999']
         ]
     } else if (value / max < 0.6) {
         return [
             [0.1, '#17D5F7'],
             [0.2, '#17D5F7'],
             [0.3, '#17D5F7'],
             [0.4, '#1BF0AC'],
             [0.5, '#1BF0AC'],
             [0.6, 'rgba(147, 255, 203, 1)'],

             [1, '#999999']
         ]
     } else if (value / max < 0.7) {
         return [
             [0.1, '#17D5F7'],
             [0.2, '#17D5F7'],
             [0.3, '#17D5F7'],
             [0.4, '#1BF0AC'],
             [0.5, '#1BF0AC'],
             [0.6, 'rgba(147, 255, 203, 1)'],
             [0.7, 'rgba(147, 255, 203, 1)'],
             [1, '#999999']
         ]
     } else if (value / max < 0.8) {
         return [
             [0.1, '#17D5F7'],
             [0.2, '#17D5F7'],
             [0.3, '#17D5F7'],
             [0.4, '#17D5F7'],
             [0.5, '#1BF0AC'],
             [0.6, '#1BF0AC'],
             [0.7, '#1BF0AC'],
             [0.8, 'rgba(147, 255, 203, 1)'],
             [1, '#999999']
         ]

     } else if (value / max > 0.9) {
         return [
             [0.1, '#17D5F7'],
             [0.2, '#17D5F7'],
             [0.3, '#17D5F7'],
             [0.4, '#1BF0AC'],
             [0.5, '#1BF0AC'],
             [0.6, '#A2DA2A'],
             [0.7, '#A2DA2A'],
             [0.8, '#DBF743'],
             [0.9, 'rgba(147, 255, 203, 1)'],
             [1, '#999999']
         ]
     } else {
         return [
             [0.1, '#17D5F7'],
             [0.2, '#17D5F7'],
             [0.3, '#17D5F7'],
             [0.4, '#17D5F7'],
             [0.5, '#1BF0AC'],
             [0.6, '#1BF0AC'],
             [0.7, '#1BF0AC'],
             [0.8, '#1BF0AC'],
             [0.9, 'rgba(147, 255, 203, 1)'],
             [1, 'rgba(147, 255, 203, 1)']
         ]
     }
 }
 option = {
     background: '#999999',
     grid: {
         left: '4%',
         bottom: '10%',
         containLabel: true
     },
     series: [{
             type: 'gauge',
             radius: '80%',
             splitNumber: 24,
             min: 0,
             max: 100,
             center: ['50%', '50%'],

             // detail: {
             //     // offsetCenter: [0, 100],
             //     color: '#fff',
             //     fontSize: 22,
             //     formatter: ' '
             // },
             pointer: {
                 show: false
             },
             axisLine: {
                 show: true,
                 lineStyle: {
                     color: '#999999',
                     width: 5
                 }
             },

             axisTick: {
                 show: false
             },
             splitLine: {
                 show: true,
                 length: 4,
                 lineStyle: {
                     width: 4,
                     color: '#999999'
                 }
             },
             axisLabel: {
                 show: false
             }
         },

         {
             name: '',
             type: 'gauge',
             splitNumber: 4, //刻度数量
             min: 0,
             max: 100,
             radius: '100%', //图表尺寸
             center: ['50%', '50%'],
             // title: {
             //     show: true,
             //     offsetCenter: [0, '25%'], // x, y，单位px
             //     textStyle: {
             //         color: '#36ce9b',
             //     }
             // },
             detail: {
                 show: true,
                 offsetCenter: [0, 0],
                 color: '#fff',
                 fontSize: 34,
                 formatter: '{value}' + '%',
             },
             axisLine: {
                 show: false,
                 lineStyle: {
                     width: 0,
                     shadowBlur: 0,
                     color: colorFormatOnChart(30, 100),
                 }
             },
             axisTick: {
                 show: true,
                 lineStyle: {
                     color: 'auto',
                     width: 3
                 },
                 length: 30,
                 splitNumber: 6
             },
             splitLine: {
                 show: false,
                 length: 30,
                 lineStyle: {
                     color: 'auto',
                 }
             },
             axisLabel: {
                 show: false
             },
             pointer: { //仪表盘指针
                 show: 0,
                 length: '70%',
                 width: 2
             },


             data: [{
                 name: "",
                 value: 30
             }]
         }
     ]
 };