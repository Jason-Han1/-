 var yAxisData = ['TOP1', 'TOP2', 'TOP3', 'TOP4', 'TOP5'];
 var VALUE= [120, 100, 90, 60, 30]
 option = {
     backgroundColor: '#031038',
     grid: {
         left: 40,
         bottom: -10,
         right: 70,
         top: 30,
     },
     yAxis: [
         {
              type: 'category',
             data: ['服装', '矿产', '服务业', '建筑业', '金融业'],
             axisLabel: {
                 inside: true,
                 textStyle: {
                     color: '#8db0ff',
                     fontSize: 16,
                     
                 },
            formatter: '{value}',
               padding: [0, 0, 40, 0],
                 rich: {
                     a: {
                         color: 'transparent',
                         lineHeight: 24,
                         fontFamily: 'digital'
                     }
                 }
             },
             offset: 0,
             splitLine: {
                 show: false
             },
             axisTick: {
                 show: false
             },
             axisLine: {
                 show: false
             },
         },
     ],
     xAxis: {
         type: 'value',
         max: 120,
         show: false,
     },
     series: [
         {
             // 辅助系列
             type: 'bar',
             barGap: '-100%',
             silent: true,
              label: {
                offset: [0, 30],
               position: 'left',
             show: true,
             formatter: (e) => {
                   return "当月占比：41%"
                },
             textStyle: {
                 color: '#8db0ff',
                 align:"left",
                 fontSize: 14,
                 
             },
              },
             itemStyle: {
                 color: 'rgba(255, 255, 254, 0.2)',
             },
             barWidth: 15,
             data: [120, 120, 120, 120, 120]
         },
          {
             // 辅助系列
             type: 'bar',
             barGap: '-100%',
             silent: true,
              label: {  
                   position: 'right',
                     offset: [-45, 30],
                formatter: (e) => {
                    return "环比:{b|+29%}"
                },
              rich:{
               
             
             b: {
                color: 'red',
                
            
            },
              },
        
          
             show: true,
 textStyle: {
                 color: '#8db0ff',
                 align:"left",
                 fontSize: 14,
                 
             },
            
             },
             itemStyle: {
                 color: 'rgba(255, 255, 254, 0.2)',
             },
             barWidth: 15,
             data: [120, 120, 120, 120, 120]
         },
         {
             type: 'bar',
             data: [120, 100, 90, 60, 30],
             barWidth: 15,
         
             label: {  
                
             position: 'right',
                    
             show: "show",
                textStyle: {
                 color: '#8db0ff',
                 align:"left",
                 fontSize: 14,
                 
             },
            
             },
             itemStyle: {
                 normal: {
                     color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                         '#007AFF', '#00FFFF'
                     ].map((color, offset) => ({
                         color,
                         offset
                     })))
                 }
             }
         }
     ]
 };