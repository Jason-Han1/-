 option = {
     backgroundColor: '#FFF',
     title: [{
         text: 'PM25均值',
         x: 'center',
         bottom: '20%',
         textStyle: {
             color: '#A5C8DA',
             fontWeight: 'bolder',
             fontSize: 16
         }
     },{
         text:'饼图中间的存在一大堆东东',
         subtext:'萌新木可'
         
     }],
     color: ['#7CD257', '#E4DEDC'],
     series: [{
             name: 'PM25均值',
             type: 'pie',
             radius: ['0', '40%'],
             hoverAnimation: false,
             label: {
                 normal: {
                     show: true,
                     position: 'center',
                     padding: [0, 200, 0, 0],
                     formatter: function(val) { //让series 中的文字进行换行
                         return '{color1|26}\r\n\r\n\r\n\r\n{color5|ug/m3}';
                     },
                     rich: {
                         color1: {
                             color: '#FFF',
                             fontSize: 44,
                             left: 40,
                             fontWeight: 'bolder'
                         },
                         color2: {
                             color: '#F72009',
                             fontSize: 16
                         },
                         color3: {
                             color: '#FFF',
                             fontSize: 16,
                             fontWeight: 'bolder'
                         },
                         color4: {
                             color: '#0D0DF2',
                             fontSize: 16
                         },
                         color5: {
                             color: '#FFF',
                             fontSize: 16
                         }
                     }
                 }
             },
             labelLine: {
                 normal: {
                     show: false
                 }
             },
             data: [{
                 value: 23.3,
                 name: ''
             }],
               markPoint: {
                 symbol: 'path://M23 32l-8-8 17-17-7-7-17 17-8-8v23h23z',
                 itemStyle:{
                     color:'red'
                 },
                 label:{
                     formatter:'\r\n\r\n{color2|同比下降}\r\n\r\n\r\n{color3|3.7%}',
                     color:"#ffffff",
                     position:'bottom',
                      rich: {
                         color1: {
                             color: '#FFF',
                             fontSize: 44,
                             left: 40,
                             fontWeight: 'bolder'
                         },
                         color2: {
                             color: '#F72009',
                             fontSize: 16
                         },
                         color3: {
                             color: '#FFF',
                             fontSize: 44,
                             fontWeight: 'bolder'
                         },
                         color4: {
                             color: '#0D0DF2',
                             fontSize: 16
                         },
                         color5: {
                             color: '#FFF',
                             fontSize: 16
                         }
                     }
                 },
                 data: [{
                     name: '某个屏幕坐标',
                     x: '54%',
                     y: '43%'
                 }]
             },
             markLine: {
                 symbol: 'none',
                 label: {
                     show: false
                 },
                 lineStyle: {
                     color: '#ffffff',
                     width: 3
                 },
                 data: [
                     [{
                             name: '两个屏幕坐标之间的标线',
                             x: '47%',
                             y: '35%'
                         },
                         {
                             x: '47%',
                             y: '65%'
                         }
                     ]
                 ]
             },
         },
         {
             name: 'PM25均值',
             type: 'pie',
             radius: ['40%', '44%'],
             label: {
                 show: true,
                 position: 'center',
                 padding: [0, 0, 0, 200],
                 formatter: function(val) { //让series 中的文字进行换行
                     //  return '{color1|26}\r\n\r\n\r\n\r\n{color5|ug/m3}';
                 },
                 rich: {
                     color1: {
                         color: '#FFF',
                         fontSize: 44,
                         left: 40,
                         fontWeight: 'bolder'
                     },
                     color2: {
                         color: '#F72009',
                         fontSize: 16
                     },
                     color3: {
                         color: '#FFF',
                         fontSize: 16,
                         fontWeight: 'bolder'
                     },
                     color4: {
                         color: '#0D0DF2',
                         fontSize: 16
                     },
                     color5: {
                         color: '#FFF',
                         fontSize: 16
                     }
                 }
             },
             itemStyle: {
                 color: '#E4DEDC'
             },
             silent: true,
             data: [{
                     value: 335,
                     name: ''
                 },

             ],
           
         }

     ],
     
 };