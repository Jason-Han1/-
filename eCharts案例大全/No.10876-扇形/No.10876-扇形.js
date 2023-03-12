 /*指标*/
/* var data = [{
     "name": "男",
     "value": 75,
     
 },
 {//环形不需要部分设置透明，形成扇形
     "name": "",
     "value": 25,
 },
 ]*/

var data = ["75","25"]
 option = {
     grid: {
         bottom: 150,
         left: 100,
         right: '10%'
     },
     series: [
         
         // 主要展示层的
         {
             radius: ['20%', '50%'],
             center: ['50%', '50%'],
             type: 'pie',
             startAngle:100,
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
             data: [{
                 value:data[0],
                 itemStyle:{
                    color:new echarts.graphic.LinearGradient(0,1,0,0,[{
                    offset:0,
                    color:'#2c83ed'
                    },{
                    offset:1,
                    color:'#0dfbfd'
                    }
                ]),}
             },{
                 value:data[1],
                  itemStyle:{
                        color:'rgba(65,105,225,0)',
                    },
                    label: {
                    /*数值*/
                    normal: {
                        show: true,
                        formatter: "{c}%",
                        textStyle: {
                            fontSize: 18,
                            color:'rgba(65,105,225,0)',

                        },
                     position: 'inside'
                 },
                 emphasis: {
                     show: true
                 }
             },
             }],
            
         },
     ]
 };