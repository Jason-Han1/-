 let dataPie = [
     {
         value: 38,
         name: '已占用'
     },
     {
         value: 62,
         name: '剩余'
     }
 ];
 let fontColor = "#ffffff";

 let colorWrap = ['#01ccff', "#083253"];
 let baseDataWrap = [];
 let total = 0;
 dataPie.forEach(function(val, idx, arr) {
     total += val.value;
 })
 for (let i = 0; i < dataPie.length; i++) {
     baseDataWrap.push({
         value: dataPie[i].value,
         name: dataPie[i].name,
         itemStyle: {
             normal: {
                 color: colorWrap[i],
               
                 shadowBlur: 50,
                 shadowColor: 'rgba(7, 132, 250, 0.8)',
             }
         }      
     }, {
         value: 3,
         name: '',
         itemStyle: {
             normal: {
                 color: 'transparent',
                 borderWidth: 5,
                 borderColor: 'transparent',

             }
         },
         tooltip: {
             show: false
         },
     });

    
 }


 option = {
     backgroundColor: "#151515",
     title: [
         {
         text: '·',
         textAlign: 'center',
         textStyle: {
             color: '#b3b3b3',
             fontSize: 14,
             fontFamily:"NexaBold"
         },
         x: '30px',
         y: '10px',
     },
         {
         text: '空间容量',
         textAlign: 'center',
         textStyle: {
             color: '#b3b3b3',
             fontSize: 14,
         },
         x: '80px',
         y: '10px',
     },
     {
         text: ' {yellow|'+total+'}'+' {blue|U}',
         textAlign: 'center',
         textStyle: {
             color: '#b3b3b3',
             rich: {
                     yellow: {
                         color: fontColor,
                         fontWeight: "bold",
                         fontSize:18,
                         fontFamily:"NexaBold",
                         padding:[0,0,0,15],
                        

                     },
                     blue: {
                         fontSize:14,
                         color: '#b3b3b3',

                     },
                 }
         },
         x: '140px',
         y: '10px',
     },
     {
         text: '38%',
         textAlign: 'center',
         textStyle: {
             color: fontColor,
             fontSize: 14,
             fontFamily:"NexaBold",
             textShadowBlur: 50,
             textShadowColor:'rgba(7, 132, 250, 0.8)'
        
         },
         
         x: '76%',
         y: 'center',
     }],
     grid: {
         left: '10px', // 与容器左侧的距离
         right: '10px', // 与容器右侧的距离
         top: '10px', // 与容器顶部的距离
         bottom: '10px', // 与容器底部的距离

     },
     tooltip: {
         show: true,
         trigger: 'item',
         formatter: "{a}：{b} <br/>数量：{c}"
     },
     legend: [{
             data: ['已占用', '剩余'],
             icon: 'vertical',
             left: '5px',
             bottom: '10px',
             orient: 'vertical',
             itemGap: 20,
             itemWidth: 15,
             itemHeight: 8,
             formatter: function(name) {

                 let target, percent;
                 for (let i = 0; i < dataPie.length; i++) {
                     if (dataPie[i].name === name) {
                         target = dataPie[i].value;
                         percent = ((target / total) * 100).toFixed(1);
                     }
                 }
                 let arr = [' {blue|' + name + '}' + ' {yellow|' + target + '}'+' {blue|U}' ];
                 return arr.join("\n")

             },
             textStyle: {
                 lineHeight: 20,
                 color: '#f0f4f6',
                 align: 'right',
                 rich: {
                     yellow: {
                         color: fontColor,
                         fontWeight: "bold",
                         fontSize:18,
                         fontFamily:"NexaBold",
                         padding:[0,0,0,15],
                        

                     },
                     blue: {
                         fontSize:14,
                         color: '#b3b3b3',

                     },
                 }

             },
         },
        
     ],

     series: [{
             name: '总数',
             type: 'pie',
             clockWise: true, //顺时加载
             hoverAnimation: false, //鼠标移入变大
             startAngle:90,
             center: ['70%', '50%'],
             radius: ['80%', '83%'],
             label: {
                 normal: {
                     show: false
                 }
             },
             data: baseDataWrap
         },
         {
             name: '',
             type: 'pie',
             selectedMode: 'single',
             radius: ['55%', '55%'],
             center: ['70%', '50%'],
             hoverAnimation: false,
             label: {
                 normal: {
                     show: false,
                 }
             },
             tooltip: {
                 show: false
             },
             data: [
                 {
             value: 100,
             name: '内圆',
             itemStyle: {
                 normal: {
                     borderWidth: 5,
                     borderColor: '#4697d6',
                 }
             }
         }]
         },

     ]
 };