 var data = [];
 var labelData = [];
 for (var i = 0; i < 50; ++i) {
     labelData.push({
         value: 1,
         name: i,
         itemStyle: {
             normal: {
                 color: 'rgba(0,209,228,0)',
             }
         }
     });
 }
 for (var i = 0; i < labelData.length; ++i) {
     if (labelData[i].name < 35) {
         labelData[i].itemStyle = {
             normal: {
                 color: new echarts.graphic.LinearGradient(
                     0, 0, 0, 1,
                     [{
                             offset: 0,
                             color: '#7FFF00'
                         },
                         {
                             offset: 1,
                             color: 'yellow'
                         }
                     ]
                 )
             },

         }
     }
 }

 option = {
     backgroundColor: '#FF005A',
     title: {
        text: "81%",
        x: 'center',
        y: 'center',
        textStyle: {
            color: "#fff",
            fontSize: 20,
            fontWeight: 'normal'
        },
    },
     color: ['#22C3AA'],
     series: [{
             hoverAnimation: false,
             type: 'pie',
             data: labelData,
             radius: ['90%', '70%'],
             zlevel: -2,
             itemStyle: {
                 normal: {
                     shadowBlur: 10,
                     shadowColor: 'rgba(0, 0, 0, 0.7)'
                 }
             },
             label: {
                 normal: {
                     position: 'inside',
                     show: false,
                 }
             },
         },
         {
             type: 'pie',
             name: 'border',
             radius: ['65%', '70%'],
             hoverAnimation: false,
             clockWise: false,
             itemStyle: {
                 normal: {
                     color: 'rgba(0, 255, 125,0.3)',
                 }
             },
             label: {
                 show: false
             },
             labelLine: {
                 show: false
             },
             data: [90]
         }
     ]
 };