var sugenergy={
        'max': 30,
        'min': 20
      }
option = {
      grid: {
        left: '12%',
        right: '15%',
        bottom: '30%',
        top: "22%",
        // containLabel: true,
      },
      tooltip: {
        trigger: 'axis',
        show:true,
      },
       dataZoom: [{
         show: true,
         realtime: true,
         start: 40,
         end: 100,
         xAxisIndex: [0, 1]
       }, {
         type: 'inside',
         realtime: true,
         start: 60,
         end: 100,
         xAxisIndex: [0, 1]
       }],
      xAxis: [{
          type: 'category',
          data: ['6:20', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:20', '18:00', '19:00'], 
           axisLine: {
             show: true,
             lineStyle: {
               color: '#fff',
             }
           }, 
        },
        {
          type: 'category',
          data: [' ', '早餐', ' ', '早加餐', ' ', ' ', '午餐', '午加餐','', '晚餐',''],  
           axisLine: {
             show: true,
             lineStyle: {
               color: '#fff',
             }
           }, 
        },

      ],
      yAxis: {
        type: 'value',
        show: true,
        name: '单位：mmol/L ',
        nameGap: 30,
        splitLine: {
          show: false,
        }, 
        axisLine: {
          show: true,
          lineStyle: {
            color: '#ffffff',
          }
        },
      },
      series: [{
          name: '血糖值',
          type: 'line',
          radius: '100%',
           label: {
             normal: {
               show: false, //显示实际值
             }
           },
          symbol: 'circle', //设定为实心点
          symbolSize: 6, //设定实心点的大小 
           itemStyle: {
             borderWidth: 1,
             borderColor: '#fff',
             color: (n) => {
               if (n.value > sugenergy.max) {
                 return '#ff3838'
               } else if (n.value < sugenergy.min) {
                 return '#ffb413'
               } else {
                 return '#49dbff'
               }

             }, //圆点颜色
             lineStyle: {
               color: "#ffffff" //折线颜色
             },
           },
          data:  [42, 0, 20, 0, 27, 8, 0, 0, 15, 0,30],
           markLine: {
             silent: true,
             symbol: 'none',
             label: {
               formatter: '{b}',
               position: 'end'
             },
             data: [{
               yAxis: 20,
               name: "下限值",
               lineStyle: {
                 color: '#fff',
                 type: 'dashed'
               },

             }, {
               yAxis: 30,
               name: "上限值",

               lineStyle: {
                 color: '#fff',
                 type: 'dashed'
               }
             }]
           },
        }
      ]
    };