 const base = 1000; //基数
 let blue = 50; //蓝色  值为天数

 option = {
     backgroundColor: "#F6F6F6",
     title: {
         show: true,
         text: [`{a|${blue}} `, `{b|天}`].join(""),
         padding: 20,
         backgroundColor: "#f00",
         borderRadius: 10,
         textStyle: {
             rich: {
                 a: {
                     color: "#fff",
                     fontSize: 52
                 },
                 b: {
                     color: "#fff",
                     fontSize: 26
                 }
             }
         },
         left: "center",
         top: 'center'
     },
     tooltip: {
         show: false
     },
     series: [{
             type: "pie",
             startAngle: 225,
             radius: ["92%", "100%"],
             center: ["50%", "50%"],
             legendHoverLink: false,
             hoverAnimation: false,
             avoidLabelOverlap: false,
             label: {
                 normal: {
                     show: false,
                     position: "center"
                 },
                 emphasis: {
                     show: true,
                     textStyle: {
                         fontSize: "30",
                         fontWeight: "bold"
                     }
                 }
             },
             labelLine: {
                 normal: {
                     show: false
                 }
             },
             data: [{
                     value: blue,
                     itemStyle: {
                         normal: {
                             color: "#36A5F4   "
                         },
                         emphasis: {
                             color: "#36A5F4"
                         }
                     }
                 },
                 {
                     value: base*0.75 - blue,
                     itemStyle: {
                         normal: {
                             color: "#EBF3F4   "
                         },
                         emphasis: {
                             color: "#EBF3F4"
                         }
                     }
                 },
                 {
                     value: base*0.25,
                     itemStyle: {
                         normal: {
                             color: "#F6F6F6"
                         },
                         emphasis: {
                             color: "#F6F6F6"
                         }
                     }
                 }
             ]
         },
         {
             name: "",
             type: "pie",
             radius: ["0%", "50%"],
             center: ["50%", "50%"],

             silent: true,
             labelLine: {
                 normal: {
                     show: false
                 }
             },
             data: [{
                 value: 100,
                 itemStyle: {
                     color: "#12AEC3"
                 }
             }]
         }
     ]
 };