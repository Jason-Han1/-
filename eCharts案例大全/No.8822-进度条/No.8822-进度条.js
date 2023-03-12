option = {
    title: {
        text: '进度条'
    },
    xAxis: {
        type: 'value',
        axisTick:{show:false},
        axisLine:{show:false},
        splitLine:{show:false},
        axisLabel:{show:false}
    },
    yAxis: [{
        value: 'category',
        data:['a','b','c','d'],
        axisTick:{show:false},
        axisLine:{show:false},
        splitLine:{show:false},
        axisLabel:{show:false}
    },
    {
        value: 'category',
        data:['a','b','c','d'],
        axisTick:{show:false},
        axisLine:{show:false},
        splitLine:{show:false},
        axisLabel:{show:false}
    },
    {
        value: 'category',
        data:['a','b','c','d'],
        axisTick:{show:false},
        axisLine:{show:false},
        splitLine:{show:false}
    },
    {
        value: 'category',
        data:['a','b','c','d'],
        axisTick:{show:false},
        axisLine:{show:false},
        splitLine:{show:false},
        axisLabel:{
            formatter:function(value, index){
                return '标题 ' + (index + 1)
            },
            margin: 30
        }
    }],
    series: [
    {
        type: 'bar',
        barGap:'-100%',
        barWidth: 30,
        itemStyle:{
         normal:{
                color: 'red',
                opacity: 0.1
            }
        },
        data:[500, 500, 500, 500, 500, 500, 500],
        
    },
    {
        type: 'bar',
        barWidth: 30,
        barGap:'-100%',
        itemStyle:{
            normal:{
                color: 'red'
            }
            
        },
        data:[220, 182, 191, 234, 290, 330, 310]
    },]
};