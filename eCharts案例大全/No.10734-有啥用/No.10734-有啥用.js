 var data = [];
 var labelData = [];
 for (var i = 0; i < 30; ++i) {
     labelData.push({
         value: 1,
         name: i,
         itemStyle: {
             normal: {
                 color: "#ffffff1a"
             }
         }
     });
 }
 for (var i = 0; i < labelData.length; ++i) {
     if (labelData[i].name < 25) {
         labelData[i].itemStyle = {
             normal: {
                 color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#7FFF00'},
                        {offset: 1, color: 'yellow'}
                    ]
                )
             },
             
         }
     }
 }

 option = {
     backgroundColor: '#000',
     title: {
         text: '有啥用',
         left: '49%',
         textAlign: 'center',
         top: '40%',
         textStyle: {
             fontSize: 18,
             color: '#98a0c4',
             fontWeight: 100,
         }
     },
     color: ['#22C3AA'],
     series: [{
         hoverAnimation: false,
         type: 'pie',
         data: labelData,
         radius: ['50%', '90%'],
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
         }
     }]
 };