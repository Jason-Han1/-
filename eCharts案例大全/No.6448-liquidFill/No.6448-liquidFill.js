 var label = {
     normal: {
         textStyle: {
             color: '#ffffff',
             insideColor: '#ffffff',
             fontSize: 13
         }
     }
 };

 option = {
     backgroundColor: "#0f375f",
     graphic: [{
             type: 'group',
             left: '13%',
             top: '60%',
             children: [{
                 type: 'text',
                 z: 100,
                 left: 'center',
                 top: 'top',
                 style: {
                     fill: '#FFFFFF',
                     text: '电气',
                     font: '3vw Microsoft YaHei'
                 }
             }]
         },
         {
             type: 'group',
             left: '37%',
             top: '60%',
             children: [{
                 type: 'text',
                 z: 100,
                 left: 'center',
                 top: 'top',
                 style: {
                     fill: '#FFFFFF',
                     text: '排烟',
                     font: '3vw Microsoft YaHei'
                 }
             }]
         },
         {
             type: 'group',
             left: '60%',
             top: '60%',
             children: [{
                 type: 'text',
                 z: 100,
                 left: 'center',
                 top: 'top',
                 style: {
                     fill: '#FFFFFF',
                     text: '水压',
                     font: '3vw Microsoft YaHei'
                 }
             }]
         },
         {
             type: 'group',
             left: '82%',
             top: '60%',
             children: [{
                 type: 'text',
                 z: 100,
                 left: 'center',
                 top: 'top',
                 style: {
                     fill: '#FFFFFF',
                     text: '火灾',
                     font: '3vw Microsoft YaHei'
                 }
             }]
         },
     ],
     series: [

         {
             name: '水球图',
             type: 'liquidFill',
             radius: '20%',
             center: ['15%', '40%'],
             waveAnimation: 10, // 动画时长
             amplitude: 5, // 振幅
             data: [0.6, 0.6 - (1 / 10)],
             itemStyle: { //渐变色设置
                 normal: {
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: '#38D884'

                     }, {
                         offset: 1,
                         color: '#17B9C2'
                     }]),
                 }
             },
             color: {
                 type: 'linear',
                 x: 0,
                 y: 0,
                 x2: 1,
                 y2: 1,
                 colorStops: [{
                     offset: 1,
                     color: '#38D884'
                 }, {
                     offset: 0,
                     color: '#17B9C2'
                 }],
                 globalCoord: false
             },
             label,
             outline: {
                 show: true,
                 borderDistance: 0,
                 itemStyle: {
                     borderWidth: 2,
                     borderColor: {
                         type: 'linear',
                         x: 0,
                         y: 0,
                         x2: 1,
                         y2: 1,
                         colorStops: [{
                             offset: 0,
                             color: '#38D884'
                         }, {
                             offset: 1,
                             color: '#17B9C2'
                         }],
                         globalCoord: false
                     },
                 }
             },
             backgroundStyle: {
                 color: '#58A0AD'
             }
         },
         {
             name: '水球图',
             type: 'liquidFill',
             radius: '20%',
             center: ['40%', '40%'],
             waveAnimation: 10, // 动画时长
             amplitude: 5, // 振幅
             data: [0.6, 0.6 - (1 / 10)],
             itemStyle: { //渐变色设置
                 normal: {
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: '#F8862C'

                     }, {
                         offset: 1,
                         color: '#FA5E56'
                     }]),
                 }
             },
             color: {
                 type: 'linear',
                 x: 0,
                 y: 0,
                 x2: 1,
                 y2: 1,
                 colorStops: [{
                     offset: 1,
                     color: 'rgba(248, 134, 44, 1)'
                 }, {
                     offset: 0,
                     color: 'rgba(250, 94, 86, 1)'
                 }],
                 globalCoord: false
             },
             label,
             outline: {
                 show: true,
                 borderDistance: 0,
                 itemStyle: {
                     borderWidth: 2,
                     borderColor: {
                         type: 'linear',
                         x: 0,
                         y: 0,
                         x2: 1,
                         y2: 1,
                         colorStops: [{
                             offset: 0,
                             color: 'rgba(248, 134, 44, 1)'
                         }, {
                             offset: 1,
                             color: 'rgba(250, 94, 86, 1)'
                         }],
                         globalCoord: false
                     },
                 }
             },
             backgroundStyle: {
                 color: '#8D8690'
             }
         },
         {
             name: '水球图',
             type: 'liquidFill',
             radius: '20%',
             center: ['63%', '40%'],
             waveAnimation: 10, // 动画时长
             amplitude: 5, // 振幅
             data: [0.6, 0.6 - (1 / 10)],
             itemStyle: { //渐变色设置
                 normal: {
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: '#14DAFF'

                     }, {
                         offset: 1,
                         color: '#4C87FF'
                     }]),
                 }
             },
             color: {
                 type: 'linear',
                 x: 0,
                 y: 0,
                 x2: 1,
                 y2: 1,
                 colorStops: [{
                     offset: 1,
                     color: '#14DAFF'
                 }, {
                     offset: 0,
                     color: '#4C87FF'
                 }],
                 globalCoord: false
             },
             label,
             outline: {
                 show: true,
                 borderDistance: 0,
                 itemStyle: {
                     borderWidth: 2,
                     borderColor: {
                         type: 'linear',
                         x: 0,
                         y: 0,
                         x2: 1,
                         y2: 1,
                         colorStops: [{
                             offset: 0,
                             color: '#14DAFF'
                         }, {
                             offset: 1,
                             color: '#4C87FF'
                         }],
                         globalCoord: false
                     },
                 }
             },
             backgroundStyle: {
                 color: '#72A2B3'
             }
         },
         {
             name: '水球图',
             type: 'liquidFill',
             radius: '20%',
             center: ['85%', '40%'],
             waveAnimation: 10, // 动画时长
             amplitude: 5, // 振幅
             data: [0.6, 0.6 - (1 / 10)],
             itemStyle: { //渐变色设置
                 normal: {
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: '#FF850F'

                     }, {
                         offset: 1,
                         color: '#FFBF32'
                     }]),
                 }
             },
             color: {
                 type: 'linear',
                 x: 0,
                 y: 0,
                 x2: 1,
                 y2: 1,
                 colorStops: [{
                     offset: 1,
                     color: '#FF850F'
                 }, {
                     offset: 0,
                     color: '#FFBF32'
                 }],
                 globalCoord: false
             },
             label,
             outline: {
                 show: true,
                 borderDistance: 0,
                 itemStyle: {
                     borderWidth: 2,
                     borderColor: {
                         type: 'linear',
                         x: 0,
                         y: 0,
                         x2: 1,
                         y2: 1,
                         colorStops: [{
                             offset: 0,
                             color: '#FF850F'
                         }, {
                             offset: 1,
                             color: '#FFBF32'
                         }],
                         globalCoord: false
                     },
                 }
             },
             backgroundStyle: {
                 color: 'transparent'
             }
         },
     ]

 };