 option = {
     color: ['#208C81', '#1D52AA'],
     backgroundColor: "#fff",
     legend: {
         orient: 'vertical',
         right: '10%',
      
         top: 'center',
         icon: 'roundRect',
         itemWidth: 14,
         textStyle: {
             padding: [0, 10]
         }

     },
     series: [{
         name: '隐患数量分析',
         type: 'pie',
         radius: '55%',
         center: ['50%', '60%'],
         data: [{
                 value: 335,
                 name: '一般'
             },
             {
                 value: 310,
                 name: '重大'
             }

         ],
         label: {
             position: 'inside',
             formatter: '{per|{d}} %',
             rich: {
                 per: {
                     color: "#fff",
                     fontSize: 18,
                     fontWeight: 'bold'
                 }
             }
         },
         itemStyle: {
             borderWidth: 4,
             borderType: "solid",
             borderColor: '#ffffff',
             emphasis: {
                 shadowBlur: 10,
                 shadowOffsetX: 0,
                 shadowColor: 'rgba(0, 0, 0, 0.5)'
             }

         }
     }]
 };