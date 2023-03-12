let color = [{
    x:0,
    y:0,
    x2:0,
    y2:1,
    colorStops:[
        {
            offset:0,
            color:'#2B55FA'
        },
        {
            offset:0.5,
            color:'#2B55FA'
        },
        {
            offset:1,
            color:' #41EFFF'
        }
    ]
}, 'rgba(41,80,235,0.5)']
let title = '2021年目标进度'
data = [0,0]
option = {
    title:{
        text:title,
        left:'center',
        bottom:'5%',
        textStyle:{
            color:'#C5DCFF',
            fontSize:16,
        }
    },
    color,
    series: [
        {
            type: 'pie',
            radius: ['68%','69%'],
            center: ['50%', '50%'],
            data:[1],
            labelLine:{
                show:false
            },
            label:{
                show:true,
                position:'center',
                formatter: ()=>{
                    return '{bgFont|360}{unit|%}'
                },
                rich:{
                    bgFont:{
                        color:'#7EFAFC',
                        fontSize:30,
                    },
                    unit:{
                        fontSize:16,
                        color:'#7EFAFC'
                    }
                }
            },
            itemStyle:{
                color:'rgba(61,225,255,0.2)'
            }
        },
        {
            type: 'pie',
            radius:['63%','64%'],
            data: [1],
            labelLine:{
                show:false
            },
            itemStyle:{
                color:'rgba(61,225,255,0.5)'
            }
        },
        {
            type: 'pie',
            radius:['30%','60%'],
            center:['50%','50%'],
            data:data,
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
            detail:{
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
