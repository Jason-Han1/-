
option = {
   title: {
       text: 'echarts折线图实线加虚线'
   },
   //用formatter回调函数显示多项数据内容  
   tooltip: {  
        trigger: 'axis',  
      
    },
   legend: {
       data:['测试']
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
           name:'测试',
           type:'line',  
           color:'gray',
           data:[120, 132, 191, "-", "-", "-", "-"]
       },
       {
           name:'测试',
           type:'line',     
           smooth:false,   //关键点，为true是不支持虚线，实线就用true
           itemStyle:{
               normal:{
                   lineStyle:{
                       width:2,
                       type:'dotted',  //'dotted'虚线 'solid'实线
                       color:'blue'
                   }
               }
           }, 
           
           data:["-", "-", 191, 234, 190, "-", "-"]
       },
       {
           name:'测试',
           type:'line',
           color:'gray',
           data:["-", "-", "-", "-", 190, 330, "-"]
       },
       {
           name:'测试',
           type:'line',
           smooth:false,   //关键点，为true是不支持虚线，实线就用true
           itemStyle:{
               normal:{
                   lineStyle:{
                       width:2,
                       color:'green',
                       type:'dotted'  //'dotted'虚线 'solid'实线
                   }
               }
           }, 
           
           data:["-", "-", "-", "-", "-", 330, 410]
       },         
 
   ]
}