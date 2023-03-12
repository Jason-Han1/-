

option = {
    backgroundColor:'#fff',
     title: {
        text: '示范楼宇Markline',
         subtext:'@author亮'
    },
    tooltip : {
        trigger: 'item',
    },
    xAxis: {
        data: ['','','','','','','','示范楼宇','','','','',''],
        axisLabel: {
            textStyle: {
                color: '#000'
            }
        },
         splitLine:{
        		 lineStyle: {        		        	      
        		  	color: '#ddd',
        		 },
        		 show:true
        },  
        axisTick: {
              interval:2,
        },
        z: 13
    },
    yAxis: {
       type : 'value',
       boundaryGap: ['0%', '55%'],
       axisLine:{
           lineStyle:{
               color:'#000',
               width:1,
           }
       }
    },
    
    series: [
        { 
            type: 'bar',
             stack: 'aa',
             itemStyle: {
                normal: {
                    color:'#191970',
                     label:{
                        position:'top',
                        fontWeight:'bolder',
                        fontSize:18,
                        show:true,
                }
                },
               
           },
           
            barGap:'-100%',
            barCategoryGap:'0%',
            data:['','','','','','','',13,'','','','',''],
        },
        { 
            type: 'bar',
             stack: 'aa',
             itemStyle: {
                normal: {
                    color:'#eee',
                }
           },
            
            barGap:'-100%',
            barCategoryGap:'0%',
            data:[3,5,6,8,9,10,12,0,13,15,16,21,23],
            markLine : {
                data : [
                   {type : 'average', name : '平均值', itemStyle:{normal:{color:'#FFC125'}}},
                ]
            },
        },
         
       
    ]
};