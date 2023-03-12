 var datas = {
     value: 80,
     company: "%",
     ringColor: [{
         offset: 0,
         color: '#cf1c27' // 0% 处的颜色
     }, {
         offset: 1,
         color: '#5e37ac' // 100% 处的颜色
     }]
 }
 var option = {
     backgroundColor: "#142468",
     title: {
         text: datas.value + datas.company,
         x: 'center',
         y: 'center',
         textStyle: {
             fontWeight: 'bold',
             color: 'white',
             fontSize: '90'
         }
     },
     color: ['#282c40'],
     legend: {
         show: false,
         data: []
     },

     series: [{
             name: 'Line 1',
             type: 'pie',
             clockWise: false, //逆向
             startAngle: 90, //开始角度
             radius: ['50%', '60%'],
             itemStyle: {
                 normal: {
                     label: {
                         show: false
                     },
                     labelLine: {
                         show: false
                     }
                 }
             },
             hoverAnimation: false,
             data: [{
                     value: datas.value,
                     name: '',
                     itemStyle: {
                         normal: {
                             color: { // 完成的圆环的颜色
                                 colorStops: datas.ringColor
                             },
                             label: {
                                 show: false
                             },
                             labelLine: {
                                 show: false
                             }
                         }
                     }
                 }, {
                     name: '',
                     value: 100 - datas.value
                 },
                 {
                     name: '统计',
                     type: 'gauge',
                     splitNumber: 30, //刻度数量
                     min: 0,
                     max: 100,
                     radius: '68%', //图表尺寸
                     center: ['50%', '50%'],
                     startAngle: 90,
                     endAngle: -269.9999,
                     axisLine: {
                         show: true,
                         lineStyle: {
                             width: 0,
                             shadowBlur: 0,
                             color: [
                                 [0, '#0dc2fe'],
                                 [1, '#0dc2fe']
                             ]
                         }
                     },
                     axisTick: {
                         show: true,
                         lineStyle: {
                             color: '#0dc2fe',
                             width: 2
                         },
                         length: 20,
                         splitNumber: 5
                     },
                     splitLine: {
                         show: true,
                         length: 20,
                         lineStyle: {
                             color: '#0dc2fe',
                         }
                     },
                     axisLabel: {
                         show: false
                     },
                     pointer: { //仪表盘指针
                         show: 0,
                     },
                     detail: {
                         borderColor: '#fff',
                         shadowColor: '#fff', //默认透明
                         shadowBlur: 2,
                         offsetCenter: [0, '0%'], // x, y，单位px
                         textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                             color: '#fff',
                             fontSize: 30,
                         },
                         formatter: '{value}'
                     },
                     data: []
                 }
             ]
         },
         {
             type: 'pie',
             zlevel: 21,
             silent: true,
             radius: ['71%', '70%'],
             hoverAnimation: false,
             clockWise: false, //逆向
             startAngle: 90, //开始角度
             color: '#2dc0c9',
             // animation:false,
             data: [1],
             labelLine: {
                 normal: {
                     show: false
                 }
             }
         },
         {
             type: 'pie',
             zlevel: 20,
             silent: true,
             radius: ['62%', '61%'],
             hoverAnimation: false,
             clockWise: false, //逆向
             startAngle: 90, //开始角度
             color: '#2dc0c9',
             // animation:false,
             data: [1],
             labelLine: {
                 normal: {
                     show: false
                 }
             }
         },
         {
             name: '统计',
             type: 'gauge',
             splitNumber: 30, //刻度数量
             min: 0,
             max: 100,
             radius: '68%', //图表尺寸
             center: ['50%', '50%'],
             clockWise: false, //逆向
             startAngle: 90, //开始角度
             endAngle: -269.9999,
             axisLine: {
                 show: true,
                 lineStyle: {
                     width: 0,
                     shadowBlur: 0,
                     color: [
                         [0, '#0dc2fe'],
                         [1, '#0dc2fe']
                     ]
                 }
             },
             axisTick: {
                 show: true,
                 lineStyle: {
                     color: '#0dc2fe',
                     width: 2
                 },
                 length: 20,
                 splitNumber: 5
             },
             splitLine: {
                 show: true,
                 length: 20,
                 lineStyle: {
                     color: '#0dc2fe',
                 }
             },
             axisLabel: {
                 show: false
             },
             pointer: { //仪表盘指针
                 show: 0,
             },
             detail: {
                 show: false
             }
         }
     ]
 };