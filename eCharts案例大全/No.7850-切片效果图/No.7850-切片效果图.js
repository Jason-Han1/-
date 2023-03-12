   option = {
       backgroundColor: '#091034',
       legend: {
           top:'40%',
           data: ['注意', '警告', '危险'],
           textStyle: {
               color: '#ccc'
           }
       },
       grid: {
           containLabel: true,
           left: 10,
           right: 10,
       },
       tooltip: {},
       xAxis: {
           axisLine: {
               show: false
           },
           axisTick: {
               show: false
           },
           splitLine: {
               show: false
           },
           axisLabel:{
               show:false
           }

       },
       yAxis: {
           data: ['告警等级'],
           axisLabel: {
               fontSize: 16,
               color: '#fff'
           },
           axisLine: {
               show: false
           },
           axisTick: {
               show: false
           },
           splitLine: {
               show: false
           }
       },
       series: [{
           type: 'bar',
           name: '注意',
           stack: '2',
           label: {
               normal: {
                   show:true,
                   position: 'inside',
                   textStyle: {
                       color: '#fff',
                       fontSize: 16
                   }
               }
           },
           barWidth: 40,
           itemStyle: {
               normal: {
                   color: '#3694ff'
               },
           },
           data: [10]
       }, {
           type: 'bar',
           name: '危险',
           stack: '2',
           label: {
               normal: {
                   position: 'inside',
                   textStyle: {
                       color: '#fff',
                       fontSize: 16
                   }
               }
           },
           barWidth: 40,
           itemStyle: {
               normal: {
                   color: '#e02020'
               }
           },
           data: [30]
       }, {
           type: 'bar',
           name: '警告',
           stack: '2',
           label: {
               normal: {
                   position: 'inside',
                   textStyle: {
                       color: '#fff',
                       fontSize: 16
                   }
               }
           },
           barWidth: 40,
           itemStyle: {
               normal: {
                   color: '#f7b500'
               }
           },
           data: [30]
       }]
   };