 var option = {
     backgroundColor: '#fff',
     tooltip: {
         trigger: 'axis',
         axisPointer: { // 坐标轴指示器，坐标轴触发有效
             type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
         }
     },
     grid: {
         left: '2%',
         right: '4%',
         bottom: '5%',
         top: '16%',
         containLabel: true
     },
     legend: {
         data: ['用户总数', '新增会员', '泛亚号用户'],
         right: '45%',
         top:60,
         textStyle: {
             color: "#ddd"
         },
         itemWidth: 10,
         itemHeight: 10,
     },
     xAxis: {
         type: 'category',
         data: ['1日', '2日', '3日', '4日', '5日', '6日', '7日'],
         axisLine: {
             show: false,
             lineStyle: {
                 color: '#6f6f6f'
             }
         },

     },
     yAxis: {
         type: 'value',
         max: '1200',
         axisLine: {
             show: false,
             lineStyle: {
                 color: '#fff'
             }
         },
         splitLine: {
             show: true,
             lineStyle: {
                 color: '#f1f1f1'
             }
         },
         axisLabel: {
             show: false
         }
     },
     series: [{
             name: '用户总数',
             
             type: 'bar',
             barWidth: '15%',
             itemStyle: {
                 normal: {
                     color: '#f2f2f2',
                     barBorderRadius: [12, 12, 0, 0],
                 },
             },
             data: [400, 400, 300, 300, 300, 400, 400, 400, 300]
         },
         {
             name: '新增会员',
             type: 'bar',
             barWidth: '15%',
             itemStyle: {
                 normal: {
                     color: '#efc254',
                     barBorderRadius: [12, 12, 0, 0],
                 }

             },
             data: [400, 500, 500, 500, 500, 400, 400, 500, 500]
         },
         {
             name: '泛亚号用户',
             type: 'bar',
             barWidth: '15%',
             itemStyle: {
                 normal: {
                     color: '#835df6',
                     barBorderRadius: [12, 12, 0, 0],
                 }
             },
             data: [400, 600, 700, 700, 1000, 400, 400, 600, 700]
         }
     ]
 };