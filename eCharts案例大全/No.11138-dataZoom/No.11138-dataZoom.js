option={
    title:{text:'aaa'},
    legend:{data:['w','z']},
    xAxis:{
        data:['aaa','bbb','ccc','ddd'],
        axisLabel:{
            intervar:0,
            rotate:30
        },
        //boundaryGap:false
    },
    yAxis:{},
    dataZoom:[{
     orient:'vertical',
      start:20,
      end:80,
      realtime:true
    },{

      start:20,
      end:80,
      realtime:true
    }],
    series:[{
        type:'line',
        name:'w',
        data:[111,222,300,404],
        areaStyle:{opacity:0.1}    
        
    },{
        type:'bar',
        name:'z',
        data:[111,222,300,400],
        
    }]
    
};
  

  