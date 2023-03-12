 var value = 0.48;
 var data = [value, value];
 option = {
     backgroundColor:'#060525',
     title: {
         text: (value * 100).toFixed(2) + '{a|%}',
         textStyle: {
             fontSize: 28,
             fontFamily: 'Microsoft Yahei',
             fontWeight: 'normal',
             color: '#f2d818',
             rich: {
                 a: {
                     fontSize: 18,
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
                 text: '重过载',
                 font: '20px Microsoft YaHei'
             }
         }]
     }],
     series: [{
         type: 'liquidFill',
         radius: '50%',
         center: ['50%', '50%'],
         data: data,
         backgroundStyle: {
             borderWidth: 2,
             borderColor: '#D09322',
             color: 'rgba(210,168,8,.2)'
         },
         outline: {
             show: false
         },
         color: ['rgba(210,168,8,1)', 'rgba(210,168,8,.3)'],
         label: {
             normal: {
                 formatter: '',
             }
         }
     }]
 };