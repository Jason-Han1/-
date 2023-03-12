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
        name: '总数',
        type: 'line',
        label: {
            normal: {
                show: true,
                position: 'top',
            }
        },
        itemStyle:{
                normal:{color:'#ff9600'}  
             },
     
        lineStyle: {
            normal: {
                width: 3,
                shadowColor: 'rgba(0,0,0,0.4)',
                shadowBlur: 10,
                shadowOffsetY: 10
            }
        },
        data: [320, 332, 301, 334, 390, 330, 320,320, 332]
    },
        {
            name:'访问量',
            type:'bar',
            stack:'品牌',
            itemStyle:{  
                normal:{color:'#4b57a3'}  
            },
            barWidth : 42,//柱图宽度
            data:[320, 332, 301, 334, 390, 330, 320,320, 332]
        },
        {
            name:'激活量',
            type:'bar',
            stack:'品牌',
            itemStyle:{
                normal:{color:'#00c484'}  
             },
            data:[180, 160, 100, 184, 160, 150, 110,120, 132]
        } 
    ]
};
