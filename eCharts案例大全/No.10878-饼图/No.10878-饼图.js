 /*指标*/
 var data = [{
     "name": "男",
     "value": 45,
     itemStyle:{
         color:new echarts.graphic.LinearGradient(0,1,0,0,[{
             offset:0,
             color:'#2c83ed'
         },{
             offset:1,
             color:'#0dfbfd'
         }
         ])
     }
 }, {
     "name": "女",
     "value": 55,
     itemStyle:{
         color:new echarts.graphic.LinearGradient(0,1,0,0,[{
             offset:0,
             color:'#a944f9'
         },{
             offset:1,
             color:'#ee23c7'
         }
         ])
     }
 }]


 option = {
     grid: {
         bottom: 150,
         left: 100,
         right: '10%'
     },
     legend:{//图例组件颜色名字
         orient: 'vertical',
         top: "middle",
         right: "5%",
         textStyle: {
             color: 'black',
             fontSize: 18,

         },
         icon: 'roundRect',
         data: data,
     },
     series: [
         // 主要展示层的
         {
             radius: ['20%', '50%'],
             center: ['50%', '50%'],
             type: 'pie',
             /*标签*/
             label: {
                 /*数值*/
                 normal: {
                     show: true,
                     formatter: "{c}%",
                     textStyle: {
                         fontSize: 18,
                         color:'#fff',

                     },
                     position: 'inside'
                 },
                 emphasis: {
                     show: true
                 }
             },
             labelLine: {
                 normal: {
                     show: true,
                     length: 30,
                     length2: 55
                 },
                 emphasis: {
                     show: true
                 }
             },
             data: data,
            
         },
     ]
 };