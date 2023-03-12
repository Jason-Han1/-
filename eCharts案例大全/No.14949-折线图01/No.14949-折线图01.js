
option = {
       backgroundColor:'#05142B',
   
    tooltip: {
        trigger: 'axis',
     
           
       
    },
  legend: {
        data:['5两公','5两母','3两公','3两母']
    },
  
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
   
    xAxis: {
            axisLabel: {
                        textStyle: {
                            color: 'white',
                            fontSize:'16'
                        },
                    },  
                     axisTick: {show: false},
            
            axisLine: {
            show: true
        },
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日','1','2','3','4','5','6','7','8','9','10','11','12','13']
    },
    yAxis: {
         axisLabel: {
                        textStyle: {
                            color: 'white',
                            fontSize:'16'
                        },
                    }, 
                     axisTick: {show: false},
            
       
        
       name:"价格（元）", 
     
    },
    series: [
        {
            name:'5两公',
            type:'line',
           itemStyle:{
               normal:{
                   color:"#495319"
                   
               }
               
           },
            data:[120, 132, 101, 134, 90, 230, 210,122,122,122,122,122,122,122,122,122,122,122,122,122]
        },
        {
            name:'5两母',
            type:'line',
             itemStyle:{
               normal:{
                   color:"#A9490E"
                   
               }
               
           },
            data:[220, 182, 191, 234, 290, 330, 310,122,122,122,122,122,122,122,122,122,122,122,122,122]
        },
        {
            name:'3两公',
            type:'line',
             itemStyle:{
               normal:{
                   color:"#383E61"
                   
               }
               
           },
            data:[150, 232, 201, 154, 190, 330, 410,122,122,122,122,122,122,122,122,122,122,122,122,122]
        },
        {
            name:'3两母',
            type:'line',
             itemStyle:{
               normal:{
                   color:"#D93D3E"
                   
               }
               
           },
            data:[320, 332, 301, 334, 390, 330, 320,122,122,122,122,122,122,122,122,122,122,122,122,122]
        },
      
    ]
};
