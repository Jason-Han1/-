 var option = {
     backgroundColor: '#fff',
     tooltip: {
         axisPointer: { // 坐标轴指示器，坐标轴触发有效
             type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
         }
     },
     grid: {
         top: '30px',
         bottom: '30px',
     },
     legend: {
         data: ['兑换POR', '兑换金额'],
         textStyle: {
             color: "#3F3F3F"
         },

         // itemGap: 35
     },
     xAxis: {
         type: 'category',
         data: ['贵宾楼', '诺金酒店', '东方广场', '君悦酒店', '新天地'],
         axisPointer: {
             type: "shadow"
         },
         axisTick: {
             show: false //X轴上面的刻度线
         },
         axisLine: {
             show: true,
             lineStyle: {
                 color: "#BCC2CA"
             }
         },
         axisLabel: {
             show: true,
             interval: 0,
             textStyle: {
                 color: "#7d838b"
             }
         }
     },

     yAxis: {
         type: 'value',

         axisLabel: {
             show: true,
             textStyle: {
                 color: "#7d838b"
             }
         },
         splitLine: {
             show: false //y轴的网格线
         },
         axisLine: {
             show: true,
             lineStyle: {
                 color: "#BCC2CA"
             }
         },
         axisTick: { //y轴刻度线
             show: false
         },
     },
     series: [{
             name: '兑换POR',
             type: 'bar',
             barWidth: '15',
             itemStyle: {
                 normal: {
                     color:" #F05B4E",
                 },
             },
             data: [400, 400, 300, 300, 300]
         },
         {
             name: '兑换金额',
             type: 'bar',
             barWidth: '15',
             itemStyle: {
                 normal: {
                     color:"#FDA028",
                 }

             },
             data: [400, 500, 500, 500, 500]
         }
     ]
 };