 let color = "rgb(121, 238, 255)";
 var option = {
     backgroundColor: '#0e2147',
     grid: {
         left: '2.5%',
         top: '0%',
         right: '2.8%',
         bottom: '2%',
         containLabel: true
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
         name: '',
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
         name: '',
         stack:1,
         barWidth:  '20%',
        borderWidth:0,
         itemStyle: {
             normal: {
                 color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: "rgba(173, 250, 45, 0.5)"
                },
                {
                    offset: 1,
                    color: "rgba(173, 250, 45, 0)"
                }
            ], false),

             }
         },
         label: {
             normal: {
                 show: false
             }
         },
         data: [10,10,20,99,30
         ]

     },
     {
         type: 'bar',
         name: '',
         stack:1,
         barWidth: '20%',
         itemStyle: {
             normal: {
                 color: "rgba(173, 250, 45, 1)"
             }
         },
         label: {
             normal: {
                 show: false
             }
         },
         data: [1,1,1,1,1]

     },
      {
            name:'',
            type:'bar',
            data:[10,15, 30, 45, 55, 60, 62, 80,80,62, 60, 55, 45, 30, 15, 10],
            barWidth: '20%',
            stack:2,
          itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0, 232, 202, 0.5)'
                    }, {
                        offset: 1,
                        color: 'rgba(0, 232, 202, 0)'
                    }]),
                    borderWidth: 0,
                }
            },
        },
         {
         type: 'bar',
         name: '',
         stack:2,
         barWidth: '20%',
         itemStyle: {
             normal: {
                 color: 'rgba(0, 232, 202, 1)'
             }
         },
         label: {
             normal: {
                 show: false
             }
         },
         data: [1,1,1,1,1
         ]

     },
        {
            name:'',
            type:'bar',
            data:[8,5, 25, 30, 35, 55, 62, 78,65,55, 60, 45, 42, 15, 12, 5],
            barWidth: '20%',
            stack:3,
             itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(255, 225, 0, 0.5)'
                    }, {
                        offset: 1,
                        color: 'rgba(255, 175, 1, 0)'
                    }]),
                    borderWidth: 0,
                }
            },
        },
        {
         type: 'bar',
         name: '',
         stack:3,
         barWidth: '20%',
         itemStyle: {
             normal: {
                 color: 'rgba(255, 225, 0, 1)'
             }
         },
         label: {
             normal: {
                 show: false
             }
         },
         data: [1,1,1,1,1
         ]

     },]
 };