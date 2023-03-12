 var value = 0.2;
 var real=  21100;
 var title= 'QPS水位';
 var data = [value,value,value];
 option = {
     backgroundColor: 0,
     title: {
         text: title,
         textStyle: {
             fontSize: 50,
             fontFamily: 'Microsoft Yahei',
             fontWeight: 'normal',
             color: '#bcb8fb',
             rich: {
                 a: {
                     fontSize: 28,
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
                 fill: '#aab2fa',
                 text: 'QPS值：' + real,
                 font: '20px Microsoft YaHei'
             }
         }]
     }],
     series: [{
         type: 'liquidFill',
         radius: '80%',
         center: ['50%', '50%'],
         data: data,
         backgroundStyle: {
             color: {
                 type: 'linear',
                 x: 1,
                 y: 0,
                 x2: 0.5,
                 y2: 1,
                 colorStops: [{
                     offset: 1,
                     color: 'rgba(68, 145, 253, 0)'
                 }, {
                     offset: 0.5,
                     color: 'rgba(68, 145, 253, .25)'
                 }, {
                     offset: 0,
                     color: 'rgba(68, 145, 253, 1)'
                 }],
                 globalCoord: false
             },
         },
         outline: {
             borderDistance: 0,
             itemStyle: {
                 borderWidth: 10,
                 borderColor: {
                     type: 'linear',
                     x: 0,
                     y: 0,
                     x2: 0,
                     y2: 1,
                     colorStops: [{
                         offset: 0,
                         color: 'rgba(69, 73, 240, 0.2)'
                     }, {
                         offset: 0.5,
                         color: 'rgba(69, 73, 240, .25)'
                     }, {
                         offset: 1,
                         color: 'rgba(69, 73, 240, 0.5)'
                     }],
                     globalCoord: false
                 },
                 shadowBlur: 10,
                 shadowColor: '#000',
             }
         },
         color: {
             type: 'linear',
             x: 0,
             y: 0,
             x2: 0,
             y2: 1,
             colorStops: [{
                 offset: 1,
                 color: 'rgba(58, 71, 212, 0)'
             }, {
                 offset: 0.5,
                 color: 'rgba(31, 222, 225, .2)'
             }, {
                 offset: 0,
                 color: 'rgba(31, 222, 225, 1)'
             }],
             globalCoord: false
         },
         label: {
             normal: {
                 formatter: (value * 100).toFixed(0) + '%',
             }
         }
     }, ]
 };