option = {
    tooltip : {
        show:false,
        formatter: "{b} : {c}"
    },
    
    series: [
        {
            name: '累计CV',
            type: 'gauge',
            min:0,
            max:120,
            radius:'60%',
            startAngle:90,
            endAngle:225,
            clockwise:true,
            
            splitNumber:6,
            title:{
                show:false,
            },
            markLine:{
                show:false ,
                label:{
                    formatter:'{a}{b}{c}{d}'
                }
            },
            detail: {
                show:true,
                offsetCenter:['-20%','-100%']
            },
            data: [{value: 80, name: '累计CV'}],
            axisLine:{
                show:false ,
                lineStyle:{
                    width:12,
                    color:[[1,'#94e0b7']]
                }
            },
            splitLine:{
                show:false,
                lineStyle:{
                    color:'#fff'
                }
            },
            axisTick:{
                show:false ,
                
            },
            axisLabel:{
                show:false
            },
            pointer:{
                show:false
            }
        },
        {
            name: '累计CV',
            type: 'gauge',
            min:0,
            max:120,
            radius:'45%',
            startAngle:90,
            endAngle:225,
            clockwise:true,
            
            splitNumber:6,
            title:{
                show:false
            },
            detail: {
                show:false
            },
            data: [{value: 80, name: '累计CV'}],
            axisLine:{
                show:false ,
                lineStyle:{
                    width:12,
                    color:[[1,'#76bedf']]
                }
            },
            splitLine:{
                show:false,
                lineStyle:{
                    color:'#fff'
                }
            },
            axisTick:{
                show:false,
                
            },
            axisLabel:{
                show:false
            },
            pointer:{
                show:false
            }
        },
        {
            name: '累计CV',
            type: 'gauge',
            min:0,
            max:120,
            radius:'30%',
            startAngle:90,
            endAngle:225,
            clockwise:true,
            
            splitNumber:6,
            title:{
                show:true,
                offsetCenter:[0,'0%'],
                fontSize:18,
            },
            detail: {
                show:false
            },
            data: [{value: 80, name: '均值'}],
            axisLine:{
                show:false ,
                lineStyle:{
                    width:12,
                    color:[[1,'#4b94dc']]
                }
            },
            splitLine:{
                show:false,
                lineStyle:{
                    color:'#fff'
                }
            },
            axisTick:{
                show:false,
                
            },
            axisLabel:{
                show:false
            },
            pointer:{
                show:false
            }
        }
    ]
};


