option = {
    backgroundColor: "white",
    title: {
            text: '当前预警值',
            textStyle:{
                color: 'skyblue',
                fontSize:30
            },
            x:'center',
            y:'top',
            top: '3%'
    },
    tooltip : {
        formatter: "预警值: {c}"
    },
    series: [
        {
            name: '预警值',
            type: 'gauge',
            title:{
                color:'slategrey',
                fontSize:40,
                offsetCenter:[0,'70%']
            },
            detail: {
                formatter:'{value}',
                color:'skyblue'
                
            },
            data: [{value: 3.6, name: '轻度'}],
            axisLine:{
                show:false ,
                lineStyle:{
                    color: [
                    [1, new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                      {
                        offset: 0.33,
                        color: 'lightskyblue'
                      },
                      {
                        offset: 0.66,
                        color: '#e5e46e'
                      },
                      {
                        offset: 1,
                        color: 'darkorange'
                      }
                    ])]]
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
                show:false
            },
            pointer:{
                show:true
            },
            itemStyle:{
                color:'lightskyblue'
            }
        }
    ]
};


