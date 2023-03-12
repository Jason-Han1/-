 let angle = 270; //白线位置 角度
 let value = 30;
 var timerId;
 option = {
     backgroundColor: '#000E1A',
     title: {
         text: '{a|' + value + '}{c|%}',
         x: 'center',
         y: 'center',
         textStyle: {
             rich: {
                 a: {
                     fontSize: 48,
                     color: '#29EEF3'
                 },

                 c: {
                     fontSize: 20,
                     color: '#ffffff',
                 }
             }
         }
     },

     series: [{
             name: '我是外面的圈',
             type: 'pie',
             radius: ['52%', '40%'],
             silent: true,
             clockwise: true,
             startAngle: 90,
             z: 0,
             zlevel: 0,
             label: {
                 normal: {
                     position: "center",

                 }
             },
             data: [{
                     value: value,
                     name: "",
                     itemStyle: {
                         normal: {
                             color: '#A098FC'
                         }
                     }
                 },
                 {
                     value: 100 - value,
                     name: "",
                     label: {
                         normal: {
                             show: false
                         }
                     },
                     itemStyle: {
                         normal: {
                             color: "#173164"
                         }
                     }
                 }
             ]
         },
         {
             name: '我是白线',
             type: 'pie',
             radius: ['52%', '40%'],
             silent: true,
             clockwise: true,
             startAngle: angle, // 白线位置
             z: 0,
             zlevel: 0,
             label: {
                 normal: {
                     position: "center",

                 }
             },
             data: [{
                     value: 0.2,
                     name: "",
                     itemStyle: {
                         normal: {

                             color: '#fff'
                         }
                     }
                 },
                 {
                     value: 100 -  0.2,
                     name: "",
                     label: {
                         normal: {
                             show: false
                         }
                     },
                     itemStyle: {
                         normal: {
                             color: "transparent"
                         }
                     }
                 }
             ]
         },

     ]
 };