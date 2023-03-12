 option = {
     backgroundColor: '#112232',
     title: {
         text: '柱状图的平均值',
         textStyle: {
             color: "#fff"
         }
     },
     tooltip: {
         trigger: 'axis'
     },
     grid: {
         left: '2%',
         right: '2%',
         bottom: '3%',
         top: "10%",
         containLabel: true
     },
     toolbox: {
         show: true,
         feature: {
             saveAsImage: {
                 show: true
             }
         }
     },
     xAxis: [{
         type: 'value',
         boundaryGap: [0, 0.01],
         axisLabel: {
             textStyle: {
                 fontSize: 18,
                 color: '#D5CBE8'
             }
         },
         axisLine: {
             lineStyle: {
                 color: '#DDD'
             }
         },
         splitLine: {
             show: false,
             lineStyle: {
                 type: 'dashed',
                 color: '#DDD'
             }
         }
     }],
     yAxis: [{
         type: 'category',
         name: "",
         data: ['欠费停水', '改三供一业', '撤表', '周期', '故障', '新装'],
         axisLabel: {
             textStyle: {
                 fontSize: 16,
                 color: '#D5CBE8'
             }
         },
         axisLine: {
             lineStyle: {
                 color: '#DDD'
             }
         },
     }],
     series: [{
             type: 'bar',
             itemStyle: {
                 normal: {
                     color: '#8bd46e',
                     barBorderRadius: 10,
                     label: {
                         textStyle: {
                             fontSize: 16,
                             color: '#D5CBE8'
                         },
                         show: true,
                         position: 'right',
                         formatter: '{b} : {c}'
                     },
                 },

             },

             data: [100, 150, 580, 850, 500, 3000],
         },
         {
             name: '平均值',
             type: 'line',
             //  data: [100, 150, 580, 850, 500, 3000],
             data: [800],
             markLine: {
                 data: [{
                     type: 'average',
                     name: '水平值'
                 }]
             }
         }
     ]
 };