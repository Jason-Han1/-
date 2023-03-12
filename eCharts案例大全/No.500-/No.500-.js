 let color = "rgb(121, 238, 255)";
 var option = {
     backgroundColor: '#0e2147',
     grid: {
         left: '2.5%',
         top: '19.5%',
         right: '2.8%',
         bottom: '22%',
         containLabel: true
     },
     tooltip: {
         trigger: 'axis',
         borderColor: '#43845D',
         borderWidth: 1,
         backgroundColor: 'rgba(11,42,89,0.3)',
         borderRadius: 20,
         padding: 10,
         textStyle: {
             color: '#fff',
             fontSize: 30
         },
         axisPointer: {
             type:"shadow",
             lineStyle: {
                 color: '#fef018',
                 width: '3'
             }
         }
     },
     xAxis: [{
         type: 'category',
         name: '个数',
         nameLocation: 'center',
         nameGap: 35,
         nameTextStyle: {
             color: '#8796AD',
             fontSize: '16',
         },
         axisLabel: {
             interval: 10,
             textStyle: {
                 color: '#8796AD',
                 fontSize: '14',
             }
         },
         data: [1,
             2,
             3,
             4,
             5,
           
            
         ],
         axisLine: {
             lineStyle: {
                 width: 2,
                 color: 'rgba(63,92,122,1)'
             }
         },
         axisTick: {
             show: false
         },
     }],
     yAxis: [{
         type: 'value',
         name: '变化率/A',
         nameLocation: 'middle',
         nameGap: 45,
         nameTextStyle: {
             color: '#8796AD',
             fontSize: '16',
         },
         axisLabel: {
             textStyle: {
                 color: '#8796AD',
                 fontSize: '14',
             }
         },
         axisTick: {
             show: false
         },
         axisLine: {
             lineStyle: {
                 width: 2,
                 color: 'rgba(160,160,160,0.3)',
             }
         },
         splitLine: {
             lineStyle: {
                 color: 'rgba(160,160,160,0.3)',
             }
         },
     }, ],
     series: [{
         type: 'bar',
         name: '变化率',
           stack:1,
         barWidth:  '100.01%',
        barGap:'0',
        borderWidth:0,
         itemStyle: {
             normal: {
                 color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: "rgb(81, 203, 216,.5)"
                },
                {
                    offset: 1,
                    color: "rgb(81, 203, 216,.1)"
                }
            ], false),

             }
         },
         label: {
             normal: {
                 show: false
             }
         },
         data: [10,10,20,-10,-8
         ]

     },
     {
         type: 'bar',
         name: '变化率',
         stack:1,
         barWidth: '100.01%',
        barGap:'0',
         itemStyle: {
             normal: {
                 color
             }
         },
         label: {
             normal: {
                 show: false
             }
         },
         data: [1,1,1,-1,-1
         ]

     }]
 };