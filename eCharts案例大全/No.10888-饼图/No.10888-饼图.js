 /*指标*/
 var data = [{
     "name": "飞机",
     "value": 54,
     itemStyle:{
         color:new echarts.graphic.LinearGradient(0,1,1,0,[{
             offset:0,
             color:'#ff4574'
         },{
             offset:1,
             color:'#ff5d80'
         }
         ])
     }
 }, {
     "name": "汽车站",
     "value": 54,
     itemStyle:{
         color:new echarts.graphic.LinearGradient(0,1,1,0,[{
             offset:0,
             color:'#b281eb'
         },{
             offset:1,
             color:'#6929df'
         }
         ])
     }
 }, {
     "name": "火车站",
     "value": 46,
     itemStyle:{
         color:new echarts.graphic.LinearGradient(0,1,1,0,[{
             offset:0,
             color:'#34feb5'
         },{
             offset:1,
             color:'#32fdbb'
         }
         ])
     }
 }, {
     "name": "自驾",
     "value": 58,
     itemStyle:{
         color:new echarts.graphic.LinearGradient(0,1,1,0,[{
             offset:0,
             color:'#2698f1'
         },{
             offset:1,
             color:'#0dfdfe'
         }
         ])
     }
 }, {
     "name": "高铁站",
     "value": 58,
     itemStyle:{
         color:new echarts.graphic.LinearGradient(0,1,1,0,[{
             offset:0,
             color:'#fdf958'
         },{
             offset:1,
             color:'#f6e3a1'
         }
         ])
     }
 } ]


 option = {
     grid: {
         bottom: 150,
         left: 100,
         right: '10%'
     },
     /*右侧指标*/
     legend: {
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
             radius: ['30%', '61%'],
             center: ['50%', '50%'],
             type: 'pie',
             label: {
                 /*数值*/
                 normal: {
                     show: true,
                     formatter: "{c}%",
                     textStyle: {
                         fontSize: 30,

                     },
                     position: 'outside'
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