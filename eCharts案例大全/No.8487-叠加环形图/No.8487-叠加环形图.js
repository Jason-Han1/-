 var fontColor = "#fff";
 let noramlSize = 16;
 var datas = {
     value: 78,
     company: "%",
     ringColor: "#2fe2f9"
 }
 var option = {
     backgroundColor: "#ccc",
     title: {
         text: '80%',
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
                     color: datas.ringColor,
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
             value: 100 - datas.value,
             itemStyle: {
                 normal: {
                     color: "transparent"
                 }
             }
         }]
     }, {
         name: "",
         type: "pie",
         radius: ["50%", "64%"],
         center: ["50%", "50%"],
         label: {
             show: false
         },
         itemStyle: {
             normal: {
                 color: 'rgba(11, 41, 92,0.1)',
                 labelLine: {
                     show: false
                 }
             },

         },
         hoverAnimation: false,
         data: [100]
     }, ]
 }