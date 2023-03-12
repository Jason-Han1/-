
 option = {

     title: {
         text: '67',
         textStyle: {
             fontSize: 80,
             fontFamily: 'Microsoft Yahei',
             fontWeight: 'normal',
             color: '#ffffff',
             rich: {
                 a: {
                     fontSize: 28,
                 }
             }
         },
         x: 'center',
         y: '40%'
     },

     series: [{
         type: 'liquidFill',
         radius: '80%',
         center: ['50%', '50%'],
         //  shape: 'roundRect',
         data:  [0.5, 0.5, 0.5],
         backgroundStyle: {
             borderColor: 'rgba(0,150,255,0.4)', //背景内边框
              color:'rgba(0,150,255,0.4)', //背景颜色
         
         },
         outline: {
             borderDistance: 0,
             itemStyle: {
                    borderWidth: 13,
                    borderColor: 'rgba(0,150,255,0.2)',
                    
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
                 color: '#0CB8EA'
             }, {
                 offset: 0.5,
                 color: '#0CB8EA'
             }, {
                 offset: 0,
                 color: '#0CB8EA'
             }],
             globalCoord: false
         },
         label: {
             normal: {
                 formatter: '',
             }
         }
     }, ]
 };