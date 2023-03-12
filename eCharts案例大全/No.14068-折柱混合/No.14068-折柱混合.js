option = {
                 backgroundColor: '#1c2e40',
                 color:'#384757',
                 tooltip: {
                     trigger: 'axis',
                     axisPointer: {
                         type: 'none',
                         crossStyle: {
                             color: '#384757'
                         }
                     }
                 },

                 legend: {
                     data:['数量','占比']
                 },
                 xAxis: [
                     {
                         type: 'category',
                         data: ['1023','1023','1023','1023','1023','1023','1023','1023','1023','1023','1023'],
                         axisPointer: {
                             type: 'shadow',
                         },
                         axisLabel: {
                             show: true,
                             textStyle: {
                                 color: '#7d838b'
                             }
                         },
                         splitLine : {

                             show:false

                         }
                     }
                 ],
                 yAxis: [
                     {
                         type: 'value',
                         name: '公斤',
     //				max:values,
                         axisLabel: {
                             formatter: '{value} 公斤'
                         },
                         axisLabel: {
                             show: true,
                             textStyle: {
                                 color: '#7d838b'
                             }
                         }

                     }
                 ],
                 series: [
                     {
                         name:'数量',
                         type:'bar',
                         data:[100,300,400,102,500,200,600,300,167,124],
                         barWidth:26,
                         itemStyle: {
                             normal: {
                                 color:'rgba(0,133,245,0.3)'
                             }
                         }
                     },
                     {
                         name:'占比',
                         type:'line',
                         data:[21,23,65,67,98,23,15,33,45,67],
                         itemStyle : {
                             normal : {
                                 color:'#ffaa00'
                             }
                         },
                         smooth:true
                     }
                 ]
             }