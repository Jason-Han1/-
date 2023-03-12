let color = ['#74F391', '#2B55FA']

option = {
    color,
    series: [
        {
            type: 'pie',
            radius: ['68%','68.5%'],
            center: ['50%', '50%'],
            data:[1],
            labelLine:{
                show:false
            },
            label:{
                show:true,
                position:'center',
                formatter: ()=>{
                    return '{bgFont|360次}'
                },
                rich:{
                    bgFont:{
                        textShadowColor:'#00A088',
                        textShadowBlur:10,
                        textShadowOffsetY:6,
                        color:'#FFCE8F',
                        fontSize:22,
                    }
                }
            },
            itemStyle:{
                color:'rgba(61,225,255,0.2)'
            }
        },
        {
            type: 'pie',
            radius:['62%','62.5%'],
            data: [1],
            labelLine:{
                show:false
            },
            itemStyle:{
                color:'rgba(61,225,255,1)'
            }
        },
        {
            type: 'pie',
            radius:['30%','60%'],
            center:['50%','50%'],
            data:[1,2],
            labelLine:{
                show:false
            }
        },
        {
            type: 'gauge',
            center: ['50%','50%'],
            radius:'39%',
            startAngle:0,
            endAngle:360,
            axisLine:{
                show:false
            },
            splitLine:{
                show:false
            },
            axisLabel:{
                show:false
            },
            axisTick:{
                lineStyle:{
                    color:'rgba(61,225,255,0.3)'
                }
            }
        }
    ]
};
