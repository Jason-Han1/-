 var value = 0.60;
 var data = [value, value, value];
 option = {
     backgroundColor: '#212121',
     title: {
         text: (value * 100).toFixed(0) + '{a|%}',
         textStyle: {
             fontSize: 50,
             fontFamily: 'Microsoft Yahei',
             fontWeight: 'normal',
             color: '#fff',
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
                 fill: '#fff',
                 text: '流量统计',
                 font: '20px Microsoft YaHei'
             }
         }]
     }],
     series: [{
         type: 'liquidFill',
         radius: '80%',
         center: ['50%', '50%'],
         shape: 'roundRect',
         data: data,
         backgroundStyle: {
             color: '#212121',
         },
         outline: {
             borderDistance: 2,
             itemStyle: {
                 borderWidth: 5,
                 borderColor: "#6d300e",
                 shadowBlur:0,
             }
         },
         color: ['#e08b2a', '#f1ad2c', '#6e320e'],
         label: {
             normal: {
                 formatter: '',
             }
         }
     }]
 };