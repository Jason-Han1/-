 var value = 0.336;
 var data = [value, value - value * 1 / 5, value - value * 1 / 3, value - value * 1 / 2];
 option = {
     backgroundColor: '#efefef',
     title: {
         text: (value * 100).toFixed(1) + '{a|%}',
         textStyle: {
             fontSize: 40,
             fontFamily: 'Microsoft Yahei',
             fontWeight: 'bolder',
             color: '#ff8033',
             rich: {
                 a: {
                     fontSize: 40,
                     fontWeight: 'bolder',
                 }
             }
         },
         x: 'center',
         y: '43%'
     },

     series: [{
         type: 'liquidFill',
         radius: '50%',
         center: ['50%', '50%'],
         data: data,
         backgroundStyle: {
             borderWidth: 10,
             borderColor: '#434343',
             color: '#fff',

         },
         outline: {
             show: false
         },
         color: ['#ffc39f', '#ff843b'],
         label: {
             normal: {
                 formatter: '',
             }
         }
     }, ]
 };