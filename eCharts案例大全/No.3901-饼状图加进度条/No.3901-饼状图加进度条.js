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
         color: '#50fc73' // 100% 处的颜色
     }]
 }
 option = {
     backgroundColor: '#000E1A',
     title: {
         text: datas.value + datas.company,
         subtext: '救助人口',
         x: 'center',
         y: 'center',
         textStyle: {
             fontWeight: 'normal',
             color: '#fdfeff',
             fontSize: '60'
         },
         subtextStyle: {
             fontSize: 30,
             color: '#c9c9c9'
         },
     },
     //  color: ['#282c40'],
     legend: {
         show: false,
         data: []
     },
     color: ['#282c40', '#29aa82', '#f1b144'],
     tooltip: {
         trigger: 'item',
         padding: [10, 10, 10, 10],
         formatter: "{b} :<br/> {d}%",

     },
     series: [{
             name: 'Line 1',
             type: 'pie',
             clockWise: true,
             radius: ['40%', '45%'],
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
         },
         {
             name: '',
             type: 'pie',
             radius: ['50%', '58%'],
             center: ['50%', '50%'],
             label: {
                 show: false,
                 fontSize: 13,
                 color: '#333',

             },
             labelLine: {
                 show: false,
                 // length: 6,
                 // length2: 15
             },
             data: [{
                 name: "张三",
                 value: "300"
             }, {
                 name: "李四",
                 value: "120"
             }]
         },
         // {
         //     type: 'pie',
         //     radius: ['36%', '43%'],
         //     center: ['50%', '50%'],
         //     silent: true,
         //     data: [{
         //         name: '',
         //         value: 1,
         //     }]
         // }
     ]
 }