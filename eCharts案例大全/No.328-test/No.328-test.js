 var value = 0.4;
 var data = [value, value, value, ];
 option = {
     backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
         offset: 0,
         color: '#282c51'
     }, {
         offset: 1,
         color: '#050a2a'
     }]),
     title: {
         text: (value * 100).toFixed(0) + '{a|%}',
         textStyle: {
             fontSize: 60,
             fontFamily: 'Microsoft Yahei',
             fontWeight: 'normal',
             color: '#fff',
             rich: {
                 a: {
                     fontSize: 60,
                 }
             }
         },
         x: 'center',
         y: '35%'
     },
     graphic: [{
         type: 'group',
         left: 'center',
         top: '60%',
         children: [{
             type: 'text',
             z: 100,
             left: '10',
             top: 'middle',
             style: {
                 fill: '#fff',
                 text: '流量统计',
                 font: '20px Microsoft YaHei'
             }
         }]
     }],
     series: [
         {
         type: 'liquidFill',
         radius: '80%',
         center: ['50%', '50%'],
         //  shape: 'roundRect',
         data: data,
         backgroundStyle: {
             color: {
                 type: 'radial',
                 x: 0.5,
                 y: 0.5,
                 r: 0.7,
                 colorStops: [{
                     offset: 1,
                     color: 'rgba(50, 65, 96, 1)'
                 }, {
                     offset: 0.5,
                     color: 'rgba(50, 65, 96, 1)'
                 }, {
                     offset: 0,
                     color: 'rgba(111, 117, 139, 1)'
                 }],
                 globalCoord: false
             },
         },
         outline: {
             borderDistance: 0,
             itemStyle: {
                 borderWidth: 0,
                 borderColor: {
                     type: 'linear',
                     x: 1,
                     y: 0,
                     x2: 0,
                     y2: 0,
                     colorStops: [{
                         offset: 0,
                         color: 'rgba(212, 252, 125, 0)'
                     }, {
                         offset: 0.5,
                         color: 'rgba(2, 193, 131, 0)'
                     }, {
                         offset: 1,
                         color: 'rgba(2, 193, 131, 0)'
                     }],
                     globalCoord: false
                 },
                 shadowBlur: 10,
                 shadowColor: 'rgba(13, 13, 46, 0)'
             }
         },
         color: new echarts.graphic.RadialGradient(0.6, 0, 1, [{
             offset: 0,
             color: 'rgba(178, 251, 105, 0)'
         }, {
             offset: 1,
             color: 'rgba(10, 203, 135, 0)'
         }]),
         label: {
             normal: {
                 formatter: '',
             }
         }
     }, 
     {
         type: 'liquidFill',
         radius: '80%',
         center: ['50%', '50%'],
         //  shape: 'roundRect',
         data: data,
         backgroundStyle: {
             color: {
                 type: 'radial',
                 x: 0.5,
                 y: 0.5,
                 r: 0.7,
                 colorStops: [{
                     offset: 1,
                     color: 'rgba(50, 65, 96, 1)'
                 }, {
                     offset: 0.5,
                     color: 'rgba(50, 65, 96, 1)'
                 }, {
                     offset: 0,
                     color: 'rgba(111, 117, 139, 1)'
                 }],
                 globalCoord: false
             },
         },
         outline: {
             borderDistance: 17,
             itemStyle: {
                 borderWidth: 7,
                 borderColor: {
                     type: 'linear',
                     x: 1,
                     y: 0,
                     x2: 0,
                     y2: 0,
                     colorStops: [{
                         offset: 0,
                         color: 'rgba(212, 252, 125, 1)'
                     }, {
                         offset: 0.5,
                         color: 'rgba(2, 193, 131, 1)'
                     }, {
                         offset: 1,
                         color: 'rgba(2, 193, 131, 1)'
                     }],
                     globalCoord: false
                 },
                 shadowBlur: 10,
                 shadowColor: 'rgba(13, 13, 46, 1)'
             }
         },
         color: new echarts.graphic.RadialGradient(0.6, 0, 1, [{
             offset: 0,
             color: 'rgba(178, 251, 105, 1)'
         }, {
             offset: 1,
             color: 'rgba(10, 203, 135, 1)'
         }]),
         label: {
             normal: {
                 formatter: '',
             }
         }
     }, ]
 };