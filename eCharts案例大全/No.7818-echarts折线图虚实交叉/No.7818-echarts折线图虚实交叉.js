option = {
   title: {
       text: 'echarts折线图虚线实线交叉'
   },
   legend: {
       data:['测试虚实线']
   },
   grid: {
       left: '3%',
       right: '4%',
       bottom: '3%',
       containLabel: true
   },
   toolbox: {
       feature: {
           saveAsImage: {}
       }
   },
   xAxis: {
       type: 'category',
       boundaryGap: false,
       data: ['周一','周二','周三','周四','周五','周六','周日']
   },
   yAxis: {
       type: 'value'
   },
   series: [
       {
           name:'测试虚实线',
           type:'line',        
           data:[10, 32, 19, "180", "190", "180", "-"]
       },
       {
           name:'测试虚实线',
           type:'line',     
           itemStyle:{
               normal:{
                   lineStyle:{
                       width:2,
                       type:'dotted'  //'dotted'虚线 'solid'实线
                   }
               }
           }, 
           
           data:["-", "-", '-', '-', '-', "180", "210"]//注意起点要和实线的终点交接
       }      
 
   ]
};