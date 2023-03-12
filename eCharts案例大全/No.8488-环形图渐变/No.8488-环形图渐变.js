 var fontColor = "#fff";
 let noramlSize = 16;
 var datas = {
     value: 78,
     company: "%",
     ringColor: [{
         offset: 0,
         color: '#02d6fc' // 0% 处的颜色
     }, {
         offset: 1,
         color: '#367bec' // 100% 处的颜色
     }]
 }
 var option = {
     backgroundColor:"#000",
     title: {
         text: datas.value + datas.company,
         x: 'center',
         y: 'center',
         textStyle: {
             fontWeight: 'normal',
             color: '#fff',
             fontSize: '90'
         }
     },
     color: ['#282c40'],
     legend: {
         show: false,
         data: []
     },

     series: [{
         name: 'Line 1',
         type: 'pie',
         clockWise: true,
         radius: ['50%', '60%'],
         itemStyle: {
             normal: {
                 label: {
                     show: false
                 },
                 labelLine: {
                     show: false
                 }
             }
         },
         hoverAnimation: false,
         data: [{
             value: datas.value,
             name: '',
             itemStyle: {
                 normal: {
                     color: { // 完成的圆环的颜色
                         colorStops: datas.ringColor
                     },
                     label: {
                         show: false
                     },
                     labelLine: {
                         show: false
                     }
                 }
             }
         }, {
             name: '',
             value: 100 - datas.value
         }]
     }]
 };