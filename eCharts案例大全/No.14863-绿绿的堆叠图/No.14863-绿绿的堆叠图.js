option = {
    backgroundColor: '#fff',
 
    tooltip: {
        trigger: 'axis',
        backgroundColor:'rgba(255,255,255,0.8)',
        extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
        textStyle:{
            color:'#6a717b',
        },
         
    }, 
    legend: {
        
        x: 'right',
       itemWidth: 10,
        itemHeight: 10,
        align: 'left',
        icon: 'circle',
        data:['访问量','激活量'],
           
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['5-21','5-22','5-23','5-24','5-25','5-26','5-27','5-28','5-29'],
             
            axisLine: {
            lineStyle: {
                color: '#dbe0e6'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 12,
                color:'#94999f'
                }
        },
        splitLine: {
            lineStyle: {
                color: '#fff'
            }
        
        },
        }
    ],
     yAxis: [{
        type: 'value',
        
       
        axisLine: {
            lineStyle: {
                color: '#dbe0e6'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 12,
                color:'#94999f'
                }
        },
        splitLine: {
            lineStyle: {
                color: '#fff'
            }
        }
    }],
    series : [
        
        {
            name:'访问量',
            type:'bar',
            stack:'品牌',
            itemStyle:{  
                normal:{color:'#037d86'}  
            },
            barWidth : 42,//柱图宽度
            data:[120,132, 101, 134, 190, 130, 120,120, 132]
        },
        {
            name:'激活量',
            type:'bar',
            stack:'品牌',
            itemStyle:{
                normal:{color:'#0c6354'}  
             },
            data:[90,60, 40, 84, 60, 50, 60,70, 32]
        }, 
        {
            name:'激活量',
            type:'bar',
            stack:'品牌',
            itemStyle:{
                normal:{color:'#17854b'}  
             },
             data:[90,60, 40, 84, 60, 50, 60,70, 32]
        },
         {
            name:'激活量',
            type:'bar',
            stack:'品牌',
            itemStyle:{
                normal:{color:'#369965'}  
             },
             data:[90,60, 40, 84, 60, 50, 60,70, 32]
        },
         {
            name:'激活量',
            type:'bar',
            stack:'品牌',
            itemStyle:{
                normal:{color:'#79a000'}  
             },
             data:[90,60, 40, 84, 60, 50, 60,70, 32]
        },
         {
            name:'激活量',
            type:'bar',
            stack:'品牌',
            itemStyle:{
                normal:{color:'#97c700'}  
             },
             data:[90,60, 40, 84, 60, 50, 60,70, 32]
        },
         {
            name:'激活量',
            type:'bar',
            stack:'品牌',
            itemStyle:{
                normal:{color:'#b7e721'}  
             },
             data:[90,60, 40, 84, 60, 50, 60,70, 32]
        },
         {
            name:'激活量',
            type:'bar',
            stack:'品牌',
            itemStyle:{
                normal:{color:'#cef64f'}  
             },
             data:[90,60, 40, 84, 60, 50, 60,70, 32]
        }
    
    ]
};
