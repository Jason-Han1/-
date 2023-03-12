option = {
    title: {
       text: 'echarts折线图实线加虚线'
   },
   //用formatter回调函数显示多项数据内容  
   tooltip: {  
        trigger: 'axis',  
        formatter: function (params, ticket, callback) {  
          var htmlStr = ''; 
          var valMap = {};
          for(var i=0;i<params.length;i++){  
            var param = params[i];  
            var xName = param.name;//x轴的名称  
            var seriesName = param.seriesName;//图例名称  
            var value = param.value;//y轴值  
            var color = param.color;//图例颜色  
            
            //过滤无效值
            if(value == '-'){
                continue;
            }
            
            //过滤重叠值
            if(valMap[seriesName] == value){
                continue;
            }
              
            if(i===0){  
              htmlStr += xName + '<br/>';//x轴的名称  
            }  
            htmlStr +='<div>';  
            //为了保证和原来的效果一样，这里自己实现了一个点的效果  
            htmlStr += '<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:'+color+';"></span>';  
              
            //圆点后面显示的文本  
            htmlStr += seriesName + '：' + value;  
              
            htmlStr += '</div>';  
            valMap[seriesName] = value;
          }  
          return htmlStr;  
         }  
    },
   legend: {
       data:['在线数']
   },
   grid: {
       left: '3%',
       right: '4%',
       bottom: '3%',
       containLabel: true
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
           name:'在线数',
           type:'line', 
            smooth:true,
           data:[120, 132, 191]
       },
       {
           name:'在线数',
           type:'line',     
           smooth:true,   //关键点，为true是不支持虚线，实线就用true
           itemStyle:{
               normal:{
                   lineStyle:{
                       width:2,
                       type:'dotted'  //'dotted'虚线 'solid'实线
                   }
               }
           }, 
           
           data:["-", "-", 191, 234, 180]
       },
        {
           name:'在线数',
           type:'line', 
            smooth:true,
           data:["-", "-", "-", "-", 180, 132, 191]
       },
 
   ]
};