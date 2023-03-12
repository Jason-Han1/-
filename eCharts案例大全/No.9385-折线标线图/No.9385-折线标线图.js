option = {
    backgroundColor:'#fff',
    tooltip: {
        trigger: 'axis'
    },
   
    xAxis:  {
        show:false,
        type: 'category',
        axisLabel:{
            color:'rgba(0,0,0,0.8)',
        },
        data: ['1','2','3','4','5','6','7']
    },
    yAxis: {
        show:false,
        type: 'value',
        axisLabel: {
            formatter: '{value}',
            color:'rgba(0,0,0,0.8)',
        }
    },
    series: [
        {
            name:'值',
            type:'line',
            lineStyle:{width:4},
            color:'#FF6C4B',
            data:[8, 17, 23, 13,18, 20, 16],
           
            markLine: {
                lineStyle:{width:2,color:"#CFCFCF"},
                 silent:true,//不响应触摸和点击
                label:{
                    show:false,
                },
                symbol:"none",//折线右侧展示图类型
                data: [
                    {type: 'average'}
                ]
            }
        }
    ]
}