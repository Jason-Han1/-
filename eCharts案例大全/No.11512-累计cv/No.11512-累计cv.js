option = {
    tooltip : {
        formatter: "{b} : {c}"
    },
    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    series: [
        {
            name: '累计CV',
            type: 'gauge',
            title:{
                color:'#333333',
                fontSize:'12px',
                offsetCenter:[0,'70%']
            },
            detail: {
                formatter:'{value}',
                color:'#049f4b'
                
            },
            data: [{value: 80, name: '累计CV'}],
            axisLine:{
                show:false ,
                lineStyle:{
                    color:[[0.8,'#94e0b7'],[1,'#dbf4e7']]
                }
            },
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#fff'
                }
            },
            axisTick:{
                show:true,
                
            },
            axisLabel:{
                show:true,
                color:'#9dc5af'
            },
            pointer:{
                show:true
            },
            itemStyle:{
                color:'#94e0b7'
            }
        }
    ]
};


