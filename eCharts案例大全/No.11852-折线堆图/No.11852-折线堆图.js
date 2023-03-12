option = {
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['今日','历史平均值'],
        right:20,
        top:0
    },

    calculable : true,
    color:["#5EF9AB","#00C5FF"],
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
             axisLabel:{
                color:'#8895A2'
            },
            data : ['01:00','02:00','03:00','04:00','05:00','06:00','07:00']
        }
    ],
    grid: {
        show: false,
      
    
       // y: 30,
        
    },

    yAxis : {
        type: 'value',
         axisTick:{//去掉刻度显示
            show: false
        },
        axisLine: {//去掉y轴显示
            show : false
        },  //
        // splitLine:{//虚线配置
        //     lineStyle: {
        //         color: '#4E545A',
        //         type: 'solid' //dashed,dotted
        //     }
        // }
    },
    series : [
        {
            name:'历史平均值',
            type:'line',
            stack: '总量',
            smooth:true,
            itemStyle: {
                normal: {
                    areaStyle: {
                        color:'rgb(33,53,51,0.5)'
                       
                        
                    }
                    
                }
                
            },
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'今日',
            type:'line',
            stack: '总量',
            smooth:true,
            itemStyle: {
                normal: {
                    areaStyle: {
                        color:'rgb(33,72,76,0.5)'
                       
                        
                    }
                    
                }
                
            },
            data:[220, 182, 191, 234, 290, 330, 310]
        }
    ]
};
                    